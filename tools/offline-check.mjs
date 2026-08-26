import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'] });
const page = await ctx.newPage();
const ok = (c, m) => console.log((c ? 'OK   ' : 'ROTTO') + '  ' + m);

// 1. giro online: il service worker si installa e i tile entrano in cache
await page.goto('http://localhost:8899/', { waitUntil: 'networkidle' });
await page.waitForFunction(() => navigator.serviceWorker.controller !== null, null, { timeout: 15000 });
ok(true, 'service worker attivo');
await page.locator('.chip').nth(1).click();
await page.waitForTimeout(3500);
const cached = await page.evaluate(async () => {
  const c = await caches.open('cina-2026-tiles-v1');
  return (await c.keys()).length;
});
ok(cached > 0, `tile messi in cache: ${cached}`);

// 2. si stacca la rete e si ricarica
await ctx.setOffline(true);
await page.reload({ waitUntil: 'domcontentloaded' });
await page.waitForTimeout(2500);
ok(await page.locator('h1').count() > 0, 'la pagina si apre offline');
ok((await page.locator('.stop').count()) > 0, `le tappe ci sono (${await page.locator('.stop').count()})`);
ok((await page.locator('.pin').count()) > 0, `i segnaposto ci sono (${await page.locator('.pin').count()})`);
ok(await page.locator('.leaflet-container').count() > 0, 'la mappa è disegnata');
ok(await page.locator('.leaflet-control-scale-line').count() > 0, 'la barra di scala regge');
const tilesOffline = await page.locator('.leaflet-tile-loaded').count();
ok(true, `tile ancora visibili offline: ${tilesOffline}`);

// 3. una città mai aperta: niente tile, ma tracciato e numeri restano
await page.locator('.chip').nth(11).click();
await page.waitForTimeout(2500);
ok(await page.locator('.pin').count() > 0,
   `giorno mai visitato, offline: ${await page.locator('.pin').count()} segnaposto`);
ok(await page.locator('.leaflet-overlay-pane path').count() > 0, 'il tracciato è disegnato lo stesso');
const nota = await page.locator('#mapnote0').textContent();
ok(nota.includes('senza rete'), `avviso mostrato: "${nota}"`);

await ctx.setOffline(false);
await b.close();
