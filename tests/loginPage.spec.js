import { test, expect } from '@playwright/test';
const { readLoginDetails } = require('../utils/excelReader');

test('Login Page with data from excel sheet', async ({ page }) => {
  const loginDetails = readLoginDetails();
  
  await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.pause(); // Pause to inspect the page before filling in the form
  await page.locator('#username').fill(loginDetails.username);
  await page.locator('#password').fill(loginDetails.password);
  await page.locator('#submit').click();

  // Verify new page URL contains the expected path
  expect(page.url()).toContain('practicetestautomation.com/logged-in-successfully/');

  // Verify new page contains expected text
  const pageContent = await page.content();
  const hasExpectedText = pageContent.includes('Congratulations') || pageContent.includes('successfully logged in');
  expect(hasExpectedText).toBeTruthy();

  // Verify Log out button is displayed on the new page
  await expect(page.locator('a:has-text("Log out")')).toBeVisible();
});