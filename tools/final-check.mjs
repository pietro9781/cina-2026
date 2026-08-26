import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'] });
const page = await ctx.newPage();
const errs = []; page.on('pageerror', e => errs.push(e.message));
page.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
const ok = (c, m) => console.log((c ? 'OK   ' : 'ROTTO') + '  ' + m);

await page.goto('http://localhost:8899/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

ok((await page.locator('.leaflet-control-attribution').first().textContent()).includes('高德'),
   'attribuzione cita Amap');
ok(!(await page.locator('.leaflet-control-attribution').first().innerHTML()).includes('leafletjs.com'),
   'prefisso Leaflet rimosso');

// il chip di un giorno con treno non deve avere sfondo chiaro
const bg = await page.evaluate(() => {
  const c = [...document.querySelectorAll('.chip.transfer')].find(e => e.getAttribute('aria-selected') !== 'true');
  return getComputedStyle(c).backgroundColor;
});
ok(bg === 'rgba(0, 0, 0, 0)', 'chip giorno-treno trasparente (era paper) — ora ' + bg);

// toccare una scheda accende il segnaposto
await page.locator('[data-stop="2"]').click();
await page.waitForTimeout(400);
ok(await page.locator('.pin--on').count() === 1, 'toccando la scheda si accende un segnaposto');
ok(await page.locator('.stop.on').count() === 1, 'e la scheda si evidenzia');

// toccare il segnaposto accende la scheda
await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(1800);
await page.locator('.pin').nth(2).click();
await page.waitForTimeout(400);
ok(await page.locator('.stop.on').count() === 1, 'toccando il segnaposto si accende la scheda');

// la lingua si ricorda
await page.locator('[data-lang]').first().click();
await page.waitForTimeout(900);
ok((await page.locator('[data-lang]').first().textContent()).trim() === '中文', 'passa al cinese');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(1500);
ok((await page.locator('[data-lang]').first().textContent()).trim() === '中文', 'la lingua sopravvive al ricaricamento');
const url = await page.evaluate(() => document.querySelector('.leaflet-tile')?.src || '');
ok(url.includes('lang=zh_cn'), 'i tile chiedono davvero il cinese');
await page.locator('[data-lang]').first().click(); await page.waitForTimeout(600);

// i link puntano al sistema giusto
const links = await page.evaluate(() => {
  const a = document.querySelector('.acts a[href*="amap"]').href;
  const g = document.querySelector('.acts a[href*="google"]').href;
  return { a, g };
});
const am = links.a.match(/position=([\d.]+),([\d.]+)/);
const go = links.g.match(/query=([\d.]+),([\d.]+)/);
const dLat = Math.abs(parseFloat(am[2]) - parseFloat(go[1]));
ok(dLat > 0.0005, `Amap e Google ricevono coordinate diverse (delta lat ${dLat.toFixed(5)})`);

// nessuna mappa resta viva dopo aver cambiato scheda
await page.locator('#tabLog').click(); await page.waitForTimeout(500);
ok(await page.locator('.leaflet-container').count() === 0, 'in Logistica non resta nessuna mappa');
await page.locator('#tabMap').click(); await page.waitForTimeout(1500);
ok(await page.locator('.leaflet-container').count() === 1, 'in Mappa ce n\'è esattamente una');

console.log('\nerrori:', errs.length ? errs : 'nessuno');
await b.close();
