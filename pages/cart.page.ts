import { Page, Locator } from "@playwright/test";

export default class CartPage {

  private page: Page;

  // Locators
  public cartItems: Locator;
  public checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.cartItems = page.locator('.cart_list .cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async getCartItemsCount(): Promise<number> {
    const cartItemsCount = await this.page.locator('.cart_list .cart_item').count();
    return cartItemsCount;
  }

  async getCartItemTitleByIndex(index: number): Promise<string> {
    const cartItemText = await this.cartItems.nth(index).locator('.inventory_item_name').innerText();
    return cartItemText;
  }

  async clickCheckoutButton(): Promise<void> {
    await this.checkoutButton.click();
  }
}