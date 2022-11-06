class ProductsPage {
    get productsPageTitle() { return $('span[class="title"]'); }
    get sortingButton() { return $('select[class="product_sort_container"]'); }
    get sortingOptionList() { return $$(('select[class="product_sort_container"] > option')); }
    get productList() { return $('div[class="inventory_list"]'); }
    get sidebarNavigationButton() { return $('button[id="react-burger-menu-btn"]'); }
    get logoutButton() { return $('a[id="logout_sidebar_link"]'); }
    // getters for the final task
    get addToCartBtn() { return $('button[id="add-to-cart-sauce-labs-fleece-jacket"]'); }
    get shoppingCartBtn() { return $('a[class="shopping_cart_link"]'); }


    async selectSortingOption(sortingOption) {
        const sortingOptionLength = await this.sortingOptionList.length;
        for (let i = 0; i < sortingOptionLength; i++) {
            const sortingOptionName = await this.sortingOptionList[i].getText();
            if (sortingOptionName == sortingOption) {
                await this.sortingOptionList[i].click();
                return;
            }
        }
        throw new Error('Sorting Option name wwas not found');
    }
    async validateTheCheapestProductOnTheList(productTitle, productPrice) {
        const productList = await this.productList.$$('div[class="inventory_item"]');

        const actualproductTitle = await productList[0].$('div[class="inventory_item_name"]').getText();
        const actualproductPrice = await productList[0].$('div[class="inventory_item_price"]').getText();

        await expect(actualproductTitle).toBe(productTitle);
        await expect(actualproductPrice).toBe(productPrice);
    }

}


export default new ProductsPage();
