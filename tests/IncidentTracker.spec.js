const {test, expect} = require('@playwright/test')

// test.use({viewport:{width:1500,height:1000}});

test("open Incident Tracker", async function({page}){
    await page.goto("https://waf.technical-service-portal-preprod-vodafone.de/incident-tracker/TA0000005550118?token=SQgSSnfnkmPVPEu1PYNWfFnLCalXD4pZLAeiNLzQPLk%3D");
    await expect(page).toHaveTitle("Vodafone Tracker");
})

test.only("status request", async function({page}){
    await page.goto("https://business-service-portal.vfd2-testnet.de/incident-tracker/TA0000005550118?token=SQgSSnfnkmPVPEu1PYNWfFnLCalXD4pZLAeiNLzQPLk%3D");
    await page.locator("//div[@id='dip-consent']//button[1]").click();
    await page.locator("(//div[@class='select-header form-control'])[1]").click();
    await page.locator("#1").click();
    await page.locator("//textarea[@id='StatusRequestComment_vlu']").type("test comment");
    await page.locator("//button[@id='SendRequest_btn']").click();
    // page.waitForTimeout(10000);
    const successMessage = await page.locator("//brx-notification-title[@id='SuccessResultMsgTitle']").textContent();
    console.log(successMessage);
    expect(successMessage).toBe("Thank you for your message!");
    page.close();
})



test.skip("my first test", async function({page}){
    expect("Mohamed").toContain("Bakry");
})