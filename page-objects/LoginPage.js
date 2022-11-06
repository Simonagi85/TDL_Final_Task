import Page from './Page';

class LoginPage extends Page {
    // input[id="user-name"]
    get usernameInputField() { return $('input[id="user-name"]'); }

    get passwordInputField() { return $('input[id = "password"]'); }

    get loginButton() { return $('input[id="login-button"]'); }
    get errorMessageContainer() { return $('h3[data-test="error"]'); }

    async open() {
        await super.open('https://www.saucedemo.com/');
    }
    async checkErrorMessage(errorMessage) {
        await expect(this.errorMessageContainer).toHaveText(errorMessage);
    }
}
// fresh instance of class for our tests
export default new LoginPage();