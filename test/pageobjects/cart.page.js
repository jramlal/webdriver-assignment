/**
 * Page Object created to test the add to cart flow. 
 */

 const Page = require("./page") 


 class CartPage extends Page {
 
     get btnOpenCart() {
         return $('.action.showcart');
     }
 
     get btnProceedCheckout() {
         return $('#top-cart-btn-checkout');
     } 
 
     /**
      * Opens the cart by clicking the cart button in the top right corner of website. 
      * @returns 
      */
     openCart() {
        return this.btnOpenCart.click();
     }
     
     
 }
 
 module.exports = new CartPage