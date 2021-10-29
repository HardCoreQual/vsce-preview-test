import playwright from 'playwright';

(async () => {
  const browser = await playwright.chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await browser.close();
})();

