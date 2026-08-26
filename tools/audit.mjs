import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const browser = await chromium.launch();
const page = await (await browser.newContext({ ...devices['iPhone 13'] })).newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto('http://localhost:8899/', { waitUntil: 'networkidle' });

const rows = [];
for (let i = 0; i < 14; i++) {
  await page.locator('.chip').nth(i).click();       // ri-cercato ogni volta
  await page.waitForTimeout(420);
  rows.push(await page.evaluate(() => ({
    titolo: document.querySelector('h1')?.textContent,
    mappe:  document.querySelectorAll('.map').length,
    pin:    document.querySelectorAll('.pin').length,
    tappe:  document.querySelectorAll('.stop').length,
    etich:  [...document.querySelectorAll('.maplab > span:first-child')].map(e => e.textContent).join(' | '),
    tiles:  document.querySelectorAll('.leaflet-tile-loaded').length
  })));
}
console.table(rows);
const bad = rows.filter(r => r.pin !== r.tappe);
console.log(bad.length ? 'DISALLINEATI: ' + JSON.stringify(bad) : 'ogni tappa ha il suo segnaposto, tutti i 14 giorni');
console.log('tile caricati in totale:', rows.reduce((a, r) => a + r.tiles, 0));
console.log('errori:', errors.length ? errors : 'nessuno');
await browser.close();
