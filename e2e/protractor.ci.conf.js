
const { SpecReporter } = require('jasmine-spec-reporter');
const { config } = require('./protractor.conf');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  ...config,
  capabilities: {
    chromeOptions: {
      args: ['--headless']
    },
    browserName: 'chrome'
  }
};