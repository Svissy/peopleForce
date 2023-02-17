import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";

const loginPage = new LoginPage();

Given(/^I navigate to '(.*)'/, async (url) => {
  await browser.url(url);
  await expect(browser).toHaveUrl(url);
});

When(/^I enter '(.*)' in the 'Username' input/, async (username) => {
  await loginPage.inputUser(username);
});

When(/^I enter '(.*)' in the 'Password' input/, async (password) => {
  await loginPage.inputPass(password);
});

When(/^I click the 'Login' button/, async () => {
  await loginPage.clickOnLoginButton();
});

Then(
  /^I expect to see '(.*)' and '(.*)'/,
  async (expectedUserNameMessage, expectedPasswordMessage) => {
    await expect(loginPage.errorMessageUserName).toHaveText(
      expectedUserNameMessage
    );
    await expect(loginPage.errorMessagePassword).toHaveText(
      expectedPasswordMessage
    );
  }
);
