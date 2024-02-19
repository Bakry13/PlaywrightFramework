import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/fe/login-page';
import envSetup from '../../utilities/setup/env-setup';
import HomePage from '../../pages/fe/home-page';

// To update the screenshot you can use this command "npx playwright test --update-snapshots"
//==========exclude test from global setup cookies==========
test.use({storageState:{cookies:[],origins:[]}});
//=========================Variables========================
let data;
let loginPage:LoginPage;
let homePage:HomePage;
//=========================Hooks============================
test.beforeAll('Initiate test data', async ({ playwright }) => {
    data = envSetup.getTestData();
});

test.beforeEach('Go to the landing page', async ({ page }, testInfo) => {
    await page.goto(envSetup.getEnvURL());
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
});
//====================================Tests==================================
test.describe('Visual test',() =>{
    test('Login page', async ({ page }) => {
        // await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
        await expect(page).toHaveScreenshot();
        });
    test('Home page', async ({ page }) => {
        await loginPage.login(data.username, data.password);
        await expect(page).toHaveScreenshot();
        });
    }
);