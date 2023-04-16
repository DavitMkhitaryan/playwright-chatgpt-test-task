import { Page, Locator } from "@playwright/test";

export default class InventoryPage {

  private page: Page;

  // Locators
  public primaryHeader: Locator;
  public itemsList: Locator;
  public shoppingCartBadge: Locator;
  public shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.primaryHeader = this.page.locator('.primary_header');
    this.itemsList = this.page.locator('.inventory_item');
    this.shoppingCartBadge = this.page.locator('.shopping_cart_badge');
    this.shoppingCartLink = this.page.locator('.shopping_cart_link');
  }

  async getInventoryItemByIndex(index: number): Promise<Locator> {
    const item = this.itemsList.nth(index);
    return item;
  }

  async addItemToCartByIndex(index: number): Promise<void> {
    (await this.getInventoryItemByIndex(index)).locator('.btn_inventory').click();
  }

  async getInvetoryItemTitleByIndex(index: number): Promise<string> {
    const inventoryItemTitle = await (await this.getInventoryItemByIndex(index)).locator('.inventory_item_name').innerText();
    return inventoryItemTitle;
  }

  async getShoppingCartCount(): Promise<string> {
    const shoppingCartBadgeCount = await this.shoppingCartBadge.innerText();
    return shoppingCartBadgeCount;
  }

  async clickShoppingCartIcon(): Promise<void> {
    return await this.shoppingCartLink.click();
  }
}