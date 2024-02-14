// this is a module wrapper function 
// (function (exports, require, module, __filename, __dirname) {

// })  //Dynamically we are wrapped around this function

const person1 = {  //a property to export
    name: 'John',
    age: 34,
};

class Person { // b property to export
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting (){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }

}

// using destructing to receive the exported object


// first property to export
const people = ['yos', 'ryu', 'fred', 'marc'];

// second property to export 
const ages = [23, 12, 34, 45, 67];





console.log(people);
console.log(ages);


// exporting each property in the file one by one
module.exports = person1; // this is to exports the object in this file (it is a file and not a module or folder)
module.exports = Person; // this is to exports the object in

// i can export all the property in form of an object
module.exports = {
    people, ages
}; 