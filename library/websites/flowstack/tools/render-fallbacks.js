/* Re-render the static dune PNGs (no-WebGL fallback) from the live shader.
   Usage (from the site folder):
     python3 -m http.server 8094 &
     npm i -D playwright && npx playwright install chromium
     node tools/render-fallbacks.js            # writes assets/dunes-<theme>[-rolling].png
   Themes are read from js/config.js -> backdrop.themes. */
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const BASE = process.env.BASE || 'http://localhost:8094/';
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p0 = await b.newPage(); await p0.goto(BASE + 'dune-lab.html');
  const themes = await p0.evaluate(() => Object.keys(FLOWSTACK_CONFIG.backdrop.themes)); await p0.close();
  for (const theme of themes) {
    const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
    await p.goto(BASE + 'dune-lab.html?still=1&theme=' + theme, { waitUntil: 'networkidle' });
    await p.waitForTimeout(600);
    const urls = await p.evaluate(() => FlowstackDunes.list.map(d => { d.draw(true); return d.canvas.toDataURL('image/png'); }));
    const out = path.join(__dirname, '..', 'assets');
    fs.writeFileSync(path.join(out, `dunes-${theme}.png`), Buffer.from(urls[0].split(',')[1], 'base64'));
    fs.writeFileSync(path.join(out, `dunes-${theme}-rolling.png`), Buffer.from(urls[1].split(',')[1], 'base64'));
    console.log('rendered', theme); await p.close();
  }
  await b.close();
})();
