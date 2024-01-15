// ************************************************************************
//                                 NUMBERS 
// ************************************************************************

let accountNumber = 2107262083;
let balance = new Number(175786);
// console.log(accountNumber); // --> Output : 2107262083
// console.log(balance); // --> Output : [Number: 10756]

// console.log(typeof accountNumber); // --> Output : number
// console.log(typeof balance); // --> Output : object

// <1> numObj.toLocaleString() // --->  it will convert no. in more redeable form using commas i.e. 10000 to 10,000 by default it convert in us standards

// console.log(`original balance : ${balance}`); // --> Output : 175786
// console.log(`balance (toLocaleString()) [by default U.S. standard] : ${balance.toLocaleString()}`); // --> Output : 175,786
// console.log(`balance (toLocaleString('en-IN')) [by default Indian standard] : ${
// balance.toLocaleString('en-IN')}`); // --> Output : 1,75,786
// //  it return string 

// <2> numObj.toPrecision(no.) // --->  
let newNum = new Number(23.9393);
let anotherNum = new Number(29.9393);
// console.log(newNum.toPrecision(1)); // --> Output : 2e+1 [means 20]
// console.log(anotherNum.toPrecision(1)); // --> Output : 3e+1 [means 30]
// console.log(newNum.toPrecision(2)); // --> Output : 24
// console.log(newNum.toPrecision(3)); // --> Output : 23.9
// console.log(newNum.toPrecision(4)); // --> Output : 23.94
// console.log(newNum.toPrecision(8)); // --> Output : 23.939300
// console.log(2156.8655.toPrecision(4)); // --> Output : 2157
// console.log(2156.8655.toPrecision(5)); // --> Output : 2156.9

// <3> numObje.toFixed(no.) // --->  fixes decimal places
// console.log(39.9392.toFixed(0));  // --> Output : 40
// console.log(39.9392.toFixed(1));  // --> Output : 39.9
// console.log(39.9392.toFixed(2));  // --> Output : 39.94
// console.log(39.9342.toFixed(2));  // --> Output : 39.93
// console.log(39.9352.toFixed(2));  // --> Output : 39.94
// console.log(39.9252.toFixed(2));  // --> Output : 39.93
// console.log(39.9952.toFixed(2));  // --> Output : 40.00
// console.log(33.9952.toFixed(2));  // --> Output : 34.00
// console.log(33.3952.toFixed(2));  // --> Output : 33.40

// <4> Number.toExponential(factorization digit) // --->  reprensent no. in expo. notation e+1 [10^1]
// console.log(39.23324.toExponential(3));  // --> Output : 3.923e+1
// console.log(39.23324.toExponential(5));  // --> Output : 3.92332e+1
// console.log(39.23324.toExponential(10));  // --> Output : 3.9233240000e+1
// console.log(39.23324.toExponential());  // --> Output : 3.923324e+1

// <5> Number.valueOf()
// console.log(typeof balance);  // --> Output : object
// console.log(typeof balance.valueOf());  // --> Output : number


// ************************************************************************
//                                 Math 
// ************************************************************************

// generate 4 digit no
let min = 1000; 
let max = 3000; 
for (let i = 0; i < 10;i++){
// console.log(Math.floor((Math.random()*(max-min+1))+min));
}