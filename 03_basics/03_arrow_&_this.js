//********************************************************
// <1> this keyword   // ---> it is used to refer to the current instance

let student = {
    name: "Sameer",
    aim: "Full Stack Developer",
    age: 20,
    city: "Delhi",
    intro: function () {
        // return `Hi , I am ${name} . I am ${age} years and I live in ${city} . I want to become ${aim}`; // --->  it will throw an error 
        return `Hi , I am ${this.name} . I am ${this.age} years and I live in ${this.city} . I want to become ${this.aim}`;
    },
    thisInObj: function () {
        return this;
    }
}

// console.log(student.intro); // --->  it will not run function it will only provide reference to function 
// --> Output : [Function: intro]

// console.log(student.intro());  // --> Output : Hi , I am Sameer . I am 20 years and I live in Delhi . I want to become Full Stack Developer

student.aim = "Software Engineer";

// console.log(student.intro());  // --> Output : Hi , I am Sameer . I am 20 years and I live in Delhi . I want to become Software Engineer

// console.log(student.thisInObj()); // --->  this will point to current context of obj
// --> Output : {
//   name: 'Sameer',
//   aim: 'Full Stack Developer',
//   age: 20,
//   city: 'Delhi',
//   intro: [Function: intro],
//   thisInObj: [Function: thisInObj]
// }

//********************************************************
// <2> this keyword in functions   // ---> lets check how this keyword work in functions

function func1() {
    return this;
}

// console.log(func1()); // --->  this keyword will give various values in function 
// {// --> Output : <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }
// @MDS-Sameer012 ➜ /workspaces/Js_Full_course (main) $ node 03_basics/03_arrow_\&_this.js 
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }}

// console.log(this);

const func2 = function () {
    return this;
}
const func3 = () => {
    return this;
};
// console.log(func2()); //--> this will give same output as normal function 
// console.log(func3()); // --> Output : {} this will return empty string

//********************************************************
// <3> will this keyword point to current context of function like Object   // ---> let see

function greet() {
    const dish = "Dosa";
     console.log(this.dish); // --->  this will not point to dish and will return undefined
}
// greet(); // --> Output : undefined

const greet2 = function(){
    const dish = "Dosa"
    // console.log(this.dish);  // --->  this will not point to dish and will return undefined 
    return this.dish // --->  this will not point to dish and will return undefined
}
// console.log(greet2()); // --> Output : undefined

const greet3 = () => {
    const dish = "Chilly Potato";
    console.log(this.dish);  // --> Output : undefined
    return this.dish;
}
// greet3();  // --> Output : undefined
// console.log(greet3());  // --> Output : undefined


//********************************************************
// <4> this keyword globally   // ---> let check how this keyword behave in global scope
// console.log(this);  // --> Output : {} 
//+++++ Important +++++   but this will return some window values when we return it globally in browser reffering to current window which enable us to handle events like scroll , click etc.
 
 // --->  Most Global object in Browser is Window //+++++ Important +++++

// const emp = "Surender";
// console.log(emp);  // --> Output : Surender
// console.log(this.emp);  // --> Output : undefined

//********************************************************
// <5> Arrow Functions   // ---> 
// way to create arrow function

// <1>
const helloWorld = () => {
    return "Hello World !";
}
// console.log(helloWorld());  // --> Output : Hello World !

// <2>
const addTwo = (num1, num2) => {
    return num1 + num2;
}
// console.log(addTwo(3,5));  // --> Output : 8

// <3> if out function has only one return statement

const addThree = (num) => num + 3;
// console.log(addThree(3)); // --> Output : 6

// <4> it is alternative of above but also use if object is return but above one doesn't able to return object

const getEmployee = () => ({ name: "Sameer", empId: 23839 });
// console.log(getEmployee()); // --> Output : { name: 'Sameer', empId: 23839 }

// but if we use 3rd method then =>
const getStudent = () => { name: "Sameer", rollno = 3892 };
// console.log(getStudent()); // --> Output : undefined

//********************************************************
// as we see above that we get various values when function return this so let use one of them
function triggered() {
    this.setInterval(() => { 
        console.log("I am Triggered");
    }, 5000);
    
}
// triggered(); // --->  it will print "I am Triggered" every 5sec infinetly