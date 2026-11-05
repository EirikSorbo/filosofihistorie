// Runde 5: innholdssidene (pages), steg 7, skrevet av Opus 2026-11-02.
// Sidene er omHistorie («Om historie» i Det store bildet), appGuide («Slik
// bruker du appen»; hver ###-del slås av og på for seg under «Synlig for
// studentene»), skriveveiledning (hjelpen i steg 3 i forslagsskjemaet) og
// laererHandbok (bare på lærersiden). Formatet er markdown-light, se
// js/felles/rich-text.js: ### tittel, **fet**, *kursiv*, - punkt, blank linje.
import { sep, bok } from "../kilder.mjs";

export default {
  pages: {
    omHistorie: {
      body: `
        Filosofihistorie er ikke bare en samling gamle meninger. Filosofer leser sine forgjengere fordi spørsmålene deres ikke er besvart, og fordi begrepene vi tenker med, som *frihet*, *substans*, *subjekt* og *rettigheter*, har en historie som bestemmer hva de kan brukes til. Appen samler denne historien som et nettverk av retninger, epoker, filosofer, begreper og milepæler, så det går an å se både linjene og bruddene.

        ### Hvordan filosofihistorie er blitt skrevet
        Vi kjenner antikkens filosofer gjennom Aristoteles, som så forgjengerne som skritt mot sin egen lære, og gjennom Diogenes Laertios, som samlet anekdoter og læresetninger på 200-tallet. Moderne filosofihistorie tok form i Tyskland på 1700-tallet. Johann Jakob Bruckers store verk (1742–1744) var en av de første, og G.W.F. Hegel gjorde historien til filosofi: hver tenker er et nødvendig trinn i åndens utvikling. Mange av oss bærer fortsatt med oss dette bildet av en historie med retning, selv om få vil forsvare det.

        På 1900-tallet har to måter å lese på stått mot hverandre. Analytiske filosofer leste ofte Platon og Kant som kolleger med argumenter som kan vurderes direkte. Bertrand Russells store filosofihistorie (1945) er et berømt eksempel, og den er like morsom som den er urettferdig. Quentin Skinner hevdet i 1969 at dette er historieløst: for å forstå en tekst må vi vite hva forfatteren gjorde ved å skrive den, i sin tid og mot sine motstandere. Richard Rorty foreslo i 1984 at vi trenger flere typer historie, og at de bør holdes fra hverandre.

        ### Hvem er med?
        Også kanon har en historie. Peter K.J. Park har vist at det var mellom 1780 og 1830, med Kant og hans etterfølgere, at Afrika og Asia ble skrevet ut av filosofihistorien. Før dette var det ikke uvanlig å la den begynne i Egypt eller India. Bryan Van Norden og andre har argumentert for at det ikke finnes gode grunner til å opprettholde skillet. Denne appen følger likevel hovedsakelig den vestlige linjen, fordi det er det emnet handler om, og oppsummerer andre tradisjoner i retningen **Andre tradisjoner**. Det er en begrensning, ikke en vurdering av hva som er viktigst.

        Kvinner har vært holdt utenfor, både fra skolene og fra historien. Mary Ellen Waithes «A History of Women Philosophers» (1987–1995) og nyere forskning har vist at det var mange flere enn man trodde, fra Hipparkia til Elisabeth av Böhmen, Émilie du Châtelet og Mary Wollstonecraft. I appen er det fortsatt langt flere menn enn kvinner. Det sier noe både om historien og om hvem historien er blitt skrevet av.

        ### Merkelapper og linjer
        Ord som rasjonalisme, empirisme, skolastikk og nyplatonisme er i stor grad satt på i ettertid. Plotin kalte seg platoniker, Descartes kalte seg ikke rasjonalist, og skillet mellom rasjonalister og empirister ble først vanlig etter Kant. Louis E. Loeb og andre har vist hvor lite det forklarer om 1600-tallet. Heller ikke skillet mellom analytisk og kontinental filosofi er et klart logisk skille: Frege og Husserl leste hverandre, og Heidegger og Carnap kom begge fra nykantianske miljøer.

        Pierre Hadot har dessuten minnet oss om at filosofi i antikken ikke var teori, men en livsform med daglige øvelser. Tekstene må leses deretter. Det er en av grunnene til at retningen **Det gode liv** ikke bare er moralteori.

        ### Slik er historien ordnet her
        - **Retningene** (åtte) er tradisjoner som går gjennom hele historien, ikke skoler i streng forstand: Natur og erfaring, Fornuft og idé, Det gode liv, Tro og fornuft, Samfunn og makt, Eksistens og tolkning, Logikk og analyse og Andre tradisjoner.
        - **Epokene** (78) er perioder eller bevegelser innenfor en retning, hver med en beskrivelse og egne tekster om *samfunnet* og om *vitenskap og lærdom*. Mange overlapper i tid.
        - **Påvirkningene** er strekene i slektstreet. Hver har en tekst om hvordan én epoke bygde på en annen. De stiplede strekene er motreaksjoner, der en epoke ble til i opposisjon til en annen.
        - **Begrepene** går på tvers av epokene, som fri vilje, universalier eller rettferdighet, og viser «hos hvem og når» de dukker opp.
        - **Tidsrommene** på tidsaksen er ulike lange. Antikken og middelalderen er presset sammen, og de siste to hundre årene er strukket ut.

        ### Les med kritiske briller
        Ethvert tre er en konstruksjon. At epokene henger sammen med streker, betyr ikke at historien gikk i en bestemt retning, og at en filosof står i én retning, betyr ikke at hen passer der uten rest. Hume kunne stått flere steder, og Kant står egentlig overalt. Tekstene prøver å vise strid og tvil der forskningen er uenig. Bruk kildene, les primærtekstene, og si fra der du mener noe er feil, mangler eller burde vært fortalt annerledes.
      `,
      kilder: [
        sep("https://plato.stanford.edu/entries/analysis/"),
        bok("Skinner, Quentin. «Meaning and Understanding in the History of Ideas.» History and Theory 8, nr. 1 (1969): 3–53."),
        bok("Rorty, Richard. «The Historiography of Philosophy: Four Genres.» I Richard Rorty, J.B. Schneewind og Quentin Skinner (red.), Philosophy in History. Cambridge University Press, 1984."),
        bok("Park, Peter K.J. Africa, Asia, and the History of Philosophy: Racism in the Formation of the Philosophical Canon, 1780–1830. SUNY Press, 2013."),
        bok("Van Norden, Bryan W. Taking Back Philosophy: A Multicultural Manifesto. Columbia University Press, 2017."),
        bok("Waithe, Mary Ellen (red.). A History of Women Philosophers. 4 bind. Kluwer, 1987–1995."),
        bok("Loeb, Louis E. From Descartes to Hume: Continental Metaphysics and the Development of Modern Philosophy. Cornell University Press, 1981."),
        bok("Hadot, Pierre. Exercices spirituels et philosophie antique. Études Augustiniennes, 1981."),
        bok("Skirbekk, Gunnar og Nils Gilje. Filosofihistorie. Universitetsforlaget, 1987 og senere utgaver."),
      ],
    },

    appGuide: {
      body: `
        Appen er et pensum i form av et nettverk: retninger, epoker, filosofer, begreper og milepæler som peker på hverandre. Det viktigste er å følge sammenhengene. Her er funksjonene, og noen det er lett å gå glipp av.

        ### Begynn på forsiden
        Forsiden har fire innganger: **Filosofer**, **Epoker**, **Milepæler** og **Det store bildet**, og **Søk** finner alt på tvers. **Dagens filosof** gir deg én tilfeldig filosof. Trykk «Vis ny filosof» for en ny. Du trenger ingen bestemt rekkefølge.

        ### Finn og filtrer filosofer
        Under **Filosofer** kan du filtrere på **retning**, **epoke**, **tidsrom** og **disiplin**, og kombinere filtrene, for eksempel etikere i epoken Stoisismen. Filosofkortet har leveår, beskrivelse, hovedverk, epoker og begreper, kilder og **beslektede filosofer** du kan gå videre til. **Filosoftidslinje** viser hvem som var virksomme samtidig.

        ### Epoker, retninger og begreper
        Under **Epoker** står epokene ordnet etter de åtte retningene, og **Oversikt** gir hver retning med beskrivelse. Epokekortet har en beskrivelse og to egne tekster: **Samfunn** og **Vitenskap og lærdom**. Fanene gir også **Epokeperioder**, **Filosoftidslinje**, **Begreper** og **Slektstre**. Et begrepskort har en felles tekst, «**Hos hvem og når**» på tidsaksen, og noen har en **Se og les**-liste med korte utdrag fra primærtekster.

        ### Se det store bildet
        **Det store bildet** viser stoffet fra flere vinkler:
        - **Slektstreet** viser hvordan epokene vokste ut av hverandre. Strekene er klikkbare og forteller hvordan én epoke påvirket en annen. De stiplede er motreaksjoner.
        - **Epokeperioder** viser når epokene var aktive, og **Filosoftidslinje** når filosofene virket.
        - **Epokehimmelen** stiller filosofene opp rundt epokene sine. «Alle broer» viser dem som hører til flere epoker.
        - **Epokehistorier** er én sammenhengende fortelling per retning, en god vei inn hvis du heller vil lese enn klikke.
        - **Om historie** handler om hvordan filosofihistorie skrives, og om hvordan historien er ordnet her.
        - **Referanser** samler alle kildene appen bygger på.

        ### Milepæler
        Her står institusjoner, epokegjørende verk, kretser og skoler, og det som handler om hvordan tekstene ble bevart, fra Platons akademi til Stanford Encyclopedia of Philosophy. Noen kort er merket som **viktige hendelser**, som Sokrates' rettssak og fordømmelsene i Paris.

        ### Følg lenkene
        Nesten overalt der navnet på en filosof, en epoke eller en milepæl står i en tekst, kan du klikke på det. Følg lenkene dit nysgjerrigheten tar deg, så bygger du ditt eget nett av sammenhenger.

        ### Repeter smart
        Øverst under **Filosofer** kan du vise bare de viktigste (**Bare viktigst**), de viktige og viktigste, eller alle med en viktighetsgrad. Det er greit før en eksamen. Uten filter ser du alt.

        ### Du former pensumet
        Mangler en filosof, eller er noe feil? Bruk **Foreslå en filosof**, eller **Foreslå endring** på et kort, og stem opp forslag du er enig i. Læreren går gjennom alt. Sender læreren et forslag tilbake til deg, får du en kode. Skriv den inn under «**Fått kode fra lærer?**» på forsiden, rett og send på nytt.

        Tanken bak: begynn med helheten, gå i dybden der noe fanger deg, følg lenkene og kom tilbake. Jo mer du utforsker og bidrar, jo bedre blir pensumet.
      `,
    },

    skriveveiledning: {
      body: `
        Beskrivelsen er det første andre leser om filosofen. Skriv den slik at en fagperson kan stole på den og en student kan forstå den.

        ### Hva den bør inneholde
        - **Hvem:** hvor og når filosofen virket, kort.
        - **Hovedidéene**, med filosofens egne begreper og helst ett hovedverk ved navn («i anførselstegn»).
        - **Plassen i historien:** hvem bygde filosofen på, hvem tok idéene videre, og hvem kritiserte dem?
        - **Strid og tolkning:** der forskningen er uenig, si det, og si hvem som mener hva.

        ### Form
        Sikt mot 60–200 ord. Skriv med egne ord, presist og uten superlativer: «viktig» og «banebrytende» sier mindre enn hva filosofen faktisk gjorde. Ikke les dagens begreper inn i fortiden. Bruk *kursiv* for fagord og «» for titler. Bruk ikke tankestrek med mellomrom rundt: skriv heller om setningen.

        ### Kilder
        Oppgi minst én kilde. Begynn gjerne med Stanford Encyclopedia of Philosophy, Internet Encyclopedia of Philosophy, Store norske leksikon eller Britannica, og legg til en bok eller artikkel du har brukt. Sjekk at lenken går til riktig artikkel. Årstall og navn skal kunne finnes igjen i kildene. Ikke kopier fra kilden: selv en omskrevet setning ligger ofte for tett.
      `,
    },

    laererHandbok: {
      body: `
        Håndboka er bare for læreren. Den beskriver hvordan innholdet kom inn, og hvordan du holder det i orden.

        ### Innholdet kommer i runder
        Innholdet er skrevet i runder, som JavaScript-moduler i mappa innhold/runde-N i repoet. Verktøyet tools/bygg-innholdsfil.js slår delene sammen til én importfil, sjekker den mot treet og henter hver lenke. Rundene er:
        1. Natur og erfaring, Fornuft og idé, Det gode liv, og de filosofiske begrepene
        2. Tro og fornuft og Samfunn og makt
        3. Eksistens og tolkning, Logikk og analyse og Andre tradisjoner
        4. Milepæler
        5. Innholdssidene: Om historie, Slik bruker du appen, Skriveveiledning og denne håndboka
        6. Utvalgene, som Sofies verden

        ### Import
        Importer **treet** først (json files/filosofi-skjelett.json), deretter rundene i rekkefølgen over. Ta en **Eksporter** først, som sikkerhetskopi. Velg **«Erstatt alle»** for runde 1 og **«Slå sammen»** for runde 2 og 3: **«Erstatt alle»** sletter filosofene som ikke står i fila. Rundene 4 til 6 har ingen filosofer, så der spør appen bare om du vil importere. Filosofer og milepæler matches på navn, så en runde kan importeres på nytt uten dubletter. Innholdssidene erstattes i sin helhet.

        ### Sjekk innholdet
        Alt som importeres, er usjekket. **Skrivebordet** viser det som venter på deg. Når **«Bare sjekket innhold»** står på under «Synlig for studentene», ser studentene bare det du har sjekket. Endrer en ny import teksten på noe du har sjekket, fjernes sjekken, så du ser det på nytt.

        ### Synlig for studentene
        Under «Synlig for studentene» på Skrivebordet slår du av og på kortene i Det store bildet. Som standard er Om historie, Epokehistorier, Epokehimmel, Referanser og Slik bruker du appen skjult til du slipper dem inn. I «Slik bruker du appen» slås hver del (hver mellomtittel) av og på for seg, og en ny del er skjult til du huker den av.

        ### Viktighetsgrad
        Stjernene på filosofkortene i lærerlista gir en grad: **Mindre viktig**, **Viktig** eller **Viktigst**. Studentene kan filtrere på graden under Filosofer, så gradene bør være gått gjennom før en eksamensperiode. **Skjult** tar en filosof ut av studentvisningen uten å slette kortet. Importen gir hver filosof en foreslått grad, som du endrer med stjernene.

        ### Utvalg
        Et utvalg viser bare en del av innholdet, for eksempel det som er med i «Sofies verden». Knappen står ved stjernene i lærerlista og under Filosofer, og i slektstreet. Når utvalget er på, viser filosoflistene og milepælene bare det som er med, og epokene utenfor blir grå i slektstreet. Et merke i toppfeltet viser at utvalget er på, og et klikk på merket slår det av. Studentene ser utvalgene når «Utvalgene» er på under «Synlig for studentene». I nettleseren der du har logget inn på lærersiden, virker utvalget også på forsiden og i slektstreet før det er sluppet til studentene. Utvalgene importeres med innholdet.

        ### Forslag fra studentene
        Nye filosofer og endringsforslag venter på godkjenning. Du kan godkjenne, avvise eller **sende tilbake** med en tilbakemelding. Da får du en kode som du gir studenten, og studenten åpner forslaget igjen under «Fått kode fra lærer?» på forsiden.

        ### Kildene
        Hver kilde har en tekst og eventuelt en lenke og en kategori (Bøker, Podkaster, Videoer, Nettsteder). Referanser-kortet bygges av kildene på alle kortene. Frittstående referanser legges inn på lærersiden. Nettkilder står som publikasjonen alene, for eksempel «Stanford Encyclopedia of Philosophy.», og lenken bærer artikkelen.

        ### Faresone
        **Slett all filosofdata** sletter alle filosofkortene for godt. Appen laster ned en sikkerhetskopi først, og du må skrive SLETT for å bekrefte.
      `,
    },
  },
};
