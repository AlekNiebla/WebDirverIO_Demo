const EditNoteScreen = require('../../screenobjects/android/edit-note.screen');

describe('Delete Note', () => {

    before(async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote('TV Shows','Breaking Bad\nPeaky BLinder\nJujutsu Kaisen')
        await driver.back();
    });

    it.only('Delete a note & check the note in trash can', async () => {
        const Title = await EditNoteScreen.firstNote.getText();

        await EditNoteScreen.firstNote.click();

        await EditNoteScreen.moreButton.click();

        await EditNoteScreen.deleteButton.click();

        await driver.acceptAlert();

        await EditNoteScreen.navIcon.click();

        await EditNoteScreen.trashCanButton.click();

        // Assertion
        await expect(EditNoteScreen.firstNote).toHaveText(Title);
        await driver.pause(3000);
    });
});