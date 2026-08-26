import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const page = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
await page.goto('http://localhost:8899/', { waitUntil: 'networkidle' });
await page.locator('#tabMap').click();
await page.waitForTimeout(2500);
const pins = await page.evaluate(() =>
  [...document.querySelectorAll('.pin--city')].map(e => {
    const r = e.getBoundingClientRect();
    return { nome: e.textContent, x: Math.round(r.x), y: Math.round(r.y),
             w: Math.round(r.width), h: Math.round(r.height) };
  }));
console.log('etichette trovate:', pins.length);
console.table(pins);
const hit = [];
for (let i = 0; i < pins.length; i++)
  for (let j = i+1; j < pins.length; j++) {
    const a = pins[i], c = pins[j];
    const ox = Math.min(a.x+a.w, c.x+c.w) - Math.max(a.x, c.x);
    const oy = Math.min(a.y+a.h, c.y+c.h) - Math.max(a.y, c.y);
    if (ox > 0 && oy > 0) hit.push(`${a.nome} <-> ${c.nome}  (${ox}x${oy}px)`);
  }
console.log(hit.length ? 'SOVRAPPOSTE:\n  ' + hit.join('\n  ') : 'nessuna sovrapposizione');
await b.close();
