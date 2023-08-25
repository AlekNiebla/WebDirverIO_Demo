const path = require('path');
const { config } = require('./wdio.shared.conf');

//
// ====================
// Runner Configuration
// ====================
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
    '../test/specs/ios/ios-todoList.spec.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'ios',
        'appium:deviceName': 'iPhone 12 Pro',
        'appium:platformVersion': '14.5',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), './app/ios/MVCTodo.app'),
    }
];

exports.config = config;
