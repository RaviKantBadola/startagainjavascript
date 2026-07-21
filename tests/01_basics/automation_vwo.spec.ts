import {expect, test} from "@playwright/test"

test("locator are lazy,strict and auto wait",async({page})=>{
await page.goto("https://app.vwo.com/#login");

let userName = page.locator("#login-username");
let passWord = page.locator("#login-password");
let loginButton = page.locator("#js-login-btn");

await userName.fill("admin");
await passWord.fill("pass123");
await loginButton.click();

console.log("All action complete")
let error_massage = page.locator("#js-notification-box-msg")
await expect(error_massage).toContainText("Your email, password, IP address or location did not match")
})