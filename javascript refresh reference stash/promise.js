// Promises in JavaScript provide a way to work with asynchronous operations in a more organized and manageable manner. 
// They represent a value that may be available now, in the future, or never. Here are some examples of how promises work and their corresponding outputs:

// Basic promise method

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      // Resolving the promise with a value
      resolve('Promise resolved!');
    }, 2000);
  });
  
  // Consuming the promise
  myPromise.then((result) => {
    console.log(result); // Output: Promise resolved!
  }).catch((error) => {
    console.error('Error:', error);
  });

  
//   Output:
// After 2 seconds, the promise resolves with the value 'Promise resolved!', and the result is logged to the console.


// Example 2: Promise with Asynchronous Operation
// Function returning a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (fetching data)
      setTimeout(() => {
        const data = ['item1', 'item2', 'item3'];
        resolve(data);
      }, 1500);
    });
  }
  
  // Consuming the promise
  fetchData().then((data) => {
    console.log('Data:', data); // Output: Data: ['item1', 'item2', 'item3']
  }).catch((error) => {
    console.error('Error:', error);
  });
  
//   Output:
// After 1.5 seconds, the promise resolves with an array of data, and the data is logged to the console.


// Example 3: Chaining Promises
// Function returning a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (fetching data)
      setTimeout(() => {
        const data = ['item1', 'item2', 'item3'];
        resolve(data);
      }, 1500);
    });
  }
  
  // Chaining promises
  fetchData().then((data) => {
    console.log('Data:', data);
    return fetchData(); // Fetch data again
  }).then((data) => {
    console.log('Data:', data); // Output: Data: ['item1', 'item2', 'item3']
  }).catch((error) => {
    console.error('Error:', error);
  });

//   Output:
// After 1.5 seconds, the first promise resolves with an array of data, which is logged to the console. 
// Then, another data-fetching operation is initiated, and the newly fetched data is also logged to the console.


  
