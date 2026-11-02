# Filosofiens historie: plan for kopien

Dette repoet er en kopi av pedagogikkappen (v0.24, `b7113fed`, historikken er med), som igjen er en kopi av musikkhistorie-appen. Oppskriften ligger i `FILOSOFI-OPPSKRIFT.md` i pedagogikk-repoet.

Teknisk hovedlinje: hele koden, filnavnene og databasenøklene beholdes (`artists`, `genreDescriptions`, `tech`, `instrument`, `samfunn`, `skole` og så videre). Bare det brukerne ser byttes ut. Da kan forbedringer hentes fra de to andre appene med `git fetch` og `git cherry-pick`. Pushurl til `pedagogikk` og `musikk` er satt til DISABLED, så denne appen aldri kan pushes til de andres repoer.

## Vedtatt av Eirik 2026-11-02

- **Målgruppe:** bachelor og master. Tekstene skrives for studenter på det nivået, ikke for fagfeller.
- **Omfang:** vestlig filosofi, fra de første greske filosofene (rundt −600) til i dag. Indisk, kinesisk og islamsk filosofi (og eventuelt buddhisme i Øst-Asia) kommer som oppsummerende epoker i én egen retning, **«Andre tradisjoner»**: én epoke per tradisjon, med beskrivelse og noen sentrale personer som kort. Retningens fortelling gir oversikten. Påvirkningslinjer går inn i vest der de er reelle (islamsk filosofi til skolastikken, indisk filosofi til Schopenhauer). I tillegg et avsnitt i «Om historie». Ingen grå røtter og ingen egen Røtter-side (alternativet «Verdens tradisjoner» som tekstside er forkastet).
- **Samme modell som pedagogikk:** nodene i treet er **epoker**, metasjangrene er **retninger**. Strekene viser påvirkning, de stiplede motreaksjon.
- **Navn:** «Filosofiens historie», `filosofi.historieappen.no`. Filen `CNAME` har navnet.
- **Klassekode:** ikke avgjort. Eirik oppgir den selv.
- **Norsk spor droppes.** Ingen kategori og ingen innholdsrunde for filosofi i Norge.
- **Rekkefølge:** musikkappens forbedringer v7.12–v7.21 hentes inn i pedagogikk først (oppskriften, del 6), så filosofi arver dem. Plateselskaper hoppes over.
- **Ikke tilbake:** podkaster, lytteeksempler på personkortet, plateselskaper, varmekart og tiårskort.

## Oversettelse av begrepene

| Kode og database | Musikk | Pedagogikk | Filosofi |
|---|---|---|---|
| `artists` | Artist | Teoretiker | **Filosof** |
| `metaGenre` | Metasjanger | Retning | **Retning** |
| `mainGenre`, node i treet | Sjanger | Epoke | **Epoke** |
| `subGenre`, `genreDescriptions.sub` | Undersjanger | Pedagogisk prinsipp | **Filosofisk begrep** (frihet, fri vilje, universalier) |
| `edgeDescriptions`, `p` | Strek | Påvirkning | **Påvirkning** |
| `rx` | Motreaksjon | Motreaksjon | **Motreaksjon** |
| `story` | Sjangerhistorie | Fortellingen om retningen | samme |
| `instrument`, `instrument2` | Instrument | Fagbakgrunn | **Disiplin** (en eller to per person) |
| `keyWorks` | Sentrale verk | Hovedverk | **Hovedverk** |
| `tech` | Innovasjoner | Reformer og milepæler | **Milepæler** |
| `main.samfunn`, `main.skole` | finnes ikke | Samfunn, Skole og oppdragelse | **Samfunn, Vitenskap og lærdom** |
| `sub.seOgLes` | finnes ikke | Se og les | **Se og les** (kan bære primærtekster) |
| `genealogy.tidsrom` | Tiår | Tidsrom som data | samme |

Ordene har samme kjønn som før, så «en», «et» og bøyningene stemmer: filosof (en), begrep (et), milepæl (en), disiplin (en).

**Disiplinene** (`INSTRUMENT_GROUPS`): Metafysikk, Erkjennelsesteori, Etikk, Politisk filosofi, Logikk og språk, Estetikk, Vitenskapsfilosofi, Religionsfilosofi.

**Milepælkategoriene** (`TECH_CATEGORIES`), fire stykker:

| Kategori | Hva | Eksempler |
|---|---|---|
| Institusjon | Steder der filosofi ble drevet | Akademiet, Lykeion, middelalderuniversitetene, Royal Society, Berlin 1810 |
| Verk | Bare verk som endret debatten, med mottakelse. Resten står som Hovedverk på personkortet | *Republikken*, *Summa theologiae*, *Meditasjoner*, *Kritikk av den rene fornuft*, *Tractatus* |
| Krets og skole | Selve miljøet: hvor, når, hvem. Epokekortet tar ideene | Pythagoreerne, Hagen, Wienerkretsen, Frankfurterskolen |
| Overlevering | Hvordan tekstene ble bevart og spredt | Visdommens hus i Bagdad, oversetterne i Toledo, boktrykk, *Encyclopédie* |

**«Hendelse» er korttype, ikke kategori** (`TECH_TYPES`: «Reform eller milepæl» og «Viktig hendelse»). Hendelseskort velger også en av kategoriene over: Sokrates' rettssak 399 f.Kr., Akademiet stenges 529, fordømmelsene i Paris 1277, Galileo-saken 1633. Rundt 50 kort er et rimelig mål.

## Fasene

Fra oppskriften. Hakene settes etter hvert som de er gjort.

- [ ] **Steg 0: Eirik oppretter** GitHub-repo (tomt og offentlig) og Firebase-prosjekt.
- [x] **Del 6: musikkappens v7.13–v7.21 inn i pedagogikk** (v7.12 hoppet over), pushet til pedagogikk `main` 2026-11-02 som v0.25 (`7bd910d6`). Denne kopien er fremspolt dit. Nettlesertestene (`tests/e2e/`) er ikke kjørt og sjekker musikkord, så de må rettes når GitHub viser feilene.
- [x] **Steg 1: Kopien.** Klonet 2026-11-02 fra `7bd910d6` (v0.25). Remotes og hooks satt opp, pedagogikkinnholdet fjernet. `origin` er `EirikSorbo/filosofihistorie`, og `main` er pushet (`eecd8ac5`).
- [ ] **Steg 2: Identitet.** Gjort 2026-11-02: Firebase-konfigurasjonen (prosjekt `filosofihistorie-68ff7`), CNAME, manifest, package, robots, skjulte titler, filnavn på eksport, domenet i utskriften, versjon 0.01, port 8741. Klassekoden er satt i `js/gate.js` (`version: 1`, kontrollert mot normaliseringen i gate.js; selve koden står ikke i repoet). Gjenstår: logoen, og at Eirik publiserer `firestore.rules`.
- [x] **Steg 3: Ordene.** Gjort 2026-11-02. `tools/ordbytte.py` bytter nå både musikkord og pedagogikkord rett til filosofiord (med unntak for «reformasjon», «reformator», «Reformpedagogikk» og «den pedagogiske rekkefølgen»), og kjørt på HTML-sidene og `js/` (ikke `genealogy-data.js`, som er testfrø). `tools/finn-musikkord.js` leter nå etter pedagogikkord (`--musikk` tar også musikkordene), og lista er tom for alt unntatt det som hører til steg 4 og 6: `STORY_ORDER` og `SPALTER` (retningsnavn, når skjelettet er bestemt) og kategoriene «Læreplan» m.fl. (`TECH_CATEGORIES` og fanene i `teacher.html`, steg 4). «Den pedagogiske rekkefølgen» i tre-editoren står igjen med vilje: den betyr undervisningsrekkefølgen.
- [x] **Steg 4: Fagkonstanter og tester.** Gjort 2026-11-02: disiplinene (`INSTRUMENT_GROUPS`, `INSTRUMENT_TITLE` og visningsrekkefølgen i `js/felles/limits.js`), milepælkategoriene (`TECH_CATEGORIES` i `js/ui/ui-tech.js` og fanene i `teacher.html`), eksempeltekstene i skjemaene (Kant, Königsberg, «Fri vilje, Universalier»), ordgrensene og skjelettstien i innholdsverktøyene (`json files/filosofi-skjelett.json`), og testene som låste det gamle faget (disiplinverdiene i testdata, kategoriene og dokumenteksemplene). **Venter på skjelettet (steg 6):** `STORY_ORDER` (`js/felles/story-format.js`) og `SPALTER` (`js/utforsk/explore-sjanger.js`) må få de nye retningsnavnene, og `tools/pedagogikk-skjelett.js`, `tools/lag-pedagogikk-skjelett.js`, `tests/unit/pedagogikk-skjelett.test.js`, `tests/helpers/skjelett-tre.js` og treeksemplene i `tests/unit/sjekk-innholdsfil.test.js` (Dewey, Progressivismen) skrives om samtidig. Musikktreet i `js/sjangre/genealogy-data.js` står som testfrø.
- [x] **Steg 5: Publisering.** Gjort 2026-11-02: DNS (CNAME til `eiriksorbo.github.io`, sjekket mot alle tre navneserverne), Pages fra `main` og `/ (root)`, sertifikat fra Let's Encrypt, Firebase-domenet og `firestore.rules` publisert (offentlig lesing av `artists`, `content` og `genreDescriptions` gir 200 og tomme samlinger). Klassekodeskjermen står på `https://filosofi.historieappen.no` uten konsollfeil. Ikke testet av meg: studentsiden bak klassekoden og lærerinnloggingen (Eirik tester). Gjenstår: nettlesertestene i `tests/e2e/` (jobben «nettleser» under Actions) sjekker musikkord og må rettes ut fra de faktiske feilene.
- [x] **Steg 6: Skjelettet (Opus), foreløpig.** Forslaget står i `tools/filosofi-skjelett.js`: 8 retninger, 78 epoker, 17 tidsrom, 122 påvirkninger og 22 motreaksjoner. `node tools/lag-filosofi-skjelett.js` kjører det gjennom appens validator og skriver `json files/filosofi-skjelett.json`. **Eirik har ikke godkjent det ennå** (se «Valg tatt uten Eirik» under). Node-ID-ene låses først når treet er importert, så alt kan endres fram til da.
- [ ] **Steg 7: Innholdet (Opus), i runder.** Retninger og epoker, personer, begreper, milepæler, de fire sidene. Omfanget avtales før hver runde.
- [ ] **Steg 8: Dokumentene.** `README.md`, `JSON-OPPSKRIFT.md`, `MODULKART.md`. `KART-OPPSKRIFT.md` slettes.

## Valg tatt uten Eirik (natt til 2026-11-03)

Eirik la seg og ba om at det ikke skulle spørres. Disse valgene er derfor Claudes, og han kan overstyre dem. Widgeten med forslaget står i samtalen.

- **Skjelettet er tatt som foreslått:** de åtte retningene, 78 epoker, start i 800 f.Kr. (for å få med Upanishadene) og Aristoteles under Natur og erfaring.
- **Tradisjoner Eirik ikke nevnte:** Jødisk filosofi, Kyoto-skolen og Afrikansk filosofi er med i «Andre tradisjoner». De er enkle å fjerne før import.
- **Kilderekkefølge:** SEP, IEP, SNL, Britannica, med bøker der nettkilde mangler.
- **Ikke pushet:** alt ligger lokalt på `main`. Eirik pusher når han har sett det.

## Pågår

Ingen tekstrunde er startet. Skriv her hva som pågår før en økt begynner, og sjekk `origin/main` først.
