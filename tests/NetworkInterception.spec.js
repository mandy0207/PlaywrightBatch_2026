const { test, expect, request } = require('@playwright/test');
const {UniqueGenerator}=require('./Utils/UniqueGenerator.js');
const {APIUtil}=require('./Utils/APIUtil.js');
const { json } = require('node:stream/consumers');
const fakeResponse=[];
let token;
let apiUtil
const urlToIntercept = "https://kinship-api-staging.kinship.engineering/my-pet-profile";

test.beforeAll(async()=>{
 const apiContext = await request.newContext();
 apiUtil=new APIUtil(apiContext);
 token =await apiUtil.getAccessToken();
 

})
test.only('Network Interception', async ({page }) => {
await page.goto("https://www.stg.kinship.com/uk");

// intercept response Api-Response->(playwright)
//intercepting network call with desired response in order to deliver front end UI testing
await apiUtil.interceptCall( urlToIntercept,fakeResponse, page);

await page.addInitScript(value=>{
  window.localStorage.setItem('access_token',value);  
}, token)

await page.getByRole('button',{name: 'Reject All'}).click();
await page.locator("[opti-default-header-user-account-button='user-account-button']").click();
await new Promise(res=>setTimeout(res, 6000));
await page.locator("[opti-default-header-user-account-button='user-account-button']").click();


});

