import json
cr = json.load(open("foto/crediti.json"))
W  = "https://en.wikipedia.org/wiki/"
def F(code):
    if not code or code not in cr: return None
    c = cr[code]
    return dict(f="foto/"+c["file"], autore=c["autore"], licenza=c["licenza"], fonte=c["fonte"])
SITI = json.load(open("tools/pechino-testi.json"))
def esc(t): return t.replace("\\","\\\\").replace('"','\\"')
blocchi=[]
for s in SITI:
    righe=[]
    for p in s["punti"]:
        f = F(p.get("foto"))
        fl = (f'\n        foto: {{ f: "{f["f"]}", autore: "{esc(f["autore"])}", licenza: "{esc(f["licenza"])}", fonte: "{f["fonte"]}" }},') if f else ""
        righe.append(f'''      {{
        n: "{esc(p["n"])}",
        zh: "{p.get("zh","")}",
        ll: [{p["ll"][0]}, {p["ll"][1]}],{fl}
        fonte: "{s["fonte"]}",
        d: "{esc(p["d"])}",
        curiosita: "{esc(p["cur"])}"
      }}''')
    blocchi.append(f'''  "{esc(s["nome"])}": {{
    durata: "{s["durata"]}",
    intro:
      "{esc(s["intro"])}",
    punti: [
{",".join(righe)}
    ]
  }}''')
open("/tmp/pechino.js","w").write(",\n".join(blocchi))
print(f"{len(SITI)} siti · {sum(len(s['punti']) for s in SITI)} punti · "
      f"{sum(len(p['d'].split())+len(p['cur'].split()) for s in SITI for p in s['punti'])} parole")
mancanti=[p['n'] for s in SITI for p in s['punti'] if p.get('foto') and p['foto'] not in cr]
if mancanti: print('foto mancanti per:', mancanti)
