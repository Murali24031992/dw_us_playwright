const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
    this.errorMessage = page.locator('#error');
    this.logoutLink = page.locator('a:has-text("Log out")');
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async loginWithExcel() {
    const { readLoginDetails } = require('../../utils/excelReader');
    const loginDetails = await readLoginDetails();
    await this.login(loginDetails.username, loginDetails.password);
    return loginDetails;
  }

  async expectLoggedIn() {
    await expect(this.page).toHaveURL(/logged-in-successfully/);
    await expect(this.logoutLink).toBeVisible();
  }

  async expectLogoutButtonVisible() {
    await expect(this.logoutLink).toBeVisible();
  }

  async expectInvalidUsername() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Your username is invalid!');
  }

  async expectInvalidPassword() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Your password is invalid!');
  }
}

module.exports = LoginPage;
