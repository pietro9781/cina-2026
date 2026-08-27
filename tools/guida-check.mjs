import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const page = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
page.on('console',m=>{ if(m.type()==='error') errs.push(m.text()); });
const ok=(c,m)=>console.log((c?'OK   ':'ROTTO')+'  '+m);

await page.goto('http://localhost:8899/',{waitUntil:'networkidle'});
await page.locator('.chip').nth(2).click();          // 8 set, Citta Proibita
await page.waitForTimeout(2000);
ok(await page.locator('[data-guida]').count() === 1, 'il pulsante Guida c\'e su una sola tappa');
ok(/13 tappe/.test(await page.locator('[data-guida]').textContent()), 'e dice quanti punti');

await page.locator('[data-guida]').click();
await page.waitForTimeout(2800);
ok(/Città Proibita/.test(await page.locator('h1').textContent()), 'si apre la guida');
ok(await page.locator('.gpunto').count() === 13, `13 punti: ${await page.locator('.gpunto').count()}`);
ok(await page.locator('.pin').count() === 13, `13 segnaposto sulla mappa: ${await page.locator('.pin').count()}`);
ok(await page.locator('.leaflet-tile-loaded').count() > 0, `la mini-mappa carica: ${await page.locator('.leaflet-tile-loaded').count()} riquadri`);

// i numeri devono salire da sud a nord sulla mappa
const ys = await page.evaluate(() => [...document.querySelectorAll('.pin')]
  .map(e => ({ n:+e.textContent, y:e.getBoundingClientRect().y })));
const asse = ys.filter(p => p.n<=5 || (p.n>=7 && p.n<=11) || p.n===13).sort((a,b)=>a.n-b.n);
ok(asse.every((p,i)=> i===0 || p.y <= asse[i-1].y + 3),
   'sulla mappa i punti dell\'asse scendono da nord a sud nell\'ordine giusto');

// toccare una sezione porta la mappa sul punto
const zPrima = await page.evaluate(()=>document.querySelector('.leaflet-tile')?.src.match(/[?&]z=(\d+)/)?.[1]);
await page.evaluate(()=>document.querySelector('[data-gp="5"]').click());
await page.waitForTimeout(1800);
const zDopo = await page.evaluate(()=>document.querySelector('.leaflet-tile')?.src.match(/[?&]z=(\d+)/)?.[1]);
ok(+zDopo > +zPrima, `toccando il punto 6 la mappa si avvicina: z${zPrima} -> z${zDopo}`);
ok(await page.locator('.gpunto.on').count()===1, 'la sezione si accende');
ok(await page.locator('.pin--on').count()===1, 'e il suo segnaposto');
ok(/Muro dei Nove Draghi/.test(await page.locator('#gWhere').textContent()), 
   `l'etichetta dice dove sei: "${await page.locator('#gWhere').textContent()}"`);
// e "Tutti" torna indietro
await page.locator('#gAll').click(); await page.waitForTimeout(1500);
ok(await page.locator('.gpunto.on').count()===0, '"Tutti" spegne la selezione');
// scorrendo, la mappa se ne va: leggere ha la precedenza (vedi lettura-check)
await page.evaluate(()=>window.scrollTo(0,1600)); await page.waitForTimeout(800);
const vis = await page.evaluate(()=>{ const r=document.querySelector('#mapGuida').getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0; });
ok(!vis, 'scorrendo il testo la mappa esce di vista e lascia leggere');
ok(await page.locator('.mapfab.on').count() === 1, 'e resta richiamabile col tasto');

// il ritorno
await page.locator('#gBack').click();
await page.waitForTimeout(1500);
ok(/Asse imperiale/.test(await page.locator('h1').textContent()), 'si torna al giorno');

// e la barra in basso resta su GIORNI durante la guida
await page.locator('[data-guida]').click(); await page.waitForTimeout(1800);
ok(await page.locator('#tabDays[aria-current="page"]').count() === 1, 'la barra resta su Giorni');

// foto e curiosita
ok(await page.locator('.gfoto img').count() === 13, `foto: ${await page.locator('.gfoto img').count()}/13`);
ok(await page.locator('.gcur').count() === 13, `curiosita: ${await page.locator('.gcur').count()}/13`);
// loading="lazy": vanno scorse tutte prima di poterle giudicare
await page.evaluate(async () => {
  for (const el of document.querySelectorAll('.gfoto img')) { el.loading = 'eager'; el.scrollIntoView(); }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(2500);
const rotte = await page.evaluate(() => [...document.querySelectorAll('.gfoto img')]
  .filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src')));
ok(rotte.length === 0, rotte.length ? 'IMMAGINI ROTTE: '+rotte.join(', ') : 'tutte le immagini caricano davvero');
const crediti = await page.locator('.gfoto figcaption').allTextContents();
ok(crediti.every(c => /·/.test(c) && c.length > 12), 'ognuna ha autore e licenza');
const fonti = await page.locator('.gpunto a.act:has-text("Fonte")').count();
ok(fonti === 13, `ogni punto ha il tasto Fonte: ${fonti}/13`);
const link = await page.locator('.gpunto a.act:has-text("Fonte")').first().getAttribute('href');
ok(/wikipedia\.org/.test(link), `e punta a una fonte vera: ${link}`);
const testo = await page.locator('.wrap').innerText();
ok(!/1888/.test(testo), 'la data sbagliata dell\'incendio non c\'e piu');
ok(/1886/.test(testo), 'e c\'e quella giusta');
console.log('   esempio credito:', crediti[0]);
const parole = (await page.locator('.wrap').innerText()).split(/\s+/).length;
console.log(`\nparole nella guida: ${parole}`);
console.log('errori:', errs.length?errs:'nessuno');
await page.screenshot({path:'shots/15-guida-alto.png'});
await page.evaluate(()=>window.scrollTo(0,1250));
await page.waitForTimeout(700);
await page.screenshot({path:'shots/16-guida-testo.png'});
await b.close();
