import Page from "./page.js";

export default class LoginPage extends Page {
  get inputUsername() {
    return $('input[name="username"]');
  }

  get inputPassword() {
    return $('input[name="password"]');
  }

  get loginButton() {
    return $('input[type="submit"]');
  }

  get errorMessageUserName() {
    return $$('span.help-block')[0];
  }

  get errorMessagePassword() {
    return $$("span.help-block")[1];
  }

  async inputUser(username) {
    await this.inputUsername.setValue(username);
  }

  async inputPass(password) {
    await this.inputPassword.setValue(password);
  }

  async clickOnLoginButton() {
    await this.loginButton.click();
  }
}
