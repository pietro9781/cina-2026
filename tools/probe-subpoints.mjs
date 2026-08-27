import { wgs2gcj, haversine } from '../geo.js';
const ua = { 'User-Agent': 'cina2026-feasibility/1.0 (personal itinerary)' };
// Punti che scriverei IO in una guida, e il sito a cui appartengono.
const CASI = [
  ['Città Proibita', [39.9168,116.3972], [
    'Meridian Gate Forbidden City', 'Hall of Supreme Harmony Beijing',
    'Gate of Supreme Harmony Beijing', 'Palace of Heavenly Purity Beijing',
    'Imperial Garden Forbidden City Beijing', 'Nine Dragon Wall Forbidden City',
    'Gate of Divine Prowess Beijing']],
  ["Palazzo d'Estate", [40.0000,116.2755], [
    'Long Corridor Summer Palace', 'Marble Boat Summer Palace',
    'Tower of Buddhist Incense Summer Palace', 'Seventeen-Arch Bridge Summer Palace',
    'Kunming Lake Beijing', 'Longevity Hill Beijing']],
  ['Tempio dei Lama', [39.9477,116.4173], [
    'Hall of the Wheel of the Law Yonghe Temple', 'Wanfu Pavilion Yonghe Temple']],
  ['Beihai Park', [39.9254,116.3893], [
    'White Pagoda Beihai Park', 'Nine-Dragon Wall Beihai Park', 'Jade Islet Beihai']],
];
const hit = (a,b) => haversine(a,b);
for (const [sito, centroGcj, nomi] of CASI) {
  console.log(`\n${sito}`);
  for (const q of nomi) {
    const u = 'https://nominatim.openstreetmap.org/search?' +
      new URLSearchParams({ q, format: 'json', limit: '1' });
    try {
      const j = await (await fetch(u, { headers: ua })).json();
      if (!j.length) { console.log(`   ✗  ${q}  — non trovato`); }
      else {
        const g = wgs2gcj(+j[0].lat, +j[0].lon);
        const d = hit(g, centroGcj);
        const dentro = d < 1200;
        console.log(`   ${dentro?'✓':'?'}  ${q.padEnd(46)} ${d.toFixed(0).padStart(5)} m dal centro  [${g[0].toFixed(5)},${g[1].toFixed(5)}]`);
      }
    } catch (e) { console.log(`   !  ${q} — ${e.message}`); }
    await new Promise(r => setTimeout(r, 1150));
  }
}
