class LoginPage {
  get usernameInput() {
    return $('~test-Username');
  }

  get passwordInput() {
    return $('~test-Password');
  }

  get loginButton() {
    return $('~test-LOGIN');
  }

  async login(username, password) {
    await this.usernameInput.waitForDisplayed({ timeout: 10000 });
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();

    // Verify successful login
    await $('~PRODUCTS').waitForDisplayed({ timeout: 10000 });
    console.log('✅ Logged in, on Products screen');
  }
}

module.exports = new LoginPage();
