// Viktighetsgraden i innhold/viktighet.mjs (bestilt 2026-11-03): hver filosof i
// rundene har nøyaktig én grad, lista har ingen navn som ikke finnes, og
// bygget setter graden på kortet.
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import viktighet, { LISTER } from "../../innhold/viktighet.mjs";
import { slaaSammen } from "../../tools/bygg-innholdsfil.js";

const innhold = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "innhold");
const filosofer = [];
for (const runde of fs.readdirSync(innhold).filter((d) => d.startsWith("runde-")).sort()) {
  for (const f of fs.readdirSync(path.join(innhold, runde)).filter((x) => x.endsWith(".mjs"))) {
    const del = (await import(pathToFileURL(path.join(innhold, runde, f)).href)).default;
    for (const a of del.artists || []) filosofer.push(a.name);
  }
}

test("hver filosof har nøyaktig én viktighetsgrad, og lista har ingen ukjente navn", () => {
  const graderte = Object.values(LISTER).flat();
  assert.deepEqual(graderte.filter((n, i) => graderte.indexOf(n) !== i), [], "navn i to lister");
  assert.deepEqual(filosofer.filter((n) => !(n in viktighet)), [], "filosofer uten grad");
  const kjente = new Set(filosofer);
  assert.deepEqual(graderte.filter((n) => !kjente.has(n)), [], "navn som ikke er filosofer i rundene");
});

test("viktigst er et lite utvalg: om lag én av seks", () => {
  const andel = LISTER[3].length / filosofer.length;
  assert.ok(andel > 0.1 && andel < 0.25, `andelen viktigst er ${andel.toFixed(2)}`);
});

test("bygget setter graden på kortet, og en filosof uten grad er en feil", () => {
  const del = { artists: [{ name: "Platon" }, { name: "Ukjent Tenker" }] };
  const { fil, feil } = slaaSammen([["del.mjs", del]], { aar: 2026, viktighet });
  assert.equal(fil.artists.find((a) => a.name === "Platon").priority, 3);
  assert.equal(fil.artists.find((a) => a.name === "Ukjent Tenker").priority, 0);
  assert.ok(feil.some((m) => /«Ukjent Tenker».*ingen viktighetsgrad/.test(m)));
  assert.deepEqual(slaaSammen([["del.mjs", del]], { aar: 2026 }).feil, [], "uten gradfil er grad ikke påkrevd");
});
