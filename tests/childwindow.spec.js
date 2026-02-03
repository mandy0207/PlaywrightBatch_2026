const { test, expect } = require('@playwright/test');


test('My first playwright test', async ({browser }) => {
   const context= await browser.newContext();
   const page = await context.newPage();

   await page.goto("https://the-internet.herokuapp.com/windows");
  const link = page.locator(".example [target='_blank']");

   const [newPage]= await Promise.all(
    [
    context.waitForEvent('page'), 
    link.click(),

    ]);



//  await expect(newPage).toHaveTitle('New Window');

  const title=await newPage.title();
  expect(title).toEqual('New Window');

    
});