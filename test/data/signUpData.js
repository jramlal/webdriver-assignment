const { faker } = require('@faker-js/faker'); 

// const firstName = faker.name.firstName();
// const lastName = faker.name.lastName();
// const email = faker.internet.email(firstName, lastName, 'gmail.com');
const password = (faker.random.alphaNumeric(5) + "!")
const confirmPassword = password;



module.exports = 
    [
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            password: "L0venewyork!",
            confirmPassword: "L0venewyork!",
            expectedUrl: "https://magento.softwaretestingboard.com/customer/account/"
        },
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            password: "L0venewyork!",
            confirmPassword: "L0venewyork!",
            expectedUrl: "https://magento.softwaretestingboard.com/customer/account/"
        },
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            password: "L0venewyork!",
            confirmPassword: "L0venewyork!",
            expectedUrl: "https://magento.softwaretestingboard.com/customer/account/"
        },
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            password: "L0venewyork!",
            confirmPassword: "L0venewyork!",
            expectedUrl: "https://magento.softwaretestingboard.com/customer/account/"
        },
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            password: password,
            confirmPassword: confirmPassword,
            expectedUrl: "https://magento.softwaretestingboard.com/customer/account/create/"
        },
    ]
;