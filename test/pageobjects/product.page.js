/**
 * Page Object created to test the add to cart, checkout and verify order flows. 
 * URL: https://magento.softwaretestingboard.com/
 */



 const Page = require('./page');

 class ProductPage extends Page { 
 
     get selectWoman () {
         return $("a[id='ui-id-4'] span:nth-child(1)");
     }
 
     get selectTops() {
         return $("div[class='block filter'] li:nth-child(1) a:nth-child(1)");
     }
     
     get selectProduct() {
         return $(".product-image-photo[src='https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/2a213d0c937b30e310c8ee797a880cef/w/t/wt09-white_main_1.jpg']");
     }
     get btnSizeSelect () {
         return $('#option-label-size-143-item-168');
     }
 
     get btnColourSelect () {
         return $('#option-label-color-93-item-57');
     }
 
     get btnAddToCart () {
         return $('#product-addtocart-button');
     } 
 
     get btnShowCart() {
         return $('.action.showcart');
     }
 
     get orangeThingy() {
         return $(".counter-label span")
     }
 
     /**
      * Function to add items to the cart. 
      */
     async AddToCart() {
         
         await this.selectWoman.click();
         await this.selectTops.click();
         await this.selectProduct.click();
         
         await this.btnSizeSelect.click();
         await this.btnColourSelect.click();
         await this.btnAddToCart.click();
 
         await this.orangeThingy.waitForExist();
         
     } 
 
     /**
      * Function was created to test the unhappy path for the add to cart flow. 
      * Tries to add an item to the cart without selecting a color. 
      */
 
     async unhappyAddToCart() {
         
         await this.selectWoman.click();
         await this.selectTops.click();
         await this.selectProduct.click();
         
         await this.btnSizeSelect.click();
         await this.btnAddToCart.click();
 
         
         
     }
 
     open () {
         return browser.url('https://magento.softwaretestingboard.com/')
     }    
 }
 
 module.exports = new ProductPage();