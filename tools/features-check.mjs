import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'] });
const page = await ctx.newPage();
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
page.on('console',m=>{ if(m.type()==='error') errs.push(m.text()); });
const ok=(c,m)=>console.log((c?'OK   ':'ROTTO')+'  '+m);

await page.goto('http://localhost:8899/',{waitUntil:'networkidle'});
await page.waitForTimeout(2200);

/* --- 1. distanze a piedi --- */
const gaps = await page.locator('.gap').allTextContents();
ok(gaps.length === 3, `giorno 1: ${gaps.length} salti fra 4 tappe`);
ok(gaps.every(g => /\d/.test(g)), 'ognuno porta un numero: ' + JSON.stringify(gaps));
ok(gaps.some(g => /a piedi/.test(g)), 'il primo giorno e tutto a piedi');

await page.locator('.chip').nth(1).click(); await page.waitForTimeout(1800);
const g2 = await page.locator('.gap').allTextContents();
ok(g2.some(g => /metro o taxi/.test(g)),
   'il Palazzo d\'Estate NON e a piedi: ' + JSON.stringify(g2.filter(x=>/metro|taxi/.test(x))));

/* --- 2. "adesso" non appare sui giorni che non sono oggi --- */
ok(await page.locator('.stop.now').count() === 0, 'nessun "adesso" fuori dal viaggio');

/* --- 3. il tasto scarica --- */
await page.locator('#tabLog').click(); await page.waitForTimeout(700);
ok(await page.locator('#dlBtn').count() === 1, 'il tasto c\'e');
const prima = await page.evaluate(async () =>
  (await (await caches.open('cina-2026-tiles-v1')).keys()).length).catch(()=>0);
await page.locator('#dlBtn').click();
await page.waitForFunction(() => /Fatto/.test(document.querySelector('#dlBtn')?.textContent||''), null, {timeout:300000});
const testo = await page.locator('#dlBtn').textContent();
ok(/Fatto/.test(testo), 'finisce: "' + testo.trim() + '"');
const dopo = await page.evaluate(async () =>
  (await (await caches.open('cina-2026-tiles-v1')).keys()).length);
ok(dopo > prima + 1000, `riquadri in cache: ${prima} -> ${dopo}`);
ok(/Le mappe sono nel telefono/.test(await page.locator('#dlNote').textContent()), 'la nota cambia');

/* --- 4. e adesso un giorno mai aperto funziona OFFLINE --- */
await ctx.setOffline(true);
await page.reload({waitUntil:'domcontentloaded'});
await page.waitForTimeout(2000);
await page.locator('.chip').nth(10).click();
await page.waitForTimeout(2800);
const t = await page.locator('.leaflet-tile-loaded').count();
ok(t > 0, `offline, giorno MAI aperto prima: ${t} riquadri dalla cache`);
await ctx.setOffline(false);

console.log('\nerrori:', errs.length?errs:'nessuno');
await b.close();
