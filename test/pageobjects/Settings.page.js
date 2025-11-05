class SettingsPage {
  get table() { return $('-ios predicate string: type == "XCUIElementTypeTable"'); }
  get generalCell() { return $('-ios predicate string: label == "General" AND type == "XCUIElementTypeCell"'); }

  async openGeneral() {
    await this.table.waitForDisplayed({ timeout: 15000 });
    for (let i = 0; i < 6 && !(await this.generalCell.isDisplayed().catch(() => false)); i++) {
      await driver.execute('mobile: scroll', { direction: 'down' });
    }
    await this.generalCell.waitForDisplayed({ timeout: 10000 });
    await this.generalCell.click();
  }
}
module.exports = new SettingsPage();
