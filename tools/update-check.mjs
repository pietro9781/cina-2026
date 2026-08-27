import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
import fs from 'node:fs';
const { chromium, devices } = pw;
const ok = (c,m)=>console.log((c?'OK   ':'ROTTO')+'  '+m);
const metti = v => fs.copyFileSync(`/tmp/index.${v}.html`, 'index.html');
const ver = p => p.evaluate(() => document.querySelector('#ver')?.textContent || '?');

const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'] });
const page = await ctx.newPage();

/* ---- 1. prima installazione con la versione A ---- */
metti('A');
await page.goto('http://localhost:8899/',{waitUntil:'networkidle'});
await page.waitForFunction(() => navigator.serviceWorker.controller !== null, null, {timeout:20000});
await page.waitForTimeout(1500);
ok(await ver(page) === 'A', `installata la versione ${await ver(page)}`);

/* ---- 2. esce la B: l'app appena aperta e non toccata deve aggiornarsi da sola ---- */
metti('B');
await page.reload({waitUntil:'domcontentloaded'});
// non si tocca niente: deve ricaricarsi da solo
await page.waitForFunction(() => document.querySelector('#ver')?.textContent === 'B',
  null, {timeout:25000}).then(()=>ok(true,'senza toccare niente e passata da sola alla B'))
  .catch(async ()=>ok(false, `e rimasta alla ${await ver(page)}`));
ok(await ver(page) === 'B', `adesso mostra la ${await ver(page)}`);

/* ---- 3. esce la C mentre la stai gia usando: non deve ricaricarti sotto il dito ---- */
metti('C');
// il tocco deve arrivare PRIMA che il service worker risponda, altrimenti si
// corre contro la rete: lo si spara a DOMContentLoaded, cioe' subito.
const p2 = await ctx.newPage();
await p2.addInitScript(() => {
  addEventListener('DOMContentLoaded', () =>
    document.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })));
});
await p2.goto('http://localhost:8899/',{waitUntil:'domcontentloaded'});
await p2.waitForTimeout(7000);
ok(await p2.locator('#toast.tap').count() === 1, 'mentre la usi non ricarica di colpo: propone e basta');
ok(await ver(p2) === 'B', `e resta sulla ${await ver(p2)} finche non decidi tu`);
const testo = await p2.locator('#toast').textContent();
ok(/Nuova versione/.test(testo), `il messaggio dice: "${testo}"`);

/* ---- 4. toccando il messaggio si aggiorna ---- */
await p2.evaluate(()=>document.querySelector('#toast').click());
await p2.waitForFunction(() => document.querySelector('#ver')?.textContent === 'C',
  null, {timeout:20000}).then(()=>ok(true,'toccando il messaggio passa alla C'))
  .catch(async ()=>ok(false,`il messaggio non ha aggiornato: ${await ver(p2)}`));
await p2.close();

/* ---- 5. senza rete non deve rompere niente ---- */
await ctx.setOffline(true);
await page.reload({waitUntil:'domcontentloaded'});
await page.waitForTimeout(3000);
ok(await page.locator('.stop').count() > 0, `offline l'app si apre lo stesso (versione ${await ver(page)})`);
ok(await page.locator('#toast.tap').count() === 0, 'e non propone aggiornamenti che non puo scaricare');
await ctx.setOffline(false);

await b.close();
