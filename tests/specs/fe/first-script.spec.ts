import { test, expect } from '@playwright/test';

// test.use({viewport:{width:1500,height:1000}});

test.only('@smoke - first test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByPlaceholder('l'), 'Login button is not visible').toBeVisible();
    await expect(page).toHaveTitle("OrangeHRM");
});

test.skip("my first test", async function({page}){
    console.log(process.env.ENV!);
    expect("Mohamed").toContain("Bakry");
});