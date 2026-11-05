// Runde 4: milepæler (tech), steg 7, skrevet av Opus 2026-11-02.
// Kategoriene er TECH_CATEGORIES i js/ui/ui-tech.js: Institusjon, Verk, Krets og skole, Overlevering.
// `type: "hendelse"` er en viktig hendelse; resten er milepæler.
import { sep, iep, snl, bok } from "../kilder.mjs";

const e = (slug) => sep(`https://plato.stanford.edu/entries/${slug}/`);
const m = (name, category, aar, description, kilder, { type = "innovasjon", iBruk = aar, etikett } = {}) => ({
  name, category, type, inventedYear: aar, adoptedYear: iBruk,
  ...(etikett ? { adoptedLabel: etikett } : {}),
  description, kilder,
});
const H = "hendelse";

export default {
  tech: [
    // --- Institusjoner ---
    m("Platons akademi", "Institusjon", -387, `
      Rundt 387 f.Kr. begynte Platon å undervise ved lunden Akademeia utenfor Athen. Skolen samlet folk til matematikk, dialektikk og politisk samtale, og har gitt navn til alle senere akademier. Aristoteles gikk der i tjue år. Skolen endret seg underveis og var skeptisk i lange perioder. Den er blitt stående som bilde på et sted der man søker kunnskap for dens egen skyld.
    `, [e("plato"), e("speusippus")], { etikett: "ca. 387 f.Kr." }),
    m("Jixia-akademiet", "Institusjon", -340, `
      I staten Qi i Kina samlet herskerne fra rundt 340 f.Kr. lærde ved Ji-porten i hovedstaden, med lønn og hus og uten krav om embete. Mengzi var trolig innom, Xunzi ledet stedet, og flere skoler møttes her. Forskere diskuterer hvor formell institusjonen var. Stedet regnes som et av de tidligste kjente lærdomsmiljøene som ble støttet av en stat, omtrent samtidig med Athens skoler.
    `, [e("confucius"), e("xunzi")], { etikett: "ca. 340 f.Kr." }),
    m("Aristoteles' Lykeion", "Institusjon", -335, `
      Aristoteles grunnla i 335 f.Kr. sin skole i en lund i Athen viet til Apollon Lykeios. Undervisningen foregikk gjerne gående, derfor navnet peripatetikere. Skolen samlet stoff om dyr, planter og statsforfatninger, og gjorde forskning og undervisning til ett. Etter Aristoteles ledet Theofrast skolen i over tretti år. Lykeion er et tidlig eksempel på organisert empirisk forskning.
    `, [e("aristotle"), iep("https://iep.utm.edu/theophrastus/")]),
    m("Museet i Alexandria", "Institusjon", -300, `
      Under de ptolemeiske kongene ble det rundt 300 f.Kr. grunnlagt et museum og et enormt bibliotek i Alexandria. Euklid, Eratosthenes og andre arbeidet her, med statlig lønn. Filologien vokste fram gjennom arbeidet med å fastsette tekstene. Fortellingen om at biblioteket ble brent i én brann, er en forenkling. Det forfalt over lang tid. Byen var senere hjem for jødisk, kristen og nyplatonsk filosofi.
    `, [snl("https://snl.no/Biblioteket_i_Alexandria")], { etikett: "ca. 300 f.Kr." }),
    m("Nalanda", "Institusjon", 427, `
      Klosteruniversitetet i Nalanda, i dagens Bihar i India, ble grunnlagt rundt år 427 og samlet munker fra hele Asia. Her ble buddhistisk logikk og filosofi studert i stor skala. Den kinesiske pilegrimen Xuanzang studerte der på 600-tallet og beskrev tusenvis av studenter. Nalanda ble ødelagt rundt 1200 av tyrkiske hærer. Stedet viser hvor institusjonell filosofi var også utenfor Vesten.
    `, [snl("https://snl.no/Nalanda"), e("madhyamaka")], { etikett: "ca. 427" }),
    m("Middelalderens universiteter", "Institusjon", 1150, `
      Universitetene vokste fram rundt 1200 som laug av lærere og studenter, i Bologna, Paris og Oxford. De hadde fakulteter for de frie kunster, teologi, jus og medisin, med forelesning, disputas og grader. Filosofi var først og fremst en forberedelse til teologien, men studiet av Aristoteles ga den eget liv. Institusjonen har holdt seg til i dag, med rektor, dekaner og doktorgrader.
    `, [e("medieval-philosophy")], { iBruk: 1200, etikett: "rundt 1200" }),
    m("Ratio studiorum", "Institusjon", 1599, `
      Jesuittenes studieplan fra 1599 fastsatte en felles undervisning i hundrevis av skoler over hele verden, fra språk og humaniora til Aristoteles og Thomas Aquinas. Descartes gikk på en slik skole i La Flèche. Jesuittene brakte også europeisk lærdom til Kina og Japan, og førte kinesiske klassikere tilbake. Leibniz leste disse rapportene med stor interesse.
    `, [e("descartes"), snl("https://snl.no/jesuitter")]),
    m("Royal Society", "Institusjon", 1660, `
      Selskapet ble grunnlagt i London i 1660, med kongelig privilegium to år senere, og skulle fremme eksperimentell kunnskap etter Francis Bacons program. Mottoet *Nullius in verba* betyr omtrent: tro ingen på ordet. Robert Boyle og Isaac Newton var sentrale, og tidsskriftet «Philosophical Transactions» begynte i 1665. Kvinner ble lenge holdt utenfor, og Margaret Cavendishs besøk i 1667 var en stor unntakshendelse.
    `, [e("scientific-revolutions"), e("boyle")]),
    m("Universitetet i Berlin", "Institusjon", 1810, `
      Universitetet i Berlin ble grunnlagt i 1810 under Wilhelm von Humboldt, etter Preussens nederlag mot Napoleon. Forskning og undervisning skulle høre sammen, og filosofien sto i sentrum. J.G. Fichte ble rektor, og G.W.F. Hegel underviste der fra 1818. Forskningsuniversitetet ble et forbilde over hele verden. Mye av «Humboldt-modellen» er likevel formulert senere.
    `, [sep("https://plato.stanford.edu/entries/wilhelm-humboldt/"), e("hegel")]),
    m("Institutt for samfunnsforskning", "Institusjon", 1923, `
      Instituttet ble grunnlagt i Frankfurt i 1923 med penger fra en kornhandlerfamilie, Felix Weil, og knyttet til universitetet. Max Horkheimer ble leder i 1930 og gjorde det til det som senere ble kalt Frankfurterskolen. Etter 1933 flyttet det til Genève og så New York, og kom tilbake til Frankfurt i 1950. Det forente filosofi og samfunnsforskning på en ny måte.
    `, [e("critical-theory"), e("adorno")]),

    // --- Krets og skole ---
    m("Det pytagoreiske brorskapet", "Krets og skole", -530, `
      Rundt 530 f.Kr. samlet Pytagoras et brorskap i Kroton i Sør-Italia. Medlemmene levde etter regler om mat og taushet, og trodde at sjelen vandrer mellom kropper. Det er en av de første kjente filosofiske fellesskapene, og kvinner kan ha vært med. Politiske motstandere gikk løs på gruppen rundt 450 f.Kr., men tradisjonen levde videre.
    `, [e("pythagoreanism")], { etikett: "ca. 530 f.Kr." }),
    m("Epikurs hage", "Krets og skole", -306, `
      Epikur kjøpte i 306 f.Kr. et hus og en hage utenfor Athen. Her levde vennene sammen i et enkelt fellesskap, også kvinner og slaver, noe som vakte forargelse. Hagen var en skole, men også en livsform, med brev som holdt kontakten med andre grupper rundt i den greske verden. Fellesskap av den typen fantes i flere hundre år.
    `, [e("epicurus")]),
    m("Stoa Poikile", "Krets og skole", -300, `
      Den malte søylehallen ved torget i Athen ga stoisismen navnet sitt. Zenon fra Kition begynte å undervise her rundt 300 f.Kr., på et offentlig sted og for alle som ville høre. Skolen ble etter hvert den mest innflytelsesrike i den hellenistiske verden, men ble ikke knyttet til noe bestemt bygg slik Akademiet og Lykeion var det.
    `, [e("stoicism")], { etikett: "ca. 300 f.Kr." }),
    m("Det platonske akademi i Firenze", "Krets og skole", 1462, `
      Rundt 1462 ga Cosimo de' Medici Marsilio Ficino en villa i Careggi og håndskrifter av Platon. Kretsen av lærde rundt ham ble kalt et akademi, men var en løs vennegruppe, ikke en skole. Pico della Mirandola var blant gjestene. Forskere diskuterer hvor organisert den var. Gruppen ble likevel et symbol på renessansens gjenoppdagelse av Platon.
    `, [e("ficino")], { etikett: "ca. 1462" }),
    m("Port-Royal", "Krets og skole", 1637, `
      Klosteret Port-Royal utenfor Paris ble fra 1637 et sentrum for jansenistene, en streng augustinsk bevegelse i den katolske kirken. Blaise Pascal skrev til forsvar for dem. Antoine Arnauld og Pierre Nicole skrev her «La Logique ou l'art de penser» (1662), en av de mest brukte lærebøkene i logikk i to hundre år. Ludvig 14. fikk klosteret revet i 1711.
    `, [e("pascal"), e("port-royal-logic")]),
    m("Jena-kretsen", "Krets og skole", 1798, `
      I Jena møttes i 1790-årene Friedrich og August Wilhelm Schlegel, Novalis, Schelling, Caroline Michaelis og flere andre rundt tidsskriftet «Athenäum» (1798–1800). Universitetet var allerede Europas filosofiske sentrum med Reinhold og Fichte. Her ble romantikken skapt, med kollektive tekster og fragmentet som form. Kretsen gikk i oppløsning etter få år, men fikk stor betydning.
    `, [e("schlegel"), e("novalis")]),
    m("The Metaphysical Club", "Krets og skole", 1872, `
      I Cambridge i Massachusetts møttes rundt 1872 en liten diskusjonsgruppe med blant andre Charles S. Peirce, William James og juristen Oliver Wendell Holmes. Peirce har hevdet at pragmatismen ble født her. Navnet var en halvt ironisk spøk. Gruppen er kjent gjennom senere minner, og varte bare noen få år, men er blitt et bilde på amerikansk filosofis begynnelse.
    `, [e("pragmatism"), e("peirce")], { etikett: "ca. 1872" }),
    m("Wienerkretsen", "Krets og skole", 1924, `
      Fra 1924 møttes Moritz Schlick, Rudolf Carnap, Otto Neurath, Hans Hahn og andre på torsdagskvelder i Wien for å diskutere logikk, vitenskap og filosofi. Kurt Gödel var med. Programskriftet fra 1929 kalte det en vitenskapelig verdensoppfatning. Nazismen og drapet på Schlick i 1936 gjorde slutt på kretsen, men medlemmene formet analytisk filosofi i USA og Storbritannia.
    `, [e("vienna-circle"), e("logical-empiricism")]),
    m("Les Temps modernes", "Krets og skole", 1945, `
      Jean-Paul Sartre, Simone de Beauvoir, Maurice Merleau-Ponty og Raymond Aron grunnla dette tidsskriftet i Paris i 1945. Det ble eksistensialismens viktigste talerør og et forum om kolonikrigene. Deler av «Le Deuxième Sexe» kom først her. Brudd med Camus i 1952 og Merleau-Ponty i 1953 viser hvordan den kalde krigen delte miljøet. Tidsskriftet kom ut til 2019.
    `, [e("sartre"), e("beauvoir")]),
    m("Oxford-kvartetten", "Krets og skole", 1945, `
      Elizabeth Anscombe, Philippa Foot, Iris Murdoch og Mary Midgley møttes som studenter i Oxford under andre verdenskrig, da mange menn var borte, og utviklet noe av den sterkeste moralske tenkningen etter krigen. Murdochs og Foots vennskap varte hele livet. Forskning de senere årene har vist hvordan de arbeidet sammen, mot en tørr moralsk språkanalyse.
    `, [e("anscombe"), e("murdoch")], { etikett: "1940-tallet" }),

    // --- Verk ---
    m("Upanishadene", "Verk", -700, `
      En samling indiske tekster, de eldste fra rundt 700 f.Kr., som føyde seg til Vedaene. I samtaler mellom lærer og elev spør de hva som ligger til grunn for alt, og svarer at selvet er ett med verdensgrunnen. Da tekstene ble oversatt til persisk og latin, kom de til Europa, og Arthur Schopenhauer så dem som sitt livs trøst. Datering er usikker.
    `, [snl("https://snl.no/upanishader"), e("schopenhauer")], { etikett: "ca. 700 f.Kr." }),
    m("Staten", "Verk", -375, `
      Platons dialog «Staten» spør hva rettferdighet er, og svarer med å tegne en ideell by styrt av filosofer. Boken samler læren om ideene, sjelens tre deler, kritikken av kunsten og hulelignelsen. Den regnes som vestlig filosofis mest innflytelsesrike enkeltverk. Lesere har strides om den viser en utopi eller et skrekkbilde, og Karl Popper kalte Platon en fiende av det åpne samfunnet.
    `, [e("plato-ethics-politics"), e("plato")], { etikett: "ca. 375 f.Kr." }),
    m("Metafysikken", "Verk", -330, `
      Aristoteles' «Metafysikken» er en samling forelesninger om hva det vil si å være, satt sammen senere under en tittel som trolig bare betyr «etter fysikken». Det er herfra faget har navnet. Boken behandler substans, form og den ubevegelige beveger. Ibn Sina forteller at han leste den førti ganger uten å forstå, til han fant al-Farabis kommentar.
    `, [e("aristotle-metaphysics")], { etikett: "ca. 330 f.Kr." }),
    m("Samtalene", "Verk", -400, `
      «Samtalene» (*Lunyu*) er korte utsagn av Konfutse og elevene hans, samlet over flere generasjoner etter hans død. Boken handler om menneskelighet, ritualer og den edle mann. Fra 1313 var den en del av pensum for embetseksamen i Kina, og det gjorde den til Øst-Asias mest innflytelsesrike tekst. Forskere strides om hvor mye som kommer fra Konfutse selv.
    `, [e("confucius")], { etikett: "ca. 400 f.Kr." }),
    m("Bekjennelser", "Verk", 397, `
      Augustin skrev «Bekjennelser» rundt 397–400, til Gud og leseren. Han forteller om sin ungdom, tyveriet av pærer, tvilen og omvendelsen i Milano. Boken går så over i en analyse av hukommelse og tid. Den regnes som den første store selvbiografien, og har hatt stor betydning for vestlig forestilling om det indre livet. Rousseau og Wittgenstein leste den nøye.
    `, [e("augustine")], { etikett: "ca. 397–400" }),
    m("Filosofiens trøst", "Verk", 524, `
      Boethius skrev boken i fengsel, før han ble henrettet i 524. Filosofien selv kommer til ham som en kvinne og viser at lykken ikke er i det ytre, og at Guds forkunnskap kan gå sammen med fri vilje. Boken er rent filosofisk, og nevner ikke Kristus. I middelalderen var den blant de mest leste bøkene, oversatt av blant andre kong Alfred og Chaucer.
    `, [e("boethius")]),
    m("Filosofenes inkonsistens", "Verk", 1095, `
      Med denne boken angrep al-Ghazali de islamske filosofene, særlig Ibn Sina, på tjue punkter, blant annet læren om at verden er evig. Han hevdet også at vi ikke ser nødvendig årsakssammenheng. Ibn Rushd svarte med «Inkonsistensens inkonsistens». Debatten er et høydepunkt i middelalderens filosofi, og er blitt kalt et vendepunkt i islamsk historie, selv om det er omstridt.
    `, [e("al-ghazali"), e("ibn-rushd")]),
    m("Summa theologiae", "Verk", 1265, `
      Thomas Aquinas skrev dette enorme verket fra 1265 til han sluttet å skrive i 1273. Det er ordnet i spørsmål, der hvert behandles med motargumenter, et svar og tilbakevisning. Her står de fem veiene til Gud og læren om naturrett. Boken ble etter hvert selve grunnlaget for katolsk teologi, og pave Leo 13. løftet den fram igjen i 1879. Den ble aldri fullført.
    `, [e("aquinas")], { iBruk: 1274, etikett: "1265–1273" }),
    m("Meditationes", "Verk", 1641, `
      René Descartes' seks meditasjoner lar leseren tvile på alt og finne fram til det ene sikre: jeg tenker. Boken kom ut sammen med innvendinger fra Thomas Hobbes, Antoine Arnauld og andre, og filosofens svar. Formen, en leser som tenker selv i et rom alene, satte standarden for moderne filosofi. Den er ennå den vanligste begynnelsen på et filosofistudium.
    `, [e("descartes-epistemology"), e("descartes")]),
    m("Etikken", "Verk", 1677, `
      Baruch Spinozas hovedverk kom ut rett etter hans død i 1677. Det er bygd opp som geometri, med definisjoner, aksiomer og beviser. Det finnes bare én substans, Gud eller naturen, og frihet er å forstå nødvendighet. Boken ble forbudt, og ble lest i hemmelighet i over hundre år. Da Lessing, Goethe og Hegel tok den opp, ble Spinoza en hovedfigur for den tyske filosofien.
    `, [e("spinoza")]),
    m("An Essay Concerning Human Understanding", "Verk", 1689, `
      John Lockes hovedverk angriper medfødte ideer og spør hva vi kan vite. Sinnet er et ubeskrevet ark, og ideer kommer fra sansning og refleksjon. Boken ble raskt lest over hele Europa, og Voltaire gjorde den til opplysningens grunnbok. Den ga empirismen sin form, og ble et utgangspunkt for Berkeley, Hume og den nye psykologien. Boken er datert 1690.
    `, [e("locke")]),
    m("A Treatise of Human Nature", "Verk", 1739, `
      David Hume skrev dette i Frankrike i 20-årene og ga det ut i 1739–1740. Han ville gjøre for mennesket det Newton hadde gjort for naturen. Årsakssammenheng er vane, selvet er en bunt av inntrykk, og moralen hviler på følelse. Boken falt, sa han selv, dødfødt fra pressen. Han skrev den om i kortere bøker, men Kant og den analytiske filosofien vendte tilbake til den.
    `, [e("hume")]),
    m("Kritikk av den rene fornuft", "Verk", 1781, `
      Immanuel Kant arbeidet i over ti år med boken, som kom ut da han var 57. Han spør hva fornuften kan vite uavhengig av erfaring, og svarer at rom, tid og kategorier kommer fra oss. Metafysikk utover erfaringen fører til selvmotsigelser. Nesten ingen forsto den i begynnelsen, men i løpet av få år var hele tysk filosofi forandret. Annen utgave fra 1787 er ulik på viktige punkter.
    `, [e("kant"), e("kant-reason")]),
    m("Åndens fenomenologi", "Verk", 1807, `
      G.W.F. Hegel fullførte boken i Jena i 1806, mens Napoleon sto utenfor byen. Den følger bevisstheten fra enkel sansning gjennom herre og knekt, stoisismen og den franske revolusjonen, til absolutt viten. Den er en av filosofiens vanskeligste bøker. Alexandre Kojèves forelesninger om den i Paris på 1930-tallet gjorde den viktig for Sartre, Lacan, Bataille og en hel generasjon franske tenkere.
    `, [e("hegel")]),
    m("Kapitalen", "Verk", 1867, `
      Karl Marx' store analyse av kapitalismen kom med første bind i 1867. De neste ble utgitt av Friedrich Engels etter hans død. Han viser hvordan merverdi skapes av arbeidere, og hvordan varen skjuler sosiale forhold. Boken er både økonomi, filosofi og historie, med fotnoter om alt fra Aristoteles til fabrikkinspektører. Først leste få den, men den ble et av de mest innflytelsesrike verkene i moderne historie.
    `, [e("marx")]),
    // Darwin og Freud er med i «Sofies verden» (innhold/runde-6/utvalg.mjs), men
    // er ikke filosofer, så de står som verk (2026-11-05).
    m("Om artenes opprinnelse", "Verk", 1859, `
      Charles Darwin ga i 1859 ut boka om hvordan arter utvikler seg gjennom naturlig utvalg. Individene varierer, flere fødes enn som overlever, og de som passer best til omgivelsene, fører egenskapene videre. Alfred Russel Wallace hadde kommet til det samme, og de to la fram teorien sammen året før. Boka gjorde mennesket til en del av naturens historie og satte i gang en strid med kirken. Filosofer har siden spurt hva den betyr for etikken, for kunnskapen og for formålsforklaringene i naturen.
    `, [e("darwinism"), snl("https://snl.no/Charles_Darwin")]),
    m("Drømmetydning", "Verk", 1899, `
      Sigmund Freud ga ut «Die Traumdeutung» i november 1899, men lot boka bære årstallet 1900. Drømmen er ifølge Freud et forkledd ønske, og tydningen går gjennom frie assosiasjoner fra drømmens innhold til tankene bak. Boka ble grunnlaget for psykoanalysen og for tanken om et ubevisst sjeleliv som styrer oss mer enn vi vet. Ricœur og Lacan leste den på nytt, og Popper brukte psykoanalysen som eksempel på en teori som ikke kan falsifiseres.
    `, [iep("https://iep.utm.edu/freud/"), snl("https://snl.no/Sigmund_Freud")]),
    m("Tractatus Logico-Philosophicus", "Verk", 1921, `
      Den eneste filosofiske boken Ludwig Wittgenstein ga ut i levende live, er bare rundt 75 sider, med nummererte setninger. Språket avbilder verden, og det vi ikke kan tale om, må vi tie om. Han mente at han hadde løst alle filosofiens problemer, og ble landsbylærer. Wienerkretsen leste den setning for setning. Han vendte tilbake til filosofien i 1929 og tok et oppgjør med den.
    `, [e("wittgenstein"), e("wittgenstein-atomism")]),
    m("Sein und Zeit", "Verk", 1927, `
      Martin Heidegger ga ut boken i hast for å få professorat. Den spør etter meningen med å være og beskriver mennesket som kastet inn i verden, på vei mot døden. Andre del ble aldri skrevet. Boken formet eksistensialisme, hermeneutikk og dekonstruksjon, og kom til å bety noe også for psykiatri og teologi. Forholdet mellom bok og Heideggers nazisme er fortsatt omdiskutert.
    `, [e("heidegger")]),
    m("Le Deuxième Sexe", "Verk", 1949, `
      Simone de Beauvoirs store bok om hva det vil si å være kvinne ble solgt i over 20 000 eksemplarer den første uken, og ble satt på Vatikanets indeks. Mannen er normen, og kvinnen blir Den andre. Boken sprang ut av eksistensialismen og la grunnlaget for moderne feministisk filosofi, selv om den første engelske oversettelsen var sterkt forkortet og unøyaktig.
    `, [e("beauvoir")]),
    m("The Structure of Scientific Revolutions", "Verk", 1962, `
      Thomas Kuhns bok ble først utgitt i en leksikonserie Wienerkretsen hadde startet, og ble en av de mest siterte bøker på 1900-tallet. Vitenskapen utvikler seg ikke jevnt, men gjennom paradigmeskifter. Den skapte strid, særlig med Karl Popper, og ble brukt av mange på måter Kuhn ikke mente. Ordet paradigme kom inn i vanlig språk gjennom denne boken.
    `, [e("thomas-kuhn")]),
    m("A Theory of Justice", "Verk", 1971, `
      John Rawls arbeidet i rundt 20 år med boken, som ga politisk filosofi nytt liv i den engelskspråklige verden. Bak et slør av uvitenhet ville vi velge like friheter og godta ulikhet bare der den gagner de dårligst stilte. Robert Nozick svarte tre år senere. Rawls er siden blitt det sentrale referansepunktet for all debatt om rettferdighet.
    `, [e("rawls")]),
    m("Orientalism", "Verk", 1978, `
      Edward Said viser i denne boken hvordan europeiske forskere og forfattere skapte «Østen» som sitt eget motbilde, og hvordan kunnskapen tjente makten. Med utgangspunkt i Michel Foucault grunnla boken det postkoloniale feltet. Bernard Lewis og andre kritiserte den skarpt, og også sympatisører har påpekt at Vesten framstilles for ensartet. Den er oversatt til en lang rekke språk.
    `, [e("colonialism"), snl("https://snl.no/Edward_Said")]),

    // --- Overlevering ---
    m("Andronikos' utgave av Aristoteles", "Overlevering", -60, `
      Aristoteles' utgitte dialoger er nesten alle tapt. Det vi har, er forelesningsnotatene, som ifølge senere kilder lå lenge i en kjeller i Lilleasia og endte i Roma. Andronikos fra Rhodos ordnet dem rundt år 60 f.Kr. i den formen vi kjenner, inkludert Metafysikken. Vårt bilde av Aristoteles som en tørr systematiker kan derfor skyldes en slik tilfeldighet.
    `, [e("aristotle"), e("aristotle-commentators")], { etikett: "ca. 60 f.Kr." }),
    m("Visdommens hus", "Overlevering", 830, `
      Fra rundt 800 lot abbasidekalifene i Bagdad oversette greske, syriske, persiske og indiske verker til arabisk. Hunayn ibn Ishaq og sønnene oversatte Aristoteles, Platon og Galen, ofte via syrisk. «Visdommens hus» er det tradisjonelle navnet på institusjonen, men hvor formell den var, er usikkert. Uten denne bevegelsen ville mye av gresk vitenskap vært tapt, og al-Kindi og Ibn Sina hadde ikke vært mulige.
    `, [e("arabic-islamic-greek")], { etikett: "ca. 830" }),
    m("Oversetterne i Toledo", "Overlevering", 1130, `
      Etter at Toledo ble kristent i 1085, oversatte lærde der arabiske verker til latin, gjerne med hjelp av jøder og muslimer. Gerard av Cremona oversatte alene over 70 verker. Også Sicilia og Konstantinopel var viktige, og Vilhelm av Moerbeke oversatte direkte fra gresk på 1200-tallet. Slik fikk Europa Aristoteles, Ibn Sina og Ibn Rushd, og skolastikken ble mulig.
    `, [e("arabic-islamic-influence")], { iBruk: 1150, etikett: "fra ca. 1130" }),
    m("Lukrets gjenfunnet", "Overlevering", 1417, `
      Humanisten Poggio Bracciolini fant i 1417 en kopi av «De rerum natura» i et kloster, trolig i Fulda. Boken hadde nesten forsvunnet. Den ga atomismen ny kraft og var kjent for Galilei, Bruno og Montaigne. Stephen Greenblatt har hevdet at dette ga opphav til det moderne verdensbildet. Forskere mener han overdriver, men funnet viser hvor tilfeldig overleveringen kan være.
    `, [e("lucretius")]),
    m("Boktrykket", "Overlevering", 1455, `
      Johannes Gutenberg trykte Bibelen med løse typer i Mainz rundt 1455. På 50 år kom det millioner av bøker. Tekster kunne nå sammenlignes og siteres likt, og forfatteren som egen rolle styrket seg. Filosofi og vitenskap fikk raskere spredning, og uten trykkpressene hadde reformasjonen knapt vært mulig. Kineserne hadde allerede brukt blokktrykk i flere hundre år.
    `, [snl("https://snl.no/boktrykk")], { etikett: "ca. 1455" }),
    m("Ficinos Platon", "Overlevering", 1484, `
      Marsilio Ficino ga i 1484 ut alle Platons dialoger på latin i Firenze, så Platon for første gang på tusen år kunne leses i sin helhet i Vesten. Oversettelsen av Plotin kom i 1492. De nyplatonske tolkningene hans preget lesningen helt til Schleiermacher laget en ny tysk oversettelse rundt 1804.
    `, [e("ficino"), e("plato")]),
    m("Sextus Empiricus på latin", "Overlevering", 1562, `
      Henri Estienne ga i 1562 ut «Pyrrhoneiske grunntrekk» på latin, og i 1569 fulgte de andre verkene. Dette utløste en skeptisk krise i Europa, slik Richard Popkin har beskrevet. Montaigne fikk sin «Apologie», og Descartes måtte svare. Det viser hvordan en enkelt tekst som nesten var tapt, kan gi hele filosofien en ny retning.
    `, [e("sextus-empiricus"), e("montaigne")]),
    m("Philosophical Transactions", "Overlevering", 1665, `
      Henry Oldenburg ga i 1665 ut det første nummeret av dette tidsskriftet for Royal Society, noen måneder etter «Journal des sçavans» i Paris. Vitenskapelig artikkel ble slik en ny form for kunnskap, ved siden av boken og brevet. Vurdering fra fagfeller kom senere. Tidsskriftet kommer fortsatt ut.
    `, [e("scientific-revolutions")]),
    m("Encyclopédie", "Overlevering", 1751, `
      Denis Diderot og d'Alembert ga fra 1751 til 1772 ut 28 bind med over 70 000 artikler av mer enn 130 forfattere, om alt fra teologi til håndverk. Mange så verket som krigserklæring mot fordommene, og det ble forbudt i 1759, men fortsatte i det skjulte. Det spredte opplysningens tanker, også til Russland og Amerika. Illustrasjonene av håndverk er kjente.
    `, [e("diderot"), e("enlightenment")]),
    m("Papyrusrullene i Herculaneum", "Overlevering", 1752, `
      I utgravningene av Herculaneum fant man i 1752 et forkullet bibliotek, begravd av Vesuvs utbrudd i år 79. Det inneholder særlig verker av epikureeren Filodemos og er det eneste biblioteket som er bevart fra antikken. Rullene er nesten umulige å åpne, men fra 2023 har forskere lest deler med røntgen og kunstig intelligens. Mye kan fortsatt komme for en dag.
    `, [e("philodemus")]),
    m("Oupnekhat", "Overlevering", 1801, `
      Den franske orientalisten Anquetil-Duperron ga i 1801–1802 ut 50 Upanishader på latin, oversatt fra en persisk versjon bestilt av mogulprinsen Dara Shikoh i 1657. Arthur Schopenhauer leste boken daglig. Sammen med oversettelsene av William Jones og Friedrich Schlegels interesse for sanskrit åpnet dette indisk filosofi for Europa.
    `, [e("schopenhauer")]),
    m("Tidsskriftet Mind", "Overlevering", 1876, `
      George Croom Robertson grunnla i 1876 det første engelskspråklige filosofiske fagtidsskriftet, med Alexander Bain som støttespiller. Russells «On Denoting» (1905) og Turings «Computing Machinery and Intelligence» (1950) kom her. Sammen med andre tidsskrifter gjorde det artikkelen til filosofiens hovedform, og det formet hvordan fagfolk leser og skriver.
    `, [e("analysis"), e("russell")]),
    m("Stanford Encyclopedia of Philosophy", "Overlevering", 1995, `
      Edward N. Zalta startet i 1995 dette gratis, vitenskapelig bedømte nettleksikonet, der forfatterne jevnlig oppdaterer artiklene. Det har i dag over 1700 artikler og er blitt fagets viktigste oppslagsverk. Det regnes som et godt eksempel på hvordan nettet kan gi tilgang til pålitelig kunnskap. Denne appens kilder er for en stor del hentet derfra.
    `, [sep("https://plato.stanford.edu/about.html")]),

    // --- Hendelser ---
    m("Sokrates' rettssak", "Krets og skole", -399, `
      Athen dømte i 399 f.Kr. Sokrates til døden for ugudelighet og for å forderve ungdommen. Han var 70 år gammel, og han tok giften i fengselet i stedet for å flykte. Platons «Forsvarstalen» og «Faidon» har gjort hendelsen til filosofiens opprinnelsesmyte. Bak anklagene lå trolig også politikk, siden flere av hans venner var med i tyranniet i 404 f.Kr.
    `, [e("socrates")], { type: H }),
    m("Mordet på Hypatia", "Krets og skole", 415, `
      I mars 415 ble filosofen Hypatia dratt ut av vognen sin i Alexandria og drept av en kristen mobb, midt i en maktkamp mellom byens prefekt Orestes og biskop Kyrill. Senere ble hun et symbol på fornuft mot fanatisme, i ulike tider. Kildene er knappe, og en slik fortelling er ikke helt rettferdig mot det som faktisk skjedde. Men volden var ekte.
    `, [e("neoplatonism")], { type: H }),
    m("Akademiet stenges", "Institusjon", 529, `
      I 529 forbød keiser Justinian hedninger å undervise i filosofi i Athen, og skolen til Damaskios måtte stenge. Sju filosofer reiste til Persia, men vendte snart tilbake. Årstallet brukes ofte som slutten på antikken, selv om filosofien levde videre, særlig i Alexandria og Harran, og Platon-tradisjonen derfra nådde også den arabiske verden.
    `, [e("neoplatonism"), e("damascius")], { type: H }),
    m("Bagdads fall", "Overlevering", 1258, `
      Mongolene under Hülegü inntok Bagdad i 1258, drepte kalifen og ødela store deler av byen med biblioteker. Fortellingen om en Tigris svart av blekk er nok overdrevet. Det var ikke slutten på islamsk filosofi, som fortsatte i Persia, Anatolia og andre steder, men det gjorde slutt på Bagdad som lærdomssenter.
    `, [e("arabic-islamic-metaphysics")], { type: H }),
    m("Fordømmelsene i Paris", "Institusjon", 1277, `
      Den 7. mars 1277 fordømte biskopen av Paris, Étienne Tempier, 219 filosofiske og teologiske teser, som mange aristotelikere hadde forsvart, deriblant noen nær Thomas Aquinas. Læren om at Gud ikke kan skape flere verdener ble forbudt. Noen historikere, som Pierre Duhem, har sett dette som begynnelsen på moderne vitenskap, fordi naturen dermed ikke var bundet av Aristoteles.
    `, [e("condemnation")], { type: H }),
    m("Galileis rettssak", "Verk", 1633, `
      Inkvisisjonen dømte i 1633 Galileo Galilei for å ha forsvart at jorden går rundt solen. Han måtte sverge av læren og sitte i husarrest resten av livet. «Dialogen» ble satt på indeksen. Saken er blitt symbol på konflikten mellom vitenskap og religion, men politikk og personlige forhold spilte også inn. Den katolske kirken beklaget først i 1992.
    `, [e("galileo")], { type: H }),
    m("Jordskjelvet i Lisboa", "Verk", 1755, `
      Allehelgensdag 1755 ødela jordskjelv, tsunami og brann Lisboa og drepte titusener. Det ble et stort spørsmål for filosofene: hvordan kan en god Gud tillate dette? Voltaire svarte med et dikt og «Candide», Rousseau med at menneskene selv hadde bygd byen slik, og Kant skrev en naturvitenskapelig forklaring. Hendelsen undergravde forestillingen om den beste av alle verdener.
    `, [e("evil"), e("voltaire")], { type: H }),
    m("Edith Stein nektes habilitasjon", "Institusjon", 1919, `
      Edith Stein søkte habilitasjon flere ganger, men ble avvist. Hun skrev til det prøyssiske undervisningsdepartementet, som i 1920 slo fast at kjønn ikke skulle være noe hinder, men dette endret lite. Saken viser hvordan kvinner ble holdt utenfor filosofien. Først i 1920-årene kom de første tyske kvinnelige professorene.
    `, [e("stein")], { type: H, etikett: "1919" }),
    m("Debatten i Davos", "Krets og skole", 1929, `
      I Davos møttes Ernst Cassirer og Martin Heidegger i mars 1929 for å diskutere Kant og hva det vil si å være menneske. Studenter som Emmanuel Levinas og Rudolf Carnap var til stede. Mange så møtet som et vendepunkt, da den gamle universitetsfilosofien ga plass for en ny. Fire år senere var Heidegger rektor under Hitler og Cassirer i eksil. Debatten har siden blitt et symbol.
    `, [e("cassirer"), e("heidegger")], { type: H }),
    m("Heideggers rektortale", "Institusjon", 1933, `
      I mai 1933 ble Martin Heidegger rektor i Freiburg og gikk inn i nazistpartiet. Han holdt en tale der han sa at universitetet skulle tjene folket. Han gikk av året etter, men forble medlem til 1945. Etter krigen fikk han undervisningsforbud fram til 1951. Han sa aldri noe klart om Holocaust, og forholdet mellom filosofi og politikk hos ham er fortsatt et vanskelig spørsmål.
    `, [e("heidegger")], { type: H }),
    m("Eksilet fra 1933", "Institusjon", 1933, `
      Da nazistene kom til makten, måtte en stor del av tyske og østerrikske filosofer flykte: Ernst Cassirer, Max Horkheimer, Theodor W. Adorno, Herbert Marcuse, Hannah Arendt, Rudolf Carnap, Karl Popper og mange flere. Walter Benjamin rakk det ikke. Dette endret filosofien i verden, og grunnla blant annet analytisk filosofi i USA. Tysk filosofi kom seg aldri helt.
    `, [e("logical-empiricism"), e("critical-theory")], { type: H, iBruk: 1933 }),
    m("Positivismestriden", "Krets og skole", 1961, `
      På et møte i Tübingen i 1961 sto Karl Popper og Theodor W. Adorno mot hverandre om samfunnsvitenskapens metode. Debatten fortsatte med Jürgen Habermas og Hans Albert. Spørsmålet er om samfunnet kan studeres uten å kritisere det. Mange opplevde at partene snakket forbi hverandre, og det har siden vært et eksempel på det store skillet i etterkrigstidens filosofi.
    `, [e("critical-theory"), e("popper")], { type: H }),
    m("Mai 1968", "Krets og skole", 1968, `
      Studentopprøret i Paris våren 1968 lammet Frankrike. Sartre sto med studentene, mens Foucault var i Tunisia. Opprøret ga næring til en ny universitetspolitikk, med Vincennes som symbol, og satte kvinner, fengsler og seksualitet på dagsordenen. Mange av poststrukturalistene har sin viktigste tid etter dette. Lignende opprør, med Marcuse som ikon, kom i Berlin og Berkeley.
    `, [e("foucault"), e("marcuse")], { type: H }),
    m("Striden om Derrida i Cambridge", "Institusjon", 1992, `
      Da Cambridge ville gi Jacques Derrida æresdoktorgrad, gikk 18 filosofer, med W.V.O. Quine blant dem, i «The Times» og krevde at han ikke måtte få den. Filosofien hans, hevdet de, er verken klar eller streng. Cambridge stemte, og han fikk graden. Saken viser kløften mellom analytisk og kontinental filosofi, som da var på sitt mest bitre.
    `, [e("derrida")], { type: H }),
  ],
};
