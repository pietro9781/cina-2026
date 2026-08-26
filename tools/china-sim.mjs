import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'] });
const page = await ctx.newPage();
const ok = (c,m) => console.log((c?'OK   ':'ROTTO')+'  '+m);

// --- 1. a casa, sul wi-fi: si apre e si installa ---
await page.goto('https://pietro9781.github.io/cina-2026/', { waitUntil: 'networkidle' });
await page.waitForFunction(() => navigator.serviceWorker.controller !== null, null, { timeout: 20000 });
await page.waitForTimeout(2500);
ok(true, 'installata a casa, service worker attivo');

// --- 2. atterri in Cina: github.io sparisce, autonavi no ---
let bloccati = 0, passati = 0;
await ctx.route('**://*.github.io/**', r => { bloccati++; r.abort('connectionfailed'); });
await ctx.route('**://*.autonavi.com/**', r => { passati++; r.continue(); });

await page.reload({ waitUntil: 'domcontentloaded' });
await page.waitForTimeout(3500);
ok(await page.locator('h1').count() > 0, `l'app si apre lo stesso (${bloccati} richieste a github.io bloccate)`);
ok(await page.locator('.stop').count() > 0, `le tappe ci sono (${await page.locator('.stop').count()})`);
ok(await page.locator('.pin').count() > 0, `i segnaposto ci sono (${await page.locator('.pin').count()})`);
ok(await page.locator('.leaflet-tile-loaded').count() > 0,
   `riquadri Amap NUOVI scaricati con github.io bloccato: ${await page.locator('.leaflet-tile-loaded').count()}`);

// --- 3. un giorno mai aperto prima, sempre con github.io bloccato ---
await page.locator('.chip').nth(8).click();
await page.waitForTimeout(3000);
const t = await page.locator('.leaflet-tile-loaded').count();
ok(t > 0, `giorno mai visto prima, mappa comunque piena: ${t} riquadri`);
ok(await page.locator('.pin').count() > 0, 'e i suoi segnaposto');

// --- 4. la scheda Mappa ---
await page.locator('#tabMap').click(); await page.waitForTimeout(3000);
ok(await page.locator('.pin--base').count() === 8, 'la panoramica con le 8 basi regge');
await page.screenshot({ path: 'shots/08-cina-sim.png' });

console.log(`\nrichieste ad autonavi passate: ${passati} · a github.io bloccate: ${bloccati}`);
await b.close();
