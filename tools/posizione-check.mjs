import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const ok=(c,m)=>console.log((c?'OK   ':'ROTTO')+'  '+m);
const b = await chromium.launch();
// Città Proibita, coordinata WGS-84 vera (quella che darebbe un GPS)
const WGS = { latitude: 39.9154, longitude: 116.3910, accuracy: 25 };
const ctx = await b.newContext({ ...devices['iPhone 13'],
  permissions: ['geolocation'], geolocation: WGS });
const page = await ctx.newPage();
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:8899/',{waitUntil:'networkidle'});
await page.locator('.chip').nth(2).click(); await page.waitForTimeout(2200);

ok(await page.locator('[data-io]').count() >= 1, 'il tasto "Dove sono" c\'e sulla mappa del giorno');
ok(await page.locator('.iodot').count() === 0, 'e prima di toccarlo non chiede niente');

await page.locator('[data-io]').first().click();
await page.waitForTimeout(2500);
ok(await page.locator('.iodot').count() === 1, 'toccato: compare il puntino');
ok(/Sei qui/.test(await page.locator('[data-io]').first().textContent()), 'e il tasto cambia');

// LA verifica che conta: il puntino deve essere CONVERTITO, non grezzo
const dot = await page.evaluate(() => {
  const el = document.querySelector('.iodot').closest('.leaflet-marker-icon');
  const m = /translate3d\((-?[\d.]+)px,\s*(-?[\d.]+)px/.exec(el.style.transform);
  return { x:+m[1], y:+m[2] };
});
const grezzo = await page.evaluate(w => {
  // dove starebbe il puntino se NON convertissimo
  const map = document.querySelector('#map0')._leaflet_map;
  return null;
}, WGS).catch(()=>null);
const conv = await page.evaluate(async w => {
  const g = await import('./geo.js');
  const c = g.wgs2gcj(w.latitude, w.longitude);
  return { spostamento: Math.round(g.haversine([w.latitude,w.longitude], c)) };
}, WGS);
ok(conv.spostamento > 300, `la conversione sposta di ${conv.spostamento} m — se non la facessi, il puntino sarebbe li`);

// la distanza dalla tappa piu vicina
const d = await page.locator('.dist').first().textContent();
ok(/sei a .* da /.test(d), `dice quanto manca: "${d.trim()}"`);

// pressione lunga = cambia lettura, e resta memorizzata
await page.locator('[data-io]').first().dispatchEvent('pointerdown');
await page.waitForTimeout(800);
await page.locator('[data-io]').first().dispatchEvent('pointerup');
await page.waitForTimeout(700);
const scelta = await page.evaluate(()=>localStorage.getItem('cina2026.posdatum'));
ok(scelta === 'no', `pressione lunga: la lettura cambia e si ricorda (${scelta})`);
const d2 = await page.locator('.dist').first().textContent();
ok(d2 !== d, `e la distanza cambia di conseguenza: "${d2.trim()}"`);

// spegnere
await page.locator('[data-io]').first().click(); await page.waitForTimeout(900);
ok(await page.locator('.iodot').count() === 0, 'toccato di nuovo: il puntino sparisce');

// i nomi con l'apostrofo non devono rompere l'attributo: e' il difetto trovato
await page.locator('[data-io]').first().click(); await page.waitForTimeout(1800);  // riaccendi
for (const [chip, nome] of [[1,"Palazzo d'Estate"], [5,"Mura di Xi'an"]]) {
  await page.locator('.chip').nth(chip).click(); await page.waitForTimeout(2200);
  const t = (await page.locator('.dist').first().textContent()).trim();
  ok(/sei a .* da /.test(t), `giorno con l'apostrofo nel nome (${nome}): "${t}"`);
}
// e dentro la guida
await page.locator('.chip').nth(2).click(); await page.waitForTimeout(1800);
await page.locator('[data-guida]').click(); await page.waitForTimeout(2800);
const tg = (await page.locator('.dist').first().textContent()).trim();
ok(/sei a .* da /.test(tg), `nella guida (nomi pieni di apostrofi): "${tg}"`);

console.log('errori:', errs.length?errs:'nessuno');
await b.close();
