// Object property shorthand is a feature in JavaScript that allows you to create objects more concisely by using variable names directly as property names. 
// This shorthand is particularly useful when you want to create an object with properties whose keys have the same names as variables in scope.

// Example 1:
const name = 'John';
const age = 30;

// Without property shorthand
const user1 = {
  name: name,
  age: age
};

// With property shorthand
const user2 = {
  name,
  age
};

console.log(user1); // Output: { name: 'John', age: 30 }
console.log(user2); // Output: { name: 'John', age: 30 }

// Example 2:
function createUser(name, age) {
  // Property shorthand in object creation
  return {
    name,
    age
  };
}

const newUser = createUser('Alice', 25);
console.log(newUser); // Output: { name: 'Alice', age: 25 }

// Example 3:
const prop1 = 'foo';
const prop2 = 'bar';

const obj = {
  [prop1 + prop2]: 'baz', // Computed property name
  prop1,
  prop2
};

console.log(obj); // Output: { foobar: 'baz', prop1: 'foo', prop2: 'bar' }


// In Example 1, both user1 and user2 objects have the same properties (name and age), but user2 is created using property shorthand, resulting in more concise code.
// In Example 2, the createUser function demonstrates using property shorthand to create an object with properties derived from function arguments.
// In Example 3, we showcase using property shorthand with computed property names, resulting in a property with a name derived from the concatenation of prop1 and prop2.