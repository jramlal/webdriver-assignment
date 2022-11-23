/**
 * Unhappy Path for the add to cart functionality.
 * This test will verifiy that an item cannot be added to the cart without selecting the item color first. 
 */

 const ProductPage = require('../pageobjects/product.page');
 const CartPage = require("../pageobjects/cart.page");
 
  
 describe('Unhappy Add To Cart functionality', () => {
     it('should fail to add item to cart without a color selected', async () => {
         await ProductPage.open();
          
         await ProductPage.unhappyAddToCart(); 
         
         await CartPage.openCart();     
  
         await expect(await $('.action.showcart.active')).toBeDisplayed({reverse: true}); 
     });
 });