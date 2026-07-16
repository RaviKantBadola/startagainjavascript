import { test }from "@playwright/test"

test("set referer for entire context",async({browser})=>{
let context = await browser.newContext({
    extraHTTPHeaders:{
    "Reffer":"https://thetestingacedmy.com"
}
})

let page = await context.newPage();
await page.goto("https://app.vwo.com/#login");
console.log("page1-partner refer included")

})