const { test, expect, request } = require('@playwright/test');
const {UniqueGenerator}=require('./Utils/UniqueGenerator.js');
const {APIUtil}=require('./Utils/APIUtil.js');


let token
let petName;

test.beforeAll(async()=>{
 const apiContext = await request.newContext();
 const apiUtil=new APIUtil(apiContext);
 token =await apiUtil.getAccessToken();
 petName=await apiUtil.addPet(token);
})

test.only('E2E Kinship Pet Deleteion test', async ({page }) => {
await page.goto("https://www.stg.kinship.com/uk");
await page.addInitScript(value=>{
  window.localStorage.setItem('access_token',value);  
}, token)
//addpet
await page.getByRole('button',{name: 'Reject All'}).click();
await page.locator("[opti-default-header-user-account-button='user-account-button']").click();
await new Promise(res=>setTimeout(res, 6000));
await page.locator("[opti-default-header-user-account-button='user-account-button']").click();
let xpath=`//section//*[contains(text(),'${petName}')]/../..`
const petLocator=page.locator(xpath);
await expect (petLocator).toBeVisible();
await petLocator.locator(xpath).locator("//*[text()='Remove']").click();
await page.getByRole('button',{name:'Yes, Remove This Pet'}).click();;
await expect(petLocator).toBeHidden();
});

















