import { test, expect } from '@playwright/test';

test('IFrame Test', async ({ page }) => {
    await page.goto('https://commitquality.com/practice-iframe');
   await page.waitForTimeout(3000);
    await expect(page.getByRole('heading', { name: 'IFrame' })).toHaveText('IFrame');  
    //TC01: Verify iframe is present on the page
    const iframeLocator = page.frameLocator('iframe[title="Products"]');
await expect(iframeLocator.locator('button[data-testid="filter-button"]')).toHaveText('Filter');

});