import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.laithwaites.com/');

  // Full Page Screenshot
 await page.screenshot({ path: 'FullPageScreenshot.png', fullPage: true });

 // Particular Element Screenshot
 const element = await page.locator('[data-testid="widget-CmsImage"][class="cms-image-container"]')
 .first();
 await element.screenshot({ path: 'ElementScreenshot.png' });
});