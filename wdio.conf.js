// wdio.conf.js
exports.config = {
  runner: 'local',
  specs: ['./test/specs/swag.e2e.spec.js'],

  maxInstances: 1,
  logLevel: 'info',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  // Use Sauce service (reads SAUCE_USERNAME/SAUCE_ACCESS_KEY from env)
  services: ['sauce'],

  // Run on Sauce iOS Simulator
  capabilities: [{
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    // pick any supported combo; "latest" keeps you evergreen
    'appium:platformVersion': 'latest',
    'appium:deviceName': 'iPhone 15 Simulator',
    // use the file we just uploaded
    'appium:app': 'sauce-storage:SwagLabsSim.zip',
    // optional niceties
    'sauce:options': {
      name: 'Appium iOS E2E – Login + Menu + Logout',
      build: `local-${new Date().toISOString().slice(0,10)}`,
      deviceOrientation: 'portrait'
    }
  }],

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: { ui: 'bdd', timeout: 60000 }
};
