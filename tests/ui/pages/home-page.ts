import { expect, type Locator, type Page} from '@playwright/test';
import assertions from '../../utilities/assertions';

export class HomePage{
    //===========================Locators=====================
    readonly page:Page;
    readonly profileIcon:Locator;
    readonly websiteLogo:Locator;
    //===========================Constructor=====================
    constructor (page:Page)
    {
        this.page = page;
        this.profileIcon = page.locator("//img[@class='oxd-userdropdown-img']");
        this.websiteLogo = page.locator("//img[@alt='client brand banner']");
    }
    //===========================Methods========================
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
}

export default HomePage;