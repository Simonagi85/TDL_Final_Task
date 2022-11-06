class CheckoutPage {

    get firstName() { return $('input[id="first-name"]'); }
    get lastName() { return $('input[id="last-name"]'); }
    get postalCode() { return $('input[id="postal-code"]'); }


}
export default new CheckoutPage(); 