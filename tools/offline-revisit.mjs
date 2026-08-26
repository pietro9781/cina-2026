import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'] });
const page = await ctx.newPage();
const ok = (c, m) => console.log((c ? 'OK   ' : 'ROTTO') + '  ' + m);

await page.goto('http://localhost:8899/', { waitUntil: 'networkidle' });
await page.waitForFunction(() => navigator.serviceWorker.controller !== null, null, { timeout: 15000 });

// guarda DUE giorni online, come faresti sul wi-fi dell'albergo
for (const i of [0, 1]) {
  await page.locator('.chip').nth(i).click();
  await page.waitForTimeout(3500);
}
const online0 = await page.locator('.leaflet-tile-loaded').count();
const cached = await page.evaluate(async () =>
  (await (await caches.open('cina-2026-tiles-v1')).keys()).length);
console.log(`online: giorno 2 mostra ${online0} tile · in cache ${cached}`);

// rete via, si torna sugli stessi due giorni
await ctx.setOffline(true);
await page.reload({ waitUntil: 'domcontentloaded' });
await page.waitForTimeout(2000);
for (const i of [0, 1]) {
  await page.locator('.chip').nth(i).click();
  await page.waitForTimeout(2600);
  const t = await page.locator('.leaflet-tile-loaded').count();
  ok(t > 0, `offline, giorno ${i+1} già visto: ${t} tile dalla cache`);
}
// e un giorno mai aperto resta senza tile ma con tracciato
await page.locator('.chip').nth(9).click();
await page.waitForTimeout(2600);
const t2 = await page.locator('.leaflet-tile-loaded').count();
const pins = await page.locator('.pin').count();
ok(t2 === 0 && pins > 0, `offline, giorno mai visto: ${t2} tile ma ${pins} segnaposto`);
await ctx.setOffline(false);
await b.close();
