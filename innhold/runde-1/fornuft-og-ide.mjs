// Runde 1: Fornuft og idé. Retningen, epokene, filosofene og påvirkningene (steg 7, skrevet av Opus 2026-11-02).
import { sep, iep, snl, bok, filosof, epoke, strek } from "../kilder.mjs";

const R = "Fornuft og idé";
const f = filosof(R);
const PLATON = sep("https://plato.stanford.edu/entries/plato/");
const KANT = sep("https://plato.stanford.edu/entries/kant/");
const RE = sep("https://plato.stanford.edu/entries/rationalism-empiricism/");
const IDEAL = sep("https://plato.stanford.edu/entries/idealism/");
const NYKANT = sep("https://plato.stanford.edu/entries/neo-kantianism/");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler tradisjonen som søker virkeligheten gjennom fornuften. Den går fra pytagoreerne og Parmenides via Platon og nyplatonismen til Descartes, Spinoza og Leibniz, og videre til Kant og den tyske idealismen. Fellestrekket er tanken om at det sansene viser, ikke kan være hele sannheten: det finnes en orden som bare lar seg tenke. Kant snudde spørsmålet ved å undersøke hva fornuften selv bidrar med, og etter ham handler tradisjonen like mye om tenkningens egne former som om verden. Retningen lever videre i nykantianismen og hos dem som i dag leser Hegel med analytiske redskaper.
          `,
          kilder: [RE, IDEAL],
        },
        story: {
          body: `
            ### Det som bare kan tenkes
            Pytagoreerne så tall som nøkkelen til verdens orden, og Parmenides hevdet at bare det som er, kan tenkes, og at forandring derfor må være en illusjon. Her skiller tanke og sansning lag for første gang. Platon arvet begge linjene. Sansetingene er bare skygger av evige ideer, og kunnskap er å vende sjelen mot dem. Det er kanskje den mest innflytelsesrike tanken i vestlig filosofi.

            I senantikken gjorde Plotin dette til et helt verdenssystem: alt strømmer ut fra Det ene, og sjelen kan vende tilbake dit. Gjennom Augustin og Proklos preget nyplatonismen kristen, islamsk og jødisk tenkning i tusen år, og på 1400-tallet kom den tilbake i Firenze med Marsilio Ficino.

            ### Fornuftens systemer
            På 1600-tallet ga den nye matematiske naturvitenskapen rasjonalismen ny kraft. René Descartes ville bygge all kunnskap på det som ikke kan betviles, og fant det i tenkningen selv. Baruch Spinoza utledet Gud, naturen og moralen geometrisk, og G.W. Leibniz tenkte verden som en uendelighet av monader i forhåndsbestemt harmoni. Fornuften syntes i stand til å lese virkelighetens grunnstruktur.

            ### Kants vending
            Immanuel Kant satte en stopper for dette. Vi kan ikke vite noe om tingene i seg selv, bare om verden slik den framtrer gjennom sansningens og forstandens former. Men disse formene gjelder med nødvendighet for all erfaring, og dermed er kunnskap mulig. Fornuften er også kilde til moralen: den gir seg selv loven.

            J.G. Fichte, F.W.J. Schelling og G.W.F. Hegel ville oppheve Kants grense mellom ting og tanke. Hos Hegel er virkeligheten selv fornuftig, og historien er åndens vei mot selvinnsikt. Ingen filosofi har vært mer ambisiøs, og ingen har utløst sterkere reaksjoner: Kierkegaard, Schopenhauer og Marx tenker alle i oppgjør med ham.

            ### Etterklanger
            Nykantianerne gikk «tilbake til Kant» for å gi vitenskapene et filosofisk grunnlag, og Ernst Cassirer utvidet analysen til myte, språk og kunst. I Storbritannia ble idealismen rådende en generasjon rundt T.H. Green og F.H. Bradley, før Russell og Moore gjorde opprør. Mange trodde den saken var avgjort, men Wilfrid Sellars angrep myten om det gitte, og John McDowell og Robert Brandom har tatt Hegel tilbake til analytisk filosofi.
          `,
        },
      },
    },
    main: {
      "Pytagoreerne og eleatene": epoke("ca. 530–350 f.Kr.", -530, -350, `
        To skoler i de greske koloniene i Sør-Italia gjorde tenkningen selv til veien til sannhet. Pytagoras grunnla et brorskap i Kroton, med regler for livsførsel og en lære om at sjelen vandrer gjennom ulike liv. Hva han selv lærte, er svært usikkert. Sikrest er interessen for musikkens tallforhold: oktaven, kvinten og kvarten svarer til enkle brøker, og dette ble bildet på en orden som kan uttrykkes i tall. Med Filolaos og Arkytas ble tanken til filosofi og vitenskap, der tall og harmoni forklarer universet.

        I diktet sitt hevder Parmenides fra Elea at det bare finnes to veier for tanken: det er, eller det er ikke. Den andre kan ikke tenkes, og derfor kan det værende verken oppstå, forgå eller forandres. Alt sansene viser om mangfold og bevegelse, er bare menneskers mening. Dette er det første utvidede argumentet vi har i vestlig filosofi. Zenon fra Elea forsvarte læren med paradokser om Akilles og pilen, og Melissos gjorde argumentet systematisk.

        Begge skolene satte det bare fornuften kan gripe, over det sansene viser. Platon møtte pytagoreerne i Italia, og forestillingen om en matematisk orden bak det vi ser, gikk gjennom ham videre til Kepler og Galilei. Både atomistene og Platon kan leses som forsøk på å berge verden fra Parmenides.
      `, `
        Greske kolonier i Sør-Italia og på Sicilia (Magna Graecia) var rike, med egne politiske stridigheter. Pytagoreerne hadde politisk makt i Kroton og ble angrepet av motstandere rundt 450 f.Kr. Parmenides skal ha gitt Elea lover, og Melissos var en sjøkommandant fra Samos som slo Athens flåte i 441 f.Kr.
      `, `
        Matematikk, musikkteori og astronomi ble først drevet som et samlet studium hos pytagoreerne, som levde etter strenge regler om mat og taushet. Hos eleatene ble bevis og logisk slutning selve tenkningens metode, og Aristoteles kalte Zenon opphavsmannen til dialektikken.
      `, [sep("https://plato.stanford.edu/entries/pythagoreanism/"), sep("https://plato.stanford.edu/entries/parmenides/"), sep("https://plato.stanford.edu/entries/zeno-elea/")]),

      "Platonismen": epoke("ca. 387 f.Kr.–", -387, null, `
        Platon skrev dialoger der Sokrates spør seg fram, og utviklet gjennom dem læren om *ideene*: evige, uforanderlige former som sanseverdenen bare har del i. Å vite er ikke å se noe nytt, men å huske og forstå. Hulelignelsen i «Staten» viser hvordan oppstigningen fra skygger til det gode også er en politisk oppgave, for bare den som har sett det gode, kan styre.

        I sene dialoger som «Parmenides» kritiserer han selv ideelæren. I Akademiet, som han grunnla rundt 387 f.Kr., fortsatte Spevsippos og Xenokrates med å spørre om ideene kan være tall, og senere ble skolen skeptisk. Alfred North Whitehead hevdet at hele den europeiske filosofien er fotnoter til Platon. Det er overdrevet, men ikke mye.
      `, `
        Athen etter nederlaget i Peloponneserkrigen, med tyranniet i 404 f.Kr. og demokratiets dødsdom over Sokrates i 399 f.Kr. Platons skepsis til demokratiet springer ut av dette. Tre reiser til Syrakus viste hvor vanskelig filosofens styre var i praksis.
      `, `
        Akademiet var en skole utenfor bymurene der matematikk, dialektikk og politikk ble drevet sammen, og også kvinner skal ha deltatt. Det holdt i ulike former til keiser Justinian stengte de hedenske skolene i 529.
      `, [PLATON, sep("https://plato.stanford.edu/entries/plato-theaetetus/"), snl("https://snl.no/Platon")]),

      "Nyplatonismen": epoke("ca. 245–529", 245, 529, `
        Nyplatonismen er det moderne navnet på senantikkens tolkning av Platon, som begynte da Plotin slo seg ned i Roma i 244. Alt strømmer ut fra Det ene, som er hinsides væren og tanke, via ånden (*nous*) til sjelen og til slutt materien. Sjelen kan gjøre veien tilbake og i sjeldne øyeblikk bli ett med opphavet. Filosofi er her både teori og åndelig øvelse.

        Porfyr samlet læremesterens skrifter og skrev innledningen til Aristoteles' logikk som middelalderen leste, og som reiste spørsmålet om universaliene. Iamblikhos og Proklos gjorde systemet stadig mer sammensatt og knyttet det til rituell praksis. Læren preget Augustin, Pseudo-Dionysios og arabisk filosofi, ofte under falskt navn som Aristoteles' eller kristne forfatteres verk.
      `, `
        Romerriket gjennom krise på 200-tallet og kristningen fra Konstantin av. Hedenske filosofer ble en stadig mer trengt minoritet, og mordet på Hypatia i Alexandria i 415 viser spenningen. Athens skole ble stengt i 529.
      `, `
        Filosofi ble drevet som lesning og kommentar til Platon og Aristoteles, særlig i Athen og Alexandria. Bøker gikk fra rull til kodeks. Forholdet mellom filosofi, religion og magi ble diskutert åpent.
      `, [sep("https://plato.stanford.edu/entries/neoplatonism/"), sep("https://plato.stanford.edu/entries/plotinus/")]),

      "Rasjonalismen": epoke("1637–1716", 1637, 1716, `
        Rasjonalistene hevder at fornuften, ikke sansene, er kilden til sikker kunnskap, og at det finnes medfødte ideer. Matematikken er forbildet: fra selvinnlysende utgangspunkt kan man slutte seg fram. René Descartes tvilte på alt til han fant ett fast punkt, tenkningen selv, og delte verden i tenkende og utstrakt substans. Det reiste problemet med hvordan sjel og kropp kan virke på hverandre, og hele tiden etter ham strevde med det.

        Baruch Spinoza svarte med at det bare finnes én substans, Gud eller naturen. Nicolas Malebranche lot Gud være den eneste egentlige årsaken. G.W. Leibniz tenkte verden som enkle sjeleaktige enheter, monader, og hevdet at dette er den beste av alle mulige verdener. Merkelappen «rasjonalisme» er senere, og alle tre var dypt opptatt av den nye naturvitenskapen.
      `, `
        Trettiårskrigen og religiøs splittelse ga behov for et grunnlag utenfor konfesjonene. Spinoza levde i den toleransen Nederland kunne by på, og ble likevel lyst i bann av Amsterdams jødiske menighet. Leibniz arbeidet som rådgiver ved hoffet i Hannover.
      `, `
        Analytisk geometri og infinitesimalregning, som Descartes og Leibniz selv utviklet, ga tiltro til matematisk metode. Lærde korresponderte over hele Europa i det som ble kalt republikken av brev. Mange av de viktigste filosofene hadde ingen universitetsstilling.
      `, [RE, sep("https://plato.stanford.edu/entries/descartes/"), sep("https://plato.stanford.edu/entries/spinoza/"), sep("https://plato.stanford.edu/entries/leibniz/")]),

      "Kantianismen": epoke("1781–1933", 1781, 1933, `
        Immanuel Kant kalte sitt grep en kopernikansk vending: i stedet for å spørre hvordan kunnskapen retter seg etter tingene, spør han hvordan tingene må rette seg etter våre erkjennelsesformer. Rom, tid og kategorier som årsak kommer fra oss, og gjelder derfor nødvendig for alt vi kan erfare. Men tingene slik de er i seg selv, kan vi ikke vite noe om. I moralen er fornuften lovgiver. Det kategoriske imperativ krever at jeg bare handler etter regler jeg kan ville skal gjelde for alle, og at mennesket aldri bare er et middel.

        Etter idealismens sammenbrudd lød parolen «tilbake til Kant». I Marburg gjorde Hermann Cohen filosofien til vitenskapslogikk, mens Wilhelm Windelband og Heinrich Rickert i Sørvest-Tyskland skilte historiefagene, som beskriver det enkeltstående, fra naturvitenskapene, som søker lover. Ernst Cassirer utvidet analysen til alle kulturens symbolske former. Denne *nykantianismen* dominerte tyske universiteter rundt 1900 og formet Max Weber og den unge Heidegger. Debatten mellom Cassirer og Heidegger i Davos i 1929 markerte slutten på den. Nesten all senere filosofi, analytisk som kontinental, tar utgangspunkt i Kant eller gjør opprør mot ham.
      `, `
        Opplyst enevelde i Preussen under Fredrik den store, som ga rom for religionskritikk, og den franske revolusjonen, som Kant fulgte med sympati. Nykantianerne virket i det tyske keiserriket fra 1871, og mange av dem var jøder som måtte flykte etter 1933.
      `, `
        Newtons fysikk var et faktum som måtte forklares, og Humes skepsis var den utfordringen som vekket Kant av hans dogmatiske slummer. Kant holdt forelesninger i Königsberg i over førti år. Rundt 1900 dominerte naturvitenskapene universitetene, og spørsmålet om åndsvitenskapenes egen metode ble akutt.
      `, [KANT, sep("https://plato.stanford.edu/entries/kant-moral/"), NYKANT, sep("https://plato.stanford.edu/entries/cassirer/")]),

      "Tysk idealisme": epoke("1794–ca. 1920", 1794, 1920, `
        Etterfølgerne mente at Kants ting i seg selv var en rest som måtte bort: hvis tenkningen har sine egne former, hvorfor skulle det finnes noe utenfor? J.G. Fichte gjorde det handlende jeget til all virkelighets utgangspunkt. F.W.J. Schelling forsøkte å vise at natur og ånd har samme kilde, og at kunsten viser denne enheten.

        G.W.F. Hegel ga bevegelsen dens største form. Virkeligheten utvikler seg dialektisk gjennom motsigelser mot stadig mer omfattende enheter, og historien, staten, kunsten og religionen er stadier i åndens selvforståelse. Herre og knekt-avsnittet i «Åndens fenomenologi» gjør gjensidig anerkjennelse til selvbevissthetens vilkår. Etter hans død delte tilhengerne seg i en høyre og en venstre fløy.

        Hegelianismen fikk et langt etterliv i Storbritannia. Mot empirismen og utilitarismen satte T.H. Green at frihet er evnen til å virkeliggjøre seg selv i et fellesskap, og tanken bar fram en sosial liberalisme. F.H. Bradley hevdet at virkeligheten er ett udelt absolutt, og J.M.E. McTaggart at tiden er uvirkelig. Det var mot disse britiske idealistene Bertrand Russell og G.E. Moore gjorde opprør rundt 1900.
      `, `
        Den franske revolusjonen, Napoleonskrigene og oppløsningen av Det tysk-romerske riket i 1806. Hegel skal ha fullført «Åndens fenomenologi» mens Napoleon inntok Jena. De britiske idealistene virket i Viktoriatidens Storbritannia, og mange av dem var engasjert i sosialt reformarbeid.
      `, `
        Universitetet i Jena var sentrum i 1790-årene, med tette bånd til romantikerne og Goethe i Weimar. Berlin (1810), der både Fichte og Hegel underviste, ble modellen for det moderne universitetet. I Oxford fikk idealismen senere rollen som erstatning for en svekket teologi.
      `, [IDEAL, sep("https://plato.stanford.edu/entries/hegel/"), sep("https://plato.stanford.edu/entries/johann-fichte/"), sep("https://plato.stanford.edu/entries/green/"), sep("https://plato.stanford.edu/entries/bradley/")]),
    },
  },

  edgeDescriptions: {
    eleatene__platonismen: strek(`Platon møtte pytagoreerne i Italia, og ideene er uforanderlige og evige som Parmenides' væren. I «Sofisten» lar han en fremmed fra Elea lede samtalen og ta et oppgjør med forgjengeren.`),
    sokrates__platonismen: strek(`Platon var Sokrates' elev og gjorde ham til hovedperson i dialogene. Spørsmålene «hva er dyd?» og «hva er rettferdighet?» leder fram til læren om ideene.`),
    platonismen__nyplatonismen: strek(`Plotin så seg selv bare som en tolker av Platon. Særlig «Parmenides» og «Timaios» ble lest som nøkkeltekster om Det ene og verdens opprinnelse.`),
    platonismen__rasjonalismen: strek(`De medfødte ideene hos René Descartes og G.W. Leibniz har en forløper i Platons lære om at å vite er å huske. Tanken om en matematisk orden bak det synlige gikk videre gjennom renessansens platonister og Cambridge-platonistene.`),
    nyvitenskap__rasjonalismen: strek(`René Descartes og G.W. Leibniz var selv naturvitere og matematikere. Rasjonalismen er et forsøk på å gi den nye vitenskapen et sikkert grunnlag.`),
    skolastikken__rasjonalismen: strek(`Descartes gikk på jesuittskolen i La Flèche og lærte skolastikken der. Metoden hans er et oppgjør med den, men begreper som substans er overtatt derfra.`),
    rasjonalismen__kantianismen: strek(`Kant vokste opp i Leibniz' og Christian Wolffs tradisjon, og beholdt tanken om at noe i kunnskapen er nødvendig og a priori, men begrenset den til erfaringens område.`),
    empirismen__kantianismen: strek(`David Hume vekket Kant av hans «dogmatiske slummer». «Kritikk av den rene fornuft» kan leses som et svar på hans tvil om årsak, og en mekling mellom de to leirene.`),
    kantianismen__tyskidealisme: strek(`Fichte mente han bare gjorde Kant konsekvent, men Kant tok offentlig avstand. Hele idealismen springer ut av spørsmålet om hva tingen i seg selv kan være.`),
  },

  artists: [
    // --- Pytagoreerne (nå i Pytagoreerne og eleatene) ---
    f("Pytagoras", [null, null], "mann", ["Metafysikk"], ["Pytagoreerne og eleatene"], ["Det skjønne og det sublime"], [-530, -490], "Samos og Kroton", `
      Gresk tenker fra Samos som rundt 530 f.Kr. slo seg ned i Kroton i Sør-Italia og grunnla et brorskap. Han lærte at sjelen er udødelig og vandrer mellom kropper. Ingen skrifter er bevart, og senere tradisjon har gjort ham til en nesten overnaturlig vismann. Læren om tallenes kraft kan like gjerne stamme fra etterfølgerne, og det er tvilsomt om han beviste teoremet som bærer navnet hans.
    `, [], [sep("https://plato.stanford.edu/entries/pythagoras/")]),
    f("Filolaos", [null, null], "mann", ["Metafysikk"], ["Pytagoreerne og eleatene"], [], [-430, -385], "Kroton", `
      Gresk filosof fra Kroton, den første pytagoreeren som skrev en bok. Fragmentene hevder at verden består av det ubegrensede og det begrensende, holdt sammen av harmoni, og at det bare er gjennom tall vi kan vite noe. Han lot jorden kretse om en sentral ild, og ble derfor regnet som en forløper for Kopernikus. Mye av det Aristoteles sier om pytagoreerne, kan stamme fra ham.
    `, [["Om naturen"]], [sep("https://plato.stanford.edu/entries/philolaus/")]),
    f("Arkytas", [null, null], "mann", ["Vitenskapsfilosofi"], ["Pytagoreerne og eleatene"], [], [-400, -350], "Tarent", `
      Gresk matematiker, filosof og statsmann fra Tarent, der han ble valgt til feltherre gang på gang. Han løste problemet med å fordoble terningen, og skrev om musikkens tallforhold. Han var venn av Platon og hjalp ham under oppholdet på Sicilia. Argumentet hans for et uendelig univers, om mannen som rekker ut armen ved verdens grense, er blitt brukt helt fram til vår tid.
    `, [], [sep("https://plato.stanford.edu/entries/archytas/")]),

    // --- Eleatene (nå i Pytagoreerne og eleatene) ---
    // Xenofanes kom til 2026-11-05: han er med i «Sofies verden» (innhold/runde-6/utvalg.mjs).
    f("Xenofanes", [null, null], "mann", ["Religionsfilosofi", "Erkjennelsesteori"], ["Pytagoreerne og eleatene"], [], [-540, -475], "Kolofon, Sicilia og Sør-Italia", `
      Gresk dikter og tenker fra Kolofon som reiste rundt i den greske verden i over seksti år. Han angrep Homer og Hesiod for å gi gudene menneskelige laster, og påpekte at etiopere og trakere lager guder som ligner dem selv. Mot dette satte han én gud, ulik menneskene både i kropp og tanke. Ingen mennesker vet det sikre, mente han, alle har bare sin mening. Antikke forfattere gjorde ham til grunnleggeren av den eleatiske skolen, men det er usikkert.
    `, [], [sep("https://plato.stanford.edu/entries/xenophanes/"), snl("https://snl.no/Xenofanes")]),
    f("Parmenides", [null, null], "mann", ["Metafysikk"], ["Pytagoreerne og eleatene"], ["Væren"], [-500, -450], "Elea", `
      Gresk filosof fra Elea, kjent for et dikt der en gudinne viser ham to veier. Sannhetens vei sier at det som er, er, og at det verken kan oppstå eller forgå. Meningenes vei gjelder det dødelige tror. Diktet regnes som det første sammenhengende argumentet i vestlig filosofi. Platon lar den gamle Parmenides diskutere med den unge Sokrates i dialogen som bærer navnet hans.
    `, [["Om naturen"]], [sep("https://plato.stanford.edu/entries/parmenides/")]),
    f("Zenon fra Elea", [null, null], "mann", ["Metafysikk"], ["Pytagoreerne og eleatene"], ["Dialektikk"], [-470, -430], "Elea", `
      Gresk filosof, elev av Parmenides. Han forsvarte læreren med paradokser som viser at mangfold og bevegelse fører til selvmotsigelser: Akilles kan aldri ta igjen skilpadden, og pilen i flukt står stille. Aristoteles kalte ham dialektikkens oppfinner. Paradoksene har vært diskutert av matematikere og filosofer helt til i dag. Han må ikke forveksles med stoikeren Zenon fra Kition.
    `, [], [sep("https://plato.stanford.edu/entries/zeno-elea/")]),
    f("Melissos", [null, null], "mann", ["Metafysikk"], ["Pytagoreerne og eleatene"], ["Væren"], [-450, -430], "Samos", `
      Gresk filosof og sjøkommandant fra Samos, som slo den athenske flåten i 441 f.Kr. Han ga Parmenides' lære en prosaform og endret den på ett viktig punkt: det værende er ikke avgrenset, men uendelig. Han hevdet også at tomrom ikke finnes, og at bevegelse derfor er umulig. Aristoteles så ned på ham, men Platon nevnte ham sammen med Parmenides.
    `, [], [sep("https://plato.stanford.edu/entries/presocratics/")]),

    // --- Platonismen ---
    f("Platon", [-427, -347], "mann", ["Metafysikk", "Politisk filosofi"], ["Platonismen"], ["Ideene", "Dialektikk", "Rettferdighet", "Kropp og sjel", "Det skjønne og det sublime", "Sannhet"], [-399, -347], "Athen og Syrakus", `
      Gresk filosof fra en fremstående athensk familie, elev av Sokrates og lærer for Aristoteles. Hans dialoger er grunnlaget for store deler av vestlig filosofi: ideelæren, sjelens udødelighet, rettferdigheten i «Staten», kjærligheten i «Symposion». Etter Sokrates' henrettelse grunnla han Akademiet utenfor Athen. Tre reiser til Syrakus for å gjøre tyrannen til filosof endte med nederlag. Alt han skal ha utgitt, er bevart, noe vi ikke kan si om noen annen antikk filosof.
    `, [["Forsvarstalen"], ["Faidon"], ["Symposion"], ["Staten"], ["Theaitetos"], ["Timaios"], ["Lovene"]], [sep("https://plato.stanford.edu/entries/plato/"), snl("https://snl.no/Platon")]),
    f("Spevsippos", [null, -339], "mann", ["Metafysikk"], ["Platonismen"], ["Ideene"], [-347, -339], "Athen", `
      Gresk filosof, Platons nevø og hans etterfølger som leder av Akademiet fra 347 f.Kr. Han oppga ideene som egen virkelighet og satte matematiske størrelser i stedet, og lot Det ene stå over det gode. Slik ble spørsmålet om hvordan Platon skulle forstås, en sak allerede for skolens andre generasjon. Bare fragmenter er bevart, og vi kjenner ham mest gjennom Aristoteles' kritikk.
    `, [], [sep("https://plato.stanford.edu/entries/speusippus/")]),
    f("Xenokrates", [null, -314], "mann", ["Metafysikk", "Etikk"], ["Platonismen"], ["Ideene"], [-339, -314], "Kalkedon og Athen", `
      Gresk filosof, leder av Akademiet fra 339 til 314 f.Kr., og med Aristoteles blant Platons mest kjente elever. Han er opphavet til den senere så vanlige tredelingen av filosofien i fysikk, etikk og logikk, og laget en systematisk framstilling av Platons lære, der ideene settes lik tall. I antikken var han kjent for sin nøkterne karakter.
    `, [], [sep("https://plato.stanford.edu/entries/xenocrates/")]),

    // --- Nyplatonismen ---
    f("Plotin", [205, 270], "mann", ["Metafysikk"], ["Nyplatonismen"], ["Det skjønne og det sublime", "Kropp og sjel"], [244, 270], "Egypt og Roma", `
      Gresk-talende filosof fra Egypt, nyplatonismens grunnlegger. Han studerte hos Ammonios Sakkas i Alexandria og slo seg ned i Roma i 244. Alt strømmer ut av Det ene, og sjelen kan vende tilbake dit. Biografen Porfyr forteller at han skammet seg over å ha en kropp, og at han flere ganger opplevde forening med det guddommelige. Tankene hans preget Augustin og kristen mystikk i over tusen år.
    `, [["Enneadene"]], [sep("https://plato.stanford.edu/entries/plotinus/")]),
    f("Porfyr", [234, 305], "mann", ["Logikk og språk", "Metafysikk"], ["Nyplatonismen"], ["Universalier"], [263, 305], "Tyros og Roma", `
      Fønikisk-gresk filosof, elev av Plotin og utgiver av «Enneadene». Hans korte «Isagoge» var innledningen til Aristoteles' logikk i over tusen år, og spørsmålet han der lot stå åpent, om allmennbegrepene finnes utenfor tanken, satte i gang universaliestriden. Boethius oversatte den til latin. Porfyr skrev også et stort angrep på kristendommen, som keiserne senere lot brenne.
    `, [["Isagoge"], ["Plotins liv"], ["Mot de kristne"]], [sep("https://plato.stanford.edu/entries/porphyry/")]),
    f("Iamblikhos", [null, null], "mann", ["Metafysikk", "Religionsfilosofi"], ["Nyplatonismen"], [], [290, 325], "Kalkis og Apamea i Syria", `
      Syrisk filosof som grunnla en nyplatonsk skole i Apamea. Mot Plotin hevdet han at sjelen er for bundet til materien til å nå det guddommelige ved tanken alene. Derfor trengs ritualene, *teurgi*, som viser til gudene selv. Han la også opp et leseprogram med Platons dialoger som ble stående i senantikken, og gjorde pytagoreisk tallfilosofi til del av skolens lærdom.
    `, [["Om mysteriene"], ["Om den pytagoreiske livsførsel"]], [sep("https://plato.stanford.edu/entries/iamblichus/")]),
    f("Proklos", [412, 485], "mann", ["Metafysikk"], ["Nyplatonismen"], [], [437, 485], "Konstantinopel og Athen", `
      Gresk filosof, den siste store lederen av Platons akademi. Han skrev store kommentarer til Platon og ga nyplatonismen en strengt systematisk form, med utgangspunkt i aksiomer etter mønster av Euklid. Boken «Liber de causis», som bygger på hans verk, gikk i middelalderen under Aristoteles' navn, og Thomas Aquinas var den første som avslørte hvor den kom fra. Pseudo-Dionysios bygger også på ham.
    `, [["Elementer i teologien"], ["Platons teologi"]], [sep("https://plato.stanford.edu/entries/proclus/")]),

    // --- Renessanseplatonismen (nå i Renessansen) ---
    f("Nikolaus av Kues", [1401, 1464], "mann", ["Metafysikk", "Religionsfilosofi"], ["Renessansen", "Nyplatonismen"], ["Gudsbevis"], [1440, 1464], "Kues og Roma", `
      Tysk kardinal, filosof og matematiker. «De docta ignorantia» hevder at Gud ikke kan begripes, men er sammenfallet av alle motsetninger, og at universet ikke har noe fast sentrum. Dermed var han før Kopernikus i å ta jorden ut av midten, selv om grunnene ikke var astronomiske. Han arbeidet for kirkens enhet og ønsket fred mellom religionene, og står på grensen mellom middelalder og renessanse.
    `, [["De docta ignorantia", 1440], ["De pace fidei", 1453]], [sep("https://plato.stanford.edu/entries/cusanus/")]),
    f("Marsilio Ficino", [1433, 1499], "mann", ["Metafysikk", "Religionsfilosofi"], ["Renessansen", "Nyplatonismen"], ["Kropp og sjel", "Det skjønne og det sublime"], [1469, 1499], "Firenze", `
      Italiensk filosof, prest og lege i Medici-familiens tjeneste. Han oversatte alle Platons dialoger til latin (trykt 1484), deretter Plotin, og ga dermed Europa den platonske arven. I «Theologia Platonica» forsvarer han sjelens udødelighet og forener platonisme og kristendom. Ordet «platonsk kjærlighet» stammer fra ham. Han ga også råd om astrologi og helse, og slapp så vidt unna anklager om magi.
    `, [["Theologia Platonica", 1482], ["De vita", 1489]], [sep("https://plato.stanford.edu/entries/ficino/")]),
    f("Pico della Mirandola", [1463, 1494], "mann", ["Metafysikk", "Etikk"], ["Renessansen", "Nyplatonismen"], ["Fri vilje"], [1486, 1494], "Mirandola og Firenze", `
      Italiensk filosof og grevesønn, en av renessansens mest berømte lærde. Som 23-åring tilbød han seg å forsvare 900 teser i Roma, hentet fra mange filosofiske og religiøse tradisjoner, inkludert kabbalaen. Paven fordømte en del av dem, og debatten ble aldri holdt. Innledningstalen, senere kalt «Om menneskets verdighet», sier at mennesket selv velger sin plass i verden. Han døde bare 31 år gammel, trolig forgiftet.
    `, [["Oratio de hominis dignitate", 1486], ["Conclusiones nongentae", 1486]], [sep("https://plato.stanford.edu/entries/pico-della-mirandola/")]),

    // --- Rasjonalismen ---
    f("René Descartes", [1596, 1650], "mann", ["Metafysikk", "Erkjennelsesteori"], ["Rasjonalismen"], ["Tvil", "Kropp og sjel", "Gudsbevis", "Substans"], [1628, 1650], "Frankrike, Nederland og Stockholm", `
      Fransk filosof og matematiker, ofte kalt den moderne filosofiens far. Metodisk tvil fører ham til det ene som ikke kan betviles: jeg tenker, altså er jeg. Sjel og kropp er to substanser, en dualisme som har satt dagsordenen for sinnsfilosofien siden. Han oppfant koordinatsystemet og skrev om optikk og fysiologi. Prinsesse Elisabeth av Böhmen utfordret ham skarpt på hvordan sjelen kan påvirke kroppen. Han døde i Stockholm, der han underviste dronning Kristina.
    `, [["Discours de la méthode", 1637], ["Meditationes de prima philosophia", 1641], ["Principia philosophiae", 1644], ["Les passions de l'âme", 1649]], [sep("https://plato.stanford.edu/entries/descartes/"), snl("https://snl.no/Ren%C3%A9_Descartes")]),
    f("Baruch Spinoza", [1632, 1677], "mann", ["Metafysikk", "Etikk"], ["Rasjonalismen"], ["Substans", "Fri vilje"], [1660, 1677], "Amsterdam og Haag", `
      Nederlandsk filosof av portugisisk-jødisk slekt, utstøtt av menigheten i Amsterdam i 1656. Han levde stille som linsesliper. «Etikken» utleder etter geometrisk mønster at det bare finnes én substans, Gud eller naturen, og at frihet er å forstå nødvendigheten. Traktaten om teologi og politikk leser Bibelen historisk og forsvarer tankefrihet. Han ble lenge ansett som ateist, men ble løftet fram av Goethe og Hegel og av mange nyere lesere.
    `, [["Tractatus theologico-politicus", 1670], ["Ethica", 1677]], [sep("https://plato.stanford.edu/entries/spinoza/")]),
    f("G.W. Leibniz", [1646, 1716], "mann", ["Metafysikk", "Logikk og språk"], ["Rasjonalismen"], ["Substans", "Det ondes problem", "Fri vilje"], [1670, 1716], "Leipzig, Paris og Hannover", `
      Tysk filosof, matematiker og diplomat, med en virksomhet så vid at han ikke lar seg sammenfatte. Han fant opp infinitesimalregningen samtidig med Newton, og drømte om et logisk regnespråk som kunne avgjøre alle stridigheter. Verden består av monader, enkle sjeleaktige substanser, og den er den beste av alle mulige. Dette ble hånet av Voltaire i «Candide». Det meste av filosofien hans ligger spredt i brev og notater.
    `, [["Essais de théodicée", 1710], ["La monadologie", 1714], ["Nouveaux essais sur l'entendement humain", 1765]], [sep("https://plato.stanford.edu/entries/leibniz/")]),
    f("Nicolas Malebranche", [1638, 1715], "mann", ["Metafysikk", "Religionsfilosofi"], ["Rasjonalismen"], ["Kausalitet", "Kropp og sjel"], [1674, 1715], "Paris", `
      Fransk prest og filosof i Oratorieordenen, omvendt til filosofien da han leste Descartes. Han forente kartesianisme og Augustin. Skapninger har ingen egen virkekraft: Gud er den eneste egentlige årsaken, og det vi kaller årsaker, er bare anledninger for hans handling (*okkasjonalismen*). Vi ser alle ting i Gud. Argumentene hans mot at vi kan observere årsakssammenheng, peker fram mot David Hume.
    `, [["De la recherche de la vérité", 1674], ["Entretiens sur la métaphysique", 1688]], [sep("https://plato.stanford.edu/entries/malebranche/")]),

    // --- Kantianismen ---
    f("Immanuel Kant", [1724, 1804], "mann", ["Erkjennelsesteori", "Etikk"], ["Kantianismen"], ["Det kategoriske imperativ", "Plikt", "A priori og a posteriori", "Fenomen og ting i seg selv", "Det skjønne og det sublime", "Frihet", "Gudsbevis"], [1755, 1804], "Königsberg", `
      Tysk filosof, regnet som den viktigste siden antikken. Han forlot aldri området rundt Königsberg, og var over femti da hovedverket kom. Kunnskap krever både sansning og forstandens former, og vi kan aldri vite hvordan tingene er i seg selv. Moralen er fornuftens lov: handle bare etter den regelen du kan ville skal bli allmenn lov. De tre kritikkene behandler kunnskap, moral og dømmekraft, og «Zum ewigen Frieden» legger grunnlaget for internasjonal rettsorden.
    `, [["Kritikk av den rene fornuft", 1781], ["Grunnlegging av moralens metafysikk", 1785], ["Kritikk av den praktiske fornuft", 1788], ["Kritikk av dømmekraften", 1790], ["Zum ewigen Frieden", 1795]], [sep("https://plato.stanford.edu/entries/kant/"), snl("https://snl.no/Immanuel_Kant")]),

    // --- Tysk idealisme ---
    f("J.G. Fichte", [1762, 1814], "mann", ["Metafysikk", "Politisk filosofi"], ["Tysk idealisme"], ["Anerkjennelse", "Frihet"], [1792, 1814], "Jena og Berlin", `
      Tysk filosof av fattig vevslekt, gjort kjent da hans første bok ble tatt for å være av Kant. Han fjernet tingen i seg selv: alt utgår fra jegets frie handling, som setter både seg selv og verden. Han var tidlig ute med gjensidig anerkjennelse som vilkår for selvbevissthet. Ateismestriden kostet ham stillingen i Jena i 1799. «Reden an die deutsche Nation» gjorde ham til en stamfar for tysk nasjonalisme.
    `, [["Grundlage der gesamten Wissenschaftslehre", 1794], ["Grundlage des Naturrechts", 1796], ["Reden an die deutsche Nation", 1808]], [sep("https://plato.stanford.edu/entries/johann-fichte/")]),
    f("F.W.J. Schelling", [1775, 1854], "mann", ["Metafysikk", "Estetikk"], ["Tysk idealisme"], ["Det skjønne og det sublime", "Frihet"], [1797, 1854], "Jena, München og Berlin", `
      Tysk filosof, venn av Hegel og Hölderlin fra studietiden i Tübingen, og professor i Jena allerede som 23-åring. Naturen er synlig ånd, og ånden usynlig natur. Kunsten er den høyeste formen for innsikt. Senere tok han et oppgjør med Hegels system fordi fornuften ikke kan forklare at noe i det hele tatt finnes. Forelesningene hans i Berlin fra 1841 ble hørt av blant andre Kierkegaard, Engels og Bakunin.
    `, [["Ideen zu einer Philosophie der Natur", 1797], ["System des transzendentalen Idealismus", 1800], ["Philosophische Untersuchungen über das Wesen der menschlichen Freiheit", 1809]], [sep("https://plato.stanford.edu/entries/schelling/")]),
    f("G.W.F. Hegel", [1770, 1831], "mann", ["Metafysikk", "Politisk filosofi"], ["Tysk idealisme"], ["Dialektikk", "Anerkjennelse", "Fremmedgjøring", "Frihet", "Væren"], [1801, 1831], "Stuttgart, Jena og Berlin", `
      Tysk filosof, den mest innflytelsesrike etter Kant. Virkeligheten er fornuftig og utvikler seg dialektisk gjennom motsigelser. Historien er frihetens framskritt, og «Åndens fenomenologi» følger bevisstheten fra enkel sansning til absolutt viten. Fra lærestolen i Berlin ble han sin tids dominerende tenker, og ble kritisert for å forherlige den prøyssiske staten. Marx, Kierkegaard og store deler av 1800-tallet utviklet seg gjennom oppgjør med ham.
    `, [["Åndens fenomenologi", 1807], ["Wissenschaft der Logik", 1812], ["Grundlinien der Philosophie des Rechts", 1820]], [sep("https://plato.stanford.edu/entries/hegel/"), snl("https://snl.no/Georg_Wilhelm_Friedrich_Hegel")]),

    // --- Nykantianismen (nå i Kantianismen) ---
    f("Hermann Cohen", [1842, 1918], "mann", ["Erkjennelsesteori", "Religionsfilosofi"], ["Kantianismen"], [], [1871, 1918], "Marburg og Berlin", `
      Tysk-jødisk filosof, grunnlegger av Marburgskolen. Kants ting i seg selv er ikke en ukjent virkelighet, men en oppgave: tenkningen skaper sitt objekt, slik matematisk fysikk viser. Han forente Kant med en etisk sosialisme. Da han flyttet til Berlin, skrev han «Religion der Vernunft», et hovedverk i moderne jødisk filosofi, som ble viktig for Franz Rosenzweig. Han forsvarte den tyske jødedommen offentlig mot antisemittismen.
    `, [["Logik der reinen Erkenntnis", 1902], ["Ethik des reinen Willens", 1904], ["Religion der Vernunft aus den Quellen des Judentums", 1919]], [sep("https://plato.stanford.edu/entries/cohen/")]),
    f("Wilhelm Windelband", [1848, 1915], "mann", ["Vitenskapsfilosofi"], ["Kantianismen"], [], [1870, 1915], "Strasbourg og Heidelberg", `
      Tysk filosof og filosofihistoriker, grunnlegger av Sørvest-tyske skole. Rektortalen hans i 1894 skilte vitenskaper som søker allmenne lover, de *nomotetiske*, fra dem som beskriver det enkeltstående, de *idiografiske*. Skillet preger samfunnsvitenskapenes selvforståelse til i dag. Hans lærebok i filosofihistorie, ordnet etter problemer framfor personer, ble brukt i generasjoner.
    `, [["Geschichte und Naturwissenschaft", 1894], ["Lehrbuch der Geschichte der Philosophie", 1892]], [sep("https://plato.stanford.edu/entries/neo-kantianism/")]),
    f("Heinrich Rickert", [1863, 1936], "mann", ["Vitenskapsfilosofi"], ["Kantianismen"], [], [1892, 1932], "Freiburg og Heidelberg", `
      Tysk filosof, Windelbands elev og etterfølger i Heidelberg. Historisk kunnskap velger ut sitt stoff etter verdier, og dette skiller den fra naturvitenskapen uten å gjøre den til synsing. Tanken ble svært viktig for Max Weber, hans venn, og for sosiologiens syn på verdifrihet. Heidegger skrev sin habilitasjon under ham, men vendte seg snart mot både ham og skolen.
    `, [["Die Grenzen der naturwissenschaftlichen Begriffsbildung", 1896], ["Kulturwissenschaft und Naturwissenschaft", 1899]], [sep("https://plato.stanford.edu/entries/heinrich-rickert/")]),
    f("Ernst Cassirer", [1874, 1945], "mann", ["Erkjennelsesteori", "Estetikk"], ["Kantianismen"], [], [1902, 1945], "Berlin, Hamburg og New York", `
      Tysk-jødisk filosof og idéhistoriker, skolert i Marburg og rektor i Hamburg, før han flyktet i 1933 og arbeidet i Oxford, Göteborg og USA. Mennesket er et symbolskapende dyr: myte, språk og vitenskap er ulike måter å forme verden på. I Davos i 1929 debatterte han med Heidegger om Kant, et møte som ble stående som et vendepunkt i tysk filosofi. Han skrev også den store historien om opplysningstiden.
    `, [["Philosophie der symbolischen Formen", 1923], ["Die Philosophie der Aufklärung", 1932], ["An Essay on Man", 1944]], [sep("https://plato.stanford.edu/entries/cassirer/")]),

    // --- Britisk idealisme (nå i Tysk idealisme) ---
    f("T.H. Green", [1836, 1882], "mann", ["Etikk", "Politisk filosofi"], ["Tysk idealisme"], ["Frihet"], [1874, 1882], "Oxford", `
      Engelsk filosof i Oxford, den ledende skikkelsen i britisk idealisme. Han kritiserte Hume og utilitarismen for å se mennesket som en samling inntrykk og lyster. Frihet er ikke bare fravær av tvang, men virkelig mulighet til å utvikle seg i fellesskap. Dette ble grunnlag for en sosial liberalisme der staten kan gripe inn for å sikre vilkårene for frihet. Han var aktiv i skolepolitikk og avholdsbevegelsen.
    `, [["Prolegomena to Ethics", 1883], ["Lectures on the Principles of Political Obligation", 1895]], [sep("https://plato.stanford.edu/entries/green/")]),
    f("F.H. Bradley", [1846, 1924], "mann", ["Metafysikk", "Etikk"], ["Tysk idealisme"], ["Sannhet"], [1876, 1924], "Oxford", `
      Engelsk filosof, den mest innflytelsesrike britiske filosofen på sin tid, til tross for at sykdom holdt ham fra undervisning og offentlighet. «Appearance and Reality» argumenterer for at tanken om relasjoner mellom ting fører til selvmotsigelser, slik at virkeligheten må være ett udelt absolutt. Bertrand Russell og G.E. Moore gjorde opprør mot nettopp dette, og analytisk filosofi begynner langt på vei her.
    `, [["Ethical Studies", 1876], ["Appearance and Reality", 1893]], [sep("https://plato.stanford.edu/entries/bradley/")]),
    f("J.M.E. McTaggart", [1866, 1925], "mann", ["Metafysikk"], ["Tysk idealisme"], [], [1896, 1925], "Cambridge", `
      Engelsk filosof i Cambridge, lærer for Russell og Moore og den siste store britiske idealisten. «The Unreality of Time» (1908) skiller mellom tid som fortid, nåtid og framtid (A-rekken) og tid som før og etter (B-rekken), og argumenterer for at ingen av dem kan gi virkelig tid. Skillet er fortsatt utgangspunkt for tidsfilosofien, også hos dem som avviser konklusjonen.
    `, [["Studies in the Hegelian Dialectic", 1896], ["The Unreality of Time", 1908], ["The Nature of Existence", 1921]], [sep("https://plato.stanford.edu/entries/mctaggart/")]),

    // --- Pittsburgh-skolen (nå i Pragmatismen) ---
    f("Wilfrid Sellars", [1912, 1989], "mann", ["Erkjennelsesteori", "Metafysikk"], ["Pragmatismen", "Tysk idealisme"], ["Erfaring", "Bevissthet"], [1947, 1989], "Yale og Pittsburgh", `
      Amerikansk filosof, en av de viktigste analytiske filosofene etter krigen, men lite lest utenfor faget. «Empiricism and the Philosophy of Mind» avviser «myten om det gitte»: sanseinntrykk alene kan ikke begrunne noe. Han skilte også mellom det manifeste og det vitenskapelige menneskebildet, og spurte hvordan de kan forenes. Filosofiens mål er å se hvordan ting i videste forstand henger sammen i videste forstand.
    `, [["Empiricism and the Philosophy of Mind", 1956], ["Philosophy and the Scientific Image of Man", 1962]], [sep("https://plato.stanford.edu/entries/sellars/")]),
    f("John McDowell", [1942, null], "mann", ["Erkjennelsesteori", "Etikk"], ["Pragmatismen", "Tysk idealisme"], ["Erfaring"], [1978, null], "Oxford og Pittsburgh", `
      Sørafrikansk-født filosof, lenge i Oxford og siden i Pittsburgh. «Mind and World» prøver å komme ut av svingningen mellom en erfaring som ikke kan begrunne, og tanker uten kontakt med verden. Erfaringen er allerede begrepslig, og fornuften er menneskets «annen natur», oppøvd gjennom dannelse. Han bygger på Kant, Hegel, Aristoteles og Wittgenstein, og har også viktige arbeider i moralsk realisme.
    `, [["Mind and World", 1994]], [bok("McDowell, John. Mind and World. Harvard University Press, 1994.")]),
    f("Robert Brandom", [1950, null], "mann", ["Logikk og språk", "Metafysikk"], ["Pragmatismen", "Tysk idealisme"], ["Mening og referanse", "Anerkjennelse"], [1994, null], "Pittsburgh", `
      Amerikansk filosof ved Universitetet i Pittsburgh, elev av Richard Rorty. Etter «Making It Explicit» bestemmes betydning av hvilken rolle en påstand spiller i slutninger og i samtalens spill om å gi og be om grunner, ikke av forholdet til ting i verden. Teorien kalles *inferensialisme*. Hans tolkning av Hegel, «A Spirit of Trust», ser anerkjennelse og tillit som grunnlaget for all normativitet.
    `, [["Making It Explicit", 1994], ["A Spirit of Trust", 2019]], [bok("Brandom, Robert. Making It Explicit. Harvard University Press, 1994.")]),
  ],
};
