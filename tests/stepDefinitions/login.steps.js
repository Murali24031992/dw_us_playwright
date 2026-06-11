const { Given, When, Then } = require('@cucumber/cucumber');

Given('I open the login page', async function () {
  await this.loginPage.goto();
});

When('I login with username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

When('I login with valid credentials from the Excel sheet', async function () {
  await this.loginPage.loginWithExcel();
});

Then('I should be redirected to the logged in page', async function () {
  await this.loginPage.expectLoggedIn();
});

Then('I should see a logout button', async function () {
  await this.loginPage.expectLogoutButtonVisible();
});

Then('I should see an invalid username error', async function () {
  await this.loginPage.expectInvalidUsername();
});

Then('I should see an invalid password error', async function () {
  await this.loginPage.expectInvalidPassword();
});
