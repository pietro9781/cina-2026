import fs from 'node:fs';
import { splitFrames, frameLabels, haversine, toGCJ, isHongKong, fmtDistance } from '../geo.js';
const html = fs.readFileSync(new URL('../index.html', import.meta.url),'utf8');
const m = html.match(/const DAYS = (\[[\s\S]*?\n\];)/);
const DAYS = eval(m[1].slice(0,-1));
const bm = html.match(/const BASI = (\[[\s\S]*?\n\];)/);
const NOMI = new Set(eval(bm[1].slice(0,-1)).map(b => b[0]));
console.log(`giorni: ${DAYS.length}\n`);
let noLL = [], hk = 0, total = 0;
DAYS.forEach((d,i)=>{
  const frames = splitFrames(d.stops);
  const labels = frameLabels(d, frames, DAYS[i-1], NOMI);
  d.stops.forEach(s=>{ total++; if(!s.ll) noLL.push(`${d.date} ${s.t} ${s.n}`); else if(isHongKong(...s.ll)) hk++; });
  const flag = frames.length>1 ? '  <<< diviso' : '';
  console.log(`${d.date} ${d.tr?'T':' '} ${String(d.stops.length).padStart(2)} tappe -> ${frames.length} riquadro/i  [${labels.join(' | ')}]${flag}`);
  if(frames.length>1){
    frames.forEach((f,k)=>{
      const pts=f.filter(s=>s.ll);
      const span = pts.length>1 ? fmtDistance(Math.max(...pts.flatMap((a,x)=>pts.slice(x+1).map(b=>haversine(a.ll,b.ll))))) : '—';
      console.log(`        ${k+1}. ${f.map(s=>s.n).join(', ')}   (estensione ${span})`);
    });
  }
});
console.log(`\ntappe totali ${total} · a Hong Kong ${hk} · senza coordinate ${noLL.length}`);
noLL.forEach(x=>console.log('  MANCA ll:', x));
