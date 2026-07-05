 import { test, expect } from '@playwright/test';

test('verify the title of app.vwo.com', async ({ page }) => {

    await page.goto('https://app.vwo.com');
    expect(page).toHaveTitle('Login - Wingify');
    const img_vwo = page.locator("img");
    await expect(img_vwo).toBeVisible();

});

// test.slow()
// test.skip()
// test.only()
// test.fail()
// test('conditional',async)