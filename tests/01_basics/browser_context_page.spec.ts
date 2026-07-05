import { chromium,Browser,BrowserContext,Page } from "@playwright/test";

async function run() {
 //level 1 launch browser  - heaviset browser opration do it once
    let Browser = await chromium.launch({headless:false});
    console.log("browser launched", Browser)

    //leval 2 create context - fresh session , isolated cookies

    let context:BrowserContext= await Browser.newContext();
    console.log("context created", context)

    //level 3 ; open page inside of context
    let page:Page = await context.newPage();
    console.log("Page opened",page)

    await page.goto("https://example.com")
    console.log("Title:",await page.title());

    await page.close();
    await context.close();
    await Browser.close();


    
}
run()