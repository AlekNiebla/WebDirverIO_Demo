const AddNoteScreen = require('../../screenobjects/android/add-note.screen');

describe.skip('Delete Note', () => {
    it('skip tutorial', async () => {        
        await AddNoteScreen.skipBtn.click();
    });

    it('add note, verify elements and save it', async () => {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.editNoteBtn).toBeDisplayed();

        await AddNoteScreen.noteTitle.setValue('Fav Anime List');
        await AddNoteScreen.noteContent.addValue('Jojo Bizarre Adventure\nDemon Slayer\nJujutsu Kaisen');

        // Save the changes

        // Assertions
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText('Jojo Bizarre Adventure\nDemon Slayer\nJujutsu Kaisen');
    });

    it('Delete note', async () => {
        await driver.back();

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