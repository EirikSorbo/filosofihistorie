# Filosofiens historie: pensum-app

En webapp for et kuratert pensum i filosofiens historie, fra de første greske filosofene til i dag,
for studenter på bachelor- og masternivå. Læreren bygger og vedlikeholder innholdet. Klassen utforsker
det, og kan *justere* det ved å stemme frem de viktigste filosofene og foreslå det de mener mangler.

Ingen innlogging for studentene: de åpner bare lenken, skriver klassekoden og kan bidra. Adressen er
<https://filosofi.historieappen.no> (filen `CNAME`).

Appen er en kopi av pedagogikkappen (v0.25), som selv er en kopi av musikkhistorie-appen. Planen,
vedtakene og hvor langt arbeidet er kommet, står i [PLAN.md](PLAN.md). **Koden, filnavnene og
databasenøklene er beholdt fra musikkappen** (`artists`, `genreDescriptions`, `tech`, `metaGenre`,
`instrument` …), slik at forbedringer kan hentes med `git fetch musikk` eller `git fetch pedagogikk`
og `git cherry-pick`. Det brukerne ser, er byttet ut:

| Kode og database | Musikk | Filosofi |
|---|---|---|
| `artists` | Artist | Filosof |
| `metaGenre` | Metasjanger | Retning (farge og gruppe) |
| `mainGenre`, node i treet | Sjanger | Epoke |
| `subGenre` | Undersjanger | Filosofisk begrep |
| strek i treet | Strek | Påvirkning (stiplet: motreaksjon) |
| `story` | Sjangerhistorie | Fortellingen om retningen |
| `tech` | Innovasjoner | Milepæler (institusjon, verk, krets og skole, overlevering) |
| `instrument`, `instrument2` | Instrument | Disiplin (metafysikk, erkjennelsesteori, etikk, politisk filosofi, logikk og språk, estetikk, vitenskapsfilosofi, religionsfilosofi) |
| `keyWorks` | Sentrale verk | Hovedverk |
| `genealogy.tidsrom` | Tiår | Tidsrom av ulik lengde (tidsaksen) |

Plateselskapene, disiplinsiden, varmekartet, tiårskortene og podkastene er tatt ut.

---

## Funksjoner

- **Utforsk pensumet.** Forsiden har fire innganger: **Filosofer**, **Epoker**, **Milepæler**
  og **Det store bildet**.
  - **Filosofkortet** har én retning, flere epoker, begreper, disiplin, hovedverk, kilder
    og bilde. Filosofene kan filtreres på epoke, disiplin, begrep, retning og tidsrom.
  - **Epokekortet** har beskrivelse, årstall, *Samfunn* og *Vitenskap og lærdom*, og filosofene
    i epoken.
  - **Begrepskortet** er en felles tekst som går på tvers av epoker og filosofer. Det har en
    valgfri **Se og les**-liste (video i appens spiller, tekstutdrag og lenker) og
    **Hos hvem og når**: filosofene og epokene i tidsrekkefølge, tegnet på tidsaksen.
  - **Milepæler** er kort for institusjoner, epokegjørende verk, kretser og skoler, og
    det som handler om overlevering, pluss viktige hendelser.
  - **Det store bildet** samler **Slektstreet** (epokene på tidsrom-rader med klikkbare
    påvirkninger mellom dem, og stiplede streker for motreaksjoner), **Epokehistorier** (én
    fortelling per retning), **Filosoftidslinja**, **Referanser** (alle kildene appen bygger på,
    gruppert etter hovedkilde, utledet av dataene) og innholdssidene.
  - **Tidsaksen** (`js/felles/tidsakse.js`): tidsrommene er rader i treet, lagret i
    `content/genealogy.tidsrom`, og hvert tidsrom er like bredt på aksen. Filosoftidslinja,
    stripa på kortet, epokeperiodene og tidslinja i utskriften bruker den. År før Kristus er
    negative tall og vises med «f.Kr.».
- **Søk** i alt innholdet, med treff mens man skriver, og «dagens filosof» på forsiden.
- **Foreslå filosof / milepæl** (justering av pensumet) med navn, årstall, kjønn, retning,
  epoker, begreper, disiplin, virkested, begrunnelse, hovedverk, bilde og kilder. Nye forslag
  venter på lærergodkjenning.
- **Endringsforslag**: studenter kan foreslå endringer på eksisterende filosof-, milepæl-,
  epoke- og begrepskort; læreren godkjenner eller avviser felt for felt. «Se og les» kan bare
  læreren skrive.
- **Stem frem**: studenter markerer forslag som «svært relevant».
- **Visning**: presentasjonsmodus for lerretet (nivåer, hurtigtaster, videoer i appens spiller) og
  **kjøreplaner**: lagrede rekker av stopp som spilles fra et oversiktskort, med «neste» og klokke.
  Læreren bygger en plan ved å velge «Bygg på» i Visning-vinduet: visningsknappen på kortene,
  plussknappen på radene og tasten + legger kortet rett inn (pille nede til venstre viser planen,
  Ferdig avslutter). Editoren har søk, dra og slipp og «Husk visningen» per stopp.
  - **Lerret på annen skjerm** (skjermknappen i verktøylinja): et eget lerretvindu på prosjektoren
    følger lærerens vindu over en BroadcastChannel (kort, nivå, rulling, svart skjerm). Slektstreet
    vises i en ramme på lerretets forside, med samme utsnitt.
  - **Private notater** (tasten P) til filosof-, epoke-, begrep- og milepælskort vises bare i
    lærerens vindu og lagres i samlingen `notater`, som bare læreren leser.
  - **Påminnelser** legges inn per kjøreplan i editoren: et antall minutter etter at planen ble
    startet, eller et klokkeslett. De dukker opp som kort øverst på lærerens skjerm til de lukkes,
    eventuelt også på lerretet (`js/visning/paminnelser.js`, lagret i `notater` som
    `paminnelser:<planId>`). Tasten R legger inn en rask påminnelse som bare gjelder visningen som
    går (sessionStorage), også i fri visning, med tidsknapper og «2 min før hel time». Tasten O
    viser planens oversikt oppå stoppet, med det som er gått gjennom haket av.
  - «Ta opp» logger alt læreren åpner. Tasten N åpner «Navn fra timen»: en filosof som kom opp,
    og hvem som foreslo den, lagres til oppfølging på Skrivebordet (samlingen `timeforslag`, bare
    læreren).
- **Videoer** spilles i appens egen spiller overalt (ikke i ny fane), med starttidspunkt, «Kopier
  lenke» og knappene for kjøreplan og utskrift; «Åpne på YouTube» står som reserve for videoer som
  ikke kan bygges inn. Samme spiller brukes av «Se og les». Tasten S åpner søket.
- **Utskrift**: studentene velger kort (filosofer, epoker, begreper, milepæler …) med
  skriverikonet i kortenes tittellinje, eller tar en hel kjøreplan eller en hel retning (epokene,
  filosofene og begrepene følger med, og kan hukes bort én og én), og får et hefte i A4 med
  forside, innholdsfortegnelse og tidslinje, som nettleseren lagrer som PDF. Skriverikonet i
  toppmenyen viser utvalget som en liste (ta ut, dra for rekkefølgen, tøm). Utvalget bor i
  nettleseren og kan sendes til en annen enhet som lenke eller QR-kode. (Midlertidig skjult for
  studentrollen, bryteren `utskrift` i `js/felles/feature-flags.js`.)
- **Sanntid**: alle ser endringer umiddelbart (Firebase Firestore).
- **Lærermodus** (Google-innlogging): Skrivebord med arbeidsflyt-innboks og sjekk-fremdrift per
  innholdskategori, Oversikt over pensumets form og hull (og «Mangler»), epoketre-editor
  (epoker, retninger og tidsrom: navnebytter og slettinger planlegges og skrives atomisk),
  innholdsredigering (beskrivelser, fortellinger, påvirkninger, Se og les), egne slides til
  visningen, godkjenn/avvis/prioriter/skjul/rediger og import/eksport (JSON,
  se [JSON-OPPSKRIFT.md](JSON-OPPSKRIFT.md)).

---

## Arkitektur

Fem sider med felles datalag. Rene HTML/JS ES-moduler uten byggesteg.

```
index.html            Forside: Teoretikere, Epoker, Reformer og milepæler, Det store bildet, søk
student.html          Studentside: foreslå teoretiker
teacher.html          Lærerside (Google-innlogging): Skrivebord, Oversikt, admin
tre.html              Slektstre-siden (epokene på tidsrom-rader)
utskrift.html         Utskrift: studentens eget hefte av valgte kort (PDF via nettleseren)
css/styles.css        Styling; HELE utseendet styres av variablene i :root øverst (se «Design»)
css/utskrift.css      Heftet på skjerm og papir (@page, sidebrytinger)
js/                   Modulene, i mapper etter område (alle filene: MODULKART.md)
  landing.js …        Én fil per side rett i js/, pluss gate, load-guard og version
  firebase-config.js  Firebase-nøkler + lærer-e-poster  ← DU FYLLER INN
  utforsk/            Utforsk: Det store bildet, epoker, reformer, tidslinje, søk …
  sjangre/            Epokemodellen (treet), epokekortet, begrepene og slektstreet
  visning/            Presentasjonsvisningen og kjøreplanene
  laerer/             Lærersiden
  forslag/            Endringsforslagene
  utskrift/           Heftet
  ui/                 Byggeklosser for skjermen (kort, lister, modaler, videospilleren)
  data/               Firestore, den delte dataroten og appens tilstand
  felles/             Hjelpere og vokabular som flere deler av appen bruker
  vendor/             Tredjepartskode (QR-koder)
MODULKART.md          Alle filene i js/, én linje hver, laget av tools/modulkart.js
tests/                Enhetstester (node --test), regeltester og nettlesertester (emulator)
tools/                check-imports, find-stale-refs, importkart, modulkart, check-versjon,
                      lag-filosofi-skjelett (treet), sjekk-innholdsfil (før import),
                      finn-musikkord, ordbytte,
                      seed-genealogy, build-genealogy-doc, dump-genre-fixture
firestore.rules       Sikkerhetsregler for databasen
json files/           filosofi-skjelett.json: treet som importeres på lærersiden (lages av tools/)
PLAN.md               Planen, vedtakene og status per fase
bump.sh               Setter ?v=…, importkartet og modulkartet fra js/version.js
```

Modulkartet ([MODULKART.md](MODULKART.md)) viser hver fil med tittellinjen fra
innledningen øverst i fila, og reglene koden holder seg til. Det lages av
`tools/modulkart.js` (kjøres av `./bump.sh`), og pre-push-kroken og GitHub
stopper et kart som ikke stemmer med filene, så det kan ikke gå ut på dato.

**Datamodell (Firestore):** samlingene `artists` (filosofene), `config` (`teacherChecks`),
`genreDescriptions` (nivåfeltene meta/main/sub: retning, epoke og begrep, pluss `story` =
fortellingen om retningen), `edgeDescriptions` (påvirkningene, doc-ID `fra__til`), `content`
(innholdssider, kjøreplaner, referanser og **`content/genealogy` = hele treet med tidsrommene**, ett
dokument), `tech` (milepæler), `pendingEdits`, `notater` og `timeforslag` (bare læreren).
Samlingene `decades` (fase 2) og `podcasts` (fase 4) er tatt ut og har ingen regel i
`firestore.rules`. Alt pensuminnhold bor i Firestore — ingen fallback-tekster i koden, og heller
ingen kopi av treet: `js/sjangre/genre-model.js` leser `content/genealogy` og avleder vokabularet.
Filosoffeltene er definert i `js/data/artist-schema.js`. Bare forslag med `status: "active"`
som ikke er lærer-skjult (`hidden`) vises for studenter. Filformatet for import og eksport står i
[JSON-OPPSKRIFT.md](JSON-OPPSKRIFT.md).

---

## Viktighetsgraden

Hver filosof har en grad: Viktigst (3), Viktig (2), Mindre viktig (1) eller
ingen (0). «Skjult for studentene» er et eget felt (`hidden`, v6.86), ikke en
grad: før var det grad -1, og den gamle verdien leses som skjult til læreren har
flyttet den over med knappen på Skrivebordet (`erSkjult` i
`js/felles/limits.js`). Det er forarbeid til flere sett med grader (lærer,
studenter, KI), som er planlagt, skal kunne vises for studentene og få en egen
bryter under «Synlig for studentene». Filterknappene i Filosofer-vinduet og
lærerlista setter ett felles nivå for appen (`js/ui/viktighet.js`, v6.85),
trinnvis: viktigst; viktig og viktigst; alle med grad. Filosofer uten grad er ute
når et nivå er valgt. Nivået gjelder filosoflista og alle listene som lages
av filosofene, og en firkant midt i toppfeltet viser symbolet (klikk slår av).
Det står i localStorage, og gjelder bare når graden er synlig: alltid for
læreren, for studentene når «Viktighetsgraden» er på under «Synlig for
studentene». Fargene: viktigst i dagens farge, viktig i blekk, mindre viktig i
grått.

## Utvalgene

Et utvalg er et navngitt utsnitt av innholdet, som «Sofies verden»
(`js/felles/utvalg.js`, v0.05). Viktighetsgraden er en stige, der hvert nivå tar
med nivåene over, mens et utvalg går på tvers av den. Derfor er utvalget et eget
filter, og de to kan kombineres. Utvalgene ligger i `content/utvalg` som lister
med navn på filosofer, epoker og milepæler, og importeres fra
`innhold/runde-6/utvalg.mjs`. Knappene står ved viktighetsknappene i
Filosofer-vinduet og lærerlista, og i hodet på slektstreet. Som viktighetsnivået
er det ett aktivt utvalg for appen, lagret i localStorage, med et merke i
toppfeltet som slår det av. Filosoflistene, spillelistene og Milepæler-vinduet
viser bare det som er i utvalget, og i slektstreet blir epokene utenfor grå
(`gx-utenfor` i `js/sjangre/genealogy-bundled.js`). Læreren ser alltid
utvalgene, også på forsiden og i slektstreet: lærersiden merker nettleseren
etter innloggingen (`pensum-utvalg-laerer` i localStorage, v0.06), siden de
sidene ikke vet hvem som er logget inn. Studentene ser utvalgene når
«Utvalgene» er på under «Synlig for studentene».

## Design

Utseendet styres fra `:root`-blokka øverst i `css/styles.css` (samlet v6.59):

- **Palett** (`--green-600`, `--amber-700` …): rå fargeverdier.
- **Roller** (`--surface`, `--text`, `--accent`, `--prio-1-bg`, `--tag-genre-bg` …):
  hva fargene brukes til. Reglene bruker bare disse.
- **Form:** skrift (`--font-body/-display/-mono`), hjørner (`--radius-2xs` til
  `--radius-2xl`, `--radius-chip`, `--radius-pill`), skygger (`--shadow-*`) og lag (`--z-*`).

Et nytt design er derfor i hovedsak endringer i den blokka. `--icon-mono` gjør
alle kortikonene ensfargede. Skriftene lastes i `<head>` på de fem HTML-sidene.
Retningenes farger bærer mening og står i dataene (`genealogy.metaGenres`), ikke her.
`tests/unit/design-variabler.test.js` feiler hvis noen skriver fargekoder eller
skriftnavn utenfor `:root`, eller bruker en variabel som ikke finnes.

**Fargerotasjon (v6.71):** aksentfargen bytter hver dag, lik for alle, i fast
runde: rød, skoggrønn, petrol, koboltblå, fiolett, plomme. `js/farge.js` (et
klassisk skript i `<head>`) setter `data-farge` på `<html>` etter lokal dato,
og blokkene `:root[data-farge="…"]` i `styles.css` setter aksentskalaen
(`--accent-50` til `--accent-700` og `--accent-rgb`). Logoen tegnes med
`<svg><use href="img/logo.svg?v=…#logo">`, så etiketten følger fargen.
`?farge=kobolt` i adressen viser en bestemt farge for å prøve. En ny farge er
et navn i `FARGER` og en blokk i stilarket. Vakttesten krever at listene er like,
og at hver farge har minst 4,5:1 mot hvitt.

## Oppsett av Firebase (ca. 5 minutter)

1. Gå til <https://console.firebase.google.com> og logg inn med Google-konto.
2. **Add project** → gi det et navn (f.eks. `pensum-filosofihistorie`) →
   du trenger ikke Google Analytics. Opprett.
3. I prosjektet: **Build → Firestore Database → Create database**.
   - Velg **Start in production mode** (vi legger inn egne regler).
   - Velg en region nær deg (f.eks. `eur3 (europe-west)`).
4. Hent web-nøklene: **Project settings (tannhjulet) → General →**
   **Your apps → Web (`</>`)**. Registrer en app (kallenavn, f.eks. `pensum`).
   Kopier verdiene fra `firebaseConfig`-objektet du får.
5. Lim dem inn i `js/firebase-config.js` (erstatt `DIN_API_KEY` osv.).

### Innlogging (Google for lærer + anonym for stemming)

6. Slå på Google-innlogging: **Build → Authentication → Get started →**
   **Sign-in method → Google → Enable**. Velg et støtte-e-postnavn og lagre.
   Slå samtidig på **Anonymous → Enable** i samme liste — appen logger hver
   student-nettleser inn anonymt (usynlig) og bruker uid-en som
   stemme-identitet. Uten Anonymous aktivert feiler stemming og innsending.
7. Sett din lærer-e-post **to steder** (samme adresse begge steder):
   - `js/firebase-config.js` → `TEACHER_EMAILS`
   - `firestore.rules` → funksjonen `isTeacher()`
8. Legg inn sikkerhetsreglene: **Firestore → Rules**, lim inn innholdet fra
   `firestore.rules`, og trykk **Publish**. VIKTIG: gjenta dette hver gang
   `firestore.rules` endres i repoet — fila og konsollen må være i synk.
9. Når appen ligger på en nettadresse (f.eks. GitHub Pages eller et eget
   domene), legg domenet til under **Authentication → Settings → Authorized
   domains** (her `filosofi.historieappen.no`). `localhost` er godkjent fra før.

Appen er nå klar. Innhold legges inn i lærermodus eller importeres via en
innholdspakke-JSON (Innstillinger → Importer).

---

## Publisering (så klassen får en lenke)

Appen er ren HTML/JS uten byggesteg, så enhver statisk webhost funker.

**GitHub Pages:** push mappa til et GitHub-repo, gå til **Settings → Pages**,
velg `main`-branchen og rot-mappa. Du får en URL som
`https://ditt-brukernavn.github.io/repo-navn/`, eller et eget domene
(her `filosofi.historieappen.no`) satt opp under **Settings → Pages → Custom
domain**. Husk å legge domenet til under Authentication → Authorized domains
(se punkt 9 over).

**Cache-busting:** ved hver endring, bump `VERSION` i `js/version.js` og kjør
`./bump.sh`. Den setter `?v=` på skript og stilark i HTML-sidene og skriver
*importkartet* (`tools/importkart.js`): én linje i hver side som gir hver modul
`?v=`. Importlinjene i `js/` står derfor uten versjon (`from "./ui.js"`), og en
ny versjon endrer bare HTML-sidene og `js/version.js`, ikke alle modulene. En
pre-push-hook (`.githooks/pre-push`, aktiveres med
`git config core.hooksPath .githooks`) nekter push hvis versjonene er i utakt,
hvis et importkart er utdatert, eller hvis en import har fått `?v=`.

---

## Klassekode (js/gate.js)

Alle sidene ligger bak en delt klassekode. Studenten skriver den inn én
gang per nettleser, eller åpner en lenke med koden i:
`https://filosofi.historieappen.no/?kode=DEN-KODEN`. Koden fjernes fra adressefeltet
etterpå. Er koden godtatt, lagres det i `localStorage` under `pensum-klasse`.

**Hva dette er og ikke er.** Sperren holder nysgjerrige mennesker ute av
grensesnittet. Den beskytter *ikke* dataene: innholdet ligger fortsatt åpent i
Firestore (`allow read: if true`) for den som kjenner prosjekt-ID-en, og den
kan omgås av alle som kan bruke utviklerverktøy. Ekte tilgangskontroll krever
innlogging håndhevet i `firestore.rules`, eller App Check.

Sperren **feiler åpent** med vilje: `js/gate.js` legger til klassen
`pensum-locked`, og CSS skjuler innholdet av den. Lastes ikke fila, vises appen
som før. En lekkasje er å foretrekke framfor at klassen står låst ute i en time.

**Bytte kode** (generer nytt salt og hash, og øk `version` med 1 så alle må
skrive inn på nytt):

```bash
python3 - <<'EOF'
import hashlib, base64, secrets, unicodedata, re
passord = "tre-urelaterte-ord"          # ← sett inn den nye koden
norm = lambda s: re.sub(r"[^a-z0-9æøå]", "", unicodedata.normalize("NFC", s).lower())
salt = secrets.token_bytes(16)
print("salt:", base64.b64encode(salt).decode())
print("hash:", hashlib.pbkdf2_hmac("sha256", norm(passord).encode(), salt, 150000, 32).hex())
EOF
```

Lim `salt` og `hash` inn i `GATE`-objektet øverst i `js/gate.js`, øk
`GATE.version`, bump `VERSION` + kjør `./bump.sh`, og push. Hashen er offentlig
(repoet er offentlig), derfor 150 000 PBKDF2-iterasjoner — men frasen betyr
mest: bruk tre urelaterte ord, aldri et passord du bruker andre steder.

---

## Testing

- **Enhetstester** (ingen avhengigheter): `npm test` — kjører `node --test`
  på ren logikk (normalisering, diff, grenser, linkify, importformat).
- **Regeltester** (Firestore-emulator): `npm run test:rules` — krever
  `npm install` (henter `firebase-tools` og `@firebase/rules-unit-testing`)
  og Java. Verifiserer at `firestore.rules` tillater/avviser riktig.
- **Nettlesertester** (v7.13, Playwright + Firebase-emulatoren):
  `npm run test:e2e` kjører hele appen i en nettleser mot emulatoren
  (prosjekt `demo-pensum`, firestore + auth) og klikker seg gjennom student-
  og lærerflytene i `tests/e2e/`: innsending, godkjenning, returflyten med
  kode, endringsforslag, Rediger og Ny filosof, synligheten, plateselskapene,
  «Gi nytt navn», import, slides og en røykprøve av alle vinduene. Krever
  Java. Lokalt brukes Chrome som er installert; i CI Playwrights Chromium.
  Appen kobles til emulatoren bare på localhost med `?emulator=1`
  (`js/data/emulator.js`), og læreren logges inn med emulatorens
  testinnlogging, som ikke virker mot det ekte prosjektet.
- **Importsjekken**: `node tools/check-imports.js` finner brutte, ukjente og
  ubrukte importer, foreldreløse moduler, importringer (filer som importerer
  hverandre i ring) og videresending (en modul som eksporterer noe den selv
  har importert). Den kjører i pre-push-kroken og på GitHub sammen med
  testene.

---

## Vokabular og strukturakser

- **Epoker og retninger** kommer fra treet i Firestore (`content/genealogy`, avledet i
  `js/sjangre/genre-model.js`) og redigeres av læreren i epoketre-editoren. Begrepene er frie
  navn med en felles tekst i `genreDescriptions`.
- **Tidsrom** (rader i treet, fra −800 til «i dag») ligger i `content/genealogy.tidsrom` og
  redigeres under «Tidsrom» i editoren. `js/felles/aarstall.js` har `visAar`, `visSpenn` og
  `tolkAar`; år før Kristus er negative tall.
- **Disipliner** er `INSTRUMENT_GROUPS`/`INSTRUMENTS` i `js/felles/limits.js` (fast liste i
  koden, styrer nedtrekksmenyene i forslagsskjema og filtre).
- **Milepælkategorier** er `TECH_CATEGORIES` i `js/ui/ui-tech.js`.

---

## Sikkerhet – det du bør vite

- Studenter trenger ikke synlig innlogging: appen logger nettleseren inn
  **anonymt** (Firebase Auth) i bakgrunnen. Alle med lenken kan lese, foreslå
  og stemme.
- **Stemmene er uid-beskyttet:** Firestore-reglene tillater kun å legge til
  eller fjerne *sin egen* uid i stemmelista. Ingen kan røre andres stemmer
  eller fylle på falske. (Én person kan fortsatt stemme fra flere
  nettlesere/inkognito — «én stemme per person» krever ekte innlogging.)
- Lærerfunksjoner (godkjenn, skjul, slett, endre grenser) krever innlogging
  med en godkjent Google-konto. Sikkerheten ligger i `firestore.rules`, ikke i
  nettleseren – en student kan ikke utføre lærerhandlinger selv om de finner
  lærersiden, fordi databasen avviser det uten en godkjent konto.
- Alle studentleverte URL-er vaskes (kun `http/https`) før de settes inn som
  lenker/bilder, så `javascript:`-lenker ikke kan kjøre skript.
- Personvern: den anonyme uid-en er en pseudonym identifikator (ingen navn,
  e-post eller lignende). Navnefeltet i skjemaene er valgfritt og kan stå som
  «Anonym». Firestore-data lagres i EU-region.
- `firebaseConfig`-nøklene er ikke hemmelige (de ligger uansett i nettleseren),
  så det er trygt å legge prosjektet i et offentlig GitHub-repo.

---

## Utforske uten Firebase

Hvis `firebase-config.js` ikke er fylt ut, starter appen i **oppsettmodus**:
grensesnittet vises med standardoppsett så du kan se hvordan det ser ut, men
ingenting lagres før databasen er koblet til.
