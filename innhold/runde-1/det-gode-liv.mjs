// Runde 1: Det gode liv. Retningen, epokene, filosofene og påvirkningene (steg 7, skrevet av Opus 2026-11-02).
import { sep, iep, snl, bok, filosof, epoke, strek } from "../kilder.mjs";

const R = "Det gode liv";
const f = filosof(R);
const HELL = sep("https://plato.stanford.edu/entries/stoicism/");
const SKEP = sep("https://plato.stanford.edu/entries/skepticism-ancient/");
const UTIL = sep("https://plato.stanford.edu/entries/utilitarianism-history/");
const META = sep("https://plato.stanford.edu/entries/metaethics/");
const DYD = sep("https://plato.stanford.edu/entries/ethics-virtue/");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler tradisjonen som spør hvordan et menneske bør leve. Den begynner da sofistene og Sokrates flyttet filosofien fra naturen til mennesket, og går via kynikerne, Stoa, Epikur og skeptikerne til renessansens humanister, moralsansfilosofene, utilitaristene og vår tids etikk. I antikken var filosofi en livsform med øvelser for sinnet, ikke bare en teori. Moderne etikk har i større grad spurt hva som gjør handlinger riktige, og hva moralske påstander egentlig er. Siden Elizabeth Anscombes artikkel fra 1958 har det gamle spørsmålet om det gode liv kommet tilbake, og Kant, som også hører til denne samtalen, står under Fornuft og idé.
          `,
          kilder: [HELL, DYD],
        },
        story: {
          body: `
            ### Vendingen mot mennesket
            På 400-tallet f.Kr. kom Athen i sentrum. Sofistene lærte unge menn å tale og vinne, og Protagoras hevdet at mennesket er alle tings målestokk. Hvis alt er konvensjon, hva er da rettferdighet? Sokrates tok spørsmålet til torget, viste folk at de ikke visste hva de trodde de visste, og betalte med livet. Hans elever trakk ulike konsekvenser. Kynikerne valgte å leve i protest mot alle konvensjoner, Platon bygde en metafysikk, og Aristoteles gjorde *eudaimonia* til etikkens mål.

            ### Filosofi som terapi
            Etter Aleksanders tid var bystaten ikke lenger rammen om livet. De hellenistiske skolene svarte med å lære den enkelte å leve godt uansett kår. Stoikerne fant friheten i å skille mellom det som står i vår makt og det som ikke gjør det. Epikur lovet ro gjennom enkle gleder og frihet fra frykt for gudene og døden. Skeptikerne søkte det samme ved å holde dommen tilbake. Hos Seneca, Epiktet og Markus Aurelius ble dette daglige øvelser, og det er ikke tilfeldig at de leses igjen i dag.

            ### Tilbake til antikken
            Kristendommen tok over spørsmålet om det gode liv i tusen år. Da humanistene fra Petrarca av gikk tilbake til de antikke tekstene, var det med en ny interesse for det jordiske livet, for språket og for den enkelte. Erasmus forente dette med en enkel kristendom, og Montaigne skrev om seg selv, tvilen og døden med en åpenhet ingen hadde vist før.

            ### Moralens grunnlag
            1700-tallets britiske filosofer lette etter moralens kilde i menneskets egen natur. Shaftesbury, Francis Hutcheson og Adam Smith så den i en moralsk sans eller i sympati. Jeremy Bentham gjorde lykken til et mål som kan regnes ut, og John Stuart Mill og Henry Sidgwick utviklet utilitarismen videre. Det satte standarden for alt som kom etter: mot den står Kants plikt.

            På 1900-tallet spurte G.E. Moore og hans etterfølgere ikke hva som er godt, men hva ordet betyr. Metaetikken ble et felt i seg selv, og J.L. Mackie hevdet at alle moralske påstander er usanne. Elizabeth Anscombe og Philippa Foot førte etikken tilbake til dyd og menneskelig blomstring, og fra rundt 1970 tok Peter Singer og Judith Jarvis Thomson filosofien inn i spørsmål om dyr, abort og fattigdom. Slik er etikken igjen, som hos Sokrates, et spørsmål om hvordan vi faktisk skal leve.
          `,
        },
      },
    },
    main: {
      "Sofistene og Sokrates": epoke("ca. 450–300 f.Kr.", -450, -300, `
        I demokratiets Athen kunne dyktighet i tale gi makt, og omreisende lærere, sofistene, tok betalt for å lære den bort. De skilte mellom natur (*physis*) og konvensjon (*nomos*), og flere av dem hevdet at moral og lover er menneskeverk. Protagoras gjorde mennesket til målestokken, og Gorgias viste hva retorikken kunne få til. Platon og Aristoteles ga dem et dårlig ettermæle, som bare delvis er rettferdig.

        Sokrates ble regnet som sofist av mange samtidige, men tok aldri betalt og hevdet ikke å vite noe. Med sin *elenchos* prøvde han folks oppfatninger om dyd og rettferdighet og viste at de ikke holdt. Det uprøvde liv er ikke verdt å leve, sa han i retten. Athen dømte ham til døden i 399 f.Kr. for ugudelighet og for å forderve ungdommen. Alt vi vet om ham, kommer fra andre, og den historiske Sokrates er et uløst problem.

        Blant elevene hans var Antisthenes, som lærte at dyden er nok til et lykkelig liv. Kynikerne gjorde dette til en livsform og en provokasjon. Diogenes fra Sinope levde uten skam på gaten, kalte seg verdensborger, *kosmopolites*, og ble kalt «en Sokrates som har blitt gal». Krates fra Theben ga bort formuen sin og levde med Hipparkia, en av få kvinner vi kjenner fra antikkens filosofi.
      `, `
        Athens demokrati og sjøimperium under Perikles, deretter Peloponneserkrigen (431–404 f.Kr.), pest og nederlag. Tyranniet i 404 f.Kr. var ledet av tidligere venner av Sokrates, og det kan forklare noe av fiendskapen mot ham. I kynikernes tid var Athens makt brutt, og Makedonia tok over.
      `, `
        Tragedien og komedien tok opp samme spørsmål om lov og rett, og Aristofanes gjorde narr av Sokrates. Høyere utdanning var ny, og det var sofistene som tilbød den. Kynikerne drev filosofien på torg og i gater, uten skole, og anekdoter hos Diogenes Laertios er hovedkilden til dem.
      `, [sep("https://plato.stanford.edu/entries/socrates/"), sep("https://plato.stanford.edu/entries/protagoras/"), iep("https://iep.utm.edu/sophists/"), iep("https://iep.utm.edu/cynics/")]),

      "Stoisismen": epoke("ca. 300 f.Kr.–180", -300, 180, `
        Zenon fra Kition begynte å undervise i en søylehall, Stoa Poikile, i Athen rundt 300 f.Kr., og skolen fikk navnet derfra. Hele naturen er styrt av en fornuftig orden, *logos*, og det gode livet er å leve i samsvar med den. Bare dyden er god, og alt annet, også helse og rikdom, er likegyldig for lykken. Krysippos ga læren dens systematiske form og skapte en utsagnslogikk som først ble fullt ut forstått på 1900-tallet. Stoikerne hevdet at alt er bestemt, men at vi likevel er ansvarlige, for det handler om hvordan vi stiller oss til det som skjer.

        I Roma ble stoisismen en praktisk livsfilosofi for både slaver og keisere. Seneca skrev brev og essays om sinne, livets korthet og døden. Epiktet var født som slave, og hans *Samtaler* begynner med skillet mellom det som står i vår makt og det som ikke gjør det. Markus Aurelius skrev sine «Selvbetraktninger» som åndelige øvelser til seg selv, i felttelt langs Donau. Tanken om en naturlov som gjelder alle mennesker, gikk videre til kirkefedrene, naturretten og forestillingen om menneskers likeverd, og den moderne kognitive terapien har hentet direkte inspirasjon fra Epiktet.
      `, `
        Aleksanders rike ble delt mellom generalene hans, og bystaten var ikke lenger et fritt fellesskap. Mange av de tidlige stoikerne kom fra østlige områder utenfor Hellas. I Romerrikets storhetstid var Seneca rådgiver for Nero og ble tvunget til å ta sitt eget liv, og keiser Domitian forviste filosofene fra Roma rundt år 90.
      `, `
        Athen var filosofiens hovedstad med fire store skoler, og stoikerne utviklet språkteori og grammatikk som ble grunnlaget for senere læreverk. I Roma var filosofi del av overklassens utdannelse, og gresk var fortsatt filosofiens språk. Cicero hadde gjort mye av den tilgjengelig på latin, og Markus Aurelius opprettet lærestoler i de fire skolene i Athen i 176.
      `, [HELL, iep("https://iep.utm.edu/stoicism/"), sep("https://plato.stanford.edu/entries/seneca/"), sep("https://plato.stanford.edu/entries/epictetus/")]),

      "Epikureismen": epoke("ca. 306 f.Kr.–", -306, null, `
        Epikur kjøpte en hage utenfor Athens bymur i 306 f.Kr. og levde der med venner, også kvinner og slaver. Målet er glede, *hedone*, men forstått som fravær av smerte i kroppen og uro i sjelen, *ataraksi*. Enkle behov er lette å fylle, og vennskap er det viktigste vi har. Læren er derfor langt fra det vi i dag kaller epikureisk.

        Grunnlaget er atomismen. Alt består av atomer og tomrom, gudene bryr seg ikke om oss, og sjelen oppløses ved døden. Derfor er døden ingenting for oss: når vi er til, er den ikke, og når den er, er ikke vi. Lukrets gjorde læren til stor poesi. Kristne forfattere angrep den, men da diktet hans ble funnet igjen i 1417, ble det viktig for den moderne materialismen.
      `, `
        Tiden etter Aleksander, med krig mellom etterfølgerne hans og usikkerhet i Athen. Epikur rådet folk til å holde seg unna politikken: «lev i det skjulte». Læren spredte seg raskt til Italia og i det romerske riket.
      `, `
        Epikur skrev brev for å holde vennekretser sammen rundt i den greske verden, og skolen hans var en livsform mer enn et studium. En stor innskrift fra Oinoanda og forkullede ruller fra Herculaneum viser hvor bred bevegelsen var.
      `, [sep("https://plato.stanford.edu/entries/epicurus/"), iep("https://iep.utm.edu/epicur/")]),

      "Skeptisismen": epoke("ca. 300 f.Kr.–200", -300, 200, `
        Antikkens skepsis har to linjer. Pyrrhon levde etter en lære om at ingen ting kan avgjøres, og at sinnsro følger når vi lar være å dømme. I Akademiet gjorde Arkesilaos og Karneades skepsisen til metode: de viste at stoikernes kunnskapskriterium ikke holdt, og argumenterte for og imot enhver påstand.

        Sextus Empiricus samlet pyrrhonismen rundt år 200 i bøker som er vår viktigste kilde. Skeptikeren påstår ikke at kunnskap er umulig, men fortsetter å undersøke og holder dommen tilbake, *epokhe*, og finner ro på veien. Da Sextus ble trykt på latin i 1562, ga det støtet til Montaigne og Descartes, og hele den moderne erkjennelsesteorien kan leses som svar på utfordringen.
      `, `
        Hellenistisk tid og tidlig romersk keisertid. Karneades reiste til Roma som utsending i 155 f.Kr., talte for rettferdigheten én dag og mot den den neste, og vakte harme hos Cato den eldre.
      `, `
        Skolestriden i Athen, særlig mellom Akademiet og Stoa, drev fram skarpere argumenter om hva kunnskap er. Medisinen hadde også sin empiriske skole, og Sextus kan selv ha vært lege der.
      `, [SKEP, iep("https://iep.utm.edu/skepanci/")]),

      "Renessansen": epoke("ca. 1350–1600", 1350, 1600, `
        Renessanse betyr gjenfødelse, og det som skulle fødes på nytt, var antikken. Humanisme var opprinnelig navnet på et lærdomsprogram: studiet av grammatikk, retorikk, historie, poesi og moralfilosofi hos de antikke forfatterne. Mot universitetenes skolastikk satte humanistene eleganse, historisk bevissthet og interesse for det levde livet. Petrarca samlet håndskrifter og skrev brev til Cicero, og Lorenzo Valla viste med språklige bevis at Konstantins gavebrev var en forfalskning.

        Da greske lærde kom til Italia på 1400-tallet, ble hele Platon tilgjengelig. Marsilio Ficino oversatte alle dialogene og Plotin til latin, og Pico della Mirandola skrev i «Om menneskets verdighet» at mennesket ikke har noen fast plass, men former seg selv. I Firenze så Niccolò Machiavelli på politikken slik den er, ikke slik den burde være: fyrsten må være både rev og løve. Jean Bodin fant i de franske religionskrigene begrepet suverenitet.

        Nord for Alpene fikk bevegelsen en kristen form hos Erasmus, som ga ut Det nye testamente på gresk. Martin Luther brukte humanistenes tekstkritikk, men angrep Aristoteles som lærer for teologer og skrev mot Erasmus at viljen er bundet. Mennesket er rettferdig ved troen alene. Philipp Melanchthon og Jean Calvin ga reformasjonen en systematisk lære, og Skriften skulle nå tolkes av den enkelte. Montaigne skrev på bakgrunn av religionskrigene og spurte: *Que sais-je?* Hva vet jeg? Renessansens tenkere var ikke sekulære i vår forstand, men de endret hvordan europeere leste, skrev og tenkte om seg selv.
      `, `
        Rike bystater i Italia, svartedauden (1347–1351) og det store skismaet i kirken. Konstantinopels fall i 1453 brakte greske lærde vestover, og Italia ble invadert av Frankrike og Spania fra 1494. Luthers teser i 1517 delte Europa, og Danmark-Norge ble protestantisk i 1537. Montaigne opplevde de franske religionskrigene som ordfører i Bordeaux.
      `, `
        Tapte verk av Cicero, Lukrets og Quintilian ble funnet i klosterbibliotekene, og boktrykket spredte dem fra 1460-tallet. Humanistskoler og hoff ga stillinger utenfor universitetene, og filologi og kildekritikk ble nye redskaper. Bibelen kom på folkespråkene, og reformasjonen krevde lesekyndighet.
      `, [sep("https://plato.stanford.edu/entries/humanism-civic/"), sep("https://plato.stanford.edu/entries/ficino/"), sep("https://plato.stanford.edu/entries/machiavelli/"), sep("https://plato.stanford.edu/entries/luther/"), sep("https://plato.stanford.edu/entries/montaigne/")]),

      "Utilitarismen": epoke("1789–1900", 1789, 1900, `
        Utilitarismen hevder at det riktige er det som gir størst samlet lykke, der alle teller likt. Jeremy Bentham gjorde dette til et reformprogram: lover og straff skal vurderes etter virkningene, ikke etter tradisjon. Lyst og smerte kan regnes på. John Stuart Mill forsvarte læren med et skille mellom høyere og lavere nytelser, og Henry Sidgwick ga den en grundig filosofisk framstilling.

        Teorien er radikal fordi den ikke gjør forskjell på mennesker etter stand, og Bentham tok også med dyrenes lidelse. Den ble brukt i kampen for reformer av straff, stemmerett og kvinners rettigheter. Kritikerne har innvendt at den kan rettferdiggjøre å ofre enkeltmennesker, og at ikke alt lar seg måle på én skala.
      `, `
        Industrialisering og politiske reformkrav i Storbritannia, med reformloven i 1832 og opphevelsen av slaveriet i det britiske imperiet i 1833. Filosofiske radikale som Bentham og James Mill ville bytte ut privilegier med nyttige lover.
      `, `
        Økonomi og statistikk ga redskaper for å studere samfunnet. University College London ble grunnlagt i 1826 i Benthams ånd, uten religiøse krav. Mange utilitarister var også økonomer eller embetsmenn.
      `, [UTIL, sep("https://plato.stanford.edu/entries/bentham/"), sep("https://plato.stanford.edu/entries/sidgwick/")]),

      "Metaetikken": epoke("1903–1980", 1903, 1980, `
        Metaetikken spør ikke hva som er rett, men hva moralske ord betyr og om moralske fakta finnes. G.E. Moore åpnet feltet i 1903: godt kan ikke defineres, og å prøve er en naturalistisk feilslutning. W.D. Ross utviklet en intuisjonisme der vi kjenner flere grunnleggende plikter direkte. Med logisk positivisme kom emotivismen: hos A.J. Ayer uttrykker moralske utsagn bare følelser, og er verken sanne eller usanne.

        R.M. Hare gjorde moralspråket til universelle påbud. J.L. Mackie hevdet at moralsk tale mener å beskrive objektive verdier, men at slike ikke finnes, så alle moralske påstander er usanne. Debatten mellom realister og antirealister er fortsatt åpen, og feltet har gjort filosofene mer påpasselige med hva de faktisk påstår i etikken.
      `, `
        To verdenskriger, totalitære regimer og tap av felles religiøse rammer gjorde spørsmålet om moralens status påtrengende. Paradoksalt nok ble filosofien samtidig mer teknisk og mindre opptatt av konkrete moralske problemer.
      `, `
        Analytisk språkfilosofi preget Cambridge og Oxford, og oppmerksomheten vendte seg mot ord og begreper. Antropologien viste hvor forskjellige moralsystemer kan være, noe som styrket relativismen.
      `, [META, sep("https://plato.stanford.edu/entries/moore-moral/"), sep("https://plato.stanford.edu/entries/moral-anti-realism/")]),

      "Dydsetikken": epoke("1958–", 1958, null, `
        I artikkelen «Modern Moral Philosophy» (1958) hevdet Elizabeth Anscombe at begreper som moralsk plikt ikke gir mening uten en guddommelig lovgiver, og at filosofene burde gå tilbake til Aristoteles. Sammen med Philippa Foot begynte hun å spørre om karakter, dyd og menneskelig blomstring, ikke hvilken regel som avgjør en handling.

        Alasdair MacIntyre utvidet angrepet i «After Virtue» (1981): moderne moral er rester av en tradisjon vi har glemt, og derfor er våre debatter uløselige. Martha Nussbaum og Rosalind Hursthouse har utviklet retningen videre. Dydsetikken regnes nå som et tredje alternativ til utilitarisme og pliktetikk, med egne bidrag i anvendt etikk.
      `, `
        Etterkrigstiden, med Nürnberg-prosessene og atombomben. Anscombe protesterte mot at Oxford ga Truman æresdoktorgrad i 1956 fordi hun regnet Hiroshima som massemord. Det var en tid da mange savnet en moralfilosofi som kunne si noe om slike saker.
      `, `
        Kvinnelige filosofer i Oxford, som Anscombe, Foot, Iris Murdoch og Mary Midgley, hadde kommet fram mens mennene var i krigen, og de ble en viktig motvekt mot språkanalysen. Wittgensteins senfilosofi ga dem redskaper.
      `, [DYD, sep("https://plato.stanford.edu/entries/anscombe/"), sep("https://plato.stanford.edu/entries/aristotle-ethics/")]),

      "Anvendt etikk": epoke("ca. 1970–", 1970, null, `
        Rundt 1970 vendte filosofene tilbake til de konkrete spørsmålene. Judith Jarvis Thomsons artikkel om abort (1971) og Peter Singers «Famine, Affluence, and Morality» (1972) viste at nøye argumenter kunne utfordre det folk tok for gitt. Singers «Animal Liberation» (1975) ble en grunnbok for dyrevernbevegelsen. Medisinsk etikk, næringslivsetikk og teknologietikk ble egne felt.

        Hans Jonas ga miljøetikken et grunnlag ved å spørre hvilket ansvar vi har for dem som ennå ikke er født, og Arne Næss skilte mellom grunn og dyp økologi. Klima og kunstig intelligens har senere blitt sentrale tema. Teori og praksis virker her begge veier, for tilfellene kan også tvinge fram revisjon av teorien.
      `, `
        Borgerrettsbevegelsen, Vietnamkrigen, abortkampen, kvinnebevegelsen og miljøbevegelsen. Rachel Carsons «Silent Spring» (1962) og oljekrisen satte natur og framtid på dagsordenen.
      `, `
        Ny medisinsk teknologi som respiratorer, organtransplantasjon og prøverørsbefruktning reiste spørsmål ingen hadde stilt før. Bioetiske sentre ble opprettet i USA, og tidsskriftet «Philosophy & Public Affairs» startet i 1971.
      `, [sep("https://plato.stanford.edu/entries/abortion/"), sep("https://plato.stanford.edu/entries/ethics-environmental/"), sep("https://plato.stanford.edu/entries/moral-animal/")]),
    },
  },

  edgeDescriptions: {
    naturfilosofene__sokrates: strek(`Som ung skal Sokrates ha vært interessert i naturfilosofi, men Platon lar ham fortelle at han vendte seg bort fra den. Filosofien skulle nå handle om hvordan vi bør leve.`),
    sokrates__stoisismen: strek(`Zenon fra Kition var elev av kynikeren Krates fra Theben. Stoa arvet kynikernes tanke om at dyden er det eneste gode, men forente den med logikk og fysikk.`),
    naturfilosofene__epikureismen: strek(`Epikur tok over Demokrits atomer, men la til en liten avvikning i atomenes bane for å gi rom for frihet.`),
    sokrates__skeptisismen: strek(`Arkesilaos gjorde Akademiet skeptisk ved å vende tilbake til Sokrates, som ikke hevdet å vite noe, og som prøvde alle andres påstander.`),
    stoisismen__renessansen: strek(`Seneca var en av humanistenes mest leste forfattere, og Justus Lipsius utviklet på 1500-tallet en kristen nystoisisme.`),
    nyplatonismen__renessansen: strek(`Marsilio Ficino oversatte Plotin så vel som Platon, og leste Platon gjennom ham. Renessansens Platon er derfor i stor grad nyplatonikernes Platon.`),
    skeptisismen__renessansen: strek(`Da Sextus Empiricus ble trykt på latin i 1562, fikk Montaigne stoffet til sin «Apologie de Raimond Sebond», den mest berømte skeptiske teksten fra renessansen.`),
    skolastikken__renessansen: strek(`Petrarca og hans etterfølgere hånte universitetenes språk og spissfindigheter, og Luther kalte Aristoteles en forbannet hedning. Motsetningen er delvis overdrevet, for humanister og skolastikere fantes side om side i mange byer.`),
    empirismen__utilitarismen: strek(`Jeremy Bentham fant nytteprinsippet hos David Hume og bygde etikken på et bilde av mennesket som styrt av lyst og smerte. John Stuart Mill skrev en empiristisk logikk ved siden av etikken.`),
    opplysningen__utilitarismen: strek(`Formelen om størst mulig lykke for flest finnes allerede hos Francis Hutcheson og Cesare Beccaria. Bentham tok den med seg, og ville som opplysningsfilosofene reformere lover og straff etter fornuftige prinsipper.`),
    utilitarismen__metaetikken: strek(`G.E. Moore åpnet «Principia Ethica» med et angrep på Sidgwick og Mill, og hevdet at de begge begikk en feil ved å definere det gode. Han beholdt likevel en form for konsekvensetikk.`),
    logiskanalyse__metaetikken: strek(`Moore er med blant grunnleggerne av analytisk filosofi, og hans metode for begrepsanalyse ga metaetikken form. Ayer flyttet spørsmålet videre inn i den logiske empirismen.`),
    aristotelismen__dydsetikken: strek(`Elizabeth Anscombe ba filosofene gå tilbake til Aristoteles, og hans *eudaimonia* og dydslære er retningens utgangspunkt.`),
    utilitarismen__dydsetikken: strek(`Anscombe laget ordet *konsekvensialisme* i 1958 og brukte det nedsettende. Dydsetikken er langt på vei en reaksjon mot å regne ut hva som er riktig å gjøre.`),
    utilitarismen__anvendtetikk: strek(`Peter Singers arbeid med dyr og fattigdom bygger på utilitaristisk argumentasjon, og han er tradisjonens mest kjente stemme i dag.`),
    dydsetikken__anvendtetikk: strek(`Dydsetikere har tatt for seg medisinske og miljøetiske spørsmål, og spør hva en god lege eller et godt forhold til naturen krever.`),
  },

  artists: [
    // --- Sofistene og Sokrates ---
    f("Protagoras", [null, null], "mann", ["Erkjennelsesteori", "Etikk"], ["Sofistene og Sokrates"], ["Sannhet", "Dyd"], [-450, -420], "Abdera og Athen", `
      Gresk tenker, den mest kjente av sofistene, og ifølge Platon den første som tok betaling for undervisning. Setningen om at mennesket er alle tings målestokk, er blitt lest som den første formuleringen av relativisme. Han skal ha skrevet at han ikke kunne vite om gudene finnes. Perikles ba ham skrive lover for kolonien Thurioi. Platon viste ham i en av dialogene sine stor respekt, til tross for uenigheten.
    `, [["Om sannheten"], ["Om gudene"]], [sep("https://plato.stanford.edu/entries/protagoras/")]),
    f("Gorgias", [null, null], "mann", ["Logikk og språk", "Estetikk"], ["Sofistene og Sokrates"], [], [-430, -380], "Leontinoi og Athen", `
      Gresk taler og lærer fra Sicilia, som kom til Athen som utsending i 427 f.Kr. og vakte oppsikt med stilen sin. Han hevdet at talen virker på sjelen som medisin på kroppen, og forsvarte Helena med at hun ble overtalt. Hans «Om ikke-væren» argumenterer ironisk for at ingenting finnes, og at om noe fantes, kunne det ikke vites eller meddeles. Platon gjorde ham til motstander i dialogen «Gorgias».
    `, [["Om ikke-væren"], ["Lovtale til Helena"]], [iep("https://iep.utm.edu/gorgias/")]),
    f("Sokrates", [-469, -399], "mann", ["Etikk"], ["Sofistene og Sokrates"], ["Dyd", "Dialektikk", "Sannhet", "Tvil"], [-430, -399], "Athen", `
      Gresk filosof, sønn av en steinhugger og en jordmor. Han skrev ingenting, og vi kjenner ham gjennom Platon, Xenofon og Aristofanes. I samtaler spurte han folk hva dyd og rettferdighet er, og avslørte at de ikke visste. Delfi-oraklet erklærte at ingen var visere enn ham, og det forsto han slik at han i det minste visste at han ikke visste. Dømt til døden i 399 f.Kr. drakk han giftbegeret i stedet for å flykte.
    `, [], [sep("https://plato.stanford.edu/entries/socrates/"), snl("https://snl.no/Sokrates")]),

    // --- Kynikerne (nå i Sofistene og Sokrates) ---
    f("Antisthenes", [null, null], "mann", ["Etikk"], ["Sofistene og Sokrates"], ["Dyd"], [-400, -365], "Athen", `
      Gresk filosof fra Athen, først elev av Gorgias og siden en nær følgesvenn av Sokrates, og var til stede da han døde. Dyden er nok til lykke, sa han, og den vinnes ved handling, ikke ved lærdom. Senere tradisjon gjorde ham til kynismens grunnlegger, selv om forskere nå er i tvil om hvor nært han sto Diogenes. Han skrev mye, men alt er tapt unntatt fragmenter og to korte taler.
    `, [], [iep("https://iep.utm.edu/cynics/")]),
    f("Diogenes fra Sinope", [null, -323], "mann", ["Etikk"], ["Sofistene og Sokrates"], ["Dyd", "Frihet"], [-360, -323], "Sinope, Athen og Korint", `
      Gresk filosof, kjent for å ha bodd i en stor krukke i Athen og for å ha gått rundt med lykt på høylys dag for å lete etter et menneske. Da Aleksander den store spurte om han hadde noe ønske, ba han ham flytte seg fra solen. Han kalte seg verdensborger og levde uten skam i offentligheten. Skriftene er tapt, og det meste er anekdoter, men Diogenes ble selve bildet på den frie filosofen.
    `, [], [iep("https://iep.utm.edu/diogsino/")]),
    f("Krates fra Theben", [null, null], "mann", ["Etikk"], ["Sofistene og Sokrates"], ["Dyd"], [-330, -285], "Theben og Athen", `
      Gresk filosof fra en rik familie, som ga bort formuen sin for å følge Diogenes fra Sinope. Han levde på gaten og ble vennlig mottatt i hjemmene i Athen fordi han mildnet folks uro med humor. Ekteskapet med Hipparkia vakte oppsikt. Som lærer for Zenon fra Kition er han bindeleddet mellom kynisme og stoisisme. Noen dikt og brokker av parodier er bevart.
    `, [], [iep("https://iep.utm.edu/cynics/")]),
    f("Hipparkia fra Maroneia", [null, null], "kvinne", ["Etikk"], ["Sofistene og Sokrates"], ["Kjønn"], [-320, -290], "Maroneia og Athen", `
      Gresk filosof, en av svært få kvinner vi kjenner fra antikk filosofi. Hun forlot en rik familie for å leve som kyniker med Krates fra Theben, og trosset dermed alle regler for en gresk kvinne. Diogenes Laertios forteller at hun deltok i symposier og slo tilbake når en mann mente hun burde holde seg ved vevstolen: hun brukte tiden på utdannelse. Skriftene er tapt.
    `, [], [iep("https://iep.utm.edu/cynics/")]),

    // --- Stoisismen ---
    f("Zenon fra Kition", [null, null], "mann", ["Etikk", "Metafysikk"], ["Stoisismen"], ["Dyd", "Logos"], [-300, -262], "Kition på Kypros og Athen", `
      Gresk filosof fra Kypros, Stoas grunnlegger. Etter sigende kom han til Athen etter et forlis, og leste om Sokrates i en bokhandel. Han fikk undervisning hos Krates fra Theben og andre, og begynte rundt 300 f.Kr. å undervise i Stoa Poikile. Det gode livet er å leve i samsvar med naturen. Hans skrift «Staten», med et bilde av et samfunn av vise, er tapt. Athen hedret ham med en offentlig begravelse.
    `, [["Staten"]], [sep("https://plato.stanford.edu/entries/stoicism/"), iep("https://iep.utm.edu/stoicism/")]),
    f("Kleanthes", [null, null], "mann", ["Religionsfilosofi", "Etikk"], ["Stoisismen"], ["Logos"], [-262, -230], "Assos og Athen", `
      Gresk filosof, tidligere bokser, som tjente til livets opphold ved å bære vann om natten, og etterfulgte Zenon fra Kition som skolens leder. Hans «Hymne til Zevs» er den best bevarte teksten fra den tidlige Stoa, og viser hvor religiøs læren kunne være: Zevs er den fornuften som gjennomstrømmer alt. Han kritiserte Aristarkos for å ha satt jorden i bevegelse.
    `, [["Hymne til Zevs"]], [sep("https://plato.stanford.edu/entries/stoicism/")]),
    f("Krysippos", [null, null], "mann", ["Logikk og språk", "Etikk"], ["Stoisismen"], ["Fri vilje", "Logos"], [-232, -206], "Soloi og Athen", `
      Gresk filosof, Stoas tredje leder og den som ga skolen dens system. I antikken het det at uten ham hadde det ikke vært noen Stoa. Han skal ha skrevet over 700 bøker, men bare fragmenter er bevart. Han utviklet en utsagnslogikk som var mer avansert enn Aristoteles' på viktige punkter, og hans forsvar for at determinisme og ansvar er forenlig, ligner moderne *kompatibilisme*.
    `, [], [sep("https://plato.stanford.edu/entries/stoicism/"), iep("https://iep.utm.edu/chrysipp/")]),

    // --- Epikureismen ---
    f("Epikur", [-341, -270], "mann", ["Etikk", "Metafysikk"], ["Epikureismen"], ["Ataraksi", "Kausalitet", "Fri vilje"], [-306, -270], "Samos og Athen", `
      Gresk filosof, grunnlegger av Hagen utenfor Athen, der også kvinner og slaver var med. Målet er glede, forstått som fravær av smerte og uro. Døden er ingenting for oss, og gudene blander seg ikke inn i verden. Vennskap er livets største gode. Av hundrevis av bokruller er bare tre brev og noen samlinger av utsagn bevart. Motstanderne gjorde navnet hans synonymt med nytelsessyke, men han levde selv svært enkelt.
    `, [["Brev til Menoikevs"], ["Hovedlærdommer"]], [sep("https://plato.stanford.edu/entries/epicurus/")]),
    f("Lukrets", [null, null], "mann", ["Metafysikk", "Etikk"], ["Epikureismen"], ["Ataraksi", "Kausalitet"], [-70, -55], "Roma", `
      Romersk dikter, forfatter av «De rerum natura», et langt lærediktet på latin som framstiller Epikurs filosofi. Han vil befri leseren fra frykten for gudene og døden, og forklarer alt ut fra atomer. Nesten ingenting er kjent om livet hans. Humanisten Poggio Bracciolini fant et håndskrift i 1417, og diktet ble en av kildene til moderne materialisme.
    `, [["De rerum natura"]], [sep("https://plato.stanford.edu/entries/lucretius/")]),

    // --- Skeptisismen ---
    f("Pyrrhon", [null, null], "mann", ["Erkjennelsesteori", "Etikk"], ["Skeptisismen"], ["Tvil", "Ataraksi"], [-325, -270], "Elis", `
      Gresk filosof, som fulgte Aleksander den store helt til India og der møtte vismenn. Han skrev ingenting. Eleven Timon av Flius forteller at ingen ting kan avgjøres, og at sinnsro følger av å holde dommen tilbake. Senere historier hevder at venner måtte hindre ham i å gå utfor stup, noe som trolig er vitser. Pyrrhonismen fikk navnet fra ham, flere hundre år etter hans død.
    `, [], [sep("https://plato.stanford.edu/entries/pyrrho/")]),
    f("Arkesilaos", [null, null], "mann", ["Erkjennelsesteori"], ["Skeptisismen"], ["Tvil"], [-268, -241], "Pitane og Athen", `
      Gresk filosof, leder av Platons akademi fra rundt 268 f.Kr. Han gjorde skolen skeptisk ved å vende tilbake til Sokrates' metode: argumentere mot enhver påstand og ikke hevde noe selv. Han angrep stoikernes kriterium for sikker kunnskap og hevdet at ingenting kan vites med visshet. Han skrev ingen bøker, og vi kjenner ham særlig gjennom Cicero.
    `, [], [sep("https://plato.stanford.edu/entries/arcesilaus/"), sep("https://plato.stanford.edu/entries/skepticism-ancient/")]),
    f("Karneades", [null, null], "mann", ["Erkjennelsesteori", "Etikk"], ["Skeptisismen"], ["Tvil", "Rettferdighet"], [-167, -129], "Kyrene og Athen", `
      Gresk filosof, den mest kjente lederen av det skeptiske Akademiet. I Roma i 155 f.Kr. talte han for rettferdighet én dag og mot den neste, til stor forargelse. Han utviklet en lære om hva som er sannsynlig eller overbevisende nok til å handle etter, selv uten sikker kunnskap. Som Sokrates skrev han ingenting. Eleven Kleitomakhos førte argumentene hans videre.
    `, [], [sep("https://plato.stanford.edu/entries/carneades/")]),
    f("Sextus Empiricus", [null, null], "mann", ["Erkjennelsesteori"], ["Skeptisismen"], ["Tvil", "Induksjon"], [160, 210], "Ukjent, trolig Alexandria eller Roma", `
      Gresk lege og filosof fra rundt år 200, vår viktigste kilde til pyrrhonismen. «Pyrrhoneiske grunntrekk» forklarer hvordan vi kan stille motstridende argumenter mot hverandre og la dommen falle bort. Det gir ro. Han angriper vitenskapene én for én, og har et tidlig argument mot induksjon. Latinske utgaver fra 1500-tallet påvirket Montaigne og den moderne filosofiens skeptiske krise.
    `, [["Pyrrhoneiske grunntrekk"], ["Mot lærerne"]], [sep("https://plato.stanford.edu/entries/sextus-empiricus/")]),

    // --- Romersk stoisisme (nå i Stoisismen) ---
    f("Seneca", [null, 65], "mann", ["Etikk"], ["Stoisismen"], ["Dyd", "Ataraksi"], [41, 65], "Córdoba og Roma", `
      Romersk filosof, dramatiker og statsmann fra Spania, lærer og senere rådgiver for keiser Nero. «Brev til Lucilius» og essayene om sinne, nåde og livets korthet er blant de mest leste tekstene fra antikken. Han ble styrtrik i keiserens tjeneste, og motsetningen til læren har forundret lesere siden. Nero beordret ham til å ta sitt eget liv i 65, en scene Tacitus beskriver i detalj.
    `, [["Om livets korthet"], ["Om sinne"], ["Brev til Lucilius"]], [sep("https://plato.stanford.edu/entries/seneca/")]),
    f("Epiktet", [null, null], "mann", ["Etikk"], ["Stoisismen"], ["Frihet", "Dyd"], [90, 135], "Hierapolis, Roma og Nikopolis", `
      Gresk stoiker, født som slave i Frygia, senere frigitt, og forvist fra Roma av Domitian. Han drev en skole i Nikopolis i dagens Hellas. Han skrev ingenting. Eleven Arrian nedtegnet «Samtaler» og den korte «Håndbok». Noe står i vår makt, våre vurderinger og valg, og noe gjør det ikke. Frihet ligger i å skille mellom dem. Moderne kognitiv atferdsterapi viser direkte til ham.
    `, [["Samtaler"], ["Håndbok"]], [sep("https://plato.stanford.edu/entries/epictetus/")]),
    f("Markus Aurelius", [121, 180], "mann", ["Etikk"], ["Stoisismen"], ["Dyd", "Logos"], [161, 180], "Roma og Donau-fronten", `
      Romersk keiser fra 161 og stoisk filosof. «Selvbetraktninger» er notater til ham selv, skrevet på gresk under felttog mot germanske stammer, og aldri ment for utgivelse. Han minner seg selv om at livet er kort, at andre gjør galt av uvitenhet, og at alt henger sammen. Som keiser tillot han likevel forfølgelse av kristne. Boken er blitt en av de mest leste filosofiske tekster i vår tid.
    `, [["Selvbetraktninger"]], [sep("https://plato.stanford.edu/entries/marcus-aurelius/")]),

    // --- Renessansehumanismen (nå i Renessansen) ---
    f("Petrarca", [1304, 1374], "mann", ["Etikk", "Estetikk"], ["Renessansen"], [], [1337, 1374], "Arezzo, Avignon og Vaucluse", `
      Italiensk dikter og lærd, ofte kalt humanismens far. Han lette i klosterbiblioteker etter Cicero og skrev brev direkte til de døde forfatterne. Han hevdet at det viktige ikke er å vite hva dyd er, men å få menneskene til å ønske den, og angrep aristotelikerne ved universitetene. Sonettene til Laura gjorde ham til en av Europas store dikternavn. Brevet om oppstigningen til Mont Ventoux i 1336 blir ofte lest som et bilde på renessansens nye blikk på verden.
    `, [["Secretum", 1347], ["De sui ipsius et multorum ignorantia", 1367], ["Canzoniere", 1374]], [snl("https://snl.no/Francesco_Petrarca")]),
    f("Lorenzo Valla", [null, 1457], "mann", ["Logikk og språk", "Etikk"], ["Renessansen"], [], [1431, 1457], "Roma og Napoli", `
      Italiensk humanist og språkgransker. Ved språklige bevis viste han i 1440 at Konstantins gavebrev, som paven støttet sin verdslige makt på, var et falsum. Slik ble filologien et skarpt våpen. «De voluptate» lar en epikureer komme sterkt til orde, og han ville rense filosofien for skolastikkens tekniske latin. Kommentarene hans til Det nye testamente inspirerte Erasmus.
    `, [["De voluptate", 1431], ["De falso credita et ementita Constantini donatione", 1440], ["Elegantiae linguae latinae", 1471]], [sep("https://plato.stanford.edu/entries/lorenzo-valla/")]),
    f("Erasmus", [1466, 1536], "mann", ["Religionsfilosofi", "Etikk"], ["Renessansen"], ["Fri vilje"], [1500, 1536], "Rotterdam, Cambridge og Basel", `
      Nederlandsk humanist og prest, sin tids mest berømte lærde. «Dårskapens pris» gjør narr av kirke og lærde, og hans greske utgave av Det nye testamente (1516) ble grunnlag for Luthers oversettelse. Han ville reformere kirken med dannelse, ikke splitte den. Striden med Luther om den frie viljen i 1524 og 1525 viser skillet mellom humanisme og reformasjon. Fødselsåret er usikkert.
    `, [["Moriae encomium", 1511], ["Novum Instrumentum", 1516], ["De libero arbitrio", 1524]], [sep("https://plato.stanford.edu/entries/erasmus/")]),
    f("Montaigne", [1533, 1592], "mann", ["Etikk", "Erkjennelsesteori"], ["Renessansen", "Skeptisismen"], ["Tvil"], [1572, 1592], "Bordeaux", `
      Fransk adelsmann, ordfører i Bordeaux og oppfinner av essayet som form. Han trakk seg tilbake til tårnet på slottet sitt og skrev om vennskap, kannibaler, døden, nyrestein og seg selv. Mottoet er *Que sais-je?* I «Apologie de Raimond Sebond» bruker han Sextus Empiricus til å vise fornuftens grenser. Han forsvarte toleranse under religionskrigene, og leses i dag som en av de første moderne, selvransakende stemmene.
    `, [["Essais", 1580]], [sep("https://plato.stanford.edu/entries/montaigne/")]),

    // --- Moralsansfilosofien (nå i Opplysningsfilosofien) ---
    f("Shaftesbury", [1671, 1713], "mann", ["Etikk", "Estetikk"], ["Opplysningsfilosofien"], ["Moralsk sans", "Det skjønne og det sublime"], [1699, 1713], "England og Napoli", `
      Engelsk adelsmann og filosof, Anthony Ashley Cooper, tredje jarl av Shaftesbury, oppdratt under John Lockes tilsyn. Mot Hobbes og sin gamle lærer hevdet han at mennesket av natur har sans for det gode og det skjønne, og at dyd og harmoni henger sammen. «Characteristicks» var et av de mest leste verkene på 1700-tallet og påvirket både Kant, Hutcheson og tysk estetikk. Dårlig helse fikk ham til å flytte til Italia, der han døde.
    `, [["Characteristicks of Men, Manners, Opinions, Times", 1711]], [sep("https://plato.stanford.edu/entries/shaftesbury/")]),
    f("Francis Hutcheson", [1694, 1746], "mann", ["Etikk", "Estetikk"], ["Opplysningsfilosofien"], ["Moralsk sans", "Nytteprinsippet", "Det skjønne og det sublime"], [1725, 1746], "Ulster, Dublin og Glasgow", `
      Irskfødt filosof, professor i Glasgow fra 1729 og en av den skotske opplysningens fedre. Han utviklet moralsansen: vi oppfatter det gode umiddelbart, slik vi oppfatter det skjønne. Han formulerte tidlig tanken om «størst mulig lykke for flest», og var mot slaveriet. Som forelesende lærer var han kjent for å være uvanlig varm, og Adam Smith var blant studentene hans.
    `, [["An Inquiry into the Original of Our Ideas of Beauty and Virtue", 1725], ["A System of Moral Philosophy", 1755]], [sep("https://plato.stanford.edu/entries/hutcheson/")]),
    f("Adam Smith", [1723, 1790], "mann", ["Etikk", "Politisk filosofi"], ["Opplysningsfilosofien"], ["Moralsk sans"], [1752, 1790], "Kirkcaldy, Glasgow og Edinburgh", `
      Skotsk filosof og økonom, professor i moralfilosofi i Glasgow. Han er mest kjent for «The Wealth of Nations», men regnet selv «The Theory of Moral Sentiments» som sitt beste verk. Moralen springer ut av sympati, og vi lærer å dømme oss selv gjennom en tenkt upartisk tilskuer. Bildet av ham som talsmann for bare egeninteresse er misvisende. Han er kritisk til handelsmenn og forsvarer arbeidere i flere sammenhenger.
    `, [["The Theory of Moral Sentiments", 1759], ["The Wealth of Nations", 1776]], [sep("https://plato.stanford.edu/entries/smith-moral-political/")]),

    // --- Utilitarismen ---
    f("Jeremy Bentham", [1748, 1832], "mann", ["Etikk", "Politisk filosofi"], ["Utilitarismen"], ["Nytteprinsippet"], [1776, 1832], "London", `
      Engelsk filosof og lovreformator, utilitarismens grunnlegger. Størst mulig lykke for flest er målestokken for både moral og lov. Lyst og smerte kan beregnes, og det spiller ingen rolle hvem som føler dem, heller ikke om det er et dyr: spørsmålet er om de kan lide. Han kalte naturretter «tull på stylter» og tegnet fengselet Panoptikon. Skjelettet hans står, kledd og utstoppet, ved University College London.
    `, [["A Fragment on Government", 1776], ["An Introduction to the Principles of Morals and Legislation", 1789], ["Panopticon", 1791]], [sep("https://plato.stanford.edu/entries/bentham/")]),
    f("Henry Sidgwick", [1838, 1900], "mann", ["Etikk"], ["Utilitarismen"], ["Nytteprinsippet", "Plikt"], [1874, 1900], "Cambridge", `
      Engelsk filosof i Cambridge. «The Methods of Ethics» vurderer nøye egoisme, intuisjonisme og utilitarisme og kommer til at to av dem står mot hverandre uten at fornuften kan avgjøre. Moderne analytisk etikk har sin stil herfra. Han sa opp stillingen sin i 1869 fordi han ikke lenger kunne stå inne for kirkens bekjennelse, og var med på å grunnlegge kvinnekollegiet Newnham.
    `, [["The Methods of Ethics", 1874]], [sep("https://plato.stanford.edu/entries/sidgwick/")]),

    // --- Metaetikken ---
    f("W.D. Ross", [1877, 1971], "mann", ["Etikk"], ["Metaetikken"], ["Plikt"], [1923, 1971], "Oxford", `
      Skotsk filosof i Oxford, kjent som Aristoteles-oversetter og for sin intuisjonisme. «The Right and the Good» hevder at vi kjenner flere grunnleggende plikter, som å holde løfter og ikke skade, og at de kan stå mot hverandre. Da må vi bruke dømmekraft, for ingen regel avgjør. Dette blir et alternativ både til Kant og til utilitarismen. Ross var også sentral i offentlig og akademisk liv under og etter krigen.
    `, [["The Right and the Good", 1930], ["Foundations of Ethics", 1939]], [sep("https://plato.stanford.edu/entries/william-david-ross/")]),
    f("R.M. Hare", [1919, 2002], "mann", ["Etikk"], ["Metaetikken"], ["Plikt", "Nytteprinsippet"], [1952, 2002], "Oxford og Florida", `
      Engelsk filosof, krigsfange hos japanerne under andre verdenskrig, en erfaring som gjorde moralske spørsmål presserende for ham. Moralske utsagn er verken beskrivelser eller rene følelser, men universelle påbud: den som sier noe er galt, må mene det samme om alle like tilfeller. Han mente at dette logisk fører fram til en form for utilitarisme. Peter Singer var hans elev.
    `, [["The Language of Morals", 1952], ["Freedom and Reason", 1963], ["Moral Thinking", 1981]], [sep("https://plato.stanford.edu/entries/hare/")]),
    f("J.L. Mackie", [1917, 1981], "mann", ["Etikk", "Religionsfilosofi"], ["Metaetikken"], ["Det ondes problem"], [1955, 1981], "Sydney, York og Oxford", `
      Australsk filosof i Oxford. «Ethics: Inventing Right and Wrong» åpner med at det ikke finnes objektive verdier. Moralsk språk forutsetter noe merkelig som ikke finnes i verden, og derfor er alle slike påstander usanne, en *feilteori*. I «The Miracle of Theism» argumenterer han mot Guds eksistens, og artikkelen «Evil and Omnipotence» er en klassiker om det ondes problem.
    `, [["Evil and Omnipotence", 1955], ["Ethics: Inventing Right and Wrong", 1977], ["The Miracle of Theism", 1982]], [sep("https://plato.stanford.edu/entries/moral-anti-realism/")]),

    // --- Dydsetikken ---
    f("Elizabeth Anscombe", [1919, 2001], "kvinne", ["Etikk", "Metafysikk"], ["Dydsetikken"], ["Dyd"], [1953, 2001], "Oxford og Cambridge", `
      Britisk filosof, elev og oversetter av Wittgenstein, som senere fikk hans gamle lærestol i Cambridge. «Modern Moral Philosophy» sendte dydsetikken på vei, og i «Intention» åpnet hun den moderne handlingsteorien. Hun var katolikk, mor til sju, og protesterte offentlig mot at Oxford ga Truman æresdoktorgrad. I samme artikkel fant hun opp ordet konsekvensialisme, og brukte det kritisk.
    `, [["Intention", 1957], ["Modern Moral Philosophy", 1958]], [sep("https://plato.stanford.edu/entries/anscombe/")]),
    f("Philippa Foot", [1920, 2010], "kvinne", ["Etikk"], ["Dydsetikken"], ["Dyd"], [1958, 2010], "Oxford og Los Angeles", `
      Britisk filosof i Oxford og barnebarn av den amerikanske presidenten Grover Cleveland. Hun utfordret det rådende skillet mellom fakta og verdier, og hevdet at moralsk godhet ligner god funksjon i levende vesener. Hun var med på å gjøre dydene aktuelle igjen. Trikkeproblemet, som hun introduserte i en artikkel om abort i 1967, er blitt filosofiens mest berømte tankeeksperiment.
    `, [["The Problem of Abortion and the Doctrine of Double Effect", 1967], ["Virtues and Vices", 1978], ["Natural Goodness", 2001]], [sep("https://plato.stanford.edu/entries/ethics-virtue/")]),
    f("Alasdair MacIntyre", [1929, 2025], "mann", ["Etikk", "Politisk filosofi"], ["Dydsetikken"], ["Dyd"], [1953, 2025], "Skottland, England og USA", `
      Skotskfødt filosof, først marxist og senere katolsk thomist. «After Virtue» hevder at moralske debatter i dag er uløselige fordi vi bruker fragmenter av en glemt tradisjon. Vi trenger igjen en aristotelisk forståelse av dyder knyttet til praksis, fellesskap og fortelling. Boken har påvirket langt utover filosofien, også innenfor politisk teori og teologi. Han avviste merkelappen kommunitarist, som andre ga ham.
    `, [["After Virtue", 1981], ["Whose Justice? Which Rationality?", 1988], ["Dependent Rational Animals", 1999]], [iep("https://iep.utm.edu/mac-over/")]),

    // --- Anvendt etikk ---
    f("Peter Singer", [1946, null], "mann", ["Etikk"], ["Anvendt etikk"], ["Nytteprinsippet", "Rettferdighet"], [1972, null], "Melbourne og Princeton", `
      Australsk filosof, den mest kjente utilitaristen i vår tid. «Animal Liberation» hevder at det ikke er noen god grunn til å overse dyrs lidelse, og har gitt navnet *spesiesisme* stor utbredelse. «Famine, Affluence, and Morality» sier at vi bør gi til de fattige så lenge det ikke koster oss noe av tilsvarende moralsk betydning. Han er en av inspirasjonene bak effektiv altruisme. Synene hans på livet til sterkt funksjonshemmede spedbarn har vakt store protester.
    `, [["Famine, Affluence, and Morality", 1972], ["Animal Liberation", 1975], ["Practical Ethics", 1979]], [snl("https://snl.no/Peter_Singer")]),
    f("Judith Jarvis Thomson", [1929, 2020], "kvinne", ["Etikk"], ["Anvendt etikk"], ["Rettferdighet"], [1971, 2020], "MIT i Massachusetts", `
      Amerikansk filosof ved MIT. «A Defense of Abortion» (1971) ber leseren tenke seg at hun våkner koblet til en berømt fiolinist som trenger nyrene hennes: selv om fosteret har rett til liv, følger det ikke at det har rett til en annens kropp. Argumentet er et av de mest omtalte i anvendt etikk. Hun ga også trikkeproblemet dets navn og videre form.
    `, [["A Defense of Abortion", 1971], ["The Trolley Problem", 1985], ["The Realm of Rights", 1990]], [sep("https://plato.stanford.edu/entries/abortion/")]),
    f("Arne Næss", [1912, 2009], "mann", ["Etikk", "Logikk og språk"], ["Anvendt etikk"], [], [1936, 2009], "Oslo og Tvergastein", `
      Norsk filosof, professor i Oslo allerede som 27-åring, kontakt med Wienerkretsen i ungdommen og kjent fjellklatrer. Han skrev om empirisk semantikk og om Gandhi og Spinoza. I en artikkel fra 1973 skilte han mellom grunn og *dyp økologi*: natur har verdi uansett nytte for mennesket. Dette gjorde ham til en av miljøbevegelsens mest kjente tenkere. Han lenket seg i 1970 til fjellet i protest mot utbyggingen av Mardøla.
    `, [["Interpretation and Preciseness", 1953], ["The Shallow and the Deep, Long-Range Ecology Movement", 1973], ["Økologi, samfunn og livsstil"]], [snl("https://snl.no/Arne_N%C3%A6ss"), sep("https://plato.stanford.edu/entries/ethics-environmental/")]),
    f("Hans Jonas", [1903, 1993], "mann", ["Etikk", "Religionsfilosofi"], ["Anvendt etikk"], ["Plikt"], [1934, 1993], "Tyskland, Palestina og New York", `
      Tysk-jødisk filosof, elev av Husserl og Heidegger, som flyktet i 1933 og kjempet i den britiske hæren. Moren ble drept i Auschwitz. Han skrev først om gnostisisme og senere en filosofi om det levende. «Das Prinzip Verantwortung» hevder at teknologi gir oss makt over kommende generasjoner, og at ny etikk er nødvendig: handle slik at menneskelig liv fortsatt kan bestå på jorden. Boken ble viktig for den tyske miljøbevegelsen.
    `, [["The Gnostic Religion", 1958], ["The Phenomenon of Life", 1966], ["Das Prinzip Verantwortung", 1979]], [sep("https://plato.stanford.edu/entries/ethics-environmental/")]),
  ],
};
