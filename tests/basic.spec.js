
const { test, expect } = require('@playwright/test');


// test('My first playwright test', async ({ browser }) => {

//     const context = await browser.newContext();
//     const page = await context.newPage();
//     //open page
//     await page.goto("https://demowebshop.tricentis.com/");
//     console.log(page.title());

// });


test.only('My second playwright test', async ({ browser, page }) => {
    //open page
    await page.goto("https://demowebshop.tricentis.com/");
    //asserting title of page
    await expect(page).toHaveTitle(await page.title());

    //xpath, css --recommeneded css
    const loginLocator= page.locator('.ico-login')

    await expect(loginLocator).toBeVisible();
    await loginLocator.click();
    // to set text in input field
    await page.locator('#Email').fill('obsqura24@gmail.com');
    await page.locator('#Password').fill('mypassword');
    await page.locator("[value='Log in']").click();

    await page.locator('.listbox li').nth(3).click();

   // all gives list of webelements
    const listofClothes = await page.locator('.product-title a').all();
    // to grab lsit of text of all elements
   const listofText= await page.locator('.product-title a').allTextContents();
   console.log(listofText);
    console.log(listofClothes.length);
    
    // for (const element of listofClothes) {
    //     if (await element.textContent() === 'Blue Jeans') {
    //         await element.click();
    //         break;
    //     }
    // }
    

    //wait for all api calls in network tab to complete
    await page.waitForLoadState('networkidle');
    //another way without use of forloop
    await page.locator('.product-title a').filter({hasText:'Blue Jeans'}).click();
    //we can use predicate in locator function as well
    //await page.locator('.product-title a', { hasText: 'Blue Jeans' }).click();
    const vinod=  page.locator('[itemprop="description"] p')
    console.log(vinod.textContent());
    await expect(vinod).toHaveText('Stylish Jeans');
    
  // await page.locator('.product-title a').all().filter({hasText:'Blue Jeans'}).click();
   //await page.pause();












});










