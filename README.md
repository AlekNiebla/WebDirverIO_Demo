# WebDirverIO_Demo
WebDriverIO playground project

to run the tests in this project it is necessary to setup a  `creds.env.json` files with the following keys.
{
    "username":"BROWSERSTACK_USER",
    "key":"BROWSERSTACK_KEY"
}

# BABEL LINK
https://webdriver.io/docs/babel/

# link to EsLint for wdio
https://www.npmjs.com/package/eslint-plugin-wdio

# isntructions to run each enviroment
> to run iOS test run the following command:
    npx wdio config/wdio.ios.conf.js

> to run the android tests run teh following command:
    npx wdio config/wdio.android.conf.js
    NOTE: you'll need to lift up the simulator before running these tests

# debugging
> in case there is a socket hang up, it might be necessary to run these two commands, the proceed to restart the appium server.
    adb uninstall io.appium.uiautomator2.server
    adb uninstall io.appium.uiautomator2.server.test