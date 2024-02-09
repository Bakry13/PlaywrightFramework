import {Given, When, Then} from '@cucumber/cucumber';
import { Page, chromium, Browser, expect } from '@playwright/test';

let page:Page;
let browser:Browser;

Given('I visit OrangeHRM portal', async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/');
});

Then('I should see login button has the correct text', async function () {
    await expect(page.getByRole('button', { name: 'Login' })).toHaveText('Login');
    browser.close();
});  

When('I login with {string} and {string}', async function (username, password) {
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
});

Then('I should see home page', async function () {
    await expect(page.locator("//img[@alt='client brand banner']")).toBeVisible();
    await browser.close();
});