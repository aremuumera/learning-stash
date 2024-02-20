// An async function is a function that operates asynchronously via the event loop, using the async keyword.
// It allows you to write asynchronous code in a synchronous style.

// Async Syntax
//An async function is a function that operates asynchronously via the event loop, using the async keyword. 
//It allows you to write asynchronous code in a synchronous style.

async function functionName(parameters) {
    // Async operations
    return value; // Resolves the promise with value
  }
  

// Await Operator Syntax:
// The await keyword is used inside async functions to pause execution and wait for a promise to settle. 
//It can only be used inside an async function.

const result = await promise;

// example on how to use async keyword
// Asynchronous function using async/await
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
  }
  
  // Calling the async function
  fetchData().then(data => { // This code fetches data from an API endpoint using async/await and logs the result to the console.
    console.log(data);
  });
  

// Example with Error Handling from async opertion


async function fetchDataWithErrorHandling() {
    try { // try can catch method to handle error handling
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error:', err.message); 
    }
  } // This code fetches data from an API endpoint using async/await and includes error handling using a try-catch block. // what if there is another type of error where by the request reaches the server but the endpoint we are trying to fetch doesn't exist or the request is denied 
  
  // Calling the async function with error handling
  fetchDataWithErrorHandling().then(data => {
    console.log(data);
  });

  
//   Example with Multiple Concurrent Requests:

async function fetchMultipleData() {
    const [userData, postData] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json()),
      fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json())
    ]);
    return { userData, postData };
  }
  
  // Calling the async function to fetch multiple data concurrently
  fetchMultipleData().then(({ userData, postData }) => {
    console.log('User Data:', userData);
    console.log('Post Data:', postData);
  });

//   This code fetches user data and post data concurrently from separate API endpoints using async/await and Promise.all(), then logs both sets of data to the console.

// Suppose I have a scenario where I need to fetch user data, post data, and comments related to a specific post from an API. 
//I will use async/await to perform these operations in a synchronous-like manner.

  // Function to fetch user data // i will first fetch the user data
async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    return await response.json();
  }
  
  // Function to fetch post data // i will then fetch the post data
  async function fetchPostData(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post data');
    }
    return await response.json();
  }
  
  // Function to fetch comments for a post // then i will fetch the comments
  async function fetchComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return await response.json();
  }
  
  // Main function to orchestrate fetching user, post, and comments // i will then create a function to handle the data, error and get a param for each user using the userID AND POSTID
  async function fetchData(userId, postId) {
    try {
      const userData = await fetchUserData(userId);
      console.log('User Data:', userData);
  
      const postData = await fetchPostData(postId);
      console.log('Post Data:', postData);
  
      const comments = await fetchComments(postId);
      console.log('Comments:', comments);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Calling the main function to fetch data
  fetchData(1, 1); // Assuming userId = 1 and postId = 1
  