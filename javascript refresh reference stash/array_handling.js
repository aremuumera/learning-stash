//  Combining Arrays with Spread Operator:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
// Output: [1, 2, 3, 4, 5, 6]


// Copying Arrays with Spread Operator:

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
// Output: [1, 2, 3]


// Merging Arrays of Objects:
const users1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const users2 = [{ id: 3, name: 'Charlie' }, { id: 4, name: 'Diana' }];
const allUsers = [...users1, ...users2];
/* Output: 
[
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' }
]
*/



// Modifying Object Properties in an Array:

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  const updatedUsers = users.map(user => user.id === 2 ? { ...user, name: 'Bobby' } : user);
  /* Output: 
  [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bobby' },
    { id: 3, name: 'Charlie' }
  ]
  */
  

//   Flattening an Array of Arrays:

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = [].concat(...nestedArray);
// Output: [1, 2, 3, 4, 5, 6]


// Filtering an Array of Objects:

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  const filteredUsers = users.filter(user => user.age > 30);
  /* Output: 
  [
    { id: 3, name: 'Charlie', age: 35 }
  ]
  */
  

  // Grouping Objects in an Array by Property:

  const products = [
    { id: 1, category: 'Electronics', name: 'Laptop' },
    { id: 2, category: 'Electronics', name: 'Phone' },
    { id: 3, category: 'Clothing', name: 'Shirt' }
  ];
  const groupedProducts = products.reduce((groups, product) => {
    groups[product.category] = groups[product.category] || [];
    groups[product.category].push(product);
    return groups;
  }, {});
  /* Output: 
  {
    Electronics: [
      { id: 1, category: 'Electronics', name: 'Laptop' },
      { id: 2, category: 'Electronics', name: 'Phone' }
    ],
    Clothing: [
      { id: 3, category: 'Clothing', name: 'Shirt' }
    ]
  }
  */
  

//   Using arrow Function to Double Numbers:
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(num => num * 2);
// Output: [2, 4, 6]


// Using Arrow Function to Filter Odd Numbers:
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
// Output: [1, 3, 5]


//Using Arrow Function to Calculate Sum:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Output: 15

// Using Arrow Function to Check if All Elements are Even:
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(num => num % 2 === 0);
// Output: true

// Using Arrow Function to Check if Any Element is Negative:
const numbers = [1, 2, -3, 4, 5];
const hasNegative = numbers.some(num => num < 0);
// Output: true


// Using Arrow Function to Find Minimum Value:
const numbers = [10, 5, 20, 15];
const minNumber = numbers.reduce((min, num) => num < min ? num : min, Infinity);
// Output: 5


// Using Arrow Function to Find Maximum Value:
const numbers = [10, 5, 20, 15];
const maxNumber = numbers.reduce((max, num) => num > max ? num : max, -Infinity);
// Output: 20



// Using Arrow Function to Find Maximum Value
const numbers = [10, 5, 20, 15];
const maxNumber = numbers.reduce((max, num) => num > max ? num : max, -Infinity);
// Output: 20


// Using Arrow Function to Convert to Upper Case:
const fruits = ['apple', 'banana', 'orange'];
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// Output: ['APPLE', 'BANANA', 'ORANGE']

// Using Arrow Function to Calculate Product:
const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce((acc, num) => acc * num, 1);
// Output: 120

// Using Arrow Function to Remove Duplicates:
const numbers = [1, 2, 2, 3, 3, 4, 5];
const uniqueNumbers = numbers.filter((num, index, arr) => arr.indexOf(num) === index);
// Output: [1, 2, 3, 4, 5]


// Using Arrow Function to Check Prime Numbers:
const numbers = [1, 2, 3, 4, 5];
const primeNumbers = numbers.filter(num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
});


// Using Arrow Function to Check Prime Numbers:
const numbers = [1, 2, 3, 4, 5];
const primeNumbers = numbers.filter(num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
});
// Output: [2, 3, 5]

// Using Arrow Function to Calculate Fibonacci Series:
const fibonacci = n => {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
};
const fibonacciSeries = fibonacci(10);
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// Using Arrow Function to Shuffle Array:
const numbers = [1, 2, 3, 4, 5];
const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
// Output: Random permutation of numbers


// Using Arrow Function to Pad Array:
const numbers = [1, 2, 3];
const paddedNumbers = [...numbers, ...Array(5 - numbers.length).fill(0)];
// Output: [1, 2, 3, 0, 0]


// Using Arrow Function to Generate Unique ID:
const generateUniqueId = () => Math.random().toString(36).substr(2, 9);
const uniqueId = generateUniqueId();
// Output: Unique ID string

// Using Arrow Function to Sum Diagonals of Matrix:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const sumOfDiagonals = matrix.reduce((acc, row, index) => acc + row[index], 0);
// Output: 15 (1 + 5 + 9)


// Using Arrow Function to Flatten and Sum Array of Arrays:
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const sum = nestedArray.reduce((acc, arr) => acc + arr.reduce((sum, num) => sum + num, 0), 0);
// Output: 21 (1 + 2 + 3 + 4 + 5 + 6)



// Using Arrow Function to Reverse Words in a Sentence:
const sentence = 'The quick brown fox';
const reversedSentence = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// Output: 'ehT kciuq nworb xof'

// Using Arrow Function to Remove Leading Zeros from Numbers:
const numbers = ['001', '002', '003', '010', '100'];
const trimmedNumbers = numbers.map(num => String(parseInt(num, 10)));
// Output: ['1', '2', '3', '10', '100']

// Using Arrow Function to Calculate Average of Numbers:
const numbers = [10, 20, 30, 40, 50];
const average = numbers.reduce((acc, num, index, arr) => acc + num / arr.length, 0);
// Output: 30

// Using Arrow Function to Check if String is Palindrome:
const isPalindrome = str => str === str.split('').reverse().join('');
const palindromeCheck = isPalindrome('level');
// Output: true


// Using Arrow Function to Check if Array is Palindrome:
const isPalindrome = arr => arr.every((num, index) => num === arr[arr.length - 1 - index]);
const palindromeCheck = isPalindrome([1, 2, 3, 2, 1]);
// Output: true


// Using Arrow Function to Generate Prime Numbers:
const generatePrimes = n => {
  const primes = [];
  for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
};
const primeNumbers = generatePrimes(20);
// Output: [2, 3, 5, 7, 11, 13, 17, 19]

// Using Arrow Function to Rotate Array:
const rotateArray = (arr, k) => [...arr.slice(k), ...arr.slice(0, k)];
const rotatedArray = rotateArray([1, 2, 3, 4, 5], 2);
// Output: [3, 4, 5, 1, 2]


// Using Arrow Function to Calculate Factorial:
const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
const factorialValue = factorial(5);
// Output: 120


// Using Arrow Function to Generate Range of Numbers:
const range = (start, end) => [...Array(end - start + 1).keys()].map(num => num + start);
const numbersInRange = range(1, 10);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Using Arrow Function to Generate Power Set of Array:
const powerSet = arr => arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [value, ...set])), [[]]);
const set = [1, 2, 3];
const allSubsets = powerSet(set);
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


Using Arrow Function to Remove Falsy Values from Array:/
const removeFalsyValues = arr => arr.filter(Boolean);
const values = [0, 'hello', '', true, false, undefined, NaN, null];
const truthyValues = removeFalsyValues(values);
// Output: ['hello', true]


// Using Arrow Function to Generate Random Number in Range:
const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomNum = randomNumberInRange(10, 20);
// Output: Random number between 10 and 20 (inclusive)


// Using Arrow Function to Generate Random Unique IDs:
const generateUniqueId = () => Math.random().toString(36).substr(2, 9);
const uniqueIds = Array.from({ length: 10 }, generateUniqueId);
// Output: Array of 10 unique IDs


// Using Arrow Function to Create Array of Incrementing Numbers:
const incrementingArray = n => Array.from({ length: n }, (_, index) => index + 1);
const numbers = incrementingArray(5);
// Output: [1, 2, 3, 4, 5]

// Using Arrow Function to Truncate Array to Specified Length:
const truncateArray = (arr, length) => arr.slice(0, length);
const numbers = [1, 2, 3, 4, 5];
const truncatedNumbers = truncateArray(numbers, 3);
// Output: [1, 2, 3]

// Using Arrow Function to Capitalize First Letter of Each Word in a Sentence:
const capitalizeWords = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
const sentence = 'the quick brown fox';
const capitalizedSentence = capitalizeWords(sentence);
// Output: 'The Quick Brown Fox'

Using Arrow Function to Calculate Median of Numbers://
const calculateMedian = numbers => {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};


const median = calculateMedian([1, 2, 3, 4, 5]);
// Output: 3
// Using Arrow Function to Split Array into Chunks:
const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => arr.slice(index * size, (index + 1) * size));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunks = chunkArray(numbers, 3);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Using Arrow Function to Count Occurrences of Elements:
const countOccurrences = arr => arr.reduce((count, item) => {
  count[item] = (count[item] || 0) + 1;
  return count;
}, {});
const numbers = [1, 2, 3, 1, 2, 1];
const occurrences = countOccurrences(numbers);
// Output: { '1': 3, '2': 2, '3': 1 }

// Using Arrow Function to Calculate Standard Deviation:
const calculateStandardDeviation = numbers => {
  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  const variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / numbers.length;
  return Math.sqrt(variance);
};
const values = [10, 20, 30, 40, 50];
const standardDeviation = calculateStandardDeviation(values);
// Output: Standard deviation value


// Using Arrow Function to Find Last Index of Value in Array:
const findLastIndex = (arr, value) => arr.reduce((lastIndex, item, index) => item === value ? index : lastIndex, -1);
const numbers = [1, 2, 3, 4, 2, 5];
const lastIndex = findLastIndex(numbers, 2);
// Output: 4

// Using Arrow Function to Check Array Palindromicity:
const isPalindrome = arr => arr.every((num, index) => num === arr[arr.length - 1 - index]);
const palindromeCheck = isPalindrome([1, 2, 3, 2, 1]);
// Output: true


// Using Arrow Function to Sort Array of Objects by Property:
const sortByProperty = (arr, property) => arr.slice().sort((a, b) => a[property] - b[property]);
const users = [{ id: 3, name: 'Alice' }, { id: 1, name: 'Bob' }, { id: 2, name: 'Charlie' }];
const sortedUsers = sortByProperty(users, 'id');
// Output: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Charlie' }, { id: 3, name: 'Alice' }]


// Using Arrow Function to Shuffle Array:
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const numbers = [1, 2, 3, 4, 5];
const shuffledNumbers = shuffleArray(numbers);
// Output: Random permutation of numbers


// Using Arrow Function to Pick Random Element from Array:
const pickRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const randomFruit = pickRandomElement(fruits);
// Output: Random fruit from the array


// Using Arrow Function to Remove Duplicate Characters from String:
const removeDuplicates = str => str.split('').filter((char, index, arr) => arr.indexOf(char) === index).join('');
const text = 'hello';
const uniqueText = removeDuplicates(text);
// Output: 'helo'


// Using Arrow Function to Insert Element into Sorted Array:
const insertIntoSortedArray = (arr, element) => {
  const index = arr.findIndex(num => num > element);
  return index === -1 ? [...arr, element] : [...arr.slice(0, index), element, ...arr.slice(index)];
};
const sortedNumbers = [10, 20, 30, 40, 50];
const updatedSortedNumbers = insertIntoSortedArray(sortedNumbers, 25);
// Output: [10, 20, 25, 30, 40, 50]


// Using Arrow Function to Find Longest Word in Array:
const findLongestWord = arr => arr.reduce((longest, word) => word.length > longest.length ? word : longest, '');
const words = ['apple', 'banana', 'orange', 'grape'];
const longestWord = findLongestWord(words);
// Output: 'banana'


// Using Arrow Function to Generate Array of Dates within Range:
const generateDateRange = (startDate, endDate) => {
  const dates = [];
  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    dates.push(new Date(date));
  }
  return dates;
};
const datesInRange = generateDateRange(new Date('2024-01-01'), new Date('2024-01-05'));
// Output: Array of dates within the range


// Using Arrow Function to Remove Non-Unique Elements from Array:
const removeNonUniqueElements = arr => arr.filter((item, index, array) => array.indexOf(item) === array.lastIndexOf(item));
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeNonUniqueElements(numbers);
// Output: [1, 3, 5]


// Using Arrow Function to Generate Sequence of Even Numbers:
const generateEvenNumbers = n => Array.from({ length: n / 2 }, (_, index) => (index + 1) * 2);
const evenNumbers = generateEvenNumbers(10);
// Output: [2, 4, 6, 8, 10]
Using Arrow Function to Flatten and Sort Array:
javascript
Copy code
const flattenAndSortArray = arr => arr.flat().sort((a, b) => a - b);
const nestedArray = [[3, 2, 1], [7, 9, 8], [6, 5, 4]];
const sortedArray = flattenAndSortArray(nestedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Using Arrow Function to Find Longest Palindromic Substring:
const longestPalindromicSubstring = str => {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substr = str.substring(i, j);
      if (substr === substr.split('').reverse().join('') && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
};
const text = 'babad';
const longestPalindrome = longestPalindromicSubstring(text);
// Output: 'bab'
Using Arrow Function to Zip Two Arrays:
javascript
Copy code
const zipArrays = (arr1, arr2) => arr1.map((item, index) => [item, arr2[index]]);
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const zippedArray = zipArrays(array1, array2);
// Output: [['a', 1], ['b', 2], ['c', 3]]


// Using Arrow Function to Capitalize First Letter of String:
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const text = 'hello';
const capitalizedText = capitalizeFirstLetter(text);
// Output: 'Hello'
Using Arrow Function to Calculate Hamming Distance:
javascript
Copy code
const hammingDistance = (str1, str2) => {
  if (str1.length !== str2.length) return -1;
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) distance++;
  }
  return distance;
};
const string1 = 'karolin';
const string2 = 'kathrin';
const distance = hammingDistance(string1, string2);
// Output: 3


// Using Arrow Function to Calculate Levenshtein Distance:
const levenshteinDistance = (str1, str2) => {
  const matrix = Array.from(Array(str2.length + 1), () => Array(str1.length + 1).fill(0));
  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      if (str1[i - 1] === str2[j - 1]) matrix[j][i] = matrix[j - 1][i - 1];
      else matrix[j][i] = Math.min(matrix[j - 1][i - 1], matrix[j - 1][i], matrix[j][i - 1]) + 1;
    }
  }
  return matrix[str2.length][str1.length];
};
const string1 = 'kitten';
const string2 = 'sitting';
const distance = levenshteinDistance(string1, string2);
// Output: 3


Using Arrow Function to Generate Pascal's Triangle:
javascript
Copy code
const generatePascalsTriangle = numRows => {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];
    triangle[i][0] = triangle[i][i] = 1;
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  return triangle;
};
const numRows = 5;
const pascalsTriangle = generatePascalsTriangle(numRows);
// Output: Pascal's Triangle as a 2D array
Using Arrow Function to Swap Case of Characters in String:
javascript
Copy code
const swapCase = str => str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
const text = 'Hello World';
const swappedText = swapCase(text);
// Output: 'hELLO wORLD'





// Using Arrow Function to Flatten Object to Array of Key-Value Pairs:
const flattenObject = obj => Object.entries(obj).reduce((acc, [key, value]) => Array.isArray(value) ? [...acc, ...value.map(item => [key, item])] : [...acc, [key, value]], []);
const obj = { a: 1, b: [2, 3], c: 4 };
const flattenedArray = flattenObject(obj);
// Output: [['a', 1], ['b', 2], ['b', 3], ['c', 4]]


// Using Arrow Function to Remove Duplicates from Array of Objects:
const removeDuplicateObjects = arr => arr.filter((item, index, array) => array.findIndex(obj => obj.id === item.id) === index);
const objects = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 1, name: 'Alice' }];
const uniqueObjects = removeDuplicateObjects(objects);
// Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]


// Using Arrow Function to Calculate Running Total:
const runningTotal = arr => arr.reduce((totals, num) => {
  totals.push((totals.length ? totals[totals.length - 1] : 0) + num);
  return totals;
}, []);
const numbers = [1, 2, 3, 4, 5];
const totals = runningTotal(numbers);
// Output: [1, 3, 6, 10, 15]

// Using Arrow Function to Sum Diagonals of Matrix:
const sumDiagonals = matrix => matrix.reduce((sum, row, index) => sum + row[index], 0);
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const diagonalSum = sumDiagonals(matrix);
// Output: 15


// Using Arrow Function to Remove Null and Undefined Values from Array:
const removeNullAndUndefined = arr => arr.filter(Boolean);
const values = [1, null, 2, undefined, 3];
const cleanedValues = removeNullAndUndefined(values);
// Output: [1, 2, 3]


// Using Arrow Function to Capitalize Each Word in a Sentence:
const capitalizeWords = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
const sentence = 'the quick brown fox';
const capitalizedSentence = capitalizeWords(sentence);
// Output: 'The Quick Brown Fox'


// Using Arrow Function to Generate Random Unique ID:
const generateUniqueId = () => Math.random().toString(36).substr(2, 9);
const uniqueId = generateUniqueId();
// Output: Unique ID string


// Using Arrow Function to Generate Range of Numbers
const range = (start, end) => [...Array(end - start + 1).keys()].map(num => num + start);
const numbersInRange = range(1, 10);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using Arrow Function to Remove Empty Strings from Array:
const removeEmptyStrings = arr => arr.filter(str => str.trim());
const values = ['apple', '', 'banana', '  ', 'orange'];
const nonEmptyValues = removeEmptyStrings(values);
// Output: ['apple', 'banana', 'orange']


// Using Arrow Function to Flatten Nested Array:
const flattenArray = arr => arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
const nestedArray = [1, [2, [3, 4]], 5, [6]];
const flatArray = flattenArray(nestedArray);
// Output: [1, 2, 3, 4, 5, 6]


// Using Arrow Function to Split Array into Odd and Even Numbers:
const splitOddEven = arr => arr.reduce((split, num) => (num % 2 === 0 ? split.even.push(num) : split.odd.push(num)) && split, { odd: [], even: [] });
const numbers = [1, 2, 3, 4, 5, 6];
const oddEvenSplit = splitOddEven(numbers);
// Output: Object containing odd and even arrays



// Using Arrow Function to Generate Random Hex Color:
const randomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const color = randomHexColor();
// Output: Random hexadecimal color


// Using Arrow Function to Calculate GCD (Greatest Common Divisor):
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const a = 24;
const b = 36;
const greatestCommonDivisor = gcd(a, b);
// Output: 12


// Using Arrow Function to Rotate Matrix Clockwise:
const rotateMatrixClockwise = matrix => matrix[0].map((_, index) => matrix.map(row => row[index]).reverse());
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const rotatedMatrix = rotateMatrixClockwise(matrix);
// Output: Rotated matrix



// Using Arrow Function to Calculate Cumulative Sum:
const cumulativeSum = arr => arr.reduce((acc, num, index) => [...acc, num + (acc[index - 1] || 0)], []);
const numbers = [1, 2, 3, 4, 5];
const sums = cumulativeSum(numbers);
// Output: Cumulative sums array


// Using Arrow Function to Sort Array of Objects by Property (Descending):
const sortDescending = (arr, prop) => arr.slice().sort((a, b) => b[prop] - a[prop]);
const users = [{ id: 1, name: 'Alice', age: 30 }, { id: 2, name: 'Bob', age: 25 }, { id: 3, name: 'Charlie', age: 35 }];
const sortedUsers = sortDescending(users, 'age');
// Output: Sorted array of objects by age in descending order



// Using Arrow Function to Find Intersection of Arrays:
const arrayIntersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const intersection = arrayIntersection(array1, array2);
// Output: Intersection of two arrays


// Using Arrow Function to Generate UUID (Universally Unique Identifier):
const generateUUID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});
const uuid = generateUUID();
// Output: Universally unique identifier


