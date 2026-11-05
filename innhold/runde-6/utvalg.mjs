// Runde 6: utvalgene (js/felles/utvalg.js), skrevet av Opus 2026-11-05.
// «Sofies verden» er filosofene, epokene og milepælene i Jostein Gaarders roman
// (1991), i den rekkefølgen Alberto Knox tar Sofie gjennom dem. Lista er satt
// etter hukommelsen av boka og bør sjekkes mot den. Navnene er de i appen:
// filosofene og milepælene som på kortene, epokene som etiketten i treet.
// Noe i boka har ingen plass her: kapitlet «Skjebnen» (Delfi, Hippokrates og
// Herodot) og kapitlet «To kulturkretser» (Jesus og Paulus).

export default {
  utvalg: {
    "sofies-verden": {
      navn: "Sofies verden",
      beskrivelse: "Filosofene, epokene og milepælene i Jostein Gaarders roman fra 1991.",
      filosofer: [
        // Naturfilosofene, Demokrit og Sokrates
        "Thales", "Anaximander", "Anaximenes", "Xenofanes", "Parmenides", "Heraklit", "Empedokles",
        "Anaxagoras", "Demokrit", "Protagoras", "Sokrates",
        // Platon, Aristoteles og hellenismen
        "Platon", "Aristoteles", "Antisthenes", "Diogenes fra Sinope", "Zenon fra Kition", "Cicero",
        "Seneca", "Markus Aurelius", "Epikur", "Plotin",
        // Middelalderen og renessansen
        "Augustin", "Thomas Aquinas", "Hildegard av Bingen", "Marsilio Ficino", "Nikolaus Kopernikus",
        "Giordano Bruno", "Johannes Kepler", "Galileo Galilei", "Francis Bacon", "Isaac Newton",
        "Martin Luther",
        // Barokken, rasjonalistene, empiristene og opplysningstiden
        "Thomas Hobbes", "René Descartes", "Baruch Spinoza", "John Locke", "David Hume",
        "George Berkeley", "Montesquieu", "Voltaire", "Jean-Jacques Rousseau", "Olympe de Gouges",
        // Kant, romantikken og 1800-tallet
        "Immanuel Kant", "J.G. Herder", "Novalis", "Friedrich Schlegel", "F.W.J. Schelling",
        "G.W.F. Hegel", "Søren Kierkegaard", "Karl Marx", "Friedrich Engels",
        // Vår egen tid (Beauvoir er den det er mest usikkert om)
        "Jean-Paul Sartre", "Simone de Beauvoir",
      ],
      epoker: [
        "Naturfilosofene", "Pytagoreerne og eleatene", "Sofistene og Sokrates", "Platonismen",
        "Aristotelismen", "Stoisismen", "Epikureismen", "Nyplatonismen", "Patristikken",
        "Skolastikken", "Renessansen", "Den nye vitenskapen", "Rasjonalismen", "Britisk empirisme",
        "Kontraktsteoriene", "Opplysningsfilosofien", "Kantianismen", "Romantikken", "Tysk idealisme",
        "Eksistenstenkningen", "Marxismen", "Eksistensialismen",
      ],
      milepaeler: [
        "Platons akademi", "Aristoteles' Lykeion", "Sokrates' rettssak", "Staten", "Epikurs hage",
        "Stoa Poikile", "Akademiet stenges", "Boktrykket", "Galileis rettssak", "Encyclopédie",
        "Kapitalen", "Om artenes opprinnelse", "Drømmetydning", "Le Deuxième Sexe",
      ],
    },
  },
};
