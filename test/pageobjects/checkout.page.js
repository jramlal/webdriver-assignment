/**
 * Page Object created to test the checkout flow.
 * URL: https://magento.softwaretestingboard.com/checkout/#shipping
 */

 const Page = require('./page'); 


 class CheckoutPage extends Page {
 
     /**
      * Getters for the input fields.
      */ 
 
     get emailAddress() {
         return $('.control._with-tooltip #customer-email')
     } 
 
     get firstName() {
         return $('[name="firstname"]');
     }
 
     get lastName() {
         return $('[name="lastname"]');
     }
 
     get selectCompany () {
         return $('[name="company"]') ;
     }
 
     get streetAddress () {
         return $('[name="street[0]"]');
     }
     
     get selectCity () {
         return $('[name="city"]');
     }
 
     get zipCode () {
         return $('[name="postcode"]');
     }
 
     get phoneNumber () {
         return $('[name="telephone"]');
     }
 
     /**
      * Getters for the buttons on the Shipping and Payment pages. 
      */
 
     get btnShippingMethod () {
         return $("input[value='flatrate_flatrate']");
     }
 
     get btnNext () {
         return $(".button.action.continue.primary");
     } 
 
     get btnPlaceOrder () {
         return $("button[title='Place Order']");
     }
 
     /**
      * Getters for the dropdown menus on Shipping page.
      *  
      */
 
 
     get stateDropdown () {
         return $('[name="region_id"]');
     } 
     
     get countryDropdown () {
         return $('[name="country_id"]');
     }
 
    
 
     /**
      * Function to fill out shipping address and place order.
      * @param {*} company 
      * @param {*} address 
      * @param {*} city 
      * @param {*} zip 
      * @param {*} phone 
      */
 
     async checkOut(email, firstName, lastName, company, address, city, state, zip, country, phone) {
 
         await this.emailAddress.setValue(email);
         await this.firstName.setValue(firstName);
         await this.lastName.setValue(lastName);
         await this.selectCompany.setValue(company);
         await this.streetAddress.setValue(address);
         await this.selectCity.setValue(city);
         await this.phoneNumber.scrollIntoView();
         await this.stateDropdown.selectByAttribute('data-title',state); //should choose state from dropdown list
         await this.zipCode.setValue(zip);
         await this.countryDropdown.selectByAttribute("data-title",country); //should choose country from dropdown list
         await this.phoneNumber.setValue(phone); 
 
          
         await this.btnShippingMethod.click();
         await this.btnNext.click();
         await this.btnPlaceOrder.click();
     } 
 
     /**
      * Function to test unhappy path by not inputting a street address. 
      * 
      */
 
     get errorMessage() {
         return $('#error-OU4WIUT span');
     }
 
     async unhappyCheckOut(email, firstName, lastName, company, city, state, zip, country, phone) {
 
         await this.emailAddress.setValue(email);
         await this.firstName.setValue(firstName);
         await this.lastName.setValue(lastName);
         await this.selectCompany.setValue(company);
         
         await this.selectCity.setValue(city);
         await this.phoneNumber.scrollIntoView();
         await this.stateDropdown.selectByAttribute('data-title',state); //should choose state from dropdown list
         await this.zipCode.setValue(zip);
         await this.countryDropdown.selectByAttribute("data-title",country); //should choose country from dropdown list
         await this.phoneNumber.setValue(phone); 
 
          
         await this.btnShippingMethod.click();
         await this.btnNext.click();
     } 
 
     open () {
         return super.open('checkout');
     }
 }
 
 module.exports = new CheckoutPage();