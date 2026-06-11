const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});
