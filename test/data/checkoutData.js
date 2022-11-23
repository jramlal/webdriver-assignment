const { faker } = require('@faker-js/faker'); 


module.exports = 
    [
        {
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            company: faker.company.name(),
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: "United States",
            phoneNumber: faker.phone.number(),
            expectedUrl: "https://magento.softwaretestingboard.com/checkout/onepage/success/"
        },
        {
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            company: faker.company.name(),
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: "United States",
            phoneNumber: faker.phone.number(),
            expectedUrl: "https://magento.softwaretestingboard.com/checkout/onepage/success/"
        },
        {
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            company: faker.company.name(),
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: "United States",
            phoneNumber: faker.phone.number(),
            expectedUrl: "https://magento.softwaretestingboard.com/checkout/onepage/success/"
        },
        {
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            company: faker.company.name(),
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: "United States",
            phoneNumber: faker.phone.number(),
            expectedUrl: "https://magento.softwaretestingboard.com/checkout/onepage/success/"
        },
        {
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            company: faker.company.name(),
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: "United States",
            phoneNumber: faker.phone.number(),
            expectedUrl: "https://magento.softwaretestingboard.com/checkout/onepage/success/"
        },
    ]
;