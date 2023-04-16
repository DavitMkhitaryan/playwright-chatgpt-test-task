import { Page, Locator } from '@playwright/test';

export default class LoginPage {

  private page: Page;

  // Locators
  public usernameField: Locator;
  public passwordField: Locator;
  public loginButton: Locator;


  constructor(page: Page) {
    this.page = page;

    // Locators
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameField.type(username);
    await this.passwordField.type(password);
    await this.loginButton.click();
  }
}