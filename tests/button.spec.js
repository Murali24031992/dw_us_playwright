import { test, expect } from '@playwright/test';

test('button', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/buttons');

  // TC01: Verify button is clickable and triggers action
  const button = await page.getByRole('button', { name: 'Go To Home' });
  await button.click(); 
  await expect(page).toHaveURL('https://qaplayground.com/'); // Verify navigation to home page
  await expect(page.locator('h1')).toHaveText('Master Automation Testing With QA PlayGround'); 
});

test('button display', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/buttons');

  // TC02: Verify button displays the correct label text
  const button = await page.getByRole('button', { name: 'Go To Home' });
  await expect(button).toHaveText('Go To Home');
  await expect(page.locator('id=btn-find-location')).toHaveText('Find Location'); 

  // TC05: Verify default action text before any clicks
  await expect(page.locator('id=btn-action-result')).toHaveText('No action performed yet.');

  // TC04: Verify double-click button triggers double-click action
  const doubleClickButton = await page.locator('data-testid=btn-double-click');
  await doubleClickButton.dblclick();
  await expect(page.locator('data-testid=btn-double-click')).toHaveText('Double Click Me');
  await expect(page.locator('id=btn-action-result')).toHaveText('You Double-clicked on button!');

  // TC05: Verify right-click button triggers context menu action
  const rightClickButton = await page.locator('id=btn-right-click');
  await rightClickButton.click({ button: 'right' });
  await expect(page.locator('id=btn-action-result')).toBeVisible();
  await expect(page.locator('id=btn-action-result')).toHaveText('You Right-clicked on button!');
});

test('button disable', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/buttons'); 
  // TC06: Verify disabled button cannot be clicked
  const disabledButton = await page.locator('id=btn-disabled');
  await expect(disabledButton).toBeDisabled();
  await disabledButton.click({ force: true });
  await expect(page.locator('id=btn-action-result')).toHaveText('No action performed yet.');
  });

  // TC07: Verify button is enabled when it should be
  test ('button enable when it should be', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/buttons'); 
  const enabledButton = await page.locator('id=btn-find-location');
  await expect(enabledButton).not.toBeDisabled();
  await enabledButton.click();

  // TC08: Verify button is responsive on different screen sizes
    await page.setViewportSize({ width: 320, height: 480 });
    await expect(enabledButton).toBeVisible();
    await enabledButton.click();
    
});

test ('button keyboard navigation', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/buttons'); 
  // TC09: Verify button is accessible via keyboard
  const button = await page.getByRole('button', { name: 'Go To Home' });
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('https://qaplayground.com/');    
});

test ('button accessible to screen readers', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/buttons');
  // TC10: Verify button is accessible to screen readers
  const button = await page.getByRole('button', { name: 'Go To Home' });
  await expect(button).toBeVisible();
//   await expect(button).toHaveAttribute('aria-label', 'Go To Home');

  // TC11: Verify button hover state is visually distinct
//   await button.hover();
//   await expect(button).toHaveCSS('background-color', 'rgb(0, 123, 255)'); // Adjust the expected color as needed

  // TC12: Verify button state resets after page refresh
  const rightClickButton1 = await page.locator('id=btn-right-click');
  await rightClickButton1.click({ button: 'right' });
  await expect(page.locator('id=btn-action-result')).toBeVisible();
  await expect(page.locator('id=btn-action-result')).toHaveText('You Right-clicked on button!');
  await page.reload();
  await expect(rightClickButton1).toBeVisible();
});
