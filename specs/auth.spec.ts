import { test, expect } from '@playwright/test';

test.describe('Vikunja Authorization', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://try.vikunja.io/');
    });

    test('demo user can login into the system', async ({ page }) => {
        await page.click('#username')
        await page.type('#username', 'demo')
        await page.click('#password')
        await page.type('#password', 'demo')
        await page.click('.content > div > div > #loginform > .base-button')
        expect(await page.textContent('.user > .dropdown > .dropdown-trigger > .base-button > .username')).toBe('demo');
    });
});



