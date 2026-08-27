import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
import fs from 'node:fs';
// le attese si ricavano dai dati, non si scrivono a mano: cosi' non si rompono
// ogni volta che si aggiunge una citta'
const { GUIDE } = await import('../guida.js');
const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const DAYS = eval(html.match(/const DAYS = (\[[\s\S]*?\n\];)/)[1].slice(0, -1));
const attesiPulsanti = DAYS.flatMap(d => d.stops).filter(s => GUIDE[s.n]).length;
const attesiGiorni   = DAYS.filter(d => d.stops.some(s => GUIDE[s.n])).length;
const { chromium, devices } = pw;
const ok=(c,m)=>console.log((c?'OK   ':'ROTTO')+'  '+m);
const b = await chromium.launch();
const page = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
page.on('console',m=>{ if(m.type()==='error' && !/favicon/.test(m.text())) errs.push(m.text()); });
await page.goto('http://localhost:8899/',{waitUntil:'networkidle'});

// quanti pulsanti Guida per giornata
const perGiorno = [];
for (let i=0;i<14;i++){
  await page.locator('.chip').nth(i).click(); await page.waitForTimeout(700);
  const n = await page.locator('[data-guida]').count();
  if (n) perGiorno.push([i+1, n, await page.locator('[data-guida]').allTextContents()]);
}
perGiorno.forEach(([g,n,t])=>console.log(`   giorno ${String(g).padStart(2)}: ${n} guida/e — ${t.map(x=>x.trim()).join(' | ')}`));
ok(perGiorno.length === attesiGiorni, `giornate con una guida: ${perGiorno.length} (attese ${attesiGiorni})`);
ok(perGiorno.reduce((a,[,n])=>a+n,0) === attesiPulsanti,
   `pulsanti Guida: ${perGiorno.reduce((a,[,n])=>a+n,0)} (attesi ${attesiPulsanti})`);
// e nessuna guida deve restare orfana, senza una tappa che la apra
const nomi = new Set(DAYS.flatMap(d => d.stops.map(s => s.n)));
const orfane = Object.keys(GUIDE).filter(k => !nomi.has(k));
ok(orfane.length === 0, orfane.length ? `guide orfane: ${orfane}` : 'nessuna guida orfana');

// apri ogni guida e controllala
let totPunti=0, totFoto=0, rotte=[];
for (const [g] of perGiorno) {
  await page.locator('.chip').nth(g-1).click(); await page.waitForTimeout(900);
  const quante = await page.locator('[data-guida]').count();
  for (let k=0;k<quante;k++){
    await page.locator('.chip').nth(g-1).click(); await page.waitForTimeout(700);
    const nome = (await page.locator('[data-guida]').nth(k).textContent()).trim();
    await page.locator('[data-guida]').nth(k).click(); await page.waitForTimeout(2600);
    const titolo = await page.locator('h1').textContent();
    const punti = await page.locator('.gpunto').count();
    const pin   = await page.locator('.pin').count();
    const foto  = await page.locator('.gfoto img').count();
    const fonti = await page.locator('.gpunto a.act:has-text("Fonte")').count();
    await page.evaluate(async () => {
      for (const el of document.querySelectorAll('.gfoto img')) { el.loading='eager'; el.scrollIntoView(); }
      window.scrollTo(0,0);
    });
    await page.waitForTimeout(1800);
    const ko = await page.evaluate(()=>[...document.querySelectorAll('.gfoto img')]
      .filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.getAttribute('src')));
    rotte.push(...ko);
    totPunti+=punti; totFoto+=foto;
    const bene = punti>0 && pin===punti && fonti===punti && ko.length===0;
    console.log(`${bene?'OK   ':'ROTTO'}  ${titolo.padEnd(34)} ${punti} punti · ${pin} segnaposto · ${foto} foto · ${fonti} fonti${ko.length?' · IMMAGINI ROTTE '+ko:''}`);
    await page.locator('#gBack').click(); await page.waitForTimeout(900);
  }
}
console.log(`\ntotale: ${totPunti} punti · ${totFoto} foto`);
ok(rotte.length===0, rotte.length?`immagini rotte: ${rotte}`:'nessuna immagine rotta');
console.log('errori:', errs.length?errs:'nessuno');
await b.close();
