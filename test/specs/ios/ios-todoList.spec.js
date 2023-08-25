const ListScreen = require('../../screenobjects/ios/list.screen');
const ItemScreen = require('../../screenobjects/ios/item.screen');

describe('Todo List', () => {
    it('Create a Todo List and add item', async () => {
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue('Things to do later');
        await ListScreen.createtBtn.click();

        await expect(await ListScreen.listNameField('Things to do later')).toBeExisting();

        await ListScreen.listNameField('Things to do later').click();
        await ItemScreen.createItemBtn.click();
        await ItemScreen.titleInput.addValue('Thing A');
        await ItemScreen.dueDateInput.click();
        await ItemScreen.datePicker.click();

        //Select Date
        await ItemScreen.getByAccessibility('Monday, August 28').click()
        await ItemScreen.secondWindow.click()
        await ItemScreen.createBtn.click();

        //assertions
        await expect(await ItemScreen.getByAccessibility('Thing A')).toBeExisting();
        await expect(await ItemScreen.getByAccessibility('Due August 28, 2023')).toBeExisting();

        await driver.pause(2000);
    });
});