import { When, Then } from '@wdio/cucumber-framework';
import CartPage from '../page-objects/CartPage';

/*
Then(/^User sees product - "([^"]*)" with price - "([^"]*)"$/, async (productTitle, productPrice) => {
    await CartPage.productIsInTheCart(productTitle, productPrice);
});
*/

When(/^User presses checkout button$/, async () => {
    await CartPage.checkoutBtn.waitForClickable({
        timeout: 5000,
        timeoutMsg: 'Checkout button was not found',
    });
    await CartPage.checkoutBtn.click();
});


