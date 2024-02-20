// The rest operator allows you to represent an indefinite number of arguments as an array. 
// It collects the remaining arguments into an array.


// Example with function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  console.log(sum(10, 20)); // Output: 30
  

  // rest operator destructuring
  const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;
console.log(first, rest); // Output: 1 [2, 3, 4, 5]


// Merging Objects with Spread Operator:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }


// Spread Operator with Objects and Computed Property Names:
const key = 'c';
const obj1 = { a: 1, b: 2 };
const obj2 = { [key]: 3 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3 }















  //Spread Operator:
//The spread operator allows you to expand an iterable (e.g., array, string, or object) into individual elements. 
// It is used to spread elements into another array, object, or function call.

// Example with Arrays:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// examples with objects

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }


// Spread Operator with Function Arguments:

function multiply(a, b, c) {
    return a * b * c;
  }
  
  const values = [2, 3, 4];
  console.log(multiply(...values)); // Output: 24



// Rest Operator with Nested Destructuring:

const numbers = [1, 2, [3, 4], 5];

const [first, second, [third, fourth], ...rest] = numbers;
console.log(first, second, third, fourth, rest); // Output: 1 2 3 4 [5]
