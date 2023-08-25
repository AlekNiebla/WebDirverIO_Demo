class ItemScreen {
    get createItemBtn() {
        return $('//*[@name="Create item"]');
    }

    get titleInput() {
        return $('//*[@value="Title"]');
    }

    get dueDateInput() {
        return $('//*[@value="Due"]')
    }

    get datePicker() {
        return $('~Date Picker')
    }

    get secondWindow(){
        return $('//XCUIElementTypeWindow[@index=2]')
    }

    get createBtn(){
        return $('~Create')
    }

    getByAccessibility(name){
        return $(`~${name}`)
    }
}

//module.exports = new ItemScreen()
export default new ItemScreen();