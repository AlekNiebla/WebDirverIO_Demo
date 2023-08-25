const { isExportDeclaration } = require("typescript");

describe('Android Native Feature Test', () => { 
    it('Find element by accessibility ID', async () => {
        //access activity
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.app.AlertDialogSamples')
        //await driver.pause(5000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('work with Dialog buttons', async () => {

        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.app.AlertDialogSamples');
        await $('~OK Cancel dialog with a message').click();

        //accept alert
        //await driver.acceptAlert();

        //dismiss alert
        //await driver.dismissAlert();

        //get alert text
        console.log('ALERT TEXT--->', await driver.getAlertText())

        // click on the ok button
        await $('//*[@resource-id="android:id/button1"]').click()

        //assert alert is not visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // scrollTextIntoView - more stable solution to find a specific element
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //await $('~Secure Surfaces').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal scrolling', async () => {
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.view.Gallery1');
        //await driver.pause(3000);

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
        await driver.pause(3000);
    });

    it.only('Scroll Excercise',async () => {
       await driver.startActivity(
           'io.appium.android.apis',
           'io.appium.android.apis.view.DateWidgets1'
           );
       
       const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
       const currentDate = date.getText();
       console.log('CURRENT DATE-->',currentDate)

       await $('~change the date').click()
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
       await driver.pause(3000);
       await $('//*[@text="10"]').click()
       await $('//*[@resource-id="android:id/button1"]').click()
       
       //assertions
       await expect(date.getText()).not.toMatch(currentDate);
       await driver.pause(3000);
    });
})