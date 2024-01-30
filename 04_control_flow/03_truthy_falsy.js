// there are some values called "truthsy" & "falsy" which are consider to be true and false but they are actualy not completly false or true

//********************************************************
// falsy values

// false, 0, -0,0.0, BigInt 0n, "", null, undefined, NaN

//********************************************************
//truthy values
// "0", 'false', " ", [], {}, function(){}


//********************************************************
// <1> falsy values check   // ---> 

// console.log(false == 0); // --> Output : true
// console.log(false == -0); // --> Output : true
// console.log(false == ""); // --> Output : true
// console.log(false == null); // --> Output : false
let num = 0n;
// console.log(typeof num); // --> Output : bigint
// console.log(Boolean (num)); // --> Output : false
// console.log(false == num); // --> Output : true

let decimalVal = 0.0;
// console.log(typeof decimalVal); // --> Output : number
// console.log(Boolean (decimalVal)); // --> Output : false
// console.log(false == decimalVal); // --> Output : true

// NOTE : if bigint also contain 0n value then it is also considered as false //+++++ Important +++++

if (num) {
    console.log(`bigint is treated as true`);
}

// note : when we check false == null then it return false but when we convert null to boolean it is converted to false  //+++++ Important +++++

// console.log(Boolean(null));  // --> Output : false
// console.log(Boolean(undefined));  // --> Output : false

// console.log(false == undefined); // --> Output : false

// console.log(false == NaN); // --> Output : false

// console.log(`before conditions`);
// if (null) {
//     console.log("inside null loop");
// }
// else {
//     console.log(`inside null else loop`);
// }
// console.log(`after conditions`);

//********************************************************
// <2> truthsy values check   // ---> 

// console.log(true == []);  // --> Output : false
// console.log(true == "sam");  // --> Output : false
// console.log(true == {});  // --> Output : false
// console.log(true == function(){});  // --> Output : false

// console.log( Boolean ([]));  // --> Output : true
// console.log( Boolean ("sam"));  // --> Output : true
// console.log( Boolean ({}));  // --> Output : true
// console.log( Boolean (function(){}));  // --> Output : true
// console.log(Boolean(function () { return 2;}));  // --> Output : true


// NOTE : every value other than the falsy values stated above are treated as truthy values

 //+++++++++++++++++++++++++++++++++ Important +++++++++++++++++++++++++++++++
//  some tricky questions

// console.log(true == '0');  // --> Output : false
// console.log(true == '-0');  // --> Output : false
// console.log(true == '0n');  // --> Output : false
// console.log(true == 'false');  // --> Output : false
// console.log(true == 'null');  // --> Output : false
// console.log(true == 'undefined');  // --> Output : false

// console.log(Boolean ('0'));  // --> Output : true
// console.log(Boolean ('-0'));  // --> Output : true
// console.log(Boolean ('0n'));  // --> Output : true
// console.log(Boolean ('false'));  // --> Output : true
// console.log(Boolean ('null'));  // --> Output : true
// console.log(Boolean ('undefined'));  // --> Output : true

// console.log(Boolean ('true'));  // --> Output : true
// console.log(false == 'true');  // --> Output : false

// ******************************************************** //********************************************************

//********************************************************
// Nullish Coalescing Operator (??): null undefined
// if our variable get null,undefined value assigned for e.g. when value return from some function or process then it is not desirable that any variable hold null or undefined value so using "Nullish Coalescing Operator" we give variable an alternative value which will be assigned if our variable get assigned with null , undefined values

function returnNull() {
    return null;
}
function returnUndefined() {
    return undefined;
}
// in actual these are some other functions

let check = returnNull() ?? 10;  // --->  10 
let check2 = returnNull() ?? returnUndefined() ?? 30;  // --->  30
let check3 = returnNull() ?? returnUndefined() ?? 49 ?? 30;  // --->  49
let check4 =  49 ?? 30;  // --->  49
let check5 = 0 ?? 30;  // --->  0

// the first value it get in order : val1 ?? val2-- > it will assing the first value to variable

// console.log(check);
// console.log(check2);
// console.log(check3);
// console.log(check4);
// console.log(check5);

//********************************************************
// <@> Terniary Operator   // ---> shorthand syntax for if else

let age = 13;
age = 18;

// age>=18 ? console.log("You are greater than 18") : console.log("You are less than 18");
let studentStatus;
let marks = 40;
marks >= 90 ? studentStatus = "Good Student" : studentStatus = "Average Student";
// console.log(`Obtained Marks : ${marks}, He/She is ${studentStatus}`);

//********************************************************
// <@> checking for emty array and Object    // ---> 

// ARRAY
// let arr = [];

// if (arr.length <= 0) {
//     console.log(`Array is Empty`);
// }
// else {   
//     console.log(`Array is not Empty , Array length : ${arr.length}`);
// }

// OBJECt
// let obj = {name : "Sameer",age : 20 , marks : [90,80,90,98]};

// if (Object.keys(obj).length <= 0) {
//     console.log(`Object is Empty`);
// } else {   
//     console.log(`Object is Not Empty`);
//     console.log(`Object Length : ${Object.keys(obj).length}`);
// }







