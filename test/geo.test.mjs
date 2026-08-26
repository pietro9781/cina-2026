import assert from 'node:assert/strict';
import test from 'node:test';
import {
  wgs2gcj,
  gcj2wgs,
  isHongKong,
  toGCJ,
  toWGS,
  haversine,
  splitFrames,
  cityFromStation,
  frameLabels,
  boundsOf,
  fmtDistance,
  FRAME_SPLIT_M,
} from '../geo.js';

/* Riferimenti WGS-84 presi da OSM/Nominatim il 26/08/2026, confrontati con
   le coordinate salvate in index.html. Le distanze attese sono quelle
   misurate allora. */
const CITTA_PROIBITA_GCJ = [39.9168038, 116.3971621]; // come salvata
const GRANDE_BUDDHA_WGS = [22.2539847, 113.904984]; // come salvata

test('wgs2gcj sposta di 300-700 m dentro la Cina', () => {
  const [lat, lng] = wgs2gcj(39.9163, 116.3972);
  const d = haversine([39.9163, 116.3972], [lat, lng]);
  assert.ok(d > 300 && d < 700, `spostamento ${d.toFixed(0)} m fuori range`);
});

test('gcj2wgs inverte wgs2gcj sotto il centimetro', () => {
  for (const p of [
    [39.9163, 116.3972],
    [22.2539847, 113.904984],
    [30.657132, 104.057246],
    [25.2736, 110.29],
  ]) {
    const round = gcj2wgs(...wgs2gcj(...p));
    assert.ok(haversine(p, round) < 0.01, `andata/ritorno ${haversine(p, round)} m`);
  }
});

test('isHongKong distingue le due sponde del confine', () => {
  assert.equal(isHongKong(22.2972721, 114.1783517), true, 'TST');
  assert.equal(isHongKong(22.2539847, 113.904984), true, 'Lantau');
  assert.equal(isHongKong(22.330594, 114.161482), true, 'Sham Shui Po');
  assert.equal(isHongKong(39.9168038, 116.3971621), false, 'Pechino');
  assert.equal(isHongKong(23.1291, 113.2644), false, 'Canton, appena a nord');
});

test('toGCJ lascia stare il continente e corregge Hong Kong', () => {
  // Continente: già GCJ, non si tocca.
  assert.deepEqual(toGCJ(CITTA_PROIBITA_GCJ), CITTA_PROIBITA_GCJ);
  // Hong Kong: salvata in WGS, va spostata per finire sui tile Amap.
  const moved = toGCJ(GRANDE_BUDDHA_WGS);
  const d = haversine(GRANDE_BUDDHA_WGS, moved);
  assert.ok(d > 400 && d < 800, `Buddha spostato di ${d.toFixed(0)} m`);
});

test('toWGS corregge il continente e lascia stare Hong Kong', () => {
  assert.deepEqual(toWGS(GRANDE_BUDDHA_WGS), GRANDE_BUDDHA_WGS);
  const moved = toWGS(CITTA_PROIBITA_GCJ);
  const d = haversine(CITTA_PROIBITA_GCJ, moved);
  assert.ok(d > 400 && d < 700, `Città Proibita spostata di ${d.toFixed(0)} m`);
  // e deve avvicinarsi al vero WGS-84 della Città Proibita
  assert.ok(haversine(moved, [39.9163, 116.3908]) < 250);
});

test('toGCJ e toWGS non si annullano a vicenda per errore', () => {
  const g = toGCJ(CITTA_PROIBITA_GCJ);
  const w = toWGS(CITTA_PROIBITA_GCJ);
  assert.ok(haversine(g, w) > 400, 'i due sistemi devono restare distinti');
});

test('haversine su distanze note', () => {
  // Pechino → Hong Kong, ~1970 km in linea d'aria
  const d = haversine([39.9042, 116.4074], [22.3193, 114.1694]);
  assert.ok(d > 1930000 && d < 2010000, `${(d / 1000).toFixed(0)} km`);
});

/* ---- riquadri ---- */

const giornoXianChengdu = {
  base: 'Chengdu',
  tr: { route: 'Xi\'an Nord → Chengdu Est' },
  stops: [
    { n: 'Grande Moschea', ll: [34.263177, 108.9390603] },
    { n: 'Mura di Xi\'an', ll: [34.276795, 108.947241] },
    { n: "People's Park", ll: [30.657132, 104.057246] },
    { n: 'Vicoli Kuanzhai', ll: [30.6636111, 104.0525] },
  ],
};

const giornoMuraglia = {
  base: 'Pechino',
  stops: [
    { n: 'Grande Muraglia · Jinshanling', ll: [40.702468, 117.233702] },
    { n: 'Bodhi Therapeutic Retreat', ll: [39.9336995, 116.4482831] },
    { n: 'Taikoo Li Sanlitun', ll: [39.935886, 116.455419] },
  ],
};

const giornoPechino = {
  base: 'Pechino',
  stops: [
    { n: 'Tempio dei Lama', ll: [39.9476712, 116.4172902] },
    { n: 'Wudaoying Hutong', ll: [39.94843, 116.41164] },
    { n: "Palazzo d'Estate", ll: [39.9999823, 116.2754606] },
    { n: 'Houhai', ll: [39.942312, 116.385821] },
  ],
};

test('un giorno di treno si divide in due riquadri', () => {
  const f = splitFrames(giornoXianChengdu.stops);
  assert.equal(f.length, 2);
  assert.deepEqual(f[0].map((s) => s.n), ['Grande Moschea', 'Mura di Xi\'an']);
  assert.deepEqual(f[1].map((s) => s.n), ["People's Park", 'Vicoli Kuanzhai']);
});

test('la Muraglia si stacca da Pechino anche senza treno', () => {
  const f = splitFrames(giornoMuraglia.stops);
  assert.equal(f.length, 2);
  assert.equal(f[0].length, 1);
  assert.equal(f[1].length, 2);
});

test('una giornata dentro una sola città resta un riquadro solo', () => {
  // Lama → Palazzo d'Estate sono 12 km: molto, ma stessa città.
  assert.equal(splitFrames(giornoPechino.stops).length, 1);
});

test('Tianmen e Wulingyuan (34 km) restano insieme', () => {
  const f = splitFrames([
    { n: 'Tianmen', ll: [29.046809, 110.482084] },
    { n: 'Wulingyuan', ll: [29.3455, 110.5455] },
  ]);
  assert.equal(f.length, 1);
});

test('una tappa senza coordinate non sparisce e non apre un riquadro', () => {
  const f = splitFrames([
    { n: 'Yuanjiajie' }, // senza ll
    { n: 'Ascensore Bailong', ll: [29.3458, 110.47254] },
    { n: 'Monte Tianzi', ll: [29.379323, 110.463655] },
  ]);
  assert.equal(f.length, 1);
  assert.equal(f[0].length, 3);
});

test('nessuna tappa si perde, in nessun giorno', () => {
  for (const g of [giornoXianChengdu, giornoMuraglia, giornoPechino]) {
    const tot = splitFrames(g.stops).reduce((a, f) => a + f.length, 0);
    assert.equal(tot, g.stops.length);
  }
});

test('la soglia è quella dichiarata', () => {
  assert.equal(FRAME_SPLIT_M, 60000);
});

/* ---- etichette ---- */

test('cityFromStation toglie il suffisso di stazione', () => {
  assert.equal(cityFromStation('Pechino Ovest'), 'Pechino');
  assert.equal(cityFromStation("Xi'an Nord"), "Xi'an");
  assert.equal(cityFromStation('Chengdu Est'), 'Chengdu');
  assert.equal(cityFromStation('Guilin'), 'Guilin');
});

test('giorno di treno: partenza dal percorso, arrivo dalla base', () => {
  const f = splitFrames(giornoXianChengdu.stops);
  assert.deepEqual(frameLabels(giornoXianChengdu, f), ["Xi'an", 'Chengdu']);
});

test('giorno senza treno: primo riquadro dal nome della tappa', () => {
  const f = splitFrames(giornoMuraglia.stops);
  assert.deepEqual(frameLabels(giornoMuraglia, f), [
    'Grande Muraglia · Jinshanling',
    'Pechino',
  ]);
});

test('riquadro unico: etichetta la base', () => {
  const f = splitFrames(giornoPechino.stops);
  assert.deepEqual(frameLabels(giornoPechino, f), ['Pechino']);
});

/* ---- bounds ---- */

test('boundsOf contiene tutti i punti', () => {
  const pts = [
    [39.9476712, 116.4172902],
    [39.9999823, 116.2754606],
    [39.942312, 116.385821],
  ];
  const [[s, w], [n, e]] = boundsOf(pts);
  for (const [lat, lng] of pts) {
    assert.ok(lat > s && lat < n, 'latitudine dentro');
    assert.ok(lng > w && lng < e, 'longitudine dentro');
  }
});

test('boundsOf apre una finestra minima su un punto solo', () => {
  const b = boundsOf([[39.9, 116.4]]);
  assert.ok(b[1][0] - b[0][0] > 0.005, 'altezza minima');
  assert.ok(b[1][1] - b[0][1] > 0.005, 'larghezza minima');
});

test('boundsOf su lista vuota non esplode', () => {
  assert.equal(boundsOf([]), null);
});

/* ---- formattazione ---- */

test('fmtDistance', () => {
  assert.equal(fmtDistance(120), '120 m');
  assert.equal(fmtDistance(940), '940 m');
  assert.equal(fmtDistance(1240), '1,2 km');
  assert.equal(fmtDistance(34000), '34 km');
});

test('una base che non è un luogo ricade sulla città del giorno prima', () => {
  const ultimo = {
    base: 'volo serale',
    stops: [
      { n: 'Australia Dairy Company', ll: [22.304628, 114.1705439] },
      { n: 'Grande Buddha di Lantau', ll: [22.2539847, 113.904984] },
    ],
  };
  const basi = new Set(['Pechino', 'Hong Kong']);
  const f = splitFrames(ultimo.stops);
  assert.deepEqual(frameLabels(ultimo, f, { base: 'Hong Kong' }, basi), ['Hong Kong']);
  // senza l'elenco delle basi il comportamento resta quello di prima
  assert.deepEqual(frameLabels(ultimo, f, { base: 'Hong Kong' }), ['volo serale']);
});
