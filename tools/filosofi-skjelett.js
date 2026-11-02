// ============================================================================
//  FILOSOFIENS SLEKTSTRE — SKJELETTET (steg 6, FORSLAG 2026-11-02)
// ----------------------------------------------------------------------------
//  Ren data: retningene, tidsrommene og epokene. Fila er ARBEIDSGRUNNLAG, ikke
//  fasit. Appen kjører på treet i Firestore (content/genealogy), og læreren
//  endrer det videre i tre-editoren. tools/lag-filosofi-skjelett.js bygger
//  importfila herfra.
//
//  Modellen (PLAN.md):
//    retning  = metasjanger i koden (g): farge og gruppe
//    epoke    = node i treet: perioden da en bestemt tenkning preget
//               filosofien. Hver epoke hører til ÉN retning.
//    p        = påvirkning (heltrukket strek fra en tidligere epoke)
//    rx       = motreaksjon (stiplet strek)
//    r        = rad = tidsrom (TIDSROM under)
//
//  Ingen grå røtter (vedtak): noder uten retning kan ikke tagges på filosofer,
//  og da ville Platon stått uten epoke. Ikke-vestlig filosofi samles derfor i
//  en vanlig retning, «Andre tradisjoner» (vedtak 2026-11-02), med strek inn i
//  vest der påvirkningen er reell.
//
//  `era` og `personer` følger IKKE med i importfila. De er notater til
//  tekstrundene (steg 7), og vises i widgeten bare for å forklare hva epoken
//  dekker.
//
//  Node-ID-ene kan aldri endres når treet først er importert: de er
//  dokument-ID-ene til koblingsbeskrivelsene (fra__til). Bare a-z og tall.
// ============================================================================

// Fargene treet og editoren kan velge mellom. Etiketten er fargens navn, ikke
// retningens: editorens fargevelger lister disse, og en retning som flyttes
// til en annen farge skal ikke se ut til å bytte navn. «gray» må finnes, koden
// faller tilbake på den (røtter og ukjent farge).
export const FAMILIES = {
  fiolett: { stroke: "#7c3aed", label: "Fiolett" },
  rav:     { stroke: "#d97706", label: "Rav" },
  blaa:    { stroke: "#3b82f6", label: "Blå" },
  oransje: { stroke: "#ea580c", label: "Oransje" },
  gronn:   { stroke: "#16a34a", label: "Grønn" },
  petrol:  { stroke: "#0d9488", label: "Petrol" },
  rosa:    { stroke: "#db2777", label: "Rosa" },
  rod:     { stroke: "#dc2626", label: "Rød" },
  skifer:  { stroke: "#334155", label: "Skifer" },
  oliven:  { stroke: "#4d7c0f", label: "Oliven" },
  gray:    { stroke: "#9bada1", label: "Grå (røtter)" },
};

// Retningene i faglig rekkefølge (metaOrderHint: lister, tidslinje). `kolonne`
// er plasseringen venstre mot høyre i treet, valgt så retningene som påvirker
// hverandre mest står ved siden av hverandre. Justeres i editoren.
export const RETNINGER = [
  { navn: "Natur og erfaring",     fam: "blaa",    kolonne: 2, beskrivelse: "Kunnskap fra naturen og sansene, fram til vitenskapsfilosofien" },
  { navn: "Fornuft og idé",        fam: "fiolett", kolonne: 4, beskrivelse: "Virkeligheten slik fornuften kan tenke den: Platon, rasjonalismen, Kant, Hegel" },
  { navn: "Det gode liv",          fam: "gronn",   kolonne: 0, beskrivelse: "Hvordan vi bør leve, fra Sokrates og Stoa til dagens etikk" },
  { navn: "Tro og fornuft",        fam: "rav",     kolonne: 3, beskrivelse: "Forholdet mellom Gud, tro og fornuft" },
  { navn: "Samfunn og makt",       fam: "rod",     kolonne: 5, beskrivelse: "Staten, friheten og rettferdigheten" },
  { navn: "Eksistens og tolkning", fam: "oransje", kolonne: 6, beskrivelse: "Mennesket som lever, forstår og tolker" },
  { navn: "Logikk og analyse",     fam: "petrol",  kolonne: 1, beskrivelse: "Den analytiske filosofien: logikk, språk og sinn" },
  { navn: "Andre tradisjoner",     fam: "skifer",  kolonne: 7, beskrivelse: "Oppsummerende epoker for filosofi utenfor den vestlige linja" },
];

// Tidsrommene (radene i treet). Ulik lengde med vilje: lange sprang i antikken
// og middelalderen, kortere der det skjer mest. `rad` er bare en lesehjelp her;
// i dokumentet er raden plassen i lista. År før Kristus er negative tall.
export const TIDSROM = [
  { rad: 0,  fra: -800, til: -450, etikett: "ca. 800–450 f.Kr.", navn: "Aksetiden" },
  { rad: 1,  fra: -450, til: -320, etikett: "450–320 f.Kr.",     navn: "Det klassiske Athen" },
  { rad: 2,  fra: -320, til: -30,  etikett: "320–30 f.Kr.",      navn: "Hellenismen" },
  { rad: 3,  fra: -30,  til: 500,  etikett: "30 f.Kr.–500",      navn: "Romertiden og senantikken" },
  { rad: 4,  fra: 500,  til: 1100, etikett: "500–1100",          navn: "Tidlig middelalder" },
  { rad: 5,  fra: 1100, til: 1300, etikett: "1100–1300",         navn: "Høymiddelalderen" },
  { rad: 6,  fra: 1300, til: 1520, etikett: "1300–1520",         navn: "Senmiddelalder og renessanse" },
  { rad: 7,  fra: 1520, til: 1600, etikett: "1520–1600",         navn: "Reformasjonstiden" },
  { rad: 8,  fra: 1600, til: 1690, etikett: "1600–1690",         navn: "Den vitenskapelige revolusjonen" },
  { rad: 9,  fra: 1690, til: 1780, etikett: "1690–1780",         navn: "Opplysningstiden" },
  { rad: 10, fra: 1780, til: 1830, etikett: "1780–1830",         navn: "Kant og romantikken" },
  { rad: 11, fra: 1830, til: 1880, etikett: "1830–1880" },
  { rad: 12, fra: 1880, til: 1920, etikett: "1880–1920" },
  { rad: 13, fra: 1920, til: 1945, etikett: "1920–1945" },
  { rad: 14, fra: 1945, til: 1970, etikett: "1945–1970" },
  { rad: 15, fra: 1970, til: 2000, etikett: "1970–2000" },
  { rad: 16, fra: 2000, til: null, etikett: "2000–i dag" },
];

// Epokene. l = etiketten i treet (identitet), f = fullt navn, g = retning,
// r = rad (tidsrom), p = påvirket av, rx = motreaksjon mot.
// yOffset (andel av raden) skyver en epoke ned når forelderen står i samme rad.
// ny: true = tradisjon Eirik ikke nevnte selv (bare en merkelapp i widgeten).
export const EPOKER = [
  // --- Natur og erfaring ---
  { id: "naturfilosofene", l: "Naturfilosofene", f: "De joniske naturfilosofene", g: "Natur og erfaring", r: 0, p: [],
    era: "ca. 600–430 f.Kr.", personer: "Thales, Anaximander, Anaximenes, Heraklit" },
  { id: "atomistene", l: "Atomistene", f: "Atomismen", g: "Natur og erfaring", r: 1, p: ["naturfilosofene", "eleatene"],
    era: "ca. 450–370 f.Kr.", personer: "Leukipp, Demokrit" },
  { id: "aristotelismen", l: "Aristotelismen", f: "Aristoteles og Lykeion", g: "Natur og erfaring", r: 1, yOffset: 0.8, p: ["platonismen", "naturfilosofene"],
    era: "335 f.Kr.–", personer: "Aristoteles, Theofrast, Alexander av Afrodisias" },
  { id: "nyvitenskap", l: "Den nye vitenskapen", f: "Den vitenskapelige revolusjonen", g: "Natur og erfaring", r: 8, p: ["atomistene", "senskolastikken"], rx: ["aristotelismen"],
    era: "1543–1687", personer: "Kopernikus, Galilei, Francis Bacon, Boyle, Newton" },
  { id: "empirismen", l: "Britisk empirisme", f: "Den britiske empirismen", g: "Natur og erfaring", r: 9, p: ["nyvitenskap"], rx: ["rasjonalismen"],
    era: "1689–1776", personer: "John Locke, George Berkeley, David Hume" },
  { id: "positivismen", l: "Positivismen", f: "Positivismen", g: "Natur og erfaring", r: 11, p: ["empirismen"],
    era: "ca. 1830–1900", personer: "Auguste Comte, John Stuart Mill, Ernst Mach" },
  { id: "pragmatismen", l: "Pragmatismen", f: "Pragmatismen", g: "Natur og erfaring", r: 12, p: ["empirismen", "kantianismen"],
    era: "1878–ca. 1950", personer: "Charles S. Peirce, William James, John Dewey" },
  { id: "vitenskapsfilosofi", l: "Vitenskapsfilosofien", f: "Vitenskapsfilosofien etter Wienerkretsen", g: "Natur og erfaring", r: 14, p: ["empirismen"], rx: ["logpositivisme"],
    era: "1934–1980-tallet", personer: "Karl Popper, Thomas Kuhn, Imre Lakatos, Paul Feyerabend" },
  { id: "naturalismen", l: "Naturalismen", f: "Den filosofiske naturalismen", g: "Natur og erfaring", r: 15, p: ["logpositivisme", "pragmatismen"],
    era: "ca. 1969–", personer: "W.V.O. Quine, Patricia Churchland, Paul Churchland" },
  { id: "nypragmatismen", l: "Nypragmatismen", f: "Nypragmatismen", g: "Natur og erfaring", r: 15, yOffset: 0.5, p: ["pragmatismen", "dagligspraak"],
    era: "ca. 1979–", personer: "Richard Rorty, Hilary Putnam, Cornel West" },

  // --- Fornuft og idé ---
  { id: "pytagoreerne", l: "Pytagoreerne", f: "Pytagoreerne", g: "Fornuft og idé", r: 0, p: [],
    era: "ca. 530–350 f.Kr.", personer: "Pytagoras, Filolaos, Arkytas" },
  { id: "eleatene", l: "Eleatene", f: "Eleatene", g: "Fornuft og idé", r: 0, yOffset: 0.5, p: [],
    era: "ca. 500–430 f.Kr.", personer: "Parmenides, Zenon fra Elea, Melissos" },
  { id: "platonismen", l: "Platonismen", f: "Platon og Akademiet", g: "Fornuft og idé", r: 1, yOffset: 0.5, p: ["pytagoreerne", "eleatene", "sokrates"],
    era: "ca. 387 f.Kr.–", personer: "Platon, Spevsippos, Xenokrates" },
  { id: "nyplatonismen", l: "Nyplatonismen", f: "Nyplatonismen", g: "Fornuft og idé", r: 3, p: ["platonismen"],
    era: "ca. 245–529", personer: "Plotin, Porfyr, Iamblikhos, Proklos" },
  { id: "renplatonismen", l: "Renessanseplatonismen", f: "Renessansens platonisme", g: "Fornuft og idé", r: 6, p: ["platonismen", "nyplatonismen"],
    era: "ca. 1440–1520", personer: "Nikolaus av Kues, Marsilio Ficino, Pico della Mirandola" },
  { id: "rasjonalismen", l: "Rasjonalismen", f: "Den kontinentale rasjonalismen", g: "Fornuft og idé", r: 8, yOffset: 0.5, p: ["renplatonismen", "nyvitenskap"], rx: ["annenskolastikk"],
    era: "1637–1716", personer: "René Descartes, Baruch Spinoza, G.W. Leibniz, Nicolas Malebranche" },
  { id: "kantianismen", l: "Kantianismen", f: "Kant og den kritiske filosofien", g: "Fornuft og idé", r: 10, p: ["rasjonalismen", "empirismen"],
    era: "1781–1804", personer: "Immanuel Kant" },
  { id: "tyskidealisme", l: "Tysk idealisme", f: "Den tyske idealismen", g: "Fornuft og idé", r: 10, yOffset: 0.5, p: ["kantianismen"],
    era: "1794–1831", personer: "J.G. Fichte, F.W.J. Schelling, G.W.F. Hegel" },
  { id: "nykantianismen", l: "Nykantianismen", f: "Nykantianismen", g: "Fornuft og idé", r: 12, p: ["kantianismen"],
    era: "ca. 1870–1933", personer: "Hermann Cohen, Wilhelm Windelband, Heinrich Rickert, Ernst Cassirer" },
  { id: "britiskidealisme", l: "Britisk idealisme", f: "Den britiske idealismen", g: "Fornuft og idé", r: 12, yOffset: 0.5, p: ["tyskidealisme"],
    era: "ca. 1865–1920", personer: "T.H. Green, F.H. Bradley, J.M.E. McTaggart" },
  { id: "pittsburgh", l: "Pittsburgh-skolen", f: "Pittsburgh-skolen og analytisk hegelianisme", g: "Fornuft og idé", r: 15, p: ["tyskidealisme", "dagligspraak"],
    era: "1956–", personer: "Wilfrid Sellars, John McDowell, Robert Brandom" },

  // --- Det gode liv ---
  { id: "sokrates", l: "Sofistene og Sokrates", f: "Sofistene og Sokrates", g: "Det gode liv", r: 1, p: ["naturfilosofene"],
    era: "ca. 450–399 f.Kr.", personer: "Protagoras, Gorgias, Sokrates" },
  { id: "kynikerne", l: "Kynikerne", f: "Kynikerne", g: "Det gode liv", r: 1, yOffset: 0.6, p: ["sokrates"],
    era: "ca. 400–300 f.Kr.", personer: "Antisthenes, Diogenes fra Sinope, Krates" },
  { id: "stoisismen", l: "Stoisismen", f: "Den greske Stoa", g: "Det gode liv", r: 2, p: ["kynikerne"],
    era: "ca. 300–50 f.Kr.", personer: "Zenon fra Kition, Kleanthes, Krysippos" },
  { id: "epikureismen", l: "Epikureismen", f: "Epikur og Hagen", g: "Det gode liv", r: 2, yOffset: 0.4, p: ["atomistene"],
    era: "ca. 306 f.Kr.–", personer: "Epikur, Lukrets" },
  { id: "skeptisismen", l: "Skeptisismen", f: "Pyrrhonismen og Akademiets skepsis", g: "Det gode liv", r: 2, yOffset: 0.7, p: ["sokrates"],
    era: "ca. 300 f.Kr.–200", personer: "Pyrrhon, Arkesilaos, Karneades, Sextus Empiricus" },
  { id: "romerskstoa", l: "Romersk stoisisme", f: "Den romerske Stoa", g: "Det gode liv", r: 3, p: ["stoisismen"],
    era: "ca. 50–180", personer: "Seneca, Epiktet, Markus Aurelius" },
  { id: "humanismen", l: "Renessansehumanismen", f: "Renessansehumanismen", g: "Det gode liv", r: 6, p: ["romerskstoa", "skeptisismen"], rx: ["hoyskolastikken"],
    era: "ca. 1350–1590", personer: "Petrarca, Lorenzo Valla, Erasmus, Montaigne" },
  { id: "moralsans", l: "Moralsansfilosofien", f: "Moralsansfilosofien", g: "Det gode liv", r: 9, yOffset: 0.5, p: ["humanismen", "empirismen"],
    era: "1711–1790", personer: "Shaftesbury, Francis Hutcheson, David Hume, Adam Smith" },
  { id: "utilitarismen", l: "Utilitarismen", f: "Utilitarismen", g: "Det gode liv", r: 11, p: ["moralsans"],
    era: "1789–1900", personer: "Jeremy Bentham, John Stuart Mill, Henry Sidgwick" },
  { id: "metaetikken", l: "Metaetikken", f: "Metaetikken", g: "Det gode liv", r: 13, p: ["utilitarismen", "logiskanalyse"],
    era: "1903–1980", personer: "G.E. Moore, W.D. Ross, A.J. Ayer, R.M. Hare, J.L. Mackie" },
  { id: "dydsetikken", l: "Dydsetikken", f: "Dydsetikkens gjenkomst", g: "Det gode liv", r: 14, p: ["aristotelismen"], rx: ["utilitarismen"],
    era: "1958–", personer: "Elizabeth Anscombe, Philippa Foot, Alasdair MacIntyre" },
  { id: "anvendtetikk", l: "Anvendt etikk", f: "Anvendt etikk", g: "Det gode liv", r: 15, p: ["utilitarismen", "dydsetikken"],
    era: "ca. 1970–", personer: "Peter Singer, Judith Jarvis Thomson, Arne Næss, Hans Jonas" },

  // --- Tro og fornuft ---
  { id: "patristikken", l: "Patristikken", f: "Kirkefedrene og patristikken", g: "Tro og fornuft", r: 3, yOffset: 0.6, p: ["platonismen", "stoisismen", "nyplatonismen"],
    era: "ca. 150–430", personer: "Justin, Klemens av Alexandria, Origenes, Augustin" },
  { id: "tidligskolastikk", l: "Tidlig skolastikk", f: "Fra Boethius til Abélard", g: "Tro og fornuft", r: 4, p: ["patristikken", "nyplatonismen"],
    era: "ca. 500–1150", personer: "Boethius, Eriugena, Anselm av Canterbury, Pierre Abélard" },
  { id: "hoyskolastikken", l: "Høyskolastikken", f: "Høyskolastikken", g: "Tro og fornuft", r: 5, yOffset: 0.5, p: ["tidligskolastikk", "aristotelismen", "islamsk", "jodisk"],
    era: "ca. 1200–1300", personer: "Albertus Magnus, Thomas Aquinas, Bonaventura, Roger Bacon" },
  { id: "senskolastikken", l: "Senskolastikken", f: "Senskolastikk og nominalisme", g: "Tro og fornuft", r: 6, p: ["hoyskolastikken"],
    era: "ca. 1290–1400", personer: "Duns Scotus, Vilhelm av Ockham, Johannes Buridan" },
  { id: "reformasjonen", l: "Reformasjonen", f: "Reformasjonens teologi og filosofikritikk", g: "Tro og fornuft", r: 7, p: ["senskolastikken", "humanismen", "patristikken"], rx: ["hoyskolastikken"],
    era: "1517–1600", personer: "Martin Luther, Philipp Melanchthon, Jean Calvin" },
  { id: "annenskolastikk", l: "Annen skolastikk", f: "Den annen skolastikk", g: "Tro og fornuft", r: 7, yOffset: 0.5, p: ["hoyskolastikken"], rx: ["reformasjonen"],
    era: "ca. 1520–1620", personer: "Francisco de Vitoria, Luis de Molina, Francisco Suárez" },
  { id: "deismen", l: "Deismen", f: "Deismen og religionskritikken", g: "Tro og fornuft", r: 9, p: ["rasjonalismen", "reformasjonen"],
    era: "ca. 1624–1780", personer: "Herbert av Cherbury, John Toland, Matthew Tindal, Voltaire" },
  { id: "nythomismen", l: "Nythomismen", f: "Nythomismen", g: "Tro og fornuft", r: 12, p: ["hoyskolastikken"], rx: ["positivismen"],
    era: "1879–1960-tallet", personer: "Désiré Mercier, Jacques Maritain, Étienne Gilson" },
  { id: "dialogfilosofien", l: "Dialogfilosofien", f: "Dialogfilosofien", g: "Tro og fornuft", r: 13, p: ["nykantianismen", "eksistenstenkning"],
    era: "ca. 1921–1960", personer: "Franz Rosenzweig, Martin Buber, Gabriel Marcel" },
  { id: "nyreligionsfilosofi", l: "Ny religionsfilosofi", f: "Analytisk religionsfilosofi", g: "Tro og fornuft", r: 15, p: ["dagligspraak", "hoyskolastikken"],
    era: "ca. 1967–", personer: "Alvin Plantinga, Richard Swinburne, William Alston" },

  // --- Samfunn og makt ---
  { id: "romerskrepublikk", l: "Romersk republikanisme", f: "Romersk republikanisme", g: "Samfunn og makt", r: 2, p: ["aristotelismen", "platonismen"],
    era: "ca. 150–43 f.Kr.", personer: "Polybios, Cicero" },
  { id: "politiskrealisme", l: "Politisk realisme", f: "Machiavelli og den politiske realismen", g: "Samfunn og makt", r: 7, p: ["romerskrepublikk"],
    era: "1513–1576", personer: "Niccolò Machiavelli, Francesco Guicciardini, Jean Bodin" },
  { id: "kontraktsteori", l: "Kontraktsteoriene", f: "Naturrett og kontraktsteori", g: "Samfunn og makt", r: 8, p: ["politiskrealisme", "annenskolastikk"],
    era: "1625–1762", personer: "Hugo Grotius, Thomas Hobbes, John Locke, Jean-Jacques Rousseau" },
  { id: "opplysningen", l: "Opplysningsfilosofien", f: "Opplysningsfilosofien", g: "Samfunn og makt", r: 9, yOffset: 0.5, p: ["kontraktsteori", "empirismen", "rasjonalismen"],
    era: "ca. 1715–1795", personer: "Montesquieu, Voltaire, Denis Diderot, Mary Wollstonecraft" },
  { id: "konservatismen", l: "Konservatismen", f: "Den politiske konservatismen", g: "Samfunn og makt", r: 10, p: [], rx: ["opplysningen"],
    era: "1790–1830", personer: "Edmund Burke, Joseph de Maistre" },
  { id: "liberalismen", l: "Liberalismen", f: "Den klassiske liberalismen", g: "Samfunn og makt", r: 11, p: ["opplysningen", "kontraktsteori"],
    era: "ca. 1815–1880", personer: "Benjamin Constant, Alexis de Tocqueville, John Stuart Mill, Harriet Taylor Mill" },
  { id: "marxismen", l: "Marxismen", f: "Marxismen", g: "Samfunn og makt", r: 11, yOffset: 0.5, p: ["tyskidealisme"], rx: ["liberalismen"],
    era: "1844–", personer: "Karl Marx, Friedrich Engels, Rosa Luxemburg, Antonio Gramsci" },
  { id: "kritiskteori", l: "Kritisk teori", f: "Frankfurterskolens kritiske teori", g: "Samfunn og makt", r: 13, p: ["marxismen", "tyskidealisme"], rx: ["logpositivisme"],
    era: "1923–", personer: "Max Horkheimer, Theodor W. Adorno, Herbert Marcuse, Jürgen Habermas" },
  { id: "feministisk", l: "Feministisk filosofi", f: "Feministisk filosofi", g: "Samfunn og makt", r: 15, p: ["eksistensialismen", "marxismen"],
    era: "1949–", personer: "Simone de Beauvoir, Luce Irigaray, Judith Butler, bell hooks" },
  { id: "rettferdighet", l: "Rettferdighetsteoriene", f: "Rettferdighetsteoriene etter Rawls", g: "Samfunn og makt", r: 15, yOffset: 0.4, p: ["kontraktsteori", "utilitarismen", "liberalismen"],
    era: "1971–", personer: "John Rawls, Robert Nozick, Amartya Sen, Martha Nussbaum" },
  { id: "postkolonial", l: "Postkolonial filosofi", f: "Postkolonial og dekolonial filosofi", g: "Samfunn og makt", r: 15, yOffset: 0.8, p: ["eksistensialismen", "marxismen", "poststruktur"],
    era: "ca. 1952–", personer: "Frantz Fanon, Edward Said, Gayatri Spivak, Achille Mbembe" },

  // --- Eksistens og tolkning ---
  { id: "romantikken", l: "Romantikken", f: "Den tyske romantikken", g: "Eksistens og tolkning", r: 10, yOffset: 0.5, p: ["kantianismen"], rx: ["opplysningen"],
    era: "ca. 1770–1830", personer: "J.G. Herder, Novalis, Friedrich Schlegel, F.D.E. Schleiermacher" },
  { id: "eksistenstenkning", l: "Eksistenstenkningen", f: "Kierkegaard og eksistenstenkningen", g: "Eksistens og tolkning", r: 11, p: ["romantikken"], rx: ["tyskidealisme"],
    era: "1843–1855", personer: "Søren Kierkegaard" },
  { id: "viljesfilosofien", l: "Viljesfilosofien", f: "Schopenhauer og Nietzsche", g: "Eksistens og tolkning", r: 11, yOffset: 0.5, p: ["kantianismen", "indisk"], rx: ["tyskidealisme"],
    era: "1819–1889", personer: "Arthur Schopenhauer, Friedrich Nietzsche" },
  { id: "hermeneutikken", l: "Hermeneutikken", f: "Den tidlige hermeneutikken", g: "Eksistens og tolkning", r: 12, p: ["romantikken"],
    era: "ca. 1838–1911", personer: "F.D.E. Schleiermacher, J.G. Droysen, Wilhelm Dilthey" },
  { id: "fenomenologien", l: "Fenomenologien", f: "Fenomenologien", g: "Eksistens og tolkning", r: 12, yOffset: 0.5, p: ["kantianismen", "aristotelismen"], rx: ["positivismen"],
    era: "ca. 1874–1938", personer: "Franz Brentano, Edmund Husserl, Max Scheler, Edith Stein" },
  { id: "eksistensfilosofien", l: "Eksistensfilosofien", f: "Heidegger og eksistensfilosofien", g: "Eksistens og tolkning", r: 13, p: ["fenomenologien", "eksistenstenkning", "viljesfilosofien"],
    era: "ca. 1919–1950", personer: "Martin Heidegger, Karl Jaspers" },
  { id: "eksistensialismen", l: "Eksistensialismen", f: "Den franske eksistensialismen", g: "Eksistens og tolkning", r: 14, p: ["eksistensfilosofien"],
    era: "1943–1960-tallet", personer: "Jean-Paul Sartre, Simone de Beauvoir, Albert Camus, Maurice Merleau-Ponty" },
  { id: "strukturalismen", l: "Strukturalismen", f: "Strukturalismen", g: "Eksistens og tolkning", r: 14, yOffset: 0.5, p: ["marxismen"], rx: ["eksistensialismen"],
    era: "ca. 1949–1970", personer: "Claude Lévi-Strauss, Roland Barthes, Jacques Lacan, Louis Althusser" },
  { id: "filhermeneutikk", l: "Filosofisk hermeneutikk", f: "Filosofisk hermeneutikk", g: "Eksistens og tolkning", r: 14, yOffset: 0.8, p: ["hermeneutikken", "eksistensfilosofien"],
    era: "1960–", personer: "Hans-Georg Gadamer, Paul Ricœur, Charles Taylor" },
  { id: "poststruktur", l: "Poststrukturalismen", f: "Poststrukturalismen", g: "Eksistens og tolkning", r: 15, p: ["eksistensfilosofien", "viljesfilosofien"], rx: ["strukturalismen"],
    era: "1966–", personer: "Michel Foucault, Jacques Derrida, Gilles Deleuze, Julia Kristeva" },
  { id: "spekulativ", l: "Spekulativ realisme", f: "Spekulativ realisme og ny materialisme", g: "Eksistens og tolkning", r: 16, p: ["poststruktur"], rx: ["fenomenologien"],
    era: "2006–", personer: "Quentin Meillassoux, Graham Harman, Karen Barad" },

  // --- Logikk og analyse ---
  { id: "logiskanalyse", l: "Logisk analyse", f: "Frege, Russell og den logiske analysen", g: "Logikk og analyse", r: 12, p: ["rasjonalismen", "aristotelismen"], rx: ["britiskidealisme"],
    era: "1879–1921", personer: "Gottlob Frege, Bertrand Russell, G.E. Moore, Ludwig Wittgenstein" },
  { id: "logpositivisme", l: "Logisk positivisme", f: "Wienerkretsen og den logiske positivismen", g: "Logikk og analyse", r: 13, p: ["logiskanalyse", "positivismen"],
    era: "1924–1950", personer: "Moritz Schlick, Rudolf Carnap, Otto Neurath, A.J. Ayer" },
  { id: "dagligspraak", l: "Dagligspråksfilosofien", f: "Dagligspråksfilosofien", g: "Logikk og analyse", r: 14, p: ["logiskanalyse"], rx: ["logpositivisme"],
    era: "ca. 1945–1970", personer: "Ludwig Wittgenstein, Gilbert Ryle, J.L. Austin, P.F. Strawson" },
  { id: "sinnsfilosofien", l: "Sinnsfilosofien", f: "Sinnsfilosofien", g: "Logikk og analyse", r: 15, p: ["dagligspraak"],
    era: "ca. 1950–", personer: "Alan Turing, Hilary Putnam, John Searle, David Chalmers" },
  { id: "analytiskmetafysikk", l: "Analytisk metafysikk", f: "Analytisk metafysikk og språkfilosofi", g: "Logikk og analyse", r: 15, yOffset: 0.5, p: ["logiskanalyse"], rx: ["logpositivisme"],
    era: "ca. 1970–", personer: "Donald Davidson, Saul Kripke, David Lewis, David Armstrong" },
  { id: "kifilosofien", l: "KI-filosofien", f: "Filosofi om kunstig intelligens", g: "Logikk og analyse", r: 16, p: ["sinnsfilosofien", "naturalismen"],
    era: "ca. 2000–", personer: "Luciano Floridi, Nick Bostrom, David Chalmers" },

  // --- Andre tradisjoner ---
  { id: "indisk", l: "Indisk filosofi", f: "Indisk filosofi", g: "Andre tradisjoner", r: 0, p: [],
    era: "ca. 800 f.Kr.–", personer: "Upanishadene, Buddha, Nagarjuna, Shankara" },
  { id: "kinesisk", l: "Kinesisk filosofi", f: "Kinesisk filosofi", g: "Andre tradisjoner", r: 0, yOffset: 0.5, p: [],
    era: "ca. 500 f.Kr.–", personer: "Konfutse, Laozi, Mengzi, Zhuangzi, Zhu Xi" },
  { id: "buddhisme", l: "Buddhisme i Øst-Asia", f: "Buddhistisk filosofi i Øst-Asia", g: "Andre tradisjoner", r: 4, p: ["indisk", "kinesisk"],
    era: "ca. 400–1300", personer: "Kumarajiva, Zhiyi, Huineng, Dogen" },
  { id: "islamsk", l: "Islamsk og arabisk", f: "Islamsk og arabisk filosofi", g: "Andre tradisjoner", r: 4, yOffset: 0.5, p: ["aristotelismen", "nyplatonismen"],
    era: "ca. 800–1200", personer: "al-Kindi, al-Farabi, Ibn Sina, al-Ghazali, Ibn Rushd" },
  { id: "jodisk", l: "Jødisk filosofi", f: "Jødisk middelalderfilosofi", g: "Andre tradisjoner", r: 5, p: ["islamsk"], ny: true,
    era: "ca. 900–1200", personer: "Saadia Gaon, Ibn Gabirol, Moses Maimonides" },
  { id: "kyoto", l: "Kyoto-skolen", f: "Kyoto-skolen", g: "Andre tradisjoner", r: 13, p: ["buddhisme", "fenomenologien", "tyskidealisme"], ny: true,
    era: "ca. 1911–1970", personer: "Nishida Kitaro, Tanabe Hajime, Nishitani Keiji" },
  { id: "afrikansk", l: "Afrikansk filosofi", f: "Afrikansk filosofi", g: "Andre tradisjoner", r: 15, p: [], ny: true,
    era: "ca. 1945–", personer: "Léopold Senghor, Paulin Hountondji, Kwasi Wiredu" },
];
