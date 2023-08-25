
import addNoteScreen from './add-note.screen';


class EditNoteScreen {

    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
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
        await addNoteScreen.skipBtn.click();

        await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
        }

    async addAndSaveNote(noteHeading, noteBody) {
        await addNoteScreen.addNoteTxt.click();
        await addNoteScreen.textOption.click();
        await expect(addNoteScreen.textEditing).toBeDisplayed();

        await addNoteScreen.noteHeading.setValue(noteHeading);
        await addNoteScreen.noteBody.addValue(noteBody);

        // Save the changes
        await addNoteScreen.saveNote();

        // Assertions
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText(noteBody);
    }
}

export default new EditNoteScreen();