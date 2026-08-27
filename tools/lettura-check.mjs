import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const page = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
const ok=(c,m)=>console.log((c?'OK   ':'ROTTO')+'  '+m);
await page.goto('http://localhost:8899/',{waitUntil:'networkidle'});
await page.locator('.chip').nth(2).click(); await page.waitForTimeout(1600);
await page.locator('[data-guida]').first().click(); await page.waitForTimeout(3000);

const H = (await page.viewportSize()).height;
// in cima la mappa si vede
let m = await page.evaluate(()=>document.querySelector('.gmap').getBoundingClientRect());
ok(m.top < 600, 'in cima la mappa c\'e');
ok(await page.locator('.mapfab.on').count() === 0, 'e il tasto flottante non serve');

// scorrendo, la mappa se ne va e il testo ha tutto lo schermo
await page.evaluate(()=>window.scrollTo(0,1800)); await page.waitForTimeout(900);
m = await page.evaluate(()=>document.querySelector('.gmap').getBoundingClientRect());
ok(m.bottom < 0, `scorrendo la mappa esce di vista (bottom ${Math.round(m.bottom)}px)`);
const coperto = await page.evaluate(() => {
  const fissi = [...document.querySelectorAll('header,.bar,.gmap.pannello')]
    .map(e=>e.getBoundingClientRect()).reduce((a,r)=>a+Math.max(0,Math.min(r.bottom,innerHeight)-Math.max(r.top,0)),0);
  return { fissi: Math.round(fissi), h: innerHeight };
});
ok(coperto.fissi < coperto.h*0.3,
   `lo schermo occupato da barre fisse: ${coperto.fissi}px su ${coperto.h} (prima erano ~370)`);
ok(await page.locator('.mapfab.on').count() === 1, 'compare il tasto Mappa');

// aprendo il pannello
await page.locator('#mapFab').click(); await page.waitForTimeout(1200);
const y1 = await page.evaluate(()=>window.scrollY);
ok(await page.locator('.gmap.pannello').count() === 1, 'il pannello si apre dal basso');
ok(await page.locator('.leaflet-tile-loaded').count() > 0,
   `e la mappa dentro disegna: ${await page.locator('.leaflet-tile-loaded').count()} riquadri`);
ok(/Chiudi/.test(await page.locator('#fabVerbo').textContent()), 'la striscia dice Chiudi');

// chiudendo si resta dove si stava leggendo
await page.locator('#mapFab').click(); await page.waitForTimeout(900);
const y2 = await page.evaluate(()=>window.scrollY);
ok(await page.locator('.gmap.pannello').count() === 0, 'il pannello si richiude');
ok(Math.abs(y1-y2) < 40, `e non si perde il segno: ${y1} -> ${y2}`);

// il testo scorre dietro la striscia come dietro qualsiasi barra fissa: quello
// che conta e' che scorrendo fino in fondo NIENTE resti irraggiungibile
await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
await page.waitForTimeout(900);
const fondo = await page.evaluate(() => {
  const b = document.querySelector('.mapfab').getBoundingClientRect();
  const ultimo = document.querySelector('.gcoda') || [...document.querySelectorAll('.gpunto')].pop();
  const r = ultimo.getBoundingClientRect();
  return { ultimoFinisce: Math.round(r.bottom), strisciaInizia: Math.round(b.top) };
});
ok(fondo.ultimoFinisce <= fondo.strisciaInizia,
   `in fondo l'ultimo testo resta sopra la striscia (${fondo.ultimoFinisce} <= ${fondo.strisciaInizia})`);
await page.evaluate(()=>window.scrollTo(0,1800)); await page.waitForTimeout(700);
ok(/Sala|Porta|Muro|Palazzo|Giardino|Pozzo|percorso/.test(await page.locator('#fabCosa').textContent()),
   `e dice dove sei: "${await page.locator('#fabCosa').textContent()}"`);

// toccare un punto NON deve aprire il pannello mentre leggi
await page.evaluate(()=>document.querySelector('[data-gp="8"]').click());
await page.waitForTimeout(900);
ok(await page.locator('.gmap.pannello').count() === 0, 'toccando un punto il pannello resta chiuso');
ok(await page.locator('.gpunto.on').count() === 1, 'ma il punto si accende lo stesso');
console.log('errori:', errs.length?errs:'nessuno');
await page.evaluate(()=>window.scrollTo(0,1800)); await page.waitForTimeout(600);
await page.screenshot({path:'shots/23-lettura.png'});
await page.locator('#mapFab').click(); await page.waitForTimeout(1400);
await page.screenshot({path:'shots/24-pannello.png'});
await b.close();
