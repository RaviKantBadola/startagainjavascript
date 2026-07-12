import {test,expect} from '@playwright/test'

test("goto with diffrent waituntil options",async({page})=>{
await page.goto("https://app.com/page1",{waitUntil:'commit'});
console.log("commit : server responed")

//wait for html to be parsed
await page.goto("https://app.com/page2",{waitUntil:"domcontentloaded"})
console.log("domcontentloaded:html parsed")

//default - wait for everyting (images,css,scripts)
await page.goto("https://app.com/page3",{waitUntil:"load"})

//slowest -wait for all network activity to stop
await page.goto("https://app.com/page3",{waitUntil:'networkidle'})
console.log("networkidle:no requests for 500ms")
});



test("navigate with custcom refers",async({page})=>{
//tell user some form the google 
await page.goto("https://app.com/landing",{
    referer:"https//google.com/search?q=testing+academy"
})
console.log("page loaded with google as refers")
console.log("URL:",page.url())
})