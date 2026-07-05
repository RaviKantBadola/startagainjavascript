import { chromium } from "@playwright/test";

async function multiUserTest() {
  try {
    const browser = await chromium.launch({ headless: false });

    // Admin
    const adminContext = await browser.newContext();
    const adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: On login page");

    // Viewer
    const viewerContext = await browser.newContext();
    const viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer: On login page");

    await browser.close();
  } catch (error) {
    console.error(error);
  }
}

multiUserTest();