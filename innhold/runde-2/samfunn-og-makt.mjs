// Runde 2: Samfunn og makt. Retningen, epokene, filosofene og påvirkningene (steg 7, skrevet av Opus 2026-11-02).
import { sep, iep, snl, bok, filosof, epoke, strek } from "../kilder.mjs";

const R = "Samfunn og makt";
const f = filosof(R);
const KONTRAKT = sep("https://plato.stanford.edu/entries/contractarianism/");
const NATURRETT = sep("https://plato.stanford.edu/entries/natural-law-ethics/");
const OPPL = sep("https://plato.stanford.edu/entries/enlightenment/");
const LIB = sep("https://plato.stanford.edu/entries/liberalism/");
const KT = sep("https://plato.stanford.edu/entries/critical-theory/");
const FEM = sep("https://plato.stanford.edu/entries/feminist-philosophy/");
const RAWLS = sep("https://plato.stanford.edu/entries/rawls/");
const POSTKOL = sep("https://plato.stanford.edu/entries/colonialism/");
const REP = sep("https://plato.stanford.edu/entries/republicanism/");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler tenkningen om hvordan mennesker bør styres, og om hvem som har rett til å styre. Den går fra de romerske republikanerne og Machiavelli via kontraktsteoriene, opplysningsfilosofien og liberalismen til marxismen, kritisk teori, rettferdighetsteoriene og den feministiske og postkoloniale kritikken. Platon og Aristoteles hører også til denne samtalen, men står under Fornuft og idé og Natur og erfaring. Spørsmålene går igjen: hva begrunner statens makt, hva er frihet, hva skylder vi hverandre? Etter hvert kommer også spørsmålet om hvem som faktisk har fått være med, og hvem filosofene glemte.
          `,
          kilder: [KONTRAKT, LIB],
        },
        story: {
          body: `
            ### Republikk og realisme
            Polybios forklarte Romas framgang med en blandet forfatning, og Cicero gjorde *res publica* til folkets sak, bundet av en naturlig rett. Tanken om den frie borgeren i et fritt fellesskap gikk under da republikken falt, men dukket opp igjen i Firenze. Niccolò Machiavelli brøt med hele moraltradisjonen: den som vil holde på makten, må lære å ikke være god, og en republikk trenger konflikt for å leve.

            ### Statens grunnlag
            Etter religionskrigene måtte makten begrunnes på ny måte. Hugo Grotius bygde en folkerett som ville gjelde selv om Gud ikke fantes, og Thomas Hobbes tenkte seg et naturtilstand der alle kjemper mot alle: vi må gi fra oss friheten til en suveren. John Locke svarte med naturlige rettigheter og folkets rett til å gjøre opprør. Jean-Jacques Rousseau hevdet at samfunnet hadde gjort mennesket ulikt, og at bare en felles vilje kunne gjøre lydighet til frihet.

            ### Opplysning og revolusjon
            Montesquieu, Voltaire og Denis Diderot førte kampen mot tortur, kirke og fordommer ut i en voksende offentlighet. Mary Wollstonecraft spurte hvorfor menneskerettighetene ikke skulle gjelde kvinner. Da den franske revolusjonen endte i terror, advarte Edmund Burke mot å bygge et samfunn på abstrakt fornuft, og konservatismen ble født. På 1800-tallet forsøkte liberalerne å sikre friheten mot både kongen og flertallet, og Alexis de Tocqueville beskrev faren ved demokrati som tyranni fra de mange.

            ### Klasse og kritikk
            Karl Marx satte Hegel på beina. Det er ikke ideene som driver historien, men måten mennesker produserer på. Arbeideren er fremmedgjort, og den formelle friheten skjuler undertrykking. Etterfølgerne strides om hvordan dette skal forstås. Antonio Gramsci forklarte hvorfor revolusjonen uteble med begrepet hegemoni. Frankfurterskolen søkte svar etter fascismen: hvordan kunne opplysningen slå over i sin motsetning? Jürgen Habermas ga tradisjonen en ny retning med teorien om kommunikasjon og offentlighet.

            ### Rettferdighet og de ekskluderte
            Etter krigen skrev Hannah Arendt om totalitarisme og om hva politisk handling er. Med John Rawls' «A Theory of Justice» (1971) kom politisk filosofi tilbake som fagfelt: hvilket samfunn ville vi velge bak et slør av uvitenhet? Robert Nozick svarte med en minimal stat, og Amartya Sen og Martha Nussbaum med menneskelige muligheter.

            Samtidig viste feministiske og postkoloniale tenkere at den universelle borgeren alltid hadde hatt et bestemt kjønn og en bestemt hudfarge. Fra Simone de Beauvoir til Judith Butler og bell hooks, og fra Frantz Fanon til Edward Said og Gayatri Spivak, har kritikken endret hva politisk filosofi må ta med i regningen.
          `,
        },
      },
    },
    main: {
      "Romersk republikanisme": epoke("ca. 150–43 f.Kr.", -150, -43, `
        Da Polybios, en gresk gissel i Roma, skulle forklare hvorfor romerne hadde erobret den kjente verden på 53 år, viste han til forfatningen. Konsuler, senat og folk holder hverandre i sjakk, og den blandede styreformen hindrer det forfallet som rammer alle rene former. Tanken var hentet fra Platon og Aristoteles, men ble nå brukt på en faktisk stat.

        Cicero, statsmann i republikkens siste krise, ga tradisjonen dens latinske språk. I «Om staten» er republikken folkets sak, og et folk er ikke bare en mengde, men et fellesskap bundet av rett. Over alle lover står en naturlig lov, tilgjengelig for fornuften. Han betalte for forsvaret av republikken med livet i 43 f.Kr., og ble lest av middelalderens rettslærde, av Machiavelli og av den amerikanske revolusjonens menn.
      `, `
        Roma vant over Kartago og Hellas, og rikdom og slaver strømmet inn. Republikken gikk i oppløsning gjennom borgerkriger, med Sulla, Pompeius og Caesar, som ble drept i 44 f.Kr. Etter Cicero kom keiserdømmet.
      `, `
        Gresk filosofi og retorikk kom til Roma gjennom lærere og krigsbytte. Cicero laget et latinsk filosofisk ordforråd, og romerretten utviklet seg til et system som fikk varig betydning.
      `, [REP, sep("https://plato.stanford.edu/entries/cicero/")]),

      "Politisk realisme": epoke("1513–1576", 1513, 1576, `
        Niccolò Machiavelli skrev «Fyrsten» i eksil i 1513. Der bryter han med fyrstespeilene som ville lære herskere dyder: han vil se på verden slik den er, ikke slik den burde være. Fyrsten må være både rev og løve og noen ganger handle ondt for å holde staten sammen. I «Discorsi» forsvarer han på samme tid en republikk etter romersk mønster, der konflikten mellom folk og elite skaper frihet.

        Francesco Guicciardini delte blikket, men med mer tvil om lærdommene fra historien. Jean Bodin fant i de franske religionskrigene et nytt begrep: suverenitet, den høyeste makten som ikke lar seg dele. Spørsmålet om politikkens egne lover, atskilt fra moralen, har blitt stående.
      `, `
        Italia var delt mellom bystater og invadert av Frankrike og Spania fra 1494. Medici ble drevet ut og kom tilbake i Firenze. I Frankrike fulgte Bartolomeusnatten (1572) og religionskrigene etter reformasjonen.
      `, `
        Humanistenes historieskriving og lesningen av Livius og Tacitus ga modeller. Boktrykket spredte politisk teori, og diplomatiet ble eget yrke. Bodin brukte sammenlignende rettsstudier.
      `, [sep("https://plato.stanford.edu/entries/machiavelli/"), sep("https://plato.stanford.edu/entries/realism-intl-relations/")]),

      "Kontraktsteoriene": epoke("1625–1762", 1625, 1762, `
        Hvis ingen lenger kan vise til Gud eller tradisjon, må statens makt begrunnes i det folk selv kan gå med på. Hugo Grotius og Samuel Pufendorf bygde en naturrett som alle fornuftige mennesker kan godta. Thomas Hobbes tok sterkest konsekvens: uten stat er livet ensomt, fattig, ekkelt, brutalt og kort, og vi bør overlate all makt til en suveren.

        John Locke hevdet at vi allerede har rettigheter i naturtilstanden, og at folket kan avsette den som bryter dem. Jean-Jacques Rousseau snudde argumentet: menneskene er født frie, men er overalt i lenker, og bare den allmenne viljen kan gi friheten tilbake. Kontrakten er neppe ment som historisk hendelse, men som prøve på om makten er legitim, en tanke John Rawls senere tok opp.
      `, `
        Trettiårskrigen, den engelske borgerkrigen, halshuggingen av Karl 1. i 1649 og revolusjonen i 1688. Slavehandel og koloniale erobringer lå under, noe tenkerne stort sett overså, og noen av dem hadde interesser i dem.
      `, `
        Euklids geometri og Galileis mekanikk inspirerte Hobbes til å bygge politikken vitenskapelig. Reiseskildringer ga bilder av «naturfolk» som ble brukt i argumentene, og folkeretten ble utviklet for handel og krig på havet.
      `, [KONTRAKT, NATURRETT, sep("https://plato.stanford.edu/entries/hobbes/"), sep("https://plato.stanford.edu/entries/rousseau/")]),

      "Opplysningsfilosofien": epoke("ca. 1715–1795", 1715, 1795, `
        Sapere aude: våg å bruke din egen forstand, skrev Kant i 1784 om opplysningstiden. I Frankrike var *philosophes* en ny type intellektuelle som skrev for offentligheten. Montesquieu ga maktfordelingen sin klassiske form. Voltaire førte kampen mot religiøs fanatisme, tortur og justismord, og Denis Diderot og d'Alembert samlet tidens kunnskap i «Encyclopédie». Émilie du Châtelet gjorde Newton tilgjengelig på fransk.

        Opplysningen er ingen enkelt lære: Diderot var materialist, Voltaire deist, og Rousseau var kritisk til hele prosjektet. Mary Wollstonecraft og Condorcet utvidet rettighetene til kvinner. Adorno og Horkheimer har senere sett fornuftens herredømme som kimen til nye former for undertrykking, og postkoloniale kritikere har vist at universalismen hadde sine blinde flekker.
      `, `
        Enevelde og sensur i Frankrike, handel og fremvekst av en borgerstand. Den amerikanske revolusjonen (1776) og den franske (1789) tok ideene i bruk. Slaveopprøret på Haiti fra 1791 prøvde dem mot en virkelighet de færreste hadde tenkt på.
      `, `
        Salonger, ofte ledet av kvinner, kaffehus, tidsskrifter og lesesirkler skapte en ny offentlighet. «Encyclopédie» (1751–1772) ble forbudt, men utkom likevel. Newtons fysikk var opplysningens store forbilde.
      `, [OPPL, sep("https://plato.stanford.edu/entries/voltaire/"), sep("https://plato.stanford.edu/entries/diderot/"), sep("https://plato.stanford.edu/entries/wollstonecraft/")]),

      "Konservatismen": epoke("1790–1830", 1790, 1830, `
        Edmund Burke så i 1790 det som andre ennå ikke så, nemlig at den franske revolusjonen ville ende i vold. Samfunnet er en kontrakt mellom de levende, de døde og de ufødte, og fornuften er for svak til å bygge alt på nytt. Institusjoner bærer erfaringer ingen enkeltperson kan overskue. Selv var han liberal i andre spørsmål, og støttet de amerikanske koloniene og angrep den britiske framferden i India.

        Joseph de Maistre gikk mye lenger: revolusjonen var Guds straff, og samfunnet hviler på autoritet, tro og til sist bøddelen. De to viser spennvidden i tradisjonen, fra reformvillig forsiktighet til reaksjon. Konservatismen er kanskje ikke en lære, men en holdning til forandring, og den er siden blitt en av de politiske hovedretningene.
      `, `
        Den franske revolusjonen, Terroren (1793–1794), Napoleon og Wienerkongressen i 1815. Etterpå ble den gamle orden gjenopprettet i store deler av Europa. I Storbritannia skapte frykten for revolusjon strenge lover.
      `, `
        Romantikken delte interessen for historie og det organiske, og historikere begynte å studere nasjonenes særtrekk. Nasjonalstaten vokste fram som idé, og Herder var viktig også her.
      `, [sep("https://plato.stanford.edu/entries/conservatism/"), sep("https://plato.stanford.edu/entries/burke/")]),

      "Liberalismen": epoke("ca. 1815–1880", 1815, 1880, `
        Benjamin Constant skilte i 1819 mellom de gamles frihet til å delta i det politiske, og de modernes frihet til å leve sitt eget liv. Den franske revolusjonen hadde vist hva som skjedde når man blandet dem sammen. Alexis de Tocqueville reiste til USA og viste hvordan demokrati kan bli flertallets tyranni, men også hvordan foreninger og lokalt styre kan verne mot det.

        John Stuart Mill formulerte i «On Liberty» prinsippet om at staten bare kan bruke tvang for å hindre skade på andre. Med Harriet Taylor Mill argumenterte han også for kvinners rettigheter. Liberalismen er likevel ingen enkel frihetslære: Mill forsvarte britisk styre i India, og tradisjonens forhold til empire er en del av regnskapet.
      `, `
        Etter Napoleon vokste kampen for stemmerett, trykkefrihet og frihandel. Revolusjonene i 1830 og 1848 viste både styrken og svakheten. Avskaffelsen av slaveriet og kolonialismen sto ved siden av hverandre.
      `, `
        Sammenlignende studier av forfatninger, politisk økonomi fra Adam Smith og David Ricardo, og en voksende presse preget tenkningen. Sosiologien vokste fram som fag, og Tocqueville regnes som en forløper.
      `, [LIB, sep("https://plato.stanford.edu/entries/liberalism/"), snl("https://snl.no/Alexis_de_Tocqueville")]),

      "Marxismen": epoke("1844–", 1844, null, `
        Karl Marx overtok Hegels dialektikk, men snudde den: det er ikke tanken som driver historien, men de materielle forholdene. Hvert samfunn er bygd opp rundt en klassekonflikt, og under kapitalismen er arbeideren fremmedgjort fra det hun lager. Merverdien forklarer utbyttingen. Friedrich Engels var både samarbeidspartner og den som gjorde læren til et system.

        Bevegelsen delte seg snart. Rosa Luxemburg kritiserte både reformisme og Lenins parti, og Antonio Gramsci brukte fengselsårene til å forklare hvorfor arbeiderne ikke gjorde opprør: den herskende klassen styrer gjennom samtykke, *hegemoni*. Sovjetunionen gjorde marxismen til statsideologi og brukte den til å rettferdiggjøre undertrykking. Etter 1989 har interessen for Marx som kritiker av kapitalismen likevel holdt seg.
      `, `
        Industrialisering, barnearbeid og slumbyer. Revolusjonene i 1848, Pariskommunen i 1871, arbeiderbevegelsen og den russiske revolusjonen i 1917. Marx bodde i eksil i London fra 1849.
      `, `
        Klassisk politisk økonomi hos Adam Smith og David Ricardo var Marx' viktigste studieemne. Han lånte også fra hegelianerne og fransk sosialisme. Darwin ble tatt til inntekt for et vitenskapelig bilde av historien.
      `, [sep("https://plato.stanford.edu/entries/marx/"), sep("https://plato.stanford.edu/entries/gramsci/")]),

      "Kritisk teori": epoke("1923–", 1923, null, `
        György Lukács viste i 1923 hvordan varelogikken gjør alt om til ting, og Institutt for samfunnsforskning i Frankfurt, grunnlagt samme år, ble hjemmet til en marxisme uten parti. Under Max Horkheimer skulle filosofi og samfunnsvitenskap arbeide sammen. Fascismens seier gjorde spørsmålet akutt. I «Opplysningens dialektikk» hevder han og Theodor W. Adorno at fornuften har blitt redskap for herredømme. Walter Benjamin søkte en annen historieforståelse, og Herbert Marcuse inspirerte studentopprøret.

        Jürgen Habermas ga tradisjonen en ny retning: fornuften er ikke bare instrumentell, men også kommunikativ. Våre samtaler forutsetter et ideal om å bli enige gjennom bedre argumenter. Axel Honneth har bygget videre med en teori om anerkjennelse. Skolen har vært i strid med positivismen, med Heidegger og med poststrukturalismen.
      `, `
        Weimarrepublikken, nazismen, eksil i New York fra 1934 og Holocaust. Tilbake i Vest-Tyskland ble Horkheimer og Adorno lærere for generasjonen etter krigen. Studentopprøret i 1968 hyllet dem, men brøt også med dem.
      `, `
        Freud ble tatt inn sammen med Marx. Empiriske studier, som «The Authoritarian Personality» (1950), sto side om side med filosofi. Massekultur, film og musikk ble behandlet som seriøse tema.
      `, [KT, sep("https://plato.stanford.edu/entries/adorno/"), sep("https://plato.stanford.edu/entries/habermas/")]),

      "Feministisk filosofi": epoke("1949–", 1949, null, `
        «Man fødes ikke som kvinne, man blir det,» skrev Simone de Beauvoir i 1949. Kvinnen er blitt gjort til Den andre i en verden der mannen er normen. Andre bølgens feminister tok dette opp: Luce Irigaray viste hvordan filosofiens kanon forutsetter en mannlig tenker, og Carol Gilligan og Nel Noddings stilte en omsorgsetikk opp mot etikkens abstrakte rettferdighet.

        Judith Butler hevdet i «Gender Trouble» (1990) at også kjønn er noe som gjøres, en gjentatt performativ handling. bell hooks og Kimberlé Crenshaw viste at kjønn ikke kan skilles fra rase og klasse. Sally Haslanger og Miranda Fricker har tatt feministiske innsikter inn i analytisk filosofi. Feltet har også gjenoppdaget kvinnelige filosofer som kanon hadde glemt.
      `, `
        Kampen for stemmerett, abort og likeverd i arbeidslivet, og kvinnebevegelsen fra 1960-tallet. Stonewall i 1969 og homo- og transbevegelsen har siden utvidet spørsmålene. Borgerrettsbevegelsen var et viktig forbilde, og svarte kvinner har kritisert en bevegelse dominert av hvite.
      `, `
        Kvinner fikk adgang til universitetene i stort tall, og kvinnestudier ble eget fag fra 1970-tallet. Psykoanalyse og poststrukturalisme ble tatt i bruk, og analyser av vitenskapen viste hvordan kjønn formet hva som ble studert.
      `, [FEM, sep("https://plato.stanford.edu/entries/feminism-gender/"), sep("https://plato.stanford.edu/entries/beauvoir/")]),

      "Rettferdighetsteoriene": epoke("1971–", 1971, null, `
        I 1971 ga John Rawls politisk filosofi nytt liv. Tenk deg at du skal velge samfunnets regler uten å vite hvem du selv blir, bak et *slør av uvitenhet*. Da ville du, hevder han, velge like friheter og godta ulikhet bare der den kommer de dårligst stilte til gode. Robert Nozick svarte med at rettferdighet handler om hvordan noe er ervervet, ikke om fordeling, og at bare en minimal stat kan forsvares.

        Kommunitarister som Michael Sandel og Michael Walzer hevdet at selvet ikke kan skilles fra fellesskapet. Amartya Sen og Martha Nussbaum spør hva folk faktisk er i stand til å gjøre og være. G.A. Cohen kritiserte Rawls fra venstre. Global rettferdighet, klima og forholdet til dyr har utvidet spørsmålet langt utover nasjonalstaten.
      `, `
        Velferdsstaten, borgerrettsbevegelsen og Vietnamkrigen var bakgrunnen for Rawls. Thatcher og Reagan satte Nozicks tanker på dagsordenen. Etter den kalde krigen ble global ulikhet og folkeretten sentrale tema.
      `, `
        Økonomisk beslutningsteori og spillteori ga nye redskaper. Tidsskriftet «Philosophy & Public Affairs» (1971) markerte at analytiske filosofer igjen arbeidet med politiske saker. Tverrfaglige miljøer med økonomer og jurister vokste fram.
      `, [RAWLS, sep("https://plato.stanford.edu/entries/justice/"), sep("https://plato.stanford.edu/entries/capability-approach/")]),

      "Postkolonial filosofi": epoke("ca. 1952–", 1952, null, `
        Frantz Fanon, lege fra Martinique, beskrev i «Peau noire, masques blancs» (1952) hvordan kolonisering setter seg i kroppen og sinnet, og forsvarte i «Les damnés de la terre» (1961) den antikoloniale kampen. Edward Said viste i «Orientalism» (1978) hvordan europeisk vitenskap hadde skapt et bilde av Østen som rettferdiggjorde herredømmet. Gayatri Spivak spurte om den underordnede overhodet kan snakke.

        Senere har dekoloniale tenkere fra Latin-Amerika, som Aníbal Quijano og Walter Mignolo, hevdet at moderniteten selv er uatskillelig fra kolonial makt. Charles W. Mills viste at samfunnskontrakten har vært en rasekontrakt, og Achille Mbembe har skrevet om dødens politikk. Kritikken stiller spørsmål ved filosofiens kanon, også den denne appen bygger på.
      `, `
        Avkolonisering etter 1945, med India i 1947, Algeriekrigen (1954–1962) og Afrikas frigjøring rundt 1960. Apartheid, borgerrettsbevegelsen og migrasjonen til Europa holdt spørsmålene levende.
      `, `
        Litteraturvitenskap var ofte utgangspunkt, og feltet lånte fra Michel Foucault og Jacques Derrida. Universitetene i det globale sør vokste. Subaltern Studies-gruppen i India skrev historien nedenfra.
      `, [POSTKOL, sep("https://plato.stanford.edu/entries/frantz-fanon/")]),
    },
  },

  edgeDescriptions: {
    aristotelismen__romerskrepublikk: strek(`Lære om blandet forfatning kommer fra Aristoteles' «Politikken». Polybios brukte den til å forklare Roma.`),
    platonismen__romerskrepublikk: strek(`Cicero skrev bevisst sine «Om staten» og «Om lovene» etter Platons mønster, men snudde prosjektet: han ville beskrive den beste staten slik den faktisk hadde vært i Roma.`),
    romerskrepublikk__politiskrealisme: strek(`Machiavelli kommenterte Livius og var mer romersk enn kristen. Dyden, *virtù*, hos Fyrsten er ikke kristen dyd, men romersk handlekraft.`),
    politiskrealisme__kontraktsteori: strek(`Hobbes delte Machiavellis nøkterne syn på mennesker, og Bodins begrep om suverenitet ble et hovedtema i kontraktsteoriene.`),
    annenskolastikk__kontraktsteori: strek(`Grotius bygde på Vitoria og Salamanca-skolens naturrett. Også Suárez' tanke om at makten kommer fra folket, peker fram.`),
    kontraktsteori__opplysningen: strek(`Lockes og Grotius' rettighetsspråk gikk inn i opplysningstiden. Rousseau selv tilhører begge, og Voltaire førte Locke til Frankrike i «Lettres philosophiques».`),
    empirismen__opplysningen: strek(`Voltaire gjorde Locke og Newton berømte på kontinentet, og Condillac og andre utviklet sansebasert psykologi. Reform av oppdragelse og samfunn hvilte på dette.`),
    rasjonalismen__opplysningen: strek(`Spinozas bibelkritikk og frie tenkning var en understrøm i radikal opplysning, slik Jonathan Israel har vist. Voltaire hånte Leibniz, men hele prosjektet hviler på tillit til fornuften.`),
    opplysningen__konservatismen: strek(`Burke og de Maistre skrev direkte mot revolusjonens filosofer. Abstrakt fornuft, sa de, kan ikke erstatte tradisjonens erfaring.`),
    opplysningen__liberalismen: strek(`Liberalerne arvet troen på frihet, toleranse og rettigheter, men etter terroren ville de sette grenser for all makt, også folkets.`),
    kontraktsteori__liberalismen: strek(`Lockes tanke om at staten skal verne individets rettigheter ble liberalismens grunnmur, mens Rousseaus allmenne vilje ble et skremmebilde hos Constant.`),
    tyskidealisme__marxismen: strek(`Marx var ung hegelianer i Berlin. Dialektikken ble beholdt, men åndens plass ble overtatt av produksjonskreftene: han sa selv at han satte Hegel på beina.`),
    liberalismen__marxismen: strek(`Marx anså politisk frihet for et framskritt, men hevdet at den skjulte klasseherredømmet. «Om jødespørsmålet» (1844) gjør opp med menneskerettighetene som rettigheter for det egoistiske mennesket.`),
    marxismen__kritiskteori: strek(`Frankfurterskolen er marxisme etter at revolusjonen uteble. Lukács' tanke om tingliggjøring var deres arv, men partiet og proletariatet hadde de gitt opp.`),
    tyskidealisme__kritiskteori: strek(`Adorno skrev «Negative Dialektik» i oppgjør med Hegel, og Habermas og Honneth tar stadig opp arven fra ham. Kritikk fra innsiden av en tradisjon var metoden.`),
    logpositivisme__kritiskteori: strek(`Horkheimer angrep positivismen allerede på 1930-tallet, og positivismestriden i Tyskland på 1960-tallet satte Adorno og Habermas mot Popper.`),
    eksistensialismen__feministisk: strek(`Simone de Beauvoirs «Le Deuxième Sexe» bruker eksistensialismens begreper: kvinnen er blitt gjort til objekt, og frihet er noe hun må kreve selv.`),
    marxismen__feministisk: strek(`Marxistiske feminister som Silvia Federici har vist at Marx' analyse overser reproduktivt arbeid. Engels hadde allerede knyttet familien til privateiendommen.`),
    kontraktsteori__rettferdighet: strek(`Rawls ville selv føre kontraktsteorien hos Locke, Rousseau og Kant opp på et høyere abstraksjonsnivå. Sløret av uvitenhet er en ny form for naturtilstand.`),
    utilitarismen__rettferdighet: strek(`«A Theory of Justice» er skrevet mot utilitarismen, som ikke tar skillet mellom personer på alvor. Rawls hadde i årevis lest Sidgwick grundig.`),
    liberalismen__rettferdighet: strek(`Rawls kalte sitt syn politisk liberalisme. Nozick trakk den motsatte, frihetlige konsekvensen av samme arv.`),
    eksistensialismen__postkolonial: strek(`Frantz Fanon arbeidet i et fransk miljø preget av Sartre og Merleau-Ponty. Sartre skrev forordet til «Les damnés de la terre», men Fanon kritiserte «Orphée noir» skarpt.`),
    marxismen__postkolonial: strek(`Lenins og Gramscis analyser av imperialisme og hegemoni ligger under. Subaltern Studies har begrepet sitt fra Gramsci. Likevel har marxismen selv blitt kritisert for eurosentrisme.`),
    poststruktur__postkolonial: strek(`Edward Said bygde på Michel Foucaults analyse av kunnskap og makt, og Gayatri Spivak oversatte Jacques Derrida til engelsk.`),
  },

  artists: [
    // --- Romersk republikanisme ---
    f("Polybios", [null, null], "mann", ["Politisk filosofi"], ["Romersk republikanisme"], ["Makt"], [-167, -118], "Megalopolis og Roma", `
      Gresk historiker fra Akaia, ført til Roma som gissel i 167 f.Kr., der han ble venn av Scipio. Hans «Historiene» forklarer hvordan Roma vant verdensherredømmet på litt over femti år. Svaret er en blandet forfatning, der kongemakt, adelsmakt og folkemakt balanserer hverandre og bremser det kretsløpet av forfall som rammer andre stater. Tanken gikk videre til Machiavelli, Montesquieu og den amerikanske grunnloven.
    `, [["Historiene"]], [sep("https://plato.stanford.edu/entries/republicanism/"), sep("https://plato.stanford.edu/entries/republicanism/")]),
    f("Cicero", [-106, -43], "mann", ["Politisk filosofi", "Etikk"], ["Romersk republikanisme"], ["Naturrett", "Frihet", "Plikt", "Dyd"], [-63, -43], "Arpinum og Roma", `
      Romersk statsmann, taler og filosof, konsul i 63 f.Kr. Han ga filosofien et latinsk språk og formidlet de greske skolene til Vesten. «Om staten», «Om lovene» og «Om pliktene» hevder at en sann lov er rett fornuft i samsvar med naturen. Han fulgte en moderat skeptisk linje i kunnskapsspørsmål og kritiserte Caesar. Etter å ha angrepet Marcus Antonius ble han drept i 43 f.Kr., og hodet og hendene ble satt på talerstolen.
    `, [["Om staten", -51], ["Om lovene"], ["Om gudenes natur", -45], ["Om pliktene", -44]], [sep("https://plato.stanford.edu/entries/cicero/")]),

    // --- Politisk realisme ---
    f("Niccolò Machiavelli", [1469, 1527], "mann", ["Politisk filosofi"], ["Politisk realisme"], ["Makt", "Frihet"], [1513, 1527], "Firenze", `
      Italiensk diplomat og forfatter, i Firenzes tjeneste til Medici kom tilbake i 1512. Han ble torturert og skrev i eksil «Fyrsten», som lærer herskere hva de faktisk må gjøre, ikke hva de bør. Boken ble satt på pavens indeks og gjorde navnet hans til et skjellsord. «Discorsi» viser en annen side, nemlig en republikaner som tror på konflikt som kilde til frihet. Lesere strides om det første er ironisk.
    `, [["Il principe", 1532], ["Discorsi sopra la prima deca di Tito Livio", 1531]], [sep("https://plato.stanford.edu/entries/machiavelli/")]),
    f("Francesco Guicciardini", [1483, 1540], "mann", ["Politisk filosofi"], ["Politisk realisme"], [], [1525, 1540], "Firenze og Roma", `
      Italiensk historiker og diplomat, venn og samtidig med Machiavelli, som han kritiserte for å bruke historien for bastant. Hver sak krever skjønn, sa han i «Ricordi», og historien gir ingen sikre regler. «Storia d'Italia» regnes som den første moderne historien om et større område. Han tjente pavene som guvernør, og hans skepsis overfor politiske systemer står som et alternativ til Machiavellis tro på modeller.
    `, [["Ricordi", 1530], ["Storia d'Italia", 1561]], [snl("https://snl.no/Francesco_Guicciardini")]),
    f("Jean Bodin", [1530, 1596], "mann", ["Politisk filosofi"], ["Politisk realisme"], ["Makt"], [1566, 1596], "Angers og Paris", `
      Fransk jurist, sentral blant dem som ville ha fred under religionskrigene. «Les six livres de la République» (1576) gir den første systematiske læren om *suverenitet*: den høyeste, udelelige makten i en stat. Han argumenterte også for religiøs toleranse og skrev om pengeteori. Samme mann skrev en håndbok for jakt på hekser, «De la démonomanie» (1580), noe som viser hvor sammensatt tiden var.
    `, [["Les six livres de la République", 1576], ["De la démonomanie des sorciers", 1580]], [sep("https://plato.stanford.edu/entries/bodin/")]),

    // --- Kontraktsteoriene ---
    f("Hugo Grotius", [1583, 1645], "mann", ["Politisk filosofi"], ["Kontraktsteoriene"], ["Naturrett", "Rettferdighet"], [1609, 1645], "Delft, Paris og Rostock", `
      Nederlandsk jurist og lærd, ofte kalt folkerettens far. Naturretten ville gjelde selv om Gud ikke fantes, skrev han i en setning som ble berømt, og dermed løsnet han loven fra teologien. «Mare liberum» forsvarte havets frihet, i Det nederlandske ostindiske kompaniets interesse. Han rømte fra fengselet Loevestein i 1621, gjemt i en bokkiste, og levde resten av livet i eksil.
    `, [["Mare liberum", 1609], ["De iure belli ac pacis", 1625]], [sep("https://plato.stanford.edu/entries/grotius/")]),
    f("Thomas Hobbes", [1588, 1679], "mann", ["Politisk filosofi", "Metafysikk"], ["Kontraktsteoriene"], ["Samfunnskontrakten", "Makt", "Kropp og sjel"], [1640, 1679], "Malmesbury, Paris og London", `
      Engelsk filosof og materialist. Født under frykten for den spanske armadaen, sa han at frykt og han var tvillinger. Han møtte Galilei, og gjorde mennesket og staten til mekanikk. I naturtilstanden er livet «ensomt, fattig, ekkelt, brutalt og kort», og alle er i krig. Derfor gir vi all makt til en suveren, Leviathan. Selv om han endte med et absolutt monarki, begynte han med individets likhet og rett til å overleve.
    `, [["De cive", 1642], ["Leviathan", 1651], ["De corpore", 1655]], [sep("https://plato.stanford.edu/entries/hobbes/"), snl("https://snl.no/Thomas_Hobbes")]),
    f("Samuel Pufendorf", [1632, 1694], "mann", ["Politisk filosofi", "Etikk"], ["Kontraktsteoriene"], ["Naturrett", "Plikt"], [1660, 1694], "Sachsen, Heidelberg, Lund og Stockholm", `
      Tysk jurist og filosof, professor i Lund og senere svensk rikshistoriograf. Han gjorde naturretten til et system med vekt på menneskets behov for fellesskap, *socialitas*, og på plikter overfor Gud, seg selv og andre. Lærebøkene hans ble lest over hele Europa, også ved amerikanske universiteter i kolonitiden, og påvirket Locke og Rousseau.
    `, [["De iure naturae et gentium", 1672], ["De officio hominis et civis", 1673]], [sep("https://plato.stanford.edu/entries/pufendorf-moral/")]),
    f("Jean-Jacques Rousseau", [1712, 1778], "mann", ["Politisk filosofi", "Etikk"], ["Kontraktsteoriene", "Opplysningsfilosofien"], ["Samfunnskontrakten", "Frihet", "Fremmedgjøring", "Autentisitet"], [1750, 1778], "Genève og Paris", `
      Genèvefødt filosof og forfatter, opplysningstidens store utfordrer. Mennesket er godt av natur, men samfunnet har gjort det ulikt og falskt. «Du contrat social» åpner med at mennesket er født fritt, men overalt ligger i lenker, og svaret er den allmenne viljen. «Émile» snudde oppdragelsen. Han satte sine egne barn på barnehjem, og «Confessions» grunnla moderne selvbiografi. Han ble lest av Kant, revolusjonens menn og romantikerne.
    `, [["Discours sur l'origine de l'inégalité", 1755], ["Du contrat social", 1762], ["Émile", 1762], ["Les confessions", 1782]], [sep("https://plato.stanford.edu/entries/rousseau/"), snl("https://snl.no/Jean-Jacques_Rousseau")]),

    // --- Opplysningsfilosofien ---
    f("Montesquieu", [1689, 1755], "mann", ["Politisk filosofi"], ["Opplysningsfilosofien"], ["Makt", "Frihet"], [1721, 1755], "Bordeaux og Paris", `
      Fransk jurist og adelsmann, en av de første moderne samfunnsforskerne. «Lettres persanes» gjør narr av Frankrike gjennom to persiske reisendes blikk. I «De l'esprit des lois» viser han at lover må forstås ut fra klima, skikker og styreform, og at friheten krever maktfordeling mellom lovgivende, utøvende og dømmende makt. Tanken gikk rett inn i den amerikanske grunnloven. Boken ble satt på Vatikanets indeks.
    `, [["Lettres persanes", 1721], ["De l'esprit des lois", 1748]], [sep("https://plato.stanford.edu/entries/montesquieu/")]),
    f("Voltaire", [1694, 1778], "mann", ["Politisk filosofi", "Religionsfilosofi"], ["Opplysningsfilosofien", "Deismen"], ["Frihet", "Det ondes problem"], [1718, 1778], "Paris, England og Ferney", `
      Fransk forfatter og filosof, født François-Marie Arouet, og opplysningstidens mest berømte stemme. Fengslet i Bastillen og forvist til England brakte han Newton og Locke tilbake til Frankrike. «Candide» hånet Leibniz' optimisme etter jordskjelvet i Lisboa. Han engasjerte seg i Calas-saken mot religiøs forfølgelse. Han var deist, men fiende av kirken, og hans skrifter om jøder og andre folk viser opplysningens grenser.
    `, [["Lettres philosophiques", 1734], ["Candide", 1759], ["Traité sur la tolérance", 1763], ["Dictionnaire philosophique", 1764]], [sep("https://plato.stanford.edu/entries/voltaire/")]),
    f("Denis Diderot", [1713, 1784], "mann", ["Metafysikk", "Estetikk"], ["Opplysningsfilosofien"], [], [1746, 1784], "Langres og Paris", `
      Fransk filosof og hovedredaktør av «Encyclopédie», med d'Alembert i begynnelsen. Han gikk fra deisme til materialisme: livet kan forklares ut fra materien selv. Han satt fengslet i 1749 og sluttet å utgi sine beste verk, som «Rameaus nevø», for å unngå ny straff. Han reiste til Katarina den store og skrev også kunstkritikk. Mye av hans mest originale filosofi ble først kjent etter hans død.
    `, [["Lettre sur les aveugles", 1749], ["Encyclopédie", 1751], ["Le neveu de Rameau", 1805]], [sep("https://plato.stanford.edu/entries/diderot/")]),
    f("Émilie du Châtelet", [1706, 1749], "kvinne", ["Vitenskapsfilosofi", "Metafysikk"], ["Opplysningsfilosofien"], ["Kjønn"], [1738, 1749], "Paris og Cirey", `
      Fransk matematiker og filosof. «Institutions de physique» forsøker å forene Newton og Leibniz og bidro til begrepet om energi. Oversettelsen av Newtons «Principia» til fransk, med kommentar, er fremdeles standard. Hun levde med Voltaire på Cirey, og han fikk mye av æren for det hun visste. Hun skrev også om lykken og kritiserte kvinners utestengning fra utdannelse. Hun døde like etter en fødsel.
    `, [["Institutions de physique", 1740], ["Discours sur le bonheur", 1779], ["Principes mathématiques de la philosophie naturelle", 1759]], [sep("https://plato.stanford.edu/entries/emilie-du-chatelet/")]),
    f("Condorcet", [1743, 1794], "mann", ["Politisk filosofi"], ["Opplysningsfilosofien"], ["Kjønn", "Frihet"], [1765, 1794], "Paris", `
      Fransk matematiker og filosof, den siste store av de franske opplysningsfilosofene. Han brukte sannsynlighetsregning på valg, og viste paradokset som bærer navnet hans. Han kjempet for kvinners stemmerett, mot slaveriet og for offentlig skole. Han ble etterlyst under terroren, skrev i skjul «Esquisse», en bok om menneskehetens framskritt, og døde i fengsel. Omstendighetene er uklare.
    `, [["Essai sur l'application de l'analyse", 1785], ["Sur l'admission des femmes au droit de cité", 1790], ["Esquisse", 1795]], [snl("https://snl.no/Condorcet")]),
    f("Mary Wollstonecraft", [1759, 1797], "kvinne", ["Politisk filosofi", "Etikk"], ["Opplysningsfilosofien"], ["Kjønn", "Frihet", "Dyd"], [1787, 1797], "London og Paris", `
      Engelsk filosof og forfatter, ofte kalt feminismens stammor. «A Vindication of the Rights of Woman» svarer Rousseau og hans «Émile»: kvinner er ikke svakere av natur, men av oppdragelse, og utdannelse er nøkkelen. Hun svarte også Burke, med «A Vindication of the Rights of Men». Hun reiste alene i Skandinavia, også i Norge, og skrev om det. Hun døde etter å ha født datteren, forfatteren Mary Shelley.
    `, [["A Vindication of the Rights of Men", 1790], ["A Vindication of the Rights of Woman", 1792], ["Letters Written in Sweden, Norway, and Denmark", 1796]], [sep("https://plato.stanford.edu/entries/wollstonecraft/")]),

    // --- Konservatismen ---
    f("Edmund Burke", [1729, 1797], "mann", ["Politisk filosofi", "Estetikk"], ["Konservatismen"], ["Det skjønne og det sublime", "Frihet"], [1757, 1797], "Dublin og London", `
      Irskfødt politiker og filosof i det britiske parlamentet, ofte kalt konservatismens far. Ungdomsverket om det sublime fikk stor betydning for estetikken. Han støttet de amerikanske koloniene og angrep Warren Hastings' styre i India. «Reflections on the Revolution in France» (1790) varslet terroren: samfunnet er et partnerskap mellom de levende, de døde og de ufødte, og tradisjonen bærer klokskap. Mary Wollstonecraft og Thomas Paine svarte ham.
    `, [["A Philosophical Enquiry into the Sublime and Beautiful", 1757], ["Reflections on the Revolution in France", 1790]], [sep("https://plato.stanford.edu/entries/burke/")]),
    f("Joseph de Maistre", [1753, 1821], "mann", ["Politisk filosofi", "Religionsfilosofi"], ["Konservatismen"], ["Makt"], [1796, 1821], "Savoia og St. Petersburg", `
      Savoyisk jurist og diplomat, flyktning fra den franske revolusjonen og i tjeneste hos kongen av Sardinia. Revolusjonen er Guds straff, fornuften er maktesløs uten tro, og paven bør være Europas øverste dommer. Hans skildring av bøddelen som grunnlaget for samfunnsorden er blitt stående. Isaiah Berlin så ham som en forløper for fascismen, en tolkning andre har utfordret.
    `, [["Considérations sur la France", 1796], ["Du pape", 1819], ["Les soirées de Saint-Pétersbourg", 1821]], [bok("Maistre, Joseph de. Considerations on France. Cambridge University Press, 1994.")]),

    // --- Liberalismen ---
    f("Benjamin Constant", [1767, 1830], "mann", ["Politisk filosofi"], ["Liberalismen"], ["Frihet"], [1796, 1830], "Lausanne og Paris", `
      Sveitsiskfødt fransk politiker og forfatter, en av liberalismens grunnleggere. Foredraget fra 1819 skiller de gamles frihet, å delta i det felles styret, fra de modernes frihet, å leve sitt eget liv. Terroren kom av å forveksle dem. Han var sammen med Germaine de Staël i mange år og skrev romanen «Adolphe». Hans rolle under Napoleons hundre dager, da han skrev den nye forfatningen, skadet ryktet hans.
    `, [["Principes de politique", 1815], ["Adolphe", 1816], ["De la liberté des anciens comparée à celle des modernes", 1819]], [sep("https://plato.stanford.edu/entries/liberalism/")]),
    f("Alexis de Tocqueville", [1805, 1859], "mann", ["Politisk filosofi"], ["Liberalismen"], ["Frihet", "Makt"], [1835, 1859], "Paris og Normandie", `
      Fransk aristokrat og politiker. Han reiste i USA i 1831 for å studere fengsler, og skrev «De la démocratie en Amérique». Likheten er tidens uavvendelige bevegelse, men den kan føre til flertallets tyranni og en myk despoti. Foreninger, lokalt styre og religion er vern. Han beskrev også slaveriet og behandlingen av urfolk, men forsvarte den franske erobringen av Algerie. «L'Ancien Régime» viser kontinuiteten fra før revolusjonen.
    `, [["De la démocratie en Amérique", 1835], ["L'Ancien Régime et la Révolution", 1856]], [snl("https://snl.no/Alexis_de_Tocqueville")]),
    f("Harriet Taylor Mill", [1807, 1858], "kvinne", ["Politisk filosofi", "Etikk"], ["Liberalismen"], ["Kjønn", "Frihet"], [1832, 1858], "London", `
      Engelsk filosof og kvinnesakskvinne. Hun og John Stuart Mill hadde et nært forhold i tjue år før de giftet seg i 1851, to år etter at hun var blitt enke. «The Enfranchisement of Women» (1851) krever full likestilling i utdannelse, arbeid og politikk. Mill hevdet at «On Liberty» var deres felles verk. Hvor stor hennes del var, er diskutert, og lenge ble hun undervurdert fordi kilder er knappe.
    `, [["The Enfranchisement of Women", 1851]], [sep("https://plato.stanford.edu/entries/harriet-mill/")]),

    // --- Marxismen ---
    f("Karl Marx", [1818, 1883], "mann", ["Politisk filosofi"], ["Marxismen"], ["Fremmedgjøring", "Makt", "Frihet", "Dialektikk"], [1843, 1883], "Trier, Paris og London", `
      Tysk filosof, økonom og revolusjonær, utvist fra flere land og i eksil i London fra 1849. Historien drives av klassekamp og av utviklingen i produksjonen. Under kapitalismen er arbeideren fremmedgjort, og overskuddet tas som merverdi. Filosofene har bare tolket verden, skrev han, poenget er å forandre den. Lite av filosofien var kjent i hans levetid, og «Manuskriptene» fra 1844 kom først i 1932. Han skrev store deler av livet i fattigdom, støttet av Engels.
    `, [["Økonomisk-filosofiske manuskripter", 1844], ["Det kommunistiske manifest", 1848], ["Kapitalen", 1867]], [sep("https://plato.stanford.edu/entries/marx/"), snl("https://snl.no/Karl_Marx")]),
    f("Friedrich Engels", [1820, 1895], "mann", ["Politisk filosofi", "Vitenskapsfilosofi"], ["Marxismen"], ["Dialektikk", "Kjønn"], [1845, 1895], "Barmen, Manchester og London", `
      Tysk samfunnstenker, sønn av en tekstilfabrikkeier, og Marx' nære samarbeidspartner og støttespiller. Han drev familiefirmaet i Manchester i årevis og beskrev arbeiderklassens kår der. Etter Marx' død ga han ut de siste bindene av «Kapitalen». «Anti-Dühring» gjorde marxismen til et system, og «Der Ursprung der Familie» knytter kvinners underordning til privateiendommen. Forskere diskuterer om han forstyrret Marx' tanker.
    `, [["Die Lage der arbeitenden Klasse in England", 1845], ["Anti-Dühring", 1878], ["Der Ursprung der Familie, des Privateigenthums und des Staats", 1884]], [sep("https://plato.stanford.edu/entries/engels/")]),
    f("Rosa Luxemburg", [1871, 1919], "kvinne", ["Politisk filosofi"], ["Marxismen"], ["Frihet", "Makt"], [1899, 1919], "Zamość, Zürich og Berlin", `
      Polsk-jødisk marxist, en av de skarpeste skikkelsene i den tyske arbeiderbevegelsen. Hun kritiserte reformisme hos Eduard Bernstein, men også Lenins partidisiplin: frihet er alltid frihet for den som tenker annerledes. «Die Akkumulation des Kapitals» knytter kapitalismen til imperialismen. Under revolusjonsforsøket i Berlin i januar 1919 ble hun tatt til fange og myrdet av høyreorienterte soldater, og liket kastet i en kanal.
    `, [["Sozialreform oder Revolution?", 1899], ["Die Akkumulation des Kapitals", 1913], ["Die russische Revolution", 1922]], [sep("https://plato.stanford.edu/entries/luxemburg/")]),
    f("Antonio Gramsci", [1891, 1937], "mann", ["Politisk filosofi"], ["Marxismen"], ["Makt"], [1919, 1937], "Sardinia, Torino og Roma", `
      Italiensk marxist og en av grunnleggerne av Italias kommunistparti. Mussolini fengslet ham i 1926, og aktor skal ha sagt at denne hjernen måtte hindres i å tenke i tjue år. I fengselsnotatene utvikler han begrepet *hegemoni*: en klasse styrer ikke bare med makt, men gjennom samtykke, kultur og sunn fornuft. Også intellektuelle, skoler og aviser er kampplasser. Notatene ble lest og sitert langt utenfor marxismen.
    `, [["Quaderni del carcere", 1948]], [sep("https://plato.stanford.edu/entries/gramsci/")]),

    // --- Kritisk teori ---
    f("György Lukács", [1885, 1971], "mann", ["Politisk filosofi", "Estetikk"], ["Kritisk teori"], ["Fremmedgjøring"], [1909, 1971], "Budapest, Moskva og Wien", `
      Ungarsk filosof og litteraturteoretiker, venn av Max Weber i ungdommen og kommunist fra 1918. «Geschichte und Klassenbewusstsein» (1923) utvider Marx' analyse av varen til en lære om tingliggjøring, *Verdinglichung*, og forutser den unge Marx' fremmedgjøring, før manuskriptene var kjent. Partiet fordømte boken, og han tok selv avstand. Han var med i Imre Nagys regjering i 1956 og ble deportert.
    `, [["Die Theorie des Romans", 1920], ["Geschichte und Klassenbewusstsein", 1923]], [sep("https://plato.stanford.edu/entries/lukacs/")]),
    f("Walter Benjamin", [1892, 1940], "mann", ["Estetikk", "Politisk filosofi"], ["Kritisk teori"], [], [1924, 1940], "Berlin og Paris", `
      Tysk-jødisk filosof og kritiker, venn av Gershom Scholem og Bertolt Brecht, og nær Frankfurterskolen. «Kunstverket i den tekniske reproduksjonens tidsalder» handler om hva foto og film gjør med kunstens aura. «Passasjeverket», om Paris på 1800-tallet, ble aldri fullført. På flukt fra nazistene tok han livet sitt i Portbou ved den spanske grensen i 1940. Hans tanker om historie, skrevet like før, ble hans testamente.
    `, [["Ursprung des deutschen Trauerspiels", 1928], ["Das Kunstwerk im Zeitalter seiner technischen Reproduzierbarkeit", 1936], ["Über den Begriff der Geschichte", 1942]], [sep("https://plato.stanford.edu/entries/benjamin/")]),
    f("Max Horkheimer", [1895, 1973], "mann", ["Politisk filosofi"], ["Kritisk teori"], ["Makt"], [1930, 1973], "Stuttgart, Frankfurt og New York", `
      Tysk filosof og leder for Institutt for samfunnsforskning fra 1930, Frankfurterskolens organisatoriske kraft. «Traditionelle und kritische Theorie» (1937) skiller mellom teori som bare beskriver, og teori som vil frigjøre. I eksil skrev han med Adorno «Dialektik der Aufklärung». Etter krigen tok han instituttet tilbake til Frankfurt og var rektor der. Hans sene tenkning søker tilbake til religionens lengsel.
    `, [["Traditionelle und kritische Theorie", 1937], ["Dialektik der Aufklärung", 1947], ["Eclipse of Reason", 1947]], [sep("https://plato.stanford.edu/entries/horkheimer/")]),
    f("Theodor W. Adorno", [1903, 1969], "mann", ["Estetikk", "Politisk filosofi"], ["Kritisk teori"], ["Fremmedgjøring", "Dialektikk"], [1931, 1969], "Frankfurt, Oxford og Los Angeles", `
      Tysk filosof, musikkteoretiker og komponist. Med Horkheimer skrev han «Dialektik der Aufklärung», der kulturindustrien gjør alle til passive forbrukere. «Minima Moralia» er aforismer fra eksilet. Det falske liv kan ikke leves riktig, og å skrive et dikt etter Auschwitz er barbarisk. «Negative Dialektik» motsetter seg all identitetstenkning. Han hadde en tung konflikt med studentene i 1968 og døde året etter.
    `, [["Dialektik der Aufklärung", 1947], ["Minima Moralia", 1951], ["Negative Dialektik", 1966], ["Ästhetische Theorie", 1970]], [sep("https://plato.stanford.edu/entries/adorno/")]),
    f("Herbert Marcuse", [1898, 1979], "mann", ["Politisk filosofi"], ["Kritisk teori"], ["Fremmedgjøring", "Frihet"], [1932, 1979], "Berlin, Freiburg og San Diego", `
      Tysk-amerikansk filosof, elev av Heidegger før han gikk til Frankfurterskolen. I USA arbeidet han først for den amerikanske etterretningen mot nazismen. «Eros and Civilization» forener Marx og Freud, og «One-Dimensional Man» (1964) hevder at forbrukersamfunnet tar brodden av all kritikk. Studentopprøret gjorde ham til et ikon. Han mente at toleranse kan være undertrykkende, noe som vakte sterk kritikk.
    `, [["Reason and Revolution", 1941], ["Eros and Civilization", 1955], ["One-Dimensional Man", 1964]], [sep("https://plato.stanford.edu/entries/marcuse/")]),
    f("Jürgen Habermas", [1929, 2026], "mann", ["Politisk filosofi", "Erkjennelsesteori"], ["Kritisk teori"], ["Sannhet", "Anerkjennelse"], [1962, 2026], "Frankfurt og Starnberg", `
      Tysk filosof, den viktigste i Frankfurterskolens annen generasjon og en av de ledende offentlige intellektuelle i Europa etter krigen. «Strukturwandel der Öffentlichkeit» beskriver borgerlig offentlighet og dens forfall. «Theorie des kommunikativen Handelns» hevder at fornuften også er kommunikativ: i samtale forutsetter vi at det bedre argumentet skal vinne. Han diskuterte med Gadamer, Rawls, Derrida og den senere pave Benedikt 16.
    `, [["Strukturwandel der Öffentlichkeit", 1962], ["Theorie des kommunikativen Handelns", 1981], ["Faktizität und Geltung", 1992]], [sep("https://plato.stanford.edu/entries/habermas/")]),

    // --- Arendt, ved Eksistensfilosofien ---
    f("Hannah Arendt", [1906, 1975], "kvinne", ["Politisk filosofi"], ["Eksistensfilosofien"], ["Makt", "Frihet", "Anerkjennelse"], [1951, 1975], "Königsberg, Paris og New York", `
      Tysk-amerikansk politisk tenker, elev av Heidegger og Jaspers, som flyktet i 1933 og kom til USA i 1941. «The Origins of Totalitarianism» forklarer nazisme og stalinisme som noe nytt. «The Human Condition» skiller arbeid, framstilling og handling, og hevder at politikk er å opptre blant likemenn. I rapporten om Eichmann-saken skrev hun om ondskapens banalitet, noe som utløste sterke reaksjoner. Hun avviste selv betegnelsen filosof.
    `, [["The Origins of Totalitarianism", 1951], ["The Human Condition", 1958], ["Eichmann in Jerusalem", 1963]], [sep("https://plato.stanford.edu/entries/arendt/")]),

    // --- Feministisk filosofi ---
    f("Luce Irigaray", [1930, null], "kvinne", ["Metafysikk", "Logikk og språk"], ["Feministisk filosofi"], ["Kjønn"], [1974, null], "Belgia og Paris", `
      Belgisk-fransk filosof og psykoanalytiker. «Speculum de l'autre femme» (1974) leser filosofien fra Platon til Freud og hevder at kvinnen har blitt gjort til et speil for mannen. Boken kostet henne stillingen ved Vincennes og hos Lacans skole. Hun hevder at kjønnsforskjellen er vår tids store uløste spørsmål, og at kvinner må skape sitt eget språk. Kritikere har anklaget henne for essensialisme.
    `, [["Speculum de l'autre femme", 1974], ["Ce sexe qui n'en est pas un", 1977], ["Éthique de la différence sexuelle", 1984]], [iep("https://iep.utm.edu/irigaray/")]),
    f("Judith Butler", [1956, null], "ikkebinaer", ["Politisk filosofi"], ["Feministisk filosofi"], ["Kjønn", "Makt", "Anerkjennelse"], [1987, null], "Cleveland og Berkeley", `
      Amerikansk filosof, professor ved Berkeley. «Gender Trouble» (1990) hevder at kjønn ikke er noe vi har, men noe vi gjør, gjennom gjentatte handlinger som skaper illusjonen av en indre kjerne. Dette ble grunnlaget for skeiv teori. Senere har Butler skrevet om sårbarhet, krig og offentlig sorg, og i «Who's Afraid of Gender?» (2024) om kjønnsdebatten. Stilen er blitt kritisert for å være tung, og kritikken fra Martha Nussbaum er kjent.
    `, [["Gender Trouble", 1990], ["Bodies That Matter", 1993], ["Precarious Life", 2004]], [iep("https://iep.utm.edu/butler/")]),
    f("bell hooks", [1952, 2021], "kvinne", ["Politisk filosofi"], ["Feministisk filosofi"], ["Kjønn", "Makt", "Frihet"], [1981, 2021], "Kentucky, New York og Berea", `
      Amerikansk samfunnstenker, født Gloria Jean Watkins, og navnet hennes skrives med små bokstaver fordi innholdet skal stå fram. «Ain't I a Woman» (1981) viser at svarte kvinner har vært usynlige både i feminismen og i antirasismen, og at rase, klasse og kjønn må tenkes sammen. Hun skrev også om pedagogikk, inspirert av Freire, og om kjærlighet. Stilen skulle nå fram utenfor akademia.
    `, [["Ain't I a Woman", 1981], ["Feminist Theory: From Margin to Center", 1984], ["Teaching to Transgress", 1994]], [snl("https://snl.no/bell_hooks")]),

    // --- Rettferdighetsteoriene ---
    f("John Rawls", [1921, 2002], "mann", ["Politisk filosofi", "Etikk"], ["Rettferdighetsteoriene"], ["Rettferdighet", "Samfunnskontrakten", "Frihet"], [1958, 2002], "Baltimore og Harvard", `
      Amerikansk filosof ved Harvard, den viktigste politiske filosofen på 1900-tallet. Han kjempet i Stillehavet under krigen og ga opp prestestudiene. «A Theory of Justice» (1971) spør hva vi ville velge bak et slør av uvitenhet, og svarer med like friheter og med at ulikhet må gagne de dårligst stilte. «Political Liberalism» (1993) spør hvordan folk med ulike livssyn kan leve sammen. Hele feltet har tatt stilling til ham siden.
    `, [["A Theory of Justice", 1971], ["Political Liberalism", 1993], ["The Law of Peoples", 1999]], [RAWLS, snl("https://snl.no/John_Rawls")]),
    f("Robert Nozick", [1938, 2002], "mann", ["Politisk filosofi", "Erkjennelsesteori"], ["Rettferdighetsteoriene"], ["Rettferdighet", "Frihet"], [1974, 2002], "Harvard", `
      Amerikansk filosof ved Harvard, Rawls' kollega og viktigste motstander. «Anarchy, State, and Utopia» forsvarer en minimal stat: skatt på arbeid er som tvangsarbeid, og fordeling er rettferdig bare hvis den har oppstått rettferdig. Eksempelet med basketspilleren Wilt Chamberlain er berømt. Også erfaringsmaskinen, som spør om nytelse er alt, stammer fra samme bok. Senere modererte han noen av synspunktene.
    `, [["Anarchy, State, and Utopia", 1974], ["Philosophical Explanations", 1981]], [sep("https://plato.stanford.edu/entries/nozick-political/")]),
    f("Amartya Sen", [1933, null], "mann", ["Politisk filosofi", "Etikk"], ["Rettferdighetsteoriene"], ["Rettferdighet", "Frihet"], [1970, null], "Santiniketan, Cambridge og Harvard", `
      Indisk økonom og filosof, tildelt Nobels minnepris i økonomi i 1998. Han vokste opp under hungersnøden i Bengal i 1943 og viste senere at sult sjelden skyldes matmangel, men manglende tilgang, og at demokratier sjelden eller aldri rammes av store hungersnøder. *Kapabilitetstilnærmingen* spør ikke hva folk har, men hva de reelt kan gjøre og være. «The Idea of Justice» kritiserer Rawls for å lete etter det perfekte.
    `, [["Collective Choice and Social Welfare", 1970], ["Poverty and Famines", 1981], ["Development as Freedom", 1999], ["The Idea of Justice", 2009]], [sep("https://plato.stanford.edu/entries/capability-approach/")]),
    f("Martha Nussbaum", [1947, null], "kvinne", ["Etikk", "Politisk filosofi"], ["Rettferdighetsteoriene", "Dydsetikken"], ["Rettferdighet", "Dyd", "Kjønn"], [1986, null], "Harvard, Brown og Chicago", `
      Amerikansk filosof ved Universitetet i Chicago. Hun begynte med gresk tragedie og Aristoteles, og viste i «The Fragility of Goodness» hvordan det gode livet er sårbart. Med Amartya Sen utviklet hun kapabilitetstilnærmingen, og satte opp en liste over hva et verdig liv krever. Hun har utvidet rettferdigheten til mennesker med funksjonsnedsettelser, utlendinger og dyr, og skrevet om følelser, litteratur og homofiles rettigheter.
    `, [["The Fragility of Goodness", 1986], ["Women and Human Development", 2000], ["Frontiers of Justice", 2006]], [sep("https://plato.stanford.edu/entries/capability-approach/"), snl("https://snl.no/Martha_Nussbaum")]),

    // --- Postkolonial filosofi ---
    f("Frantz Fanon", [1925, 1961], "mann", ["Politisk filosofi"], ["Postkolonial filosofi"], ["Kolonialitet", "Anerkjennelse", "Fremmedgjøring"], [1952, 1961], "Martinique, Lyon og Algerie", `
      Martiniquesisk psykiater og filosof. Han kjempet for Frankrike under krigen og møtte rasismen der. «Peau noire, masques blancs» analyserer hvordan den koloniserte tar til seg herrens blikk. Han arbeidet ved et sykehus i Algerie og sluttet seg til frigjøringsbevegelsen FLN. «Les damnés de la terre» kom ut med forord av Sartre, samme år han døde av leukemi, bare 36 år gammel. Synet hans på vold er fortsatt omstridt.
    `, [["Peau noire, masques blancs", 1952], ["Les damnés de la terre", 1961]], [sep("https://plato.stanford.edu/entries/frantz-fanon/")]),
    f("Edward Said", [1935, 2003], "mann", ["Estetikk", "Politisk filosofi"], ["Postkolonial filosofi"], ["Kolonialitet", "Makt"], [1978, 2003], "Jerusalem, Kairo og New York", `
      Palestinsk-amerikansk litteraturforsker ved Columbia University. «Orientalism» (1978) viser hvordan vestlig vitenskap og litteratur skapte «Østen» som sitt motbilde, og ble feltets grunnbok. Han var også en av de fremste talspersonene for palestinernes sak, og kritiserte senere Oslo-avtalen. Med Daniel Barenboim grunnla han West-Eastern Divan-orkesteret. Forskere har kritisert ham for å gjøre Vesten til en enhet.
    `, [["Orientalism", 1978], ["The Question of Palestine", 1979], ["Culture and Imperialism", 1993]], [snl("https://snl.no/Edward_Said")]),
    f("Gayatri Spivak", [1942, null], "kvinne", ["Politisk filosofi", "Estetikk"], ["Postkolonial filosofi"], ["Kolonialitet", "Kjønn", "Makt"], [1976, null], "Kolkata og New York", `
      Indisk litteraturteoretiker og filosof ved Columbia University. Hun ble kjent for oversettelsen av Jacques Derridas «De la grammatologie». Essayet «Can the Subaltern Speak?» (1988) spør om de mest underordnede kan bli hørt når de bare kommer til orde gjennom andre, gjerne intellektuelle, og bruker den indiske enkebrenningen som eksempel. Hun driver også skoler for fattige barn i India.
    `, [["Of Grammatology (oversettelse)", 1976], ["Can the Subaltern Speak?", 1988], ["A Critique of Postcolonial Reason", 1999]], [snl("https://snl.no/Gayatri_Chakravorty_Spivak")]),
    f("Achille Mbembe", [1957, null], "mann", ["Politisk filosofi"], ["Postkolonial filosofi"], ["Kolonialitet", "Makt"], [2000, null], "Kamerun og Johannesburg", `
      Kamerunsk historiker og filosof ved University of the Witwatersrand i Sør-Afrika. «De la postcolonie» (2000) beskriver hvordan makt utøves i afrikanske stater etter koloniene. Essayet om *nekropolitikk* (2003) viderefører Foucault: suverenitet handler også om å bestemme hvem som skal dø og leve. «Critique de la raison nègre» skriver rasens historie som en del av kapitalismen.
    `, [["De la postcolonie", 2000], ["Critique de la raison nègre", 2013], ["Politiques de l'inimitié", 2016]], [snl("https://snl.no/Achille_Mbembe")]),
  ],
};
