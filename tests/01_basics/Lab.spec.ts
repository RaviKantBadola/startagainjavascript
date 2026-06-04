 import { test, expect } from '@playwright/test';

test('verify the title of app.vwo.com', async ({ page }) => {

    await page.goto('https://app.vwo.com');

    const title = await page.title();
    console.log(title);

});

test.slow()
test.skip()
test.only()
test.fail()
test('conditional',async)