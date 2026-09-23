// Captures every screen listed in shots.config.mjs into public/screenshots/.
//
//   npm run capture                              # all screens
//   npm run capture -- players-detail layouts-builder   # just these
//
// A browser window opens. If Studio asks you to sign in, sign in there; capturing
// starts automatically once the dashboard loads. (Studio's session cookies end when
// the browser closes, so sign-in and capture have to happen in the same window.)
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import { BASE_URL, SHOTS } from './shots.config.mjs';

const only = process.argv.slice(2);
const shots = only.length ? SHOTS.filter((s) => only.includes(s.file)) : SHOTS;
const outDir = 'public/screenshots';
await mkdir(outDir, { recursive: true });

const ctx = await chromium.launchPersistentContext('.auth/profile', {
  channel: process.env.DVI_BROWSER ?? 'msedge',
  headless: false,
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = ctx.pages()[0] ?? (await ctx.newPage());

await page.goto(BASE_URL);
if (page.url().includes('/auth/')) {
  console.log('Sign in in the browser window. Capturing starts once the dashboard loads (10 minute limit).');
  await page.waitForURL((url) => url.href.startsWith(BASE_URL) && !url.pathname.startsWith('/auth'), {
    timeout: 10 * 60 * 1000,
  });
}

let failed = 0;
for (const shot of shots) {
  try {
    await page.goto(BASE_URL + shot.path, { waitUntil: 'networkidle' });
    if (page.url().includes('/auth/')) throw new Error('Signed out during capture');
    // Hide toast notifications and the feedback widget so screenshots stay clean.
    await page.addStyleTag({ content: '.jGrowl, .toast, #atlwdg-trigger { display: none !important; }' });
    await shot.prepare?.(page);
    await page.waitForTimeout(shot.wait ?? 600);
    await page.screenshot({ path: `${outDir}/${shot.file}.png` });
    console.log('ok  ', shot.file);
  } catch (err) {
    failed++;
    console.error('FAIL', shot.file, '-', err.message);
  }
}
await ctx.close();
console.log(`Done: ${shots.length - failed} captured, ${failed} failed.`);
process.exit(failed ? 1 : 0);
