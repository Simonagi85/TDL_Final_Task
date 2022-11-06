import { Given, When, Then } from '@wdio/cucumber-framework';
import CheckoutPage from '../page-objects/CheckoutPage';

When(/^User fills the checkout information$/, async (username) => {
    await CheckoutPage.usernameInputField.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Username input field was not found',
    });
    await CheckoutPage.usernameInputField.setValue(username);
}); 