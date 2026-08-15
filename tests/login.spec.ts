import {test, expect } from "playwright/test";
import { LoginPage } from "../pages/📄 LoginPage.js";

test('Deve realizar login com sucesso no SauceDemo', async({page}) =>{
    const paginaDeLogin = new LoginPage(page);
    await paginaDeLogin.realizarLogin('standard_user', 'secret_sauce');

    const tituloProdutos = page.locator('[data-test="title"]');
    await expect(tituloProdutos).toBeVisible();
})