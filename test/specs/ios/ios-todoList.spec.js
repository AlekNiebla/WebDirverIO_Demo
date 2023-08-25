//const listScreen = require('../../screenobjects/ios/list.screen');
//const itemScreen = require('../../screenobjects/ios/item.screen');

import listScreen from '../../screenobjects/ios/list.screen';
import itemScreen from '../../screenobjects/ios/item.screen';

describe('Todo List', () => {
    it('Create a Todo List and add item', async () => {

        await driver.pause(2000);
        await listScreen.createListBtn.click();
        await listScreen.listNameInput.addValue('Things to do later');
        await listScreen.createtBtn.click();

        await expect(await listScreen.listNameField('Things to do later')).toBeExisting();

        await listScreen.listNameField('Things to do later').click();
        await itemScreen.createItemBtn.click();
        await itemScreen.titleInput.addValue('Thing A');
        await itemScreen.dueDateInput.click();
        await itemScreen.datePicker.click();

        //Select Date
        await itemScreen.getByAccessibility('Monday, August 28').click()
        await itemScreen.secondWindow.click()
        await itemScreen.createBtn.click();

        //assertions
        await expect(await itemScreen.getByAccessibility('Thing A')).toBeExisting();
        await expect(await itemScreen.getByAccessibility('Due August 28, 2023')).toBeExisting();

        await driver.pause(2000);
    });
});