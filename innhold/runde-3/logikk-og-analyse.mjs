// Runde 3: Logikk og analyse. Retningen, epokene, filosofene og påvirkningene (steg 7, skrevet av Opus 2026-11-02).
import { sep, iep, snl, bok, filosof, epoke, strek } from "../kilder.mjs";

const R = "Logikk og analyse";
const f = filosof(R);
const ANALYSE = sep("https://plato.stanford.edu/entries/analysis/");
const WIEN = sep("https://plato.stanford.edu/entries/logical-empiricism/");
const VC = sep("https://plato.stanford.edu/entries/vienna-circle/");
const WITT = sep("https://plato.stanford.edu/entries/wittgenstein/");
const SINN = sep("https://plato.stanford.edu/entries/functionalism/");
const BEVISST = sep("https://plato.stanford.edu/entries/consciousness/");
const KI = sep("https://plato.stanford.edu/entries/artificial-intelligence/");
const METAFYSIKK = sep("https://plato.stanford.edu/entries/metaphysics/");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler det som kalles analytisk filosofi, den dominerende tradisjonen i den engelskspråklige verden siden tidlig på 1900-tallet. Den begynner da Gottlob Frege skapte moderne logikk, og da Bertrand Russell og G.E. Moore gjorde opprør mot idealismen. Fellestrekket er en tro på at filosofiske problemer kan klargjøres gjennom nøye analyse av språk og logikk, i nær kontakt med vitenskapen. Tradisjonen har gjennomgått store skifter, fra Wienerkretsens avvisning av metafysikk til dagens levende metafysikk og sinnsfilosofi. Skillet mot kontinental filosofi er et sosialt og historisk faktum mer enn et klart logisk skille.
          `,
          kilder: [ANALYSE, WIEN],
        },
        story: {
          body: `
            ### En ny logikk
            Gottlob Frege, en nesten ukjent matematiker i Jena, skapte i 1879 et formelt språk som overgikk Aristoteles' logikk etter over to tusen år. Han ville vise at matematikken bygger på logikk alene, og i prosessen utviklet han en lære om mening og referanse. Bertrand Russell fant i 1901 en selvmotsigelse som rammet hele prosjektet, men tok det opp med Alfred North Whitehead i «Principia Mathematica». Russell og G.E. Moore gjorde samtidig opprør mot idealismen i Cambridge: verden består av enkeltting, ikke ett udelt absolutt.

            Ludwig Wittgenstein, en østerriksk ingeniør, kom til Cambridge i 1911 og skrev i skyttergravene en liten bok som hevdet å løse alle filosofiens problemer. Setningen er et bilde av virkeligheten, og det vi ikke kan tale om, må vi tie om.

            ### Wien og kampen mot metafysikken
            I Wien samlet Moritz Schlick, Rudolf Carnap og Otto Neurath en krets som ville gjøre filosofien vitenskapelig. Bare det som kan etterprøves, gir mening, og metafysikk er derfor tomt snakk. A.J. Ayer gjorde tankene kjent på engelsk. Da nazismen drev kretsens medlemmer i eksil, flyttet de tyngdepunktet til USA.

            ### Språket i bruk
            Etter krigen vendte Wittgenstein seg mot sitt eget tidlige verk: meningen ligger ikke i et bilde, men i bruken, i språkspill og livsformer. I Oxford undersøkte Gilbert Ryle og J.L. Austin hvordan ord faktisk brukes. Austin viste at å tale er å handle, og P.F. Strawson førte filosofien tilbake til metafysikken ved å beskrive de begrepene vi ikke kommer utenom.

            ### Metafysikken tilbake
            W.V.O. Quine angrep skillet mellom analytisk og syntetisk, og åpnet for at filosofi og vitenskap er ett. Saul Kripke viste i 1970 at nødvendighet ikke må forveksles med det vi kan vite a priori, og David Lewis hevdet at mulige verdener er like virkelige som vår. Metafysikken, som Wien hadde dømt, var tilbake.

            I sinnsfilosofien ga Alan Turing spørsmålet om tenkende maskiner en ny form. Hilary Putnam foreslo at sinnet er det programvare er for maskinvaren, John Searle svarte med det kinesiske rommet, og David Chalmers kalte bevissthet det vanskelige problemet. Med språkmodeller som kan føre samtaler, har disse spørsmålene gått fra tankeeksperiment til praksis, og Luciano Floridi og Nick Bostrom er blant dem som tar opp følgene.
          `,
        },
      },
    },
    main: {
      "Logisk analyse": epoke("1879–1921", 1879, 1921, `
        Da Gottlob Frege i 1879 ga ut «Begriffsschrift», hadde logikken stått nesten stille siden Aristoteles. Med kvantorer og variabler kunne han uttrykke matematiske bevis fullt ut. I 1892 skilte han mellom en setnings mening og referanse, og begge deler ble avgjørende for språkfilosofien. Bertrand Russell og G.E. Moore brøt rundt 1900 med idealismen i Cambridge, og Russells analyse av bestemte beskrivelser i 1905 viste at grammatikken kan villede oss om logisk form.

        Dette ble selve metoden: filosofiske problemer oppstår av språket, og analyse kan løse dem. Ludwig Wittgensteins «Tractatus» (1921) trakk konsekvensen: det meste av filosofien er nonsens. Boken ble grunnlaget for Wienerkretsen, selv om han selv var uenig med dem om det viktigste, nemlig det som ikke kan sies.
      `, `
        Europa før og under første verdenskrig. Russell satt i fengsel i 1918 for sitt pasifistiske engasjement, og Wittgenstein kjempet frivillig for Østerrike og fullførte boken under krigen.
      `, `
        Grunnlagskrisen i matematikken, med Cantors mengdelære og oppdagelsen av paradokser, satte dagsorden. Cambridge og Göttingen var sentrale. Kretsen rundt Moore og Bloomsbury var også preget av hans etikk.
      `, [ANALYSE, sep("https://plato.stanford.edu/entries/frege/"), sep("https://plato.stanford.edu/entries/russell/"), sep("https://plato.stanford.edu/entries/wittgenstein/")]),

      "Logisk positivisme": epoke("1924–1950", 1924, 1950, `
        Wienerkretsen begynte å møtes rundt Moritz Schlick fra 1924. I programskriftet fra 1929 kaller den seg en bevegelse for vitenskapelig verdensoppfatning. Meningsfulle utsagn er enten logiske sannheter eller kan etterprøves ved erfaring. Metafysikk, teologi og mye av etikken er dermed verken sanne eller usanne, men meningsløse. Rudolf Carnap ville bygge verden logisk fra sanseinntrykk, og Otto Neurath arbeidet for en felles vitenskap.

        Prinsippet viste seg vanskelig å formulere uten at det rammet seg selv. Etter hvert kom interne opprør, som Neuraths bilde av skipet som må bygges om til sjøs. Kretsen var politisk venstreorientert, og mange var jøder. Etter Schlicks død i 1936 og nazistenes maktovertakelse spredte de seg til USA og Storbritannia, og det formet hele amerikansk filosofi.
      `, `
        «Røde Wien» under sosialdemokratene, med folkeopplysning og boligbygging. Etter 1933 kom Dollfuss' autoritære regime og Anschluss i 1938. Kretsens motstand mot metafysikk var også motstand mot nazistenes irrasjonalisme.
      `, `
        Einsteins relativitetsteori og Hilberts logikk var forbildene. Kurt Gödels ufullstendighetsteoremer fra 1931 kom fra kretsens egne møter og viste logikkens grenser. Kongresser for vitenskapens enhet ble holdt i 1930-årene.
      `, [VC, WIEN, sep("https://plato.stanford.edu/entries/carnap/")]),

      "Språkfilosofien": epoke("ca. 1945–", 1945, null, `
        Etter krigen ble Oxford sentrum for en ny retning. Vanlig språk er ikke feil, og mange filosofiske problemer oppstår fordi vi tar ord ut av den sammenhengen de hører hjemme i. Ludwig Wittgensteins «Philosophische Untersuchungen» (1953) kom ut etter hans død: mening er bruk, ord er som verktøy, og språkspill henger sammen med livsformer. Gilbert Ryle hevdet at sinnet ikke er et spøkelse i maskinen, J.L. Austin viste at noen setninger gjør noe, som «jeg lover», og P.F. Strawson kritiserte Russell og ga metafysikken en ny plass.

        Fra 1960-tallet tok språkfilosofien en mer formell vending. Donald Davidson bygde en teori om mening ut fra sannhet. Saul Kripke holdt i 1970 forelesningene som ble «Naming and Necessity»: egennavn viser til samme person i alle mulige verdener, og noe kan være nødvendig uten å være kjent a priori. Dermed ble metafysiske spørsmål om vesen igjen respektable, og David Lewis gikk så langt som å ta mulige verdener bokstavelig. Wiens dom over metafysikken var opphevet, og spørsmål om tid, identitet og kausalitet ble et stort forskningsfelt. Kritikere spør hva slags kunnskap dette skal være, og om det ikke bare handler om begrepene våre.
      `, `
        Storbritannia i gjenreisning og med velferdsstaten. Mange filosofer kom tilbake fra krigstjeneste, Ryle og Austin fra etterretningen. Senere vokste universitetene i USA og Australia sterkt, og Princeton ble et hovedsete for den nye metafysikken.
      `, `
        Tutorialene i Oxford og Austins lørdagsmorgener formet metoden, og sen Wittgenstein ble spredt gjennom elever og forelesningsnotater. Modallogikk, utviklet av blant andre Ruth Barcan Marcus og Kripke selv som tenåring, ga formelle redskaper.
      `, [WITT, sep("https://plato.stanford.edu/entries/austin-jl/"), METAFYSIKK, sep("https://plato.stanford.edu/entries/possible-worlds/"), sep("https://plato.stanford.edu/entries/david-lewis/")]),

      "Sinnsfilosofien": epoke("ca. 1950–", 1950, null, `
        Alan Turing spurte i 1950 om maskiner kan tenke, og foreslo at vi lar spørsmålet avhenge av en samtaleprøve. Tidlige materialister som David Armstrong hevdet at mentale tilstander er hjernetilstander. Hilary Putnam foreslo at de heller er funksjonelle roller, slik programvare kan kjøres på ulik maskinvare, og Paul og Patricia Churchland mente at hverdagens snakk om oppfatninger og ønsker kan avløses av nevrovitenskapen.

        John Searle svarte med det kinesiske rommet: å følge regler er ikke å forstå. Thomas Nagel spurte hvordan det er å være en flaggermus, og David Chalmers skilte i 1995 det «vanskelige problemet» om bevissthet fra de lette. Debatten mellom dem som vil forklare bevissthet naturvitenskapelig, og dem som mener det alltid vil være noe igjen, er uløst.

        Etter 2000 ble Turings spørsmål praktisk. Luciano Floridi utviklet en informasjonsfilosofi med etiske begreper for en digital verden, og Nick Bostrom pekte på risikoen ved superintelligens. Etter språkmodellenes gjennombrudd fra rundt 2020 har debatten om de virkelig forstår, tatt opp igjen Searles argument, og spørsmål om ansvar, skjevhet og overvåking er blitt del av den offentlige debatten.
      `, `
        Etterkrigstidens datamaskin og kybernetikken. Den kalde krigen finansierte forskning på kunstig intelligens. I vår tid har maskinlæring og makt samlet i noen få selskaper gitt spørsmålene rask politisk virkning, og EU vedtok en egen KI-forordning i 2024.
      `, `
        Kognitiv psykologi avløste behaviorismen, og hjerneavbildning fra 1990-tallet gjorde bevissthet til et empirisk felt. Dyp læring fra rundt 2012 og språkmodeller fra rundt 2018 endret forskningsfeltet, og filosofer samarbeider nå med dataforskere, ofte med støtte fra industrien.
      `, [SINN, BEVISST, sep("https://plato.stanford.edu/entries/turing/"), sep("https://plato.stanford.edu/entries/chinese-room/"), KI, bok("Bostrom, Nick. Superintelligence: Paths, Dangers, Strategies. Oxford University Press, 2014.")]),
    },
  },

  edgeDescriptions: {
    rasjonalismen__logiskanalyse: strek(`Leibniz drømte om et logisk regnespråk, og Frege så sitt arbeid som en oppfyllelse av drømmen. Russell skrev i 1900 en hel bok om Leibniz' logikk.`),
    aristotelismen__logiskanalyse: strek(`I over to tusen år var Aristoteles' syllogismer logikken. Frege erstattet subjekt og predikat med funksjon og argument, og det var det store bruddet.`),
    tyskidealisme__logiskanalyse: strek(`Russell og Moore var opplært i Bradleys og McTaggarts idealisme i Cambridge. «The Refutation of Idealism» (1903) markerte bruddet, og hele analytisk filosofi har ofte definert seg gjennom det.`),
    logiskanalyse__logpositivisme: strek(`Kretsen i Wien leste «Tractatus» setning for setning. Russells logikk ga dem redskapene de trengte for å gjøre empirismen logisk.`),
    positivismen__logpositivisme: strek(`Ernst Mach hadde holdt lærestolen i Wien som Schlick senere fikk, og kretsens forening fikk hans navn. Positivismens krav om erfaring ble nå knyttet til logikken.`),
    logiskanalyse__sprakfilosofien: strek(`Moore var en stadig målestokk gjennom sin hverdagslige fornuft, og Wittgenstein gikk fra sitt tidlige verk til det sene. Senere språkfilosofer brukte Russells og Freges logiske redskaper, og Kripke, som brøt med Frege om navn, er utenkelig uten denne bakgrunnen.`),
    logpositivisme__sprakfilosofien: strek(`Wittgenstein angrep sin egen tidlige tanke om et ideelt språk, som hadde inspirert kretsen, og Austin og Ryle viste at språket gjør mye mer enn å verifisere påstander. Senere ble Wiens avvisning av metafysikk vendt om: Quines kritikk av Carnap åpnet døren, og Kripke og Lewis gikk rett inn.`),
    sprakfilosofien__sinnsfilosofien: strek(`Ryles «The Concept of Mind» (1949) og Wittgensteins privatspråkargument satte spørsmålet. Tidlig materialisme vokste fram blant dem som syntes at svarene var for ufullstendige.`),
    vitenskapsfilosofi__sinnsfilosofien: strek(`W.V.O. Quines naturalisme, tanken om at sinnet må forstås med vitenskapens midler, ligger under det meste av feltet. Paul og Patricia Churchland tok den med seg inn i nevrofilosofien.`),
  },

  artists: [
    // --- Logisk analyse ---
    f("Gottlob Frege", [1848, 1925], "mann", ["Logikk og språk"], ["Logisk analyse"], ["Mening og referanse", "Sannhet"], [1879, 1925], "Wismar og Jena", `
      Tysk matematiker og filosof, professor i Jena, og den moderne logikkens grunnlegger. «Begriffsschrift» (1879) er den viktigste logikkboken siden Aristoteles. Han ville vise at aritmetikken bygger på logikk, og «Über Sinn und Bedeutung» skiller mening og referanse. Da annet bind av hovedverket var i trykken, fikk han et brev fra Russell om en selvmotsigelse i grunnlaget. Dagbøkene hans fra 1924 viser antisemittisme. Han var knapt kjent i levetiden.
    `, [["Begriffsschrift", 1879], ["Die Grundlagen der Arithmetik", 1884], ["Über Sinn und Bedeutung", 1892], ["Grundgesetze der Arithmetik", 1893]], [sep("https://plato.stanford.edu/entries/frege/")]),
    f("Bertrand Russell", [1872, 1970], "mann", ["Logikk og språk", "Erkjennelsesteori"], ["Logisk analyse"], ["Mening og referanse", "Sannhet", "Universalier"], [1900, 1970], "Wales, Cambridge og Penrhyndeudraeth", `
      Britisk filosof, logiker og samfunnsdebattant, en av analytisk filosofis grunnleggere. Med paradokset fra 1901 og «Principia Mathematica» sammen med Whitehead forandret han logikken. Artikkelen «On Denoting» (1905) ble et forbilde for filosofisk analyse. Han satt i fengsel for motstand mot første verdenskrig, og fikk Nobels litteraturpris i 1950. Han ledet senere kampen mot atomvåpen. Hans store filosofihistorie er underholdende, men upålitelig.
    `, [["On Denoting", 1905], ["Principia Mathematica", 1910], ["The Problems of Philosophy", 1912], ["A History of Western Philosophy", 1945]], [sep("https://plato.stanford.edu/entries/russell/"), snl("https://snl.no/Bertrand_Russell")]),
    f("G.E. Moore", [1873, 1958], "mann", ["Etikk", "Erkjennelsesteori"], ["Logisk analyse", "Metaetikken"], ["Sannhet"], [1898, 1958], "London og Cambridge", `
      Engelsk filosof i Cambridge, Russells venn og med ham en av dem som brøt med idealismen. «Principia Ethica» (1903) hevder at det gode ikke kan defineres, og at det å prøve er en *naturalistisk feilslutning*. Boken ble bibelen for Bloomsbury-gruppen. Han forsvarte også hverdagsoppfatninger: i et berømt foredrag viste han fram sine to hender som bevis for en ytre verden. Paradokset som bærer navnet hans, fascinerte Wittgenstein.
    `, [["The Refutation of Idealism", 1903], ["Principia Ethica", 1903], ["A Defence of Common Sense", 1925], ["Proof of an External World", 1939]], [sep("https://plato.stanford.edu/entries/moore/")]),
    f("Ludwig Wittgenstein", [1889, 1951], "mann", ["Logikk og språk", "Metafysikk"], ["Logisk analyse", "Språkfilosofien"], ["Språkspill", "Mening og referanse", "Bevissthet"], [1912, 1951], "Wien, Cambridge og Skjolden", `
      Østerriksk-britisk filosof fra en av Wiens rikeste familier, ofte regnet som århundrets viktigste filosof i den analytiske tradisjonen. Han ga bort arven, kjempet i første verdenskrig, og «Tractatus» (1921) kommer fra den tiden. Han ble lærer i landsbyer i Østerrike og vendte så tilbake til Cambridge. Senverket avviser det tidlige: mening er bruk, og språket består av språkspill. Han hadde en hytte i Skjolden i Norge, der han arbeidet i lange perioder.
    `, [["Tractatus Logico-Philosophicus", 1921], ["Philosophische Untersuchungen", 1953], ["Über Gewissheit", 1969]], [WITT, snl("https://snl.no/Ludwig_Wittgenstein")]),

    // --- Logisk positivisme ---
    f("Moritz Schlick", [1882, 1936], "mann", ["Vitenskapsfilosofi", "Erkjennelsesteori"], ["Logisk positivisme"], ["Erfaring", "Sannhet"], [1918, 1936], "Berlin, Kiel og Wien", `
      Tysk filosof og fysiker, doktor under Max Planck, og den første som ga en filosofisk framstilling av Einsteins relativitetsteori. Han fikk i 1922 lærestolen i Wien og ble samlingspunktet for kretsen. Han møtte Wittgenstein og fulgte ham på mange punkter. I 1936 ble han skutt på trappene til universitetet av en tidligere student. Deler av høyrepressen forsvarte drapet, og dette markerte slutten på kretsen.
    `, [["Raum und Zeit in der gegenwärtigen Physik", 1917], ["Allgemeine Erkenntnislehre", 1918], ["Fragen der Ethik", 1930]], [sep("https://plato.stanford.edu/entries/schlick/")]),
    f("Rudolf Carnap", [1891, 1970], "mann", ["Logikk og språk", "Vitenskapsfilosofi"], ["Logisk positivisme"], ["Mening og referanse", "Erfaring", "Induksjon"], [1928, 1970], "Wien, Praha, Chicago og Los Angeles", `
      Tysk-amerikansk filosof, den mest systematiske i Wienerkretsen. «Der logische Aufbau der Welt» forsøker å bygge all kunnskap logisk fra sanseinntrykk. Senere arbeidet han med språkets logiske syntaks, semantikk og sannsynlighet. Toleranseprinsippet sier at i logikken finnes ingen moral: hver enkelt kan bygge sitt språk. Han flyttet til USA i 1935, og i et berømt angrep på Heidegger gjorde han narr av setninger om intetheten.
    `, [["Der logische Aufbau der Welt", 1928], ["Logische Syntax der Sprache", 1934], ["Meaning and Necessity", 1947], ["Logical Foundations of Probability", 1950]], [sep("https://plato.stanford.edu/entries/carnap/")]),
    f("Otto Neurath", [1882, 1945], "mann", ["Vitenskapsfilosofi", "Politisk filosofi"], ["Logisk positivisme"], ["Erfaring", "Sannhet"], [1919, 1945], "Wien, Haag og Oxford", `
      Østerriksk sosiolog, økonom og filosof, den mest politiske i Wienerkretsen. Han var med i den sosialistiske regjeringen i Bayern i 1919 og fengslet etterpå. Han skrev programskriftet fra 1929 sammen med Carnap og Hans Hahn. Vi er sjømenn som må bygge om båten mens vi er på havet, en metafor Quine senere gjorde berømt. Han skapte billedspråket Isotype, en forløper for moderne piktogrammer.
    `, [["Wissenschaftliche Weltauffassung: Der Wiener Kreis", 1929], ["Empirische Soziologie", 1931]], [sep("https://plato.stanford.edu/entries/neurath/")]),
    f("A.J. Ayer", [1910, 1989], "mann", ["Erkjennelsesteori", "Etikk"], ["Logisk positivisme", "Metaetikken"], ["Sannhet", "Erfaring"], [1936, 1989], "London og Oxford", `
      Britisk filosof, som reiste til Wien i 1932–33 og skrev den lille boken «Language, Truth and Logic» bare 25 år gammel. Her fikk logisk positivisme sin mest kjente engelske form, med påstanden om at moralske utsagn bare uttrykker følelser. Senere innrømmet han at det meste av boken var galt. Han var kjent for sitt liv som bon vivant, og fortalte om en dødsnær opplevelse sent i livet.
    `, [["Language, Truth and Logic", 1936], ["The Problem of Knowledge", 1956]], [sep("https://plato.stanford.edu/entries/logical-empiricism/"), snl("https://snl.no/Alfred_Jules_Ayer")]),
    f("Susan Stebbing", [1885, 1943], "kvinne", ["Logikk og språk"], ["Logisk positivisme"], ["Sannhet"], [1930, 1943], "London", `
      Britisk filosof, den første kvinnelige professor i filosofi i Storbritannia (Bedford College, 1933). Hun var med på å føre den moderne logikken og Wienerkretsens tanker til et britisk publikum. «A Modern Introduction to Logic» var den første lærebok av sitt slag. Med «Thinking to Some Purpose» (1939) ga hun en kritisk tenkebok for allmennheten, med politikernes språk som eksempel. Lenge glemt, nå igjen lest.
    `, [["A Modern Introduction to Logic", 1930], ["Thinking to Some Purpose", 1939]], [sep("https://plato.stanford.edu/entries/stebbing/")]),

    // --- Dagligspråksfilosofien (nå i Språkfilosofien) ---
    f("Gilbert Ryle", [1900, 1976], "mann", ["Metafysikk", "Logikk og språk"], ["Språkfilosofien", "Sinnsfilosofien"], ["Kropp og sjel", "Bevissthet"], [1927, 1976], "Brighton og Oxford", `
      Britisk filosof i Oxford, redaktør av tidsskriftet «Mind» i over 20 år. «The Concept of Mind» (1949) angriper «spøkelset i maskinen», arven fra Descartes, som en *kategorifeil*. Å ha et sinn er å ha visse evner og tilbøyeligheter. Skillet mellom å vite hvordan og å vite at er blitt stående. Han var tidlig opptatt av fenomenologi og skrev en anmeldelse av «Sein und Zeit».
    `, [["The Concept of Mind", 1949], ["Dilemmas", 1954]], [sep("https://plato.stanford.edu/entries/ryle/")]),
    f("J.L. Austin", [1911, 1960], "mann", ["Logikk og språk"], ["Språkfilosofien"], ["Mening og referanse", "Sannhet"], [1946, 1960], "Lancaster og Oxford", `
      Britisk filosof i Oxford, ledende i etterretningen under krigen. Å si noe er ofte å gjøre noe: «jeg lover» beskriver ikke et løfte, men gir det. Forelesningene ble til «How to Do Things with Words» og ga opphav til teorien om språkhandlinger. Han hentet stoff fra loven og hverdagen, og ledet lørdagsmøter for unge kolleger. Han døde 48 år gammel, og publiserte lite selv.
    `, [["How to Do Things with Words", 1962], ["Sense and Sensibilia", 1962]], [sep("https://plato.stanford.edu/entries/austin-jl/")]),
    f("P.F. Strawson", [1919, 2006], "mann", ["Metafysikk", "Logikk og språk"], ["Språkfilosofien"], ["Mening og referanse", "Fri vilje", "Substans"], [1950, 2006], "London og Oxford", `
      Britisk filosof i Oxford. «On Referring» (1950) kritiserte Russells teori om beskrivelser. «Individuals» (1959) gjorde metafysikk respektabel igjen som «beskrivende metafysikk», og «The Bounds of Sense» ga ny lesning av Kant. Artikkelen «Freedom and Resentment» (1962) flyttet debatten om fri vilje til våre reaktive holdninger, som sinne og takknemlighet.
    `, [["On Referring", 1950], ["Individuals", 1959], ["Freedom and Resentment", 1962], ["The Bounds of Sense", 1966]], [sep("https://plato.stanford.edu/entries/strawson/")]),

    // --- Sinnsfilosofien ---
    f("Alan Turing", [1912, 1954], "mann", ["Logikk og språk", "Vitenskapsfilosofi"], ["Sinnsfilosofien"], ["Bevissthet"], [1936, 1954], "London, Cambridge og Manchester", `
      Britisk matematiker og logiker, en av informatikkens fedre. Artikkelen fra 1936 beskriver den universelle maskinen og viser at noen problemer ikke kan beregnes. Under krigen brøt han Enigma-koden ved Bletchley Park. «Computing Machinery and Intelligence» (1950) foreslår imitasjonsleken, senere kalt Turingtesten. Han ble dømt for homoseksualitet i 1952 og tvunget til hormonbehandling, og døde to år senere av cyanidforgiftning.
    `, [["On Computable Numbers", 1936], ["Computing Machinery and Intelligence", 1950]], [sep("https://plato.stanford.edu/entries/turing/")]),
    f("John Searle", [1932, 2025], "mann", ["Logikk og språk", "Metafysikk"], ["Sinnsfilosofien"], ["Bevissthet", "Intensjonalitet", "Mening og referanse"], [1969, 2025], "Denver, Oxford og Berkeley", `
      Amerikansk filosof ved University of California, Berkeley, elev av Austin i Oxford. Han utviklet teorien om språkhandlinger. Det kinesiske rommet (1980) skal vise at et program som følger regler, ikke dermed forstår. Bevissthet er et biologisk fenomen, slik fordøyelsen er det. Han debatterte hardt med Derrida. I 2019 mistet han sin emeritusstatus etter en sak om seksuell trakassering.
    `, [["Speech Acts", 1969], ["Minds, Brains, and Programs", 1980], ["The Rediscovery of the Mind", 1992]], [sep("https://plato.stanford.edu/entries/chinese-room/")]),
    f("David Chalmers", [1966, null], "mann", ["Metafysikk", "Erkjennelsesteori"], ["Sinnsfilosofien"], ["Bevissthet", "Kropp og sjel"], [1996, null], "Sydney og New York", `
      Australsk filosof ved New York University. «The Conscious Mind» (1996) skiller mellom de lette problemene om bevissthet og det *vanskelige problemet*: hvorfor er det noe det er som å oppleve? Han hevder at bevissthet ikke kan forklares fysisk. Sammen med Andy Clark skrev han om det utvidede sinnet, der for eksempel notatboken regnes med. «Reality+» (2022) tar for seg virtuelle verdener.
    `, [["The Conscious Mind", 1996], ["The Extended Mind", 1998], ["Reality+", 2022]], [BEVISST]),

    // --- Analytisk metafysikk (nå i Språkfilosofien og Sinnsfilosofien) ---
    f("Donald Davidson", [1917, 2003], "mann", ["Logikk og språk", "Metafysikk"], ["Språkfilosofien", "Sinnsfilosofien"], ["Mening og referanse", "Sannhet", "Kausalitet", "Kropp og sjel"], [1963, 2003], "Stanford, Princeton og Berkeley", `
      Amerikansk filosof. Han hevdet at grunner kan være årsaker til handlinger, at en meningsteori må ta form av en sannhetsteori, og at mentale hendelser er fysiske uten at det finnes lover for sammenhengen, *anomal monisme*. All tolkning må forutsette at de fleste av den andres oppfatninger er sanne. Han var elev av Quine, og var en av de mest innflytelsesrike i siste del av århundret.
    `, [["Actions, Reasons, and Causes", 1963], ["Truth and Meaning", 1967], ["Mental Events", 1970]], [sep("https://plato.stanford.edu/entries/davidson/")]),
    f("Saul Kripke", [1940, 2022], "mann", ["Logikk og språk", "Metafysikk"], ["Språkfilosofien"], ["Mening og referanse", "Universalier"], [1959, 2022], "Omaha, Princeton og New York", `
      Amerikansk filosof og logiker. Han utviklet semantikk for modallogikken i tenårene. «Naming and Necessity», forelesninger holdt uten notater i 1970, viser at navn fungerer som faste betegnere, og at det finnes nødvendige sannheter som må oppdages empirisk, som at vann er H2O. «Wittgenstein on Rules and Private Language» (1982) gjorde en omstridt lesning av Wittgenstein til et eget problem.
    `, [["Naming and Necessity", 1972], ["Wittgenstein on Rules and Private Language", 1982]], [sep("https://plato.stanford.edu/entries/possible-worlds/")]),
    f("David Lewis", [1941, 2001], "mann", ["Metafysikk", "Logikk og språk"], ["Språkfilosofien"], ["Kausalitet", "Substans"], [1969, 2001], "Oberlin og Princeton", `
      Amerikansk filosof, kanskje den mest systematiske metafysikeren i sin generasjon. Han hevdet at mulige verdener er like virkelige som vår, bare ikke tilgjengelige fra den, en lære kalt *modal realisme*. Det kan virke sprøtt, men ga en kraftig analyse av nødvendighet, kausalitet og kontrafaktiske setninger. «Convention» (1969) bruker spillteori på språket. Han arbeidet tett med filosofer i Australia.
    `, [["Convention", 1969], ["Counterfactuals", 1973], ["On the Plurality of Worlds", 1986]], [sep("https://plato.stanford.edu/entries/david-lewis/")]),
    f("David Armstrong", [1926, 2014], "mann", ["Metafysikk"], ["Sinnsfilosofien"], ["Universalier", "Kropp og sjel"], [1968, 2014], "Melbourne og Sydney", `
      Australsk filosof ved Universitetet i Sydney, sentral i det som kalles den australske materialismen. «A Materialist Theory of the Mind» (1968) hevder at mentale tilstander er hjernetilstander. Han forsvarte også universalier i en naturalistisk form, slik at de finnes i tingene selv, og utviklet læren om *sannhetsgjørere*. Han var en sentral skikkelse for filosofien i Australia.
    `, [["A Materialist Theory of the Mind", 1968], ["Universals and Scientific Realism", 1978], ["What Is a Law of Nature?", 1983]], [METAFYSIKK, sep("https://plato.stanford.edu/entries/properties/")]),

    // --- KI-filosofien (nå i Sinnsfilosofien) ---
    f("Luciano Floridi", [1964, null], "mann", ["Etikk", "Vitenskapsfilosofi"], ["Sinnsfilosofien"], ["Bevissthet"], [2002, null], "Roma, Oxford og Yale", `
      Italiensk filosof, lenge ved Oxford og nå ved Yale. Han har utviklet informasjonens filosofi som et eget felt, der informasjon, ikke materie, er nøkkelbegrep for vår tid. Han hevder at vi lever i en «fjerde revolusjon» etter Kopernikus, Darwin og Freud. Han har skrevet mye om etikk for digital teknologi og kunstig intelligens, og har gitt råd til EU og teknologiselskaper.
    `, [["The Philosophy of Information", 2011], ["The Fourth Revolution", 2014], ["The Ethics of Artificial Intelligence", 2023]], [KI, bok("Floridi, Luciano. The Philosophy of Information. Oxford University Press, 2011.")]),
    f("Nick Bostrom", [1973, null], "mann", ["Etikk", "Metafysikk"], ["Sinnsfilosofien"], [], [2002, null], "Sverige og Oxford", `
      Svensk filosof, grunnla Future of Humanity Institute i Oxford, som stengte i 2024. Artikkelen fra 2003 argumenterer for at vi kan leve i en datasimulering. «Superintelligence» (2014) drøfter hva som kan skje om maskiner blir klokere enn oss, og boken har påvirket debatten om KI-risiko. Han er kritisert for en spekulativ stil og for en gammel e-post om rase som han senere ba om unnskyldning for.
    `, [["Are You Living in a Computer Simulation?", 2003], ["Superintelligence", 2014]], [KI, bok("Bostrom, Nick. Superintelligence: Paths, Dangers, Strategies. Oxford University Press, 2014.")]),
  ],
};
