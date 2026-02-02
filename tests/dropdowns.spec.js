const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');

 test('handle static dropdown', async ({ page }) => {
 await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");

 const dropdown =page.locator("p select");
 await dropdown.selectOption('CHN');

 });


test('Dynamic Dropdown', async ({ page }) => {
 await page.goto("https://vinothqaacademy.com/drop-down/");
 //for scrolling
 await page.locator(".selection [class*='multiple']").scrollIntoViewIfNeeded();
 await page.locator(".selection [class*='multiple']").click();
 //for realtime keyboard typing
 await page.keyboard.type("java", { delay: 100 });
 /**
   Use below way of javascript writing text in textbox which is not an input field
  * await page.evaluate(()=>{
const el = document.querySelector(".selection [class*='multiple']");
el.focus();
document.execCommand("insertText", false, "java");
});
  * 
  */
 await page.locator("li[role='option']").filter({hasText:'Javascript'}).click();
//below code was for selection based on attribute 
 //const listofdestinations=await page.locator("li[role='option']").all();
// for(const destination of  listofdestinations){
//     const text=await destination.getAttribute('id');
//     console.log(text);
//     if(text.includes('JAVASCRIPT')){
//         await destination.click();
//         break;
//     }
// }


 });

 