const { test, expect } = require('@playwright/test');


test('Input Text', async ({page }) => {

await page.goto("https://demowebshop.tricentis.com/");
await page.locator('.ico-login').click();
const email= page.locator('#Email');
await email.fill('vinod@gmail.com');

// inputValue is used to grab text of input fields and text area
//textcontent is used only when text is present inside web element

console.log("Text inside email box ", await email.inputValue());

});