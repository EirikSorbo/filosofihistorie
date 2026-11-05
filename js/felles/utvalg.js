// ============================================================================
//  UTVALGENE — et navngitt utsnitt av innholdet, som «Sofies verden»
// ----------------------------------------------------------------------------
//  Brukerbestilling 2026-11-05: en modus der bare det som er med i Jostein
//  Gaarders roman, kommer fram. Viktighetsgraden er en stige (hvert nivå tar med
//  nivåene over), mens et utvalg går på tvers av den, så utvalget er et eget
//  filter ved siden av graden, og de to kan kombineres.
//
//  Utvalgene ligger i content/utvalg:
//      { lister: { <id>: { navn, beskrivelse, filosofer: [navn], epoker:
//        [etikett], milepaeler: [navn] } }, updatedAt }
//  Alt står som NAVN, ikke id-er, så et utvalg overlever «Erstatt alle». Det
//  importeres fra innholdsfilene (innhold/runde-6/utvalg.mjs).
//
//  Som viktighetsnivået: ett aktivt utvalg for hele appen, lagret i
//  localStorage, med et merke i toppfeltet som slår det av. Det gjelder bare når
//  utvalgene er synlige: alltid for læreren, for studentene når bryteren
//  «Utvalgene» (Skrivebordet, «Synlig for studentene») er på.
//
//  Hvor det virker: filosoflistene og spillelistene (som viktighetsnivået),
//  Milepæler-vinduet, og slektstreet, der epokene utenfor utvalget blir grå i
//  stedet for å forsvinne (js/sjangre/genealogy-bundled.js).
// ============================================================================

import { SKJUL_I_STUDENTVISNING } from "./feature-flags.js";
import { getState } from "../data/app-state.js";
import { escapeHtml } from "./util.js";

const NOKKEL = "pensum-utvalg";
const MERKE_ID = "utvalg-merke";
const HENDELSE = "pensum:utvalg";
export const BOK_IKON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4h6a4 4 0 014 4v13a3 3 0 00-3-3H2z"/><path d="M22 4h-6a4 4 0 00-4 4v13a3 3 0 013-3h7z"/></svg>';

const smaa = (s) => String(s ?? "").trim().toLowerCase();
const navneliste = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === "string" && x.trim()) : []);

// Fra dokumentet til { id: { navn, beskrivelse, filosofer: Set, epoker: Set,
// milepaeler: Set } }. Ren funksjon (testet i utvalg.test.js). Et utvalg uten
// navn hoppes over.
export function lesUtvalg(doc) {
  const ut = {};
  const lister = doc && typeof doc === "object" ? doc.lister : null;
  if (!lister || typeof lister !== "object") return ut;
  for (const [id, l] of Object.entries(lister)) {
    if (!l || typeof l !== "object" || !String(l.navn || "").trim()) continue;
    ut[id] = {
      navn: String(l.navn).trim(),
      beskrivelse: String(l.beskrivelse || "").trim(),
      filosofer: new Set(navneliste(l.filosofer).map(smaa)),
      epoker: new Set(navneliste(l.epoker).map(smaa)),
      milepaeler: new Set(navneliste(l.milepaeler).map(smaa)),
    };
  }
  return ut;
}

let lister = {};
let signatur = "";

let laererside = false;
// Lærersiden ser alltid utvalgene (teacher.js kaller denne ved oppstart).
export function settLaererside(v = true) { laererside = !!v; }

export function utvalgSynlig() {
  return laererside || !!getState().isTeacher || !SKJUL_I_STUDENTVISNING.utvalg;
}

// Kalles av datalaget (shared-data.js) ved hvert innholds-snapshot.
export function brukUtvalg(doc) {
  const ny = JSON.stringify(doc?.lister || null);
  if (ny === signatur) return;
  signatur = ny;
  lister = lesUtvalg(doc);
  varsle();
}

// Utvalgene som kan velges nå, i rekkefølgen de står i dokumentet.
export function alleUtvalg() {
  if (!utvalgSynlig()) return [];
  return Object.entries(lister).map(([id, l]) => ({ id, navn: l.navn, beskrivelse: l.beskrivelse }));
}

function lagret() {
  try { return localStorage.getItem(NOKKEL) || ""; } catch (e) { return ""; }
}

// Id-en til utvalget som gjelder nå ("" = ingen).
export function aktivtUtvalg() {
  const id = lagret();
  return id && utvalgSynlig() && lister[id] ? id : "";
}

export function aktivtUtvalgNavn() {
  const id = aktivtUtvalg();
  return id ? lister[id].navn : "";
}

export function settUtvalg(id) {
  try {
    if (id && lister[id]) localStorage.setItem(NOKKEL, id);
    else localStorage.removeItem(NOKKEL);
  } catch (e) { /* uten lagring gjelder utvalget ikke */ }
  varsle();
}

// Er filosofen, epoken (etiketten i treet) eller milepælen med i det aktive
// utvalget? Uten aktivt utvalg er alt med.
export function iUtvalg(a) {
  const id = aktivtUtvalg();
  return !id || lister[id].filosofer.has(smaa(a?.name));
}
export function epokeIUtvalg(etikett) {
  const id = aktivtUtvalg();
  return !id || lister[id].epoker.has(smaa(etikett));
}
export function milepaelIUtvalg(t) {
  const id = aktivtUtvalg();
  return !id || lister[id].milepaeler.has(smaa(t?.name));
}

export function etterUtvalg(liste) {
  const l = liste || [];
  return aktivtUtvalg() ? l.filter(iUtvalg) : l;
}

// Lytteren får id-en til det aktive utvalget ved hver endring: knappene, en
// annen fane (storage), nye utvalg fra databasen og bryteren for synlighet.
const lyttere = new Set();
export function vedUtvalgEndring(f) { lyttere.add(f); }
function varsle() {
  oppdaterMerke();
  tegnAlleKnapper();
  const id = aktivtUtvalg();
  lyttere.forEach((f) => { try { f(id); } catch (e) { console.warn(e); } });
  if (typeof document !== "undefined") document.dispatchEvent(new CustomEvent(HENDELSE, { detail: { id } }));
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => { if (e.key === NOKKEL) varsle(); });
  document.addEventListener("pensum:synlighet", varsle);
}

// --- Knappene ved filtrene ------------------------------------------------------
//  En knapp per utvalg. Stedene som har knapper, registrerer elementet sitt her,
//  så alle tegnes på nytt når utvalgene eller det aktive utvalget endres.

const knappeplasser = new Set();

function tegnKnapper(el) {
  const valg = alleUtvalg();
  el.hidden = !valg.length;
  const aktiv = aktivtUtvalg();
  el.innerHTML = valg.map((u) => {
    const paa = u.id === aktiv;
    const tittel = `${paa ? "Slå av" : "Vis bare"} utvalget «${u.navn}»${u.beskrivelse ? `: ${u.beskrivelse}` : ""}`;
    return `<button type="button" class="utvalg-btn${paa ? " active" : ""}" data-utvalg="${escapeHtml(u.id)}" aria-pressed="${paa}" title="${escapeHtml(tittel)}">${BOK_IKON}<span>${escapeHtml(u.navn)}</span></button>`;
  }).join("");
}

function tegnAlleKnapper() {
  knappeplasser.forEach((el) => { if (el.isConnected) tegnKnapper(el); else knappeplasser.delete(el); });
}

export function initUtvalgKnapper(el) {
  if (!el || knappeplasser.has(el)) return;
  knappeplasser.add(el);
  el.addEventListener("click", (e) => {
    const id = e.target.closest("[data-utvalg]")?.dataset.utvalg;
    if (id) settUtvalg(aktivtUtvalg() === id ? "" : id);
  });
  tegnKnapper(el);
}

// --- Merket i toppfeltet ---------------------------------------------------------

export function initUtvalgMerke() {
  if (typeof document === "undefined") return;
  const wrap = document.querySelector(".topbar .wrap");
  if (!wrap || document.getElementById(MERKE_ID)) return oppdaterMerke();
  const knapp = document.createElement("button");
  knapp.type = "button";
  knapp.id = MERKE_ID;
  knapp.className = "utvalg-merke";
  knapp.hidden = true;
  knapp.addEventListener("click", () => settUtvalg(""));
  // Rett etter viktighetsmerket når det finnes, ellers foran ikonene.
  const nav = wrap.querySelector(".nav");
  wrap.insertBefore(knapp, nav || null);
  oppdaterMerke();
}

export function oppdaterMerke() {
  if (typeof document === "undefined") return;
  const el = document.getElementById(MERKE_ID);
  if (!el) return;
  const navn = aktivtUtvalgNavn();
  el.hidden = !navn;
  if (!navn) return;
  el.innerHTML = `${BOK_IKON}<span>${escapeHtml(navn)}</span>`;
  const tekst = `Utvalg: ${navn}. Gjelder filosoflistene, milepælene og slektstreet. Klikk for å slå av.`;
  el.title = tekst;
  el.setAttribute("aria-label", tekst);
}
