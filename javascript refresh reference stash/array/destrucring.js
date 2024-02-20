
// 1....
const numbers = [1, 2, 3, 4, 5];

// Basic Array Destructuring
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3

// Skipping Elements
const [, , thirdElement] = numbers;
console.log(thirdElement); // Output: 3

// Rest Pattern
const [head, ...rest] = numbers;
console.log(head, rest); // Output: 1 [2, 3, 4, 5]


// object Destructuring Pattern

const person = { name: 'John', age: 30, city: 'New York' };



// 2.....
// Basic Object Destructuring
const { name, age } = person;
console.log(name, age); // Output: John 30


// Renaming Variables
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // Output: John 30

// Default Values
const { name: userName = 'Anonymous', country = 'Unknown' } = person;
console.log(userName, country); // Output: John Unknown

// Nested Object Destructuring
const { address: { street, city } } = person;
console.log(street, city); // Output: undefined (if address is not defined in person)


//3....
// Parameter Object Destructuring:

// Function with Object Destructuring
function printUser({ name, age }) {
    console.log(`${name} is ${age} years old.`);
  }
  
  const user = { name: 'Alice', age: 25 };
  printUser(user); // Output: Alice is 25 years old.


// 4...
// Mixed Destructuring:
const mixedData = [1, { name: 'John', age: 30 }, true];

const [number, { name: personName }] = mixedData;
console.log(number, personName); // Output: 1 John

  
// 5....
// Destructuring with Functions: or array destructuring with functions

function getCoordinates() {
    return [10, 20];
  }
  
  const [x, y] = getCoordinates();
  console.log(x, y); // Output: 10 20
  

//   6...
// Destructuring Rest Parameter:

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first, rest); // Output: 1 [2, 3, 4, 5]

// 7...
// Object Destructuring with Functions Returning Objects:

function getUser() {
    return { username: 'john_doe', email: 'john@example.com' };
  }
  
  const { username, email } = getUser();
  console.log(username, email); // Output: john_doe john@example.com
  

//   8...
// nested array destructuring

const nestedArray = [1, [2, 3], 4];

const [a, [b, c], d] = nestedArray;
console.log(a, b, c, d); // Output: 1 2 3 4


//9...
// Nested Object Destructuring:

const user = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  const { name, age, address: { city, country } } = user;
  console.log(name, age, city, country); // Output: John 30 New York USA


//   10...
// Array Destructuring with Default Values and Renaming:

const numbers = [1, 2];

const [a, b, c = 3] = numbers;
console.log(a, b, c); // Output: 1 2 3

const [x, y, z = 3] = [4, 5];
console.log(x, y, z); // Output: 4 5 3

const [m, n, o = 3] = [6, 7, 8];
console.log(m, n, o); // Output: 6 7 8

  

// 11...
// Nested Destructuring with Functions Returning Objects:
function getPerson() {
    return {
      name: 'Alice',
      age: 25,
      address: {
        city: 'London',
        country: 'UK'
      }
    };
  }
  
  const { name: personName, age: personAge, address: { city: personCity, country: personCountry } } = getPerson();
  console.log(personName, personAge, personCity, personCountry); // Output: Alice 25 London UK

//   12...
// Destructuring with Dynamic Property Assignment and Default Values:
const user = {
    firstName: 'John',
    lastName: 'Doe',
    settings: {
      darkMode: true,
      notifications: false
    }
  };
  
  const { firstName, lastName, settings: { darkMode = false, notifications = true } } = user;
  console.log(firstName, lastName, darkMode, notifications); // Output: John Doe true false
  
  