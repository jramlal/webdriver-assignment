/**
 * Page Object created to test the sign up flow. 
 * URL: https://magento.softwaretestingboard.com/customer/account/create
 */

 const Page = require('./page');


 class SignUpPage extends Page {
     
     get inputFirstName () {  
         return $('#firstname');
     }
 
     get inputLastName (){
         return $('#lastname');
     }
 
     get inputEmail (){
         return $('#email_address');
     }
 
     get inputPassword(){
         return $('.control #password');
     }
 
     get inputConfirmPassword() {
         return $('.control #password-confirmation');
     }
 
     get btnCreateAccount() {
         return $('.primary button[title="Create an Account"]');
     } 
 
     /**
      * Function to automate signup flow by accepting the following parameters and adding them to the form.
      * 
      * @param {*} firstName 
      * @param {*} lastName 
      * @param {*} email 
      * @param {*} password 
      * @param {*} confirmPassword 
      */
 
     
     async createAccount(firstName, lastName, email, password, confirmPassword) {
      
         await this.inputFirstName.setValue(firstName);
         await this.inputLastName.setValue(lastName);
         await this.inputEmail.setValue(email);
         await this.inputPassword.setValue(password);
         await this.inputConfirmPassword.setValue(confirmPassword);
 
         await this.btnCreateAccount.click();
     }
 
     /**
      * This function was created to test the verify order page. 
      * It passes in just the password and confirmPassword variables then creates the account. 
      * @param {*} password 
      * @param {*} confirmPassword 
      */
 
     async createAccountAfterPurchase(password, confirmPassword) {
      
         await this.inputPassword.setValue(password);
         await this.inputConfirmPassword.setValue(confirmPassword);
 
         await this.btnCreateAccount.click();
     }
 
     /**
      * method to encapsulate the open function from the Page object
      * @returns 
      */ 
 
     open() {
         return super.open('customer/account/create/');
     }
 
 }
 
 module.exports = new SignUpPage();