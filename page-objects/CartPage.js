import Page from './Page';

class CartPage extends Page {

    //get cartProductList() { return $('div[class="cart_list"]'); }

    //get productTitle() { return $('id[class="inventory_item_name"]'); }
    //get productPrice() { return $('id[class="inventory_item_price"]'); }

    get checkoutBtn() { return $('button[id="checkout"]'); }


    async productIsInTheCart(productTitle, productPrice) {
        const productList = await this.productList.$$('div[class="cart_item"]');

        const actualproductTitle = await productList[0].$('div[class="inventory_item_name"]').getText();
        const actualproductPrice = await productList[0].$('div[class="inventory_item_price"]').getText();

        await expect(actualproductTitle).toBe(productTitle);
        await expect(actualproductPrice).toBe(productPrice);
    }

}
export default new CartPage;

