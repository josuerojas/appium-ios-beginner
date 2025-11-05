exports.config = {
  //
  // ====================
  // Runner and Specs
  // ====================
  runner: 'local',
  specs: ['./test/specs/swag.e2e.spec.js'],

  //
  // ====================
  // Capabilities
  // ====================
  maxInstances: 1,
  capabilities: [{
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:platformVersion': 'latest',
    'appium:deviceName': 'iPhone 15 Simulator',
    // app uploaded to Sauce storage
    'appium:app': 'sauce-storage:SwagLabsSim.zip',
    'sauce:options': {
      name: 'Appium iOS E2E – Login + Menu + Logout',
      build: `build-${new Date().toISOString().slice(0,10)}`,
      deviceOrientation: 'portrait',
    },
  }],

  //
  // ====================
  // Sauce Labs Configuration
  // ====================
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  region: 'us-west-1',
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  path: '/wd/hub',

  //
  // ====================
  // Test Config
  // ====================
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,

  //
  // ====================
  // Services
  // ====================
  services: [['sauce', { region: 'us-west-1' }]],

  //
  // ====================
  // Framework & Reporters
  // ====================
  framework: 'mocha',
  reporters: ['spec'],

  //
  // ====================
  // Mocha Options
  // ====================
  mochaOpts: {
    ui: 'bdd',
    timeout: 180000 // <-- increased from 60000 to handle Sauce latency
  },

  //
  // ====================
  // Hooks (optional)
  // ====================
  onPrepare: function (config, capabilities) {
    console.log('🧠 Preparing to run tests on Sauce Labs...');
  },
  beforeSession: function (config, capabilities, specs) {
    console.log('🧪 Starting test session...');
  },
  onComplete: function (exitCode, config, capabilities, results) {
    console.log('✅ Test run complete. Exit code:', exitCode);
  },
};
