
const AddNoteScreen = require('./add-note.screen');

class EditNoteScreen {

    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }
    get moreButton() {
        return $('~More');
    }
    get deleteButton() {
        return $('//*[@text="Delete"]');
    }
    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    get trashCanButton() {
        return $('//*[@text="Trash Can"]');
    }

    async skipTutorial() {
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
        }

    async addAndSaveNote(noteHeading, noteBody) {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        await AddNoteScreen.noteHeading.setValue(noteHeading);
        await AddNoteScreen.noteBody.addValue(noteBody);

        // Save the changes
        await AddNoteScreen.saveNote();

        // Assertions
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText(noteBody);
    }
}

module.exports = new EditNoteScreen();