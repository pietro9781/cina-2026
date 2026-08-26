/* Cina 2026 — cache-first, tutto precaricato all'installazione.
   Cambia CACHE quando aggiorni l'itinerario, così il telefono riscarica. */
const CACHE = "cina-2026-v3";
const TILES = "cina-2026-tiles-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./geo.js",
  "./leaflet.js",
  "./leaflet.css",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png"
];

/* Quanti riquadri di mappa tenere. A ~15 KB l'uno sono circa 18 MB: molto meno
   di una sola foto del viaggio, e bastano per tutte le città dell'itinerario. */
const TILE_LIMIT = 1200;
const TILE_HOST = /^https:\/\/webrd0[1-4]\.is\.autonavi\.com\//;

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE && k !== TILES).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* I tile non scadono mai da soli: una volta visti restano, ed è tutto il punto.
   Si tiene solo il tetto, buttando via i più vecchi inseriti. */
async function trimTiles() {
  const c = await caches.open(TILES);
  const keys = await c.keys();
  if (keys.length <= TILE_LIMIT) return;
  await Promise.all(keys.slice(0, keys.length - TILE_LIMIT).map(k => c.delete(k)));
}

async function tileFetch(req) {
  const c = await caches.open(TILES);
  const hit = await c.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    // Amap manda access-control-allow-origin:*, quindi la risposta è leggibile
    // e si può mettere in cache davvero (non "opaca").
    if (res && res.ok) {
      c.put(req, res.clone()).then(trimTiles).catch(() => {});
    }
    return res;
  } catch (err) {
    // Niente rete e riquadro mai visto: Leaflet lascia il buco e la mappa
    // continua a mostrare tracciato e numeri.
    return Response.error();
  }
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  if (TILE_HOST.test(req.url)) {
    e.respondWith(tileFetch(req));
    return;
  }

  if (new URL(req.url).origin !== location.origin) return; // Amap e Google passano diretti

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      if (hit) {
        // rinfresca in background quando c'è rete, ma serve subito la copia locale
        fetch(req).then(res => {
          if (res && res.ok) caches.open(CACHE).then(c => c.put(req, res.clone()));
        }).catch(() => {});
        return hit;
      }
      return fetch(req)
        .then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
