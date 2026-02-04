const { test, expect } = require('@playwright/test');

 test('learn auto wait concepts', async ({ page }) => {
 await page.goto("https://www.noon.com/uae-en/");
 const homeKitchen = page.locator("[data-qa='btn_main_menu_Home & Kitchen']");

 await homeKitchen.hover();
 

await homeKitchen.locator("[class*='MainCategories-module'] ul ul li").first().click();
 
//auto wait is not applied for allTextContent that's why wait for method is used here.
//refer playwright auto wait documentation
await page.locator("[data-qa='plp-product-box-name']").first().waitFor();
const listofNames= await page.locator("[data-qa='plp-product-box-name']").allTextContents();


console.log(listofNames);


 });