const SignUpPage = require('../pageobjects/signup.page');
const AccountPage = require('../pageobjects/account.page');
const { faker } = require('@faker-js/faker');


describe('Sign Up Page Unhappy Path', () => {
    it("should try to create an account with an existing acccount info and validate that it can't be created", async () => { 
    
        //faker.seed(1)
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(firstName, lastName, 'gmail.com');
        const password = (faker.random.alphaNumeric(8) + "!")
        const confirmPassword = password;
        
        await SignUpPage.open();
        await SignUpPage.createAccount(firstName, lastName, email, password, confirmPassword);
        
        await AccountPage.logOut();

        await SignUpPage.open();
        await SignUpPage.createAccount(firstName, lastName, email, password, confirmPassword);

        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/create/')
    });
 });