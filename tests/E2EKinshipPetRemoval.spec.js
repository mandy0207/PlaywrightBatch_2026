const { test, expect, request } = require('@playwright/test');
const {UniqueGenerator}=require('./Utils/UniqueGenerator.js');
const {APIUtil}=require('./Utils/APIUtil.js');

let token

test.beforeAll(async()=>{
 const apiContext = await request.newContext();
 const apiUtil=new APIUtil(apiContext);
 token =await apiUtil.getAccessToken();
 
})

test.only('E2E Kinship Pet Deleteion test', async ({page }) => {
await page.goto("https://www.stg.kinship.com/uk");
await page.addInitScript(value=>{
  window.localStorage.setItem('access_token',value);  
}, token)
//addpet
await page.getByRole('button',{name: 'Reject All'}).click();
await page.locator("[opti-default-header-user-account-button='user-account-button']").click();

});















