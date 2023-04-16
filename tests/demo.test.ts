import { expect, test, Page } from '@playwright/test';
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';


test.describe('Demo Tests', () => {

  test('Login Test', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(await page.title()).toEqual('Swag Labs');
    await expect(inventoryPage.primaryHeader).toBeVisible();
  });
});

