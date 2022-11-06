import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../page-objects/LoginPage';

Given(/^User has opened SwagLabs website$/, async () => {
    await LoginPage.open();
});

Given(/^User inputs username  - "([^"]*)"$/, async (username) => {
    await LoginPage.usernameInputField.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Username input field was not found',
    });
    await LoginPage.usernameInputField.setValue(username);
});


Given(/^User inputs pasword - "([^"]*)"$/, async (password) => {
    await LoginPage.passwordInputField.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Password input field was not found',
    });
    await LoginPage.passwordInputField.setValue(password);
});


When(/^User presses the Login button$/, async () => {
    await LoginPage.loginButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Login button was not found',
    });
    await LoginPage.loginButton.click();
});

Then(/^This is the usage of data table using array$/, async (dataTable) => {
    console.log(dataTable.rawTable[0]);
});

Then(/^This is the usage of data table using object$/, async (dataTable) => {
    const dataHashTable = await dataTable.rowsHash();

    for (const [key, value] of Object.entries(dataHashTable)) {
        console.log(`${key}: ${value}`);
    }
});

Then(/^User sees an error message - "([^"]*)"$/, async (errorMessage) => {
    await LoginPage.checkErrorMessage(errorMessage);
});

Then(/^User is redirected to login page$/, async () => {
    await LoginPage.usernameInputField.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Username input field was not found',
    });

    await LoginPage.passwordInputField.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Password input field was not found',
    });

});
