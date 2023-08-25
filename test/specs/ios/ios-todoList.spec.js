//const listScreen = require('../../screenobjects/ios/list.screen');
//const itemScreen = require('../../screenobjects/ios/item.screen');

import listScreen from '../../screenobjects/ios/list.screen';
import itemScreen from '../../screenobjects/ios/item.screen';

describe('Todo List', () => {

    before(async () => {
        //Create TODO List
        await listScreen.createListBtn.click();
        await listScreen.listNameInput.addValue('Things to do later');
        await listScreen.createtBtn.click();
        await expect(await listScreen.listNameField('Things to do later')).toBeExisting();
        await listScreen.listNameField('Things to do later').click();
        
    });

    beforeEach(async () => {
        console.log('BEFORE EACH HOOK');
    });

    it('Create a Todo List and add item', async () => {
        //Add Item to TODO list
        await itemScreen.createItemBtn.click();
        await itemScreen.titleInput.addValue('Thing A');
        await itemScreen.dueDateInput.click();
        await itemScreen.datePicker.click();
        await itemScreen.getByAccessibility('Monday, August 28').click()
        await itemScreen.secondWindow.click()
        await itemScreen.createBtn.click();

        //assertions
        await expect(await itemScreen.getByAccessibility('Thing A')).toBeExisting();
        await expect(await itemScreen.getByAccessibility('Due August 28, 2023')).toBeExisting();

        await driver.pause(2000);
    });

    it('test 2', () => {
        
    });

    it('test 3', () => {
        
    });

    after(async () => {
        console.log('AFTER HOOK');
    });

    afterEach(async () => {
        console.log('AFTER EACH HOOK');        
    });
});