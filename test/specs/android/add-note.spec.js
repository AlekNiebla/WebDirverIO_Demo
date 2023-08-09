describe.skip('test', () => {
    it('skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
            .click();
    });

    it('add note, verify elements and save it', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        const noteTitle = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        const noteContent = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')

        await noteTitle.setValue('Fav Anime List')
        await noteContent.addValue('Jojo Bizarre Adventure\nDemon Slayer\nJujutsu Kaisen')

        //save te changes
        await driver.back()
        await driver.back()

        //assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText('Jojo Bizarre Adventure\nDemon Slayer\nJujutsu Kaisen');
    });

    it('Delete note', async () => {
        const Title = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').getText();
        await $('~More').click()
        await $('//*[@text="Delete"]').click()
        await driver.acceptAlert();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
        await $('//*[@text="Trash Can"]').click()

        //assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toHaveText(Title);
        await driver.pause(3000);

    });
});