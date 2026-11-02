// Runde 3: Andre tradisjoner, som oppsummerer filosofi utenfor den vestlige linja (vedtak 2026-11-02). Skrevet av Opus 2026-11-02.
// Her står også noen kvinnelige filosofer i de andre retningene som ble lagt til etter runde 1 og 2.
import { sep, iep, snl, bok, filosof, epoke, strek } from "../kilder.mjs";

const R = "Andre tradisjoner";
const f = filosof(R);
const INDIA = snl("https://snl.no/indisk_filosofi");
const KINA = sep("https://plato.stanford.edu/entries/confucius/");
const ISLAM = sep("https://plato.stanford.edu/entries/arabic-islamic-influence/");
const BUDDHISME = sep("https://plato.stanford.edu/entries/japanese-zen/");
const KYOTO = sep("https://plato.stanford.edu/entries/kyoto-school/");
const AFRIKA = sep("https://plato.stanford.edu/entries/africana/");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Denne appen følger den vestlige filosofien, men den er ikke den eneste. Retningen gir en oppsummering av noen tradisjoner utenfor den vestlige hovedlinja: indisk, kinesisk, islamsk og arabisk, jødisk, buddhistisk i Øst-Asia, japansk og afrikansk filosofi. Hver av dem har sin egen lange historie, og en kort oppsummering kan ikke yte dem rettferdighet. Epokene her er derfor ikke ment som en fullstendig framstilling, men som innganger. Noen av dem, som islamsk og jødisk filosofi, er også en del av den vestlige historien, fordi Aristoteles kom til Europa gjennom dem. Andre møtte Vesten først i moderne tid.
          `,
          kilder: [INDIA, ISLAM, AFRIKA],
        },
        story: {
          body: `
            ### Mer enn én begynnelse
            Filosofen Karl Jaspers la merke til at rundt 500 f.Kr., nesten samtidig og uten kjent kontakt, begynte folk i Hellas, India og Kina å stille grunnleggende spørsmål om hvordan verden er og hvordan man bør leve. Han kalte dette aksetiden. Bildet er diskutert, men det minner om at filosofi ikke har én begynnelse.

            ### India
            I Upanishadene spør vismenn hva som er grunnen til alt, og svarer at selvet, *atman*, er ett med *brahman*, alltings kilde. Buddha avviste dette: det finnes ikke noe varig selv, og lidelsen springer ut av at vi klamrer oss fast. Nagarjuna gjorde tankene til en skarp logisk filosofi om tomhet, og Shankara ga Upanishadene deres mest kjente tolkning. Logikk, språkfilosofi og erkjennelsesteori utviklet seg her i like store systemer som i Vesten.

            ### Kina
            Konfutse lærte at samfunnet hviler på ritualer og menneskelighet. Laozi og Zhuangzi spurte om ikke veien, *dao*, er noe vi forstyrrer med våre påfunn. Mengzi hevdet at mennesket av natur er godt, og hundre år senere hevdet Xunzi det motsatte. Da buddhismen kom fra India, måtte den oversettes også i tankene. Zhu Xi forente det hele på 1100-tallet i en nykonfutsiansk lære som styrte kinesiske embetseksamener fram til 1905.

            ### Den islamske verden
            I Bagdad ble Aristoteles, Platon og Galen oversatt til arabisk fra 800-tallet. Al-Kindi, al-Farabi og Ibn Sina bygde store systemer der gresk filosofi møtte islam. Al-Ghazali angrep dem for å ha gått for langt, og Ibn Rushd forsvarte dem. Hans kommentarer til Aristoteles ble avgjørende i Paris, og jødiske tenkere som Moses Maimonides skrev i samme verden og på samme språk.

            ### Moderne møter
            I Japan møtte Nishida Kitaro og Kyoto-skolen tysk filosofi med en zenbuddhistisk bakgrunn og spurte hva intethet kan bety. I Afrika stilte Paulin Hountondji og Kwasi Wiredu etter avkoloniseringen spørsmålet om hva afrikansk filosofi er, og om det ikke er noe annet enn en samling folketro. Det de har til felles, er at de hverken kan avskrives som forløpere til Vesten eller bare ses som motstykker til den.
          `,
        },
      },
    },
    main: {
      "Indisk filosofi": epoke("ca. 800 f.Kr.–", -800, null, `
        Indisk filosofi begynner med Upanishadene, tekster fra rundt 800 f.Kr. av, som spør etter grunnen til alt. Forholdet mellom selvet og verdensgrunnen ble sentralt. Rundt 500 f.Kr. kom motbevegelser som jainismen og Buddhas lære, som avviste Vedaenes autoritet. Etter hvert ble seks ortodokse skoler anerkjent, blant dem logikkskolen Nyaya og Vedanta.

        Filosofene her strides om mye av det samme som i Vesten: hva er kunnskap, hvordan fungerer en slutning, finnes det et selv? Nagarjuna hevdet at alt mangler egen natur, og Shankara at bare brahman er virkelig. Ofte tas filosofi og frelse sammen, men en framstilling som kaller dette for «mystikk» og overser de logiske debattene, blir misvisende.
      `, `
        Bystatene i Gangesdalen, kastesamfunnet, og senere store riker som Maurya under Ashoka, som spredte buddhismen. Islamske herskere kom fra 1200-tallet, og britisk kolonistyre til 1947.
      `, `
        Muntlig overlevering av Vedaene og presise språkstudier hos grammatikeren Panini. Klostre og universiteter som Nalanda samlet studenter fra hele Asia. Matematikken utviklet tallet null.
      `, [INDIA, sep("https://plato.stanford.edu/entries/nagarjuna/"), iep("https://iep.utm.edu/adv-veda/")]),

      "Kinesisk filosofi": epoke("ca. 500 f.Kr.–", -500, null, `
        Kinesisk filosofi vokste fram i tiden med de stridende statene, da hundre skoler kjempet om herskernes gunst. Konfutse satte familie, ritualer og menneskelighet i sentrum. Mozi avviste dette og forsvarte upartisk omsorg. Daoistene Laozi og Zhuangzi ville lære å følge det naturlige og gjøre seg fri fra faste kategorier.

        Konfutsianismen ble statsideologi under Han-dynastiet. Etter møtet med buddhismen formet Zhu Xi den til en hel metafysikk om prinsipp og livsenergi. Vestlige lesere har lenge spurt om dette er filosofi i streng forstand, og Hegel sa nei. Forskere i dag avviser skillet, og feltet har fått stor oppmerksomhet ikke minst i moderne dydsetikk.
      `, `
        De stridende staters tid (475–221 f.Kr.), og samlingen av riket under Qin og Han. Keiserdømmet holdt til 1912. Embetseksamener gjorde klassikerne til vei til makt.
      `, `
        Skriften på bambus og papir, som ble oppfunnet her, og etter hvert boktrykk. Klassikerne ble kommentert i tusenvis av år, og akademier ble viktige sentre for lærdom.
      `, [KINA, sep("https://plato.stanford.edu/entries/laozi/"), sep("https://plato.stanford.edu/entries/zhu-xi/")]),

      "Buddhisme i Øst-Asia": epoke("ca. 400–1300", 400, 1300, `
        Da buddhismen kom fra India til Kina langs silkeveien, måtte den både oversettes og tenkes om. Kumarajiva gjorde tidlig på 400-tallet Nagarjunas tekster tilgjengelige på kinesisk. Zhiyi skapte Tiantai-skolen, som forsøker å ordne alle læresetningene i ett system. Chan-buddhismen, som i Japan ble kalt zen, la vekt på meditasjon og plutselig oppvåkning, med Huineng som grunnleggerfigur.

        I Japan skrev Dogen på 1200-tallet «Shobogenzo», en krevende tekst som drøfter væren og tid, og som har fått stor interesse fra moderne filosofer. Buddhismen endret kinesisk og japansk tenkning for godt, og gjennom Kyoto-skolen ble den igjen en del av den internasjonale filosofien.
      `, `
        Tang-dynastiet (618–907) i Kina var en storhetstid, avløst av forfølgelse av buddhistene i 845. I Japan kom samuraienes styre fra 1185, og zen fikk støtte fra krigerne.
      `, `
        Klostre og oversettelsesverksteder drev en enorm oversettelse fra sanskrit. Reisende som Xuanzang brakte tekster fra India. Tre- og blokktrykk spredte de buddhistiske skriftene.
      `, [BUDDHISME, sep("https://plato.stanford.edu/entries/japanese-zen/"), sep("https://plato.stanford.edu/entries/madhyamaka/")]),

      "Islamsk og arabisk": epoke("ca. 800–1200", 800, 1200, `
        Under abbasidene i Bagdad ble greske verk oversatt til arabisk i stor skala. Al-Kindi innledet en filosofisk tradisjon, *falsafa*, og al-Farabi knyttet Platons politikk og Aristoteles' logikk til islam. Ibn Sina, kjent i Vesten som Avicenna, skapte et system der skillet mellom vesen og eksistens står sentralt, og som har formet islamsk filosofi til i dag.

        Al-Ghazali angrep filosofene i «Filosofenes inkonsistens» for å hevde at verden er evig, og stilte spørsmål ved årsakssammenheng. Ibn Rushd, Averroes i Vesten, svarte i Córdoba og skrev kommentarer som kom til å prege Paris. Islamsk filosofi tok ikke slutt da, slik vestlige framstillinger har hevdet, men fortsatte i Persia og andre steder.
      `, `
        Abbasidekalifatet i Bagdad, med Harun al-Rashid og al-Ma'mun, og andre riker i Córdoba og Kairo. Mongolene ødela Bagdad i 1258. Rekonkvista skjøv muslimene ut av Spania.
      `, `
        Visdommens hus, papirfabrikker og store biblioteker bar oversettelsene. Matematikk og astronomi blomstret med al-Khwarizmi og andre, og Ibn Sinas medisinske lærebok ble brukt i Europa i flere hundre år.
      `, [ISLAM, sep("https://plato.stanford.edu/entries/ibn-sina/"), sep("https://plato.stanford.edu/entries/ibn-rushd/"), sep("https://plato.stanford.edu/entries/al-ghazali/")]),

      "Jødisk filosofi": epoke("ca. 900–1200", 900, 1200, `
        Jødiske tenkere levde og skrev i den islamske verden, ofte på arabisk. Saadia Gaon i Bagdad forsøkte på 900-tallet å vise at åpenbaring og fornuft fører til samme sannhet. Ibn Gabirol skrev i Spania en nyplatonsk bok som kristne leste uten å vite at forfatteren var jøde.

        Tradisjonens høydepunkt er Moses Maimonides, hvis «Villedes veileder» forener Aristoteles og Torah. Gud er så ulik alt annet at vi bare kan si hva Gud ikke er. Boken ble oversatt til latin og lest av Thomas Aquinas, og fra jødisk tenkning går linjer helt fram til Spinoza. Den moderne fortsettelsen står under Dialogfilosofien.
      `, `
        Den jødiske diaspora under islamsk styre, med relativt gode kår i Bagdad og Córdoba. Almohadene forfulgte jødene i Spania på 1100-tallet, og familien til Maimonides måtte flykte.
      `, `
        Talmud-akademiene i Babylonia og senere i Spania var sentra. Arabisk var fellesspråket, og oversettelser til hebraisk fulgte, som igjen ble oversatt til latin.
      `, [sep("https://plato.stanford.edu/entries/maimonides/"), sep("https://plato.stanford.edu/entries/saadya/"), sep("https://plato.stanford.edu/entries/ibn-gabirol/")]),

      "Kyoto-skolen": epoke("ca. 1911–1970", 1911, 1970, `
        Etter at Japan åpnet seg for Vesten i 1868, møtte japanske tenkere vestlig filosofi med en egen arv. Nishida Kitaro skrev i 1911 «Zen no kenkyu» om ren erfaring, før skillet mellom subjekt og objekt, med utgangspunkt i både William James og zen. Senere utviklet han en logikk om sted og absolutt intethet. Tanabe Hajime og Nishitani Keiji fortsatte, flere etter studier hos Heidegger i Tyskland.

        Skolen spør om vestlig filosofi har tatt væren for gitt, når østasiatisk tenkning har tatt utgangspunkt i intetheten. Noen av medlemmene støttet Japans krigføring, og forholdet til nasjonalismen er omstridt. I etterkrigstiden ble skolen en viktig bro i dialogen mellom religioner og filosofier.
      `, `
        Meiji-restaurasjonen i 1868 gjorde Japan til moderne stormakt. Krigene mot Kina og USA ble filosofisk rettferdiggjort av noen, og nederlaget i 1945 satte den japanske selvforståelsen på prøve.
      `, `
        Keiserlige universiteter ble bygd etter tysk mønster. Kyoto-professorene reiste til Freiburg og Heidelberg. Zen var en levende praksis for mange av dem, og for Nishida selv.
      `, [KYOTO, sep("https://plato.stanford.edu/entries/nishida-kitaro/")]),

      "Afrikansk filosofi": epoke("ca. 1945–", 1945, null, `
        Vestlige filosofer har lenge benektet at Afrika hadde noen filosofi, Hegel særlig. Som svar kom på 1940-tallet forsøk på å rekonstruere afrikansk tenkning, som Placide Tempels' «La philosophie bantoue», og Léopold Senghors *négritude*. Paulin Hountondji angrep dette i 1976 som «etnofilosofi»: en felles tenkemåte for en hel kultur er ikke filosofi, som krever kritisk debatt.

        Kwasi Wiredu tok fatt på det han kalte begrepslig avkolonisering. Han prøvde filosofiske begreper på akan-språket og viste at noe av det vestlige ikke lar seg oversette. Debatten rundt *ubuntu*, tanken om at et menneske er menneske gjennom andre, har fått stor interesse. Allerede på 1700-tallet underviste Anton Wilhelm Amo i Halle og Jena.
      `, `
        Avkolonisering fra 1950-årene, med Ghana i 1957 og et stort antall stater rundt 1960. Afrikanske universiteter ble etablert. Sannhets- og forsoningskommisjonen i Sør-Afrika ga *ubuntu* global oppmerksomhet.
      `, `
        Muntlig tradisjon reiser spørsmål om hva som kan regnes som filosofiske tekster. Mange ble utdannet i Paris eller Oxford, og debatten om språk og metode har stått sentralt. Nyere forskning har også tatt opp etiopiske tekster.
      `, [AFRIKA, iep("https://iep.utm.edu/african-sage/"), bok("Hountondji, Paulin. Sur la «philosophie africaine». Maspero, 1976.")]),
    },
  },

  edgeDescriptions: {
    indisk__buddhisme: strek(`Buddhismen oppsto i India, og oversettelser fra sanskrit var utgangspunktet i Kina. Nagarjunas tekster ble særlig viktige i Kumarajivas arbeid.`),
    kinesisk__buddhisme: strek(`De første kinesiske buddhistene oversatte buddhistiske ord med daoistiske begreper. Chan-buddhismen har et tydelig daoistisk preg.`),
    aristotelismen__islamsk: strek(`Aristoteles var *al-mu'allim al-awwal*, Den første læreren, i den islamske verden. Al-Farabi fikk navnet Den andre læreren. Ibn Rushd kommenterte nesten alt han skrev.`),
    nyplatonismen__islamsk: strek(`Deler av Plotin gikk under navnet «Aristoteles' teologi» på arabisk, og dette formet hele tradisjonen. Læren om emanasjon går igjen hos al-Farabi og Ibn Sina.`),
    islamsk__jodisk: strek(`Saadia Gaon var kjent med islamsk *kalam*, og Maimonides så al-Farabi som en stor autoritet. Mye av jødisk filosofi ble skrevet på arabisk.`),
    buddhisme__kyoto: strek(`Nishida Kitaro praktiserte zen i mange år, og Nishitani Keiji bygde sin analyse av nihilisme på den buddhistiske tomheten.`),
    fenomenologien__kyoto: strek(`Nishitani studerte hos Heidegger i Freiburg i 1937–1939, og Tanabe Hajime hos Husserl og Heidegger. Husserl tok også imot flere japanske studenter.`),
    tyskidealisme__kyoto: strek(`Nishida og Tanabe tok Fichte og Hegel i bruk. Tanabes logikk om det spesifikke er utviklet i diskusjon med Hegel.`),
  },

  artists: [
    // --- Indisk ---
    f("Yajnavalkya", [null, null], "mann", ["Metafysikk"], ["Indisk filosofi"], ["Tomhet"], [-800, -700], "Videha i det nordlige India", `
      Indisk vismann, hovedperson i Brihadaranyaka-upanishaden, en av de eldste filosofiske tekstene vi kjenner til. Selvet, *atman*, kan ikke beskrives med annet enn «ikke dette, ikke dette». Det er det som vet, men ikke kan bli gjenstand for viten. Teksten skildrer også samtaler med hans kone Maitreyi og vismannen Gargi, en av få kvinner i kildene. Hvor mye som er historisk, er ukjent.
    `, [["Brihadaranyaka-upanishaden"]], [INDIA]),
    f("Buddha", [null, null], "mann", ["Etikk", "Metafysikk"], ["Indisk filosofi"], ["Tomhet", "Kausalitet", "Ataraksi"], [-450, -400], "Lumbini og Gangesdalen", `
      Indisk vismann, Siddhartha Gautama, buddhismens grunnlegger. Årstallene er usikre, men han levde trolig på 400-tallet f.Kr. Etter sin oppvåkning lærte han de fire edle sannheter: livet er lidelse, lidelse har en årsak, den kan opphøre, og det finnes en vei dit. Det finnes ikke noe varig selv, *anatman*, og alt oppstår i gjensidig avhengighet. Lærdommene ble overført muntlig og nedtegnet flere hundre år senere.
    `, [["Pali-kanonen"]], [sep("https://plato.stanford.edu/entries/buddha/")]),
    f("Nagarjuna", [null, null], "mann", ["Metafysikk", "Logikk og språk"], ["Indisk filosofi"], ["Tomhet", "Sannhet"], [150, 250], "Det sørlige India", `
      Indisk buddhistisk filosof, kanskje fra 100- eller 200-tallet, grunnlegger av Madhyamaka-skolen, «den midtre veien». Alt mangler egen natur og er *tomt*, også tomheten selv. Han bruker en skarp logikk for å vise at alle faste posisjoner undergraver seg selv, men skiller mellom en konvensjonell og en endelig sannhet. Han er fortsatt en av de viktigste kildene i tibetansk og østasiatisk buddhisme, og leses av moderne analytiske filosofer.
    `, [["Mulamadhyamakakarika"]], [sep("https://plato.stanford.edu/entries/nagarjuna/")]),
    f("Shankara", [null, null], "mann", ["Metafysikk", "Religionsfilosofi"], ["Indisk filosofi"], ["Væren"], [700, 750], "Det sørlige India", `
      Indisk filosof og lærer, trolig fra 700-tallet, den fremste talsmannen for Advaita Vedanta. Bare brahman er virkelig, og selvet er ett med det. Mangfoldet vi ser, er en illusjon, *maya*. Hans kommentarer til Upanishadene og Brahmasutra er de mest kjente, og i tradisjonen fortelles det om hans reiser over hele India og opprettelsen av klostre. Hvor mye av det som tilskrives ham er ekte, er usikkert.
    `, [["Kommentar til Brahmasutra"]], [iep("https://iep.utm.edu/adv-veda/")]),

    // --- Kinesisk ---
    f("Konfutse", [-551, -479], "mann", ["Etikk", "Politisk filosofi"], ["Kinesisk filosofi"], ["Dyd"], [-520, -479], "Lu i Kina", `
      Kinesisk lærer og tenker, latinisert navn på Kong Fuzi, kanskje den mest innflytelsesrike tenkeren i historien. Han mislyktes som rådgiver for fyrster, men fikk mange elever. Sentrale begreper er *ren*, menneskelighet, og *li*, rituelle normer: et godt samfunn skapes av gode mennesker, ikke av straff. «Samtalene» er samlet av elevene hans og senere redigert. Hans lære var statsideologi i Kina i om lag to tusen år.
    `, [["Samtalene (Lunyu)"]], [KINA, snl("https://snl.no/Konfutse")]),
    f("Laozi", [null, null], "mann", ["Metafysikk", "Politisk filosofi"], ["Kinesisk filosofi"], ["Dao"], [-400, -300], "Kina", `
      Kinesisk tenker, tradisjonelt regnet som forfatter av «Daodejing» og grunnlegger av daoismen. Det er tvil om han har levd, og teksten stammer trolig fra flere hender, kanskje fra 300-tallet f.Kr. *Dao*, veien, kan ikke uttrykkes. Den vise handler uten tvang, *wu wei*, og den beste herskeren er den folk knapt vet om. Boken er blitt oversatt til flere språk enn nesten noen annen kinesisk tekst.
    `, [["Daodejing"]], [sep("https://plato.stanford.edu/entries/laozi/")]),
    f("Mozi", [null, null], "mann", ["Etikk"], ["Kinesisk filosofi"], ["Nytteprinsippet", "Rettferdighet"], [-450, -390], "Kina", `
      Kinesisk tenker fra 400-tallet f.Kr., grunnlegger av mohismen, Konfutsianismens første store motstander. Mot familielojalitet satte han upartisk omsorg for alle, *jian ai*, og vurderte handlinger etter deres nytte for folket. Han var imot krig og sløsende ritualer, og tilhengerne skal ha hjulpet byer med forsvar. Skolen har en bemerkelsesverdig logikk og forsvant etter Han-dynastiet.
    `, [["Mozi"]], [sep("https://plato.stanford.edu/entries/mohism/")]),
    f("Mengzi", [null, null], "mann", ["Etikk", "Politisk filosofi"], ["Kinesisk filosofi"], ["Dyd"], [-350, -289], "Zou i Kina", `
      Kinesisk filosof, kalt Mencius i Vesten, Konfutsianismens andre store skikkelse. Mennesket er av natur godt, og alle har spiren til medfølelse, slik man ser hos den som straks vil redde et barn som faller i en brønn. Hersker som ikke tar vare på folket, mister himmelens mandat. Bøkene hans ble en del av de fire klassikerne, som lå til grunn for embetseksamen.
    `, [["Mengzi"]], [sep("https://plato.stanford.edu/entries/mencius/")]),
    f("Zhuangzi", [null, null], "mann", ["Metafysikk", "Etikk"], ["Kinesisk filosofi"], ["Dao", "Tvil"], [-340, -286], "Song i Kina", `
      Kinesisk filosof fra 300-tallet f.Kr., kjent for boken som bærer navnet hans, med historier, vitser og tankeeksperimenter. I den mest kjente drømmer han at han er en sommerfugl, og våkner uten å vite om han er Zhuangzi som drømte, eller sommerfuglen som drømmer nå. Forestillingene våre om rett og galt er avhengige av ståsted. Det vise er å følge tingenes flyt.
    `, [["Zhuangzi"]], [sep("https://plato.stanford.edu/entries/zhuangzi/")]),
    f("Zhu Xi", [1130, 1200], "mann", ["Metafysikk", "Etikk"], ["Kinesisk filosofi"], ["Dao", "Dyd", "Substans"], [1160, 1200], "Fujian i Kina", `
      Kinesisk filosof og embetsmann i Song-tiden, den viktigste skikkelsen i nykonfutsianismen. Alt består av prinsipp, *li*, og livsenergi, *qi*. Han samlet og kommenterte de fire bøkene, og disse ble grunnlag for embetseksamen i Kina fra 1313 til 1905. Tankene hans spredte seg til Korea og Japan. Han drev også et akademi, og mente at studier måtte gå sammen med moralsk øvelse.
    `, [["Sishu jizhu"], ["Jinsilu"]], [sep("https://plato.stanford.edu/entries/zhu-xi/")]),

    // --- Buddhisme i Øst-Asia ---
    f("Kumarajiva", [null, null], "mann", ["Religionsfilosofi"], ["Buddhisme i Øst-Asia"], ["Tomhet"], [401, 413], "Kutsja og Chang'an", `
      Buddhistisk munk og oversetter fra Kutsja i det nåværende Xinjiang. Han ble ført til Kina som krigsfange, og fra 401 ledet han et stort oversettelsesprosjekt i Chang'an. Oversettelsene hans av Lotus-sutraen og av Nagarjunas tekster er fortsatt i bruk og er en av hovedgrunnene til at Madhyamaka fikk plass i Kina. Elevene hans ble grunnleggere av nye skoler. Årstallene er omtrentlige.
    `, [["Oversettelsen av Lotus-sutraen", 406]], [sep("https://plato.stanford.edu/entries/madhyamaka/")]),
    f("Zhiyi", [538, 597], "mann", ["Religionsfilosofi", "Metafysikk"], ["Buddhisme i Øst-Asia"], ["Tomhet", "Sannhet"], [560, 597], "Tiantai-fjellet i Kina", `
      Kinesisk buddhistisk munk, regnet som grunnlegger av Tiantai-skolen. Han ordnet buddhas lære i et system med Lotus-sutraen på toppen, og utviklet Nagarjunas to sannheter til tre: tomhet, det konvensjonelle og det midterste. Læren om at en enkelt tanke rommer alle verdener, er berømt. Han kombinerer filosofi og meditasjonspraksis i forelesninger, nedtegnet av elever.
    `, [["Mohe zhiguan", 594]], [sep("https://plato.stanford.edu/entries/madhyamaka/")]),
    f("Huineng", [638, 713], "mann", ["Religionsfilosofi"], ["Buddhisme i Øst-Asia"], ["Tomhet"], [670, 713], "Sør-Kina", `
      Kinesisk Chan-munk, av tradisjonen regnet som den sjette patriarken. Ifølge fortellingen var han en analfabet som samlet ved, og som vant arveretten med et dikt om at det ikke finnes noe å støve av. Oppvåkningen er plutselig, ikke gradvis. «Plattformsutraen», som fortellingen kommer fra, er nok i stor grad senere arbeid, men er en grunntekst for zen.
    `, [["Plattformsutraen"]], [BUDDHISME]),
    f("Dogen", [1200, 1253], "mann", ["Metafysikk", "Religionsfilosofi"], ["Buddhisme i Øst-Asia"], ["Væren", "Tomhet"], [1227, 1253], "Kyoto og Eiheiji i Japan", `
      Japansk zen-mester, grunnlegger av Soto-skolen, som lærte i Kina i årene 1223–1227. «Shobogenzo», skrevet på japansk, er et hovedverk i japansk tenkning. Essayet om *uji*, «væren-tid», hevder at alt som er, er tid, noe som har gjort ham interessant for lesere av Heidegger. Å sitte i meditasjon er ikke middel til oppvåkning, men selve oppvåkningen. Han var lite kjent utenfor sin orden før på 1900-tallet.
    `, [["Shobogenzo", 1253]], [sep("https://plato.stanford.edu/entries/japanese-zen/")]),

    // --- Islamsk og arabisk ---
    f("al-Kindi", [null, null], "mann", ["Metafysikk", "Vitenskapsfilosofi"], ["Islamsk og arabisk"], ["Gudsbevis", "Sannhet"], [830, 873], "Kufa og Bagdad", `
      Arabisk filosof og lærd i Bagdad, kalt arabernes filosof, som ledet en krets som oversatte greske tekster. Sannheten må tas imot hvor den enn kommer fra, skrev han, også fra fremmede folk. Han forsøkte å forene gresk filosofi og islam, og argumenterte mot Aristoteles for at verden har en begynnelse. Han skrev over 200 verk, også om matematikk, kryptografi og musikk, de fleste tapt.
    `, [["Om den første filosofi"]], [sep("https://plato.stanford.edu/entries/al-kindi/")]),
    f("al-Farabi", [null, null], "mann", ["Politisk filosofi", "Logikk og språk"], ["Islamsk og arabisk"], ["Rettferdighet", "Mening og referanse"], [900, 950], "Bagdad og Damaskus", `
      Filosof fra Sentral-Asia, kalt «Den andre læreren» etter Aristoteles. Han bygde en logikk og en politisk filosofi der Platons filosofkonge blir til en profet-lovgiver. «Den dydige by» knytter en kosmologi med emanasjoner til spørsmålet om lykke og styre. Hans arbeider om logikk ble lest i både den islamske og jødiske verden, og Ibn Sina sa at han først forsto Aristoteles' metafysikk gjennom ham.
    `, [["Den dydige by"], ["Kitab al-Huruf"]], [sep("https://plato.stanford.edu/entries/al-farabi/")]),
    f("Ibn Sina", [980, 1037], "mann", ["Metafysikk", "Vitenskapsfilosofi"], ["Islamsk og arabisk"], ["Væren", "Gudsbevis", "Kropp og sjel"], [1000, 1037], "Bukhara, Hamadan og Isfahan", `
      Persisk filosof og lege, kjent i Vesten som Avicenna. «Kitab al-Shifa» er det største filosofiske verket skrevet på arabisk, og hans «Kanon» var medisinens lærebok i Europa i flere hundre år. Han skiller vesen og eksistens, og beviser Gud som det nødvendig eksisterende. I tankeeksperimentet om den svevende mannen spør han hva vi vet uten sanser. Han var en stor påvirkning på Aquinas og Duns Scotus.
    `, [["Kitab al-Shifa", 1027], ["Kanon i medisin", 1025]], [sep("https://plato.stanford.edu/entries/ibn-sina/")]),
    f("al-Ghazali", [1058, 1111], "mann", ["Religionsfilosofi", "Erkjennelsesteori"], ["Islamsk og arabisk"], ["Kausalitet", "Tvil", "Gudsbevis"], [1085, 1111], "Tus og Bagdad", `
      Persisk teolog og mystiker. I 1095 brøt han sammen i en krise, forlot lærestolen i Bagdad og levde i årevis som sufi. «Filosofenes inkonsistens» angriper filosofene på deres egne premisser, og hevder at det ikke er noe nødvendig i årsakssammenhenger: Gud er eneste virkelige årsak. Selvbiografien om hans vei fra tvil til visshet har ofte blitt sammenlignet med Descartes. Hans påvirkning i islam kan knapt overdrives.
    `, [["Filosofenes inkonsistens", 1095], ["Befrielsen fra villfarelsen"], ["Oppvekkelsen av religionsvitenskapene"]], [sep("https://plato.stanford.edu/entries/al-ghazali/")]),
    f("Ibn Rushd", [1126, 1198], "mann", ["Metafysikk", "Religionsfilosofi"], ["Islamsk og arabisk"], ["Sannhet", "Kropp og sjel"], [1160, 1198], "Córdoba og Marrakesh", `
      Andalusisk filosof, dommer og lege, kjent i Vesten som Averroes. Han skrev kommentarer til nesten hele Aristoteles og ble kalt Kommentatoren av de latinske. I «Inkonsistensens inkonsistens» svarer han al-Ghazali. Filosofi og åpenbaring kan ikke motsi hverandre, men forstås på ulike nivåer. Læren om at alle mennesker deler ett intellekt, førte til strid i Paris i 1270-årene. Han ble forvist i 1195, og verkene hans ble brent.
    `, [["Den avgjørende avhandling"], ["Inkonsistensens inkonsistens", 1180]], [sep("https://plato.stanford.edu/entries/ibn-rushd/")]),

    // --- Jødisk ---
    f("Saadia Gaon", [882, 942], "mann", ["Religionsfilosofi"], ["Jødisk filosofi"], ["Sannhet"], [905, 942], "Egypt og Bagdad", `
      Jødisk lærd fra Egypt, leder av akademiet i Sura i Babylonia fra 928, og regnet som grunnleggeren av middelalderens jødiske filosofi. «Boken om tro og overbevisninger» viser at åpenbaring og fornuft fører til samme sannhet. Han skrev den første store oversettelsen av den hebraiske Bibelen til arabisk, og angrep karaittene som avviste den rabbinske tradisjonen.
    `, [["Boken om tro og overbevisninger", 933]], [sep("https://plato.stanford.edu/entries/saadya/")]),
    f("Ibn Gabirol", [null, null], "mann", ["Metafysikk"], ["Jødisk filosofi"], ["Substans"], [1040, 1058], "Málaga og Zaragoza", `
      Jødisk filosof og dikter i det muslimske Spania. «Fons vitae», skrevet på arabisk, er et nyplatonsk verk som nesten ikke nevner noe jødisk. Oversatt til latin ble det lest av skolastikerne som et verk av en «Avicebron», og det var først på 1800-tallet at Salomon Munk viste hvem han var. Salmene hans brukes fortsatt i jødisk gudstjeneste.
    `, [["Fons vitae"]], [sep("https://plato.stanford.edu/entries/ibn-gabirol/")]),
    f("Moses Maimonides", [1138, 1204], "mann", ["Religionsfilosofi", "Etikk"], ["Jødisk filosofi"], ["Gudsbevis", "Dyd"], [1168, 1204], "Córdoba, Fez og Kairo", `
      Jødisk filosof, rettslærd og lege, den viktigste jødiske tenkeren i middelalderen. Familien flyktet fra Córdoba, og han endte som lege ved hoffet i Kairo. «Mishneh Torah» ordner hele jødisk lov. «Villedes veileder» forener Aristoteles og Bibelen: vi kan ikke si noe positivt om Gud, bare hva Gud ikke er. Aquinas leste ham. Boken skapte strid blant jøder, og den ble brent i Montpellier etter oppfordring fra motstandere.
    `, [["Mishneh Torah", 1180], ["Villedes veileder", 1190]], [sep("https://plato.stanford.edu/entries/maimonides/")]),

    // --- Kyoto-skolen ---
    f("Nishida Kitaro", [1870, 1945], "mann", ["Metafysikk", "Religionsfilosofi"], ["Kyoto-skolen"], ["Væren", "Erfaring", "Tomhet"], [1911, 1945], "Kanazawa og Kyoto", `
      Japansk filosof, grunnleggeren av Kyoto-skolen, som praktiserte zen i mange år. «Zen no kenkyu» (1911) tar utgangspunkt i ren erfaring, før subjekt og objekt skilles. Senere utviklet han en logikk om *basho*, sted, og absolutt intethet. Han ville tenke østlig erfaring med vestlige begreper. Hans forhold til japansk krigsideologi under krigen er diskutert, og han døde kort tid før krigens slutt.
    `, [["Zen no kenkyu", 1911]], [sep("https://plato.stanford.edu/entries/nishida-kitaro/")]),
    f("Tanabe Hajime", [1885, 1962], "mann", ["Metafysikk", "Religionsfilosofi"], ["Kyoto-skolen"], ["Væren"], [1922, 1962], "Tokyo og Kyoto", `
      Japansk filosof og Nishidas etterfølger i Kyoto, som kritiserte læreren og utviklet en egen «logikk om det spesifikke» med vekt på fellesskap og stat. Etter krigen skrev han «Filosofi som metanoetikk» (1946), en gjennomgang av skyld og anger som tar et oppgjør med hans egen støtte til krigen. Han studerte også hos Husserl og Heidegger i Tyskland på 1920-tallet.
    `, [["Filosofi som metanoetikk", 1946]], [KYOTO]),
    f("Nishitani Keiji", [1900, 1990], "mann", ["Religionsfilosofi", "Metafysikk"], ["Kyoto-skolen"], ["Væren", "Tomhet"], [1937, 1990], "Kyoto og Freiburg", `
      Japansk filosof, elev av Nishida, som studerte hos Heidegger i Freiburg fra 1937 til 1939. «Religion og intethet» hevder at moderne nihilisme bare kan overvinnes ved å gå gjennom den, til den buddhistiske tomheten. Han er blant de mest leste fra skolen i Vesten. Etter krigen ble han en periode utestengt fra sin stilling for sin rolle under krigen.
    `, [["Shukyo to wa nanika", 1961]], [sep("https://plato.stanford.edu/entries/kyoto-school/")]),

    // --- Afrikansk ---
    f("Anton Wilhelm Amo", [null, null], "mann", ["Metafysikk"], ["Afrikansk filosofi"], ["Kropp og sjel", "Bevissthet"], [1729, 1747], "Axim, Halle, Wittenberg og Jena", `
      Filosof fra dagens Ghana, ført til Europa som barn og oppdratt av hertugen av Wolfenbüttel. Han fikk grad ved Wittenberg og underviste i Halle og Jena. I avhandlingen fra 1734 argumenterer han mot Descartes om at sjelen ikke kan føle. En tidlig avhandling skal ha handlet om afrikaneres rettigheter i Europa, men er tapt. Han reiste tilbake til Afrika rundt 1747. Han blir nå lest igjen.
    `, [["De humanae mentis apatheia", 1734], ["Tractatus de arte sobrie et accurate philosophandi", 1738]], [AFRIKA, sep("https://plato.stanford.edu/entries/african-ethics/")]),
    f("Léopold Senghor", [1906, 2001], "mann", ["Politisk filosofi", "Estetikk"], ["Afrikansk filosofi"], ["Kolonialitet", "Anerkjennelse"], [1945, 2001], "Joal, Paris og Dakar", `
      Senegalesisk dikter, filosof og politiker, Senegals første president fra 1960 til 1980. Med Aimé Césaire grunnla han i Paris på 1930-tallet *négritude*, en bevegelse som ville gjenopprette verdien av svart kultur. Han er blitt kritisert for å bygge på rasistiske skiller, som hans berømte setning om at følelsen er afrikansk og fornuften gresk. Han var den første afrikaner i Académie française.
    `, [["Chants d'ombre", 1945], ["Liberté", 1964]], [AFRIKA]),
    f("Paulin Hountondji", [1942, 2024], "mann", ["Erkjennelsesteori", "Politisk filosofi"], ["Afrikansk filosofi"], ["Kolonialitet"], [1976, 2024], "Benin og Paris", `
      Filosof fra Benin, skolert ved École normale supérieure, senere minister. «Sur la "philosophie africaine"» (1976) kaller tidligere forsøk på å finne en felles afrikansk tankegang for *etnofilosofi*, og hevder at filosofi krever individuelle tekster og kritikk. Boken satte dagsordenen for en lang debatt. Senere skrev han om at vitenskap i Afrika har vært styrt av andres spørsmål.
    `, [["Sur la «philosophie africaine»", 1976]], [AFRIKA, bok("Hountondji, Paulin. Sur la «philosophie africaine». Maspero, 1976.")]),
    f("Kwasi Wiredu", [1931, 2022], "mann", ["Logikk og språk", "Etikk"], ["Afrikansk filosofi"], ["Kolonialitet", "Sannhet"], [1980, 2022], "Kumasi, Oxford og Florida", `
      Ghanesisk filosof, utdannet i Oxford og lenge ved University of South Florida. Han argumenterte for *begrepslig avkolonisering*: afrikanske filosofer må prøve de vestlige begrepene på egne språk. På akan kan man for eksempel ikke uttrykke skillet mellom kropp og sjel på den kartesianske måten. «Philosophy and an African Culture» (1980) er tradisjonens klassiker. Han forsvarte demokrati basert på konsensus.
    `, [["Philosophy and an African Culture", 1980], ["Cultural Universals and Particulars", 1996]], [AFRIKA]),

    // --- Tillegg til de andre retningene ---
    filosof("Fornuft og idé")("Hypatia", [null, 415], "kvinne", ["Metafysikk"], ["Nyplatonismen"], [], [390, 415], "Alexandria", `
      Gresk matematiker, astronom og nyplatonsk filosof i Alexandria, datter av Theon. Hun var en anerkjent lærer, både for hedninger og kristne, og ble drept av en kristen mobb i 415. Skriftene hennes er tapt, men Synesios av Kyrene, en av elevene, omtaler henne i brev med stor respekt. Drapet er blitt et symbol, ofte på en måte som kildene ikke helt bærer. Hun er den best kjente kvinnelige filosofen i senantikken.
    `, [], [sep("https://plato.stanford.edu/entries/neoplatonism/"), snl("https://snl.no/Hypatia")]),
    filosof("Fornuft og idé")("Elisabeth av Böhmen", [1618, 1680], "kvinne", ["Metafysikk"], ["Rasjonalismen"], ["Kropp og sjel"], [1643, 1680], "Haag og Herford", `
      Prinsesse av Pfalz, datter av Vinterkongen, og abbedisse i Herford. Brevene hennes til René Descartes fra 1643 spør skarpt hvordan en umateriell sjel kan bevege kroppen. Det er kjernen i det som senere er kalt problemet om vekselvirkning. Han tilegnet henne «Principia philosophiae». I dag leses hun som en selvstendig filosof, og ikke bare som en leser av Descartes.
    `, [["Brev til Descartes", 1643]], [sep("https://plato.stanford.edu/entries/elisabeth-bohemia/")]),
    filosof("Fornuft og idé")("Anne Conway", [1631, 1679], "kvinne", ["Metafysikk"], ["Rasjonalismen"], ["Substans", "Kropp og sjel"], [1670, 1679], "Ragley Hall i England", `
      Engelsk filosof, viscountess og venn av Henry More, plaget hele livet av sterk hodepine. Hennes eneste verk, utgitt anonymt etter hennes død, avviser Descartes' og Hobbes' syn på materien: alt skapt er levende og av samme slag. G.W. Leibniz leste boken med stor interesse. Hun ble kveker sent i livet, noe som overrasket vennene.
    `, [["The Principles of the Most Ancient and Modern Philosophy", 1690]], [sep("https://plato.stanford.edu/entries/conway/")]),
    filosof("Natur og erfaring")("Margaret Cavendish", [1623, 1673], "kvinne", ["Vitenskapsfilosofi", "Metafysikk"], ["Den nye vitenskapen"], ["Kropp og sjel"], [1653, 1673], "Colchester, Antwerpen og Welbeck", `
      Engelsk forfatter og filosof, hertuginne av Newcastle. Hun utviklet en vitalistisk materialisme, der all materie er sansende og tenkende, og kritiserte Hobbes, Descartes og Boyle. Hun var den første kvinnen som fikk besøke et møte i Royal Society, i 1667. «The Blazing World» er en tidlig science fiction-tekst. Hun ga ut en lang rekke bøker i eget navn, noe som var svært uvanlig for kvinner.
    `, [["Philosophical and Physical Opinions", 1655], ["Observations upon Experimental Philosophy", 1666], ["The Blazing World", 1666]], [sep("https://plato.stanford.edu/entries/margaret-cavendish/")]),
    filosof("Tro og fornuft")("Hildegard av Bingen", [1098, 1179], "kvinne", ["Religionsfilosofi"], ["Høyskolastikken"], [], [1141, 1179], "Rupertsberg", `
      Tysk abbedisse, visjonær, komponist og naturkyndig. «Scivias» beskriver hennes visjoner av verdens orden, og kirkens øverste, med paven i spissen, godkjente dem. Hun skrev også om planter og legekunst, og komponerte musikk som er bevart. Hun korresponderte med Bernhard av Clairvaux og keiser Fredrik Barbarossa, og reiste på preikereiser, som var svært sjeldent for kvinner.
    `, [["Scivias", 1151], ["Liber divinorum operum", 1173]], [bok("Newman, Barbara. Sister of Wisdom: St. Hildegard's Theology of the Feminine. University of California Press, 1987.")]),
    filosof("Det gode liv")("Christine de Pizan", [null, null], "kvinne", ["Etikk", "Politisk filosofi"], ["Renessansehumanismen"], ["Kjønn", "Dyd"], [1399, 1429], "Venezia og Paris", `
      Fransk-italiensk forfatter, regnet som den første yrkesforfatteren som var kvinne i Europa. Hun ble enke som 25-åring og levde av å skrive. «Le Livre de la Cité des Dames» (1405) bygger en by av kvinner fra historien for å vise at kvinner er like dyktige, og tar et oppgjør med hvordan menn skriver om dem. Hun skrev også om krig, styre og Jeanne d'Arc. Hun er en tidlig stemme i den såkalte kvinnedebatten.
    `, [["Le Livre de la Cité des Dames", 1405], ["Le Livre des trois vertus", 1405]], [snl("https://snl.no/Christine_de_Pisan")]),
    filosof("Det gode liv")("Iris Murdoch", [1919, 1999], "kvinne", ["Etikk"], ["Dydsetikken"], ["Dyd", "Det skjønne og det sublime"], [1953, 1999], "Dublin og Oxford", `
      Irsk-britisk filosof og romanforfatter, lenge ved St Anne's College i Oxford. «The Sovereignty of Good» (1970) angriper bildet av den frie, tomme viljen som hun finner både hos eksistensialister og analytiske filosofer. Moral handler om å se virkelig på andre, og oppmerksomhet er en moralsk handling. Hun tok opp Platon og Simone Weil. Hun skrev 26 romaner og fikk Booker-prisen i 1978.
    `, [["Sartre: Romantic Rationalist", 1953], ["The Sovereignty of Good", 1970], ["Metaphysics as a Guide to Morals", 1992]], [sep("https://plato.stanford.edu/entries/murdoch/")]),
    filosof("Det gode liv")("Mary Midgley", [1919, 2018], "kvinne", ["Etikk", "Vitenskapsfilosofi"], ["Dydsetikken"], [], [1978, 2018], "London, Oxford og Newcastle", `
      Britisk filosof, studiekamerat av Anscombe, Foot og Murdoch i Oxford. Hun begynte å publisere bøker først i 50-årene. «Beast and Man» (1978) kritiserer forestillingen om at mennesket er helt forskjellig fra andre dyr. Hun tok et oppgjør med vitenskapsdyrkelse og med Richard Dawkins' egoistiske gen. Bøkene hennes var skrevet for et bredt publikum, og hun ga ut sin siste rett før sin død i en alder av 99 år.
    `, [["Beast and Man", 1978], ["Animals and Why They Matter", 1983], ["What Is Philosophy For?", 2018]], [snl("https://snl.no/Mary_Midgley")]),
  ],
};
