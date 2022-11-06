import { When, Then } from '@wdio/cucumber-framework';
import ProductsPage from '../page-objects/ProductsPage';

Then(/^User is on SwagLabs product page$/, async () => {
    await ProductsPage.productsPageTitle.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Products page title was not found',
    });
});

When(/^User sorts product list by "([^"]*)"$/, async (sortingOption) => {
    await ProductsPage.sortingButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Sort product button was not found'
    });
    await ProductsPage.sortingButton.click();
    await ProductsPage.selectSortingOption(sortingOption);
});


Then(/^User sees product - "([^"]*)" with price - "([^"]*)"$/, async (productTitle, productPrice) => {
    await ProductsPage.validateTheCheapestProductOnTheList(productTitle, productPrice);

});

When(/^User opens the side navigation button$/, async () => {
    await ProductsPage.sidebarNavigationButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Side navigation button was not clickable',
    });
    await ProductsPage.sidebarNavigationButton.click();
});


When(/^User clicks the Logout button$/, async () => {
    await ProductsPage.logoutButton.waitForDisplayed({
        timeout: 15000,
        timeoutMsg: 'Logout button was not found',
    });

    await ProductsPage.logoutButton.waitForClickable({
        timeout: 15000,
        timeoutMsg: 'Sidebar logout button was not clickable',
    });

    await ProductsPage.logoutButton.click();
});

//
When(/^User adds Sauce Labs Fleece Jacket to the shopping cart$/, async () => {
    await ProductsPage.addToCartBtn.waitForClickable({
        timeout: 15000,
        timeoutMsg: 'Add to cart button was not clickable',
    });

    await ProductsPage.addToCartBtn.click();
});

When(/^User opens shopping cart$/, async () => {

    await ProductsPage.shoppingCartBtn.waitForClickable({
        timeout: 5000,
        timeoutMsg: 'Shopping cart was not found',
    });


    await ProductsPage.shoppingCartBtn.click();

});



