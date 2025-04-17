// 1. Primitive Types & Type Annotations:
const productName = 'Nike Air Force 1';
const price = 102;
const isOnSale = true;
const discountPercentage = null;
const description = undefined;
// 2. Arrays
const userRoles = ['Admin', 'Client', 'Student'];
const addRole = (role) => userRoles.push(role);
function displayRoles() {
    for (let role of userRoles) {
        console.log(role);
    }
}
addRole('Teacher');
displayRoles();
// 3. any and noImplicitAny
let unknownData = 34;
// unknownData.toUpperCase();
// 4. Functions - Parameter and Return Type Annotations:
const calculateTax = (price, taxRate) => price * taxRate;
const formatGreeting = (name, salutation) => (`${salutation = salutation || 'Hello'}, ${name}`);
console.log(calculateTax(200, 0.1));
console.log(formatGreeting('Tosan'));
console.log(formatGreeting('Tosan', 'Wagwan'));
const userData = [
    { id: 12, userName: 'hendrix' },
    { id: 43, userName: 'harriet' }
];
userData.forEach(function (user) {
    console.log(user.userName);
});
const settingsOne = {
    theme: 'dark',
};
const settingsTwo = {
    theme: 'light',
    fontSize: 16
};
function processInput(param) {
    console.log(typeof param === 'string'
        ? param.toUpperCase()
        : param ** 2);
}
const inputValueOne = 'Tosan';
const inputValueTwo = 9;
let responseStatus;
responseStatus = 200;
// Error
// responseStatus = 400;
// 11. null and undefined & strictNullChecks
const potentialName = null;
// Error: .length does not exist on type never
// potentialName?.length;
let optionalValue;
function handleUndefined(optionalNumber) {
    if (optionalNumber === undefined) {
        return;
    }
    console.log(optionalNumber * 4);
}
let potentiallyNullString = getStringFromSomewhere(); // Function might return null
if (potentiallyNullString) {
    console.log(potentiallyNullString.toUpperCase()); // TypeScript knows it's safe here
}
// Imagine a scenario where you are absolutely sure getStringFromSomewhere()
// will always return a string by the time you reach this point in your code,
// perhaps due to some external logic you're aware of but TypeScript isn't.
console.log(potentiallyNullString.length); // Using ! to assert it's not null
// 13. Enums:
var LogLevel;
(function (LogLevel) {
    LogLevel["Debug"] = "Debug";
    LogLevel["Info"] = "Info";
    LogLevel["Warning"] = "Warning";
    LogLevel["Error"] = "Error";
})(LogLevel || (LogLevel = {}));
function logMessage(message, level) {
    console.log(level + ' ' + message);
}
logMessage('my debug message', LogLevel.Error);
