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
- [ ] **Steg 1: Kopien.** Klonet 2026-11-02, nå på `7bd910d6` (v0.25). Remotes og hooks satt opp, pedagogikkinnholdet fjernet. Gjenstår: `origin` mot Eiriks nye repo.
- [ ] **Steg 2: Identitet.** Gjort 2026-11-02: Firebase-konfigurasjonen (prosjekt `filosofihistorie-68ff7`), CNAME, manifest, package, robots, skjulte titler, filnavn på eksport, domenet i utskriften, versjon 0.01, port 8741. Gjenstår: klassekode i `js/gate.js` (salt, hash og `version: 1`), logoen, og at Eirik publiserer `firestore.rules`.
- [ ] **Steg 3: Ordene.** `tools/ordbytte.py` og `tools/finn-musikkord.js`.
- [ ] **Steg 4: Fagkonstanter og tester.**
- [ ] **Steg 5: Publisering.** DNS, Pages, Firebase, varsel fra GitHub, test.
- [ ] **Steg 6: Skjelettet (Opus).** Retninger, tidsrom, epoker, påvirkninger og motreaksjoner, inkludert «Andre tradisjoner».
- [ ] **Steg 7: Innholdet (Opus), i runder.** Retninger og epoker, personer, begreper, milepæler, de fire sidene. Omfanget avtales før hver runde.
- [ ] **Steg 8: Dokumentene.** `README.md`, `JSON-OPPSKRIFT.md`, `MODULKART.md`. `KART-OPPSKRIFT.md` slettes.

## Pågår

Ingen tekstrunde er startet. Skriv her hva som pågår før en økt begynner, og sjekk `origin/main` først.
