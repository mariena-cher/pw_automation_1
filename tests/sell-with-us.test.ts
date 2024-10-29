import { test, expect } from '@playwright/test';

test("user can submit 'Become A MERN Store Seller!' form", async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').fill('Maryna');
  await page.getByPlaceholder('Your Email Address').fill(Date.now()+'@test.com');
  await page.getByPlaceholder('Your Phone Number').fill('0957273672');
  await page.getByPlaceholder('Your Business Brand').fill('YELI bakery');
  await page.getByPlaceholder('Please Describe Your Business').fill('pastry and desserts');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByPlaceholder('Your Full Name')).toBeEmpty();
});