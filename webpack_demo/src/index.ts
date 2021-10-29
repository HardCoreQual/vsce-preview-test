import playwright from 'playwright';

export function open() {
  (async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await browser.close();
  })();
}

