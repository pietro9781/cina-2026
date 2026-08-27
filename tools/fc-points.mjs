import { toWGS, wgs2gcj, haversine } from '../geo.js';
const EP = 'https://maps.mail.ru/osm/tools/overpass/api/interpreter';
const FC_GCJ = [39.9168038, 116.3971621];
const [lat, lng] = toWGS(FC_GCJ);
const q = `[out:json][timeout:90];
(
 nwr(around:750,${lat},${lng})["name:en"]["historic"];
 nwr(around:750,${lat},${lng})["name:en"]["tourism"~"attraction|artwork|museum"];
 nwr(around:750,${lat},${lng})["name:en"]["building"~"temple|palace|pavilion|hall|gate"];
 nwr(around:750,${lat},${lng})["name:en"]["man_made"="tower"];
);
out center 300;`;
const j = await (await fetch(EP, { method:'POST', body:'data='+encodeURIComponent(q) })).json();
const seen = new Set();
const pts = (j.elements||[])
  .filter(e => e.tags?.['name:en'])
  .filter(e => !/hotel|hostel|guest_house|restaurant|cafe/.test(e.tags.tourism||e.tags.amenity||''))
  .map(e => {
    const p = e.center || e;
    const g = wgs2gcj(p.lat, p.lon);
    return { en: e.tags['name:en'], zh: e.tags.name, lat: +g[0].toFixed(6), lng: +g[1].toFixed(6),
             d: Math.round(haversine(g, FC_GCJ)),
             tipo: e.tags.historic || e.tags.tourism || e.tags.building || e.tags.man_made };
  })
  .filter(p => { const k = p.en.toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true; })
  .sort((a,b) => a.lat - b.lat);
console.log(`${pts.length} punti distinti, ordinati da SUD a NORD:\n`);
pts.forEach(p => console.log(
  `${p.lat.toFixed(5)}  ${String(p.en).slice(0,44).padEnd(46)} ${String(p.zh||'').slice(0,14).padEnd(16)} ${p.tipo}`));
import fs from 'node:fs';
fs.writeFileSync(new URL('../fc-osm.json', import.meta.url), JSON.stringify(pts, null, 1));
