// Utvalgene i innhold/runde-6/utvalg.mjs (2026-11-05): hvert navn finnes i
// innholdet, så et utvalg aldri peker på et kort som ikke er der.
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { skjelettTre } from "../helpers/skjelett-tre.js";
import { sjekkInnholdsfil } from "../../tools/sjekk-innholdsfil.js";
import del from "../../innhold/runde-6/utvalg.mjs";

const innhold = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "innhold");
const filosofer = new Set();
const milepaeler = new Set();
const epokerFor = new Map();
for (const runde of fs.readdirSync(innhold).filter((d) => d.startsWith("runde-")).sort()) {
  for (const f of fs.readdirSync(path.join(innhold, runde)).filter((x) => x.endsWith(".mjs"))) {
    const d = (await import(pathToFileURL(path.join(innhold, runde, f)).href)).default;
    for (const a of d.artists || []) { filosofer.add(a.name); epokerFor.set(a.name, [].concat(a.mainGenre)); }
    for (const t of d.tech || []) milepaeler.add(t.name);
  }
}
const tre = skjelettTre();
const epoker = new Set(tre.nodes.map((n) => n.l));

test("hvert navn i utvalgene finnes i innholdet, og ingen står to ganger", () => {
  for (const [id, u] of Object.entries(del.utvalg)) {
    for (const [k, kjente] of [["filosofer", filosofer], ["epoker", epoker], ["milepaeler", milepaeler]]) {
      const liste = u[k] || [];
      assert.deepEqual(liste.filter((n) => !kjente.has(n)), [], `${id}: ${k} som ikke finnes`);
      assert.deepEqual(liste.filter((n, i) => liste.indexOf(n) !== i), [], `${id}: ${k} to ganger`);
    }
  }
});

test("hver filosof i Sofies verden har en epoke som også er i utvalget", () => {
  const sv = del.utvalg["sofies-verden"];
  const iUtvalg = new Set(sv.epoker);
  const utenEpoke = sv.filosofer.filter((n) => !epokerFor.get(n).some((e) => iUtvalg.has(e)));
  assert.deepEqual(utenEpoke, []);
});

test("validatoren godtar utvalgsfila og stopper en ukjent epoke", () => {
  const r = sjekkInnholdsfil(del, tre);
  assert.deepEqual(r.feil, []);
  assert.equal(r.tall.utvalg, 1);
  const feil = sjekkInnholdsfil({ utvalg: { "x": { navn: "X", epoker: ["Barokken"] }, "Ugyldig id": { navn: "" } } }, tre).feil;
  assert.ok(feil.some((m) => /epoken «Barokken» finnes ikke/.test(m)));
  assert.ok(feil.some((m) => /«Ugyldig id».*id-en/.test(m)));
  assert.ok(feil.some((m) => /«Ugyldig id».*mangler navn/.test(m)));
});
