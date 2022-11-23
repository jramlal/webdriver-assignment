/**
 * Page object created to test the sign up and verify order history work flows. 
 * URL: https://magento.softwaretestingboard.com/customer/account/ 
 */



 const Page = require('./page');

 class AccountPage extends Page { 
 
     get tabMyOrders () {
         return $("main[id='maincontent'] li:nth-child(2) a:nth-child(1)")
     }
 
     get btnAccountDropdown() {
         return $("div[class='panel header'] button[type='button']");
     } 
  
     get btnSignOut() {
         return $("div[aria-hidden='false'] li[data-label='or'] a");
     }
 
     get orderNumber() {
         return $('[data-th="Order #"]');
     }
 
     async getOrderNumber() {
         await this.orderNumber.getText();
     }
 
     /**
      * logOut function is needed to test the create account unappy path. 
      * 
      */
     async logOut() {
         await this.btnAccountDropdown.click();
         await this.btnSignOut.waitForDisplayed(); 
         await this.btnSignOut.click();
     }
 
     /**
      * Clicks the "My Orders" tab in the left pane of the account page. 
      */
 
     async openHistory () {
         await this.tabMyOrders.click();
     } 
     
     open () {
         return super.open("customer/account/");
     }
 }
 
 module.exports = new AccountPage();