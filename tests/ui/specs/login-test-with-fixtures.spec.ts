import { test } from '../fixtures/login-fixture';
import envSetup from '../../utilities/setup/env-setup';

//==========exclude test from global setup cookies==========
test.use({storageState:{cookies:[],origins:[]}});
//=========================Variables========================
let data;
const language = process.env.LANGUAGE!;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ playwright }) => {
    data = envSetup.getTestData();
    console.log('Username from json: ' + data.username);
});
//====================================Tests==================================
    test('Check login button text test case', async ({ loginPage, page }) => {
        await loginPage.assertLoginButtonText(language);
    });

    test('Check submit login test case', async ({ loginPage, homePage, page }) => {
        await loginPage.login(data.username, data.password);
        await homePage.assertProfileIconExist();
    });

    test('Check that website logo exists after login test case', async ({ loginPage, homePage, page }) => {
        await loginPage.login(data.username, data.password);
        await homePage.assertWebsiteLogoExist();
    });