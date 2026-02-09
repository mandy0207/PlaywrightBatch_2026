const { test, expect } = require('@playwright/test');


test('Input Text', async ({page }) => {
await page.goto("https://selenium.qabible.in/simple-form-demo.php");
await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
//Goes back to previous page in history
await page.goBack();
//goes to next page 
await page.goForward();
await page.locator(".example button").click();
const deleteBtn= page.locator('#elements .added-manually');
await expect(deleteBtn).toBeVisible();
expect(await deleteBtn.isVisible()).toBeTruthy();

await deleteBtn.click();
await expect(deleteBtn).toBeHidden();
expect(await deleteBtn.isHidden()).toBeTruthy();


});

