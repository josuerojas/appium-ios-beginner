const LoginPage = require('../pageobjects/login.page');
const MenuPage = require('../pageobjects/menu.page');

describe('Sauce Labs Sample App – End to End', () => {
  it('logs in and logs out successfully', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await MenuPage.openMenu();
    await MenuPage.logout();
  });
});
