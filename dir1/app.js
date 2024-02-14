        // data structure


// difference between destructing an array and object 

// const array = []; but destructing an array is cont [] = array; same applicable to an object




// when given a data and we need to work on it, we need to determine what type of data structure we are going to work on
// the data structure could be in form of (Array, Object Maps, and Set)

// for Array,( when working with array we will need to
// 1. we use forEach to iterate over the array
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
// 2. we use filter () to remove or filter from the array
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})
// 3. we use MAP 
//)to also iterate into the array and add properties into the new object created with map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);


// for Object data structures 
// we use MAP() AND SET ()  to work on the data structures

// spread operator (...arr) : Used to spread elements of an array or object into individual elements.
// it is used in array literals, function arguments, and object literals.

// Spread in Array
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // Outputs: [1, 2, 3, 4, 5]

// Spread in Function Arguments
function displayInfo(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = ['John', 30];
displayInfo(...person); // Outputs: Name: John, Age: 30

// Spread in Object Literal
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Outputs: { a: 1, b: 2, c: 3 }

// here it is joining the two defined variable

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// here it is converting a string to an array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// here it copy an object into a completely separate object, using the spread operator.

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) //  output is 201, 200.


// rest operator

// Rest Operator:

// Used in function parameter lists to collect the remaining arguments into an array.
// Collects individual elements into an array.

function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15


// converting a JSON PROPERTY TO Javascript because json is a string object properties 

// {'team':'name'} this is a JSON data structure
// const json = '{'team':'name'}'; storing the json to a variable
// JSON.parse(json)  using json.parse to convert the json string object to javascript object which will output {team: 'name'}
// const jsonJavascript = JSON.parse(json); it is already stored in to a variable which can then be manipulated in the dom


// converting javascript object to json script object we use JSON.stringify()
// to convert the previous example to json script object we then say it is JSON.stringify(jsonJavascript )
//
