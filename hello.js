// Basic Types and Variables
const user = 'Tosan';
const age = 25;
const isMale = true;
const children = null;
const userStatus = undefined;
const favoriteNums = [15, 20, 3];
const allNames = ['Hendrix', 'Lavish'];
const tuple = ['Hendrix', 25];
// enums represent a group of constants
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek["Monday"] = "Monday";
    daysOfWeek["Tuesday"] = "Tuesday";
    daysOfWeek["Wednesday"] = "Wednesday";
    daysOfWeek["Thursday"] = "Thursday";
    daysOfWeek["Friday"] = "Friday";
    daysOfWeek["Saturday"] = "Saturday";
    daysOfWeek["Sunday"] = "Sunday";
})(daysOfWeek || (daysOfWeek = {}));
// A variable that can be string or number
let count = 2;
// Explicit Types and Type Inference
let message = 'hello world';
// message = 24
function getStringLength(param) {
    return param.length;
}
console.log(getStringLength(user));
function returnNum(param1, param2) {
    if (param2 === undefined) {
        param2 = false;
    }
    if (param1 > 0 && param2) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(returnNum(20, true)); // 1
console.log(returnNum(20)); // 0
console.log(returnNum(0, true)); // 0
const Tosan = {
    name: 'Tosan',
    age: 25,
};
const Mum = {
    name: 'Felicia',
    age: 50,
};
const newEmployee = {
    name: 'Lavish',
    age: 25,
    employeeId: 315,
    address: {
        street: 'tosan drive',
        city: 'port harcourt',
        zipCode: '500102'
    }
};
// Arrays and Tuples
const favoriteColors = ['blue', 'white', 'gray'];
const numArray = [1, 20, 15];
function sumArray(param) {
    return param.reduce((a, c) => a + c);
}
console.log(sumArray(numArray));
const newTuple = [4, 6];
// Enums
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Processing"] = "Processing";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
function showOrderStatus(param) {
    switch (param) {
        case 'Pending':
            console.log('Your order is pending.');
            break;
        case 'Processing':
            console.log('Your order is being processed.');
            break;
        case 'Shipped':
            console.log('Your order has been shipped.');
            break;
        default:
            console.log('Your order is delivered.');
            break;
    }
}
showOrderStatus(OrderStatus.Pending);
showOrderStatus(OrderStatus.Processing);
showOrderStatus(OrderStatus.Shipped);
showOrderStatus(OrderStatus.Delivered);
function printStatusCode(param) {
    console.log(param);
}
printStatusCode(404);
printStatusCode('606');
const var1 = 'yam';
const var2 = ['yam', 'pepper soup'];
function processMultiString(param) {
    typeof param === 'string'
        ? console.log(param.length)
        : console.log(param.join(' '));
}
processMultiString(var1);
processMultiString(var2);
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const newCar = new Car('Mercedes', 'GLC', 2025);
console.log(newCar);
