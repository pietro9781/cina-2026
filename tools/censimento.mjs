import fs from 'node:fs';
import { toWGS, wgs2gcj, haversine } from '../geo.js';
const EP = 'https://maps.mail.ru/osm/tools/overpass/api/interpreter';
const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const DAYS = eval(html.match(/const DAYS = (\[[\s\S]*?\n\];)/)[1].slice(0, -1));

// candidate: tappe che hanno plausibilmente un "dentro" da percorrere
const CAND = new Set([
 'Zhengyangmen','Tempio dei Lama',"Palazzo d'Estate",'Jingshan Park','Beihai Park',
 'Torre del Tamburo e della Campana','Grande Muraglia · Jinshanling',
 'Esercito di Terracotta','Torre della Campana','Grande Moschea di Xi\'an',"Mura di Xi'an",
 'Base dei panda giganti','Hongyadong','Tianmen Mountain','Yuanjiajie','Monte Tianzi',
 'Yangjiajie','Golden Whip Stream','Grotte del Flauto di Canna','Collina della Proboscide',
 'Impression Liu Sanjie','Grande Buddha di Lantau','Monastero Po Lin','Tai O',
]);
const q = (lat,lng,r) => `[out:json][timeout:60];
(
 nwr(around:${r},${lat},${lng})["name:en"]["historic"];
 nwr(around:${r},${lat},${lng})["name:en"]["tourism"~"attraction|artwork|museum|viewpoint"];
 nwr(around:${r},${lat},${lng})["name:en"]["building"~"temple|palace|pavilion|hall|gate|pagoda"];
 nwr(around:${r},${lat},${lng})["name:en"]["amenity"="place_of_worship"];
 nwr(around:${r},${lat},${lng})["name:en"]["natural"~"peak|cave_entrance"];
 nwr(around:${r},${lat},${lng})["name:en"]["man_made"~"tower|bridge"];
);
out center 200;`;
const out = [];
for (const d of DAYS) for (const s of d.stops) {
  if (!CAND.has(s.n) || !s.ll) continue;
  const [lat,lng] = toWGS(s.ll);
  const r = /Muraglia|Tianmen|Yuanjiajie|Tianzi|Yangjiajie|Whip|Mura di|Tai O/.test(s.n) ? 1600 : 700;
  try {
    const res = await fetch(EP,{method:'POST',body:'data='+encodeURIComponent(q(lat,lng,r))});
    const j = await res.json();
    const seen = new Set();
    const el = (j.elements||[]).filter(e=>e.tags?.['name:en'])
      .filter(e=>!/hotel|hostel|guest_house/.test(e.tags.tourism||''))
      .filter(e=>{const k=e.tags['name:en'].toLowerCase(); if(seen.has(k))return false; seen.add(k); return true;});
    out.push({ tappa:s.n, giorno:d.date, n:el.length,
               esempi: el.slice(0,4).map(e=>e.tags['name:en']) });
    console.log(`${String(el.length).padStart(3)}  ${s.n.slice(0,34).padEnd(36)} ${el.slice(0,3).map(e=>e.tags['name:en'].slice(0,24)).join(' · ')}`);
  } catch(e){ console.log(`  ERR ${s.n}: ${e.message}`); }
  await new Promise(r=>setTimeout(r,1600));
}
fs.writeFileSync(new URL('../censimento.json', import.meta.url), JSON.stringify(out,null,1));
const buoni = out.filter(o=>o.n>=5);
console.log(`\n${out.length} candidate · ${buoni.length} con almeno 5 punti dentro`);
console.log('poche o nessuna:', out.filter(o=>o.n<5).map(o=>`${o.tappa} (${o.n})`).join(', '));
