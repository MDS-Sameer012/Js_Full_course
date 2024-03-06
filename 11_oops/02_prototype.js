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

// console.log(sameer.prototype); // --> Output : undefined [as sameer is a instance of Person not a constructor function like Person]
// console.log(Person.prototype);  // --> Output : { sayHello: [Function (anonymous)] }
// console.log(Object.getPrototypeOf(sameer)); // --> Output : { sayHello: [Function (anonymous)] }

//********************************************************
// <2> Object.getPrototypeOf(obj)   // ---> it will return the prototype of obj, which is the object associated with the constructor function's prototype from which obj is created. We can say obj is an instance of that constructor function, and obj inherits properties and methods from the prototype.


//********************************************************

function multipleBy5(num){

    this.result=num*5 ; // --->  uncomment this line and comment below line to make this function a constructor function still it is not a constructor function but even after doing the defined process it never become typicall constructor function because it return value other than object
    // return num*5
}

multipleBy5.power = 2; // --->  it is specific to function and doesn't shared among the instances of that function

multipleBy5.prototype.sameer = 'sameer'; // --->  it is shared among the instances of function and it is property of prototype of function

// console.log(multipleBy5(5)); // --> Output : 25
// console.log(multipleBy5.power);  // --> Output : 2
// console.log(multipleBy5.prototype);  // --> Output : sameer

const example =new multipleBy5(3);
// console.log(example.result); // --> Output : 15
// console.log(example.power);  // --> Output : undefined
// console.log(example.prototype);  // --> Output : undefined
// console.log(example.sameer);  // --> Output : sameer

//********************************************************
// <3> Setting prototype property of built in datatypes like object , array etc    // ---> any datatype in js at the last it is object

const myArray = [1, 3, 4, 3,6,3,3,3]; // --->  now in this we use builtin properties like forEach , length etc. but we also define our property for all arrays

// myArray.length = 45 // --->  it will set array length to 45 and push <41 empty items> 
// console.log(myArray.length); // --> Output : 45
// console.log(myArray); // --> Output : [ 1, 3, 4, 3, <41 empty items> ]

// like this :
// if we want to access property like Array.length not like arr.length() so we define like below
Object.defineProperty(Array.prototype, 'numberOfDivisibleOfThree', {
    get: function () {
        const divisibleOfThree = [];
        this.forEach((num) => {
            if (num % 3 === 0) {
                divisibleOfThree.push(num);
            }
        })
        return divisibleOfThree.length;
    }
})

// console.log(myArray.numberOfDivisibleOfThree);

//********************************************************
// <4> single level inheritance of objects using [__proto__]   // ---> 

const KeypadPhone = {
    brand: 'Samsung',
    makeCall: true,
    sendMessage: true,
    listenMusic : true
}

const SmartPhone = {
    camera: true,
    watchVideo: true,
    internetConnectivity: true,
    fastCharging : true
}
SmartPhone.__proto__ = KeypadPhone;
// now we can access property of SmartPhone as well as KeypadPhone

// console.log(SmartPhone.fastCharging); // --> Output : true [ own property]
// console.log(SmartPhone.listenMusic); // --> Output : true [ KeypadPhone Property]

const GamingPhone = {
    heavyGaming : true
}
GamingPhone.__proto__ = SmartPhone;

// console.log(GamingPhone.heavyGaming);  // --> Output : true [ Own property]
// console.log(GamingPhone.fastCharging);  // --> Output : true [ SmartPhone property]
// console.log(GamingPhone.makeCall);  // --> Output : true [ keypadPhone property] as Smartphone inherit keypadPhone
