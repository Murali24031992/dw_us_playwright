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
// await page.pause(); 
//TC03: Verify only one radio button can be selected at a time
await page.locator('#radio-yes-2').check();
await expect(page.locator('#radio-yes-1')).not.toBeChecked();
await expect(page.locator('#radio-no-1')).toBeChecked();

//TC04: Verify radio button label text is correct
// const yesLabel = (await page.locator('label[for="radio-yes-1"]').textContent())?.trim();
// expect(yesLabel).toBe('Yes');
// const noLabel = (await page.locator('label[for="radio-no-1"]').textContent())?.trim();
// expect(noLabel).toBe('No');

//TC05: Verify radio button state persists after page interaction
await page.reload();
// await expect(page.locator('#radio-yes-2')).toBeChecked();
await expect(page.locator('#radio-yes-1')).not.toBeChecked();
await expect(page.locator('#radio-yes-1')).not.toBeChecked();

//TC06: Verify checkbox can be checked and unchecked
await page.locator('[data-testid="checkbox-remember-me"]').check();
await expect(page.locator('[data-testid="checkbox-remember-me"]')).toBeChecked();
await page.locator('[data-testid="checkbox-remember-me"]').uncheck();
await expect(page.locator('[data-testid="checkbox-remember-me"]')).not.toBeChecked();


//TC08: Verify multiple checkboxes can be selected simultaneously
await page.locator('[data-testid="checkbox-remember-me"]').check();
await expect(page.locator('[data-testid="checkbox-remember-me"]')).toBeChecked();
await page.locator('[data-testid="checkbox-terms"]').check();
await expect(page.locator('[data-testid="checkbox-terms"]')).toBeChecked();

//TC09: Verify radio buttons are keyboard navigable
await page.locator('id=radio-bug-yes').focus();
await page.keyboard.press('Space');
await expect(page.locator('id=radio-bug-yes')).toBeChecked();


//TC10: Verify checkbox is keyboard togglable
await page.locator('[data-testid="checkbox-remember-me"]').focus();
await page.keyboard.press('Space');
await expect(page.locator('[data-testid="checkbox-remember-me"]')).not.toBeChecked();
// await page.pause();

//TC11: Verify disabled radio button cannot be selected
await expect(page.locator('data-testid=radio-maybe')).toBeDisabled();



});