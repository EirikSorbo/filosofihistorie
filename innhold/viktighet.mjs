// ============================================================================
//  VIKTIGHETSGRADEN FOR FILOSOFENE — ett forslag, satt samlet for alle rundene
// ----------------------------------------------------------------------------
//  Bestilt av Eirik 2026-11-03. bygg-innholdsfil.js setter `priority` på hver
//  filosof ut fra listene under, og en filosof uten grad er en feil i bygget.
//  Graden sier hvor sentral filosofen er i et oversiktskurs på BA/MA, ikke hvor
//  god tenkningen er:
//
//    3  Viktigst        Navnene alle bør kunne etter kurset: de som bærer en
//                       epoke eller en hel tradisjon, og som står i nesten
//                       alle innføringer. Om lag én av seks.
//    2  Viktig          Sentrale i epoken sin: en grunnlegger, et hovedverk
//                       eller et begrep som brukes videre, og ofte pensum.
//    1  Mindre viktig   Resten: de som utdyper en epoke, viser bredden i den
//                       eller er så nye at ettertiden ikke har avgjort plassen.
//
//  Graden følger med bare når filosofen er ny i databasen. «Slå sammen»
//  sammenligner ikke graden, så en endring her når fram til kort som alt finnes
//  bare ved «Erstatt alle» (eller med stjernene på lærersiden).
// ============================================================================

const VIKTIGST = [
  // Antikken
  "Heraklit", "Parmenides", "Sokrates", "Platon", "Aristoteles", "Epikur",
  // Middelalderen
  "Augustin", "Thomas Aquinas",
  // Andre tradisjoner
  "Buddha", "Konfutse", "Laozi", "Ibn Sina", "Ibn Rushd", "Moses Maimonides",
  // 1500–1800
  "Niccolò Machiavelli", "René Descartes", "Thomas Hobbes", "Baruch Spinoza", "John Locke",
  "G.W. Leibniz", "David Hume", "Jean-Jacques Rousseau", "Immanuel Kant",
  // 1800-tallet
  "G.W.F. Hegel", "Søren Kierkegaard", "John Stuart Mill", "Karl Marx", "Friedrich Nietzsche",
  // 1900-tallet
  "Gottlob Frege", "Bertrand Russell", "Ludwig Wittgenstein", "Edmund Husserl", "Martin Heidegger",
  "Karl Popper", "Jean-Paul Sartre", "Simone de Beauvoir", "Hannah Arendt", "W.V.O. Quine",
  "John Rawls", "Thomas Kuhn", "Michel Foucault", "Jacques Derrida", "Jürgen Habermas",
];

const VIKTIG = [
  // Antikken
  "Thales", "Anaximander", "Pytagoras", "Zenon fra Elea", "Demokrit", "Protagoras",
  "Diogenes fra Sinope", "Pyrrhon", "Zenon fra Kition", "Krysippos", "Cicero", "Lukrets",
  "Seneca", "Epiktet", "Markus Aurelius", "Sextus Empiricus", "Plotin",
  // Middelalderen
  "Boethius", "Anselm av Canterbury", "Pierre Abélard", "Duns Scotus", "Vilhelm av Ockham",
  // Andre tradisjoner
  "Nagarjuna", "Shankara", "Mengzi", "Zhuangzi", "Zhu Xi", "Dogen", "al-Farabi", "al-Ghazali",
  "Nishida Kitaro", "Paulin Hountondji",
  // Renessansen og den nye vitenskapen
  "Petrarca", "Marsilio Ficino", "Pico della Mirandola", "Erasmus", "Martin Luther", "Jean Bodin",
  "Montaigne", "Nikolaus Kopernikus", "Francis Bacon", "Galileo Galilei", "Isaac Newton",
  // 1600- og 1700-tallet
  "Hugo Grotius", "Blaise Pascal", "Elisabeth av Böhmen", "George Berkeley", "Montesquieu",
  "Voltaire", "Denis Diderot", "Adam Smith", "Edmund Burke", "Jeremy Bentham",
  "Mary Wollstonecraft", "J.G. Herder",
  // 1800-tallet
  "J.G. Fichte", "F.W.J. Schelling", "F.D.E. Schleiermacher", "Arthur Schopenhauer",
  "Auguste Comte", "Alexis de Tocqueville", "Friedrich Engels", "Wilhelm Dilthey",
  "Franz Brentano", "Charles S. Peirce", "William James", "John Dewey",
  // 1900-tallet og vår tid
  "G.E. Moore", "Ferdinand de Saussure", "Ernst Cassirer", "Moritz Schlick", "Rudolf Carnap",
  "A.J. Ayer", "Martin Buber", "Antonio Gramsci", "Walter Benjamin", "Max Horkheimer",
  "Theodor W. Adorno", "Gilbert Ryle", "J.L. Austin", "Alan Turing", "Hans-Georg Gadamer",
  "Emmanuel Levinas", "Maurice Merleau-Ponty", "Albert Camus", "Claude Lévi-Strauss",
  "Roland Barthes", "Paul Ricœur", "Elizabeth Anscombe", "Philippa Foot", "Iris Murdoch",
  "Arne Næss", "Wilfrid Sellars", "Imre Lakatos", "Paul Feyerabend", "Frantz Fanon",
  "Donald Davidson", "Gilles Deleuze", "Jean-François Lyotard", "Alasdair MacIntyre",
  "Hilary Putnam", "Richard Rorty", "Charles Taylor", "Alvin Plantinga", "John Searle",
  "Robert Nozick", "Amartya Sen", "Edward Said", "Saul Kripke", "David Lewis", "Peter Singer",
  "Martha Nussbaum", "Judith Butler", "David Chalmers",
];

const MINDRE_VIKTIG = [
  // Antikken
  "Anaximenes", "Filolaos", "Arkytas", "Melissos", "Leukipp", "Gorgias", "Antisthenes",
  "Krates fra Theben", "Hipparkia fra Maroneia", "Spevsippos", "Xenokrates", "Theofrast",
  "Kleanthes", "Arkesilaos", "Karneades", "Polybios", "Alexander av Afrodisias",
  "Porfyr", "Iamblikhos", "Proklos", "Hypatia",
  // Middelalderen
  "Justin", "Klemens av Alexandria", "Origenes", "Eriugena", "Héloïse d'Argenteuil",
  "Hildegard av Bingen", "Albertus Magnus", "Bonaventura", "Roger Bacon", "Johannes Buridan",
  // Andre tradisjoner
  "Yajnavalkya", "Mozi", "Kumarajiva", "Zhiyi", "Huineng", "al-Kindi", "Saadia Gaon",
  "Ibn Gabirol", "Tanabe Hajime", "Nishitani Keiji", "Anton Wilhelm Amo", "Léopold Senghor",
  "Kwasi Wiredu",
  // Renessansen og reformasjonen
  "Christine de Pizan", "Nikolaus av Kues", "Lorenzo Valla", "Francesco Guicciardini",
  "Philipp Melanchthon", "Jean Calvin", "Francisco de Vitoria", "Luis de Molina",
  "Francisco Suárez",
  // 1600- og 1700-tallet
  "Herbert av Cherbury", "Margaret Cavendish", "Anne Conway", "Robert Boyle", "Samuel Pufendorf",
  "Nicolas Malebranche", "John Toland", "Matthew Tindal", "Shaftesbury", "Francis Hutcheson",
  "Émilie du Châtelet", "Condorcet", "Joseph de Maistre", "Benjamin Constant",
  // 1800-tallet
  "Novalis", "Friedrich Schlegel", "J.G. Droysen", "Harriet Taylor Mill", "Henry Sidgwick",
  "Ernst Mach", "Hermann Cohen", "Wilhelm Windelband", "Heinrich Rickert", "T.H. Green",
  "F.H. Bradley", "J.M.E. McTaggart", "Désiré Mercier",
  // 1900-tallet og vår tid
  "Rosa Luxemburg", "György Lukács", "Herbert Marcuse", "Max Scheler", "Edith Stein",
  "Karl Jaspers", "Franz Rosenzweig", "Gabriel Marcel", "Jacques Maritain", "Étienne Gilson",
  "Simone Weil", "Hans Jonas", "W.D. Ross", "Otto Neurath", "Susan Stebbing", "Jacques Lacan",
  "Louis Althusser", "P.F. Strawson", "R.M. Hare", "J.L. Mackie", "Mary Midgley",
  "Judith Jarvis Thomson", "William Alston", "Richard Swinburne", "David Armstrong",
  "Luce Irigaray", "Julia Kristeva", "Gayatri Spivak", "John McDowell", "Robert Brandom",
  "Paul Churchland", "Patricia Churchland", "Cornel West", "bell hooks", "Karen Barad",
  "Achille Mbembe", "Luciano Floridi", "Quentin Meillassoux", "Graham Harman", "Nick Bostrom",
];

// Navn → grad. Et navn i to lister er en feil (testen fanger det).
export const LISTER = { 3: VIKTIGST, 2: VIKTIG, 1: MINDRE_VIKTIG };
export default Object.fromEntries(
  Object.entries(LISTER).flatMap(([grad, navn]) => navn.map((n) => [n, Number(grad)])),
);
