const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized url // getting the exact url
console.log(myUrl.href);        // print out this http://mywebsite.com/hello.html?id=100&status=active
console.log(myUrl.toString()); // print out this http://mywebsite.com/hello.html?id


// to get the host (root domain)
console.log(myUrl.host); // print out this mywebsite.com

//HOST NAM... in this case it does not require to get the port
console.log(myUrl.hostname);  // print out this mywebsite.com


// path name...    this is the path name of the url
console.log(myUrl.pathname); // print out this /hello.html

// serialized query... exact query or search parameters
console.log(myUrl.search); // eg print out this ?id=100&status=active

// param object.. this will create or convert the parameters into object 
console.log(myUrl.searchParams); // print out this { 'id' => '100', 'status' => 'active' }

//to add param or append more parameters  into the searchparams or query 
myUrl.searchParams.append('abc', '123'); // the searchParams is append the key value pairs which key:abc value:123
console.log(myUrl.searchParams) // after appending it will print out the updated parameters

// loop through the params
myUrl.searchParams.forEach((value, key) => console.log(`${key}: ${value}`))





// from cgpt

const url = require('url');

// Example URL
const myUrl = new URL('http://example.com/path/to/page?query=string&id=123');

// Getting the protocol
console.log(myUrl.protocol); // Outputs: 'http:'

// Getting the username and password (if provided)
console.log(myUrl.username); // Outputs: ''
console.log(myUrl.password); // Outputs: ''

// Getting the full URL (excluding hash fragment)
console.log(myUrl.origin); // Outputs: 'http://example.com'

// Getting the hash fragment
console.log(myUrl.hash); // Outputs: ''

// Setting a hash fragment
myUrl.hash = 'section1';
console.log(myUrl.href); // Outputs: 'http://example.com/path/to/page?query=string&id=123#section1'

// Getting the search parameters as a string
console.log(myUrl.search); // Outputs: '?query=string&id=123'

// Getting a specific search parameter
console.log(myUrl.searchParams.get('query')); // Outputs: 'string'

// Deleting a search parameter
myUrl.searchParams.delete('id');
console.log(myUrl.href); // Outputs: 'http://example.com/path/to/page?query=string'

// Check if a search parameter exists
console.log(myUrl.searchParams.has('query')); // Outputs: true
console.log(myUrl.searchParams.has('id')); // Outputs: false

// Setting a search parameter
myUrl.searchParams.set('newParam', 'value');
console.log(myUrl.href); // Outputs: 'http://example.com/path/to/page?query=string&newParam=value'

// Clearing all search parameters
myUrl.searchParams.delete('query');
myUrl.searchParams.delete('newParam');
console.log(myUrl.href); // Outputs: 'http://example.com/path/to/page'

// Parsing a URL string
const parsedUrl = url.parse('https://www.example.com:8080/path/to/page?query=string#section1');
console.log(parsedUrl); // Outputs: Parsed URL object containing properties such as protocol, hostname, port, pathname, search, hash, etc.
