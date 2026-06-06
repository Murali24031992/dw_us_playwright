const { test, expect } = require('@playwright/test');

test('open multiple windows in one browser context', async ({ browser }) => {
  // Create a fresh browser context for isolation
  const context = await browser.newContext();

  // Open the first window/tab
  const page1 = await context.newPage();
  await page1.goto('https://example.com');

  // Open a second window/tab in the same browser context
  const page2 = await context.newPage();
  await page2.goto('https://example.org');

  // Validate both pages opened successfully
  await expect(page1).toHaveURL('https://example.com/');
  await expect(page2).toHaveURL('https://example.org/');

  // Close the context when done
  await context.close();
});
