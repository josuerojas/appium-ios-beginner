class MenuPage {
  async openMenu() {
    const { width, height } = await driver.getWindowRect();
    const x = Math.round(width * 0.08);
    const y = Math.round(height * 0.07);
    await driver.execute('mobile: tap', { x, y });
    console.log(`✅ Clicked menu via coordinate tap at (${x}, ${y})`);
    await driver.pause(1500);
  }

  get logoutButton() {
    return $('-ios predicate string:(label == "LOGOUT" OR name == "LOGOUT") AND (type == "XCUIElementTypeOther" OR type == "XCUIElementTypeStaticText" OR type == "XCUIElementTypeButton")');
  }

  async logout() {
    await this.logoutButton.waitForDisplayed({ timeout: 5000 });
    await this.logoutButton.click();
    console.log('✅ Clicked Logout');

    // Verify back on login screen
    await $('~test-Username').waitForDisplayed({ timeout: 10000 });
    await $('~test-LOGIN').waitForDisplayed({ timeout: 10000 });
    console.log('✅ Returned to login screen');
  }
}

module.exports = new MenuPage();
