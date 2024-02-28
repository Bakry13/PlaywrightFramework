import { expect, type Locator, type Page} from '@playwright/test';
import assertions from '../../utilities/assertions';

export class LoginPage{
    //===========================Locators=====================
    readonly page:Page;
    readonly username_tb:Locator;
    readonly password_tb:Locator;
    readonly login_btn:Locator;
    readonly profileIcon:Locator;
    readonly websiteLogo:Locator;
    //===========================Variables and Texts================
    readonly URL = "https://opensource-demo.orangehrmlive.com/";
    readonly loginButtonText = {en:"Login",
    ar:"Login1"};
    readonly loginButtonSelector = "button[type='submit']";
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.username_tb = page.getByPlaceholder('Username');
        this.password_tb = page.getByPlaceholder('Password');
        this.login_btn = page.getByRole('button', { name: 'Login' });
        this.profileIcon = page.locator("//img[@class='oxd-userdropdown-img']");
        this.websiteLogo = page.locator("//img[@alt='client brand banner']");
    }
    //===========================Methods========================
    async typeUsername(username: string) {
        await this.username_tb.fill(username);
    }

    async typePassword(password: string) {
        await this.password_tb.fill(password);
    }

    async clickLoginButton() {
        await this.login_btn.click();
    }

    async login(username: string, password: string){
        try {
            await this.typeUsername(username);
            await this.typePassword(password);
            await this.clickLoginButton();
        } catch (error: any) {} 
    }

    async checkLoggedIn(){
        await this.assertProfileIconExist();
    }
    //===========================Assertions========================
    async assertProfileIconExist() {
        await expect(this.profileIcon).toBeVisible();
    }

    async assertWebsiteLogoExist() {
        await expect(this.websiteLogo).toBeVisible();
    }

    async assertLoginButtonText(language:string) {
        // await this.page.waitForTimeout(2000); //static wait for 2s
        await this.page.waitForSelector(this.loginButtonSelector, { state: 'visible' }); //Wait for a specific element to be visible
        await assertions.assertElementText(this.login_btn,this.loginButtonText, language);
    }
}

export default LoginPage;