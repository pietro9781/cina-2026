import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'] });
const page = await ctx.newPage();
const errs = []; page.on('pageerror', e => errs.push(e.message));
page.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
const ok = (c,m) => console.log((c?'OK   ':'ROTTO')+'  '+m);

await page.goto('https://pietro9781.github.io/cina-2026/', { waitUntil: 'networkidle' });
await page.waitForTimeout(3500);
ok((await page.title()).includes('Cina'), 'titolo: ' + await page.title());
ok(await page.locator('.leaflet-container').count() === 1, 'la mappa esiste');
ok(await page.locator('.pin').count() === 4, `segnaposto giorno 1: ${await page.locator('.pin').count()}`);
ok(await page.locator('.leaflet-tile-loaded').count() > 0,
   `riquadri Amap caricati da GitHub Pages: ${await page.locator('.leaflet-tile-loaded').count()}`);
ok(await page.locator('#tabMap').count() === 1, 'la scheda Mappa c\'è');
await page.locator('#tabMap').click(); await page.waitForTimeout(3000);
ok(await page.locator('.pin--base').count() === 8, `basi sulla panoramica: ${await page.locator('.pin--base').count()}`);
await page.waitForFunction(() => navigator.serviceWorker.controller !== null, null, { timeout: 20000 });
ok(true, 'service worker attivo sul sito vero');
await page.screenshot({ path: 'shots/07-live.png' });
console.log('errori:', errs.length ? errs : 'nessuno');
await b.close();
