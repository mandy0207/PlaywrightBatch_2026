import { test, expect } from '@playwright/test';

//npx playwright codegen url

test('test', async ({ page }) => {
  await page.goto('https://www.stg.kinship.com/');
  await page.getByRole('button', { name: 'Reject All' }).click();
  await page.getByRole('button', { name: 'Maybe Later' }).click();
  await page.getByRole('button', { name: 'Sign Up / Login' }).click();
  await page.getByRole('textbox', { name: 'Email Email' }).click();
  await page.getByRole('textbox', { name: 'Email Email' }).fill('hivinhhh@yopmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  const heading=page.getByRole('heading',{name:'Let’s create your account'});
  await expect(heading).toHaveText(`Let’s create your account`);
  
  await page.getByRole('textbox', { name: 'Create your password' }).fill('qwerty123');
  await page.getByRole('textbox', { name: 'First name' }).fill('vinod');
  await page.getByRole('textbox', { name: 'Last name' }).fill('shyamdas');
  await page.getByText('Dog').click();
  await page.getByRole('button', { name: 'Create My Account' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to Kinship!' })).toBeVisible();
  await page.getByRole('textbox', { name: 'What’s your dog’s name?' }).click();
  await page.getByRole('textbox', { name: 'What’s your dog’s name?' }).fill('ribbu');
  await page.locator('#react-select-2-placeholder').click();
  await page.getByRole('option', { name: '2 years', exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select$/ }).nth(1).click();
  await page.getByRole('option', { name: '3 months' }).click();
  await page.locator('div:nth-child(5) > .f5_J7 > div > .css-b62m3t-container > .css-1vi9kl3-control > .css-8akrpk').click();
  await page.getByRole('option', { name: 'Affenpinscher' }).click();
  await page.locator('div').filter({ hasText: /^Select month$/ }).nth(1).click();
  await page.getByRole('option', { name: 'Apr' }).click();
  await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-1vi9kl3-control > .css-8akrpk > .css-1jwx5m1').click();
  await page.getByRole('option', { name: '2025' }).click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Done' }).click();
  await expect(page.getByRole('button', { name: 'Upload Your Pet’s Best Picture' })).toBeVisible();
});