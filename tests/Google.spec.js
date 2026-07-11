import { test, expect } from '@playwright/test';

test('Search box visible', async ({ page }) => {

    await page.goto('https://www.google.com');

    const searchBox = page.locator('textarea[name="q"]');

    await expect(searchBox).toBeVisible();

});