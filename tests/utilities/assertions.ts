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

async function assertPageText( elementsList: any[]) {
    const language = process.env.LANGUAGE!;
    for (let i=0; i<elementsList.length; i++)
    {
        let expectedText;

        if (language.toLowerCase().includes("en"))
        {    
            expectedText = elementsList[i].en;
        }
        else if (language.toLowerCase().includes("ar"))
        {
            expectedText = elementsList[i].en;
        }
        await expect(elementsList[i].locator).toHaveText(expectedText);
        }
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
async function validateElementText( locator:Locator, expectedText:any, language:string) {
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

async function validatePageText( elementsList: any[]) {
    const language = process.env.LANGUAGE!;
    for (let i=0; i<elementsList.length; i++)
    {
        let expectedText;

        if (language.toLowerCase().includes("en"))
        {    
            expectedText = elementsList[i].en;
        }
        else if (language.toLowerCase().includes("ar"))
        {
            expectedText = elementsList[i].en;
        }
        await expect(elementsList[i].locator).toHaveText(expectedText);
        }
}

async function validateElementExist( locator:Locator) {
    await expect.soft(locator).toBeVisible();
}

async function validateElementNotExist( locator:Locator) {
    await expect.soft(locator).not.toBeVisible();
}

async function validateElementEnabled( locator:Locator) {
    await expect.soft(locator).toBeEnabled();
}

async function validateElementNotEnabled( locator:Locator) {
    await expect.soft(locator).not.toBeEnabled();
}
export default { assertElementText, assertElementExist, assertElementNotExist, assertElementEnabled, assertElementNotEnabled, assertPageText,
    validateElementText, validateElementExist, validateElementNotExist, validateElementEnabled, validateElementNotEnabled, validatePageText };