const { test, expect } = require('@playwright/test');
const { readLoginDetails } = require('../utils/excelReader');

test('browser context isolation', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
const loginDetails = await readLoginDetails();

await page.goto('https://practicetestautomation.com/practice-test-login/');
// Pause to inspect the page before filling in the form
  const userName=page.locator('#username')
  await userName.fill(loginDetails.username);
  const password=page.locator('#password');
  await password.fill(loginDetails.password);
  await page.locator('#submit').click();
  await context.close();
});


