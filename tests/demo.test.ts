import { expect, test, Page } from '@playwright/test';
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';


test.describe('Demo Tests', () => {

  test('Successful Login', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(await page.title()).toEqual('Swag Labs');
    await expect(inventoryPage.primaryHeader).toBeVisible();
  });

  test('Add single item to shopping cart', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    const titleInventoryPage = await inventoryPage.getInvetoryItemTitleByIndex(0);
    await inventoryPage.addItemToCartByIndex(0);
    expect(await inventoryPage.getShoppingCartCount()).toEqual('1');
    await inventoryPage.clickShoppingCartIcon();
    expect(page.url()).toContain('cart');
    expect(await cartPage.getCartItemsCount()).toEqual(1);
    expect(await cartPage.getCartItemTitleByIndex(0)).toEqual(titleInventoryPage);
  });
});

