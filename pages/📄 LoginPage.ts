import { type Page } from 'playwright/test'

export class LoginPage{

    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async realizarLogin(usuario: string, senha: string) {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.locator('[data-test="username"]').fill(usuario);
        await this.page.locator('[data-test="password"]').fill(senha);
        await this.page.locator('[data-test="login-button"]').click();
    }
}