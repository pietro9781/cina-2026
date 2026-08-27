import fs from 'node:fs';
import { toWGS, wgs2gcj, haversine } from '../geo.js';
const EP = 'https://maps.mail.ru/osm/tools/overpass/api/interpreter';
const SITI = JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const q = (lat,lng,r) => `[out:json][timeout:90];
(
 nwr(around:${r},${lat},${lng})["name:en"]["historic"];
 nwr(around:${r},${lat},${lng})["name:en"]["tourism"~"attraction|artwork|museum|viewpoint"];
 nwr(around:${r},${lat},${lng})["name:en"]["building"~"temple|palace|pavilion|hall|gate|pagoda|mosque"];
 nwr(around:${r},${lat},${lng})["name:en"]["amenity"~"place_of_worship"];
 nwr(around:${r},${lat},${lng})["name:en"]["man_made"~"tower|bridge"];
 nwr(around:${r},${lat},${lng})["name:en"]["natural"~"peak|cave_entrance"];
 nwr(around:${r},${lat},${lng})["name:en"]["barrier"="city_wall"];
);
out center 250;`;
const tutto = {};
for (const [nome,[ll,r]] of Object.entries(SITI)) {
  const [lat,lng] = toWGS(ll);
  let el = [];
  for (let t=0; t<3 && !el.length; t++) {
    try {
      const res = await fetch(EP,{method:'POST',body:'data='+encodeURIComponent(q(lat,lng,r))});
      const txt = await res.text();
      if (!txt.trim().startsWith('{')) { await new Promise(s=>setTimeout(s,7000)); continue; }
      const seen = new Set();
      el = (JSON.parse(txt).elements||[]).filter(e=>e.tags?.['name:en'])
        .filter(e=>!/hotel|hostel|guest_house/.test(e.tags.tourism||''))
        .filter(e=>{const k=e.tags['name:en'].toLowerCase(); if(seen.has(k))return false; seen.add(k); return true;})
        .map(e=>{ const p=e.center||e; const g=wgs2gcj(p.lat,p.lon);
          return { en:e.tags['name:en'], zh:e.tags.name, lat:+g[0].toFixed(6), lng:+g[1].toFixed(6),
                   d:Math.round(haversine(g,ll)) }; })
        .sort((a,b)=>a.d-b.d);
    } catch(e){ await new Promise(s=>setTimeout(s,7000)); }
  }
  tutto[nome]=el;
  console.log(`\n═══ ${nome} — ${el.length} punti ═══`);
  el.slice(0,18).forEach(p=>console.log(`   ${String(p.d).padStart(5)}m  ${p.en.slice(0,46).padEnd(48)} [${p.lat},${p.lng}]`));
  await new Promise(s=>setTimeout(s,1800));
}
fs.writeFileSync(process.argv[3], JSON.stringify(tutto,null,1));
