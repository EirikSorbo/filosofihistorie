#!/usr/bin/env node
// ============================================================================
//  FINN PEDAGOGIKKORD SOM STÅR IGJEN (steg 3)
// ----------------------------------------------------------------------------
//  Appen er kopiert fra pedagogikkappen (som igjen er kopiert fra
//  musikkhistorie-appen), og koden, filnavnene og databasenøklene beholdes
//  (PLAN.md). Det som skal byttes, er det brukerne SER. Dette skriptet leser
//  HTML-sidene og js/ og lister linjer med pedagogikkord, uten linjer som bare
//  er kommentarer, så lista er en arbeidsliste for synlige tekster og ikke
//  for kode.
//
//  Kjør:  node tools/finn-musikkord.js            (tall per fil)
//         node tools/finn-musikkord.js --detalj   (hver linje)
//         node tools/finn-musikkord.js js/ui      (bare en mappe eller fil)
//         node tools/finn-musikkord.js --musikk   (også musikkordene)
//
//  Treff i identifikatorer (artists, musicExamples, INSTRUMENT_GROUPS …) er
//  ikke synlige og hoppes over: ordet må stå i en streng eller i HTML-tekst.
//  Exit 0 alltid; skriptet er et hjelpemiddel, ikke en sperre.
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const detalj = args.includes("--detalj");
const mal = args.filter((a) => !a.startsWith("--"));

// Ordene som røper pedagogikkappen. Ordgrenser foran, så «reformasjon» og
// «reformator» ikke teller men «reformene» og «reformer» gjør det (se
// UNNTAK i tools/ordbytte.py).
const ORD = [
  "teoretiker", "pedagog(?!isk\\w* rekkefølg)", "reform(?!asjon|ator|pedag|ert|ere\\b|ist)", "læreplan", "oppdragelse", "prinsipp",
  "fagbakgrunn", "Dewey", "Rousseau", "Montessori", "Pestalozzi", "Fröbel",
];
// --musikk: sjekker også de gamle musikkordene (for filer som er hentet fra musikkappen).
if (args.includes("--musikk")) {
  ORD.push("artist", "musikk", "sjanger", "lytt", "spilleliste", "plateselskap", "innspilling", "album", "instrument", "tiår",
    "låt", "sang", "band\\b", "konsert", "innovasjon", "teknologi", "jazz", "blues", "rock", "hip-hop", "pop\\b", "gitar", "trommer", "vokal", "genre");
}
const RE = new RegExp(`(?:^|[^\\p{L}])(?:${ORD.join("|")})`, "iu");

// En linje er «synlig tekst» når ordet står i en streng eller i HTML mellom
// tagger. Kommentarer og rene kodelinjer hoppes over.
function erKommentar(l) {
  const t = l.trim();
  return t.startsWith("//") || t.startsWith("*") || t.startsWith("/*") || t.startsWith("<!--") || t.startsWith("//");
}
function synlig(l) {
  if (erKommentar(l)) return false;
  const utenKommentar = l.replace(/\/\/.*$/, "");
  // Kandidater: tekster i strenger og HTML mellom tagger. En kandidat teller
  // når den har mellomrom eller starter med stor bokstav (setning eller
  // etikett), ingen kodetegn, og ordet ikke står inntil - _ . : / = # (klasse,
  // nøkkel, filnavn). ${…} fjernes først.
  const tekster = [...utenKommentar.matchAll(/(["'`])((?:\\.|(?!\1)[^\\])*)\1/g)].map((m) => m[2])
    .concat([...utenKommentar.matchAll(/>([^<>]+)</g)].map((m) => m[1]));
  return tekster.some((t0) => {
    const t = t0.replace(/\$\{[^}]*\}/g, " ");
    if (/[={}#\[\]_<>]/.test(t) || !(/\s/.test(t.trim()) || /^\p{Lu}/u.test(t))) return false;
    const re = new RegExp(RE.source, "giu");
    for (const m of t.matchAll(re)) {
      const start = m.index + m[0].search(/\p{L}/u), slutt = m.index + m[0].length;
      const rundt = (t[start - 1] || "") + (t[slutt] || "");
      if (!/[-_.:/=]/.test(rundt)) return true;
    }
    return false;
  });
}

const filer = [];
function gaa(rel) {
  const abs = path.join(ROT, rel);
  const st = fs.statSync(abs);
  if (st.isDirectory()) {
    for (const e of fs.readdirSync(abs)) {
      if (e.startsWith(".") || e === "vendor" || e === "node_modules") continue;
      gaa(path.join(rel, e));
    }
  } else if (/\.(js|html)$/.test(rel)) filer.push(rel);
}
if (mal.length) mal.forEach(gaa);
else { gaa("js"); for (const h of fs.readdirSync(ROT)) if (h.endsWith(".html")) filer.push(h); }

let totalt = 0;
const perFil = [];
for (const f of filer.sort()) {
  const linjer = fs.readFileSync(path.join(ROT, f), "utf8").split("\n");
  const treff = [];
  linjer.forEach((l, i) => {
    if (/<script type="importmap">/.test(l)) return;
    if (RE.test(l) && synlig(l)) treff.push([i + 1, l.trim().slice(0, 150)]);
  });
  if (treff.length) { perFil.push([f, treff]); totalt += treff.length; }
}

perFil.sort((a, b) => b[1].length - a[1].length);
for (const [f, treff] of perFil) {
  console.log(`${String(treff.length).padStart(4)}  ${f}`);
  if (detalj) for (const [n, l] of treff) console.log(`        ${n}: ${l}`);
}
console.log(`\n${totalt} linjer med pedagogikkord i ${perFil.length} av ${filer.length} filer.`);
