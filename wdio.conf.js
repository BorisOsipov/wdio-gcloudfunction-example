/* eslint-disable max-len */
const puppeteer = require('puppeteer');

exports.config = {
  // debug: true,
  // execArgv: ['--inspect=127.0.0.1:5859'],
  host: '127.0.0.1',
  port: '9517',
  path: '/',
  specs: [
    'spec/*.spec.js',
  ],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    chromeOptions: {
      binary: puppeteer.executablePath(),
      args: ['--disable-dev-shm-usage', '--headless', '--no-sandbox'],
    },
  }],
  services: ['chromedriver'],
  chromeDriverArgs: ['--port=9517'],
  sync: true,
  logLevel: 'error',
  coloredLogs: false,
  deprecationWarnings: false,
  bail: 0,
  baseUrl: 'http://localhost:8080',
  waitforTimeout: 1000,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 1200000,
  },
  onError(message) {
    const logs = browser.log('browser');
    logs.value.forEach((val) => {
      console.log(val);
    });
  },
};
