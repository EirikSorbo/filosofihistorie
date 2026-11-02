// Runde 1: Natur og erfaring. Retningen, epokene, filosofene og påvirkningene (steg 7, skrevet av Opus 2026-11-02).
import { sep, iep, snl, bok, filosof, epoke, strek } from "../kilder.mjs";

const R = "Natur og erfaring";
const f = filosof(R);
const PRE = sep("https://plato.stanford.edu/entries/presocratics/");
const ATOM = sep("https://plato.stanford.edu/entries/atomism-ancient/");
const SR = sep("https://plato.stanford.edu/entries/scientific-revolutions/");
const LE = sep("https://plato.stanford.edu/entries/logical-empiricism/");
const PRAG = sep("https://plato.stanford.edu/entries/pragmatism/");
const NAT = sep("https://plato.stanford.edu/entries/naturalism/");
const RE = sep("https://plato.stanford.edu/entries/rationalism-empiricism/");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler tradisjonen som søker kunnskap i naturen og i erfaringen. Den går fra de joniske naturfilosofene og atomistene via Aristoteles til den vitenskapelige revolusjonen, den britiske empirismen, positivismen, pragmatismen og nyere vitenskapsfilosofi. Fellestrekket er ikke én lære, men en holdning: påstander om verden må kunne prøves mot noe utenfor tanken selv. Retningen rommer både dem som stoler på sansene og dem som viser hvor lite sansene alene kan begrunne, for Hume og Popper tilhører den like mye som Bacon. Her ligger også spørsmålene om hva vitenskap er, og om filosofien har noe eget ståsted ved siden av den.
          `,
          kilder: [PRE, RE],
        },
        story: {
          body: `
            ### Fra myte til natur
            I Milet på 500-tallet f.Kr. begynte noen å forklare verden uten å vise til gudenes vilje. Thales, Anaximander og Anaximenes spurte hva alt består av, og Heraklit så forandringen selv som det grunnleggende. Svarene deres var spekulative, men de var argumenter som kunne imøtegås, og det var nytt. Leukipp og Demokrit trakk den dristigste konsekvensen: det finnes bare atomer og tomrom.

            Aristoteles samlet tradisjonen i et system. Han avviste Platons ideer som egen virkelighet, studerte dyr, stater og slutningsformer, og gjorde naturen til noe som kan forstås ut fra formål og årsaker. I nesten to tusen år var dette rammen for vitenskap i Europa og den islamske verden.

            ### Den store omveltningen
            Rammen brast på 1500- og 1600-tallet. Nikolaus Kopernikus flyttet jorden ut av sentrum, Galileo Galilei gjorde matematikk og eksperiment til naturens språk, Francis Bacon skrev programmet for en ny induktiv vitenskap, og Isaac Newton forente himmel og jord i én mekanikk. Formålsforklaringene forsvant, og atomismen kom tilbake.

            ### Hva kan erfaringen vite?
            John Locke, George Berkeley og David Hume gjorde den nye vitenskapen til filosofi: all kunnskap om verden stammer fra erfaringen. Men Hume viste hvor langt dette rakk. Verken årsakssammenheng eller induksjon lar seg begrunne av erfaringen selv. Dette vekket Kant, og spørsmålet har fulgt tradisjonen siden.

            På 1800-tallet gjorde Auguste Comte vitenskapen til et historisk mål i seg selv, mens John Stuart Mill bygde en empiristisk logikk og Ernst Mach ville rense fysikken for alt som ikke kan observeres. I USA snudde Charles S. Peirce, William James og John Dewey spørsmålet: kunnskap er ikke et speilbilde av verden, men et redskap for å handle i den.

            ### Vitenskapen under lupen
            På 1900-tallet ble vitenskapen selv filosofiens tema. Karl Popper hevdet at teorier ikke kan bekreftes, bare motbevises. Thomas Kuhn viste at vitenskapens historie ikke er jevn opphoping, men omveltninger, og Paul Feyerabend gikk lenger og benektet at det finnes én vitenskapelig metode. W.V.O. Quine trakk den motsatte konsekvensen: filosofien har ingen plass utenfor vitenskapen. Richard Rorty og Hilary Putnam tok pragmatismen opp igjen og spurte om ideen om et nøytralt ståsted i det hele tatt gir mening.
          `,
        },
      },
    },
    main: {
      "Naturfilosofene": epoke("ca. 600–430 f.Kr.", -600, -430, `
        Filosofene i Milet og Efesos regnes som de første i vestlig filosofi fordi de forklarte naturen ut fra naturen selv. De lette etter en *arkhe*, et opphav eller grunnprinsipp som alt kan føres tilbake til: vann hos Thales, det grenseløse hos Anaximander, luft hos Anaximenes. Heraklit satte motsetningene og forandringen i sentrum og lot en *logos* holde dem sammen.

        Vi kjenner dem nesten bare gjennom fragmenter og referater hos senere forfattere, særlig Aristoteles, som leste dem som forløpere for sin egen årsakslære. Det gjør det vanskelig å vite hva de faktisk mente. Det nye var likevel ikke svarene, men at svarene kom med begrunnelser som andre kunne kritisere.
      `, `
        Greske bystater langs kysten av Lilleasia, med handel over hele Middelhavet og kontakt med Egypt og Babylon. Perserne tok kontroll over Jonia på 540-tallet f.Kr., og Milet ble ødelagt i 494 f.Kr. etter det joniske opprøret.
      `, `
        Geometri og astronomi kom til Hellas fra Egypt og Babylon. Fordi det ikke fantes noe presteskap som forvaltet en hellig lære, kunne ideer diskuteres fritt. Lærdommen ble overlevert muntlig og i korte prosaskrifter, som nesten alle er tapt.
      `, [PRE, iep("https://iep.utm.edu/thales/")]),

      "Atomistene": epoke("ca. 450–370 f.Kr.", -450, -370, `
        Atomismen er et svar på Parmenides, som hadde hevdet at forandring er umulig fordi det som ikke er, ikke kan være. Leukipp og Demokrit godtok at det værende ikke kan oppstå eller forgå, men delte det i utallige udelelige legemer, *atomer*, som beveger seg i tomrommet. Forskjeller i form, stilling og rekkefølge forklarer alt annet.

        Læren er det nærmeste antikken kom en rent mekanisk naturforklaring. Farge og smak finnes bare «etter konvensjon», mens atomene og tomrommet finnes i virkeligheten. Skillet ligner det senere skillet mellom primære og sekundære egenskaper. Aristoteles avviste atomismen, men Epikur tok den opp, og via Lukrets nådde den 1600-tallets naturfilosofer.
      `, `
        Athen på høyden av sin makt under Perikles, og Peloponneserkrigen (431–404 f.Kr.). Abdera i Trakia, der Demokrit hørte hjemme, var en gresk koloni på handelsruten nordover.
      `, `
        Bevegelse, tall og sansing ble forklart som del av samme naturorden. Demokrit skrev om alt fra etikk til musikk, men bare fragmenter er bevart. Medisinen hos Hippokrates viste samme vilje til naturlige forklaringer.
      `, [ATOM, sep("https://plato.stanford.edu/entries/democritus/")]),

      "Aristotelismen": epoke("335 f.Kr.–", -335, null, `
        Aristoteles forlot Platons akademi og grunnla sin egen skole i Lykeion i Athen. Der ble filosofi drevet som systematisk forskning: samlinger av dyr, planter og statsforfatninger, og logikk som redskap for all kunnskap. Mot Platon hevdet han at formen finnes i tingene, ikke i en egen verden. Naturen forklares ved fire slags årsaker, der formålet er sentralt.

        Tradisjonen levde videre gjennom kommentarene, først hos Alexander av Afrodisias og deretter hos islamske, jødiske og kristne lesere. Med oversettelsene til latin på 1100- og 1200-tallet ble Aristoteles selve Filosofen i middelalderens universiteter. Hans fysikk falt på 1600-tallet, men logikken holdt til Frege, og etikken er i live igjen.
      `, `
        Makedonia tok over som stormakt under Filip 2. og Aleksander den store, og den frie bystaten mistet sin selvstendighet. Etter Aleksanders død i 323 f.Kr. måtte Aristoteles forlate Athen fordi han var knyttet til Makedonia.
      `, `
        Lykeion hadde et stort bibliotek og delte kunnskap inn i teoretiske, praktiske og skapende vitenskaper. Biologi, politikk og logikk ble egne fagfelt. Theofrast videreførte arbeidet med plantene.
      `, [sep("https://plato.stanford.edu/entries/aristotle/"), sep("https://plato.stanford.edu/entries/aristotle-commentators/")]),

      "Den nye vitenskapen": epoke("1543–1687", 1543, 1687, `
        Mellom Kopernikus' bok om himmellegemene (1543) og Newtons «Principia» (1687) ble det aristoteliske verdensbildet erstattet. Naturen ble en maskin av materie i bevegelse, styrt av lover som kan skrives matematisk. Formålsforklaringene mistet sin plass, og sanseegenskaper som farge ble regnet som virkninger i oss.

        Endringen var også filosofisk. Francis Bacon ville bygge vitenskapen på systematisk innsamling og prøving, Galileo Galilei på eksperiment og matematikk, og Robert Boyle forsvarte en korpuskulær materieteori. Forholdet mellom teori, erfaring og matematikk ble selve striden i tiden, og den preger både empirismen og rasjonalismen. Historikere diskuterer i dag om «revolusjon» er riktig ord, siden endringen var langsom og uten skarpe grenser, og siden alkymi og teologi var del av den.
      `, `
        Reformasjon, religionskriger og Trettiårskrigen (1618–1648) svekket de gamle autoritetene. Handel over havene og nye instrumenter ga praktisk interesse for navigasjon, mekanikk og kart.
      `, `
        Boktrykk, teleskop, mikroskop og luftpumpe endret hva som kunne vites. Vitenskapelige selskaper og tidsskrifter vokste fram utenfor universitetene, som Royal Society i London (1660) og Académie des sciences i Paris (1666).
      `, [SR, sep("https://plato.stanford.edu/entries/galileo/"), sep("https://plato.stanford.edu/entries/newton-principia/")]),

      "Britisk empirisme": epoke("1689–1776", 1689, 1776, `
        Empirismen hevder at alle ideer og all kunnskap om verden kommer fra erfaringen. John Locke angrep læren om medfødte ideer: sinnet er et ubeskrevet ark, *tabula rasa*. George Berkeley trakk konsekvensen at vi aldri møter annet enn ideer, og at å være er å bli sansett. David Hume ga tradisjonen dens skarpeste form ved å vise at verken årsakssammenheng, induksjon eller et varig selv lar seg begrunne fra erfaringen.

        Den vanlige fortellingen om empirister mot rasjonalister er en senere konstruksjon, og skillet er mindre rent enn lærebøkene antyder. Locke godtok for eksempel en demonstrativ moral. Men spørsmålet om hvor kunnskapens grense går, ble avgjørende for Kant, og Humes problem med induksjonen er fortsatt ikke løst.
      `, `
        Den glorverdige revolusjonen i England (1688) ga parlamentet makten, med toleranse for de fleste protestanter. Skottland ble del av Storbritannia i 1707, og den skotske opplysningen vokste fram i Edinburgh og Glasgow.
      `, `
        Newtons fysikk var kunnskapsidealet: Locke kalte seg en underarbeider som ryddet grunnen for de store vitenskapsmennene, og Hume ville skrive en vitenskap om mennesket. Royal Society og kaffehusene spredte lærdommen utenfor universitetene.
      `, [RE, sep("https://plato.stanford.edu/entries/locke/"), sep("https://plato.stanford.edu/entries/hume/")]),

      "Positivismen": epoke("ca. 1830–1900", 1830, 1900, `
        Positivismen vil bygge all kunnskap på det som kan observeres, og oppgi spørsmål om skjulte vesener og endelige årsaker. Auguste Comte så historien som tre stadier, det teologiske, det metafysiske og det positive, og ville krone vitenskapene med en ny samfunnsvitenskap, sosiologien. John Stuart Mill bygde en logikk der også matematikk og slutninger hviler på erfaring.

        Ernst Mach førte tanken inn i fysikken: vitenskapens lover er økonomiske sammenfatninger av sanseinntrykk, og begreper som absolutt rom hører ikke hjemme der. Dette inspirerte unge Einstein og senere Wienerkretsen. Motstanden kom raskt, fra nykantianere, fra Husserls fenomenologi og fra dem som mente at åndsvitenskapene krever en egen metode.
      `, `
        Industrialisering, jernbane og raskt voksende byer. Etter revolusjonene i Frankrike lette mange etter et grunnlag for samfunnet som verken var kirke eller konge, og Comte ville gi det i vitenskapen.
      `, `
        Termodynamikk, Darwins evolusjonslære (1859) og den fremvoksende statistikken ga vitenskapen enorm autoritet. Samfunnsfagene ble egne fag, og det tyske forskningsuniversitetet ble et forbilde.
      `, [sep("https://plato.stanford.edu/entries/comte/"), sep("https://plato.stanford.edu/entries/mill/"), sep("https://plato.stanford.edu/entries/ernst-mach/")]),

      "Pragmatismen": epoke("1878–ca. 1950", 1878, 1950, `
        Pragmatismen er den første store filosofiske bevegelsen fra USA. Charles S. Peirce foreslo at meningen i et begrep er de praktiske følgene det har, og at sannhet er det undersøkelsen ville ende opp i. William James gjorde metoden kjent og brukte den på religion og sannhet: en tanke er sann i den grad den fungerer i livet. Det ga ham kritikk for relativisme, og Peirce tok avstand ved å kalle sin versjon pragmatisisme.

        John Dewey forente tradisjonen med Darwin og Hegel. Mennesket er en organisme som møter problemer i omgivelsene, og tenkning er redskap for å løse dem. Tradisjonens skille mellom teori og praksis faller dermed bort, og demokrati og oppdragelse blir filosofiske tema. Etter 1945 ble pragmatismen fortrengt av analytisk filosofi, men den kom tilbake.
      `, `
        USA etter borgerkrigen (1861–1865): rask industrialisering, massiv innvandring og voksende storbyer. Tiltroen til reform preget den progressive tidsalderen rundt 1900.
      `, `
        Darwins evolusjonslære var utgangspunktet for tenkningen. Den nye eksperimentelle psykologien, sannsynlighetsteori og det moderne amerikanske forskningsuniversitetet, med Johns Hopkins, Harvard og Chicago, ga miljøene.
      `, [PRAG, sep("https://plato.stanford.edu/entries/peirce/"), sep("https://plato.stanford.edu/entries/dewey/")]),

      "Vitenskapsfilosofien": epoke("1934–1980-tallet", 1934, 1989, `
        Vitenskapsfilosofien spør hva som skiller vitenskap fra annet, og hvordan teorier skifter. Karl Popper svarte med falsifikasjon: en teori er vitenskapelig hvis den kan motbevises, og vitenskapen går fram ved dristige hypoteser og harde prøver. Thomas Kuhn skrev historien annerledes. Normalvitenskap arbeider innenfor et paradigme, og skifter av paradigme ligner omvendelser mer enn logiske beviser.

        Imre Lakatos ville forene de to med sine forskningsprogrammer, mens Paul Feyerabend hevdet at ingen metoderegel holder i alle tilfeller. Debatten flyttet interessen fra vitenskapens logikk til dens historie og praksis, og førte fram til dagens vitenskapssosiologi og realismedebatt.
      `, `
        Atombomben, den kalde krigen og romkappløpet gjorde vitenskap til politikk. Popper og Lakatos var flyktninger fra henholdsvis nazismen og kommunismen, og Poppers forsvar for det åpne samfunnet vokste ut av samme erfaring.
      `, `
        Einsteins relativitetsteori og kvantemekanikken var de store eksemplene: tilsynelatende sikker kunnskap, Newtons fysikk, hadde vist seg å måtte erstattes. Etterkrigstidens store forskningsprogrammer reiste nye spørsmål om hvordan vitenskap faktisk drives.
      `, [sep("https://plato.stanford.edu/entries/popper/"), sep("https://plato.stanford.edu/entries/thomas-kuhn/"), sep("https://plato.stanford.edu/entries/feyerabend/")]),

      "Naturalismen": epoke("ca. 1969–", 1969, null, `
        Naturalismen hevder at filosofien ikke har noe eget ståsted utenfor vitenskapene. W.V.O. Quine angrep skillet mellom analytiske og syntetiske sannheter og ville gjøre erkjennelsesteori til en gren av psykologien: vi skal ikke begrunne vitenskapen utenfra, men undersøke hvordan mennesker faktisk kommer fram til den. Våre oppfatninger møter erfaringen som en helhet, og ingen av dem er immune mot revisjon.

        Paul Churchland og Patricia Churchland førte tanken inn i sinnsfilosofien. Hverdagens snakk om oppfatninger og ønsker er en teori som nevrovitenskapen kan komme til å avløse. Kritikerne svarer at normative spørsmål, om hva vi *bør* tro, ikke lar seg redusere til spørsmål om hva vi faktisk gjør.
      `, `
        Etterkrigstidens amerikanske universiteter vokste kraftig, med tette bånd mellom filosofi, psykologi og datavitenskap. Opptaket av emigranter fra Wienerkretsen hadde gjort USA til sentrum for analytisk filosofi.
      `, `
        Kognitiv psykologi, lingvistikk og senere hjerneavbildning gjorde sinnet til et empirisk forskningsfelt. Teorier fra evolusjonsbiologien ble også tatt i bruk på spørsmål om kunnskap og moral.
      `, [NAT, sep("https://plato.stanford.edu/entries/quine/"), sep("https://plato.stanford.edu/entries/materialism-eliminative/")]),

      "Nypragmatismen": epoke("ca. 1979–", 1979, null, `
        Med «Philosophy and the Mirror of Nature» (1979) gjenopplivet Richard Rorty pragmatismen som kritikk av hele den erkjennelsesteoretiske tradisjonen. Ideen om sinnet som et speil av naturen, og om filosofien som domstol over kunnskapen, burde oppgis. Sannhet er det samtalepartnerne våre lar oss slippe unna med, sa han provoserende, og filosofien bør bli en stemme i samtalen.

        Hilary Putnam delte kritikken av et gudsperspektiv, men holdt fast på at vi kan ta feil på måter som går utover enighet. Cornel West knyttet tradisjonen til svart profetisk kristendom og politisk kamp. Felles er troen på at filosofien må svare for hva den gjør i menneskers liv.
      `, `
        Slutten av den kalde krigen, multikulturalismedebatter og kulturkampene i amerikanske universiteter. Rorty argumenterte for en liberal, ironisk offentlighet uten filosofisk grunnlag.
      `, `
        Analytisk filosofi møtte kontinental tenkning og ble mindre selvsikker. Kuhn, sen Wittgenstein og Quine hadde svekket idealet om et nøytralt grunnlag. Interessen for Dewey og James kom tilbake.
      `, [PRAG, sep("https://plato.stanford.edu/entries/rorty/"), snl("https://snl.no/Hilary_Putnam")]),
    },
  },

  edgeDescriptions: {
    naturfilosofene__atomistene: strek(`Spørsmålet om hva naturen består av gikk i arv fra Milet, men svaret ble nytt: ikke ett urstoff, men utallige små legemer.`),
    eleatene__atomistene: strek(`Atomene er Parmenides' uforanderlige væren delt opp i småbiter. Slik kunne atomistene godta argumentet hans og likevel forklare forandring.`),
    platonismen__aristotelismen: strek(`Aristoteles var Platons elev i tjue år. Han beholdt spørsmålet om form og allmennhet, men plasserte formen i tingene selv.`),
    naturfilosofene__aristotelismen: strek(`Aristoteles leste naturfilosofene som forløpere som hadde funnet noen av årsakene, men ikke alle. Mye av det vi vet om dem, kommer fra ham.`),
    atomistene__nyvitenskap: strek(`Da Lukrets ble lest igjen og Pierre Gassendi forsvarte Epikur, kom atomismen tilbake som korpuskulær naturfilosofi hos blant andre Robert Boyle.`),
    senskolastikken__nyvitenskap: strek(`Nominalistene i Paris og Oxford kritiserte Aristoteles' fysikk på 1300-tallet, med ideer om bevegelse og impetus som senere ble tatt videre. Hvor mye dette betydde for Galilei, er omstridt.`),
    aristotelismen__nyvitenskap: strek(`Den nye vitenskapen definerte seg mot skolenes Aristoteles: naturen skulle ikke forklares med formål og former, men med materie, bevegelse og matematikk.`),
    nyvitenskap__empirismen: strek(`John Locke så seg selv som arbeider i Newtons og Boyles tjeneste. Empirismen er langt på vei den nye vitenskapens selvforståelse skrevet ut som filosofi.`),
    rasjonalismen__empirismen: strek(`Lockes angrep på medfødte ideer retter seg blant annet mot kartesianerne. Lockes «Essay» fikk senere et kritisk motsvar fra G.W. Leibniz i «Nouveaux essais».`),
    empirismen__positivismen: strek(`Positivistene arvet empirismens krav om at kunnskap må stamme fra erfaring, og gjorde det til et program for alle vitenskaper og for samfunnet.`),
    empirismen__pragmatismen: strek(`William James kalte pragmatismen et nytt navn på gamle tenkemåter og viste særlig til den britiske empirismen. Men pragmatistene så erfaring som handling, ikke som passive inntrykk.`),
    kantianismen__pragmatismen: strek(`Charles S. Peirce begynte med Kant og tok ordet «pragmatisch» fra ham. Også kategorilæren hans er utviklet i dialog med Kant.`),
    empirismen__vitenskapsfilosofi: strek(`Karl Popper tok utgangspunkt i Humes problem med induksjonen og godtok at det ikke kan løses. Hans løsning var å gi opp induksjon som vitenskapens metode.`),
    logpositivisme__vitenskapsfilosofi: strek(`Popper angrep verifikasjonskriteriet, og Kuhn og Feyerabend viste at historien ikke passet i Wienerkretsens logiske rekonstruksjon. Kuhns bok kom ironisk nok ut i leksikonserien Wienerkretsen selv hadde startet.`),
    logpositivisme__naturalismen: strek(`W.V.O. Quine var Rudolf Carnaps elev og venn. Naturalismen vokste fram som hans indre kritikk av den logiske empirismen, særlig skillet mellom analytisk og syntetisk.`),
    pragmatismen__naturalismen: strek(`Quine avsluttet angrepet på empirismens dogmer med å kalle seg en mer gjennomført pragmatist. Deweys blikk på kunnskap som naturlig prosess peker fram mot ham.`),
    pragmatismen__nypragmatismen: strek(`Richard Rorty regnet Dewey blant århundrets tre viktigste filosofer, sammen med sen Wittgenstein og Heidegger, og gjorde tradisjonen aktuell igjen.`),
    dagligspraak__nypragmatismen: strek(`Rorty kom fra analytisk filosofi og redigerte antologien «The Linguistic Turn» (1967). Sen Wittgenstein og oppgjøret med ideen om språket som speil bar kritikken hans.`),
  },

  artists: [
    // --- Naturfilosofene ---
    f("Thales", [null, null], "mann", ["Metafysikk"], ["Naturfilosofene"], ["Arkhe"], [-600, -546], "Milet", `
      Gresk tenker fra Milet, av Aristoteles regnet som den første naturfilosofen. Han skal ha hevdet at alt har sitt opphav i vann, og ifølge Herodot forutsa han en solformørkelse, trolig den i 585 f.Kr. Thales skrev trolig ingenting selv, så alt vi vet, kommer fra senere forfattere, og mye av det er anekdoter. Betydningen hans ligger i måten å spørre på: et naturlig prinsipp i stedet for gudene.
    `, [], [iep("https://iep.utm.edu/thales/"), PRE]),
    f("Anaximander", [null, null], "mann", ["Metafysikk"], ["Naturfilosofene"], ["Arkhe"], [-580, -546], "Milet", `
      Gresk naturfilosof fra Milet som skrev den første filosofiske prosateksten vi kjenner til. Opphavet er ikke et bestemt stoff, men det grenseløse, *apeiron*, der motsetninger oppstår og går til grunne etter tidens orden. Han tegnet også et kart over verden og forklarte hvordan jorden svever fritt uten å hvile på noe. Ett fragment er bevart, og det regnes som det eldste av gresk filosofi.
    `, [["Om naturen"]], [iep("https://iep.utm.edu/anaximander/"), PRE]),
    f("Anaximenes", [null, null], "mann", ["Metafysikk"], ["Naturfilosofene"], ["Arkhe"], [-560, -525], "Milet", `
      Gresk naturfilosof fra Milet, yngre samtidig med Anaximander. Han gjorde luften til grunnstoffet og forklarte de andre stoffene som fortynning og fortetning av den. Dermed viste han hvordan kvalitative forskjeller kan føres tilbake til en kvantitativ prosess, en tankegang med lang etterklang i naturfilosofien.
    `, [], [PRE, snl("https://snl.no/Anaximenes")]),
    f("Heraklit", [null, null], "mann", ["Metafysikk"], ["Naturfilosofene"], ["Logos", "Dialektikk"], [-500, -475], "Efesos", `
      Gresk filosof fra Efesos, kjent i antikken som «den dunkle» for sine gåtefulle setninger. Verden er en stadig strid mellom motsetninger som holdes sammen av en felles orden, *logos*, og ilden er dens bilde. Den kjente formuleringen om at man ikke kan stige ned i samme elv to ganger, er en senere parafrase av Platon. Stoikerne og Hegel leste ham som en forløper.
    `, [], [sep("https://plato.stanford.edu/entries/heraclitus/")]),

    // --- Atomistene ---
    f("Leukipp", [null, null], "mann", ["Metafysikk"], ["Atomistene"], [], [-450, -420], "Milet og Abdera", `
      Gresk filosof fra 400-tallet f.Kr., av Aristoteles regnet som atomismens grunnlegger. Nesten alt om livet hans er ukjent, og Epikur skal til og med ha tvilt på at han fantes. Det ene fragmentet vi har, sier at ingenting skjer tilfeldig, men alt av nødvendighet. Læren hans er ikke lett å skille fra Demokrits.
    `, [], [sep("https://plato.stanford.edu/entries/leucippus/"), ATOM]),
    f("Demokrit", [-460, -370], "mann", ["Metafysikk", "Etikk"], ["Atomistene"], ["Kausalitet"], [-430, -370], "Abdera", `
      Gresk filosof fra Abdera som utviklet atomismen til et system. Bare atomer og tomrom finnes egentlig, mens farger og smaker er avhengige av oss. Skriftene hans dekket alt fra fysikk til musikk, men bare fragmenter er bevart, de fleste etiske: det gode livet er sinnsro, *euthymia*. Årstallene er omtrentlige. Demokrit ble kjent som «den leende filosofen», en sen legende.
    `, [], [sep("https://plato.stanford.edu/entries/democritus/"), ATOM]),

    // --- Aristotelismen ---
    f("Aristoteles", [-384, -322], "mann", ["Metafysikk", "Etikk"], ["Aristotelismen"], ["Substans", "Eudaimonia", "Dyd", "Kausalitet", "Det skjønne og det sublime"], [-367, -322], "Stageira og Athen", `
      Gresk filosof, elev av Platon i tjue år og lærer for Aleksander den store. I sin egen skole, Lykeion, skapte han et system som spenner fra logikk og biologi til politikk og poetikk. Tingene har form og stoff, og forklares ved fire årsaker. Det gode livet er *eudaimonia*, virksomhet i samsvar med dyd. Bevart er for det meste forelesningsnotater, ikke de utgitte verkene. Etter den latinske mottakelsen var han Filosofen for middelalderen.
    `, [["Metafysikken"], ["Fysikken"], ["Den nikomakiske etikk"], ["Politikken"], ["Organon"], ["Poetikken"]], [sep("https://plato.stanford.edu/entries/aristotle/"), snl("https://snl.no/Aristoteles")]),
    f("Theofrast", [-371, -287], "mann", ["Vitenskapsfilosofi", "Metafysikk"], ["Aristotelismen"], [], [-322, -287], "Eresos og Athen", `
      Gresk filosof, Aristoteles' venn og etterfølger som leder av Lykeion i over tretti år. Han regnes som botanikkens grunnlegger for sine studier av planter, og skrev dessuten om stein, sanser og logikk. En kort «Metafysikk» stiller kritiske spørsmål til læreren. Hans «Karakterer» er en liten bok med skisser av menneskelige typer, som lenge ble lest og etterlignet.
    `, [["Om plantene"], ["Karakterer"]], [iep("https://iep.utm.edu/theophrastus/"), snl("https://snl.no/Theofrastos")]),
    f("Alexander av Afrodisias", [null, null], "mann", ["Metafysikk"], ["Aristotelismen"], ["Fri vilje"], [198, 209], "Afrodisias og Athen", `
      Gresk filosof fra rundt år 200, den mest kjente av de antikke kommentatorene til Aristoteles. Han fikk en offentlig stilling i aristotelisk filosofi fra keiserne Septimius Severus og Caracalla. Kommentarene hans ble lest av både islamske og latinske filosofer. I «Om skjebnen» forsvarer han menneskets frihet mot den stoiske determinismen.
    `, [["Om skjebnen"]], [sep("https://plato.stanford.edu/entries/alexander-aphrodisias/")]),

    // --- Den nye vitenskapen ---
    f("Nikolaus Kopernikus", [1473, 1543], "mann", ["Vitenskapsfilosofi"], ["Den nye vitenskapen"], ["Paradigme"], [1510, 1543], "Frombork i Polen", `
      Polsk astronom og kannik som satte solen i sentrum av universet og lot jorden bevege seg. Boken kom ut samme år som han døde, med et forord av Andreas Osiander som framstilte teorien som et regneredskap. Det egentlige bruddet kom først med Galilei og Kepler. Thomas Kuhn brukte senere overgangen som et hovedeksempel på et paradigmeskifte.
    `, [["De revolutionibus orbium coelestium", 1543]], [sep("https://plato.stanford.edu/entries/copernicus/")]),
    f("Galileo Galilei", [1564, 1642], "mann", ["Vitenskapsfilosofi"], ["Den nye vitenskapen"], ["Paradigme"], [1590, 1642], "Pisa, Padova og Firenze", `
      Italiensk naturfilosof, matematiker og astronom. Med teleskopet så han Jupiters måner og Venus' faser, og med forsøk og matematikk la han grunnen for den moderne fysikken. Naturens bok er skrevet på matematikkens språk, hevdet han i «Il Saggiatore». Inkvisisjonen dømte ham i 1633 for å forsvare Kopernikus, og han levde resten av livet i husarrest.
    `, [["Sidereus Nuncius", 1610], ["Il Saggiatore", 1623], ["Dialog om de to store verdenssystemene", 1632], ["Samtaler om to nye vitenskaper", 1638]], [sep("https://plato.stanford.edu/entries/galileo/")]),
    f("Francis Bacon", [1561, 1626], "mann", ["Vitenskapsfilosofi"], ["Den nye vitenskapen"], ["Induksjon"], [1597, 1626], "London", `
      Engelsk statsmann og filosof som skrev programmet for den eksperimentelle vitenskapen. Mot skolastikkens syllogismer satte han en metodisk induksjon, og han advarte mot idolene, de vanene som villeder tanken. Kunnskap skal gi mennesket makt over naturen, en tanke «Ny Atlantis» gjorde til utopi. Han var lordkansler før han ble avsatt for korrupsjon i 1621. Royal Society så ham som sitt forbilde.
    `, [["The Advancement of Learning", 1605], ["Novum Organum", 1620], ["New Atlantis", 1627]], [sep("https://plato.stanford.edu/entries/francis-bacon/")]),
    f("Robert Boyle", [1627, 1691], "mann", ["Vitenskapsfilosofi"], ["Den nye vitenskapen"], [], [1660, 1691], "Oxford og London", `
      Irskfødt naturfilosof og kjemiker, en av grunnleggerne av Royal Society. Med luftpumpen utførte han forsøkene bak den loven som bærer navnet hans, og han forsvarte en mekanisk korpuskulær filosofi mot Aristoteles' former. Han var dypt religiøs og så naturforskningen som gudstjeneste. Også stilen, med detaljerte forsøksrapporter, ble et forbilde for vitenskapelig skriving.
    `, [["The Sceptical Chymist", 1661], ["The Origin of Forms and Qualities", 1666]], [sep("https://plato.stanford.edu/entries/boyle/")]),
    f("Isaac Newton", [1642, 1727], "mann", ["Vitenskapsfilosofi", "Metafysikk"], ["Den nye vitenskapen"], ["Kausalitet", "Induksjon"], [1672, 1727], "Cambridge og London", `
      Engelsk naturfilosof og matematiker. «Principia» forente himmel og jord under tre bevegelseslover og gravitasjonen, og ble idealet for vitenskap i over to hundre år. Tyngdekraften kunne han beskrive, men ikke forklare, og han avviste å lage hypoteser om årsaken, noe som ble et filosofisk stridstema. Leibniz angrep hans syn på absolutt rom og tid. Newton var også opptatt av teologi og alkymi.
    `, [["Philosophiae Naturalis Principia Mathematica", 1687], ["Opticks", 1704]], [sep("https://plato.stanford.edu/entries/newton/")]),

    // --- Britisk empirisme ---
    f("John Locke", [1632, 1704], "mann", ["Erkjennelsesteori", "Politisk filosofi"], ["Britisk empirisme", "Kontraktsteoriene"], ["Erfaring", "Samfunnskontrakten", "Naturrett", "Frihet"], [1671, 1704], "Oxford, Nederland og London", `
      Engelsk filosof og lege, grunnleggeren av den britiske empirismen. Sinnet er ved fødselen et ubeskrevet ark, og alle ideer kommer fra sansning og refleksjon. Hans «Two Treatises» begrunner regjeringsmakt i folkets samtykke og forsvarer retten til liv, frihet og eiendom, og ble lest som et forsvar for revolusjonen i 1688. Også toleransebrevet fikk stor betydning, selv om det holdt utenfor ateister og katolikker. Han hadde selv økonomiske interesser i slavehandelen.
    `, [["An Essay Concerning Human Understanding", 1689], ["Two Treatises of Government", 1689], ["A Letter Concerning Toleration", 1689]], [sep("https://plato.stanford.edu/entries/locke/"), snl("https://snl.no/John_Locke")]),
    f("George Berkeley", [1685, 1753], "mann", ["Erkjennelsesteori", "Metafysikk"], ["Britisk empirisme"], ["Erfaring", "Substans"], [1709, 1753], "Dublin og Cloyne i Irland", `
      Irsk filosof og biskop. Å være er å bli oppfattet: *esse est percipi*. Materien som Locke og fysikerne regner med, er en ubegrunnet abstraksjon, for vi møter aldri annet enn ideer. Tingene finnes likevel, fordi de hele tiden er oppfattet av Gud. Læren ble lenge avvist som absurd, men argumentene har vist seg vanskelige å tilbakevise. Han skrev også en skarp kritikk av Newtons infinitesimalregning.
    `, [["A Treatise Concerning the Principles of Human Knowledge", 1710], ["Three Dialogues between Hylas and Philonous", 1713]], [sep("https://plato.stanford.edu/entries/berkeley/")]),
    f("David Hume", [1711, 1776], "mann", ["Erkjennelsesteori", "Etikk"], ["Britisk empirisme", "Moralsansfilosofien", "Deismen"], ["Kausalitet", "Induksjon", "Moralsk sans", "Erfaring", "Tvil"], [1739, 1776], "Edinburgh", `
      Skotsk filosof og historiker, ofte regnet som den viktigste filosofen som har skrevet på engelsk. Årsakssammenheng er ingen nødvendighet vi kan se, bare en vane av tankene, og induksjon kan ikke begrunnes uten å forutsette seg selv. Moral bygger på følelse, ikke fornuft, og av hva som *er*, følger ikke hva som *bør* være. Han fikk aldri professorat, trolig på grunn av tvil om religionen, og var i levetiden mest kjent for sin Englands historie.
    `, [["A Treatise of Human Nature", 1739], ["An Enquiry Concerning Human Understanding", 1748], ["An Enquiry Concerning the Principles of Morals", 1751], ["Dialogues Concerning Natural Religion", 1779]], [sep("https://plato.stanford.edu/entries/hume/"), snl("https://snl.no/David_Hume")]),

    // --- Positivismen ---
    f("Auguste Comte", [1798, 1857], "mann", ["Vitenskapsfilosofi", "Politisk filosofi"], ["Positivismen"], [], [1830, 1857], "Paris", `
      Fransk filosof, opphav til ordene positivisme og sosiologi. Menneskeheten går gjennom tre stadier, det teologiske, det metafysiske og det positive, og vitenskapene kan ordnes etter hvor nær de står sitt modne stadium. Det siste trinnet er vitenskapen om samfunnet. Sent i livet grunnla han en «menneskehetens religion» med egen kalender, noe som fjernet tilhengere som John Stuart Mill.
    `, [["Cours de philosophie positive", 1830], ["Système de politique positive", 1851]], [sep("https://plato.stanford.edu/entries/comte/")]),
    f("John Stuart Mill", [1806, 1873], "mann", ["Etikk", "Politisk filosofi"], ["Positivismen", "Utilitarismen", "Liberalismen"], ["Nytteprinsippet", "Frihet", "Induksjon", "Kjønn"], [1843, 1873], "London", `
      Engelsk filosof og politiker, oppdratt av faren James Mill til å bli utilitarismens arving. Han skilte mellom høyere og lavere nytelser, og hevdet at staten bare kan gripe inn i et menneskes liv for å hindre skade på andre. «On Liberty» og «The Subjection of Women» ble tidlige klassikere for liberalisme og feminisme, begge formet i samtale med Harriet Taylor Mill. Hans logikk er den mest omfattende empiristiske framstillingen av induksjon.
    `, [["A System of Logic", 1843], ["On Liberty", 1859], ["Utilitarianism", 1861], ["The Subjection of Women", 1869]], [sep("https://plato.stanford.edu/entries/mill/"), snl("https://snl.no/John_Stuart_Mill")]),
    f("Ernst Mach", [1838, 1916], "mann", ["Vitenskapsfilosofi"], ["Positivismen"], ["Erfaring"], [1883, 1916], "Praha og Wien", `
      Østerriksk fysiker og filosof. All kunnskap er økonomisk ordning av sanseinntrykk, og begreper som absolutt rom og tid hører ikke hjemme i fysikken. Han påvirket unge Einstein, og lærestolen hans i Wien ble senere overtatt av Moritz Schlick. Foreningen rundt Wienerkretsen het Verein Ernst Mach. Han avviste lenge atomene som reelle. Machtallet for lydhastighet bærer navnet hans.
    `, [["Die Mechanik in ihrer Entwickelung", 1883], ["Die Analyse der Empfindungen", 1886]], [sep("https://plato.stanford.edu/entries/ernst-mach/")]),

    // --- Pragmatismen ---
    f("Charles S. Peirce", [1839, 1914], "mann", ["Logikk og språk", "Erkjennelsesteori"], ["Pragmatismen"], ["Sannhet"], [1868, 1914], "Cambridge i Massachusetts og Milford", `
      Amerikansk filosof, logiker og naturforsker, pragmatismens grunnlegger. Begrepers mening ligger i de praktiske følgene av dem, og sannhet er det undersøkere til slutt ville enes om. Han utviklet logikken uavhengig av Frege, tegnlæren semiotikken og begrepet *abduksjon*, slutningen til beste forklaring. Han mistet stillingen sin ved Johns Hopkins, levde i fattigdom, og mye av verket ble ikke kjent før etter hans død.
    `, [["How to Make Our Ideas Clear", 1878], ["The Fixation of Belief", 1877]], [sep("https://plato.stanford.edu/entries/peirce/")]),
    f("William James", [1842, 1910], "mann", ["Erkjennelsesteori", "Religionsfilosofi"], ["Pragmatismen"], ["Sannhet", "Fri vilje", "Erfaring"], [1878, 1910], "Harvard", `
      Amerikansk filosof og psykolog, bror av forfatteren Henry James. Han gjorde pragmatismen kjent: en idé er sann i den grad den fungerer i livet vårt. «The Principles of Psychology» grunnla moderne psykologi i USA, med tanken om bevissthetsstrømmen. Han forsvarte retten til å tro der bevis ikke kan avgjøre, og studerte religiøs erfaring uten fordommer. Han hadde selv perioder med dyp depresjon.
    `, [["The Principles of Psychology", 1890], ["The Varieties of Religious Experience", 1902], ["Pragmatism", 1907]], [sep("https://plato.stanford.edu/entries/james/")]),
    f("John Dewey", [1859, 1952], "mann", ["Erkjennelsesteori", "Politisk filosofi"], ["Pragmatismen"], ["Erfaring", "Sannhet"], [1896, 1952], "Chicago og New York", `
      Amerikansk filosof, pedagog og samfunnsdebattant, den mest innflytelsesrike av pragmatistene. Mennesket er en organisme som handler i sine omgivelser, og tenkning er et redskap for å løse problemer. Han oppga skillet mellom kunnskap og handling og så demokrati som en levemåte, ikke bare en styreform. Han grunnla en forsøksskole i Chicago og ledet kommisjonen som frikjente Trotskij i Moskvaprosessene.
    `, [["Democracy and Education", 1916], ["Experience and Nature", 1925], ["Art as Experience", 1934], ["Logic: The Theory of Inquiry", 1938]], [sep("https://plato.stanford.edu/entries/dewey/")]),

    // --- Vitenskapsfilosofien ---
    f("Karl Popper", [1902, 1994], "mann", ["Vitenskapsfilosofi", "Politisk filosofi"], ["Vitenskapsfilosofien"], ["Falsifikasjon", "Induksjon"], [1934, 1994], "Wien, Christchurch og London", `
      Østerriksk-britisk filosof som flyktet fra Wien i 1937 og senere ble professor ved London School of Economics. Vitenskap skiller seg ikke fra annet ved å kunne bekreftes, men ved å kunne motbevises, og den går fram ved dristige gjetninger og strenge prøver. Med samme grep gikk han i «The Open Society» løs på Platon, Hegel og Marx som fiender av det åpne samfunnet.
    `, [["Logik der Forschung", 1934], ["The Open Society and Its Enemies", 1945], ["Conjectures and Refutations", 1963]], [sep("https://plato.stanford.edu/entries/popper/")]),
    f("Thomas Kuhn", [1922, 1996], "mann", ["Vitenskapsfilosofi"], ["Vitenskapsfilosofien"], ["Paradigme"], [1957, 1996], "Harvard, Berkeley, Princeton og MIT", `
      Amerikansk vitenskapshistoriker og filosof. «The Structure of Scientific Revolutions» beskrev normalvitenskap innenfor et *paradigme*, kriser og revolusjoner der gamle og nye teorier knapt lar seg sammenligne. Boken er en av de mest siterte fra 1900-tallet, og ga ordet paradigme vid utbredelse. Kuhn mente selv at han ble lest for relativistisk og forsvarte at vitenskapen likevel gjør framskritt.
    `, [["The Copernican Revolution", 1957], ["The Structure of Scientific Revolutions", 1962]], [sep("https://plato.stanford.edu/entries/thomas-kuhn/")]),
    f("Imre Lakatos", [1922, 1974], "mann", ["Vitenskapsfilosofi"], ["Vitenskapsfilosofien"], ["Falsifikasjon"], [1956, 1974], "Budapest og London", `
      Ungarsk filosof som flyktet etter oppstanden i 1956 og kom til London School of Economics. Han ville forene Popper og Kuhn: det er ikke enkeltteorier som vurderes, men hele *forskningsprogrammer* som enten gir nye forutsigelser eller går i forfall. I «Proofs and Refutations» viste han at også matematikken har en historie av motbevis. Hans egen rolle under stalinismen i Ungarn er omstridt.
    `, [["Falsification and the Methodology of Scientific Research Programmes", 1970], ["Proofs and Refutations", 1976]], [sep("https://plato.stanford.edu/entries/lakatos/")]),
    f("Paul Feyerabend", [1924, 1994], "mann", ["Vitenskapsfilosofi"], ["Vitenskapsfilosofien"], [], [1960, 1994], "Wien, Berkeley og Zürich", `
      Østerriksk filosof, først påvirket av Popper og deretter hans skarpeste kritiker. «Against Method» hevder at historiens store gjennombrudd skjedde fordi noen brøt alle regler, og at «alt går» er det eneste prinsippet som overlever. Han ville verne samfunnet mot vitenskapen som ny kirke. Det gjorde ham til en av fagets mest provoserende skikkelser. Han ble såret som soldat på østfronten.
    `, [["Against Method", 1975], ["Science in a Free Society", 1978]], [sep("https://plato.stanford.edu/entries/feyerabend/")]),

    // --- Naturalismen ---
    f("W.V.O. Quine", [1908, 2000], "mann", ["Logikk og språk", "Erkjennelsesteori"], ["Naturalismen", "Analytisk metafysikk"], ["Mening og referanse", "Erfaring"], [1951, 2000], "Harvard", `
      Amerikansk filosof og logiker, en av de mest innflytelsesrike analytiske filosofene etter krigen. «Two Dogmas of Empiricism» angrep skillet mellom analytisk og syntetisk: våre oppfatninger møter erfaringen som en helhet. Han gjorde erkjennelsesteorien til en del av den naturvitenskapelige psykologien, og argumenterte for at oversettelse alltid er ubestemt. Spørsmålet om hva som finnes, avgjøres av hva de beste teoriene våre må regne med.
    `, [["Two Dogmas of Empiricism", 1951], ["Word and Object", 1960], ["Epistemology Naturalized", 1969]], [sep("https://plato.stanford.edu/entries/quine/")]),
    f("Patricia Churchland", [1943, null], "kvinne", ["Vitenskapsfilosofi"], ["Naturalismen"], ["Bevissthet", "Kropp og sjel"], [1986, null], "San Diego", `
      Kanadisk-amerikansk filosof som har gjort nevrovitenskap til grunnlag for sinnsfilosofien. «Neurophilosophy» hevder at problemene om bevissthet, frihet og selvet må løses sammen med hjerneforskningen, ikke på forhånd. Senere har hun skrevet om moralens biologiske røtter i omsorg og i hormoner som oxytocin. Hun er gift med Paul Churchland, og de to har ofte arbeidet sammen.
    `, [["Neurophilosophy", 1986], ["Braintrust", 2011]], [sep("https://plato.stanford.edu/entries/materialism-eliminative/"), bok("Churchland, Patricia S. Neurophilosophy: Toward a Unified Science of the Mind-Brain. MIT Press, 1986.")]),
    f("Paul Churchland", [1942, null], "mann", ["Vitenskapsfilosofi"], ["Naturalismen"], ["Bevissthet", "Kropp og sjel"], [1979, null], "San Diego", `
      Kanadisk filosof, kjent for den *eliminative materialismen*. Hverdagspsykologi, med oppfatninger og ønsker, er en teori og kan vise seg like gal som læren om flogiston. Moden nevrovitenskap vil ikke redusere den, men avløse den. Mange har innvendt at teorien undergraver seg selv, for hva er den om ikke en oppfatning? Churchland har også utviklet nevrale nettverk som modell for kunnskap.
    `, [["Scientific Realism and the Plasticity of Mind", 1979], ["Eliminative Materialism and the Propositional Attitudes", 1981]], [sep("https://plato.stanford.edu/entries/materialism-eliminative/")]),

    // --- Nypragmatismen ---
    f("Richard Rorty", [1931, 2007], "mann", ["Erkjennelsesteori", "Politisk filosofi"], ["Nypragmatismen"], ["Sannhet"], [1979, 2007], "Princeton, Virginia og Stanford", `
      Amerikansk filosof som tok analytisk filosofi fra innsiden. «Philosophy and the Mirror of Nature» avviste ideen om sinnet som speil av verden og om filosofien som kunnskapens domstol. Han kalte seg en liberal ironiker: en som forsvarer sine verdier selv om de mangler et endelig grunnlag. Moralsk framskritt kommer mer fra romaner og solidaritet enn fra argumenter. Kritikere har kalt ham relativist, noe han selv avviste.
    `, [["Philosophy and the Mirror of Nature", 1979], ["Contingency, Irony, and Solidarity", 1989]], [sep("https://plato.stanford.edu/entries/rorty/")]),
    f("Hilary Putnam", [1926, 2016], "mann", ["Metafysikk", "Logikk og språk"], ["Nypragmatismen", "Sinnsfilosofien"], ["Mening og referanse", "Bevissthet", "Sannhet"], [1960, 2016], "Harvard", `
      Amerikansk filosof som skiftet mening så ofte at det ble en del av hans ry. Han lanserte *funksjonalismen* i sinnsfilosofien og siden kritiserte den. Tvillingjord-eksperimentet viste at mening ikke bare er i hodet. Senere avviste han metafysisk realisme til fordel for en pragmatisk realisme, påvirket av William James og Dewey. Han arbeidet også med matematisk logikk og bidro til løsningen av Hilberts tiende problem.
    `, [["The Meaning of 'Meaning'", 1975], ["Reason, Truth and History", 1981], ["The Collapse of the Fact/Value Dichotomy", 2002]], [snl("https://snl.no/Hilary_Putnam")]),
    f("Cornel West", [1953, null], "mann", ["Politisk filosofi", "Religionsfilosofi"], ["Nypragmatismen"], ["Frihet"], [1982, null], "Princeton, Harvard og New York", `
      Amerikansk filosof og samfunnsdebattant, en av USAs mest kjente offentlige intellektuelle. Han forener pragmatismen med svart profetisk kristendom og marxistisk samfunnskritikk. «The American Evasion of Philosophy» skriver pragmatismens historie som en tradisjon som vil ta tak i menneskers lidelse. «Race Matters» nådde et bredt publikum og gjorde ham til en sentral stemme i debatten om rase i USA.
    `, [["The American Evasion of Philosophy", 1989], ["Race Matters", 1993]], [snl("https://snl.no/Cornel_West")]),
  ],
};
