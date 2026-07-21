import test, { expect } from "@playwright/test";

test("automating the katlaon website",async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator("#btn-make-appointment").click()
    let userName = page.locator("#txt-username");
    let passWord = page.locator("#txt-password");
    await userName.fill("John Doe");
    await passWord.fill("ThisIsNotAPassword");
    await page.locator("#btn-login").click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    
})