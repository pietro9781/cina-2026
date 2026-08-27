/* Cina 2026 — cache-first, tutto precaricato all'installazione.

   NON serve più cambiare CACHE per aggiornare l'itinerario: ogni volta che
   l'app parte, il service worker riscarica il codice, lo confronta con quello
   che ha appena servito e se è cambiato lo dice alla pagina, che si aggiorna
   da sé. CACHE si alza solo per svuotare tutto e ricominciare. */
const CACHE = "cina-2026-v6";
const TILES = "cina-2026-tiles-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./geo.js",
  "./guida.js",
  "./leaflet.js",
  "./leaflet.css",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./foto/be-1.jpg",
  "./foto/be-2.jpg",
  "./foto/be-3.jpg",
  "./foto/be-4.jpg",
  "./foto/be-5.jpg",
  "./foto/es-1.jpg",
  "./foto/es-2.jpg",
  "./foto/es-3.jpg",
  "./foto/es-4.jpg",
  "./foto/es-5.jpg",
  "./foto/es-6.jpg",
  "./foto/fc-01.jpg",
  "./foto/fc-02.jpg",
  "./foto/fc-03.jpg",
  "./foto/fc-04.jpg",
  "./foto/fc-05.jpg",
  "./foto/fc-06.jpg",
  "./foto/fc-07.jpg",
  "./foto/fc-08.jpg",
  "./foto/fc-09.jpg",
  "./foto/fc-10.jpg",
  "./foto/fc-11.jpg",
  "./foto/fc-12.jpg",
  "./foto/fc-13.jpg",
  "./foto/ji-1.jpg",
  "./foto/ji-2.jpg",
  "./foto/la-1.jpg",
  "./foto/la-2.jpg",
  "./foto/la-3.jpg",
  "./foto/mu-1.jpg",
  "./foto/mu-2.jpg",
  "./foto/ta-1.jpg",
  "./foto/ta-2.jpg",
  "./foto/ta-3.jpg",
  "./foto/ta-4.jpg",
  "./foto/zh-1.jpg",
  "./foto/zh-2.jpg",
  "./foto/zh-3.jpg"
];

/* Quanti riquadri di mappa tenere. A ~15 KB l'uno sono circa 18 MB: molto meno
   di una sola foto del viaggio, e bastano per tutte le città dell'itinerario. */
const TILE_LIMIT = 4000;
const TILE_HOST = /^https:\/\/webrd0[1-4]\.is\.autonavi\.com\//;

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    const vecchie = keys.filter(k => k !== CACHE && k !== TILES);
    await Promise.all(vecchie.map(k => caches.delete(k)));
    await self.clients.claim();
    // Se c'erano cache vecchie da buttare, questo è un aggiornamento vero e
    // non la prima installazione: vale la pena dirlo alla pagina.
    if (vecchie.length) await avvisa();
  })());
});

/* Il codice dell'app: quello che ha senso confrontare fra una versione e
   l'altra. Le immagini e i riquadri di mappa non cambiano mai. */
const MUTEVOLI = /(\/|\/index\.html|\/geo\.js|\/guida\.js)$/;

async function avvisa() {
  const clienti = await self.clients.matchAll({ includeUncontrolled: true, type: "window" });
  clienti.forEach(c => c.postMessage({ tipo: "aggiornata" }));
}

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

  // Le due promesse vanno create QUI, sincrone: waitUntil e respondWith
  // valgono solo finché l'evento è vivo, e dopo un await non lo è più.
  // (Ci ho sbattuto la testa: il rinfresco non partiva e la cache restava
  // ferma alla versione vecchia senza un solo errore visibile.)
  const rinfresco = MUTEVOLI.test(new URL(req.url).pathname) ? aggiorna(req) : null;
  if (rinfresco) e.waitUntil(rinfresco);
  e.respondWith(rispondi(req, rinfresco));
});

/**
 * Riscarica un file, lo confronta con quello in cache e se è cambiato lo
 * sostituisce e avvisa la pagina. È questo che fa aggiornare l'app da sola.
 */
async function aggiorna(req) {
  try {
    const c = await caches.open(CACHE);
    const prima = await c.match(req, { ignoreSearch: true });
    // cache:"reload" scavalca la cache HTTP del browser: GitHub Pages manda
    // max-age=600, e senza questo si confronterebbe con una copia vecchia
    // di dieci minuti, cioè non ci si accorgerebbe dell'aggiornamento.
    const res = await fetch(req.url, { cache: "reload", credentials: "same-origin" });
    if (!res || !res.ok) return null;
    if (prima) {
      const [vecchio, nuovo] = await Promise.all([prima.clone().text(), res.clone().text()]);
      if (vecchio === nuovo) return res;
      await c.put(req, res.clone());
      await avvisa();
      return res;
    }
    await c.put(req, res.clone());
    return res;
  } catch (err) {
    return null; // niente rete: si tiene quello che c'è, ed è tutto il punto
  }
}

/** Serve subito la copia locale; solo se non c'è aspetta la rete. */
async function rispondi(req, rinfresco) {
  const c = await caches.open(CACHE);
  const hit = await c.match(req, { ignoreSearch: true });
  if (hit) return hit;
  try {
    const res = await (rinfresco || fetch(req));
    if (res && res.ok) {
      await c.put(req, res.clone());
      return res;
    }
    if (res) return res;
  } catch (err) { /* si cade sotto */ }
  return (await c.match("./index.html")) || Response.error();
}
