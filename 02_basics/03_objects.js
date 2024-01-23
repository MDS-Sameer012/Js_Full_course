// @ singleton
// # when we create object by constructor then it is created as singleton(unique of it's type)
// # when we create obj by literals then it is not created as singleton
// # apart from this there is no such difference between both methods 
// # we will see singleton in future

// @ creating obj by constructor
// Object.create();

// @ creating obj by Object literal

let mySymbol = Symbol("key1");
let student = {
    name: "Sameer",
    age : 20,
    email : "sameer@gmail.com",
    "permanent address": "32/37A,gali no.10 , bhikam Singh Colony , Delhi-110032",
}
// NOTE : all the keys are treated as string on backend

// console.log(student);
// --> Output : {
//   name: 'Sameer',
//   age: 20,
//   email: 'sameer@gmail.com',
//   'permanent address': '32/37A,gali no.10 , bhikam Singh Colony , Delhi-110032'
// }

// <1> if our key contains space in between then we need to surround it by inverted commas
let student2 = {
    // correspondese address: "Shanti mohalla , india", // --> Output : this will give error
    "permanent address" : "Gandhi nagar , Delhi India"
}

// <2> creating symbol as key of object 
let mySymbol2 = Symbol("My Symbol");

let myObj = {
    mySymbol2: "Normal Way",
    [mySymbol] : "Special Way" // --->  way to create symbol as key
}
// console.log(myObj); // --> Output : { mySymbol2: 'Normal Way', [Symbol(My Symbol)]: 'Special Way' } //--> in this in output also it is specified as symbol

// console.log(myObj.mySymbol2); // --> Output : Normal Way
// console.log(typeof myObj.mySymbol2); // --> Output : String


// if we try to access symbol in normal way then it will give error

// console.log(myObj.mySymbol); // --> Output : undefined
// console.log(typeof myObj.mySymbol); // --> Output : undefined

// way to access Symbol key from object 

// console.log(myObj[mySymbol]); // --> Output : special way
// console.log(typeof myObj[mySymbol]); // --> Output : string

// <4> accessing key value of object
// # 1st Way
// console.log(student.name);  // --> Output : sameer
// console.log(student.email);  // --> Output : sameer@gmail.com

// NOTE : but we can't use this if our key has space between it 

// console.log(student.permanent address); // --> Output : this will give error 
// console.log(student."permanent address"); // --> Output : this will give error 

// #correct way
// console.log(student["permanent address"]); // --> Output : 32/37A,gali no.10 , bhikam Singh Colony , Delhi-110032 

// # 2nd way 
// console.log(student[roll]);  // --> Output : this will give error we need to specify key in inverted commas when using this method
// console.log(student["age"]);  // --> Output : 20

// <5> Object.freeze() // --->   it will prevent to make change in freezed object once we freeze object it will not be modified

let obj = {
    name: "Mukesh",
    age : 39
}
// console.log(obj); // --> Output : { name: 'Mukesh', age: 39 }

obj.name = "Suresh"; // --->  it will change name
// console.log(obj); // --> Output : { name: 'Suresh', age: 39 }

Object.freeze(obj);

obj.name = "Vivek"; // --->  it will not change name as it is freezed
// console.log(obj); // --> Output : { name: 'Suresh', age: 39 }

// <6> function as object member

let employee = {
    name: "Sameer",
    age: 24,
    greet: function () {
        console.log(`Hi I am ${this.name} and I am ${this.age} year Old`); // --->  we need to use this keyword otherwise it will throw error
    }
}
console.log(employee); // --> Output : { name: 'Sameer', age: 24, greet: [Function: greet] }

console.log(employee.greet); // --> Output : [Function: greet]

console.log(employee.greet()); // --> Output : Hi I am Harry and I am 24 year Old
// undefined 

// in this function we also get undefined so to avoid this we need to explicitly return desired value from function otherwise it will return default [undefined] value

employee.mood = function () {
    return `Hi I am ${this.name} and I am very Happy !`;
}

console.log(employee.mood); // --> Output : [Function (anonymous)]
console.log(employee.mood()); // --> Output : Hi I am Sameer and I am very Happy ! [ it will not return undefined as we expilicitly return some value]