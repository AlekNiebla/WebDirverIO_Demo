const {config} = require('./wdio.shared.conf');
const path = require('path');

//
// ====================
// Runner Configuration
// ====================
config.port= 4723;

//
// ============
// Specs
// ============
config.specs = [
    '../test/specs/android/add-note-screen*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:deviceName': 'Pixel 6',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true,
        //"appium:appPackage": "com.viubyhub.mobile",
        //"appium:appActivity": "com.viubyhub.mobile.MainActivity",
    }
]

exports.config = config;
