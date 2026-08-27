import { toWGS, wgs2gcj, haversine } from '../geo.js';
const EP = 'https://maps.mail.ru/osm/tools/overpass/api/interpreter';
const SITI = [
  ['Città Proibita',        [39.9168038,116.3971621], 800],
  ["Palazzo d'Estate",      [39.9999823,116.2754606], 1100],
  ['Esercito di Terracotta',[34.3841153,109.2784918], 600],
  ['Tempio dei Lama',       [39.9476712,116.4172902], 350],
  ['Beihai Park',           [39.9254474,116.3892639], 800],
  ['Jingshan Park',         [39.9250988,116.3968433], 500],
  ['Monastero Po Lin',      [22.2554932,113.9080796], 400],
  ['Tempio del Cielo?/Houhai',[39.942312,116.385821], 600],
  ['Nanluoguxiang (vicolo)',[39.9334746,116.4133492], 300],
  ['Kuanzhai (Chengdu)',    [30.6636111,104.0525],    300],
];
const q = (lat,lng,r) => `[out:json][timeout:60];
(
 nwr(around:${r},${lat},${lng})["name"]["historic"];
 nwr(around:${r},${lat},${lng})["name"]["tourism"];
 nwr(around:${r},${lat},${lng})["name"]["amenity"="place_of_worship"];
 nwr(around:${r},${lat},${lng})["name"]["building"]["name:en"];
);
out center 250;`;
let tot = 0, totEn = 0;
for (const [nome, ll, r] of SITI) {
  const [lat,lng] = toWGS(ll);
  try {
    const res = await fetch(EP, { method:'POST', body:'data='+encodeURIComponent(q(lat,lng,r)) });
    const j = await res.json();
    const el = (j.elements||[]).filter(e => e.tags?.name);
    const en = el.filter(e => e.tags['name:en']);
    tot += el.length; totEn += en.length;
    console.log(`\n${nome}  —  ${el.length} nominati, ${en.length} con nome inglese`);
    en.slice(0,8).forEach(e => {
      const p = e.center || e;
      const g = wgs2gcj(p.lat, p.lon);
      console.log(`     ${(e.tags['name:en']).slice(0,42).padEnd(44)} ${haversine(g,ll).toFixed(0).padStart(4)} m`);
    });
    if (!en.length && el.length) console.log('     (solo nomi cinesi: ' + el.slice(0,4).map(e=>e.tags.name).join(' · ') + ')');
  } catch(e) { console.log(nome, 'ERR', e.message); }
  await new Promise(r => setTimeout(r, 1800));
}
console.log(`\nTOTALE: ${tot} elementi nominati, ${totEn} con nome inglese`);
