const {test, expect} = require('@playwright/test');

test.describe('Home Page', () =>{

    test('Should load and display the correct title', async({page}) =>{
        await page.goto('https://cropq.vercel.app/');
        await expect(page).toHaveTitle(/CropQ/i);
    });

    test('should display the navigation bar', async ({ page }) => {
        await page.goto('https://cropq.vercel.app/');
        await expect(page.locator('nav')).toBeVisible();
    });

    test('should display the footer', async ({ page }) => {
        await page.goto('https://cropq.vercel.app/');
        await expect(page.locator('footer')).toBeVisible();
    });

})