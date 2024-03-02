const obj = {};
const arr = [];

// console.log(Object.getPrototypeOf(obj));  // --> Output : [Object: null prototype] {}
// console.log(Object.getPrototypeOf(arr));  // --> Output : Object(0) []
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr)));  // --> Output : [Object: null prototype] {}
// console.log(obj.prototype) // --> Output : undefined

//**********************[important]**********************************
// const Person = (name) => { //---> this doesn't work as constructor function because arrow functions doesn't have this context but they refer to the enclosed parent
//     this.name = name;
//     return this;
// }

function Person(name) {
    this.name = name;
}
// console.log(Person); // --> Output : [Function: Person]
// console.log(typeof Person); // --> Output : function
// console.log(Person.prototype); // --> Output : {}
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Person))); // --> Output : [Object: null prototype] {}

//************************[creating a prototype of object]********************************
Person.prototype.sayHello = function () {
    console.log(`Hello I am ${this.name}`);
}
const sameer = new Person('sameer');
const sohail = new Person('sohail');
// console.log(sameer.name); // --> Output : sameer
// sameer.sayHello(); // --> Output : Hello I am sameer
// sohail.sayHello(); // --> Output : Hello I am sohail

//********************************************************
/* <> constructorFunction.prototype   // ---> it is used to get the properties of the constructor function */

console.log(sameer.prototype); // --> Output : undefined [as sameer is a instance of Person not a constructor function like Person]
console.log(Person.prototype);  // --> Output : { sayHello: [Function (anonymous)] }
console.log(Object.getPrototypeOf(sameer)); // --> Output : { sayHello: [Function (anonymous)] }

//********************************************************
// <2> Object.getPrototypeOf(obj)   // ---> it will return the prototype of obj, which is the object associated with the constructor function's prototype from which obj is created. We can say obj is an instance of that constructor function, and obj inherits properties and methods from the prototype.


