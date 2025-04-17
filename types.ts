// 1. Primitive Types & Type Annotations:
const productName: string = 'Nike Air Force 1';
const price: number = 102;
const isOnSale: boolean = true;
const discountPercentage: number | null = null;
const description: string | undefined = undefined;

// 2. Arrays
const userRoles = ['Admin', 'Client', 'Student'];

const addRole = (role: string) => userRoles.push(role);

function displayRoles() {
  for (let role of userRoles) {
    console.log(role)
  }
}

addRole('Teacher');
displayRoles();

// 3. any and noImplicitAny
let unknownData: any = 34;
// unknownData.toUpperCase();

// 4. Functions - Parameter and Return Type Annotations:
const calculateTax = (price: number, taxRate: number): number => price * taxRate;
const formatGreeting = (name: string, salutation?: string): string => (
  `${salutation = salutation || 'Hello'}, ${name}`
);

console.log( calculateTax(200, 0.1) );
console.log( formatGreeting('Tosan') );
console.log( formatGreeting('Tosan', 'Wagwan') );

// 5. Anonymous Functions and Object Types:
type User = {
  id: number;
  userName: string
}

const userData: User[] = [
  {id: 12, userName: 'hendrix'},
  {id: 43, userName: 'harriet'}
];

userData.forEach(function (user) {
  console.log(user.userName);
});

// 6. Optional Properties:
interface AppSettings {
  theme: string;
  fontSize?: number;
  animationsEnabled?: boolean;
}

const settingsOne: AppSettings = {
  theme: 'dark',
}
const settingsTwo: AppSettings = {
  theme: 'light',
  fontSize: 16
}

// 7. Union Types:
/*
function processInput(param: string | number) {
  console.log(
    typeof param === 'string'
      ? param.toUpperCase()
      : param ** 2
  );
}
processInput('Tosan');
processInput(9);
*/

// 8. Type Aliases:
type InputValue = string | number;

function processInput(param: InputValue) {
  console.log(
    typeof param === 'string'
      ? param.toUpperCase()
      : param ** 2
  );
}

const inputValueOne: InputValue = 'Tosan';
const inputValueTwo: InputValue = 9;

/**
 * 9. Interfaces vs Type Aliases:
 * 
 * One key difference between when choose to use a type alias over
 * an interface would be when i want to define a union of types that
 * i'd use repeatedly throughout my work. this is something that can't
 * be achieved using an interface.
 * Whereas interfaces were intended to describe structure of an object
 * specifying the properties it should have. Although type alias allow
 * for the same use. its inability to update the the nature of an already
 * defined type is a limitation. And the added sweeter syntax of the
 * interface using the 'extends' keyword just makes it more descriptive.
 */

// 10. Literal Types:
type StatusCode2 = 200 | 404 | 500;

let responseStatus: StatusCode2;
responseStatus = 200;
// Error
// responseStatus = 400;

// 11. null and undefined & strictNullChecks
const potentialName: string | null = null;
// Error: .length does not exist on type never
// potentialName?.length;

let optionalValue: number | undefined;

function handleUndefined(optionalNumber?: number) {
  if (optionalNumber === undefined) {
    return;
  }
  console.log(optionalNumber * 4)
}

// 12. Non-null Assertion Operator(!):
declare function getStringFromSomewhere(): string | null;
let potentiallyNullString: string | null = getStringFromSomewhere(); // Function might return null

if (potentiallyNullString) {
  console.log(potentiallyNullString.toUpperCase()); // TypeScript knows it's safe here
}

// Imagine a scenario where you are absolutely sure getStringFromSomewhere()
// will always return a string by the time you reach this point in your code,
// perhaps due to some external logic you're aware of but TypeScript isn't.
console.log(potentiallyNullString!.length); // Using ! to assert it's not null

// 13. Enums:
enum LogLevel {
  Debug = 'Debug',
  Info = 'Info',
  Warning = 'Warning',
  Error = 'Error'
}

function logMessage(message: string, level: LogLevel) {
  console.log(level + ' ' + message);
}

logMessage('my debug message', LogLevel.Error);