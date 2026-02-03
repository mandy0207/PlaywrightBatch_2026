const { test, expect } = require('@playwright/test');


test.only('Check Boxes', async ({page }) => {

await page.goto("https://formstone.dev/components/checkbox/");
const checkBox=page.locator(".form_fieldset [for*='checkbox']").nth(1);
await checkBox.check();
//First way of assertion
await expect(checkBox).toBeChecked();
//second way of assertion where we are asserting boolean value
expect(await checkBox.isChecked()).toBeTruthy();

await checkBox.uncheck();
expect(await checkBox.isChecked()).toBeFalsy();




});