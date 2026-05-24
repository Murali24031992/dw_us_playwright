import { test, expect } from '@playwright/test';
const { readLoginDetails } = require('../utils/excelReader');

test('Login Page with data from excel sheet', async ({ page }) => {
  const loginDetails = await readLoginDetails();
  
  await page.goto('https://practicetestautomation.com/practice-test-login/');
// Pause to inspect the page before filling in the form
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
  await page.locator('a:has-text("Log out")').click();

  //Test case 2: Negative username test
  await page.locator('#username').fill('Master');
  await page.locator('#password').fill('Password123');
  await page.locator('#submit').click();

// Verify error message is displayed for invalid username
  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#error')).toHaveText('Your username is invalid!');

  // Test case 3: Negative password test
  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Master123');
  await page.locator('#submit').click();

  // Verify error message is displayed for invalid password
  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#error')).toHaveText('Your password is invalid!');
});