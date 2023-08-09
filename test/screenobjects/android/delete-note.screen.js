class DeleteNoteScreen {
    get moreButton() {
        return $('~More');
    }
    get deleteButton() {
        return $('//*[@text="Delete"]');
    }
    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    get trashButton() {
        return $('//*[@text="Trash Can"]');
    }
    get noteTitleInTrash() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
}

module.exports = new DeleteNoteScreen();