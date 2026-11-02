// Filosofiske begreper (subGenre): felles tekster, brukt på filosofene i alle rundene (steg 7, skrevet av Opus 2026-11-02).
// «Se og les» bærer korte utdrag fra primærtekster i offentlig eie, oversatt til norsk for denne appen.
import { sep } from "../kilder.mjs";

const e = (slug) => sep(`https://plato.stanford.edu/entries/${slug}/`);
const b = (description, kilder, seOgLes) => ({ sub: { description, kilder, ...(seOgLes ? { seOgLes } : {}) } });
const utdrag = (tittel, kilde, tekst) => ({ tittel, kilde: `${kilde} Oversatt til norsk for denne appen.`, tekst });

export default {
  genreDescriptions: {
    sub: {
      "Arkhe": b(`
        Gresk ord for opphav, begynnelse eller grunnprinsipp. De første naturfilosofene spurte hva alt kommer fra og består av. Thales svarte vann, Anaximander det grenseløse, og Anaximenes luft. Det var ikke så mye svarene som spørsmålet som var nytt: Verdens mangfold skal kunne føres tilbake til noe felles og forklares uten gudene. Aristoteles leste dem som forløpere for sin egen lære om årsaker, og ordet brukes også om styre og makt, som i monarki og anarki.
      `, [e("presocratics")]),

      "Logos": b(`
        Gresk ord som kan bety ord, tale, regnskap, fornuft og begrunnelse. Hos Heraklit er det den orden som holder forandringen sammen. For stoikerne er *logos* den guddommelige fornuften som gjennomstrømmer naturen, og som mennesket kan leve i samsvar med. Johannesevangeliet åpner med at i begynnelsen var Ordet, og kirkefedrene knyttet Logos til Kristus. Ordet lever videre i «logikk» og endelser som «-logi». Heidegger og Derrida har kritisert det de ser som vestlig filosofis ensidige tillit til logos.
      `, [e("heraclitus"), e("stoicism")], [utdrag("Heraklit om logos", "Heraklit, fragment B50.", "Når dere har lyttet, ikke til meg, men til logos, er det klokt å være enig i at alt er ett.")]),

      "Dialektikk": b(`
        Kunsten å komme fram til innsikt gjennom motsetninger. Aristoteles kalte Zenon fra Elea dens oppfinner, Sokrates brukte den i samtaler, og Platon gjorde den til filosofiens høyeste metode. I middelalderen var den skolenes logikk. Kant så dialektikk som fornuftens feilslutninger. Hos Hegel er det virkeligheten selv som beveger seg gjennom motsigelser, til stadig rikere helheter. Marx overtok bevegelsen, men la den i materielle forhold. Adorno insisterte på en negativ dialektikk som ikke ender i noen forsoning. Læreboktriaden tese, antitese og syntese brukte ikke Hegel selv.
      `, [e("hegel-dialectics"), e("plato")]),

      "Ideene": b(`
        Platons lære om at de sanselige tingene bare har del i evige, uforanderlige former. Det finnes mange vakre ting, men bare én Skjønnhet i seg selv, og den er det som gjør dem vakre. Vi kan vite noe sikkert bare om ideene, og det gode er den høyeste av dem. Platon kritiserer læren selv i «Parmenides». Aristoteles avviste at formene finnes for seg, og lot dem være i tingene. Læren ligger bak senere debatter om universalier og matematiske objekter. Ordet «idé» har siden fått en helt annen betydning hos Locke og i vanlig språk.
      `, [e("plato"), e("plato-metaphysics")], [utdrag("Hulelignelsen", "Platon, Staten, 514a.", "Se for deg mennesker i en underjordisk hule, med en åpning mot lyset. De har vært der siden barndommen, med lenker om bein og nakke, slik at de bare kan se rett fram. Bak dem brenner et bål, og alt de ser, er skygger på veggen.")]),

      "Substans": b(`
        Det som står under og bærer egenskapene, og som kan eksistere for seg selv. Hos Aristoteles er den enkelte mann eller hest grunnleggende substans. Descartes skilte tenkende og utstrakt substans, Spinoza hevdet at det bare finnes én, og Leibniz så uendelig mange, monadene. Empiristene ble mistenksomme: Locke kalte den et jeg-vet-ikke-hva, Berkeley avviste materiell substans, og Hume avviste også den åndelige. I dag spør metafysikere om ting er bunter av egenskaper, eller om det må finnes noe de sitter på.
      `, [e("substance"), e("aristotle-metaphysics")]),

      "Universalier": b(`
        Det som kan være felles for flere ting, som rødhet eller menneskelighet. Finnes de i seg selv, slik Platon mente, i tingene, slik Aristoteles mente, eller bare i språket og tanken? Porfyr lot spørsmålet stå åpent, og Boethius oversatte ham til latin. Det ble middelalderens store strid. Realistene hevdet at de er virkelige, mens nominalister som Vilhelm av Ockham holdt at bare enkeltting finnes. Debatten er levende i dag hos filosofer som David Armstrong og Lewis, og handler også om matematikkens status.
      `, [e("properties"), e("universals-medieval")]),

      "Kropp og sjel": b(`
        Hvordan forholder det mentale seg til det fysiske? Platon så sjelen som fanget i kroppen, mens Aristoteles så den som kroppens form. Descartes gjorde skillet skarpt: to helt ulike substanser. Prinsesse Elisabeth av Böhmen spurte hvordan de da kunne virke på hverandre, og spørsmålet er aldri blitt besvart. Senere svar har vært materialisme, idealisme, funksjonalisme og eliminativisme. Merleau-Ponty hevdet at skillet selv er feil, for vi er kropper. Nå stiller kunstig intelligens spørsmålet på ny.
      `, [e("dualism"), e("physicalism")], [utdrag("Elisabeth spør Descartes", "Elisabeth av Böhmen, brev til Descartes, mai 1643.", "Jeg ber Dem fortelle meg hvordan menneskets sjel, som bare er en tenkende substans, kan bestemme kroppens livsånder til å utføre viljestyrte handlinger.")]),

      "Fri vilje": b(`
        Kan vi velge noe annet enn det vi gjør? Stoikerne hevdet at alt er bestemt, men at vi likevel er ansvarlige. Augustin måtte forklare hvordan ondskap kan komme av skapningens frie vilje, og Erasmus og Martin Luther strides om den i 1520-årene. Spinoza kalte friheten en illusjon, og Kant hevdet at den må forutsettes for moralen. Moderne debatter står mellom *kompatibilister*, som mener frihet går sammen med determinisme, og dem som benekter det. P.F. Strawson flyttet spørsmålet til våre reaksjoner på hverandre, og hjerneforskning har ført inn nye data.
      `, [e("freewill"), e("compatibilism")]),

      "Kausalitet": b(`
        Forholdet mellom årsak og virkning. Aristoteles skilte mellom fire slags årsaker, der stoff, form, drivkraft og formål alle forklarer noe. Den nye vitenskapen beholdt bare drivkraften. Al-Ghazali og Malebranche hevdet at Gud er eneste virkelige årsak. David Hume spurte hva vi egentlig ser: at én ting følger etter en annen, men aldri selve nødvendigheten. Kant svarte at årsak er en form vi selv bringer med oss. Senere analyser bruker lover, kontrafaktiske setninger og sannsynlighet, som hos David Lewis.
      `, [e("causation-metaphysics"), e("hume")]),

      "Gudsbevis": b(`
        Forsøk på å vise med fornuften at Gud finnes. Anselm av Canterbury hevdet at selve begrepet om det største tenkelige krever at det finnes. Thomas Aquinas ga fem veier, blant dem argumentene fra bevegelse og årsak. Ibn Sina argumenterte fra det nødvendige. Argumentet fra verdens innretning ble kritisert av David Hume, og Immanuel Kant mente at alle gudsbevis ender i det ontologiske, som er feil fordi eksistens ikke er en egenskap. Alvin Plantinga og Richard Swinburne har tatt spørsmålet opp igjen.
      `, [e("ontological-arguments"), e("cosmological-argument"), e("teleological-arguments")], [utdrag("Anselms definisjon", "Anselm av Canterbury, Proslogion, kapittel 2 (1078).", "Vi tror at du er noe som det ikke kan tenkes noe større enn. For det er større å finnes også i virkeligheten enn bare i forstanden.")]),

      "Det ondes problem": b(`
        Hvordan kan det finnes lidelse hvis Gud er god og allmektig? Epikur skal ha stilt spørsmålet først. Augustin svarte at det onde ikke er noe i seg selv, men en mangel på det gode, og at det kommer av fri vilje. G.W. Leibniz hevdet at dette er den beste av alle mulige verdener, noe Voltaire hånte etter jordskjelvet i Lisboa i 1755. David Hume og J.L. Mackie så her en motsigelse, og Alvin Plantinga svarte at fri vilje kan forklare den. For mange er problemet ikke bare logisk, men eksistensielt.
      `, [e("evil"), e("leibniz")], [utdrag("Epikurs gamle spørsmål", "David Hume, Dialogues Concerning Natural Religion, del 10 (1779).", "Er han villig til å hindre det onde, men ikke i stand til det? Da er han maktesløs. Er han i stand til det, men ikke villig? Da er han ond. Er han både i stand til det og villig? Hvor kommer da det onde fra?")]),

      "Væren": b(`
        Hva vil det si at noe er? Parmenides gjorde det til filosofiens første spørsmål, og Aristoteles kalte læren om det værende som værende for den første filosofi. Ibn Sina og Thomas Aquinas skilte mellom hva noe er, og at det er. Hegel lot rene væren falle sammen med intet. Martin Heidegger hevdet at filosofien har glemt spørsmålet ved å behandle væren som en ting blant ting. Analytiske filosofer, etter Kant og Quine, ser eksistens som noe logikken uttrykker. Dogen knyttet væren til tid.
      `, [e("heidegger"), e("existence")], [utdrag("Parmenides' påstand", "Parmenides, fragment B6.", "Det som kan sies og tenkes, må være. For det kan være, mens intet ikke kan det.")]),

      "Eudaimonia": b(`
        Gresk ord som ofte oversettes med lykke, men som heller betyr et vellykket og blomstrende liv. For Aristoteles er det det eneste vi søker for dets egen skyld, og det består i virksomhet i samsvar med dyd. Det er ikke en følelse, men et helt liv, så man kan vanskelig si om noen har det før de er døde. Hellenistiske skoler var uenige om hva det krever. Stoikerne sa dyd alene, og Epikur sa glede. Dydsetikken har gjort ordet aktuelt igjen.
      `, [e("aristotle-ethics"), e("ethics-virtue")], [utdrag("Det menneskelige gode", "Aristoteles, Den nikomakiske etikk, bok 1, kapittel 7.", "Det menneskelige gode viser seg å være sjelens virksomhet i samsvar med dyd, og om det er flere dyder, i samsvar med den beste og mest fullkomne, og dette i et fullt liv.")]),

      "Dyd": b(`
        En stabil karakteregenskap som gjør et menneske godt, som mot, måtehold og rettferdighet. Det greske ordet *arete* betyr dyktighet. Sokrates spurte om dyd kan læres, og Aristoteles beskrev den som en middelvei oppøvd gjennom vane. Kristne tenkere la til tro, håp og kjærlighet. Konfutse og Mengzi har en parallell tradisjon. Moderne etikk var lenge opptatt av regler og konsekvenser, men Elizabeth Anscombe og Philippa Foot førte dyden tilbake, og Iris Murdoch og Martha Nussbaum har utvidet feltet.
      `, [e("ethics-virtue"), e("aristotle-ethics")], [utdrag("Sokrates i retten", "Platon, Forsvarstalen, 38a.", "Det uprøvde liv er ikke verdt å leve for et menneske.")]),

      "Plikt": b(`
        Det vi må gjøre, uansett følger og lyster. Stoikerne og Cicero behandlet plikter ut fra menneskets naturlige plass. Hos Immanuel Kant er moralsk verdi knyttet til å handle av plikt, ikke bare i samsvar med den. Pliktetikk, eller *deontologi*, står mot utilitarismen: noe er galt selv om det gir gode følger, for eksempel å bruke et uskyldig menneske som middel. W.D. Ross pekte på at flere plikter kan stå mot hverandre, og at vi da må veie. Hans Jonas utvidet plikten til kommende generasjoner.
      `, [e("ethics-deontological"), e("kant-moral")]),

      "Det kategoriske imperativ": b(`
        Immanuel Kants grunnprinsipp for moral. Et hypotetisk imperativ sier hva jeg må gjøre for å nå et mål, men det kategoriske gjelder uansett. Formuleringen sier at jeg bare skal handle etter en regel jeg samtidig kan ville skal bli allmenn lov. En annen formulering sier at jeg alltid skal behandle mennesket også som mål, aldri bare som middel. Hegel kritiserte det for å være tomt, og Bernard Williams for å overse hvem vi er. Likevel har det formet tenkningen om menneskeverd og rettigheter.
      `, [e("kant-moral")], [utdrag("Formelen", "Immanuel Kant, Grunnlegging av moralens metafysikk (1785).", "Handle bare etter den maksime som du samtidig kan ville skal bli en allmenn lov.")]),

      "Nytteprinsippet": b(`
        Tanken om at det riktige er det som gir størst samlet lykke, der alle teller likt. Francis Hutcheson formulerte en tidlig versjon, og Jeremy Bentham gjorde den til utilitarismens kjerne. John Stuart Mill skilte mellom høyere og lavere nytelser. Sidgwick ga læren en grundig filosofisk form, og Peter Singer har tatt den med til dyr og global fattigdom. Mozi hadde lignende tanker i Kina. Kritikere spør om lykke kan måles, og om det ikke finnes noe som aldri må gjøres mot enkeltmennesker.
      `, [e("utilitarianism-history"), e("consequentialism")], [utdrag("Benthams åpning", "Jeremy Bentham, An Introduction to the Principles of Morals and Legislation, kapittel 1 (1789).", "Naturen har satt menneskeheten under to suverene herrer, smerte og lyst. De alene kan vise hva vi bør gjøre, og avgjøre hva vi kommer til å gjøre.")]),

      "Moralsk sans": b(`
        Tanken om at vi oppfatter rett og galt gjennom en slags følelse, ikke gjennom fornuften. Shaftesbury og Francis Hutcheson utviklet den mot Thomas Hobbes' egoisme. David Hume hevdet at moralen virker på handling, og at fornuften alene ikke kan gjøre det. Adam Smith gjorde sympati og den upartiske tilskueren til kjernen. Kant angrep hele tradisjonen, siden følelser ikke kan begrunne noe allment. Nyere moralpsykologi har gitt den ny aktualitet.
      `, [e("moral-sentimentalism"), e("scottish-18th")], [utdrag("Fornuftens plass", "David Hume, A Treatise of Human Nature, bok 2 (1739).", "Fornuften er, og bør bare være, lidenskapenes slave, og kan aldri gjøre krav på noen annen oppgave enn å tjene og adlyde dem.")]),

      "Ataraksi": b(`
        Gresk ord for sinnsro, å være fri for uro. Det er målet for både epikureere og skeptikere, men de mener forskjellige ting om veien. Epikur finner det i et enkelt liv uten frykt for guder og død. Skeptikerne kommer dit ved å holde dommen tilbake og opplever at roen kommer etterpå, slik skyggen følger et legeme. Stoikerne søkte en lignende *apatheia*. Slike idealer minner om buddhistisk tanke, og det er mulig at Pyrrhon møtte indiske vismenn.
      `, [e("epicurus"), e("skepticism-ancient")], [utdrag("Døden er ingenting for oss", "Epikur, Brev til Menoikevs.", "Det mest fryktede av alle onder, døden, er ingenting for oss. For når vi er, er døden ikke til stede, og når døden er til stede, er ikke vi.")]),

      "A priori og a posteriori": b(`
        Kunnskap er *a priori* hvis den kan vites uavhengig av erfaring, som at 2 + 2 = 4, og *a posteriori* hvis den bygger på erfaring. Rasjonalister og empirister strides om hvor mye som er a priori. Hume delte kunnskap i forhold mellom ideer og faktiske forhold. Immanuel Kant hevdet at det finnes syntetiske sannheter som er a priori, som i geometri og fysikk. W.V.O. Quine angrep skillet mellom analytisk og syntetisk, og Saul Kripke viste at det ikke må forveksles med skillet mellom nødvendig og kontingent.
      `, [e("apriori"), e("kant")], [utdrag("Kants hovedsetning", "Immanuel Kant, Kritikk av den rene fornuft, B75 (1787).", "Tanker uten innhold er tomme, anskuelser uten begreper er blinde.")]),

      "Tvil": b(`
        Filosofien har ofte begynt med tvil. Sokrates visste at han ikke visste, og antikkens skeptikere gjorde det til en livsform. Augustin hevdet at den som tviler, må finnes. René Descartes brukte tvilen som metode, inntil han fant noe som ikke lot seg betvile. David Hume viste hvor lite som står igjen. Skeptiske argumenter om sanseinntrykk, drømmer og en ond demon er aldri helt tilbakevist. Pragmatistene har spurt om tvil bør være et utgangspunkt, og Wittgenstein har hevdet at all tvil forutsetter noe som ikke betviles.
      `, [e("skepticism"), e("skepticism-ancient")], [utdrag("Descartes' faste punkt", "René Descartes, Meditationes de prima philosophia, 2. meditasjon (1641).", "Jeg er, jeg eksisterer, dette er nødvendigvis sant hver gang jeg sier det eller tenker det.")]),

      "Erfaring": b(`
        Forholdet mellom sansning og kunnskap har vært et av filosofiens sentrale spørsmål. Aristoteles så erfaringen som grunnlaget for all vitenskap. Empiristene hevdet at sinnet er et ubeskrevet ark, og Immanuel Kant at erfaring allerede er formet av oss selv. John Dewey og William James så den ikke som passive inntrykk, men som et samspill. Husserl og Merleau-Ponty beskrev erfaringen innenfra, og Wilfrid Sellars angrep ideen om at noe rent gitt kan begrunne en oppfatning.
      `, [e("rationalism-empiricism"), e("perception-problem")]),

      "Induksjon": b(`
        Å slutte fra observerte tilfeller til noe allment. Francis Bacon gjorde den til den nye vitenskapens metode. David Hume stilte det avgjørende spørsmålet: hva gir oss rett til å tro at framtiden vil ligne fortiden? Argumentet må enten være logisk, og det er det ikke, eller bygge på erfaring, og da går det i ring. Sextus Empiricus var inne på noe lignende. John Stuart Mill ga regler for god induksjon, og Karl Popper hevdet at vitenskapen ikke trenger den. Problemet er fortsatt ikke løst.
      `, [e("induction-problem"), e("hume")], [utdrag("Humes svar", "David Hume, An Enquiry Concerning Human Understanding, del 5 (1748).", "Alle slutninger fra erfaring er derfor virkninger av vane, ikke av resonnement.")]),

      "Sannhet": b(`
        Hva gjør en påstand sann? Korrespondanseteorien, som går tilbake til Aristoteles, sier at den stemmer med virkeligheten. Kohærensteorien hos F.H. Bradley ser sannhet som sammenheng i et system, mens pragmatister som William James lar den avhenge av hva som fungerer. Alfred Tarski ga en logisk definisjon. Nietzsche kalte sannheter illusjoner vi har glemt at er illusjoner, og Heidegger så den som avdekking. Protagoras' utsagn om at mennesket er alle tings målestokk, er det første tegnet på en relativistisk tanke.
      `, [e("truth"), e("truth-correspondence")]),

      "Fenomen og ting i seg selv": b(`
        Immanuel Kants skille mellom ting slik de framtrer for oss, og slik de er uavhengig av oss. Vi kan bare vite noe om det første, for rom, tid og kategorier er formene vi møter verden med. Skillet reiser mange spørsmål: kan vi i det hele tatt si at det finnes noe utenfor? Fichte, Schelling og Hegel forsøkte å bli kvitt det, mens Arthur Schopenhauer mente at tingen i seg selv er vilje. Quentin Meillassoux hevder at hele etterkantiansk filosofi er blitt fanget i dette skillet.
      `, [e("kant-transcendental-idealism"), e("kant")]),

      "Paradigme": b(`
        Thomas Kuhns ord for den felles ramme av eksempler, teorier og metoder som et vitenskapelig fellesskap arbeider innenfor. Normalvitenskap løser oppgaver innenfor rammen. Når avvik hoper seg opp, kan det komme en krise og et skifte, som fra Ptolemaios til Nikolaus Kopernikus. Paradigmer kan ikke måles fullt ut mot hverandre, hevdet han, og dette ble tatt til inntekt for relativisme. Kritikere påpekte at ordet brukes på over tjue måter i boken. Det har gått inn i vanlig språk.
      `, [e("thomas-kuhn"), e("scientific-revolutions")]),

      "Falsifikasjon": b(`
        Karl Poppers forslag til hva som skiller vitenskap fra annet. En teori er vitenskapelig hvis den forbyr noe, altså kan vise seg å være feil, og ingen mengde bekreftelser kan bevise den. Eksempelet er relativitetsteorien, som satte seg selv på prøve, til forskjell fra marxismen og psykoanalysen, som etter hans syn kunne forklare alt. Imre Lakatos og Thomas Kuhn viste at forskere i praksis ikke gir opp en teori ved første motbevis. Ideen er likevel blitt stående som et sentralt ideal.
      `, [e("popper"), e("lakatos")]),

      "Hermeneutisk sirkel": b(`
        Tanken om at vi bare kan forstå delene ut fra helheten, og helheten ut fra delene. F.D.E. Schleiermacher brukte den om tekster, og Wilhelm Dilthey om historien. Hos Martin Heidegger er sirkelen ikke en feil, men menneskets måte å være på: vi møter alltid verden med en forforståelse, og det gjelder å gå riktig inn i sirkelen. Hans-Georg Gadamer gjorde dette til grunnlag for en hel filosofi. Spørsmålet er om dette lar rom for å rette opp feil, slik Jürgen Habermas og andre har innvendt.
      `, [e("hermeneutics"), e("gadamer")]),

      "Intensjonalitet": b(`
        Bevissthetens egenskap av å være rettet mot noe: å tenke er å tenke på noe, å ønske er å ønske noe. Ordet stammer fra skolastikken og ble tatt opp igjen av Franz Brentano, som så det som kjennetegnet på det mentale. Edmund Husserl gjorde det til fenomenologiens utgangspunkt. Det er ikke det samme som å ha en intensjon om noe. I analytisk filosofi spør John Searle og andre om datamaskiner kan ha ekte intensjonalitet, eller om meningen bare tilskrives dem av oss.
      `, [e("intentionality"), e("brentano")]),

      "Bevissthet": b(`
        Den subjektive opplevelsen av å være til. Descartes så bevissthet som det mest sikre som finnes, og Hume fant ikke noe jeg bak inntrykkene. Husserl undersøkte hvordan den er bygd opp, og Sartre så den som en tomhet. I nyere tid har Thomas Nagel spurt hvordan det er å være en flaggermus, og David Chalmers skilt ut det «vanskelige problemet». Patricia Churchland mener vitenskapen vil løse det. Språkmodeller og dyreforskning har gjort spørsmålet praktisk: hvem eller hva kan egentlig oppleve noe?
      `, [e("consciousness"), e("qualia")]),

      "Autentisitet": b(`
        Å leve i samsvar med seg selv, og ikke bare slik andre forventer. Jean-Jacques Rousseau kan være kilden. Søren Kierkegaard krevde en personlig tilegnelse. Martin Heidegger skiller mellom å leve som alle, *das Man*, og å ta sin egen endelighet inn over seg. For Jean-Paul Sartre er det motsatte av *mauvaise foi*. Charles Taylor har forsvart idealet mot dets mer selvopptatte former, og Adorno kritiserte det som en ny sjargong. I dag står det sentralt i både reklame og identitetspolitikk.
      `, [e("authenticity"), e("existentialism")]),

      "Samfunnskontrakten": b(`
        Tanken om at statens makt hviler på en avtale, faktisk eller tenkt, mellom dem som lever under den. Thomas Hobbes tenkte seg folk som gir fra seg friheten for å komme ut av krigstilstanden. John Locke hevdet at avtalen kan brytes av herskeren. Jean-Jacques Rousseau ville ha en kontrakt som lar borgerne bli friere enn før. John Rawls tok tanken opp igjen som prøve på rettferdighet. Carole Pateman og Charles W. Mills har vist at kontrakten har utelatt kvinner og ikke-hvite.
      `, [e("contractarianism"), e("hobbes")], [utdrag("Hobbes om naturtilstanden", "Thomas Hobbes, Leviathan, kapittel 13 (1651).", "Og menneskets liv er ensomt, fattig, ekkelt, brutalt og kort."), utdrag("Rousseaus åpning", "Jean-Jacques Rousseau, Du contrat social, bok 1, kapittel 1 (1762).", "Mennesket er født fritt, og overalt ligger det i lenker.")]),

      "Naturrett": b(`
        Forestillingen om at det finnes en rett som gjelder for alle mennesker av natur, og som står over menneskers lover. Stoikerne og Cicero formulerte den, Thomas Aquinas gjorde den til en del av kristen moral, og Francisco de Vitoria brukte den om urfolks rettigheter. Hugo Grotius skilte den fra teologien, og John Locke knyttet den til rett til liv, frihet og eiendom. Jeremy Bentham kalte den tull på stylter. FNs menneskerettighetserklæring fra 1948 bærer et tydelig spor av tanken.
      `, [e("natural-law-ethics"), e("natural-law-theories")]),

      "Frihet": b(`
        Et av de mest omstridte begrepene i politikken. Benjamin Constant skilte mellom de gamles frihet til å delta og de modernes til å leve for seg selv. Isaiah Berlin skilte mellom negativ frihet, fravær av tvang, og positiv frihet, evnen til å styre seg selv. John Stuart Mill forsvarte den første, T.H. Green den andre. Republikanere som Quentin Skinner mener frihet er å ikke være underlagt andres vilje. Marx, Sartre og feministene har alle spurt hvem friheten egentlig gjelder for.
      `, [e("liberty-positive-negative"), e("republicanism")], [utdrag("Mills prinsipp", "John Stuart Mill, On Liberty, kapittel 1 (1859).", "Det eneste formålet som gir rett til å bruke makt mot et medlem av et sivilisert samfunn mot hans vilje, er å hindre skade på andre.")]),

      "Rettferdighet": b(`
        Hva skylder vi hverandre, og hvordan bør godene fordeles? Platon la spørsmålet til grunn for «Staten», og Aristoteles skilte mellom fordelende og utjevnende rettferdighet. Etter John Rawls er rettferdighet å velge bak et slør av uvitenhet. Robert Nozick svarte at det handler om hvordan noe er ervervet. Amartya Sen og Martha Nussbaum spør hva folk reelt kan gjøre. Feminister og postkoloniale tenkere har spurt hvem som har vært holdt utenfor. Klima og dyr utvider spørsmålet ytterligere.
      `, [e("justice"), e("rawls")]),

      "Makt": b(`
        Evnen til å få andre til å gjøre noe, eller noe mer enn det. Niccolò Machiavelli så den uten moralske briller, og Thomas Hobbes kalte den menneskets grunnleggende lyst. Karl Marx knyttet den til klasse, Antonio Gramsci til samtykke gjennom hegemoni, og Max Weber til legitimitet. Michel Foucault snudde spørsmålet: makt er ikke noe noen har, men noe som virker overalt, og den skaper like mye som den undertrykker. Hannah Arendt skilte skarpt mellom makt, som oppstår når folk handler sammen, og vold.
      `, [e("feminist-power"), e("foucault")]),

      "Fremmedgjøring": b(`
        Å stå fjernt fra noe som egentlig tilhører en selv. Jean-Jacques Rousseau og G.W.F. Hegel brukte tanken, Hegel om åndens vei gjennom det fremmede. Ludwig Feuerbach hevdet at religion er mennesket fremmedgjort fra seg selv. Hos den unge Karl Marx er arbeideren fremmed for produktet, arbeidet, de andre og sitt eget vesen. György Lukács og Frantz Fanon utviklet dette videre, og Adorno og Marcuse brukte det om forbrukersamfunnet. Marxister strides om begrepet overlever i det senere verket.
      `, [e("alienation"), e("marx")], [utdrag("Tese 11 om Feuerbach", "Karl Marx, Teser om Feuerbach (1845).", "Filosofene har bare tolket verden på forskjellige måter. Det det kommer an på, er å forandre den.")]),

      "Anerkjennelse": b(`
        Tanken om at vi blir selvbevisste og frie bare gjennom andres bekreftelse. J.G. Fichte formulerte den først, og G.W.F. Hegels avsnitt om herre og knekt ble selve grunnteksten. Frantz Fanon viste hva som skjer når anerkjennelse er umulig under kolonialisme. Axel Honneth har gjort begrepet til kjernen i kritisk teori, og Charles Taylor brukte det om multikulturalisme. Nancy Fraser har innvendt at omfordeling ikke må glemmes. Emmanuel Levinas og Martin Buber spør også hva møtet med den andre krever.
      `, [e("recognition"), e("hegel")], [utdrag("Selvbevisstheten", "G.W.F. Hegel, Åndens fenomenologi, § 178 (1807).", "Selvbevisstheten er i og for seg ved at og idet den er i og for seg for en annen. Det vil si: den er bare som noe anerkjent.")]),

      "Kjønn": b(`
        Filosofer har ofte sett kvinner som mindre fornuftige, fra Aristoteles til Rousseau. Mary Wollstonecraft og John Stuart Mill angrep dette. Simone de Beauvoir hevdet at man blir kvinne, og skillet mellom biologisk kjønn og sosialt kjønn ble feminismens redskap. Judith Butler hevdet at også det biologiske er formet av våre begreper, og at kjønn gjøres. bell hooks og andre viste at kjønn ikke kan tas opp uavhengig av rase og klasse. Debatten om transpersoner har de senere årene gitt spørsmålet ny skarphet.
      `, [e("feminism-gender"), e("feminist-philosophy")], [utdrag("Wollstonecrafts krav", "Mary Wollstonecraft, A Vindication of the Rights of Woman (1792).", "Jeg ønsker ikke at de skal ha makt over menn, men over seg selv.")]),

      "Kolonialitet": b(`
        Tanken om at koloniale maktforhold lever videre etter at koloniene har blitt selvstendige, også i kunnskap og tenkemåte. Ordet stammer fra Aníbal Quijano. Frantz Fanon viste hvordan koloniseringen setter seg i sinnet, Edward Said hvordan europeisk kunnskap skapte Orienten, og Gayatri Spivak spurte om de underordnede kan snakke. Kwasi Wiredu og Paulin Hountondji tok det inn i afrikansk filosofi. Spørsmålet rammer også filosofihistorien selv: hvorfor har vi lest den slik at den begynner i Hellas?
      `, [e("colonialism"), e("frantz-fanon")]),

      "Språkspill": b(`
        Ludwig Wittgensteins ord fra «Philosophische Untersuchungen». Språket er ikke ett system som avbilder verden, men mange ulike aktiviteter, knyttet til livsformer: å gi en ordre, fortelle en vits, be. Mening er bruk. Ord kan ikke få sin mening fra private indre erfaringer. Filosofiske problemer oppstår når språket går på ferie, fordi vi tar ord ut av den sammenhengen de hører hjemme i. Tanken har påvirket langt utover filosofien, også sosiologien. Jean-François Lyotard brukte begrepet i sin analyse av det postmoderne.
      `, [e("wittgenstein")]),

      "Mening og referanse": b(`
        Hva vil det si at et ord betyr noe? Gottlob Frege skilte mellom hva et uttrykk viser til og måten det er gitt på: Morgenstjernen og Aftenstjernen er samme planet, men har ulik mening. Bertrand Russell analyserte beskrivelser logisk. Ludwig Wittgenstein hevdet først at setninger avbilder fakta, og senere at mening er bruk. Saul Kripke hevdet at navn viser til samme ting i alle mulige verdener, og Hilary Putnam at mening ikke bare er i hodet. Saussure tok en annen vei, med språket som et system av forskjeller.
      `, [e("meaning"), e("frege"), e("reference")]),

      "Det skjønne og det sublime": b(`
        Platon og Plotin knyttet det skjønne til det gode. Edmund Burke skilte det fra det sublime, det overveldende og truende, som fjell og storm. Immanuel Kant hevdet at dommen om det skjønne er uinteressert, men gjør krav på å gjelde for alle, og at det sublime viser vår fornufts overlegenhet over naturen. Arthur Schopenhauer så kunsten som en pause fra viljen. Jean-François Lyotard har brukt det sublime for å forstå moderne kunst. Hume og Hutcheson spurte om smak kan være annet enn smak.
      `, [e("beauty"), e("aesthetic-concept"), e("kant-aesthetics")]),

      "Tomhet": b(`
        Buddhistisk begrep, *sunyata*: at ingen ting har en egen, uavhengig natur. Nagarjuna hevdet at alt oppstår i gjensidig avhengighet, og at dette er det samme som tomhet. Tomheten selv er også tom. Læren er ikke nihilisme, for tingene finnes, men ikke på den måten vi tror. Arthur Schopenhauer så noe lignende, og i Kyoto-skolen ble absolutt intethet et viktig begrep hos Nishida Kitaro og Nishitani Keiji. Den har også interessert moderne analytiske filosofer og fysikere.
      `, [e("madhyamaka"), e("kyoto-school")], [utdrag("Nagarjunas formel", "Nagarjuna, Mulamadhyamakakarika, 24:18.", "Det som oppstår i gjensidig avhengighet, kaller vi tomhet. Det er en betegnelse som er avhengig av noe, og det er selve midtveien.")]),

      "Dao": b(`
        Kinesisk ord for vei eller metode. For Konfutse er det den rette måten å leve og styre på. Daoistene Laozi og Zhuangzi gjør det til en virkelighet bak alt, som ikke kan uttrykkes med ord, og som vi bør følge uten tvang. I nykonfutsianismen hos Zhu Xi er det knyttet til prinsippet i tingene. Vestlige oversettere har forsøkt med «vei», «prinsipp» og til og med «Logos». Hva som er tapt i disse oversettelsene, er selv et filosofisk spørsmål.
      `, [e("daoism"), e("laozi")], [utdrag("Daodejing åpner", "Laozi, Daodejing, kapittel 1.", "Den dao som kan sies, er ikke den varige dao. Det navnet som kan nevnes, er ikke det varige navnet.")]),
    },
  },
};
