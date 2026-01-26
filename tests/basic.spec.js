
const { test } = require('@playwright/test');


test('My first playwright test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    //open page
    await page.goto("https://demowebshop.tricentis.com/");
    console.log(page.title());

});


test.only('My second playwright test', async ({ browser, page }) => {
    //open page
    await page.goto("https://demowebshop.tricentis.com/");
    await page.title();

});










