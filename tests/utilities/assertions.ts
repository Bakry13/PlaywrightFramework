import { expect, type Locator } from '@playwright/test';

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

export default {assertElementText}