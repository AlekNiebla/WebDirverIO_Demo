class ListScreen {
    get createListBtn() {
        return $('//*[@name="Create list"]');
    }

    get listNameInput () {
        return $('//*[@value="List Name"]');
    }

    get createtBtn () {
        return $('~Create')
    }

    listNameField(name){
        return $(`~${name}`)
    }
}

//module.exports = new ListScreen();
export default new ListScreen();