describe('iOS Native Features', () => {
    it('Working with alert box',async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        //click Ok
        //await $('~Ok').click();

        console.log(await driver.getAlertText())
        
        //dismiss aler
        await driver.dismissAlert();

        //assertion
        await expect($('~Ok')).not.toExist();
    });

    it('Working with scrolleable element', async () => {
        //easiest - scrolls the parent element
        //await driver.execute('mobile: scroll', { direction: "down"});
        //await driver.execute('mobile: scroll', { direction: "up"});

        //complex
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value')
        const bluePicker = await $('~Blue color component value')
        
        await driver.execute('mobile: scroll',{ element: redPicker.elementId ,direction: 'down'});
        await driver.execute('mobile: scroll',{ element: bluePicker.elementId ,direction: 'up'});

        await driver.pause(2000);
    });

    it.only('Working with Picker view', async () => {
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value')
        const greenPicker = await $('~Green color component value')
        const bluePicker = await $('~Blue color component value')
        
        //set color to purple (125,0,125)
        await redPicker.addValue('125')
        await bluePicker.addValue('125')
        await greenPicker.addValue('0')

        await driver.pause(2000);
    });
});