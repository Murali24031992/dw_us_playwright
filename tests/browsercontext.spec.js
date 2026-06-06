const { test, expect } = require('@playwright/test');
const { readLoginDetails } = require('../utils/excelReader');

test('browser context isolation', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
const loginDetails = await readLoginDetails();

await page.goto('https://practicetestautomation.com/practice-test-login/');
// Pause to inspect the page before filling in the form
  await page.locator('#username').fill(loginDetails.username);
  await page.locator('#password').fill(loginDetails.password);
  await page.locator('#submit').click();
  await context.close();
});


