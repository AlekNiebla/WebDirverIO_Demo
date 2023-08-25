import addNoteScreen from '../../screenobjects/android/add-note.screen';

describe('Delete Note', () => {
    it('skip tutorial', async () => {        
        await addNoteScreen.skipBtn.click();
    });

    it('add note, verify elements and save it', async () => {
        await addNoteScreen.addNoteTxt.click();
        await addNoteScreen.textOption.click();
        await expect(addNoteScreen.editNoteBtn).toBeDisplayed();

        await addNoteScreen.noteTitle.setValue('Fav Anime List');
        await addNoteScreen.noteContent.addValue('Jojo Bizarre Adventure\nDemon Slayer\nJujutsu Kaisen');

        // Save the changes

        // Assertions
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText('Jojo Bizarre Adventure\nDemon Slayer\nJujutsu Kaisen');
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