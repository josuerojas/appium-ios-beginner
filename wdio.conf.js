// wdio.conf.js
exports.config = {
  runner: 'local',
  specs: ['./test/specs/swag.e2e.spec.js'],

  maxInstances: 1,
  logLevel: 'info',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  // --- Explicit Sauce creds + endpoint (region us-west-1) ---
  user: process.env.SAUCE_USERNAME,            // e.g., StarPatria
  key: process.env.SAUCE_ACCESS_KEY,           // your long access key
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  protocol: 'https',
  path: '/wd/hub',

  // You can keep (or remove) the service; explicit host settings take precedence.
  services: [['sauce', { region: 'us-west-1' }]],

  capabilities: [{
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:platformVersion': 'latest',
    'appium:deviceName': 'iPhone 15 Simulator',
    // Must match EXACTLY the file name in Sauce storage (case-sensitive)
    'appium:app': 'sauce-storage:SwagLabsSim.zip',
    'sauce:options': {
      name: 'Appium iOS E2E – Login + Menu + Logout',
      build: `CI-${new Date().toISOString().slice(0,10)}`,
      deviceOrientation: 'portrait'
    }
  }],

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: { ui: 'bdd', timeout: 60000 }
};
