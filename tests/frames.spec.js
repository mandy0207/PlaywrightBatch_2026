const { test, expect } = require('@playwright/test');


test('Learn Frames', async ({page }) => {
await page.goto("https://demo.automationtesting.in/Frames.html");

//Using frame locator
// const framelocator=  page.frameLocator("[name='SingleFrame']");
// await framelocator.locator(".container input[type='text']").fill("Hello Vinod");

//but if name of frame is present 
const frame=page.frame('SingleFrame')
await frame.locator(".container input[type='text']").fill("Hello Vinod");

await new Promise(res=>setTimeout(res, 2000));
});


test('Frame example', async ({page }) => {
await page.goto("https://vinothqaacademy.com/iframe/");

//but if name of frame is present 
const frame=page.frame('registeruser')
await frame.locator("[id*='registration-1'] ul li input").first().fill("Hello Vinod");


await new Promise(res=>setTimeout(res, 2000));
});


