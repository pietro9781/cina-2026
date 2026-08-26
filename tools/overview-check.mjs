import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const page = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
const errs = []; page.on('pageerror', e => errs.push(e.message));
page.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
await page.goto('http://localhost:8899/', { waitUntil: 'networkidle' });
await page.locator('#tabMap').click();
await page.waitForTimeout(2500);

const pins = await page.evaluate(() =>
  [...document.querySelectorAll('.pin--base')].map(e => {
    const r = e.getBoundingClientRect();
    return { n: e.textContent, x: Math.round(r.x+r.width/2), y: Math.round(r.y+r.height/2),
             w: Math.round(r.width), h: Math.round(r.height) };
  }));
console.log('basi sulla mappa:', pins.length);
console.table(pins);
const hit = [];
for (let i=0;i<pins.length;i++) for (let j=i+1;j<pins.length;j++){
  const a=pins[i], c=pins[j];
  const d = Math.hypot(a.x-c.x, a.y-c.y);
  if (d < 26) hit.push(`${a.n}<->${c.n} a ${Math.round(d)}px`);
}
console.log(hit.length ? 'ANCORA ADDOSSATE: '+hit.join(', ') : 'nessun pallino sovrapposto');
// devono scendere da nord a sud, in ordine
const ordered = pins.every((p,i) => i===0 || p.y >= pins[i-1].y - 4);
console.log(ordered ? 'ordine nord->sud rispettato' : 'ORDINE SBAGLIATO: y non monotona');

// tocca la riga 2 (Xi'an) e controlla che porti al giorno giusto
await page.locator('[data-base="1"]').click();
await page.waitForTimeout(500);
console.log('riga Xi\'an ->', await page.locator('h1').textContent());
console.log('errori:', errs.length ? errs : 'nessuno');
await b.close();
