import urllib.request, urllib.parse, json, re, os, io, time, sys
from PIL import Image
UA = "cina-2026-itinerary/1.0 (https://github.com/pietro9781/cina-2026) python-urllib"
H = {"User-Agent": UA, "Accept": "application/json"}

def get(url, headers=H, tent=5):
    attesa = 3
    for i in range(tent):
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=60).read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503) and i < tent - 1:
                print(f"     …{e.code}, aspetto {attesa}s", flush=True); time.sleep(attesa); attesa *= 2
            else: raise
    raise RuntimeError("troppi tentativi")

def api(p):
    return json.loads(get("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(p)))

def pulisci(h): return re.sub(r"<[^>]+>", "", h or "").strip()

PUNTI = [
 ("01","Porta del Meridiano","Meridian Gate Forbidden City Wumen"),
 ("02","Porta dell'Armonia Suprema","Gate of Supreme Harmony Taihemen"),
 ("03","Sala dell'Armonia Suprema","Hall of Supreme Harmony Taihedian"),
 ("04","Sala dell'Armonia Centrale","Hall of Central Harmony Zhonghedian"),
 ("05","Sala dell'Armonia Preservata","Hall of Preserving Harmony Baohedian"),
 ("06","Muro dei Nove Draghi","Nine Dragon Wall Forbidden City"),
 ("07","Porta della Purezza Celeste","Gate of Heavenly Purity Qianqingmen"),
 ("08","Palazzo della Purezza Celeste","Palace of Heavenly Purity Qianqinggong"),
 ("09","Sala dell'Unione","Hall of Union Jiaotaidian Forbidden City"),
 ("10","Palazzo della Tranquillita Terrena","Palace of Earthly Tranquility Kunninggong"),
 ("11","Giardino Imperiale","Imperial Garden Forbidden City Yuhuayuan"),
 ("12","Pozzo della Concubina Zhen","Well of Concubine Zhen Forbidden City Zhenfei"),
 ("13","Porta della Potenza Divina","Gate of Divine Might Shenwumen"),
]
os.makedirs("foto", exist_ok=True)
meta = json.load(open("foto/meta.json")) if os.path.exists("foto/meta.json") else []
fatti = {m["num"] for m in meta if m.get("candidati")}
for num, nome, query in PUNTI:
    if num in fatti:
        print(f"{num} {nome[:32]:34} già fatto"); continue
    try:
        j = api({"action":"query","generator":"search","gsrsearch":query,"gsrnamespace":"6",
                 "gsrlimit":"6","prop":"imageinfo","iiprop":"url|size|extmetadata",
                 "iiurlwidth":"1000","format":"json"})
        pagine = [p for p in j.get("query",{}).get("pages",{}).values() if p.get("imageinfo")]
        pagine.sort(key=lambda p: abs(p["imageinfo"][0]["width"]/max(1,p["imageinfo"][0]["height"]) - 1.5))
        scelti = []
        for k, p in enumerate(pagine[:2]):
            time.sleep(2.5)
            ii = p["imageinfo"][0]; em = ii.get("extmetadata", {})
            d = get(ii.get("thumburl") or ii["url"], headers={"User-Agent": UA})
            im = Image.open(io.BytesIO(d)).convert("RGB"); im.thumbnail((900, 900))
            f = f"foto/fc-{num}-{k}.jpg"; im.save(f, "JPEG", quality=78, optimize=True)
            scelti.append({"file": f, "titolo": p["title"], "w": im.width, "h": im.height,
                "kb": round(os.path.getsize(f)/1024),
                "autore": pulisci(em.get("Artist",{}).get("value","")),
                "licenza": em.get("LicenseShortName",{}).get("value",""),
                "fonte": "https://commons.wikimedia.org/wiki/" + p["title"].replace(" ", "_")})
        meta = [m for m in meta if m["num"] != num] + [{"num": num, "nome": nome, "candidati": scelti}]
        json.dump(sorted(meta, key=lambda m: m["num"]), open("foto/meta.json","w"), indent=1, ensure_ascii=False)
        print(f"{num} {nome[:32]:34} " + " | ".join(f"{c['w']}x{c['h']} {c['kb']}KB {c['licenza']}" for c in scelti), flush=True)
    except Exception as e:
        print(f"{num} {nome}: ERRORE {e}", flush=True)
    time.sleep(3)
tot = sum(os.path.getsize("foto/"+f) for f in os.listdir("foto") if f.endswith(".jpg"))
print(f"\ntotale scaricato: {tot//1024} KB")
