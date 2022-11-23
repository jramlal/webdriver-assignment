const AccountPage = require('../pageobjects/account.page');
const ProductPage = require('../pageobjects/product.page');
const SignUpPage = require('../pageobjects/signup.page'); 
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page'); 
const OrderPage = require('../pageobjects/order.page'); 
const { faker } = require('@faker-js/faker');


describe('History Page', () => {
    it('should make a purchase and verify it in order history', async () => {
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

        const password = (faker.random.alphaNumeric(10) + "!")
        const confirmPassword = password;

        await CheckoutPage.emailAddress.waitForDisplayed();
        await CheckoutPage.checkOut(email, firstName, lastName, company, streetAddr, city, state, '12134', 'United States', '8882255577');
        
        await OrderPage.btnCreateAccount.waitForDisplayed();
        await OrderPage.btnCreateAccount.click(); 
        

        await SignUpPage.createAccountAfterPurchase(password, confirmPassword);
        
        await AccountPage.tabMyOrders.waitForDisplayed();
        await AccountPage.tabMyOrders.click();

        
        await expect(await $('[data-th="Order #"]')).toBeDisplayed();
    });
});