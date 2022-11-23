const SignUpPage = require('../pageobjects/signup.page');
const { faker } = require('@faker-js/faker');


describe('Sign Up Page', () => {
    it('should create an account with fake data and validate account creation', async () => {
        await SignUpPage.open();

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(firstName, lastName, 'gmail.com');
        const password = (faker.random.alphaNumeric(8) + "!")
        const confirmPassword = password;

        await SignUpPage.createAccount(firstName, lastName, email, password, confirmPassword);
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/')
    });
});