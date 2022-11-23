const CheckoutPage = require('../pageobjects/checkout.page');
const ProductPage = require('../pageobjects/product.page');
const CartPage = require('../pageobjects/cart.page'); 
const { faker } = require('@faker-js/faker');

describe('Checkout functionality', () => {
    it('should purchase item and validate purchase', async () => {
        
        await ProductPage.open();
        
        await ProductPage.AddToCart(); 
       
        await CartPage.openCart();
        await CartPage.btnProceedCheckout.click();
        const email = faker.internet.email(undefined,undefined,'gmail.com');
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const company = faker.company.name(); 
        const streetAddr = faker.address.streetAddress();
        const city = faker.address.city();
        const state = faker.address.state();
        await CheckoutPage.checkOut(email, firstName, lastName, company, streetAddr, city, state, '12134', 'United States', '8882255577');
        
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/onepage/success/');
    
        
    });
});