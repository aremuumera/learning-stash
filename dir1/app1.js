      /// remember data types (string, boolean, number, symbol, undefined, null) are also called primitives and are copied by values
      /// white objects are reference types (object, reference, array) and they ae both copied by there object

      // Normally to access the something either dat or property we use . or ['d0t'] 
          // to add and remove object 

      function Circle (radius) {  // this is a constructor function and also an object oriented program
        this.radius = radius;
        this.draw = function (){
          console.log('draw')
        }
      }

      const circle = new Circle(10);
// to add or remove from the object we use either dot notation or bracket notation

// here we want to add data/property to the object or may be database

circle.location = {x: 1}; // we are accessing the circle object which is the new object created with the 'new' keyword and add the property (key value pairs) in the new object created
circle['location']= {x: 1}; // we are also accessing the circle object which is the new object created with the 'new' keyword but we are using the bracket notation instead of the dot notation and then and add the property (key value pairs) in the new object created

// if we want to access the property name/ key and give it a value we can access it by saving it to a variable and using the bracket notation to assign the value

const propertyName = 'center location';
circle[propertyName] = {x: 1};

// if we want to remove a property or data from an object or a database we use the delete operator amd reference the property name or followed by the property name








// Example of encapsulation
 // In encapsulation we create a class and inside it we store data(variables) and task (methods/function) 
 // inside the class which serve as a structure or blueprint on our we ca perform instances.... 

 // or It means bundling the data (variables) and the methods (functions) that operate on the data in a single unit called a class.
 class Car {
  
    constructor(brand, model) {
        // data defined for the car
      this.brand = brand; // the car brand is equal to brand
      this.model = model; // the car model is equal to model
    }

    // task (method) to get the data (brand) from the ca
    getBrand() {                // this is a method/ function to get the brand of a car which is brand
      return this.brand;          //    this return the brand of the car
    }
  
    // task (method) to get the data (model) from the car
    getModel() {                // this is to get the model of the car car 
      return this.model;        // this is to get the model of the car
    }
  }
  
  // now to create my own car after having a structure/ blueprint on how to create a car
  // Creating an instance of Car
  const myCar = new Car('Toyota', 'Camry');   // 

  Car.prototype.color = "red";  // this is also a way to write or add data or properties using .prototype.(the data or properties we want to add) to the class that was not in the class before
  // the prototype act like the base class constructor which accept properties and methods
  // Accessing data through public methods
  console.log(myCar.getBrand()); // Output: Toyota
  console.log(myCar.getModel()); // Output: Camry
  console.log(myCar.color); 

          // other ways of encapsulation
    // creating a private data which are (#private member and _private convention)

    // the privateProperty (#) is what the makes the data or property private and can be accessed using the get and set method 
    // THE privateConvention (_) is what makes the data or the property private and must not be used/accessed/modified but if the developer needs to access it it can be accessed using the get and set method 
    class myClasses {
      #privateProperty;    // thi is the private member used using the (#) keyword
  
      constructor(initialValue) {
          this.#privateProperty = initialValue;  // the this is used to accessed the private member property
      } 
  
      get privateProperty() {       // this is a get property and it is used to access the private member property
          // Additional logic if needed
          return this.#privateProperty;
      }
  
      set privateProperty(newValue) {     // this is a set property and it is used to modify the value of the private member property
          // Validation logic if needed
          this.#privateProperty = newValue;
      }
  }
  
  const myObjects = new myClasses ('initialValue');       // creating an instance of the a object 
  console.log(myObjects.privateProperty); // Accessing through the getter
  myObjects.privateProperty = 'newValue'; // Modifying through the setter
            
          // Another private member or keyword which is private convention
  // this is a private convention method '_' using the get method to access the property with its value
  
  class myRoom {
    _privateVariable;

    constructor(value) {
        this._privateVariable = value;
    }

    getPrivateVariable() {
        return this._privateVariable;
    }
}

const myPalor = new myRoom('initialValue');   // this is creating an instance of MyClass object with the value set to the initial  
console.log(myPalor.getPrivateVariable()); // Outputs: initialValue   but this is an instance of MyClass object value save to myobject variable and accessed through get method in the constructor


// this is a private convention method '_' using the set method to modify the value that has been gotten using the get method
class AnotherClass {
  _privateVariable;

  constructor(value) {
      this._privateVariable = value;  
  }

  setPrivateVariable(newValue) {
      // Additional logic or validation can be added here
      this._privateVariable = newValue;
  }
}

const anotherObject = new AnotherClass('initialValue');  // this is the an instance of the new AnotherClass object that access the constructor data and gives it its own value and save it to a variable
anotherObject.setPrivateVariable('newUpdatedValue');  // this is also the an instance of the new AnotherClass object variable that get accessed by using the setPrivateVariable
console.log(anotherObject._privateVariable); // Outputs: newUpdatedValue





  



                // Example of inheritance
// In instances we have a class with a constructor which carry the data 
// and the method/function which carries the task


class Animal {
    constructor(name) {
      //  data defined for animal
      this.name = name;
    }
  
    // task (method) defined for the animal to carry 
    makeSound() {
      console.log('Some generic sound');
    }
  }
  
 // creating an inheritance using extends where the dog inherit the animal data(properties), method ( that is every task the animal must carry out)
  class Dog extends Animal {
    // Dog inherits from Animal
    makeSound() {
      console.log('Woof! Woof!');
    }
  
    fetch() {
      console.log('Fetching the ball');
    }
  }
  
  // Creating instances of Animal and Dog
  const genericAnimal = new Animal('Generic Animal');
  const myDog = new Dog('Buddy');
  
  // Using inherited methods
  genericAnimal.makeSound(); // Output: Some generic sound
  myDog.makeSound(); // Output: Woof! Woof!
  
  // Using Dog-specific method
  myDog.fetch(); // Output: Fetching the ball
  



                          // Example of polymorphism
    // In polymorphism we will first create a class (main or base class) which contains the properties data and the methods (functions)  
    // then we will create a derived class which is an inheritance  then we call the class name  of the derived class or create an instances
    // by from both the main and the derived class which is for the polymorphism 

   // main or base class
class Shape {
    area() {
      return 'Area calculation not implemented';
    }
  }
  

  // derived class from the main class and also the inheritance aspect

  // inheritance one for the first type of shape 
  class Circle extends Shape {
    constructor(radius) {
      super();  // it is used to call the constructor properties eg..(brand, model) of the main class and also to call the methods of the main class
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
   // inheritance 2 for the second type of shape 

  class Square extends Shape {
    constructor(side) {
      super();      // it is used to call the constructor properties eg..(brand, model) of the main class and also to call the methods of the main class
      this.side = side;
    }
  
    area() {
      return this.side ** 2;
    }
  }
  

  // THIS IS THE polymorphism aspect 
  // Creating instances of Circle and Square
  const myCircle = new Circle(5);  // the polymorphism here is creating a new instance by calling the inheritance class name
  const mySquare = new Square(4);
  
  // Using polymorphism with the area method
  console.log(myCircle.area()); // Output: 78.53981633974483
  console.log(mySquare.area()); // Output: 16
  


                         // Example of abstraction

class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
    }
  
    // Abstract method to be implemented by subclasses
    withdraw(amount) {
      throw new Error('Method not implemented');
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    checkBalance() {
      console.log(`Balance for ${this.owner}: $${this.balance}`);
    }
  }
  
  class SavingsAccount extends BankAccount {
    // Implementing the abstract withdraw method
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      } else {
        console.log('Insufficient funds');
      }
    }
  }
  
  // Creating instances of BankAccount and SavingsAccount
  const mySavingsAccount = new SavingsAccount('John Doe', 1000);
  
  // Using abstraction with the withdraw method
  mySavingsAccount.deposit(500);
  mySavingsAccount.checkBalance();
  mySavingsAccount.withdraw(200);
  mySavingsAccount.checkBalance();
  




  // we can also have case where by there is another constructor in the inheritance class or the derived class

  // this is the main class 
  class Animals {
    constructor(color = 'yellow', energy = 100) { /// this is a contructor with properties of the class as the parameter
        this.color = color; // this is used to access the class property as the animal color is = color
        this.energy = energy;
    }
    isActive() {   // this is a method that has the assigned to the base class
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {        // this is another method that has the assigned to the base class
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {       // this is another method that has the assigned to the base class
        console.log(this.color)
    }
}

class Cat extends Animals {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}


// this are subclass known as the inheritance  which uses extend to inherit the data of the the base class (Animal) 
//and super which is used to call or bring the paramter of the base class into each of the subclass 

class Cats extends Animals {
  constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {  // this is the constructor of a subclass or derived class which has its own sound, canJumpHigh, canClimbTrees but inherit the color and energy properties from the parent class
      super(color, energy);
      this.sound = sound;
      this.canClimbTrees = canClimbTrees;
      this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
      console.log(this.sound); 
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {    // this is the constructor of a subclass or derived class which has its own sound, canJumpHigh, canClimbTrees but inherit the color and energy properties from the parent class
      super(color, energy);  // after we have inherited the properties from the parent or base class to the constructor of the derived class or subclass we use super to call it before can be able to use it we can access using this
      this.sound = sound;
      this.canFly = canFly;
  }
  makeSound() {
      console.log(this.sound);
  }
}

// this is a child-subclass of the subclass of the animal parent or base class AND ALSO THIS IS ALSO A CHILD INHERITANCE OF HE DIRECT SUBCLASS
class HouseCat extends Cat { // in this case the houseCat inherit data or properties from the cat using the extends
  constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
      super(sound,canJumpHigh,canClimbTrees, color,energy);
      this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
      if (option) {
          super.makeSound();
      }
      console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {   // in this case the houseCat inherit data or properties from the cat using the extends
  constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
      super(sound,canJumpHigh,canClimbTrees, color,energy);
      this.tigerSound = tigerSound;
  }
  makeSound(option) {
      if (option) {
          super.makeSound();
      }
      console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound,canFly, color,energy) {
      super(sound,canFly, color,energy);
      this.canTalk = canTalk;
  }
  makeSound(option) {
      if (option) {
          super.makeSound();
      }
      if (this.canTalk) {
          console.log("I'm a talking parrot!");
      }
  }
}


/// NOW WE CAN CREATE AN INSTANCE OR WE OWN PERSONAL OBJECT OR SOMETHING WE WANT TO OWN OR HAVE

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.super(isActive()); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!



// any function that contains a "this" keyword is a constructor function and also contain parameter which serves as the properties /
// this type of function allow us to cretae an instance using the "new" keyword and a method whereby we replace the parameter with a the actual words we wan to call it
//


// the aspect of methods is that they are declared function with object eg "someMethod () { /* ... where we write the object codes*/ }"




// also in oop we have differnt ways of creating an object which are factory and constructor functions

// factorial functions
 
function createCircle (radius) {  // here we are creating a circle an object function with radius as the parameter and returning its task
  return {
    radius: radius,
    radius, // instead of writing it this way radius: radius, we can also write it this way radius, in other not to call noise as the key and values are the same pairs
    draw: function (){
      console.log('draw');
    }
  }
}

createCircle (1); // on factory function we call the function and give it an argument or a real value to replace the parameter 

// constructor function


function Circle (radius) {  // this is a constructor function which takes capital letter as the first letter of the name of the name function
      this.radius = radius;  // in constructor function we use the this keyword to set the property of the object or reference the name of the object function inside the constructor function and we then set it to the parameter or argument of the  constructor function 
      this.draw = () => {  // also in cf this 
        console.log('draw');
      }
}

const another =  new Circle(1);  // on the constructor function we call the cf or create a new instance of an object by using a 'new' keyword and giving it an argument or a real value like we did for the factorial function 
// also we this instance is used to create an empty object, it will used this to set it value into the object.


// every object created with a 'new' keyword is has a constructor property referred from the constructive function because in cf we have the (property and the method)

// therefore, the another variable is a will be like this (console.log(john.constructor); // Outputs: [Function: Person])