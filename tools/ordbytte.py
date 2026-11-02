#!/usr/bin/env python3
"""Steg 3: bytter musikkord og pedagogikkord med filosofiord i SYNLIG tekst i HTML-sider (tekst mellom tagger og title, placeholder, aria-label, alt).
Rører aldri id, class, data-attributter, skript eller stil. Kjør: python3 -I tools/ordbytte.py side.html ...
Ordtabellen følger PLAN.md. Både musikkordene (artist, sjanger, instrument ...) og pedagogikkordene (teoretiker, prinsipp,
reform, fagbakgrunn ...) går rett til filosofiordene, så skriptet kan brukes på commits som hentes fra begge de andre appene."""
import re, sys
FRASER = [
 # Hele uttrykk først. Lengste form vinner uansett, men uttrykkene må stå som ett ord i tabellen.
 ("skole og oppdragelse", "vitenskap og lærdom"),
 ("reformen ble vedtatt eller innført, eller milepælen inntraff", "milepælen inntraff"),
 ("lover, læreplaner og metoder", "institusjoner, verk, miljøer og overlevering"),
 ("reformer og milepæler", "milepæler"), ("reformer eller milepæler", "milepæler"),
 ("reform eller milepæl", "milepæl"), ("reform og milepæl", "milepæl"),
 ("ett fagbakgrunn", "én disiplin"), ("dette fagbakgrunnen", "denne disiplinen"),
 ("ett instrument", "én disiplin"), ("dette instrumentet", "denne disiplinen"),
]
ORD = [
 # Musikk
 ("metasjangrene","retningene"),("metasjangre","retninger"),("metasjangeren","retningen"),("metasjanger","retning"),
 ("undersjangrene","begrepene"),("undersjangre","begreper"),("undersjangeren","begrepet"),("undersjanger","begrep"),
 ("sjangrene","epokene"),("sjangre","epoker"),("sjangeren","epoken"),("sjanger","epoke"),
 ("artistene","filosofene"),("artisten","filosofen"),("artister","filosofer"),("artist","filosof"),
 ("innovasjonene","milepælene"),("innovasjoner","milepæler"),("innovasjonen","milepælen"),("innovasjon","milepæl"),
 ("instrumentene","disiplinene"),("instrumenter","disipliner"),("instrumentet","disiplinen"),("instrument","disiplin"),
 # Pedagogikk
 ("teoretikerne","filosofene"),("teoretikeren","filosofen"),("teoretikere","filosofer"),("teoretiker","filosof"),
 ("pedagogene","filosofene"),("pedagogen","filosofen"),("pedagoger","filosofer"),("pedagog","filosof"),
 ("pedagogikk","filosofi"),("pedagogiske","filosofiske"),("pedagogisk","filosofisk"),
 ("prinsippene","begrepene"),("prinsipper","begreper"),("prinsippet","begrepet"),("prinsipp","begrep"),
 ("prinsippkort","begrepskort"),
 ("reformskort","milepælskort"),("reformkort","milepælskort"),("reformoversikt","milepæloversikt"),
 ("reformene","milepælene"),("reformer","milepæler"),("reformen","milepælen"),("reform","milepæl"),
 ("fagbakgrunnene","disiplinene"),("fagbakgrunner","disipliner"),("fagbakgrunnen","disiplinen"),("fagbakgrunn","disiplin"),
]
MAP = FRASER + ORD
# Unntak: «reformasjon», «reformator», «Reformpedagogikk» og «reformert» er ikke reformer i appens forstand, og
# «den pedagogiske rekkefølgen» i tre-editoren betyr undervisningsrekkefølgen (se FILOSOFI-OPPSKRIFT.md).
UNNTAK = {
 "reform": r"(?!asjon|ator|pedag|ert|ere\b|ist)",
 "reformer": r"(?!t|e\b|es\b)",
 "pedagog": r"(?!ik|isk)",
 "pedagogisk": r"(?!e?\s+rekkefølg)", "pedagogiske": r"(?!\s+rekkefølg)",
}
# Lengste form først, så «teoretikeren» ikke fanges av «teoretikere» og et uttrykk ikke av enkeltordet i det.
_SORT = sorted(MAP, key=lambda e: -len(e[0]))
RE = re.compile(r"(?<![\wæøåÆØÅ-])(" + "|".join(re.escape(a) + UNNTAK.get(a, "") for a, _ in _SORT) + ")", re.I)
D = dict(MAP)
def byt(tekst):
    def f(m):
        o = m.group(1); n = D[o.lower()]
        if o.isupper() and len(o) > 1: return n.upper()
        return n[0].upper() + n[1:] if o[0].isupper() else n
    return RE.sub(f, tekst)
ATTR = re.compile(r'(\b(?:title|placeholder|aria-label|alt)=")([^"]*)(")')
TOK = re.compile(r"(<script[\s\S]*?</script>|<style[\s\S]*?</style>|<!--[\s\S]*?-->|<[^>]+>)")
def html(s):
    ut = []
    for t in TOK.split(s):
        if t.startswith("<script") or t.startswith("<style") or t.startswith("<!--"): ut.append(t)
        elif t.startswith("<"): ut.append(ATTR.sub(lambda m: m.group(1) + byt(m.group(2)) + m.group(3), t))
        else: ut.append(byt(t))
    return "".join(ut)
if __name__ == "__main__" and "--js" not in sys.argv:
    for f in sys.argv[1:]:
        s = open(f, encoding="utf8").read(); n = html(s)
        if n != s: open(f, "w", encoding="utf8").write(n); print("endret", f)


# --- JS (--js): bare tekststrenger som ser ut som setninger eller etiketter ----
# En streng byttes bare når den starter med stor bokokstav eller har minst fire ord,
# og ikke har tegn som røper kode eller velgere (= { } < > # [ ] _). Treff
# ved siden av - _ . : / = hoppes over (klassenavn, nøkler, filnavn).
import re as _re
_STR = _re.compile(r"""(?P<q>["'])(?P<t>(?:\\.|(?!(?P=q))[^\\\n])*)(?P=q)""")
_KODE = _re.compile(r"[={}<>#\[\]_]")
def _byt_js(t):
    if _KODE.search(t): return t
    ord_ = t.split()
    if not (t[:1].isupper() or len(ord_) >= 4): return t
    def f(m):
        a, b = m.start(1), m.end(1)
        for k in (t[a - 1:a] if a else "", t[b:b + 1]):
            if k and k in "-_.:/=": return m.group(0)
        return byt(m.group(0))
    return RE.sub(f, t)
def js(s):
    ut = []
    for linje in s.split("\n"):
        if linje.lstrip().startswith(("//", "*", "/*", "import ")) or "importmap" in linje:
            ut.append(linje); continue
        ut.append(_STR.sub(lambda m: m.group("q") + _byt_js(m.group("t")) + m.group("q"), linje))
    return "\n".join(ut)


# --- JS-malstrenger (--js): HTML i `...` får samme behandling som HTML-sider ---
# ${...}-uttrykkene settes ut som plassholdere, så bare den statiske teksten byttes.
def _mal(innhold):
    deler, ut, i, n = [], [], 0, len(innhold)
    while i < n:
        if innhold.startswith("${", i):
            d, j = 1, i + 2
            while j < n and d:
                d += (innhold[j] == "{") - (innhold[j] == "}"); j += 1
            deler.append(innhold[i:j]); ut.append("\x01%d\x01" % (len(deler) - 1)); i = j
        else:
            ut.append(innhold[i]); i += 1
    tekst = "".join(ut)
    ny = html(tekst) if "<" in tekst else _byt_js(tekst)
    return _re.sub("\x01(\\d+)\x01", lambda m: deler[int(m.group(1))], ny)
_MAL = _re.compile(r"`((?:\\.|[^`\\])*)`", _re.S)
_js_streng = js
def js(s):
    s = _js_streng(s)
    return _MAL.sub(lambda m: "`" + _mal(m.group(1)) + "`", s)

if __name__ == "__main__" and "--js" in sys.argv:
    for f in [a for a in sys.argv[1:] if a != "--js"]:
        s = open(f, encoding="utf8").read(); n = js(s)
        if n != s: open(f, "w", encoding="utf8").write(n); print("endret", f)
