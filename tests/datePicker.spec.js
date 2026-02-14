const { test, expect } = require('@playwright/test');


test('My first playwright test', async ({browser , page}) => {
   await page.goto("https://selenium.qabible.in/date-picker.php");
   let expecetedDate= "March 2027"
   
   await page.locator("[data-provide='datepicker']").click();

   while(!(await page.locator('.datepicker-switch').first().textContent()=== expecetedDate)){
       await page.locator('.next').first().click();

   }
   
   await page.getByRole('cell', {name : /^8$/}).first().click();

  




    
});