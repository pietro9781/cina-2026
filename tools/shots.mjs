import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;

const BASE = 'http://localhost:8899/';
const OUT = new URL('../shots/', import.meta.url).pathname;

const browser = await chromium.launch();
const ctx = await browser.newContext({ ...devices['iPhone 13'] });
const page = await ctx.newPage();

const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));

async function shot(name, prep) {
  await page.goto(BASE, { waitUntil: 'networkidle' });
  if (prep) await prep();
  await page.waitForTimeout(2200); // i tile hanno bisogno di un attimo
  await page.screenshot({ path: OUT + name + '.png', fullPage: false });
  console.log('  ->', name);
}

// 1. giornata dentro una sola città
await shot('01-giorno-pechino', async () => {
  await page.locator('.chip').nth(1).click(); // 7 set, Pechino
});

// 2. giornata di treno: due riquadri
await shot('02-giorno-treno-xian-chengdu', async () => {
  await page.locator('.chip').nth(5).click(); // 11 set
  await page.waitForTimeout(600);
  await page.evaluate(() => window.scrollTo(0, 320));
});

// 3. panoramica del viaggio
await shot('03-panoramica', async () => {
  await page.locator('#tabMap').click();
});

// 4. la Muraglia: si divide senza treno
await shot('04-muraglia', async () => {
  await page.locator('.chip').nth(3).click(); // 9 set
});

// 5. Hong Kong: qui la correzione conta
await shot('05-hong-kong', async () => {
  await page.locator('.chip').nth(12).click(); // 18 set
});

// quante tappe e quanti segnaposto, giorno per giorno
await page.goto(BASE, { waitUntil: 'networkidle' });
const audit = await page.evaluate(async () => {
  const out = [];
  const chips = [...document.querySelectorAll('.chip')];
  for (let i = 0; i < chips.length; i++) {
    chips[i].click();
    await new Promise(r => setTimeout(r, 260));
    out.push({
      giorno: i + 1,
      mappe: document.querySelectorAll('.map').length,
      pin: document.querySelectorAll('.pin').length,
      tappe: document.querySelectorAll('.stop').length,
      titolo: document.querySelector('h1')?.textContent
    });
  }
  return out;
});
console.table(audit);

// desktop
const dctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const dpage = await dctx.newPage();
await dpage.goto(BASE, { waitUntil: 'networkidle' });
await dpage.waitForTimeout(2000);
await dpage.screenshot({ path: OUT + '06-desktop.png' });
console.log('  -> 06-desktop');

console.log('\nerrori console:', errors.length ? errors : 'nessuno');
await browser.close();
