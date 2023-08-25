describe.skip('Android Elements Test', () => {
    it('Find element by accessibility ID', async () => {
        //find element by accessibility ID
        // The '~' character indicated we are looking for an element by accessibility ID
        const appOption = await $('~App');

        //click on element
        await appOption.click();

        //assertion
        const actionBarOption = await $('~Action Bar')
        await expect(actionBarOption).toBeExisting()
    });

    it('find element by class name', async () => {
        //find element by classname
        //The '$' character returns a single element, the first one that it can find
        //The '$$' sign is for multiple elements 
        const className = await $('android.widget.TextView')
        console.log(await className.getText())

        //Assertion
        await expect(className).toHaveText('API Demos');
    });

    it('find element by Xpath', async () => {
        //xpath - (//tagname[@attribute=value])

        //navigate to Alert Dialog page
        const appOption = await $('~App');
        await appOption.click();
        const alertDialogBtn = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
        await alertDialogBtn.click();

        // finding by resource id
        const listDialogBtn = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

        // find by text
        const dialogOptionBtn = await $('//android.widget.TextView[@text="Command two"]').click()

        //Assertions - last option contains expected text
        const textAssertion = await $('android.widget.TextView')
        await expect(textAssertion).toHaveText('You selected: 1 , Command two')
    })

    it('find element by UI Selector', async () => {
        await $('~App').click();
        await $('android=new UiSelector().textContains("Alert")').click()
        
    })

    it('find multiple elements with $$', async () => {
        const expectedList = [
            "API Demos",
            "Access'ibility", "Accessibility",
            "Animation", "App", "Content",
            "Graphics", "Media", "NFC",
            "OS", "Preference", "Text",
            "Views"
        ];
        const actualList = [];


        const textList = await $$('android.widget.TextView');

        for (const element of textList){
            actualList.push(await element.getText());
        }

        await expect(actualList).toEqual(expectedList);
    })

    it('interact with text field', async () => {
        // go to auto complete screen
        await $('~Views').click();
        await $('//android.widget.TextView[@content-desc="Auto Complete"]').click()
        await $('~1. Screen Top').click();

        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await textField.addValue('Mexico')

        //verify the country name
        await expect(textField).toHaveText('Mexico')

        await driver.pause(5000);
    })
});