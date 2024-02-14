// const person1 = require('./person'); // here i am using require to imports anything from the person file (using "./person") but if it is folder ('person')
 
// console.log(person1);
// const Person = require('./person');
// const person2 = new Person('John Doe', 30); // instiating or creating a new person or new instance as we have a blueprint for what a person should be 

// person2.greeting(); //after creating the new instance or new person with the property/ blueprints in the class constructor, we then need to call function/task of what the person will do or anything assign to the method or function


// const Logger = require('./logger');

// const logger = new Logger(); // creating an instance from the blueprint we have in the logger.js file

// // creating an event listener 

// //first event listener
// logger.on('message', (data) => console.log(`Called Listeners: ${data}`));

// //second event listener
// logger.on('events', (param) => console.log('i listen on mesas:',param));

// logger.on('message', (para) => console.log('i  am yet to listen on mesas:',para));

// // third event listener
// logger.on('event', (par) => console.log('i have mesas:', par));


// // the invoking of all the listener with the help of the class
// logger.log('message', 'events');
// logger.log('your messages');
// logger.cog('Hello world');



// the use of destructuring while importing

// const eyx = require('./person');  // i am importing the people object in the index file to the person file


// console.log(eyx); // this is output the key value pairs

// console.log(eyx.people, eyx.ages); // this is output the each of the values of the key

// but a nice way to import multiple properties or things from a file is by using destructuring method

// so here is the destructuring method

const {people, ages} = require('./person'); // here is the destructuring method

console.log(people, ages);