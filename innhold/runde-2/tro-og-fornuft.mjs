// Runde 2: Tro og fornuft. Retningen, epokene, filosofene og påvirkningene (steg 7, skrevet av Opus 2026-11-02).
import { sep, iep, snl, bok, filosof, epoke, strek } from "../kilder.mjs";

const R = "Tro og fornuft";
const f = filosof(R);
const SKOL = sep("https://plato.stanford.edu/entries/medieval-philosophy/");
const AUG = sep("https://plato.stanford.edu/entries/augustine/");
const AQ = sep("https://plato.stanford.edu/entries/aquinas/");
const PATRISTIK = bok("Stead, Christopher. Philosophy in Christian Antiquity. Cambridge University Press, 1994.");
const GILSON = bok("Gilson, Étienne. History of Christian Philosophy in the Middle Ages. Random House, 1955.");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler tradisjonen som spør hvordan det mennesket tror, forholder seg til det mennesket kan begrunne. Den begynner da kristne forfattere i senantikken møtte gresk filosofi, og går gjennom Augustin, skolastikken, reformasjonen og deismen til moderne religionsfilosofi. Mange av filosofiens grunnleggende begreper, som person, vilje, frihet og samvittighet, fikk sin form her. Tradisjonen må ikke leses som en parentes mellom antikken og Descartes: argumentene om universalier, Guds eksistens og viljens frihet er fortsatt i bruk. Men også kirken hadde makt til å forby, og det forholdet er del av historien.
          `,
          kilder: [SKOL, AQ],
        },
        story: {
          body: `
            ### Athen og Jerusalem
            «Hva har Athen med Jerusalem å gjøre?» spurte kirkefaderen Tertullian. Andre ga motsatt svar. Justin mente at Logos, som stoikerne hadde snakket om, var Kristus, og Klemens av Alexandria så filosofien som grekernes forberedelse til evangeliet. Origenes bygde det første store kristne tankesystemet. Augustin ga tradisjonen dens dypeste form: han var manikeer og skeptiker før nyplatonikerne viste ham veien til kristendommen. Hans analyse av vilje, tid, kjærlighet og synd har preget Vesten siden.

            ### Fra Boethius til Abélard
            Da Vestromerriket falt, var det særlig Boethius som berget en del av antikken. Hans oversettelser og «Filosofiens trøst» ble lest gjennom hele middelalderen. Eriugena var et ensomt lys, og først rundt 1100 fikk tenkningen en ny kraft. Anselm av Canterbury forsøkte å bevise Guds eksistens ut fra begrepet alene, og Pierre Abélard gjorde motstridende autoriteter til en metode. Det var begynnelsen på skolastikken: spørsmål og motargumenter, og tillit til at fornuften kan få orden på dem.

            ### Aristoteles kommer
            På 1100- og 1200-tallet ble Aristoteles oversatt til latin, med kommentarene fra Ibn Rushd og Ibn Sina. Her var et helt verdensbilde uten skapelse eller udødelig sjel. Universitetene i Paris og Oxford ble arenaer for striden. Thomas Aquinas viste hvordan fornuft og tro kan leve sammen uten å smelte sammen. Så kom motreaksjonen: Fordømmelsene i Paris i 1277 rammet noen av de samme lærene, og Duns Scotus og Vilhelm av Ockham la vekt på Guds frihet og det enkeltståendes forrang.

            ### Brudd og fornyelse
            Martin Luther angrep Aristoteles som kristendommens fiende og satte Skriften og troen over fornuften, mens Erasmus forsvarte den frie vilje. På katolsk side fornyet Francisco Suárez skolastikken, og verkene hans ble lest ved protestantiske universiteter også. Blaise Pascal skrev om fornuftens grenser og hjertets grunner, midt i den vitenskapelige revolusjonen, og deistene satte fornuften over åpenbaringen. Etter Hume og Kant kunne ingen lenger ta de gamle gudsbevisene for gitt.

            ### I den moderne verden
            Pave Leo 13. gjorde Thomas Aquinas til katolsk norm i 1879, og Jacques Maritain og Étienne Gilson brukte ham til å tenke om menneskerettigheter og middelalderens historie. Jødiske tenkere som Franz Rosenzweig, Martin Buber og Emmanuel Levinas fant i møtet mellom et jeg og et du en ny inngang til det religiøse. Og mot det mange ventet, ble religionsfilosofien et levende felt i analytisk filosofi, med Alvin Plantinga som den mest kjente stemmen.
          `,
        },
      },
    },
    main: {
      "Patristikken": epoke("ca. 150–430", 150, 430, `
        Patristikken er tenkningen til kirkefedrene, de første kristne teologene. De måtte forklare sin tro for en dannet gresk og romersk offentlighet, og tok filosofiens språk i bruk. Justin kalte kristendommen den sanne filosofien. I Alexandria leste Klemens og Origenes Bibelen allegorisk og forente den med Platon. Sentrale dogmer om treenigheten og Kristi natur ble utformet i gresk filosofisk terminologi, med begreper som *ousia*.

        Augustin er tradisjonens høydepunkt i Vesten. Gjennom Plotin fant han en vei ut av materialismen, og med «Bekjennelser» oppfant han noe nær selvbiografien. Han tenkte om tid som en strekking av sjelen, om det onde som mangel på det gode, og om viljens indre splittelse. Læren om arvesynd og nåde preget både Luther og Descartes.
      `, `
        Romerriket med forfølgelser, så Konstantins godkjenning av kristendommen i 313 og Theodosius' statsreligion fra 380. Goterne plyndret Roma i 410, og vandalene sto utenfor Hippo da Augustin døde i 430.
      `, `
        Alexandria var sentrum for bibeltolkning og filosofi, med en kristen lærdomsskole. Kirkemøtene, som Nikea i 325, gjorde filosofiske begreper til spørsmål om rett tro. Kodeksen avløste bokrullen og gjorde tekstene lettere å bruke.
      `, [AUG, PATRISTIK, iep("https://iep.utm.edu/augustine-overview/")]),

      "Tidlig skolastikk": epoke("ca. 500–1150", 500, 1150, `
        Etter Vestromerrikets fall var det lite gresk og lite filosofi igjen i Vesten. Boethius ville oversette hele Aristoteles og Platon, men rakk bare logikken før han ble henrettet. Det var nok til å holde spørsmålet om universaliene levende. Eriugena oversatte Pseudo-Dionysios ved hoffet til Karl den skallede og skrev et stort nyplatonsk system, men sto ganske alene.

        Med katedralskolene rundt år 1000 fikk tenkningen ny kraft. Anselm av Canterbury søkte en tro som søker forståelse, og presenterte et bevis for Guds eksistens som fortsatt diskuteres. Pierre Abélard utviklet en skarp språklogikk og samlet motstridende kirkefedre i «Sic et non». Hans syn på at universalier er ord med betydning, ikke ting, satte dagsordenen for senere nominalisme.
      `, `
        Folkevandringene, karolingerriket rundt 800 og vikingtiden. Fra 1000-tallet fulgte befolkningsvekst, byer og pavens kamp med keiseren. Korstogene begynte i 1095. Kirken var den viktigste bæreren av skrift og lærdom.
      `, `
        Klostrene kopierte håndskrifter, og Karl den stores skolereform la vekt på latin og de sju frie kunster. På 1100-tallet ble katedralskolene i Chartres og Paris sentrale. Lærerne kunne nå bygge karriere på dialektikk.
      `, [SKOL, sep("https://plato.stanford.edu/entries/boethius/"), sep("https://plato.stanford.edu/entries/anselm/"), sep("https://plato.stanford.edu/entries/abelard/")]),

      "Høyskolastikken": epoke("ca. 1200–1300", 1200, 1300, `
        Da Aristoteles' verker og de arabiske kommentarene ble oversatt til latin, fikk Europa et helt system for kunnskap om naturen. Det skapte kriser, for verket hans synes å si at verden er evig og at den enkeltes sjel er forgjengelig. Paris forbød ham i perioder, men fra midten av 1200-tallet var han pensum. Metoden var *quaestio*: et spørsmål, argumenter for og imot, og en løsning.

        Albertus Magnus gjorde lærdommen tilgjengelig, og eleven Thomas Aquinas skapte den mest varige syntesen. Fornuften kan vite mye om Gud og naturen, troen fullfører den, og det kan ikke være reell motsetning mellom dem. Franciskaneren Bonaventura holdt fast på Augustin og den indre vei. Ved fordømmelsene i Paris i 1277 ble 219 teser forbudt, noen av dem nær Aquinas.
      `, `
        Gotikkens tid, med katedraler, voksende byer og tiggerordenene dominikanerne og franciskanerne. Pavene og keiserne kjempet om makten, og kontakten med den islamske verden gikk via Spania og Sicilia. Inkvisisjonen ble opprettet på 1200-tallet.
      `, `
        Universitetene i Paris, Oxford og Bologna ble grunnlagt, med grader og disputas. Oversetterne i Toledo og på Sicilia ga ny tilgang til Aristoteles og arabisk vitenskap. Roger Bacon la vekt på matematikk og erfaring.
      `, [AQ, SKOL, GILSON]),

      "Senskolastikken": epoke("ca. 1290–1400", 1290, 1400, `
        Etter 1277 ble Guds frihet og allmakt et sentralt tema. Duns Scotus la større vekt på viljen enn intellektet, og hevdet at det enkelte har en egen «denne-het», *haecceitas*. Vilhelm av Ockham gikk lenger: bare enkeltting finnes, og universalier er tegn i tanken. Hans berømte kniv sier at vi ikke skal regne med flere ting enn vi trenger. Ockham ga logikken en sentral rolle og brøt med paven om fattigdom.

        Johannes Buridan og andre i Paris utviklet logikk og naturfilosofi videre, og kritiserte Aristoteles' lære om bevegelse med en teori om *impetus*. Tradisjonen ble lenge sett på som forfall. Nyere forskning har vist at den hører til middelalderens mest skarpsindige filosofi, og at den peker fram mot moderne språkfilosofi og mekanikk.
      `, `
        Svartedauden (1347–1351) tok livet av kanskje en tredel av Europas befolkning, også mange lærde. Pavene satt i Avignon fra 1309, Hundreårskrigen brøt ut i 1337, og det store skismaet delte kirken fra 1378.
      `, `
        Oxford og Paris var hovedsetene, og nye universiteter kom i Praha, Wien og Heidelberg. Logikk og semantikk var særlig avansert. Matematiske regler for bevegelse ble utviklet ved Merton College i Oxford.
      `, [sep("https://plato.stanford.edu/entries/ockham/"), sep("https://plato.stanford.edu/entries/duns-scotus/"), sep("https://plato.stanford.edu/entries/buridan/")]),

      "Reformasjonen": epoke("1517–1600", 1517, 1600, `
        Reformasjonen er først en religiøs og politisk omveltning, men den fikk store følger for filosofien. Martin Luther var skolert i Ockhams tradisjon og angrep Aristoteles som lærer for teologer. Mennesket er rettferdig ved troen alene, ikke ved gjerninger. Viljen er bundet, skrev han mot Erasmus. Philipp Melanchthon gjorde likevel Aristoteles til pensum igjen ved protestantiske universiteter.

        Jean Calvin ga protestantismen en systematisk lære med vekt på Guds suverenitet. Bruddet fikk mange filosofiske følger: Skriften skal tolkes av den enkelte, noe som peker fram mot hermeneutikken, samvittigheten ble en indre instans, og Max Weber har knyttet det hele til kapitalismens ånd. Hvor mye reformasjonen selv ønsket dette, er et annet spørsmål.
      `, `
        Luthers teser i 1517, bondeopprøret i 1525 og religionsfreden i Augsburg i 1555. Fyrstene kunne nå velge tro for undersåttene, og nordeuropeiske land, også Danmark-Norge i 1537, ble protestantiske.
      `, `
        Boktrykket gjorde reformasjonen mulig. Bibelen kom på folkespråkene, og det krevde lesekyndighet. Nye skoler og universiteter ble grunnlagt, og humanistenes språkstudier ble et redskap for teologien.
      `, [sep("https://plato.stanford.edu/entries/luther/"), snl("https://snl.no/Philipp_Melanchthon"), iep("https://iep.utm.edu/luther/")]),

      "Annen skolastikk": epoke("ca. 1520–1620", 1520, 1620, `
        Som svar på reformasjonen og den nye verden fikk skolastikken en ny blomstring, særlig i Spania og Portugal. Francisco de Vitoria i Salamanca tok Thomas Aquinas i bruk for å spørre hvilke rettigheter indianerne hadde. Læren om naturrett og folkerett begynner her, og Hugo Grotius bygde på den. Luis de Molina forsøkte å forene Guds forkunnskap og menneskets frihet med sin lære om «mellomviten».

        Francisco Suárez skrev den første systematiske metafysikken uavhengig av Aristoteles' tekst. «Disputationes metaphysicae» (1597) ble lest ved både katolske og protestantiske universiteter, og Descartes og Leibniz kjente den godt. Tradisjonen er på nytt i ferd med å få plass i filosofihistorien.
      `, `
        Motreformasjonen, Tridentinerkonsilet (1545–1563) og jesuittordenen (1540). Spanias erobring av Amerika reiste nye spørsmål. Debatten mellom Bartolomé de las Casas og Bartolomé de Sepúlveda i Valladolid i 1550 gjaldt urfolkenes menneskeverd.
      `, `
        Jesuittene bygde et stort nett av skoler, med en felles studieplan fra 1599. Salamanca og Coimbra var ledende, og Coimbra-kommentarene til Aristoteles ble brukt over hele Europa, også i La Flèche, der Descartes gikk.
      `, [sep("https://plato.stanford.edu/entries/school-salamanca/"), sep("https://plato.stanford.edu/entries/suarez/"), sep("https://plato.stanford.edu/entries/free-will-foreknowledge/")]),

      "Deismen": epoke("ca. 1624–1780", 1624, 1780, `
        Deismen hevder at fornuften alene gir oss det vi trenger å vite om Gud, og at åpenbaringer, mirakler og kirkelige dogmer er overflødige. Herbert av Cherbury fant fem grunnsannheter felles for alle religioner, og John Toland og Matthew Tindal hevdet at kristendommen ikke rommer noe over fornuften. Gud skapte verden som en urmaker, men griper ikke inn.

        David Hume undergravde også denne fornuftsreligionen i sine «Dialogues Concerning Natural Religion»: argumentet fra verdens innretning holder ikke. Blaise Pascal hadde allerede advart mot filosofenes Gud på motsatt side. Voltaire og Thomas Jefferson regnes også til bevegelsen, og den bar fram kampen for religionsfrihet.
      `, `
        Etter hundre år med religionskrig søkte mange en tro uten konfesjonelle konflikter. Den engelske revolusjonen, oppdagelsen av andre religioner i Kina og Amerika, og en voksende kritikk av kirkens makt preget tiden.
      `, `
        Newtons lover ga bildet av en lovstyrt verdensmaskin. Bibelkritikken begynte med Spinoza og Richard Simon. Hermann Samuel Reimarus' tekster, utgitt av Lessing fra 1774, gjorde det samme på tysk.
      `, [sep("https://plato.stanford.edu/entries/enlightenment/"), sep("https://plato.stanford.edu/entries/pascal/"), snl("https://snl.no/deisme")]),

      "Nythomismen": epoke("1879–1960-tallet", 1879, 1965, `
        I rundskrivet *Aeterni Patris* (1879) gjorde pave Leo 13. Thomas Aquinas til den katolske filosofiens mønster, som svar på moderne positivisme og idealisme. Kardinal Désiré Mercier opprettet et institutt i Leuven der thomisme og naturvitenskap skulle møtes. Bevegelsen var både en ortodoks disiplinering og et stort stykke vitenskapelig historie: middelalderen ble nå studert seriøst.

        Étienne Gilson skrev den moderne historien om middelalderfilosofien og hevdet at Aquinas' originale bidrag var læren om væren. Jacques Maritain brukte thomismen til å tenke om demokrati og menneskerettigheter, og var med på arbeidet rundt FNs erklæring i 1948. Etter Det andre Vatikankonsil (1962–1965) mistet thomismen sin særstilling i kirken.
      `, `
        Den katolske kirkens tap av Pavestaten i 1870, og det moderne samfunnets vekst. Kirken søkte et svar på sosialisme og liberalisme, som i rundskrivet *Rerum Novarum* (1891). Totalitære regimer utfordret den senere.
      `, `
        Historiske kildeutgaver og pavelige universiteter ga studiet av skolastikken nytt grunnlag. Det pavelige instituttet for middelalderstudier i Toronto, grunnlagt med Gilson i 1929, ble et hovedsete. Ny fysikk og darwinisme måtte møtes.
      `, [sep("https://plato.stanford.edu/entries/maritain/"), snl("https://snl.no/nythomisme"), GILSON]),

      "Dialogfilosofien": epoke("ca. 1921–1960", 1921, 1960, `
        Etter første verdenskrig hevdet flere tenkere at filosofien hadde glemt det levende møtet mellom mennesker. I «Der Stern der Erlösung» (1921) brøt Franz Rosenzweig med idealismens system og tok utgangspunkt i dødsangsten og den enkelte. Martin Buber skilte i «Ich und Du» (1923) mellom forholdet til noe som en ting, og det virkelige møtet med et du, der også Gud møtes. Gabriel Marcel tenkte om troskap og håp fra et katolsk ståsted.

        Emmanuel Levinas, som overlevde krigen som fange mens familien ble drept, gikk videre: etikken er den første filosofien, og den andres ansikt forplikter meg før all teori. Simone Weil skrev om oppmerksomhet og lidelse. Retningen har satt spor i teologi, psykiatri og pedagogikk.
      `, `
        Første verdenskrig, antisemittisme og til slutt Holocaust. Mange av tenkerne var jøder, og Buber og Rosenzweigs jødiske folkehøyskole i Frankfurt var et svar på assimileringens krise. Buber flyktet til Palestina i 1938.
      `, `
        Fenomenologien og Kierkegaard ga nye redskaper. Rosenzweig og Buber oversatte Bibelen til tysk på nytt, et verk Buber fullførte i 1961. Den fransk-jødiske og den katolske intellektuelle verden var viktige miljøer.
      `, [sep("https://plato.stanford.edu/entries/buber/"), sep("https://plato.stanford.edu/entries/rosenzweig/"), sep("https://plato.stanford.edu/entries/levinas/")]),

      "Ny religionsfilosofi": epoke("ca. 1967–", 1967, null, `
        Under den logiske positivismen ble religiøse utsagn regnet som meningsløse, men etter dens fall kom spørsmålene tilbake. Alvin Plantinga forsvarte i «God and Other Minds» (1967) at tro på Gud kan være like rasjonell som tro på andre sinn, og viste at det ondes problem ikke er en logisk motsigelse. Sammen med William Alston hevdet han senere at troen kan være berettiget uten argumenter, slik sanseoppfatninger er det.

        Richard Swinburne bygde en sannsynlighetsargumentasjon for Guds eksistens. Kritikere som J.L. Mackie tok utfordringen, og feltet ble en del av analytisk filosofi, med tidsskrifter og faglige selskaper. I dag er debatten blitt bredere, med større oppmerksomhet mot ikke-kristne religioner.
      `, `
        Sekularisering i Europa og religiøs vekst andre steder, ikke minst i USA, der Society of Christian Philosophers ble grunnlagt i 1978. Kampene rundt religion i offentligheten har holdt temaet aktuelt.
      `, `
        Analytisk metafysikk og modallogikk ble igjen legitim, og ga redskaper til gamle gudsbevis. Sannsynlighetsteori, kosmologi og finjusteringsargumentet ga nye tema.
      `, [sep("https://plato.stanford.edu/entries/religion-epistemology/"), sep("https://plato.stanford.edu/entries/philosophy-religion/")]),
    },
  },

  edgeDescriptions: {
    platonismen__patristikken: strek(`Kirkefedrene så Platons evige, usynlige verden som en forberedelse til kristendommen. Justin og Klemens brukte ham direkte.`),
    stoisismen__patristikken: strek(`Begreper som *logos*, naturlov og samvittighet kom inn i kristen tenkning fra Stoa. Tertullian tenkte til og med sjelen som kroppslig, slik stoikerne gjorde.`),
    nyplatonismen__patristikken: strek(`Augustin leste Plotin, oversatt av Marius Victorinus, og forteller i «Bekjennelser» at det åpnet veien for ham til kristendommen.`),
    patristikken__tidligskolastikk: strek(`Augustin var middelalderens autoritet nummer én, og Anselm bygde direkte på ham. Skolastikken er i stor grad et forsøk på å ordne kirkefedrenes utsagn.`),
    nyplatonismen__tidligskolastikk: strek(`Gjennom Boethius, Pseudo-Dionysios og Eriugenas oversettelser ble nyplatonismen en bærende del av kristen middelalder.`),
    tidligskolastikk__hoyskolastikken: strek(`Abélards metode, med autoriteter som ikke stemmer overens, ble grunnskjemaet i de store summaene. Peter Lombardus' «Sentenser» bygde på samme mønster.`),
    aristotelismen__hoyskolastikken: strek(`Oversettelsene av Aristoteles' verk til latin var den store intellektuelle hendelsen i høymiddelalderen. Thomas Aquinas skrev kommentarer til de fleste av dem.`),
    islamsk__hoyskolastikken: strek(`Latinerne møtte Aristoteles med kommentarene til Ibn Sina og Ibn Rushd, som Aquinas bare kalte Kommentatoren. Averroismen i Paris ble selve utløseren for striden i 1270-årene.`),
    jodisk__hoyskolastikken: strek(`Thomas Aquinas leste Moses Maimonides, som han kalte Rabbi Moyses, og bruker ham blant annet om hvordan vi kan tale om Gud. Ibn Gabirols «Fons vitae» gikk under navnet Avicebron.`),
    hoyskolastikken__senskolastikken: strek(`Duns Scotus og Vilhelm av Ockham skrev i diskusjon med Aquinas og samtiden hans. Etter 1277 ble Guds frihet et utgangspunkt som endret hele spørsmålet.`),
    senskolastikken__reformasjonen: strek(`Martin Luther var skolert i Ockhams skole i Erfurt, og kalte Ockham sin lærer. Skillet mellom fornuft og tro som bruddet bygger på, ligger allerede her.`),
    humanismen__reformasjonen: strek(`Reformatorene brukte Erasmus' greske nye testamente og humanistenes kilder. Melanchthon var nær humanistene. Men humanistenes tillit til den frie vilje brøt Luther med.`),
    patristikken__reformasjonen: strek(`Augustins lære om nåde var Luthers viktigste inspirasjon, og begge sider av striden siterte ham. Luther var selv augustinermunk.`),
    hoyskolastikken__reformasjonen: strek(`Luther kalte Aristoteles en hedensk mester og angrep skolastikken for å ha gjort teologien filosofisk. Tesene mot den skolastiske teologi kom i 1517.`),
    hoyskolastikken__annenskolastikk: strek(`Francisco de Vitoria innførte Aquinas' «Summa» som lærebok i Salamanca i stedet for Lombardus, og dermed fikk Thomas en ny rolle.`),
    reformasjonen__annenskolastikk: strek(`Molina og jesuittene forsvarte den frie vilje nettopp mot den reformatoriske læren om nåde. Tridentinerkonsilet ga rammen for dette svaret.`),
    rasjonalismen__deismen: strek(`Tillit til fornuften som Descartes og Spinoza viste, og Spinozas bibelkritikk særlig, ga deistene det de trengte.`),
    reformasjonen__deismen: strek(`Da enhver kunne lese Skriften, ble det nødvendig å spørre hvem som hadde rett. Etter religionskrigene svarte deistene at bare det alle kan være enige om, skal gjelde.`),
    hoyskolastikken__nythomismen: strek(`Nythomismen er et bevisst valg om å ta Aquinas opp igjen. Gilson og andre viste etter hvert at senere kommentatorer ofte hadde lest ham annerledes enn han selv mente.`),
    positivismen__nythomismen: strek(`Leo 13. og Mercier ønsket en filosofi som kunne svare på positivismens og materialismens krav, med metafysikk og kritisk historieskrivning.`),
    nykantianismen__dialogfilosofien: strek(`Franz Rosenzweig var elev av Hermann Cohen, som ga det jødiske perspektivet filosofisk ny tyngde. Rosenzweig leste sin lærers sene verk som et brudd med idealismen.`),
    eksistenstenkning__dialogfilosofien: strek(`Bubers «jeg» og Rosenzweigs utgangspunkt i den enkelte bærer preg av Kierkegaard, selv om Buber kritiserte ham for å gjøre forholdet til Gud til et enesteforhold.`),
    dagligspraak__nyreligionsfilosofi: strek(`Fra språkfilosofien fikk religionsfilosofene en tilbakevending til gamle spørsmål om gud og tro, nå med større krav til nøyaktighet. Oppgjøret med verifikasjonsprinsippet gjorde det mulig å ta spørsmålene opp igjen.`),
    hoyskolastikken__nyreligionsfilosofi: strek(`Gudsbevisene og spørsmålet om Guds egenskaper ble hentet fram igjen fra middelalderen og drøftet med moderne logikk, ikke minst Anselm og Aquinas.`),
  },

  artists: [
    // --- Patristikken ---
    f("Justin", [null, 165], "mann", ["Religionsfilosofi"], ["Patristikken"], ["Logos"], [150, 165], "Flavia Neapolis og Roma", `
      Kristen filosof fra Samaria, kjent som Justin Martyr. Han søkte hos stoikere, peripatetikere, pytagoreere og platonikere, før han fant kristendommen og fortsatte å bære filosofkappen. Logos, hevdet han, har vært virksom i alle mennesker, så det de greske filosofene sa riktig, tilhører de kristne. Han forsvarte kristendommen for keiseren, drev en skole i Roma og ble henrettet rundt 165.
    `, [["Apologi"], ["Dialog med Tryfon"]], [bok("Minns, Denis og Paul Parvis. Justin, Philosopher and Martyr: Apologies. Oxford University Press, 2009.")]),
    f("Klemens av Alexandria", [null, null], "mann", ["Religionsfilosofi"], ["Patristikken"], ["Logos"], [190, 215], "Athen og Alexandria", `
      Gresk kirkefar og lærer i Alexandria. Filosofien var for grekerne det Moseloven var for jødene: en forberedelse til Kristus. Den ekte kristne er en «gnostiker», som går fra tro til innsikt, og må ikke forveksles med den gnostisismen han angrep. I «Stromateis» samler han sitater fra greske forfattere, og mye av dette kjenner vi bare gjennom ham.
    `, [["Stromateis"], ["Protreptikos"]], [snl("https://snl.no/Clemens_av_Alexandria")]),
    f("Origenes", [null, null], "mann", ["Religionsfilosofi"], ["Patristikken"], ["Fri vilje"], [215, 254], "Alexandria og Caesarea", `
      Gresk kirkefar, den mest lærde teologen i den tidlige kirken. «De principiis» er det første systematiske forsøket på å framstille kristen tro. Han tolket Skriften allegorisk og forsvarte kristendommen mot filosofen Kelsos. Læren hans om sjelens preeksistens og om at alt til slutt skal gjenopprettes, ble fordømt på et kirkemøte i 553. Han ble torturert under forfølgelsene og døde kort etterpå.
    `, [["De principiis"], ["Contra Celsum"], ["Hexapla"]], [sep("https://plato.stanford.edu/entries/origen/")]),
    f("Augustin", [354, 430], "mann", ["Religionsfilosofi", "Metafysikk"], ["Patristikken"], ["Fri vilje", "Det ondes problem", "Gudsbevis", "Tvil", "Sannhet"], [386, 430], "Tagaste, Milano og Hippo", `
      Romersk filosof og biskop i Hippo i Nord-Afrika, den viktigste av de latinske kirkefedrene. Etter en periode som manikeer og skeptiker ble han kristen i Milano i 386, påvirket av Ambrosius og nyplatonikerne. «Bekjennelser» gjør selvet til filosofisk tema, og boken om tiden der regnes som en klassiker. «Gudsstaten» svarer på Romas fall. Hans lære om arvesynd og nåde preger hele vestlig kristendom. Han foregrep også Descartes' argument om at den som tviler, må finnes.
    `, [["Om den frie vilje", 395], ["Bekjennelser", 400], ["Om treenigheten", 419], ["Gudsstaten", 426]], [AUG, iep("https://iep.utm.edu/augustine-overview/")]),

    // --- Tidlig skolastikk ---
    f("Boethius", [null, 524], "mann", ["Logikk og språk", "Religionsfilosofi"], ["Tidlig skolastikk"], ["Universalier", "Fri vilje"], [505, 524], "Roma og Pavia", `
      Romersk filosof og embetsmann under ostrogoterkongen Teoderik. Han ville oversette hele Platon og Aristoteles til latin, men rakk bare logikken. Kommentaren til Porfyr holdt spørsmålet om universaliene i live, og han ga definisjonen av person som middelalderen brukte. Anklaget for forræderi skrev han «Filosofiens trøst» i fengsel, der filosofien selv kommer til ham som en kvinne. Han ble henrettet, og boken ble en av middelalderens mest leste.
    `, [["Filosofiens trøst", 524]], [sep("https://plato.stanford.edu/entries/boethius/")]),
    f("Eriugena", [null, null], "mann", ["Metafysikk", "Religionsfilosofi"], ["Tidlig skolastikk"], [], [845, 877], "Irland og Frankrike", `
      Irsk filosof ved hoffet til Karl den skallede, kjent som Johannes Scotus Eriugena. Han kunne gresk, noe som var svært sjeldent i Vesten, og oversatte Pseudo-Dionysios. Hovedverket «Periphyseon» ser hele naturen som en utgang fra Gud og en tilbakevending. Fornuften står for ham over autoritet. Læren ble mistenkt for panteisme og fordømt på 1200-tallet.
    `, [["Periphyseon"], ["De divina praedestinatione"]], [sep("https://plato.stanford.edu/entries/scottus-eriugena/")]),
    f("Anselm av Canterbury", [1033, 1109], "mann", ["Religionsfilosofi", "Metafysikk"], ["Tidlig skolastikk"], ["Gudsbevis", "Fri vilje"], [1070, 1109], "Aosta, Bec og Canterbury", `
      Italiensk munk og erkebiskop av Canterbury, kalt skolastikkens far. Mottoet er en tro som søker forståelse. «Proslogion» definerer Gud som det hvorover ikke noe større kan tenkes, og hevder at Gud derfor må finnes. Beviset, som Kant senere kalte det ontologiske, er blitt kritisert allerede av munken Gaunilo, men diskuteres fortsatt. Han kjempet også for kirkens frihet overfor den engelske kongen.
    `, [["Monologion", 1076], ["Proslogion", 1078], ["Cur Deus homo", 1098]], [sep("https://plato.stanford.edu/entries/anselm/")]),
    f("Pierre Abélard", [1079, 1142], "mann", ["Logikk og språk", "Etikk"], ["Tidlig skolastikk"], ["Universalier", "Dyd"], [1100, 1142], "Bretagne og Paris", `
      Fransk filosof og teolog, den skarpeste logikeren i sin tid. Universalier er ikke ting, men ord med betydning, en lære nær nominalismen. I «Sic et non» stiller han kirkefedrene mot hverandre for å tvinge fram tenkning. I etikken er hensikten avgjørende. Kjærlighetshistorien med Héloïse d'Argenteuil, hemmelig ekteskap og kastrering, fortalte han selv. Han ble to ganger fordømt, sist på Bernhard av Clairvaux' initiativ.
    `, [["Sic et non"], ["Historia calamitatum"], ["Ethica"]], [sep("https://plato.stanford.edu/entries/abelard/")]),
    f("Héloïse d'Argenteuil", [null, 1164], "kvinne", ["Etikk"], ["Tidlig skolastikk"], [], [1130, 1164], "Paris og Paraklet", `
      Fransk abbedisse, en av de mest lærde kvinnene i sin tid, kjent for kjærligheten til Pierre Abélard og for brevene deres. I dem stiller hun skarpe spørsmål om hensikt og skyld: hun anklager ikke seg selv for handlingene, men for det hun fortsatt føler. Hun avviste først ekteskap med argumenter hentet fra filosofer. Etter tragedien ledet hun klosteret Paraklet. Forskere har diskutert ektheten av brevene, men de fleste godtar dem nå.
    `, [["Brev til Abélard"]], [snl("https://snl.no/H%C3%A9lo%C3%AFse")]),

    // --- Høyskolastikken ---
    f("Albertus Magnus", [null, 1280], "mann", ["Vitenskapsfilosofi", "Metafysikk"], ["Høyskolastikken"], [], [1240, 1280], "Köln og Paris", `
      Tysk dominikaner og biskop, kjent som «Doctor Universalis» for sin brede lærdom. Han gjorde hele Aristoteles og arabiske kommentatorer tilgjengelig på latin med store parafraser, og drev egne studier av dyr og planter. Han lærte opp Thomas Aquinas og forsvarte ham etter hans død. Skolen hans i Köln førte også videre en nyplatonsk arv, som gikk til Mester Eckhart.
    `, [["De animalibus"], ["De mineralibus"]], [sep("https://plato.stanford.edu/entries/albert-great/")]),
    f("Thomas Aquinas", [1225, 1274], "mann", ["Religionsfilosofi", "Metafysikk"], ["Høyskolastikken"], ["Gudsbevis", "Naturrett", "Væren", "Dyd", "Sannhet"], [1252, 1274], "Roccasecca, Paris og Napoli", `
      Italiensk dominikaner, middelalderens største systembygger. Familien holdt ham innesperret for å hindre ham i å bli tiggermunk. Han forente Aristoteles og kristendommen: fornuft og tro kan ikke motsi hverandre. «Summa theologiae» rommer de fem veiene til Gud og en lære om naturrett og dyd. Hos Gud faller væren og vesen sammen. Etter en opplevelse i 1273 sluttet han å skrive, og kalte alt sitt verk halm. Han ble helgenkåret i 1323.
    `, [["De ente et essentia", 1256], ["Summa contra gentiles", 1265], ["Summa theologiae", 1274]], [AQ, snl("https://snl.no/Thomas_Aquinas")]),
    f("Bonaventura", [1221, 1274], "mann", ["Religionsfilosofi"], ["Høyskolastikken"], ["Gudsbevis"], [1248, 1274], "Bagnoregio og Paris", `
      Italiensk franciskaner og general for ordenen, som lærte i Paris samtidig med Thomas Aquinas. Han holdt fast på Augustin: all sann kunnskap er belyst av Gud. «Itinerarium mentis in Deum» beskriver sjelens vei til Gud gjennom verden, seg selv og det guddommelige. Han avviste at verden kan være evig, i motsetning til Aquinas, som bare hevdet at dette ikke kan bevises. Han ble kalt «Doctor Seraphicus».
    `, [["Breviloquium", 1257], ["Itinerarium mentis in Deum", 1259]], [sep("https://plato.stanford.edu/entries/bonaventure/")]),
    f("Roger Bacon", [null, null], "mann", ["Vitenskapsfilosofi"], ["Høyskolastikken"], ["Erfaring"], [1247, 1292], "Oxford og Paris", `
      Engelsk franciskaner og filosof, en av de første i Vesten som la vekt på matematikk, språkkunnskap og erfaring som vitenskapens grunnlag. Han skrev til pave Klemens 4. med «Opus maius», et enormt forslag til reform av studiene. Boken inneholder viktige bidrag i optikk. Fortellingen om ham som en moderne vitenskapsmann født for tidlig er en myte, men interessen hans for naturen var reell.
    `, [["Opus maius", 1267], ["Opus minus", 1267], ["Opus tertium", 1267]], [sep("https://plato.stanford.edu/entries/roger-bacon/")]),

    // --- Senskolastikken ---
    f("Duns Scotus", [null, 1308], "mann", ["Metafysikk", "Religionsfilosofi"], ["Senskolastikken"], ["Universalier", "Fri vilje", "Væren"], [1295, 1308], "Skottland, Oxford, Paris og Köln", `
      Skotsk franciskaner, kalt «Doctor Subtilis» for sine fine skiller. Mot Thomas Aquinas hevdet han at væren kan sies om Gud og skapninger i samme betydning, og at viljen ikke er bundet av intellektet, men fri. Det enkelte har en særegen «denne-het», *haecceitas*. Ordet «dunce», engelsk for dumrian, stammer fra senere hån mot hans tilhengere. Filosofien hans er kjent for sin kompleksitet.
    `, [["Ordinatio"], ["Reportatio"]], [sep("https://plato.stanford.edu/entries/duns-scotus/")]),
    f("Vilhelm av Ockham", [null, 1347], "mann", ["Logikk og språk", "Politisk filosofi"], ["Senskolastikken"], ["Universalier", "Mening og referanse"], [1317, 1347], "Oxford, Avignon og München", `
      Engelsk franciskaner og logiker, nominalismens fremste tenker. Bare enkeltting finnes, og allmennbegreper er tegn. Vi skal ikke regne med flere ting enn nødvendig, en regel som senere ble kalt Ockhams barberkniv. Innkalt til paven i Avignon for mulig kjetteri flyktet han i 1328 til keiseren i München, og skrev resten av livet mot pavens makt. Han var viktig for forholdet mellom kirke og stat, og for logikken.
    `, [["Summa logicae"], ["Dialogus"]], [sep("https://plato.stanford.edu/entries/ockham/")]),
    f("Johannes Buridan", [null, null], "mann", ["Logikk og språk", "Vitenskapsfilosofi"], ["Senskolastikken"], ["Kausalitet", "Fri vilje"], [1320, 1360], "Paris", `
      Fransk filosof ved universitetet i Paris, som aldri gikk inn i en orden, og som ble rektor der to ganger. Han utviklet logikken og forklarte bevegelse med *impetus*, en kraft kastet legeme får med seg, et brudd med Aristoteles. Bildet av Buridans esel, som sulter mellom to like høystakker, finnes ikke i hans bevarte verker, men kan være en spøkefull versjon av hans syn på valg.
    `, [["Summulae de dialectica"], ["Quaestiones"]], [sep("https://plato.stanford.edu/entries/buridan/")]),

    // --- Reformasjonen ---
    f("Martin Luther", [1483, 1546], "mann", ["Religionsfilosofi"], ["Reformasjonen"], ["Fri vilje", "Frihet"], [1517, 1546], "Eisleben og Wittenberg", `
      Tysk teolog og augustinermunk som med tesene om avlaten i 1517 utløste reformasjonen. Mennesket blir rettferdig av tro og nåde alene. Han angrep Aristoteles, kalte fornuften en hore i Guds sammenheng, men brukte den selv i skarpe argumenter. Bibelen på tysk formet språket. «De servo arbitrio» svarer Erasmus: viljen er ikke fri overfor Gud. De sene angrepene hans på jødene var grove og er blitt brukt senere.
    `, [["Von der Freiheit eines Christenmenschen", 1520], ["De servo arbitrio", 1525]], [sep("https://plato.stanford.edu/entries/luther/"), snl("https://snl.no/Martin_Luther")]),
    f("Philipp Melanchthon", [1497, 1560], "mann", ["Religionsfilosofi", "Etikk"], ["Reformasjonen"], [], [1518, 1560], "Bretten og Wittenberg", `
      Tysk humanist og reformator, Luthers nærmeste medarbeider. Han skrev den første systematiske lutherske læreboken og den augsburgske bekjennelsen. Mot Luthers utfall beholdt han filosofien i studiene, og en tilpasset Aristoteles ble pensum ved protestantiske universiteter. Som skolereformator ble han kalt Tysklands lærer. Viljens frihet tenkte han etter hvert om på en mildere måte enn Luther.
    `, [["Loci communes", 1521], ["Confessio Augustana", 1530]], [snl("https://snl.no/Philipp_Melanchthon")]),
    f("Jean Calvin", [1509, 1564], "mann", ["Religionsfilosofi"], ["Reformasjonen"], ["Fri vilje"], [1536, 1564], "Noyon og Genève", `
      Fransk teolog og reformator i Genève, utdannet i humanisme og jus. Hans lære legger vekt på Guds suverenitet og på at noen er utvalgt, *predestinasjonen*. Mennesket har en medfødt sans for Gud, en idé som Alvin Plantinga tok opp igjen på 1900-tallet. Han gjorde Genève til et strengt teokrati, og henrettelsen av Miguel Servet i 1553 er en plett. Calvinismen ble en av de mest innflytelsesrike kirkelige retningene.
    `, [["Institutio Christianae Religionis", 1536]], [iep("https://iep.utm.edu/calvin/")]),

    // --- Annen skolastikk ---
    f("Francisco de Vitoria", [null, 1546], "mann", ["Politisk filosofi"], ["Annen skolastikk"], ["Naturrett", "Rettferdighet"], [1526, 1546], "Burgos og Salamanca", `
      Spansk dominikaner, grunnlegger av Salamanca-skolen. Han stilte i 1539 det urovekkende spørsmålet om spanjolene hadde noen rett til å erobre Amerika. Indianerne er fornuftige mennesker med rett til eiendom og styre, og verken paven eller keiseren har rett til å ta dem. Likevel fant han noen grunnlag for krig. Han regnes med Grotius som en grunnlegger av folkeretten. Bare elevenes nedtegnelser er bevart.
    `, [["De Indis", 1539], ["De iure belli", 1539]], [sep("https://plato.stanford.edu/entries/school-salamanca/")]),
    f("Luis de Molina", [1535, 1600], "mann", ["Religionsfilosofi"], ["Annen skolastikk"], ["Fri vilje"], [1570, 1600], "Cuenca og Évora", `
      Spansk jesuitt. «Concordia» forsøker å forene Guds forkunnskap med menneskets frihet: Gud vet hva enhver ville valgt fritt i enhver situasjon, en *mellomviten* (*scientia media*). Dette førte til bitter strid med dominikanerne, og paven måtte til slutt forby begge parter å kalle hverandre kjettere. Læren er tatt opp igjen i moderne analytisk religionsfilosofi under navnet molinisme.
    `, [["Concordia", 1588]], [sep("https://plato.stanford.edu/entries/free-will-foreknowledge/")]),
    f("Francisco Suárez", [1548, 1617], "mann", ["Metafysikk", "Politisk filosofi"], ["Annen skolastikk"], ["Naturrett", "Substans", "Universalier"], [1580, 1617], "Granada, Salamanca og Coimbra", `
      Spansk jesuitt, kalt «Doctor Eximius», den siste store skolastikeren. «Disputationes metaphysicae» ordner metafysikken som eget system, ikke som kommentar til Aristoteles, og var lærebok også i protestantiske land. Descartes og Leibniz kjente den. I «De legibus» hevder han at politisk makt kommer fra folket, ikke rett fra Gud til kongen. Skriftet hans mot Jakob 1. ble brent i London.
    `, [["Disputationes metaphysicae", 1597], ["De legibus", 1612], ["Defensio fidei", 1613]], [sep("https://plato.stanford.edu/entries/suarez/")]),

    // --- Deismen ---
    f("Herbert av Cherbury", [1583, 1648], "mann", ["Religionsfilosofi", "Erkjennelsesteori"], ["Deismen"], ["Sannhet"], [1624, 1648], "Montgomery og London", `
      Engelsk diplomat, soldat og filosof, kalt deismens far. «De veritate» (1624) hevder at det finnes fem sannheter felles for alle mennesker: at det finnes en Gud, at Gud skal dyrkes, at dyd er den viktigste dyrkingen, at synd må angres og at det er lønn og straff etter døden. Alt annet i religion er menneskeverk. Kirkens rolle ble dermed svekket. Descartes leste boken, men var kritisk.
    `, [["De veritate", 1624], ["De religione gentilium", 1663]], [snl("https://snl.no/Herbert_of_Cherbury")]),
    f("John Toland", [1670, 1722], "mann", ["Religionsfilosofi", "Politisk filosofi"], ["Deismen"], [], [1696, 1722], "Irland, London og Hannover", `
      Irsk fritenker, oppvokst katolikk og senere radikal. «Christianity not Mysterious» (1696) hevder at intet i kristendommen kan gå utover fornuften, og boken ble brent av bøddelen i Dublin. Han var den første som brukte ordet *panteist*, og forsvarte jødenes rettigheter i England. Han var kjent med Sofie Charlotte av Preussen, som han skrev til om materiens egenbevegelse.
    `, [["Christianity not Mysterious", 1696], ["Letters to Serena", 1704], ["Pantheisticon", 1720]], [snl("https://snl.no/John_Toland")]),
    f("Matthew Tindal", [null, 1733], "mann", ["Religionsfilosofi"], ["Deismen"], [], [1706, 1733], "Oxford", `
      Engelsk jurist og fritenker. «Christianity as Old as the Creation» (1730) ble kalt deismens bibel. Den sanne religionen er like gammel som verden og er bare fornuftens naturlige moral. Evangeliet legger ikke til noe, og det som stemmer dårlig, må bort. Boken skapte over 150 tilsvar, blant dem Joseph Butlers «Analogy». Den ble oversatt og lest i Tyskland.
    `, [["Christianity as Old as the Creation", 1730]], [snl("https://snl.no/deisme")]),
    f("Blaise Pascal", [1623, 1662], "mann", ["Religionsfilosofi"], ["Rasjonalismen"], ["Tvil", "Gudsbevis"], [1640, 1662], "Clermont og Paris", `
      Fransk matematiker, fysiker og religiøs tenker. Han bygde en regnemaskin og la med Fermat grunnlaget for sannsynlighetsregningen. En mystisk opplevelse i 1654 fikk ham til å vende seg til jansenistene i Port-Royal. «Pensées», notater til et forsvar for kristendommen, er kjent for veddemålet: det er fornuftig å satse på Gud. Hjertet har grunner fornuften ikke kjenner, og han avviste filosofenes Gud. Han døde 39 år gammel.
    `, [["Lettres provinciales", 1656], ["Pensées", 1670]], [sep("https://plato.stanford.edu/entries/pascal/")]),

    // --- Nythomismen ---
    f("Désiré Mercier", [1851, 1926], "mann", ["Metafysikk"], ["Nythomismen"], [], [1882, 1926], "Leuven og Mechelen", `
      Belgisk kardinal og filosof. Han var professor i thomistisk filosofi i Leuven og grunnla der Institut Supérieur de Philosophie i 1889, med mål om å bringe Aquinas i samtale med moderne naturvitenskap og psykologi. Som erkebiskop av Mechelen under første verdenskrig ble han symbol på motstand mot den tyske okkupasjonen av Belgia. Han var også en pioner for økumenisk dialog.
    `, [["Cours de philosophie", 1892]], [snl("https://snl.no/nythomisme")]),
    f("Jacques Maritain", [1882, 1973], "mann", ["Politisk filosofi", "Estetikk"], ["Nythomismen"], ["Naturrett", "Frihet"], [1914, 1973], "Paris, Princeton og Toulouse", `
      Fransk filosof, konvertert til katolisismen i 1906 sammen med kona Raïssa, som også var filosof. Fra Thomas Aquinas utviklet han en personalisme som forsvarer demokrati og menneskerettigheter. Han deltok i UNESCOs arbeid rundt FNs menneskerettighetserklæring (1948) og var ambassadør ved Vatikanet. «Humanisme intégral» påvirket kristendemokratiet og pave Paul 6. Han skrev også om kunst og poesi.
    `, [["Distinguer pour unir", 1932], ["Humanisme intégral", 1936], ["Man and the State", 1951]], [sep("https://plato.stanford.edu/entries/maritain/")]),
    f("Étienne Gilson", [1884, 1978], "mann", ["Metafysikk"], ["Nythomismen"], ["Væren"], [1913, 1978], "Paris og Toronto", `
      Fransk filosofihistoriker, professor ved Collège de France og medgrunnlegger av instituttet for middelalderstudier i Toronto. Han begynte med å vise at Descartes bygger på skolastikken, og endte med å skrive middelalderfilosofiens moderne historie. Thomas Aquinas' egentlige nyvinning er læren om væren som akt. Han var medlem av Académie française, og hans arbeid har gjort det umulig å avskrive middelalderen.
    `, [["Le Thomisme", 1919], ["L'esprit de la philosophie médiévale", 1932], ["Being and Some Philosophers", 1949]], [snl("https://snl.no/nythomisme"), GILSON]),

    // --- Dialogfilosofien ---
    f("Franz Rosenzweig", [1886, 1929], "mann", ["Religionsfilosofi"], ["Dialogfilosofien"], [], [1921, 1929], "Kassel og Frankfurt", `
      Tysk-jødisk filosof. Han skrev en avhandling om Hegel, sto nær dåpen, men valgte i 1913 å leve som jøde. Hovedverket «Der Stern der Erlösung» begynte han på som kortbrev fra skyttergravene: filosofien har fortrengt døden og den enkelte. Han grunnla et jødisk lærehus i Frankfurt, og oversatte Bibelen sammen med Martin Buber, mens lammelse fratok ham nesten all bevegelse.
    `, [["Hegel und der Staat", 1920], ["Der Stern der Erlösung", 1921]], [sep("https://plato.stanford.edu/entries/rosenzweig/")]),
    f("Martin Buber", [1878, 1965], "mann", ["Religionsfilosofi", "Etikk"], ["Dialogfilosofien"], ["Anerkjennelse"], [1923, 1965], "Wien, Frankfurt og Jerusalem", `
      Østerriksk-jødisk filosof. «Ich und Du» skiller mellom forholdet til noe som et Det og møtet med et Du, som ikke kan brukes. Alt virkelig liv er møte, og i møtet er Gud til stede. Han studerte og ga ut hasidismens tradisjon. Han flyktet til Palestina i 1938, der han kjempet for samarbeid mellom jøder og arabere, noe som gjorde ham upopulær. Han har betydd mye for pedagogikk og terapi.
    `, [["Ich und Du", 1923], ["Die Erzählungen der Chassidim", 1949]], [sep("https://plato.stanford.edu/entries/buber/")]),
    f("Gabriel Marcel", [1889, 1973], "mann", ["Religionsfilosofi"], ["Dialogfilosofien"], ["Autentisitet"], [1927, 1973], "Paris", `
      Fransk filosof og dramatiker, konvertitt til katolisismen i 1929. Han skiller mellom problem, noe jeg står utenfor, og mysterium, noe jeg selv er del av. Å ha er noe annet enn å være, og troskap, håp og kjærlighet er menneskets grunnlag. Han ble kalt kristen eksistensialist av Sartre, men avviste merkelappen. Dramaene mente han var like viktige som filosofien.
    `, [["Journal métaphysique", 1927], ["Être et avoir", 1935], ["Le mystère de l'être", 1951]], [sep("https://plato.stanford.edu/entries/marcel/")]),
    f("Emmanuel Levinas", [1906, 1995], "mann", ["Etikk", "Religionsfilosofi"], ["Dialogfilosofien"], ["Anerkjennelse", "Væren"], [1930, 1995], "Kaunas, Strasbourg og Paris", `
      Litauisk-fransk-jødisk filosof, elev av Husserl og Heidegger, og den som introduserte fenomenologien i Frankrike. Han overlevde krigen i tysk fangeleir mens familien i Litauen ble drept. «Totalité et infini» snur vestlig filosofi: etikken, ikke væren, er den første filosofien. Den andres ansikt sier meg at jeg ikke skal drepe. Han kritiserte Heidegger skarpt, og skrev også talmudiske tolkninger.
    `, [["Totalité et infini", 1961], ["Autrement qu'être", 1974]], [sep("https://plato.stanford.edu/entries/levinas/")]),
    f("Simone Weil", [1909, 1943], "kvinne", ["Religionsfilosofi", "Politisk filosofi"], ["Dialogfilosofien"], ["Rettferdighet", "Makt"], [1934, 1943], "Paris, Marseille og London", `
      Fransk filosof av jødisk familie, aktivist og mystiker. Hun tok jobb i fabrikker for å forstå arbeidernes kår, og deltok kort i den spanske borgerkrigen. Oppmerksomhet er for henne en moralsk og religiøs handling, og lidelse et sentralt tema. Det meste ble utgitt etter hennes død, av Albert Camus og andre. Hun døde av tuberkulose i England, svekket av at hun nektet å spise mer enn folk i det okkuperte Frankrike.
    `, [["L'Iliade ou le poème de la force", 1940], ["La pesanteur et la grâce", 1947], ["L'enracinement", 1949]], [sep("https://plato.stanford.edu/entries/simone-weil/")]),

    // --- Ny religionsfilosofi ---
    f("Alvin Plantinga", [1932, null], "mann", ["Religionsfilosofi", "Erkjennelsesteori"], ["Ny religionsfilosofi"], ["Det ondes problem", "Gudsbevis"], [1967, null], "Calvin College og Notre Dame", `
      Amerikansk filosof, den mest kjente personen i analytisk religionsfilosofi. Hans forsvar for den frie vilje viser at det ikke er noen logisk motsigelse mellom en god Gud og ondskap. Med *reformert erkjennelsesteori* hevder han at troen på Gud kan være grunnleggende og berettiget uten argumenter. Han har også brukt modallogikk i en ny versjon av det ontologiske gudsbeviset, og kritisert naturalismen.
    `, [["God and Other Minds", 1967], ["The Nature of Necessity", 1974], ["Warranted Christian Belief", 2000]], [sep("https://plato.stanford.edu/entries/religion-epistemology/")]),
    f("Richard Swinburne", [1934, null], "mann", ["Religionsfilosofi"], ["Ny religionsfilosofi"], ["Gudsbevis", "Kropp og sjel"], [1977, null], "Keele og Oxford", `
      Engelsk filosof i Oxford, ledende forsvarer av at tro på Gud kan begrunnes med sannsynlighetsargumenter. I «The Existence of God» legger han sammen mange argumenter og hevder at gudstroen er den enkleste forklaringen på at det finnes en orden i verden. Han forsvarer også kropp-sjel-dualisme. J.L. Mackie og andre har tatt til motmæle. Han gikk over til ortodoks kristendom i voksen alder.
    `, [["The Coherence of Theism", 1977], ["The Existence of God", 1979], ["The Evolution of the Soul", 1986]], [sep("https://plato.stanford.edu/entries/religion-epistemology/")]),
    f("William Alston", [1921, 2009], "mann", ["Religionsfilosofi", "Erkjennelsesteori"], ["Ny religionsfilosofi"], ["Erfaring"], [1964, 2009], "Michigan og Syracuse", `
      Amerikansk filosof, en av grunnleggerne av Society of Christian Philosophers og også sentral i språkfilosofi og erkjennelsesteori. «Perceiving God» hevder at religiøs erfaring kan være kunnskapskilde på linje med sansning, siden vi heller ikke kan begrunne sanseoppfatning uten å forutsette den selv. Han var musiker før han gikk over til filosofien.
    `, [["Philosophy of Language", 1964], ["Perceiving God", 1991]], [sep("https://plato.stanford.edu/entries/religion-epistemology/")]),
  ],
};
