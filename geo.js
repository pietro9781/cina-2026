/* Cina 2026 — geodesia.
   Le coordinate salvate in index.html NON sono tutte nello stesso sistema:
   - Cina continentale : GCJ-02  (già allineate alle mappe Amap)
   - Hong Kong         : WGS-84  (allineate a Google / OSM)
   Verificato il 26/08/2026 su tile reali e su dati OSM: 8 punti continentali
   su 8 combaciano con GCJ-02, 3 punti di Hong Kong su 3 con WGS-84
   (il Grande Buddha a 4 metri). Qui sotto si normalizza al volo, senza
   toccare i dati. */

const A = 6378245.0;              // semiasse maggiore, ellissoide Krasovskij
const EE = 0.00669342162296594323; // eccentricità al quadrato

function transformLat(x, y) {
  let r = -100 + 2 * x + 3 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
  r += ((20 * Math.sin(6 * x * Math.PI) + 20 * Math.sin(2 * x * Math.PI)) * 2) / 3;
  r += ((20 * Math.sin(y * Math.PI) + 40 * Math.sin((y / 3) * Math.PI)) * 2) / 3;
  r += ((160 * Math.sin((y / 12) * Math.PI) + 320 * Math.sin((y * Math.PI) / 30)) * 2) / 3;
  return r;
}

function transformLng(x, y) {
  let r = 300 + x + 2 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
  r += ((20 * Math.sin(6 * x * Math.PI) + 20 * Math.sin(2 * x * Math.PI)) * 2) / 3;
  r += ((20 * Math.sin(x * Math.PI) + 40 * Math.sin((x / 3) * Math.PI)) * 2) / 3;
  r += ((150 * Math.sin((x / 12) * Math.PI) + 300 * Math.sin((x / 30) * Math.PI)) * 2) / 3;
  return r;
}

/** WGS-84 → GCJ-02. Applicata anche a Hong Kong: i tile Amap là sono spostati
    come nel continente (misurato: ~600 m), quindi niente esenzione HK. */
export function wgs2gcj(lat, lng) {
  let dLat = transformLat(lng - 105, lat - 35);
  let dLng = transformLng(lng - 105, lat - 35);
  const rad = (lat / 180) * Math.PI;
  let magic = Math.sin(rad);
  magic = 1 - EE * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180) / (((A * (1 - EE)) / (magic * sqrtMagic)) * Math.PI);
  dLng = (dLng * 180) / ((A / sqrtMagic) * Math.cos(rad) * Math.PI);
  return [lat + dLat, lng + dLng];
}

/** GCJ-02 → WGS-84. Non esiste in forma chiusa: si raffina per iterazione,
    converge sotto il centimetro in 3-4 giri. */
export function gcj2wgs(lat, lng) {
  let wLat = lat;
  let wLng = lng;
  for (let i = 0; i < 8; i++) {
    const [gLat, gLng] = wgs2gcj(wLat, wLng);
    const dLat = gLat - lat;
    const dLng = gLng - lng;
    if (Math.abs(dLat) < 1e-9 && Math.abs(dLng) < 1e-9) break;
    wLat -= dLat;
    wLng -= dLng;
  }
  return [wLat, wLng];
}

/** Riquadro Hong Kong + Macao. Serve solo a sapere in quale sistema è stato
    salvato il punto, non a decidere se convertirlo. */
export function isHongKong(lat, lng) {
  return lat >= 22.10 && lat <= 22.65 && lng >= 113.70 && lng <= 114.50;
}

/** Coordinata salvata → GCJ-02, cioè quella giusta per i tile Amap. */
export function toGCJ(ll) {
  return isHongKong(ll[0], ll[1]) ? wgs2gcj(ll[0], ll[1]) : [ll[0], ll[1]];
}

/** Coordinata salvata → WGS-84, cioè quella giusta per Google Maps. */
export function toWGS(ll) {
  return isHongKong(ll[0], ll[1]) ? [ll[0], ll[1]] : gcj2wgs(ll[0], ll[1]);
}

/** Distanza in metri sulla sfera. */
export function haversine(a, b) {
  const R = 6371000;
  const p1 = (a[0] * Math.PI) / 180;
  const p2 = (b[0] * Math.PI) / 180;
  const dP = ((b[0] - a[0]) * Math.PI) / 180;
  const dL = ((b[1] - a[1]) * Math.PI) / 180;
  const h =
    Math.sin(dP / 2) * Math.sin(dP / 2) +
    Math.cos(p1) * Math.cos(p2) * Math.sin(dL / 2) * Math.sin(dL / 2);
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

/** Soglia oltre la quale due tappe consecutive non stanno sulla stessa mappa. */
export const FRAME_SPLIT_M = 60000;

/**
 * Divide le tappe di una giornata in riquadri geografici.
 * Le tappe sono in ordine di orario, e un trasferimento è un singolo salto:
 * basta tagliare dove la distanza fra due tappe consecutive supera la soglia.
 * Ritorna un array di array di tappe (le tappe senza coordinate restano
 * attaccate al riquadro corrente, così nessuna sparisce dalla lista).
 */
export function splitFrames(stops, threshold = FRAME_SPLIT_M) {
  const frames = [];
  let current = [];
  let lastLL = null;
  for (const s of stops) {
    if (s.ll && lastLL && haversine(lastLL, s.ll) > threshold) {
      frames.push(current);
      current = [];
    }
    current.push(s);
    if (s.ll) lastLL = s.ll;
  }
  frames.push(current);
  return frames;
}

/** Toglie il suffisso di stazione da "Pechino Ovest" → "Pechino". */
export function cityFromStation(name) {
  return String(name)
    .trim()
    .replace(/\s+(Ovest|Est|Nord|Sud)$/i, '')
    .trim();
}

/**
 * Etichetta di ogni riquadro.
 * L'ultimo riquadro è sempre la base dove si dorme quella notte.
 * Nei giorni di treno il primo è la città di partenza, letta da tr.route.
 * Negli altri (la Muraglia, per esempio) è il nome della prima tappa.
 */
export function frameLabels(day, frames, prevDay, knownBases) {
  const n = frames.length;
  const labels = new Array(n).fill('');
  // L'ultima notte il campo base non è una città ("volo serale"): in quel caso
  // la mappa resta etichettata con la città dove ci si trova davvero.
  const baseIsPlace = !knownBases || knownBases.has(day.base);
  labels[n - 1] = baseIsPlace ? day.base : prevDay ? prevDay.base : day.base;
  for (let i = 0; i < n - 1; i++) {
    if (i === 0 && day.tr && day.tr.route && n === 2) {
      labels[i] = cityFromStation(day.tr.route.split('→')[0]);
    } else if (i === 0 && day.tr && prevDay) {
      labels[i] = prevDay.base;
    } else {
      const first = frames[i].find((s) => s.n);
      labels[i] = first ? first.n : '';
    }
  }
  return labels;
}

/** Riquadro che contiene tutti i punti, con un margine proporzionale. */
export function boundsOf(points, pad = 0.18) {
  if (!points.length) return null;
  let minLat = Infinity;
  let maxLat = -Infinity;
  let minLng = Infinity;
  let maxLng = -Infinity;
  for (const [lat, lng] of points) {
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
  }
  // Un punto solo, o tutti sovrapposti: apri comunque una finestra di ~700 m,
  // altrimenti la mappa si incolla allo zoom massimo su un punto e basta.
  const MIN_SPAN = 0.006;
  const cLat = (minLat + maxLat) / 2;
  const cLng = (minLng + maxLng) / 2;
  const spanLat = Math.max(maxLat - minLat, MIN_SPAN);
  const spanLng = Math.max(maxLng - minLng, MIN_SPAN);
  const halfLat = spanLat * (0.5 + pad);
  const halfLng = spanLng * (0.5 + pad);
  return [
    [cLat - halfLat, cLng - halfLng],
    [cLat + halfLat, cLng + halfLng],
  ];
}

/** "1,2 km" / "450 m" — per la barra di scala e i salti fra tappe. */
export function fmtDistance(m) {
  if (m < 950) return Math.round(m / 10) * 10 + ' m';
  return (m / 1000).toFixed(m < 9500 ? 1 : 0).replace('.', ',') + ' km';
}

/* ---------- a piedi ---------- */

/** Oltre questa distanza a piedi non ci si va, e il tempo non si mostra. */
export const WALK_MAX_M = 2500;

/** Le strade non sono in linea d'aria: si cammina circa un terzo in più. */
const WALK_DETOUR = 1.3;
const WALK_KMH = 4.5;

/**
 * Minuti a piedi fra due tappe, o null se è troppo lontano.
 * Il null non è un errore: è il segnale che lì serve un mezzo, ed è
 * esattamente l'informazione che si vuole a colpo d'occhio.
 */
export function walkMinutes(metres) {
  if (!(metres >= 0) || metres > WALK_MAX_M) return null;
  return Math.max(1, Math.round((metres * WALK_DETOUR) / 1000 / WALK_KMH * 60));
}

/* ---------- orari ---------- */

/** "18:30" → 1110 minuti. Le tappe opzionali hanno "—" e tornano null. */
export function hhmmToMinutes(t) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(String(t).trim());
  if (!m) return null;
  const h = +m[1], min = +m[2];
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

/**
 * Quale tappa è "adesso": l'ultima il cui orario è già passato.
 * Prima della prima tappa della giornata si indica la prima, che è dove
 * si sta andando. Le tappe senza orario non contano.
 * Torna null se la giornata non ha nemmeno un orario.
 */
export function currentStopIndex(stops, minutesNow) {
  let best = null;
  let first = null;
  stops.forEach((s, i) => {
    const t = hhmmToMinutes(s.t);
    if (t === null) return;
    if (first === null) first = i;
    if (t <= minutesNow) best = i;
  });
  return best !== null ? best : first;
}

/* ---------- riquadri da scaricare ---------- */

const TILE = 256;

function project(lat, lng, z) {
  const n = TILE * 2 ** z;
  return [
    ((lng + 180) / 360) * n,
    ((1 - Math.asinh(Math.tan((lat * Math.PI) / 180)) / Math.PI) / 2) * n,
  ];
}

/** Lo zoom più stretto a cui i bounds ci stanno ancora dentro w×h pixel. */
export function fitZoom(bounds, w, h, maxZoom = 16, minZoom = 3) {
  for (let z = maxZoom; z >= minZoom; z--) {
    const a = project(bounds[0][0], bounds[0][1], z);
    const b = project(bounds[1][0], bounds[1][1], z);
    if (Math.abs(b[0] - a[0]) <= w && Math.abs(b[1] - a[1]) <= h) return z;
  }
  return minZoom;
}

/** Tutti i riquadri che coprono i bounds a un dato zoom. */
export function tileList(bounds, z) {
  const a = project(bounds[1][0], bounds[0][1], z);
  const b = project(bounds[0][0], bounds[1][1], z);
  const x0 = Math.floor(Math.min(a[0], b[0]) / TILE);
  const x1 = Math.floor(Math.max(a[0], b[0]) / TILE);
  const y0 = Math.floor(Math.min(a[1], b[1]) / TILE);
  const y1 = Math.floor(Math.max(a[1], b[1]) / TILE);
  const out = [];
  const max = 2 ** z;
  for (let x = x0; x <= x1; x++)
    for (let y = y0; y <= y1; y++)
      if (x >= 0 && y >= 0 && x < max && y < max) out.push({ x, y, z });
  return out;
}

/**
 * I riquadri che servono davvero a disegnare una mappa larga w×h pixel
 * centrata su quei bounds, con un anello di margine intorno.
 *
 * Non basta coprire i punti: fitBounds li fa stare DENTRO la vista, quindi la
 * vista è sempre più larga dei punti, e Leaflet tiene in memoria anche un giro
 * di riquadri oltre il bordo. Coprire solo i bounds lascia buchi ai lati —
 * misurato: un giorno mai aperto mostrava 1 riquadro invece di 4.
 */
export function viewportTiles(bounds, z, w, h, ring = 1) {
  const n = TILE * 2 ** z;
  const cLat = (bounds[0][0] + bounds[1][0]) / 2;
  const cLng = (bounds[0][1] + bounds[1][1]) / 2;
  const [cx, cy] = project(cLat, cLng, z);
  const x0 = Math.floor((cx - w / 2) / TILE) - ring;
  const x1 = Math.floor((cx + w / 2) / TILE) + ring;
  const y0 = Math.floor((cy - h / 2) / TILE) - ring;
  const y1 = Math.floor((cy + h / 2) / TILE) + ring;
  const max = 2 ** z;
  const out = [];
  for (let x = x0; x <= x1; x++)
    for (let y = y0; y <= y1; y++)
      if (x >= 0 && y >= 0 && x < max && y < max) out.push({ x, y, z });
  return out;
}
