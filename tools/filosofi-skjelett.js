// ============================================================================
//  FILOSOFIENS SLEKTSTRE — SKJELETTET (steg 6, FORSLAG 2026-11-02)
// ----------------------------------------------------------------------------
//  Ren data: retningene, tidsrommene og epokene. Fila er ARBEIDSGRUNNLAG, ikke
//  fasit. Forslaget hadde 78 epoker. Eirik ville ha et oversiktsbilde
//  (2026-11-03), så 26 mindre epoker i vestlig filosofi er slått inn i
//  naboene, og de grå i «Andre tradisjoner» står urørt. Appen kjører på treet i Firestore (content/genealogy), og læreren
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
  { rad: 15, fra: 1970, til: null, etikett: "1970–i dag" },
];

// Epokene. l = etiketten i treet (identitet), f = fullt navn, g = retning,
// r = rad (tidsrom), p = påvirket av, rx = motreaksjon mot.
// yOffset (andel av raden) skyver en epoke ned når forelderen står i samme rad.
// ny: true = tradisjon Eirik ikke nevnte selv (bare en merkelapp i widgeten).
export const EPOKER = [
  // --- Natur og erfaring ---
  { id: "naturfilosofene", l: "Naturfilosofene", f: "Naturfilosofene og atomistene", g: "Natur og erfaring", r: 0, p: [],
    era: "ca. 600–370 f.Kr.", personer: "Thales, Anaximander, Heraklit, Leukipp, Demokrit" },
  { id: "aristotelismen", l: "Aristotelismen", f: "Aristoteles og Lykeion", g: "Natur og erfaring", r: 1, yOffset: 0.8, p: ["platonismen", "naturfilosofene"],
    era: "335 f.Kr.–", personer: "Aristoteles, Theofrast, Alexander av Afrodisias" },
  { id: "nyvitenskap", l: "Den nye vitenskapen", f: "Den vitenskapelige revolusjonen", g: "Natur og erfaring", r: 8, p: ["naturfilosofene", "skolastikken"], rx: ["aristotelismen"],
    era: "1543–1687", personer: "Nikolaus Kopernikus, Galileo Galilei, Francis Bacon, Robert Boyle, Isaac Newton" },
  { id: "empirismen", l: "Britisk empirisme", f: "Den britiske empirismen", g: "Natur og erfaring", r: 9, p: ["nyvitenskap"], rx: ["rasjonalismen"],
    era: "1689–1776", personer: "John Locke, George Berkeley, David Hume" },
  { id: "positivismen", l: "Positivismen", f: "Positivismen", g: "Natur og erfaring", r: 11, p: ["empirismen"],
    era: "ca. 1830–1900", personer: "Auguste Comte, John Stuart Mill, Ernst Mach" },
  { id: "pragmatismen", l: "Pragmatismen", f: "Pragmatismen og nypragmatismen", g: "Natur og erfaring", r: 12, p: ["empirismen", "kantianismen"],
    era: "1878–", personer: "Charles S. Peirce, William James, John Dewey, Wilfrid Sellars, Richard Rorty, Robert Brandom" },
  { id: "vitenskapsfilosofi", l: "Vitenskapsfilosofien", f: "Vitenskapsfilosofien etter Wienerkretsen", g: "Natur og erfaring", r: 14, p: ["empirismen"], rx: ["logpositivisme"],
    era: "1934–", personer: "Karl Popper, W.V.O. Quine, Thomas Kuhn, Imre Lakatos, Paul Feyerabend" },

  // --- Fornuft og idé ---
  { id: "eleatene", l: "Pytagoreerne og eleatene", f: "Pytagoreerne og eleatene", g: "Fornuft og idé", r: 0, p: [],
    era: "ca. 530–350 f.Kr.", personer: "Pytagoras, Filolaos, Parmenides, Zenon fra Elea" },
  { id: "platonismen", l: "Platonismen", f: "Platon og Akademiet", g: "Fornuft og idé", r: 1, yOffset: 0.5, p: ["eleatene", "sokrates"],
    era: "ca. 387 f.Kr.–", personer: "Platon, Spevsippos, Xenokrates" },
  { id: "nyplatonismen", l: "Nyplatonismen", f: "Nyplatonismen", g: "Fornuft og idé", r: 3, p: ["platonismen"],
    era: "ca. 245–529", personer: "Plotin, Porfyr, Hypatia, Proklos" },
  { id: "rasjonalismen", l: "Rasjonalismen", f: "Den kontinentale rasjonalismen", g: "Fornuft og idé", r: 8, yOffset: 0.5, p: ["platonismen", "nyvitenskap"], rx: ["skolastikken"],
    era: "1637–1716", personer: "René Descartes, Baruch Spinoza, G.W. Leibniz, Nicolas Malebranche" },
  { id: "kantianismen", l: "Kantianismen", f: "Kant og nykantianismen", g: "Fornuft og idé", r: 10, p: ["rasjonalismen", "empirismen"],
    era: "1781–1933", personer: "Immanuel Kant, Hermann Cohen, Heinrich Rickert, Ernst Cassirer" },
  { id: "tyskidealisme", l: "Tysk idealisme", f: "Den tyske idealismen og hegelianismen", g: "Fornuft og idé", r: 10, yOffset: 0.5, p: ["kantianismen"],
    era: "1794–ca. 1920", personer: "J.G. Fichte, F.W.J. Schelling, G.W.F. Hegel, F.H. Bradley" },

  // --- Det gode liv ---
  { id: "sokrates", l: "Sofistene og Sokrates", f: "Sofistene, Sokrates og kynikerne", g: "Det gode liv", r: 1, p: ["naturfilosofene"],
    era: "ca. 450–300 f.Kr.", personer: "Protagoras, Gorgias, Sokrates, Diogenes fra Sinope" },
  { id: "stoisismen", l: "Stoisismen", f: "Stoa, fra Athen til Roma", g: "Det gode liv", r: 2, p: ["sokrates"],
    era: "ca. 300 f.Kr.–180", personer: "Zenon fra Kition, Krysippos, Seneca, Epiktet, Markus Aurelius" },
  { id: "epikureismen", l: "Epikureismen", f: "Epikur og Hagen", g: "Det gode liv", r: 2, p: ["naturfilosofene"],
    era: "ca. 306 f.Kr.–", personer: "Epikur, Lukrets" },
  { id: "skeptisismen", l: "Skeptisismen", f: "Pyrrhonismen og Akademiets skepsis", g: "Det gode liv", r: 2, p: ["sokrates"],
    era: "ca. 300 f.Kr.–200", personer: "Pyrrhon, Arkesilaos, Karneades, Sextus Empiricus" },
  { id: "renessansen", l: "Renessansen", f: "Renessansehumanismen og reformasjonen", g: "Det gode liv", r: 6, p: ["stoisismen", "skeptisismen", "nyplatonismen"], rx: ["skolastikken"],
    era: "ca. 1350–1600", personer: "Petrarca, Pico della Mirandola, Erasmus, Machiavelli, Martin Luther, Montaigne" },
  { id: "utilitarismen", l: "Utilitarismen", f: "Utilitarismen", g: "Det gode liv", r: 11, p: ["empirismen", "opplysningen"],
    era: "1789–1900", personer: "Jeremy Bentham, John Stuart Mill, Henry Sidgwick" },
  { id: "metaetikken", l: "Metaetikken", f: "Metaetikken", g: "Det gode liv", r: 13, p: ["utilitarismen", "logiskanalyse"],
    era: "1903–1980", personer: "G.E. Moore, W.D. Ross, A.J. Ayer, R.M. Hare, J.L. Mackie" },
  { id: "dydsetikken", l: "Dydsetikken", f: "Dydsetikkens gjenkomst", g: "Det gode liv", r: 14, p: ["aristotelismen"], rx: ["utilitarismen"],
    era: "1958–", personer: "Elizabeth Anscombe, Philippa Foot, Iris Murdoch, Alasdair MacIntyre" },
  { id: "anvendtetikk", l: "Anvendt etikk", f: "Anvendt etikk", g: "Det gode liv", r: 15, p: ["utilitarismen", "dydsetikken"],
    era: "ca. 1970–", personer: "Peter Singer, Judith Jarvis Thomson, Arne Næss, Hans Jonas" },

  // --- Tro og fornuft ---
  { id: "patristikken", l: "Patristikken", f: "Kirkefedrene og patristikken", g: "Tro og fornuft", r: 3, yOffset: 0.6, p: ["platonismen", "stoisismen", "nyplatonismen"],
    era: "ca. 150–430", personer: "Justin, Klemens av Alexandria, Origenes, Augustin" },
  { id: "skolastikken", l: "Skolastikken", f: "Skolastikken, fra Anselm til Ockham", g: "Tro og fornuft", r: 5, yOffset: 0.5, p: ["patristikken", "aristotelismen", "islamsk", "jodisk"],
    era: "ca. 1050–1400", personer: "Anselm av Canterbury, Pierre Abélard, Thomas Aquinas, Duns Scotus, Vilhelm av Ockham" },
  { id: "nyreligionsfilosofi", l: "Ny religionsfilosofi", f: "Religionsfilosofien etter 1900", g: "Tro og fornuft", r: 14, p: ["skolastikken", "eksistenstenkning"], rx: ["logpositivisme"],
    era: "ca. 1900–", personer: "Jacques Maritain, Martin Buber, Emmanuel Levinas, Simone Weil, Alvin Plantinga" },

  // --- Samfunn og makt ---
  { id: "kontraktsteori", l: "Kontraktsteoriene", f: "Naturrett og kontraktsteori", g: "Samfunn og makt", r: 8, p: ["renessansen", "skolastikken"],
    era: "1625–1762", personer: "Hugo Grotius, Thomas Hobbes, John Locke, Jean-Jacques Rousseau" },
  { id: "opplysningen", l: "Opplysningsfilosofien", f: "Opplysningsfilosofien", g: "Samfunn og makt", r: 9, yOffset: 0.5, p: ["kontraktsteori", "empirismen", "rasjonalismen"],
    era: "ca. 1715–1795", personer: "Montesquieu, Voltaire, Denis Diderot, Adam Smith, Mary Wollstonecraft" },
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
  { id: "rettferdighet", l: "Rettferdighetsteoriene", f: "Rettferdighetsteoriene etter Rawls", g: "Samfunn og makt", r: 15, p: ["kontraktsteori", "utilitarismen", "liberalismen"],
    era: "1971–", personer: "John Rawls, Robert Nozick, Amartya Sen, Martha Nussbaum" },
  { id: "postkolonial", l: "Postkolonial filosofi", f: "Postkolonial og dekolonial filosofi", g: "Samfunn og makt", r: 15, yOffset: 0.5, p: ["eksistensialismen", "marxismen", "poststruktur"],
    era: "ca. 1952–", personer: "Frantz Fanon, Edward Said, Gayatri Spivak, Achille Mbembe" },

  // --- Eksistens og tolkning ---
  { id: "romantikken", l: "Romantikken", f: "Den tyske romantikken", g: "Eksistens og tolkning", r: 10, yOffset: 0.5, p: ["kantianismen"], rx: ["opplysningen"],
    era: "ca. 1770–1830", personer: "J.G. Herder, Novalis, Friedrich Schlegel, F.D.E. Schleiermacher" },
  { id: "eksistenstenkning", l: "Eksistenstenkningen", f: "Kierkegaard, Schopenhauer og Nietzsche", g: "Eksistens og tolkning", r: 11, p: ["romantikken", "kantianismen", "indisk"], rx: ["tyskidealisme"],
    era: "1819–1889", personer: "Arthur Schopenhauer, Søren Kierkegaard, Friedrich Nietzsche" },
  { id: "fenomenologien", l: "Fenomenologien", f: "Fenomenologien fra Husserl til Heidegger", g: "Eksistens og tolkning", r: 12, p: ["kantianismen", "aristotelismen"], rx: ["positivismen"],
    era: "ca. 1874–1950", personer: "Franz Brentano, Edmund Husserl, Edith Stein, Martin Heidegger" },
  { id: "hermeneutikken", l: "Hermeneutikken", f: "Hermeneutikken fra Schleiermacher til Gadamer", g: "Eksistens og tolkning", r: 13, p: ["romantikken", "fenomenologien"],
    era: "ca. 1819–", personer: "F.D.E. Schleiermacher, Wilhelm Dilthey, Hans-Georg Gadamer, Paul Ricœur, Charles Taylor" },
  { id: "eksistensialismen", l: "Eksistensialismen", f: "Eksistensialismen", g: "Eksistens og tolkning", r: 14, p: ["fenomenologien", "eksistenstenkning"],
    era: "ca. 1930–1960-tallet", personer: "Karl Jaspers, Jean-Paul Sartre, Simone de Beauvoir, Albert Camus, Maurice Merleau-Ponty" },
  { id: "strukturalismen", l: "Strukturalismen", f: "Strukturalismen", g: "Eksistens og tolkning", r: 14, yOffset: 0.5, p: ["marxismen"], rx: ["eksistensialismen"],
    era: "ca. 1949–1970", personer: "Claude Lévi-Strauss, Roland Barthes, Jacques Lacan, Louis Althusser" },
  { id: "poststruktur", l: "Poststrukturalismen", f: "Poststrukturalismen og etterfølgerne", g: "Eksistens og tolkning", r: 15, p: ["fenomenologien", "eksistenstenkning"], rx: ["strukturalismen"],
    era: "1966–", personer: "Michel Foucault, Jacques Derrida, Gilles Deleuze, Julia Kristeva, Quentin Meillassoux" },

  // --- Logikk og analyse ---
  { id: "logiskanalyse", l: "Logisk analyse", f: "Frege, Russell og den logiske analysen", g: "Logikk og analyse", r: 12, p: ["rasjonalismen", "aristotelismen"], rx: ["tyskidealisme"],
    era: "1879–1921", personer: "Gottlob Frege, Bertrand Russell, G.E. Moore, Ludwig Wittgenstein" },
  { id: "logpositivisme", l: "Logisk positivisme", f: "Wienerkretsen og den logiske positivismen", g: "Logikk og analyse", r: 13, p: ["logiskanalyse", "positivismen"],
    era: "1924–1950", personer: "Moritz Schlick, Rudolf Carnap, Otto Neurath, A.J. Ayer" },
  { id: "sprakfilosofien", l: "Språkfilosofien", f: "Dagligspråksfilosofien og språkfilosofien etter 1945", g: "Logikk og analyse", r: 14, p: ["logiskanalyse"], rx: ["logpositivisme"],
    era: "ca. 1945–", personer: "Ludwig Wittgenstein, J.L. Austin, P.F. Strawson, Donald Davidson, Saul Kripke, David Lewis" },
  { id: "sinnsfilosofien", l: "Sinnsfilosofien", f: "Sinnsfilosofien og kunstig intelligens", g: "Logikk og analyse", r: 15, p: ["sprakfilosofien", "vitenskapsfilosofi"],
    era: "ca. 1950–", personer: "Alan Turing, Hilary Putnam, John Searle, David Chalmers, Nick Bostrom" },

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
