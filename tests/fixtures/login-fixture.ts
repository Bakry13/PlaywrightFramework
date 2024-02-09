import { test as base } from '@playwright/test';
import LoginPage from '../pages/fe/login-page';
import HomePage from '../pages/fe/home-page';
import envSetup from '../utilities/setup/env-setup';

// Declare the types of your fixtures.
type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
};

// Extend base test by providing "loginPage" and "homePage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
    // Set up the fixture.
    const loginPage = new LoginPage(page);
    await page.goto(envSetup.getEnvURL());
    // Use the fixture value in the test.
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});
export { expect } from '@playwright/test';