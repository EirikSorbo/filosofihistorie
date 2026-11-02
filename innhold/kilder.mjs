// ============================================================================
//  KILDEHJELPERE FOR INNHOLDSFILENE (fase 6)
// ----------------------------------------------------------------------------
//  Samme form på alle kilder (JSON-OPPSKRIFT.md, «kilder[]»): nettkilder har
//  publikasjonen som tekst og artikkelen i lenken, bøker har hele referansen.
//  Alle lenker er sjekket på nettet før de ble skrevet inn (fase 6, PLAN.md).
//  Fila ligger utenfor rundemappene, så tools/bygg-innholdsfil.js ikke leser
//  den som en del.
// ============================================================================
const nett = (text) => (url, forfatter) => ({ text, ...(forfatter ? { forfatter } : {}), url, kategori: "Nettsteder" });

export const snl = nett("Store norske leksikon.");
export const nbl = nett("Norsk biografisk leksikon.");
export const sep = nett("Stanford Encyclopedia of Philosophy.");
export const iep = nett("Internet Encyclopedia of Philosophy.");
export const brit = nett("Encyclopædia Britannica.");
export const ndb = nett("Deutsche Biographie.");
export const lex = nett("Lex (Den Store Danske).");
export const side = (text, url) => ({ text, url, kategori: "Nettsteder" });
export const bok = (text) => ({ text, kategori: "Bøker" });

// Filosofkortet i kort form. Årstall er [fødsel, død] og [innflytelse fra, til];
// null utelater feltet (ukjent fødselsår, eller en filosof som lever).
const fjernTomme = (o) => Object.fromEntries(Object.entries(o).filter(([, v]) => v != null));
export const filosof = (metaGenre) => (name, [birthYear, deathYear], gender, [instrument, instrument2], mainGenre, subGenre, [influenceStart, influenceEnd], geography, description, keyWorks, kilder) => fjernTomme({
  name, birthYear, deathYear, gender, metaGenre, instrument, instrument2, mainGenre, subGenre, influenceStart, influenceEnd, geography, description,
  keyWorks: keyWorks.map(([title, year]) => fjernTomme({ title, year })), kilder,
});

// Epokekortet i kort form. `til` null betyr at epoken pågår.
export const epoke = (era, fra, til, description, samfunn, skole, kilder) => ({
  main: fjernTomme({ era, activeFrom: fra, activeTo: til, description, samfunn, skole, kilder }),
});

// Påvirkningen (streken i treet) i kort form.
export const strek = (description, kilder) => fjernTomme({ description, kilder });
