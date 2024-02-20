

// Scenario: Finding the Sum of Array Elements
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15


// Scenario: Filtering Odd Numbers from an Array
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]


// Scenario: Mapping Array Elements to Doubles
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(num => num * 2);
console.log(doubles); // Output: [2, 4, 6, 8, 10]


// Scenario: Checking if All Array Elements are Positive
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true




// Scenario: Finding the Maximum Element in an Array
const numbers = [1, 2, 3, 4, 5];
const max = Math.max(...numbers);
console.log(max); // Output: 5




// Scenario: Removing Duplicates from an Array
const numbers = [1, 2, 3, 2, 4, 5, 4];
const uniqueNumbers = Array.from(new Set(numbers));
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]




// Scenario: Flattening a Nested Array
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.flat();
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]


// Scenario: Sorting an Array of Objects by a Property
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 70 },
  { name: 'Charlie', score: 95 }
];
students.sort((a, b) => b.score - a.score);
console.log(students); // Output: [{ name: 'Charlie', score: 95 }, { name: 'Alice', score: 85 }, { name: 'Bob', score: 70 }]



// Scenario: Checking if Any Array Element is Negative
const numbers = [1, 2, -3, 4, 5];
const anyNegative = numbers.some(num => num < 0);
console.log(anyNegative); // Output: true



// Scenario: Reversing an Array
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]



// SO NOW I AM BREAKING IT ONE BY ONE 
// Array.reduce
// Array.reduce() is particularly useful when you need to perform complex transformations or aggregations on array elements. 
// It allows you to iterate over each element of the array and accumulate a single result.

// scenarios where i need to use it
// Summing up numbers in an array.
// Calculating the total price of items in a shopping cart.
// Finding the average of an array of numbers.
// Concatenating strings in an array.
// Counting occurrences of each item in an array.
// Flattening a nested array.
// Converting an array of objects into a single object with key-value pairs.
// Calculating the factorial of a number using an array of integers.
// Constructing a histogram from an array of values.
// Building a frequency distribution from an array of data.
// Creating a summary object from an array of objects.
// Calculating the total distance traveled based on an array of distances between points.
// Generating a unique list of values from an array.
// Accumulating statistics from an array of measurements.
// Parsing and aggregating data from a CSV file represented as an array of strings.
// Computing the cumulative sum of an array.
// Generating a summary report based on an array of data.
// Creating a lookup table from an array of objects.
// Collating data from multiple sources into a single dataset using an array of arrays.
// Creating a nested data structure from an array of keys and values.
// Building a tree structure from an array of nodes.
// Calculating the total duration of a series of time intervals stored in an array.
// Implementing custom aggregation functions for complex data analysis tasks.
// Processing data in a streaming fashion, updating the result incrementally as new data arrives.
// Generating a unique identifier (UUID) based on an array of bytes.
// Implementing a memoization cache to optimize recursive algorithms using an array.
// Constructing a multidimensional array from a flat array using dimensions provided as input.
// Implementing custom reducer functions for specific business logic requirements.
// Transforming data between different formats using a series of reducer functions.
// Combining data from multiple arrays into a single result, such as zippering two arrays together.


// 2.....
/// the filter method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Filtering even numbers from an array of integers.
// Removing duplicate elements from an array.
// Filtering out null or undefined values from an array.
// Finding all items in a shopping cart that are on sale.
// Selecting all products with a price higher than a certain threshold.
// Filtering out inactive users from a list of user objects.
// Removing all empty strings from an array of strings.
// Selecting all emails from an array of contact objects.
// Filtering out negative numbers from an array of integers.
// Selecting all items with a quantity greater than zero from an inventory array.
// Filtering out outliers from a dataset based on a specified range.
// Selecting all items in a todo list that are marked as completed.
// Filtering out items with a specific category from a list of products.
// Selecting all elements containing a specific substring from an array of strings.
// Filtering out expired coupons from a list of discount codes.
// Selecting all items with a rating above a certain value from a product review array.
// Filtering out items with a quantity less than a specified threshold.
// Selecting all tasks assigned to a specific user from a task list.
// Filtering out items older than a certain date from a list of events.
// Selecting all elements with a length greater than a specified value from an array of strings.
// Filtering out inactive products from an inventory based on their availability status.
// Selecting all transactions with an amount greater than a specified threshold from a financial dataset.
// Filtering out items with a specific tag from a list of blog posts.
// Selecting all elements that satisfy a custom predicate function from an array.
// Filtering out items based on multiple criteria, such as price and category.
// Selecting all elements with a property matching a regular expression from an array of objects.
// Filtering out items with a quantity greater than the available stock from an inventory array.
// Selecting all elements with a specific property value from an array of objects.
// Filtering out spam emails from an inbox based on sender information.
// Selecting all elements that pass a custom validation



// 3................................................................
//Map method

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It does not mutate the original array.
// It takes a callback function as its argument, which is executed for each element in the array, and returns a new value for that element.
// The new array returned by map() will have the same length as the original array.




// 4................................................................
// from method
// from() Method:
// The from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
// It allows you to create an array from array-like objects (such as arguments or NodeList) or iterable objects (such as Set or Map).
// It takes two optional arguments: a mapping function and an optional context object (this value) to be used when executing the mapping function.
// The mapping function allows you to transform each element during the creation of the new array.