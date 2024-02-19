import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/fe/login-page';
import HomePage from '../../pages/fe/home-page';
import envSetup from '../../utilities/setup/env-setup';

//==========exclude test from global setup cookies==========
// test.use({storageState:{cookies:[],origins:[]}});
//=========================Variables========================
let loginPage:LoginPage;
let homePage:HomePage;
let data;
let csvData;
let excelData;
const language = process.env.LANGUAGE!;
//=========================Hooks============================
//Before all tests hooks
test.beforeAll('Initiate test data', async ({ playwright }) => {
    data = envSetup.getTestData();
    csvData = envSetup.getCSVTestData();
    excelData = envSetup.getExcelTestData();
    console.log('Username from json: ' + data.username);
    console.log('Username from csv: ' + csvData[0].username);
    console.log('Username from excel: ' + excelData[0].username);
    console.log('Lets Start our test');
});

//Before every test hooks
test.beforeEach('Open demo website', async ({ page }, {config:FullConfig}) => {
    console.log(envSetup.getBaseURL(FullConfig));
    await page.goto(envSetup.getEnvURL());
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
});

//Before every test hooks
test.beforeEach('Check running progress', async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
});

//After all tests hooks
test.afterAll('Close test', async ({ playwright }) => {
    console.log('Finish our test');
});

//After every test hooks
test.beforeEach('Test case finishing progress', async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title}`);
});
//====================================Tests==================================
test.describe('Login page test',() =>{
        test('Check login button text test case', async ({ page }) => {
            await loginPage.assertLoginButtonText(language);
        });

        test('Check submit login test case', async ({ page }) => {
            // await loginPage.login(data.username, data.password);
            await homePage.assertProfileIconExist();
        });

        test('Check that website logo exists after login test case', async ({ page }) => {
            // await loginPage.login(data.username, data.password);
            await homePage.assertWebsiteLogoExist();
        });
    }
);