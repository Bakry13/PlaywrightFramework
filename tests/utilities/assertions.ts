import { expect, type Locator } from '@playwright/test';

//========================Hard assertion=======================
async function assertElementText( locator:Locator, expectedText:any, language:string) {
    // const language = process.env.LANGUAGE!; //we can use this command directly if we do not use BDD wihout passing the language
    let textValue;

    if (language.toLowerCase().includes("en"))
    {    
        textValue = expectedText.en;
    }
    else if (language.toLowerCase().includes("ar"))
    {
        textValue = expectedText.ar;
    }
    await expect(locator).toHaveText(textValue);
}

async function assertElementExist( locator:Locator) {
    await expect(locator).toBeVisible();
}

async function assertElementNotExist( locator:Locator) {
    await expect(locator).not.toBeVisible();
}

async function assertElementEnabled( locator:Locator) {
    await expect(locator).toBeEnabled();
}

async function assertElementNotEnabled( locator:Locator) {
    await expect(locator).not.toBeEnabled();
}
//===================Soft assertions=========================
async function verifyElementText( locator:Locator, expectedText:any, language:string) {
    // const language = process.env.LANGUAGE!; //we can use this command directly if we do not use BDD wihout passing the language
    let textValue;

    if (language.toLowerCase().includes("en"))
    {    
        textValue = expectedText.en;
    }
    else if (language.toLowerCase().includes("ar"))
    {
        textValue = expectedText.ar;
    }
    await expect.soft(locator).toHaveText(textValue);
}

async function verifyElementExist( locator:Locator) {
    await expect.soft(locator).toBeVisible();
}

async function verifyElementNotExist( locator:Locator) {
    await expect.soft(locator).not.toBeVisible();
}

async function verifyElementEnabled( locator:Locator) {
    await expect.soft(locator).toBeEnabled();
}

async function verifyElementNotEnabled( locator:Locator) {
    await expect.soft(locator).not.toBeEnabled();
}
export default { assertElementText, assertElementExist, assertElementNotExist, assertElementEnabled, assertElementNotEnabled, 
    verifyElementText, verifyElementExist, verifyElementNotExist, verifyElementEnabled, verifyElementNotEnabled };
