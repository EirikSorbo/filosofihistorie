// Runde 3: Eksistens og tolkning. Retningen, epokene, filosofene og påvirkningene (steg 7, skrevet av Opus 2026-11-02).
import { sep, iep, snl, bok, filosof, epoke, strek } from "../kilder.mjs";

const R = "Eksistens og tolkning";
const f = filosof(R);
const FEN = sep("https://plato.stanford.edu/entries/phenomenology/");
const HERM = sep("https://plato.stanford.edu/entries/hermeneutics/");
const EKS = sep("https://plato.stanford.edu/entries/existentialism/");
const ROM = sep("https://plato.stanford.edu/entries/herder/");
const STRUKT = snl("https://snl.no/strukturalisme");
const POST = iep("https://iep.utm.edu/postmodernism/");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler tradisjonen som tar utgangspunkt i at mennesket ikke bare observerer verden, men lever og forstår i den. Den vokser fram i romantikkens protest mot opplysningen, går via Kierkegaard og Nietzsche til fenomenologien, Heidegger og eksistensialismen, og videre til hermeneutikken, strukturalismen og poststrukturalismen. Det som ofte kalles kontinental filosofi, ligger for en stor del her. Spørsmålene er hva det vil si å være et menneske som skal dø, hvordan vi kan forstå tekster og andre, og om det subjektet filosofien har tatt for gitt, i det hele tatt finnes. Stilen er ofte en del av saken.
          `,
          kilder: [EKS, FEN],
        },
        story: {
          body: `
            ### Mot opplysningens fornuft
            Rundt 1770 begynte J.G. Herder å hevde at språk og kultur ikke er redskaper for en allmenn fornuft, men det stoffet tenkningen er laget av. Romantikerne i Jena, Novalis og Friedrich Schlegel, tok opp tråden med fragmenter og ironi. F.D.E. Schleiermacher begynte å spørre hva det vil si å forstå en tekst, og her ligger også spiren til hermeneutikken.

            ### Den enkelte og viljen
            Søren Kierkegaard gjorde opprør mot Hegels system: et system kan forklare alt, unntatt at jeg skal dø og må velge. Sannheten er subjektiviteten. Arthur Schopenhauer så verden som blind vilje og fant trøst i kunsten og i indisk tenkning. Friedrich Nietzsche snudde dette: Gud er død, og spørsmålet er om vi kan si ja til livet uten trøst. Han kalte verdiene våre et produkt av historie og ressentiment, og alle kunnskapskrav perspektiver.

            ### Tilbake til sakene selv
            Edmund Husserl ville gi filosofien et sikkert grunnlag ved å beskrive det som viser seg i bevisstheten, uten å ta noe for gitt. Eleven Martin Heidegger snudde spørsmålet: vi er alltid allerede i verden, og spørsmålet om væren er blitt glemt. Hans «Sein und Zeit» (1927) kan være århundrets mest innflytelsesrike bok, og hans tilslutning til nazismen er et av filosofihistoriens store mørke punkter.

            ### Frihet og ansvar
            I Paris under og etter krigen ble tankene til et kulturelt fenomen. Jean-Paul Sartre hevdet at eksistensen kommer før essensen. Vi er dømt til å være frie. Simone de Beauvoir viste hva dette betydde for kvinner, Albert Camus skrev om det absurde, og Maurice Merleau-Ponty flyttet oppmerksomheten til kroppen.

            ### Strukturen og tolkningen
            Rundt 1960 snudde pendelen. Claude Lévi-Strauss og hans strukturalisme, bygd på Ferdinand de Saussures språkvitenskap, hevdet at mennesket ikke er herre i eget hus: strukturene tenker gjennom oss. Hans-Georg Gadamer beskrev samtidig forståelse som en samtale mellom tradisjon og nåtid, og Paul Ricœur prøvde å holde tolkning og forklaring sammen.

            Poststrukturalistene gikk videre. Michel Foucault viste hvordan kunnskap og makt henger sammen, og hvordan mennesket selv er en sen oppfinnelse. Jacques Derrida leste filosofiens tekster mot seg selv, og Gilles Deleuze skrev en filosofi om forskjell. De har preget humaniora og samfunnsfag langt utover faget. Nyere spekulative realister spør om vi ikke må tilbake til tingene selv, også uavhengig av hvordan de framstår for oss.
          `,
        },
      },
    },
    main: {
      "Romantikken": epoke("ca. 1770–1830", 1770, 1830, `
        Den tyske romantikken begynner hos dem som mente at opplysningen hadde et for fattig bilde av mennesket. J.G. Herder hevdet at tanke og språk er uatskillelige, og at hvert folk og hver tid har sin egen verdi og må forstås på egne vilkår. Han er en av stamfedrene til kulturvitenskapene. I Jena i 1790-årene samlet Friedrich Schlegel, Novalis og andre seg rundt tidsskriftet «Athenäum», med fragmentet og ironien som former.

        Kant hadde satt grenser for fornuften, og romantikerne tok det alvorlig: det absolutte kan ikke grepet, bare antydes, og poesien kommer nærmest. F.D.E. Schleiermacher fant religionens kjerne i en følelse av avhengighet. Forestillingen om at hvert menneske må finne sitt eget uttrykk, er et av romantikkens varigste bidrag.
      `, `
        Den franske revolusjonen vakte først begeistring og så skuffelse. Tyskland var delt i små stater, uten politisk nasjon, og Napoleon erobret landet. Nasjonalisme og interesse for folkeviser og middelalder vokste fram.
      `, `
        Kants filosofi og Fichtes jeg-lære var det umiddelbare utgangspunktet. Goethe i Weimar var et bakteppe. Studiet av språk, særlig sanskrit, og historie og filologi ble nye vitenskaper.
      `, [ROM, sep("https://plato.stanford.edu/entries/schlegel/"), sep("https://plato.stanford.edu/entries/novalis/")]),

      "Eksistenstenkningen": epoke("1843–1855", 1843, 1855, `
        Søren Kierkegaard skrev i Hegels skygge og ønsket å vise hva systemet glemmer: den enkelte som må leve og velge. Filosofien står ifølge ham i fare for å bygge et slott og selv bo i et skur ved siden av. Under ulike pseudonymer beskrev han tre livsformer, den estetiske, den etiske og den religiøse, og hevdet at overgangen mellom dem ikke kan begrunnes. Den krever et sprang.

        Angst er det frie menneskets svimmelhet, og fortvilelse er ikke å ville være seg selv. Sannhet er subjektivitet: ikke at alt er relativt, men at det avgjørende må tilegnes personlig. Han fikk liten virkning i sin levetid og var en dansk særling, men etter 1900 ble han en av de viktigste kildene for Heidegger, Sartre og moderne teologi.
      `, `
        Danmark under kong Christian 8. med voksende borgerskap, avvikling av eneveldet i 1849 og en statskirke i vekst. Kierkegaard angrep den i sine siste år som et forræderi mot kristendommen.
      `, `
        Hegelianismen dominerte København gjennom J.L. Heiberg og H.L. Martensen. Kierkegaard hørte Schellings forelesninger i Berlin i 1841 og ble skuffet. Tidsskrifter og satire, som bladet «Corsaren», formet det offentlige liv.
      `, [sep("https://plato.stanford.edu/entries/kierkegaard/"), snl("https://snl.no/S%C3%B8ren_Kierkegaard")]),

      "Viljesfilosofien": epoke("1819–1889", 1819, 1889, `
        Arthur Schopenhauer tok Kants skille og ga det nytt innhold: bak det vi ser, ligger ikke en ukjent ting, men vilje, et blindt strev uten mål. Derfor er livet lidelse. Kunst, særlig musikk, gir en pause, og medlidenhet og askese gir en vei ut. Han var den første store vestlige filosofen som leste Upanishadene og buddhismen med stor respekt, og fikk stor virkning på Wagner, Tolstoj og Freud.

        Friedrich Nietzsche begynte som tilhenger og ble motstander. Gud er død, og spørsmålet er hvordan vi kan leve med det. I «Zur Genealogie der Moral» viser han at moralen er oppstått av svakes ressentiment. Vilje til makt, evig gjenkomst og overmennesket er forsøk på å si ja til livet. Boken ble misbrukt av nazistene, ikke minst gjennom søsterens redigering, men han var fiende av både nasjonalisme og antisemittisme.
      `, `
        Etter 1848 kom en periode med skuffelse i Tyskland, og Schopenhauer fikk sent sin leserskare. Bismarcks rike ble grunnlagt i 1871. Sekularisering og industrialisering reiste spørsmålet om hva som kunne erstatte kristendommen.
      `, `
        Darwin og fysiologi satte mennesket i naturen. Klassisk filologi, Nietzsches eget fag, ga ham blikket for historiske tekster. Indiske tekster kom til Europa i latinsk oversettelse fra persisk.
      `, [sep("https://plato.stanford.edu/entries/schopenhauer/"), sep("https://plato.stanford.edu/entries/nietzsche/")]),

      "Hermeneutikken": epoke("ca. 1838–1911", 1838, 1911, `
        Hermeneutikk er læren om tolkning, opprinnelig av Bibelen og lover. F.D.E. Schleiermacher gjorde den til en allmenn kunst: å forstå en tekst er å sette delene i helheten og helheten i delene, og å forstå forfatteren bedre enn han selv gjorde. J.G. Droysen, historikeren, skilte mellom å forklare og å forstå.

        Wilhelm Dilthey gjorde skillet til et program. Naturen forklarer vi, sjelelivet forstår vi, slik han sa. Åndsvitenskapene har sin egen metode, og forståelse er noe vi gjør fordi vi selv er historiske vesener. Han kjempet hele livet med hvordan denne innsikten kunne unngå relativisme. Heidegger og Gadamer tok fatt på problemene han etterlot.
      `, `
        Det tyske keiserriket og universitetenes storhetstid. Staten støttet historie og filologi som nasjonsbyggende fag, med Leopold von Ranke og den historiske skolen. Religionens autoritet svekket seg.
      `, `
        Bibelkritikk, klassisk filologi og historisk kildekritikk ble metodisk skolert. Positivismen var utfordringen. Psykologien var under utvikling, og Dilthey forsøkte å bygge en forstående variant.
      `, [HERM, sep("https://plato.stanford.edu/entries/schleiermacher/"), sep("https://plato.stanford.edu/entries/dilthey/")]),

      "Fenomenologien": epoke("ca. 1874–1938", 1874, 1938, `
        Franz Brentano hevdet i 1874 at det særegne ved det mentale er *intensjonalitet*: bevissthet er alltid bevissthet om noe. Eleven Edmund Husserl gjorde dette til grunnlag for en ny filosofi. Fenomenologien skal gå «tilbake til sakene selv» og beskrive hvordan ting viser seg, ved å sette spørsmålet om deres virkelighet i parentes, *epokhé*. Filosofien kan dermed bli en streng vitenskap.

        Max Scheler brukte metoden på verdier og følelser. Edith Stein skrev om innlevelse, og møtte en grusom skjebne. Husserls sene begrep om livsverdenen, hverdagens selvfølgelige grunn, fikk stor betydning for samfunnsvitenskapene. Etterfølgerne Heidegger, Merleau-Ponty og Levinas forlot mye av programmet, men tenkte alle gjennom det.
      `, `
        Tyskland før og under første verdenskrig, og Weimarrepublikkens krise. Husserl var jødisk født og mistet retten til å bruke universitetsbiblioteket i 1933. Arkivet hans ble smuglet til Leuven i 1938 av en belgisk prest.
      `, `
        Psykologi og logikk var i strid om matematikkens grunnlag. Göttingen og München fikk tidlig egne fenomenologiske kretser. Studenter som Stein, Roman Ingarden og Martin Heidegger bidro til å spre metoden.
      `, [FEN, sep("https://plato.stanford.edu/entries/husserl/"), sep("https://plato.stanford.edu/entries/brentano/")]),

      "Eksistensfilosofien": epoke("ca. 1919–1950", 1919, 1950, `
        Martin Heidegger hevdet i «Sein und Zeit» (1927) at filosofien har glemt å spørre hva det vil si å være. Mennesket, *Dasein*, er ikke en tenkende ting, men et vesen som alltid allerede er kastet inn i verden, bruker ting, har andre rundt seg og vet at det skal dø. Egentlighet er å ta sin endelighet inn over seg. Boken forandret europeisk filosofi.

        Karl Jaspers kom til filosofien fra psykiatrien, og skrev om grensesituasjoner som død og skyld. Etter krigen tok han opp Tysklands skyld. Heidegger gikk inn i nazistpartiet som rektor i 1933, og hans «svarte hefter» har senere vist antisemittisme også i filosofien. Hvor mye dette rammer tenkningen, er et av fagets vanskeligste spørsmål.
      `, `
        Tyskland etter første verdenskrig, med Weimarrepublikkens krise, inflasjon og nazismens seier i 1933. Krigens massedød ga død og mening ny tyngde. Mange av Heideggers elever var jøder, og måtte flykte.
      `, `
        Kierkegaard ble oversatt til tysk og lest av teologer som Karl Barth og Rudolf Bultmann. Fenomenologien var det metodiske grunnlaget. Heideggers forelesninger i Marburg og Freiburg trakk en hel generasjon.
      `, [sep("https://plato.stanford.edu/entries/heidegger/"), sep("https://plato.stanford.edu/entries/jaspers/"), EKS]),

      "Eksistensialismen": epoke("1943–1960-tallet", 1943, 1969, `
        Eksistensialismen ble et ord i Paris etter frigjøringen i 1944. Jean-Paul Sartre hevdet i «L'Être et le Néant» (1943) at bevisstheten er en intethet, og at mennesket ikke har noen fast natur. Eksistensen kommer før essensen, så vi er helt ansvarlige for hva vi blir. Å late som noe annet er *mauvaise foi*, dårlig tro. Foredraget om eksistensialismen som humanisme gjorde ham kjent over hele verden.

        Simone de Beauvoir utviklet en etikk om tvetydighet og viste hvordan kvinner gjøres til Den andre. Albert Camus skrev om det absurde: livet har ingen mening, men Sisyfos må tenkes lykkelig. Maurice Merleau-Ponty hevdet at vi ikke er rene bevisstheter, men kropper i verden. Sartres vei mot marxismen førte til brudd med Camus og Merleau-Ponty.
      `, `
        Tysk okkupasjon av Frankrike, motstandskampen, frigjøringen og kolonikrigene i Indokina og Algerie. Den kalde krigen tvang fram politisk valg. Spørsmålet om medansvar og kollaborasjon ga friheten en konkret betydning.
      `, `
        Kafeene i Saint-Germain-des-Prés, tidsskriftet «Les Temps modernes» og litteraturen var like viktige som universitetet. Alexandre Kojèves forelesninger om Hegel i Paris på 1930-tallet hadde preget en hel generasjon.
      `, [EKS, sep("https://plato.stanford.edu/entries/sartre/"), sep("https://plato.stanford.edu/entries/beauvoir/"), sep("https://plato.stanford.edu/entries/merleau-ponty/")]),

      "Strukturalismen": epoke("ca. 1949–1970", 1949, 1970, `
        Språkforskeren Ferdinand de Saussure lærte at et språk er et system av forskjeller, der et tegn bare får mening i forhold til andre. Claude Lévi-Strauss tok metoden over til antropologien i 1949, og viste at slektskap og myter følger skjulte regler som ingen deltaker kjenner. Strukturen er det som forklarer, ikke hva folk selv mener å gjøre. Det ble et direkte angrep på Sartres frie subjekt.

        På 1960-tallet spredte tenkemåten seg. Roland Barthes leste reklame og mote som tegnsystemer, Jacques Lacan hevdet at det ubevisste er strukturert som et språk, og Louis Althusser leste Marx som vitenskapsmann uten subjekt. Bevegelsen ble kortvarig, men ga humaniora nye redskaper og satte spørsmålstegn ved det handlende mennesket.
      `, `
        Avkolonisering og antropologenes møte med andre samfunn. Algeriekrigen svekket tilliten til humanismen. Frankrikes universiteter vokste raskt fram mot opprøret i mai 1968.
      `, `
        Lingvistikk ble forbildet for humaniora, og informasjonsteori og matematiske modeller inspirerte. Psykoanalyse, marxisme og antropologi møttes i Paris, særlig ved École normale supérieure.
      `, [STRUKT, snl("https://snl.no/Ferdinand_de_Saussure"), snl("https://snl.no/Claude_L%C3%A9vi-Strauss")]),

      "Filosofisk hermeneutikk": epoke("1960–", 1960, null, `
        Hans-Georg Gadamer tok i «Wahrheit und Methode» (1960) opp Heideggers tanke om at forståelse ikke er en metode, men måten vi er til på. Vi møter alltid en tekst med fordommer, og de er ikke bare hindre, men vilkår for å forstå. Forståelse er en *horisontsammensmelting* mellom teksten og oss selv. Dermed er tradisjon ikke noe vi kan stille oss utenfor.

        Jürgen Habermas kritiserte Gadamer for å overse makt, og Paul Ricœur forsøkte å forene tolkning og kritikk, særlig gjennom fortelling og identitet. Charles Taylor brukte tenkningen i samfunnsfag: mennesker er selvtolkende dyr, og derfor kan vi ikke studeres som ting. Tradisjonen har vært viktig for medisin, jus, pedagogikk og teologi.
      `, `
        Det tyske etterkrigssamfunnet stilte spørsmål om tradisjon og autoritet etter nazismen. Studentopprøret skjerpet diskusjonen, og Gadamer-Habermas-debatten på 1960- og 70-tallet ble et hovedoppgjør.
      `, `
        Dannelsestradisjonen i humaniora møtte vitenskapsteori og krav om metode. Teorier om lesning og litteratur vokste, og Heideggers forelesninger om Aristoteles var et skjult utgangspunkt.
      `, [HERM, sep("https://plato.stanford.edu/entries/gadamer/"), sep("https://plato.stanford.edu/entries/ricoeur/")]),

      "Poststrukturalismen": epoke("1966–", 1966, null, `
        Rundt 1966 begynte franske tenkere å gjøre opp med både subjektet og strukturen. Michel Foucault viste at det vi kaller kunnskap, er formet av historiske regimer, og at makt ikke bare undertrykker, men skaper oss. Jacques Derrida hevdet med *dekonstruksjon* at vestlig filosofi hviler på ustabile motsetninger, og at mening stadig utsettes. Gilles Deleuze ville tenke forskjellen uten å underordne den noe felles.

        Julia Kristeva førte språkets kropp inn i teorien, og Jean-François Lyotard kalte det postmoderne en mistro mot de store fortellingene. Merkelappen er et produkt av lesere i USA. Bevegelsen har gjennomsyret humaniora og er blitt kritisert for dunkelhet og relativisme, ikke minst av analytiske filosofer og Habermas.
      `, `
        Mai 1968 i Frankrike, skuffelse over kommunismen og vekst i minoritetsbevegelsene. Foucault arbeidet i fengselsaksjoner. Etter hvert ble teoriene sentrale i amerikanske universiteter, gjerne i litteraturfagene.
      `, `
        Nietzsche og Heidegger ble lest på ny mot Hegel og Sartre. Lingvistikk, psykoanalyse og vitenskapshistorie ved Georges Canguilhem ga redskapene. Universitetet Vincennes, grunnlagt i 1968, ble et sentrum.
      `, [POST, sep("https://plato.stanford.edu/entries/foucault/"), sep("https://plato.stanford.edu/entries/derrida/"), sep("https://plato.stanford.edu/entries/deleuze/")]),

      "Spekulativ realisme": epoke("2006–", 2006, null, `
        Quentin Meillassoux hevdet i «Après la finitude» (2006) at filosofien siden Kant har holdt seg fanget i *korrelasjonisme*: tanken om at vi bare har tilgang til forholdet mellom tanke og verden, aldri til verden selv. Men vitenskapen sier mye om tiden før mennesket fantes. Hvordan er det mulig? Han argumenterer for at bare én ting er nødvendig, nemlig at alt er kontingent.

        På et møte i London i 2007 ble navnet spekulativ realisme lansert, og gruppen gikk snart hver til sitt. Graham Harman utviklet en objektorientert ontologi, og Karen Barad knyttet kvantefysikk og feministisk teori sammen i en ny materialisme. Interessen for klima og det ikke-menneskelige har gjort retningen viktig også for kunst og humaniora. Hvor mye den står seg som filosofi, er ennå åpent.
      `, `
        Klimakrisen og menneskets rolle i det som kalles antropocen. Internett spredte debatten på blogger før den nådde tidsskriftene. Skuffelse over det språklige og det sosialkonstruktivistiske var også del av bakgrunnen.
      `, `
        Kognitiv vitenskap og fysikk satte nye spørsmål for filosofien. Tidsskriftet «Collapse» og nye forlag spilte en viktig rolle. Bruno Latours analyse av nettverk av ting og mennesker påvirket flere av dem.
      `, [bok("Meillassoux, Quentin. Après la finitude. Seuil, 2006."), bok("Bryant, Levi, Nick Srnicek og Graham Harman (red.). The Speculative Turn. re.press, 2011."), bok("Barad, Karen. Meeting the Universe Halfway. Duke University Press, 2007.")]),
    },
  },

  edgeDescriptions: {
    kantianismen__romantikken: strek(`Romantikerne tok Kants grenser alvorlig: hvis det absolutte ikke kan vites, må det antydes. Herder og Hamann var også Kants tidlige elever og kritikere.`),
    opplysningen__romantikken: strek(`Romantikken er en reaksjon på opplysningens tro på allmenn fornuft og framskritt, men Rousseau og Lessing var også kilder. Skillet er derfor ikke rent.`),
    romantikken__eksistenstenkning: strek(`Kierkegaards doktoravhandling om ironien tar et oppgjør med romantikerne, særlig Friedrich Schlegel. Den estetiske livsformen i «Enten/Eller» er modellert etter dem.`),
    tyskidealisme__eksistenstenkning: strek(`Kierkegaard skrev mot Hegel: et system kan ikke romme den enkelte. Hans oppgjør lånte likevel mye av Hegels dialektiske form.`),
    kantianismen__viljesfilosofien: strek(`Schopenhauer så seg selv som Kants egentlige arvtaker og hevdet at han hadde avslørt hva tingen i seg selv er: viljen.`),
    indisk__viljesfilosofien: strek(`Schopenhauer leste Upanishadene i latinsk oversettelse (Oupnekhat) og kalte dem livets trøst. Læren om slør og lidelse ble viktig, og han hadde en buddhafigur på skrivebordet.`),
    tyskidealisme__viljesfilosofien: strek(`Schopenhauer hatet Hegel og la sine forelesninger i Berlin på samme tidspunkt som ham, men ingen kom. Nietzsche fortsatte kritikken av systemer.`),
    romantikken__hermeneutikken: strek(`F.D.E. Schleiermacher arbeidet i romantikkens krets og oversatte Platon med Friedrich Schlegel. Forståelseslæren vokste ut av filologien og romantikkens syn på uttrykk.`),
    kantianismen__fenomenologien: strek(`Husserls senere transcendentale vending minner om Kant, og han tok det selv opp. Kritikk fra Marburg-skolen førte ham i den retningen.`),
    aristotelismen__fenomenologien: strek(`Brentano var aristoteliker og skrev om Aristoteles' begrep om væren. Begrepet om intensjonalitet stammer fra skolastikkens tolkninger av ham.`),
    positivismen__fenomenologien: strek(`Husserl angrep psykologismen, den positivistiske tanken at logikken bygger på psykologi, i «Logische Untersuchungen» fra 1900.`),
    fenomenologien__eksistensfilosofien: strek(`Heidegger var Husserls assistent og etterfulgte ham i Freiburg. «Sein und Zeit» er tilegnet læreren, men snur prosjektet fra bevissthet til væren.`),
    eksistenstenkning__eksistensfilosofien: strek(`Angst, død og den enkelte kommer fra Kierkegaard, gjerne uten at Heidegger sier det. Jaspers bruker ham åpent.`),
    viljesfilosofien__eksistensfilosofien: strek(`Heidegger holdt store forelesninger om Nietzsche fra 1936 og så ham som metafysikkens siste skikkelse. Jaspers skrev også en bok om ham.`),
    eksistensfilosofien__eksistensialismen: strek(`Sartre leste Husserl og Heidegger i Berlin i 1933–1934. Tittelen «L'Être et le Néant» svarer på «Sein und Zeit». Heidegger tok avstand i «Brev om humanismen» (1947).`),
    marxismen__strukturalismen: strek(`Lévi-Strauss nevner Marx som en av sine tre «elskerinner», og Althusser leste marxismen som en struktur uten subjekt.`),
    eksistensialismen__strukturalismen: strek(`Det siste kapittelet i Lévi-Strauss' «La Pensée sauvage» (1962) er et direkte angrep på Sartres historiesyn. Etter dette tapte eksistensialismen raskt sin plass i Frankrike.`),
    hermeneutikken__filhermeneutikk: strek(`Gadamer bygger videre på Schleiermacher og Dilthey, men kritiserer dem for å ville gjøre forståelse til metode etter naturvitenskapens mønster.`),
    eksistensfilosofien__filhermeneutikk: strek(`Gadamer tok habilitasjon hos Heidegger i Marburg. Heideggers analyse av forståelse i «Sein und Zeit» er utgangspunktet for hele «Wahrheit und Methode».`),
    eksistensfilosofien__poststruktur: strek(`Derrida bygger ordet dekonstruksjon på Heideggers *Destruktion*, og Foucault kalte Heidegger avgjørende for sin egen filosofi.`),
    viljesfilosofien__poststruktur: strek(`Nietzsches genealogi er Foucaults direkte metode. Deleuzes bok om Nietzsche fra 1962 ble viktig for en hel generasjon som vendte seg bort fra Hegel.`),
    strukturalismen__poststruktur: strek(`Derridas foredrag i Baltimore i 1966 viste at strukturen selv ikke kan ha et fast sentrum. De som kom etter, hadde selv vært lærlinger hos strukturalistene.`),
    poststruktur__spekulativ: strek(`Deleuze er en viktig bakgrunn for den nye materialismen, og Latours kritikk av det moderne skillet mellom natur og kultur peker i samme retning.`),
    fenomenologien__spekulativ: strek(`Meillassoux angriper alt som bygger på bevissthetens tilgang til verden, fra Kant via Husserl til Heidegger. Harman bygger samtidig på Heideggers verktøyanalyse.`),
  },

  artists: [
    // --- Romantikken ---
    f("J.G. Herder", [1744, 1803], "mann", ["Logikk og språk", "Estetikk"], ["Romantikken"], ["Hermeneutisk sirkel"], [1767, 1803], "Königsberg, Riga og Weimar", `
      Tysk filosof og prest, elev av Kant og Johann Georg Hamann. Språk og tanke kan ikke skilles, og hver kultur har sin egen verdi og må forstås innenfra. Han samlet folkeviser og ble en stamfar for filologien, antropologien og nasjonalismen, selv om han selv avviste rangering av folk. Han hadde stor innflytelse på den unge Goethe. Mot Kants kritikk svarte han med bøker som i dag leses mer enn da de kom.
    `, [["Abhandlung über den Ursprung der Sprache", 1772], ["Ideen zur Philosophie der Geschichte der Menschheit", 1784]], [ROM]),
    f("Novalis", [1772, 1801], "mann", ["Estetikk", "Metafysikk"], ["Romantikken"], [], [1795, 1801], "Weissenfels og Freiberg", `
      Tysk dikter og filosof, født Friedrich von Hardenberg, utdannet som gruveingeniør. Han leste Fichte kritisk og hevdet at jeget aldri kan fange seg selv. Poesi er den ekte filosofien, og verden må romantiseres. Dødsfallet til forloveden Sophie von Kühn inspirerte «Hymnen an die Nacht». Han døde av tuberkulose 28 år gammel. Fragmentene hans er blitt filosofiske klassikere.
    `, [["Blüthenstaub", 1798], ["Hymnen an die Nacht", 1800]], [sep("https://plato.stanford.edu/entries/novalis/")]),
    f("Friedrich Schlegel", [1772, 1829], "mann", ["Estetikk", "Metafysikk"], ["Romantikken"], [], [1797, 1829], "Jena, Paris og Wien", `
      Tysk kritiker og filosof, som sammen med broren August Wilhelm grunnla tidsskriftet «Athenäum» i 1798 og gjorde Jena til sentrum for den tidlige romantikken. Han gjorde fragmentet og ironien til filosofiske former: all tenkning er uavsluttet. Han var en pioner i sanskritstudiet. Senere ble han katolikk og gikk i tjeneste hos Metternich. Ordet romantisk i moderne betydning stammer delvis fra ham.
    `, [["Athenäums-Fragmente", 1798], ["Lucinde", 1799], ["Über die Sprache und Weisheit der Indier", 1808]], [sep("https://plato.stanford.edu/entries/schlegel/")]),
    f("F.D.E. Schleiermacher", [1768, 1834], "mann", ["Religionsfilosofi", "Logikk og språk"], ["Romantikken", "Hermeneutikken"], ["Hermeneutisk sirkel"], [1799, 1834], "Breslau og Berlin", `
      Tysk teolog og filosof, regnet som den moderne protestantiske teologiens far og hermeneutikkens grunnlegger. Religion er ikke en lære eller moral, men en følelse av absolutt avhengighet. Forståelse er en kunst: delene må ses i lys av helheten og omvendt. Hans oversettelse av Platon står fortsatt. Han var en av dem som planla Universitetet i Berlin.
    `, [["Über die Religion", 1799], ["Der christliche Glaube", 1821], ["Hermeneutik und Kritik", 1838]], [sep("https://plato.stanford.edu/entries/schleiermacher/")]),

    // --- Eksistenstenkningen ---
    f("Søren Kierkegaard", [1813, 1855], "mann", ["Religionsfilosofi", "Etikk"], ["Eksistenstenkningen"], ["Autentisitet", "Sannhet", "Fri vilje"], [1841, 1855], "København", `
      Dansk filosof og teolog, sønn av en rik og tungsindig handelsmann. Han brøt forlovelsen med Regine Olsen og skrev en strøm av bøker under ulike forfatternavn. Livet har tre stadier, og overgangen til troen er et sprang. Angst er frihetens svimmelhet, og sannheten ligger i hvordan den tilegnes. Han angrep kirken i sine siste år og døde 42 år gammel. Eksistensfilosofi og moderne teologi bygger på ham.
    `, [["Enten/Eller", 1843], ["Frygt og Bæven", 1843], ["Begrebet Angest", 1844], ["Afsluttende uvidenskabelig Efterskrift", 1846], ["Sygdommen til Døden", 1849]], [sep("https://plato.stanford.edu/entries/kierkegaard/"), snl("https://snl.no/S%C3%B8ren_Kierkegaard")]),

    // --- Viljesfilosofien ---
    f("Arthur Schopenhauer", [1788, 1860], "mann", ["Metafysikk", "Estetikk"], ["Viljesfilosofien"], ["Fenomen og ting i seg selv", "Det skjønne og det sublime", "Tomhet"], [1819, 1860], "Danzig, Berlin og Frankfurt", `
      Tysk filosof, sønn av en rik handelsmann og forfatteren Johanna Schopenhauer. Verden er forestilling og blind vilje, og derfor er livet lidelse. Kunsten, og særlig musikken, gir en pause, mens medlidenhet er moralens grunnlag. Han var tidlig ute med å se Vesten i lys av indisk tenkning. Hovedverket ble ignorert i over tretti år. Han var uvanlig kvinnefiendtlig, men en meget god stilist.
    `, [["Die Welt als Wille und Vorstellung", 1819], ["Die beiden Grundprobleme der Ethik", 1841], ["Parerga und Paralipomena", 1851]], [sep("https://plato.stanford.edu/entries/schopenhauer/")]),
    f("Friedrich Nietzsche", [1844, 1900], "mann", ["Etikk", "Estetikk"], ["Viljesfilosofien"], ["Sannhet", "Makt", "Dyd"], [1872, 1889], "Röcken, Basel og Torino", `
      Tysk filosof og filolog, professor i Basel som 24-åring. Etter noen år ga han opp stillingen på grunn av sykdom og levde ensomt i Sveits og Italia. Gud er død, og moralen er blitt til av svakes ressentiment. Vilje til makt og evig gjenkomst er svar på nihilismen. I Torino i 1889 brøt han sammen og var syk til han døde. Søsteren redigerte etterlatenskapene til nazistenes bruk. Han har preget nesten all kontinental tenkning etter ham.
    `, [["Die Geburt der Tragödie", 1872], ["Also sprach Zarathustra", 1883], ["Jenseits von Gut und Böse", 1886], ["Zur Genealogie der Moral", 1887]], [sep("https://plato.stanford.edu/entries/nietzsche/"), snl("https://snl.no/Friedrich_Nietzsche")]),

    // --- Hermeneutikken ---
    f("J.G. Droysen", [1808, 1884], "mann", ["Vitenskapsfilosofi"], ["Hermeneutikken"], ["Hermeneutisk sirkel"], [1833, 1884], "Berlin", `
      Tysk historiker, kjent for å ha laget begrepet hellenisme om tiden etter Aleksander den store. Forelesningene hans om historiens teori, publisert som «Grundriss der Historik», skiller metodene: filosofene erkjenner, fysikerne forklarer og historikerne forstår. Han var politisk aktiv, deltok i parlamentet i Frankfurt i 1848, og ga Preussen en framtredende rolle i sine bøker.
    `, [["Geschichte des Hellenismus", 1836], ["Grundriss der Historik", 1868]], [HERM]),
    f("Wilhelm Dilthey", [1833, 1911], "mann", ["Vitenskapsfilosofi"], ["Hermeneutikken"], ["Hermeneutisk sirkel", "Erfaring"], [1867, 1911], "Biebrich, Basel og Berlin", `
      Tysk filosof, professor i Berlin. Han ville gi åndsvitenskapene et grunnlag, slik Kant hadde gitt naturvitenskapen det. Naturen forklarer vi, sjelelivet forstår vi. Historien forstås ut fra det levde liv, *Erlebnis*. Han ble ikke ferdig med noen av sine store prosjekter, og mye ble utgitt etter hans død. Heidegger og Gadamer bygde på ham, og også sosiologien hos Max Weber er nær.
    `, [["Einleitung in die Geisteswissenschaften", 1883], ["Der Aufbau der geschichtlichen Welt in den Geisteswissenschaften", 1910]], [sep("https://plato.stanford.edu/entries/dilthey/")]),

    // --- Fenomenologien ---
    f("Franz Brentano", [1838, 1917], "mann", ["Metafysikk", "Erkjennelsesteori"], ["Fenomenologien"], ["Intensjonalitet", "Bevissthet"], [1874, 1917], "Würzburg, Wien og Firenze", `
      Tysk-østerriksk filosof og tidligere katolsk prest, som forlot kirken etter vedtaket om pavens ufeilbarlighet i 1870. «Psychologie vom empirischen Standpunkte» gjorde *intensjonalitet* til det særegne ved det mentale. Forelesningene i Wien samlet Husserl, Meinong, Twardowski og Freud, og både analytisk filosofi og fenomenologi kan spores tilbake hit. Han ble blind sent i livet.
    `, [["Psychologie vom empirischen Standpunkte", 1874], ["Vom Ursprung sittlicher Erkenntnis", 1889]], [sep("https://plato.stanford.edu/entries/brentano/")]),
    f("Edmund Husserl", [1859, 1938], "mann", ["Erkjennelsesteori", "Metafysikk"], ["Fenomenologien"], ["Intensjonalitet", "Bevissthet", "Erfaring", "Sannhet"], [1900, 1938], "Prossnitz, Göttingen og Freiburg", `
      Østerriksk-tysk filosof, født i en jødisk familie i Mähren, fenomenologiens grunnlegger. Han begynte som matematiker. Filosofien skal gå tilbake til sakene selv og beskrive bevisstheten etter å ha satt verden i parentes. «Die Krisis», hans siste verk, knytter Europas krise til en vitenskap som har mistet kontakten med livsverdenen. Nazistene utestengte ham fra universitetet, og han etterlot seg rundt 40 000 sider notater.
    `, [["Logische Untersuchungen", 1900], ["Ideen", 1913], ["Cartesianische Meditationen", 1931], ["Die Krisis der europäischen Wissenschaften", 1936]], [sep("https://plato.stanford.edu/entries/husserl/")]),
    f("Max Scheler", [1874, 1928], "mann", ["Etikk", "Religionsfilosofi"], ["Fenomenologien"], ["Dyd", "Anerkjennelse"], [1899, 1928], "München og Köln", `
      Tysk filosof, en av de mest kjente i Tyskland i Weimartiden. Mot Kants formelle etikk hevdet han at verdier kan oppfattes direkte, gjennom følelser, og er ordnet i en rang. Han skrev om sympati, ressentiment og menneskets plass i kosmos, og la grunnlaget for den filosofiske antropologien. Han var jødisk av mor og katolsk en periode, og skriftene hans ble forbudt av nazistene.
    `, [["Der Formalismus in der Ethik", 1913], ["Wesen und Formen der Sympathie", 1923], ["Die Stellung des Menschen im Kosmos", 1928]], [sep("https://plato.stanford.edu/entries/scheler/")]),
    f("Edith Stein", [1891, 1942], "kvinne", ["Metafysikk", "Religionsfilosofi"], ["Fenomenologien"], ["Bevissthet", "Kjønn"], [1917, 1942], "Breslau, Freiburg og Köln", `
      Tysk filosof, født i en jødisk familie, Husserls assistent og redaktør. Doktoravhandlingen hennes om innlevelse er en klassiker. Hun ble nektet habilitasjon fordi hun var kvinne, og skrev selv brev til ministeren om det. Hun ble katolikk i 1922 og karmelittnonne i 1933. Hun forsøkte å forene fenomenologi og Thomas Aquinas. Hun ble ført fra Nederland til Auschwitz og drept i 1942, og ble helgenkåret i 1998.
    `, [["Zum Problem der Einfühlung", 1917], ["Endliches und ewiges Sein", 1950]], [sep("https://plato.stanford.edu/entries/stein/")]),

    // --- Eksistensfilosofien ---
    f("Martin Heidegger", [1889, 1976], "mann", ["Metafysikk"], ["Eksistensfilosofien"], ["Væren", "Autentisitet", "Hermeneutisk sirkel", "Sannhet"], [1919, 1976], "Messkirch, Marburg og Freiburg", `
      Tysk filosof, kanskje den mest innflytelsesrike og mest omstridte på 1900-tallet. «Sein und Zeit» spør etter meningen med væren og beskriver mennesket som *Dasein*, kastet inn i verden og på vei mot døden. Sen tenkning handler om teknikk og språk. Som rektor i Freiburg i 1933 gikk han inn i nazistpartiet og forble medlem, og han angret aldri offentlig. De svarte heftene viser antisemittisme. Elevene hans inkluderer Arendt, Gadamer, Marcuse og Levinas.
    `, [["Sein und Zeit", 1927], ["Was ist Metaphysik?", 1929], ["Brief über den Humanismus", 1947], ["Die Frage nach der Technik", 1953]], [sep("https://plato.stanford.edu/entries/heidegger/"), snl("https://snl.no/Martin_Heidegger")]),
    f("Karl Jaspers", [1883, 1969], "mann", ["Metafysikk", "Politisk filosofi"], ["Eksistensfilosofien"], ["Autentisitet"], [1913, 1969], "Oldenburg, Heidelberg og Basel", `
      Tysk psykiater og filosof, kjent først for «Allgemeine Psychopathologie». Han skrev om grensesituasjoner, døden, skylden og striden, der vi møter det som overskrider oss. Kona var jødisk, og han ble fratatt stillingen i 1937. Etter krigen skrev han om tysk skyld i «Die Schuldfrage» og innførte begrepet aksetiden om perioden rundt 500 f.Kr. Arendt var hans elev og venn livet ut.
    `, [["Allgemeine Psychopathologie", 1913], ["Philosophie", 1932], ["Die Schuldfrage", 1946], ["Vom Ursprung und Ziel der Geschichte", 1949]], [sep("https://plato.stanford.edu/entries/jaspers/")]),

    // --- Eksistensialismen ---
    f("Jean-Paul Sartre", [1905, 1980], "mann", ["Metafysikk", "Politisk filosofi"], ["Eksistensialismen"], ["Autentisitet", "Frihet", "Anerkjennelse", "Bevissthet"], [1938, 1980], "Paris", `
      Fransk filosof, romanforfatter og dramatiker, den mest kjente intellektuelle i sin tid. Eksistensen kommer før essensen: vi er dømt til å være frie og er ansvarlige for det vi blir. «L'Être et le Néant» ble skrevet under krigen, og «La Nausée» viser det hele i romanform. Han sto nær kommunistene i lange perioder, støttet Algeries frigjøring og avslo Nobelprisen i 1964. Livet levde han med Simone de Beauvoir.
    `, [["La Nausée", 1938], ["L'Être et le Néant", 1943], ["L'existentialisme est un humanisme", 1946], ["Critique de la raison dialectique", 1960]], [sep("https://plato.stanford.edu/entries/sartre/"), snl("https://snl.no/Jean-Paul_Sartre")]),
    f("Simone de Beauvoir", [1908, 1986], "kvinne", ["Etikk", "Politisk filosofi"], ["Eksistensialismen", "Feministisk filosofi"], ["Kjønn", "Autentisitet", "Frihet"], [1944, 1986], "Paris", `
      Fransk filosof og forfatter. «Le Deuxième Sexe» (1949) viser hvordan kvinnen gjøres til Den andre, og er grunnboken for moderne feminisme. «Pour une morale de l'ambiguïté» gir eksistensialismen en etikk. Lenge ble hun lest som Sartres elev, men forskere har vist at hun påvirket ham minst like mye. «Les Mandarins» fikk Goncourt-prisen i 1954. Hun skrev også om alderdom, et da nesten uberørt filosofisk tema.
    `, [["Pour une morale de l'ambiguïté", 1947], ["Le Deuxième Sexe", 1949], ["Les Mandarins", 1954], ["La Vieillesse", 1970]], [sep("https://plato.stanford.edu/entries/beauvoir/")]),
    f("Albert Camus", [1913, 1960], "mann", ["Etikk", "Politisk filosofi"], ["Eksistensialismen"], ["Frihet"], [1942, 1960], "Algerie og Paris", `
      Fransk forfatter og filosof, oppvokst i fattigdom i Algerie. «Le Mythe de Sisyphe» sier at det eneste alvorlige filosofiske spørsmålet er selvmordet: livet er absurd, men opprør er et svar. «L'Homme révolté» kritiserte revolusjonær vold, noe som førte til brudd med Sartre i 1952. Han fikk Nobelprisen i litteratur i 1957 og døde i en bilulykke. Selv avviste han merkelappen eksistensialist.
    `, [["L'Étranger", 1942], ["Le Mythe de Sisyphe", 1942], ["La Peste", 1947], ["L'Homme révolté", 1951]], [sep("https://plato.stanford.edu/entries/camus/")]),
    f("Maurice Merleau-Ponty", [1908, 1961], "mann", ["Metafysikk", "Estetikk"], ["Eksistensialismen"], ["Kropp og sjel", "Bevissthet", "Erfaring"], [1942, 1961], "Lyon og Paris", `
      Fransk filosof, professor ved Collège de France. «Phénoménologie de la perception» (1945) hevder at vi ikke er rene bevisstheter som styrer en kropp, men er kropper i verden. Det er kroppen som forstår. Han var med på å redigere «Les Temps modernes» til bruddet med Sartre. Han har fått stor betydning for dagens kognitive vitenskap og forskning på kroppen, også for sykepleie og kunst.
    `, [["La Structure du comportement", 1942], ["Phénoménologie de la perception", 1945], ["Le Visible et l'invisible", 1964]], [sep("https://plato.stanford.edu/entries/merleau-ponty/")]),

    // --- Strukturalismen ---
    f("Ferdinand de Saussure", [1857, 1913], "mann", ["Logikk og språk"], ["Strukturalismen"], ["Mening og referanse"], [1881, 1913], "Genève og Paris", `
      Sveitsisk språkforsker, en av grunnleggerne av moderne lingvistikk. «Cours de linguistique générale», satt sammen av elever etter hans død, beskriver språket som et system av tegn, der hvert tegn er vilkårlig og får verdi gjennom forskjellen fra de andre. Skillet mellom betegner og betegnet, og mellom *langue* og *parole*, ble grunnlag for strukturalismen. Han ga selv ut lite.
    `, [["Cours de linguistique générale", 1916]], [snl("https://snl.no/Ferdinand_de_Saussure")]),
    f("Claude Lévi-Strauss", [1908, 2009], "mann", ["Vitenskapsfilosofi"], ["Strukturalismen"], ["Mening og referanse"], [1949, 2009], "Brussel, Paris og New York", `
      Fransk antropolog av jødisk familie, som studerte urfolk i Brasil og flyktet til New York i 1941. Der lærte han lingvistikk av Roman Jakobson. Slektskap og myter følger strukturer som deltakerne ikke selv kjenner. Hans «Tristes tropiques» ble en litterær suksess. Han angrep Sartres historiesyn og hevdet at «ville» tenker like logisk som andre. Han ble over 100 år gammel.
    `, [["Les Structures élémentaires de la parenté", 1949], ["Tristes tropiques", 1955], ["Anthropologie structurale", 1958], ["La Pensée sauvage", 1962]], [snl("https://snl.no/Claude_L%C3%A9vi-Strauss")]),
    f("Roland Barthes", [1915, 1980], "mann", ["Estetikk", "Logikk og språk"], ["Strukturalismen", "Poststrukturalismen"], ["Mening og referanse"], [1953, 1980], "Paris", `
      Fransk litteraturteoretiker og kritiker, professor ved Collège de France. «Mythologies» leser bryting, biff og reklame som tegn som gjør det historiske naturlig. Essayet «La mort de l'auteur» (1967) flytter meningen fra forfatteren til leseren. Bøkene hans gikk fra strukturalisme til mer personlige former, som «Fragments d'un discours amoureux». Han ble påkjørt av en varebil i Paris og døde av skadene.
    `, [["Mythologies", 1957], ["La mort de l'auteur", 1967], ["La Chambre claire", 1980]], [snl("https://snl.no/Roland_Barthes")]),
    f("Jacques Lacan", [1901, 1981], "mann", ["Metafysikk"], ["Strukturalismen"], ["Mening og referanse", "Bevissthet"], [1936, 1981], "Paris", `
      Fransk psykoanalytiker, som ville vende tilbake til Freud med hjelp av språkvitenskapen. Det ubevisste er strukturert som et språk. Speilstadiet viser hvordan jeget dannes gjennom et bilde utenfra. Han brøt med det internasjonale psykoanalytiske miljøet og grunnla sin egen skole. Seminarene hans samlet Paris' intellektuelle. Stilen er kjent for å være svært krevende, og teorien er sterkt kritisert.
    `, [["Écrits", 1966], ["Le Séminaire", 1973]], [sep("https://plato.stanford.edu/entries/lacan/")]),
    f("Louis Althusser", [1918, 1990], "mann", ["Politisk filosofi"], ["Strukturalismen"], ["Makt"], [1965, 1980], "Paris", `
      Fransk marxistisk filosof ved École normale supérieure, lærer for Foucault og Derrida. Han leste Marx som en vitenskapsmann som brøt med sin unge humanisme. Ideologi virker ved å «kalle på» oss som subjekter, slik at vi tror vi velger fritt. Han led av alvorlige psykiske lidelser, og i 1980 kvalte han kona, Hélène Rytmann. Han ble erklært utilregnelig, og levde tilbaketrukket resten av livet.
    `, [["Pour Marx", 1965], ["Lire le Capital", 1965], ["Idéologie et appareils idéologiques d'État", 1970]], [sep("https://plato.stanford.edu/entries/althusser/")]),

    // --- Filosofisk hermeneutikk ---
    f("Hans-Georg Gadamer", [1900, 2002], "mann", ["Erkjennelsesteori", "Estetikk"], ["Filosofisk hermeneutikk"], ["Hermeneutisk sirkel", "Sannhet"], [1960, 2002], "Marburg, Leipzig og Heidelberg", `
      Tysk filosof, elev av Heidegger, og den som ga den filosofiske hermeneutikken dens form. «Wahrheit und Methode» (1960) hevder at forståelse ikke er en metode, men måten vi er på, og at fordommene våre er vilkår for å forstå. Kunst, historie og språk gir oss sannhet på sin egen måte. Han unngikk å ta side under nazismen, noe som er blitt diskutert. Han ble 102 år gammel.
    `, [["Wahrheit und Methode", 1960], ["Die Aktualität des Schönen", 1977]], [sep("https://plato.stanford.edu/entries/gadamer/")]),
    f("Paul Ricœur", [1913, 2005], "mann", ["Etikk", "Religionsfilosofi"], ["Filosofisk hermeneutikk"], ["Hermeneutisk sirkel"], [1950, 2005], "Valence, Paris og Chicago", `
      Fransk filosof, foreldreløs etter første verdenskrig og krigsfange under den andre, der han oversatte Husserl. Han søkte å forene hermeneutikk, fenomenologi og analytisk filosofi. Identitet er en fortelling, og vi forstår oss selv gjennom tekster. Det er forskjell på mistankens hermeneutikk hos Marx, Nietzsche og Freud, og tillitens. Han var dekan i Nanterre under opprøret i 1968, og underviste i Chicago i mange år.
    `, [["De l'interprétation", 1965], ["La Métaphore vive", 1975], ["Temps et récit", 1983], ["Soi-même comme un autre", 1990]], [sep("https://plato.stanford.edu/entries/ricoeur/")]),
    f("Charles Taylor", [1931, null], "mann", ["Politisk filosofi", "Religionsfilosofi"], ["Filosofisk hermeneutikk"], ["Anerkjennelse", "Autentisitet"], [1964, null], "Montreal og Oxford", `
      Kanadisk filosof ved McGill University, og en tid politiker. Mennesker er selvtolkende dyr, og derfor kan vi ikke studeres som ting. «Sources of the Self» viser hvordan det moderne selvet er blitt til. Essayet om anerkjennelsens politikk er sentralt i debatten om multikulturalisme. «A Secular Age» spør hvordan det ble mulig ikke å tro på Gud. Han er også katolikk og leder av en kommisjon om integrering i Québec.
    `, [["Hegel", 1975], ["Sources of the Self", 1989], ["The Politics of Recognition", 1992], ["A Secular Age", 2007]], [snl("https://snl.no/Charles_Taylor"), HERM]),

    // --- Poststrukturalismen ---
    f("Michel Foucault", [1926, 1984], "mann", ["Politisk filosofi", "Vitenskapsfilosofi"], ["Poststrukturalismen"], ["Makt", "Sannhet", "Kjønn"], [1961, 1984], "Poitiers, Tunis og Paris", `
      Fransk filosof og idéhistoriker, professor ved Collège de France. Han viste hvordan galskap, sykdom, kriminalitet og seksualitet er blitt objekter for kunnskap, og at kunnskap og makt henger sammen. «Surveiller et punir» beskriver det moderne disiplinsamfunnet. Mennesket selv er en sen oppfinnelse. Han var aktiv i fengselskamp og skrev om den iranske revolusjonen, til stor kritikk. Han døde av aids, en av de første kjente i Frankrike.
    `, [["Histoire de la folie", 1961], ["Les Mots et les choses", 1966], ["Surveiller et punir", 1975], ["Histoire de la sexualité", 1976]], [sep("https://plato.stanford.edu/entries/foucault/"), snl("https://snl.no/Michel_Foucault")]),
    f("Jacques Derrida", [1930, 2004], "mann", ["Logikk og språk", "Metafysikk"], ["Poststrukturalismen"], ["Mening og referanse", "Væren"], [1967, 2004], "El Biar i Algerie og Paris", `
      Fransk filosof, født i en jødisk familie i Algerie. Med tre bøker i 1967 lanserte han *dekonstruksjon*: vestlig filosofi hviler på motsetninger, som tale og skrift, der den ene settes over den andre, men tekstene selv undergraver dem. Mening utsettes alltid, *différance*. Da Cambridge ville gi ham æresdoktorgrad i 1992, protesterte en rekke analytiske filosofer. Sent skrev han om rettferdighet, gjestfrihet og Marx.
    `, [["De la grammatologie", 1967], ["L'Écriture et la différence", 1967], ["La Voix et le phénomène", 1967], ["Spectres de Marx", 1993]], [sep("https://plato.stanford.edu/entries/derrida/")]),
    f("Gilles Deleuze", [1925, 1995], "mann", ["Metafysikk", "Politisk filosofi"], ["Poststrukturalismen"], ["Væren", "Makt"], [1953, 1995], "Paris og Vincennes", `
      Fransk filosof, som skrev studier av Hume, Spinoza, Nietzsche og Bergson. «Différence et répétition» ser forskjellen som mer grunnleggende enn det identiske. Med psykoanalytikeren Félix Guattari skrev han «L'Anti-Œdipe» og «Mille plateaux», som angriper psykoanalysen og tenker i nettverk i stedet for trær. Han skrev også om film. Syk av lungesykdom tok han sitt eget liv i 1995.
    `, [["Nietzsche et la philosophie", 1962], ["Différence et répétition", 1968], ["L'Anti-Œdipe", 1972], ["Mille plateaux", 1980]], [sep("https://plato.stanford.edu/entries/deleuze/")]),
    f("Jean-François Lyotard", [1924, 1998], "mann", ["Politisk filosofi", "Estetikk"], ["Poststrukturalismen"], ["Det skjønne og det sublime", "Sannhet"], [1971, 1998], "Algerie, Paris og USA", `
      Fransk filosof, først marxist i gruppen Socialisme ou Barbarie. «La Condition postmoderne» (1979), skrevet som en rapport for Québecs regjering, beskriver det postmoderne som mistro mot de store fortellingene om framskritt og frigjøring. Boken ga ordet internasjonal utbredelse. «Le Différend» handler om tvister uten felles regler. Han tok også opp Kants begrep om det sublime i kunsten.
    `, [["La Condition postmoderne", 1979], ["Le Différend", 1983]], [sep("https://plato.stanford.edu/entries/lyotard/")]),
    f("Julia Kristeva", [1941, null], "kvinne", ["Logikk og språk", "Estetikk"], ["Poststrukturalismen", "Feministisk filosofi"], ["Kjønn", "Mening og referanse"], [1969, null], "Sliven og Paris", `
      Bulgarsk-fransk filosof, psykoanalytiker og forfatter, som kom til Paris i 1965. Hun introduserte begrepet *intertekstualitet* og skilte mellom språkets symbolske og semiotiske sider, der det siste er knyttet til kroppen og moren. «Pouvoirs de l'horreur» handler om det utstøtte. Hun har skrevet om Hannah Arendt, Melanie Klein og Colette. Påstander fra 2018 om at hun skal ha vært informant for bulgarsk etterretning, har hun selv avvist.
    `, [["Sèméiôtikè", 1969], ["La Révolution du langage poétique", 1974], ["Pouvoirs de l'horreur", 1980]], [snl("https://snl.no/Julia_Kristeva")]),

    // --- Spekulativ realisme ---
    f("Quentin Meillassoux", [1967, null], "mann", ["Metafysikk", "Erkjennelsesteori"], ["Spekulativ realisme"], ["Fenomen og ting i seg selv", "Kausalitet"], [2006, null], "Paris", `
      Fransk filosof, elev av Alain Badiou. «Après la finitude» (2006) angriper det han kaller korrelasjonisme, tanken om at vi bare kan tenke verden i forhold til oss selv. Vitenskapen forteller om fortiden før noe menneske fantes. Bare kontingensen selv er nødvendig: lovene kunne endre seg når som helst uten grunn. Boken satte i gang en hel bevegelse, selv om han aldri selv brukte den betegnelsen særlig.
    `, [["Après la finitude", 2006]], [bok("Meillassoux, Quentin. Après la finitude. Seuil, 2006.")]),
    f("Graham Harman", [1968, null], "mann", ["Metafysikk"], ["Spekulativ realisme"], ["Væren"], [2002, null], "Kairo og Los Angeles", `
      Amerikansk filosof, lenge ved Det amerikanske universitetet i Kairo. Med utgangspunkt i Heideggers analyse av verktøy utviklet han en *objektorientert ontologi*: alle ting, ikke bare mennesker, har en indre virkelighet som er skjult for andre, og samspillet mellom dem er indirekte. Han har vært viktig for arkitektur og kunstteori, og har skrevet om Bruno Latour.
    `, [["Tool-Being", 2002], ["The Quadruple Object", 2011]], [bok("Harman, Graham. Tool-Being: Heidegger and the Metaphysics of Objects. Open Court, 2002.")]),
    f("Karen Barad", [1956, null], "kvinne", ["Vitenskapsfilosofi", "Metafysikk"], ["Spekulativ realisme", "Feministisk filosofi"], ["Kjønn"], [2003, null], "Santa Cruz", `
      Amerikansk teoretisk fysiker og feministisk teoretiker ved University of California, Santa Cruz. «Meeting the Universe Halfway» utvikler med utgangspunkt i Niels Bohrs kvantefysikk en *agentiell realisme*: ting finnes ikke først og virker så på hverandre, men blir til gjennom samspill. Boken er blant grunntekstene for den nye materialismen, med vekt på at vitenskap også er etikk.
    `, [["Meeting the Universe Halfway", 2007]], [bok("Barad, Karen. Meeting the Universe Halfway. Duke University Press, 2007.")]),
  ],
};
