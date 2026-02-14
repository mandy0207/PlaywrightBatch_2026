const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { execPath } = require('node:process');


test.only('E2E Test', async ({page }) => {
await page.goto("https://www.stg.kinship.com/uk");
await page.getByRole('button',{name: 'Reject All'}).click();
await page.getByRole('button',{'name': 'Maybe Later'}).click();
await page.getByRole('button', { name: 'Sign Up / Login' }).click();
await page.locator('#email').first().fill(getFakeData('email'));
await page.getByRole('button',{'name': 'Next'}).click();
const heading=page.getByRole('heading',{name:'Let’s create your account'});
await expect(heading).toHaveText(`Let’s create your account`);
await createUser(page);
await addPet(page);

});

async function createUser(page){
    await page.getByRole('textbox', { name: 'Create your password' }).fill("qwerty123");
    await page.getByRole('textbox', {name:'First name'}).fill(getFakeData('firstname'));
    await  page.getByRole('textbox', {name:'Surname'}).fill(getFakeData('lastname'));
    await page.locator('#checkbox__hasPetDogLabel').click();
    await page.locator('#checkbox__newsletterLabel').click();
    await page.locator('#checkbox__agreementLabel').click();
    await page.getByRole('button', { name: 'Create My Account' }).click();
  
}

async function addPet(page) {
  await page.locator("[id='petName']").waitFor();
  await page.locator("[id='petName']").fill(getFakeData('firstname'));
  handleDropdown(page, "//*[@name='petAge.year']/parent::*//*[@aria-label='Select']/parent::*/..", "2 years");
  handleDropdown(page, "//*[@name='petAge.month']/parent::*//*[@aria-label='Select']/parent::*/..", "2 months");
  handleDropdown(page, "//*[contains(@aria-label, 'breed')]/..", "Afghan Hound");
 
  await page.pause();
}

async function handleDropdown(page, locator, value) {
    await page.locator(locator).click();
    await page.getByRole('option', { name: value, exact: true }).click();
}



function getFakeData(type) {
  switch (type) {
    case 'firstname':
      return faker.person.firstName();

    case 'lastname':
      return faker.person.lastName();

    case 'email':
      return faker.internet.email();

    case 'password':
      return faker.internet.password();

    case 'phone':
      return faker.phone.number();

    default:
      throw new Error('Invalid type provided');
  }
}
