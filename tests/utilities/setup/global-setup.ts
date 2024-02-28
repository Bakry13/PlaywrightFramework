import { chromium, FullConfig } from "@playwright/test";
import LoginPage from "../../ui/pages/login-page";
import uiPages from "../URLs/uiPages";

async function globalSetup(config: FullConfig) {
    //====================Initialize env URL========================
    const { baseURL, storageState } = config.projects[0].use;
    //==================Initialize default login=====================
    const username = process.env.USER!;
    const password = process.env.PASSWORD!;

    const browser = await chromium.launch({headless: true, timeout: 10000});
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await page.goto(baseURL+uiPages.login);
    await loginPage.login(username, password);
    await loginPage.checkLoggedIn();
    await page.context().storageState({ path: storageState as string});
    await browser.close();
}

export default globalSetup;