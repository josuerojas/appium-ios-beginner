// wdio.conf.js
const path = require('path');

// ---- Local defaults (override in CI with env vars) ----
const APP_PATH = process.env.APP_PATH
  || path.resolve(__dirname, 'apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.app');

const IOS_DEVICE_NAME = process.env.IOS_DEVICE_NAME || 'iPhone 15';
const IOS_PLATFORM_VERSION = process.env.IOS_PLATFORM_VERSION || '17.5';

exports.config = {
  runner: 'local',

  // Run all specs (including your end-to-end)
  specs: ['./test/specs/**/*.spec.js'],
  exclude: [],

  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  //
  // iOS simulator capability
  //
  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': IOS_DEVICE_NAME,
    'appium:platformVersion': IOS_PLATFORM_VERSION,
    'appium:automationName': 'XCUITest',
    'appium:app': APP_PATH,                 // <- from env or local default
    'appium:autoAcceptAlerts': true
  }],

  //
  // Start Appium automatically
  //
  services: [['appium', { args: { relaxedSecurity: true } }]],

  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 120000 // a bit higher for CI stability
  }
};
