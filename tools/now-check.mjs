import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const ok = (c,m)=>console.log((c?'OK   ':'ROTTO')+'  '+m);

async function alle(quando){
  const ctx = await b.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  await page.clock.setFixedTime(new Date(quando));
  await page.goto('http://localhost:8899/',{waitUntil:'networkidle'});
  await page.waitForTimeout(1800);
  const r = await page.evaluate(() => {
    const li = document.querySelector('.stop.now');
    return {
      giorno: document.querySelector('h1')?.textContent,
      adesso: li ? li.querySelector('h2')?.textContent.replace('adesso','').trim() : null,
      tag: !!document.querySelector('.nowtag'),
      pin: document.querySelectorAll('.pin--now').length,
      testata: document.querySelector('#countdown')?.textContent,
    };
  });
  await ctx.close();
  return r;
}

// 8 settembre, ore 12:30 — asse imperiale: 08:30 Citta Proibita, 12:15 Jingshan, 13:45 Beihai...
let r = await alle('2026-09-08T12:30:00');
console.log(JSON.stringify(r));
ok(/Asse imperiale/.test(r.giorno), 'apre sul giorno giusto');
ok(r.adesso === 'Jingshan Park', `la tappa di adesso e "${r.adesso}" (12:15, passata da poco)`);
ok(r.tag, 'ha l\'etichetta "adesso"');
ok(r.pin === 1, `e il segnaposto acceso sulla mappa: ${r.pin}`);
ok(/giorno/.test(r.testata||''), `la testata dice "${r.testata}"`);

// stesso giorno, ore 7 del mattino: non e ancora cominciato niente
r = await alle('2026-09-08T07:00:00');
ok(r.adesso === 'Città Proibita', `prima dell'alba indica dove stai andando: "${r.adesso}"`);

// sera tardi: resta l'ultima
r = await alle('2026-09-08T23:40:00');
ok(r.adesso === 'Nanluoguxiang', `a notte fonda resta l'ultima: "${r.adesso}"`);

// 15 settembre: giornata con due tappe opzionali senza orario
r = await alle('2026-09-15T20:00:00');
ok(r.adesso === 'Golden Whip Stream', `le opzionali non diventano mai "adesso": "${r.adesso}"`);

// un giorno fuori dal viaggio: niente
r = await alle('2026-08-27T12:00:00');
ok(r.adesso === null, 'prima del viaggio non c\'e nessun "adesso"');
r = await alle('2026-10-01T12:00:00');
ok(r.adesso === null, 'e nemmeno dopo');

await b.close();
