
describe('iOS Find Element', () => {
    it('find element by accesiblity id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    });

    it('find by tag name', async () => {
        //single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        //multiple elements
        const textElements = await $$('XCUIElementTypeStaticText');

        for (const element of textElements){
            console.log(await element.getText());
        }
    });

    it('find by xpath', async () => {
        //await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        //await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
 
         await $('//*[@name="Alert Views"]').click();
         await $('//*[@name="Simple"]').click();
         await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
     });

     it('find by class chain', async () => { 
        //const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
         await $(`-ios class chain:${alertText}`).click();
         await $('//*[@name="Simple"]').click();
         await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
     });

     it('find by predicate string', async () => { 
        //const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';
         await $(`-ios predicate string:${alertText}`).click();
         await $('//*[@name="Simple"]').click();
         await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
     });

     it.only('Selector Excersice', async () => {
        await $('~Search').click();
        await $('~Default').click();
        await $('//XCUIElementTypeSearchField').addValue("Good Soup")
        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value")

        await $('~Clear text').click()
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value")
     });


});