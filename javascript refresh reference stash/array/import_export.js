// export syntax
// Named export syntax
export const variableName = value;
export function functionName() { /* function body */ }
export class ClassName { /* class body */ }

// Default export syntax
export default expression; // expression can be a value, variable, function, or class


// Import syntax

// Importing named exports
import { variableName } from 'module-name';
import { functionName } from 'module-name';
import { ClassName } from 'module-name';

// Importing default export
import defaultExport from 'module-name';

// Importing named exports with aliases
import { variableName as alias } from 'module-name';


// Importing named and default exports together
import defaultExport, { namedExport1, namedExport2 } from 'module-name';


// Importing all named exports as an object
import * as moduleAlias from 'module-name';



// here are the examples for both the import syntax and export syntax from two file


// for math.js file i exports

// Named export: Function to add two numbers
export function add(a, b) {
    return a + b;
  }
  
  // Named export: Function to subtract two numbers
  export function subtract(a, b) {
    return a - b;
  }
  
  // Default export: Function to multiply two numbers
  export default function multiply(a, b) {
    return a * b;
  }

  
// for index.js i imports

// index.js

// Importing named exports from math.js
import { add, subtract } from './math.js';


// Importing default export from math.js
import multiply from './math.js';


// Using the imported functions
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 7)); // Output: 3
console.log(multiply(2, 4)); // Output: 8


//more examples 

// Exporting named variables, functions, and class
export const variable1 = 10;
export function greet(name) {
  return `Hello, ${name}!`;
}
export class Person {
  constructor(name) {
    this.name = name;
  }
}

// Exporting default value
const defaultValue = 'Default value';
export default defaultValue;



// 
// Importing named variables, functions, and class
import { variable1, greet, Person } from './module1';

// Importing default export
import defaultValue from './module2';

// Importing named exports with aliases
import { variable1 as var1, greet as sayHello } from './module1';

// Importing default export along with named exports
import defaultExport, { variable1, greet } from './module';

// Importing all named exports as an object
import * as moduleAlias from './module1';



