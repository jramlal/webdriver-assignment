/**
 * Test for the add to cart flow. 
 * Will add an item to the cart then verifiy success by checking if the "Proceed to Checkout" button exists. 
 */

 const ProductPage = require('../pageobjects/product.page');
 const CartPage = require("../pageobjects/cart.page");
 
 
 describe('Add To Cart functionality', () => {
     it('should add an item to cart and validate it', async () => {
         await ProductPage.open();
         
         await ProductPage.AddToCart(); 
        
         await CartPage.openCart();

         await expect(await $('.action.showcart.active')).toBeDisplayed(); // expecting button element from within the cart page to be here. 
     });
 });