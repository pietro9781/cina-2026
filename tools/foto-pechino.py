import urllib.request, urllib.parse, json, re, os, io, time
from PIL import Image
UA="cina-2026-itinerary/1.0 (https://github.com/pietro9781/cina-2026) python-urllib"
def get(u,h=None,t=5):
    h=h or {"User-Agent":UA,"Accept":"application/json"}; a=4
    for i in range(t):
        try: return urllib.request.urlopen(urllib.request.Request(u,headers=h),timeout=70).read()
        except urllib.error.HTTPError as e:
            if e.code in (429,503) and i<t-1: print(f"     …{e.code}, aspetto {a}s",flush=True); time.sleep(a); a*=2
            else: raise
def api(p): return json.loads(get("https://commons.wikimedia.org/w/api.php?"+urllib.parse.urlencode(p)))
def pul(h): return re.sub(r"<[^>]+>","",h or "").strip()

# codice -> query di ricerca su Commons
FOTO = {
 "zh-1":"Zhengyangmen gate Beijing","zh-2":"Zhengyangmen archery tower","zh-3":"Tiananmen Square Monument People's Heroes",
 "la-1":"Yonghe Temple Lama Beijing","la-2":"Wanfu Pavilion Yonghe Temple Maitreya","la-3":"Beijing Confucius Temple",
 "es-1":"Tower of Buddhist Incense Summer Palace","es-2":"Marble Boat Summer Palace","es-3":"Long Corridor Summer Palace",
 "es-4":"Hall of Benevolence and Longevity Summer Palace","es-5":"Suzhou Street Summer Palace","es-6":"Bronze Ox Summer Palace",
 "ji-1":"Jingshan Park Wanchunting pavilion","ji-2":"View Forbidden City from Jingshan","ji-3":"Shouhuang Palace Jingshan",
 "be-1":"White Pagoda Beihai Park","be-2":"Five Dragon Pavilions Beihai","be-3":"Nine Dragon Wall Beihai Park",
 "be-4":"Round City Beihai Park","be-5":"Jingxinzhai Beihai Park",
 "ta-1":"Beijing Drum Tower","ta-2":"Beijing Bell Tower","ta-3":"Yandai Xiejie Beijing","ta-4":"Yinding Bridge Beijing",
 "mu-1":"Jinshanling Great Wall","mu-2":"Jinshanling Great Wall tower","mu-3":"Great Wall Jinshanling sunrise",
}
os.makedirs("foto",exist_ok=True)
crediti = json.load(open("foto/crediti.json")) if os.path.exists("foto/crediti.json") else {}
for code,q in FOTO.items():
    if code in crediti: print(f"{code} già fatto"); continue
    try:
        j=api({"action":"query","generator":"search","gsrsearch":q,"gsrnamespace":"6","gsrlimit":"6",
               "prop":"imageinfo","iiprop":"url|size|extmetadata","iiurlwidth":"1000","format":"json"})
        pg=[p for p in j.get("query",{}).get("pages",{}).values()
            if p.get("imageinfo") and p["title"].lower().endswith((".jpg",".jpeg",".png"))]
        if not pg: print(f"{code:6} «{q}»: NIENTE"); time.sleep(3); continue
        pg.sort(key=lambda p: abs(p["imageinfo"][0]["width"]/max(1,p["imageinfo"][0]["height"])-1.5))
        p=pg[0]; ii=p["imageinfo"][0]; em=ii.get("extmetadata",{})
        time.sleep(2.5)
        d=get(ii.get("thumburl") or ii["url"],h={"User-Agent":UA})
        im=Image.open(io.BytesIO(d)).convert("RGB"); im.thumbnail((880,880))
        f=f"foto/{code}.jpg"; im.save(f,"JPEG",quality=76,optimize=True)
        crediti[code]={"file":f"{code}.jpg","autore":pul(em.get("Artist",{}).get("value",""))or"Wikimedia Commons",
                       "licenza":em.get("LicenseShortName",{}).get("value",""),
                       "fonte":"https://commons.wikimedia.org/wiki/"+p["title"].replace(" ","_"),
                       "titolo":p["title"],"kb":round(os.path.getsize(f)/1024)}
        json.dump(crediti,open("foto/crediti.json","w"),indent=1,ensure_ascii=False)
        print(f"{code:6} {crediti[code]['kb']:>4}KB  {p['title'][5:52]}",flush=True)
    except Exception as e: print(f"{code:6} ERRORE {e}",flush=True)
    time.sleep(3)
print("\ntotale foto:", len([f for f in os.listdir('foto') if f.endswith('.jpg')]),
      "·", sum(os.path.getsize('foto/'+f) for f in os.listdir('foto') if f.endswith('.jpg'))//1024, "KB")
