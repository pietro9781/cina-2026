import fs from 'node:fs';
import { splitFrames, boundsOf, toGCJ, fitZoom, viewportTiles } from '../geo.js';
const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const DAYS = eval(html.match(/const DAYS = (\[[\s\S]*?\n\];)/)[1].slice(0, -1));
const W = 356, H = 248;
const viste = [];
DAYS.forEach(d => splitFrames(d.stops).forEach(f => {
  const pts = f.filter(s => s.ll).map(s => toGCJ(s.ll));
  if (pts.length) viste.push({ b: boundsOf(pts), max: pts.length === 1 ? 13 : 16 });
}));
function conta(extraZoom) {
  const k = new Set();
  viste.forEach(v => {
    const z = fitZoom(v.b, W, H, v.max);
    for (let zz = z; zz <= Math.min(z + extraZoom, 18); zz++)
      viewportTiles(v.b, zz, W, H).forEach(t => k.add(`${t.z}/${t.x}/${t.y}`));
  });
  return k.size;
}
console.log(`riquadri distinti (${viste.length} viste):`);
for (const e of [0, 1, 2]) {
  const n = conta(e);
  const due = n * 2;                       // due lingue
  console.log(`  zoom +${e}: ${String(n).padStart(4)} riquadri  ->  ${String(due).padStart(4)} in due lingue`
    + `  ~${(due * 15 / 1024).toFixed(1)} MB  ~${(due / 24).toFixed(0)}s`);
}
