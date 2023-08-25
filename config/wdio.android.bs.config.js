const {config} = require('./wdio.shared.conf');
const credentials = require('../creds.env.json');

//
// ====================
// Browserstack Credentials
// ====================
//
config.user = credentials.username;
config.key = credentials.key;
//
// ====================
// Runner Configuration
// ====================
//
// ============
// Specs
// ============
config.specs = [
    '../test/specs/android/delete-note-screen.spec.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        'platformName': 'android',
        "appium:deviceName" : "Google Pixel 6",
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://d3426236dffb921d4002ce9ed56b9c1bf93d9895',
        'appium:autoGrantPermissions': true,
    }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;
