// Basic Types and Variables
const user: string = 'Tosan';
const age: number = 25;
const isMale: boolean = true;
const children: null = null;
const userStatus: undefined = undefined;
const favoriteNums: number[] = [15, 20, 3];
const allNames: string[] = ['Hendrix', 'Lavish'];
const tuple: [string, number] = ['Hendrix', 25 ]

// enums represent a group of constants
enum daysOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

// A variable that can be string or number
let count: string | number = 2;

// Explicit Types and Type Inference
let message = 'hello world';
// message = 24

function getStringLength(param: string): number {
  return param.length;
}
console.log(getStringLength(user));

function returnNum(param1: number, param2?: boolean): number {
  if(param2 === undefined) {
    param2 = false;
  }

  if (param1 > 0 && param2) {
    return 1;
  } else {
    return 0
  }
}
console.log(returnNum(20, true)); // 1
console.log(returnNum(20));       // 0
console.log(returnNum(0, true));  // 0

// Objects and Interfaces
interface Person {
  name: string,
  age: number
}

const Tosan: Person = {
  name: 'Tosan',
  age: 25,
}
const Mum: Person = {
  name: 'Felicia',
  age: 50,
}

interface Address {
  street: string,
  city: string,
  zipCode: string
}

interface Employee extends Person {
  employeeId: number,
  address: Address,
}

const newEmployee: Employee = {
  name: 'Lavish',
  age: 25,
  employeeId: 315,
  address: {
    street: 'tosan drive',
    city: 'port harcourt',
    zipCode: '500102'
  }
}

// Arrays and Tuples
const favoriteColors: string[] = ['blue', 'white', 'gray'];
const numArray: number[] = [1, 20, 15];

function sumArray(param: number[]): number {
  return param.reduce((a, c) => a + c)
}
console.log(sumArray(numArray))

const newTuple: [x: number, y: number] = [4, 6];

// Enums
enum OrderStatus {
  Pending = 'Pending',
  Processing = 'Processing',
  Shipped = 'Shipped',
  Delivered = 'Delivered'
}

function showOrderStatus(param: OrderStatus): void {
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
      break
  }
}
showOrderStatus(OrderStatus.Pending);
showOrderStatus(OrderStatus.Processing);
showOrderStatus(OrderStatus.Shipped);
showOrderStatus(OrderStatus.Delivered);

// Union types and Type aliases
type StatusCode = number | string;

function printStatusCode(param: StatusCode): void {
  console.log(param);
}
printStatusCode(404);
printStatusCode('606');

type MultiString = string | string[];

const var1: MultiString = 'yam';
const var2: MultiString = ['yam', 'pepper soup'];

function processMultiString(param: MultiString) {
  typeof param === 'string'
    ? console.log(param.length)
    : console.log(param.join(' '));
}
processMultiString(var1);
processMultiString(var2);

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year
  }
}

interface Vehicle {
  make: string,
  model: string,
  year: number,
}

const newCar: Vehicle = new Car('Mercedes', 'GLC', 2025);
console.log(newCar);
