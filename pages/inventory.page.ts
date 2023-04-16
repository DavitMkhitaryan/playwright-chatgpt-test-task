import { Page, Locator } from "@playwright/test";

export default class InventoryPage {

  private page: Page;

  // Locators
  public primaryHeader: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.primaryHeader = page.locator('.primary_header');
  }
}