import { test, expect } from '@playwright/test';

test('documentation homepage has a meaningful title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/i);
});

test('documentation navigation is available', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /docs/i }).first()).toBeVisible();
});

test('public API responds successfully', async ({ request }) => {
  const response = await request.get('https://playwright.dev');
  expect(response.ok()).toBeTruthy();
});
