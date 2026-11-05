// Utvalgene (js/felles/utvalg.js, brukerbestilling 2026-11-05): et navngitt
// utsnitt som «Sofies verden», ved siden av viktighetsgraden. Ett aktivt utvalg
// for appen, synlig for læreren alltid og for studentene når bryteren er på.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { SKJUL_I_STUDENTVISNING } from "../../js/felles/feature-flags.js";
import {
  lesUtvalg, brukUtvalg, alleUtvalg, aktivtUtvalg, aktivtUtvalgNavn, settUtvalg, settLaererside,
  utvalgSynlig, iUtvalg, epokeIUtvalg, milepaelIUtvalg, etterUtvalg, vedUtvalgEndring,
} from "../../js/felles/utvalg.js";

const les = (f) => readFileSync(new URL(`../../${f}`, import.meta.url), "utf8");
const lager = new Map();
globalThis.localStorage = {
  getItem: (k) => (lager.has(k) ? lager.get(k) : null),
  setItem: (k, v) => lager.set(k, String(v)),
  removeItem: (k) => lager.delete(k),
};

const DOK = {
  lister: {
    "sofies-verden": { navn: "Sofies verden", beskrivelse: "Romanen.", filosofer: ["Platon", "Søren Kierkegaard"], epoker: ["Platonismen"], milepaeler: ["Staten"] },
    tomt: { navn: "  ", filosofer: ["Platon"] },
  },
};
const A = (name) => ({ name, status: "active" });

test("lesUtvalg: navnene blir mengder med små bokstaver, og et utvalg uten navn hoppes over", () => {
  const u = lesUtvalg(DOK);
  assert.deepEqual(Object.keys(u), ["sofies-verden"]);
  assert.ok(u["sofies-verden"].filosofer.has("søren kierkegaard"));
  assert.deepEqual(lesUtvalg(null), {});
  assert.deepEqual(lesUtvalg({ lister: "x" }), {});
});

test("uten aktivt utvalg er alt med; med utvalg bare navnene i det", () => {
  settLaererside(true);
  try {
    brukUtvalg(DOK);
    settUtvalg("");
    assert.equal(aktivtUtvalg(), "");
    assert.ok(iUtvalg(A("Kant")) && epokeIUtvalg("Kantianismen") && milepaelIUtvalg({ name: "Kapitalen" }));
    settUtvalg("sofies-verden");
    assert.equal(lager.get("pensum-utvalg"), "sofies-verden", "lagres");
    assert.equal(aktivtUtvalgNavn(), "Sofies verden");
    assert.deepEqual(etterUtvalg([A("Platon"), A("Kant"), A("søren kierkegaard")]).map((a) => a.name), ["Platon", "søren kierkegaard"]);
    assert.equal(epokeIUtvalg("Platonismen"), true);
    assert.equal(epokeIUtvalg("Kantianismen"), false);
    assert.equal(milepaelIUtvalg({ name: "Staten" }), true);
    assert.equal(milepaelIUtvalg({ name: "Kapitalen" }), false);
    settUtvalg("finnes-ikke");
    assert.equal(lager.has("pensum-utvalg"), false, "et ukjent utvalg slår av");
  } finally {
    settUtvalg("");
    settLaererside(false);
  }
});

test("utvalget gjelder bare når det er synlig: læreren alltid, studentene når bryteren er på", () => {
  const gml = SKJUL_I_STUDENTVISNING.utvalg;
  try {
    assert.equal(gml, true, "skjult for studentene til læreren slår det på");
    brukUtvalg(DOK);
    settLaererside(true);
    settUtvalg("sofies-verden");
    settLaererside(false);
    assert.equal(utvalgSynlig(), false);
    assert.equal(aktivtUtvalg(), "");
    assert.deepEqual(alleUtvalg(), []);
    assert.equal(etterUtvalg([A("Kant")]).length, 1);
    SKJUL_I_STUDENTVISNING.utvalg = false;
    assert.equal(aktivtUtvalg(), "sofies-verden");
    assert.deepEqual(alleUtvalg(), [{ id: "sofies-verden", navn: "Sofies verden", beskrivelse: "Romanen." }]);
  } finally {
    SKJUL_I_STUDENTVISNING.utvalg = gml;
    settLaererside(true);
    settUtvalg("");
    settLaererside(false);
  }
});

test("lytterne får id-en ved hver endring, også når et nytt utvalg lander", () => {
  settLaererside(true);
  const fikk = [];
  vedUtvalgEndring((id) => fikk.push(id));
  brukUtvalg({ lister: {} });
  brukUtvalg(DOK);
  brukUtvalg(DOK);   // samme innhold: ingen ny melding
  settUtvalg("sofies-verden");
  settUtvalg("");
  assert.deepEqual(fikk, ["", "", "sofies-verden", ""]);
  settLaererside(false);
});

test("utvalget er koblet inn der viktighetsnivået virker, og i treet og milepælene", () => {
  const ui = les("js/ui/ui.js");
  assert.match(ui, /list = etterUtvalg\(filterArtists\(list, filters\)\);/, "lærerlista og kortvisningen");
  assert.match(ui, /const genreArtists = etterNivaa\(etterUtvalg\(/, "epokens spilleliste");
  assert.equal((les("js/landing.js").match(/etterUtvalg\(filterArtists\(/g) || []).length, 2, "Filosofer-vinduet og utskriftslista");
  assert.match(les("js/data/shared-data.js"), /brukUtvalg\(raa\.content\.utvalg\);/);
  assert.match(les("js/sjangre/genealogy-bundled.js"), /classList\.toggle\("gx-utenfor"/);
  assert.match(les("js/utforsk/explore-tech.js"), /filter\(milepaelIUtvalg\)/);
  for (const [fil, id] of [["index.html", "sp-utvalg-bar"], ["teacher.html", "t-utvalg-bar"], ["tre.html", "gx-utvalg-bar"]]) {
    assert.match(les(fil), new RegExp(`id="${id}"`), fil);
  }
  for (const f of ["js/landing.js", "js/tre-page.js", "js/teacher.js"]) assert.match(les(f), /initUtvalgMerke\(\);/, f);
  assert.match(les("js/laerer/teacher-desk.js"), /\{ id: "utvalg", navn: "Utvalgene \(for eksempel Sofies verden\)", student: \["utvalg"\] \}/);
});
