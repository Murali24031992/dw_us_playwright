import { test, expect } from '@playwright/test';

test('Radio and Checkbox', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/radio-checkbox');

  //Test Case 1: Verify that the checkbox is checked
//   const checkbox = page.locator('#checkbox1');
//   await checkbox.check();
//   await expect(checkbox).toBeChecked();
await page.locator('#radio-yes-1').check();
await expect(page.locator('#radio-yes-1')).toBeChecked();

//Test Case 2: Verify selecting another radio deselects the previous one
await page.locator('#radio-no-1').check();
await expect(page.locator('#radio-yes-1')).not.toBeChecked();
await expect(page.locator('#radio-no-1')).toBeChecked();
await page.pause();


});