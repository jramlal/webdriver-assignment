/**
 * Page Object created to test the verify order flow. 
 * URL: https://magento.softwaretestingboard.com/checkout/onepage/success/
 */

 const Page = require("./page") 


 class OrderPage extends Page {
 
     get btnCreateAccount() {
         return $(".action.primary[data-bind='attr: { href: getUrl() }']");
     }
 
 }
 
 module.exports = new OrderPage