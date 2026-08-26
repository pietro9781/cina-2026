import pw from '/Users/pigr/Developer/fe-forum-event-web/node_modules/@playwright/test/index.js';
const { chromium, devices } = pw;
const b = await chromium.launch();
const page = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
const hosts = new Map();
page.on('request', r => {
  const h = new URL(r.url()).host;
  hosts.set(h, (hosts.get(h) || 0) + 1);
});
await page.goto('https://pietro9781.github.io/cina-2026/', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);
// gira tutta l'app: qualche giorno, la panoramica, la logistica
for (const i of [0, 5, 13]) { await page.locator('.chip').nth(i).click(); await page.waitForTimeout(2600); }
await page.locator('#tabMap').click();  await page.waitForTimeout(3000);
await page.locator('#tabLog').click();  await page.waitForTimeout(1200);
await page.locator('[data-lang]').first().count().catch(()=>{});
console.log('Domini contattati da tutta l\'app:');
for (const [h, n] of [...hosts].sort((a,b) => b[1]-a[1])) console.log(`  ${String(n).padStart(4)} x  ${h}`);
// e i link in uscita presenti nelle schede
await page.locator('#tabDays').click(); await page.waitForTimeout(1200);
const links = await page.evaluate(() =>
  [...new Set([...document.querySelectorAll('a[href^="http"]')].map(a => new URL(a.href).host))]);
console.log('\nDomini dei link nelle schede (aperti solo se li tocchi):');
links.forEach(l => console.log('   ' + l));
await b.close();
