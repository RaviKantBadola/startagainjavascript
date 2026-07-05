import { Browser,chromium } from "@playwright/test";

async function multiTabTest() {
    let browser = await chromium.launch({headless:false});
    let context = await browser.newContext();

    //Tab1
    let page1 = await context.newPage();
    await page1.goto("htpps://app.vwo.com/dashbaord")
    console.log("Tab 1 : Dashboard")


    // tab 2 
    let page2 = await context.newPage();
    await page2.goto("htpps://app.vwo.com/login")
    console.log("Tab 2 : Dashboard")


}

multiTabTest()