// String Function
let name = "Sameer";
let age = 20;
// template literals Method of printing string
// in modern times it is used to instead of sperators like + and , 
// console.log(`Hi , My name is ${name} and i am ${20} Year Old`);

// console.log(name.toUpperCase());
// console.log(name.split('m'));

// NOTE : if we create string without using new keyword like we did above then it allow us to use string methods/functions but it doesn't give us auto suggetions in writing code which it give when we intialize string using new keyword

// String Methods in js

// (1) Another way of creating string
let myCity = new String("India-Delhi-Shahdara-Vishwas_Nagar");

// (2) Split
// console.log(myCity.split("-")); // --> it split string where it get "-" it return array
// output : [ 'India', 'Delhi', 'Shahdara', 'Vishwas_Nagar' ]

// we can also get particular element from resultant array 
// console.log(myCity.split('-')[1]);
// output : Delhi

// (3) Trim 
let myPhone = "        Samsung Galaxy   C7 Pro             ";
// console.log(`${myPhone} | String End Here`);
// console.log(`${myPhone.trim()} | String End Here After Trim`); // --->> it removes white spaces from starting and end of the string 
// it will not remove white space from in between the two letters because these are the part of string 

// (4) Accessing Elements from String
let myPen = "V5 Pilot Pen";
// there are two ways to access element from string 
        // (a) using String.charAt(index);
// console.log(myPen.charAt(1));
        //(b) Another Way treating string as array
// console.log(myPen[1]);

// (5) String primitve vs String Object
// console.log(typeof(myCity)); // --> Return Object
// console.log(typeof (myPhone)); // --> Return String

// (6) eval(string)
let x = 2; 
let y = 3;
let eqn = "(3*x)+(2*y)";
// eval is used to evaluate the string as js code and execute it
// console.log(eval(eqn));

// --but eval give different ans. for String primitive and String obj
let strPrimitive = "2+2";
let strObject = new String("2+2");
// for primitive
// console.log(eval(strPrimitive)); // --> output 4
// for String Obj
// console.log(eval(strObject)); // --> output : [string:'2+2']

// --but there is a way to use Str Obj as Primitve 
// console.log(eval(strObject.valueOf())); // --> Output : 4

// (7) String.fromCharCode(unicode); // --->  return string made up of sequence of unicode
// console.log(String.fromCharCode(189, 43, 190, 61));

// (8) String.raw
let filepath = "C:\User\Desktop\Js_Code\example.js"; // --->  filepath created using double quotes
// console.log(filepath);// --> Output : C:UserDesktopJs_Codeexample.js (this is failed t o escape backslashes)

let filepath2 = `C:\User\Desktop\Js_Code\example.js`; // --->  filepath created using backticks
// console.log(filepath2); // --> Output : C:UserDesktopJs_Codeexample.js

// these both are also failed to escape back slashes
let filepath3 = new String('C:\User\Desktop\Js_Code\example.js');
let filepath4 = new String(`C:\User\Desktop\Js_Code\example.js`);
// console.log(filepath3);// --> Output : [String: 'C:UserDesktopJs_Codeexample.js']
// console.log(filepath4);// --> Output : [String: 'C:UserDesktopJs_Codeexample.js']

let filepath_raw = String.raw`C:\User\Desktop\Js_Code\example.js`; // --->  this will bypass back slashes and print expected output
// console.log(filepath_raw); // --> Output : C:\User\Desktop\Js_Code\example.js

// NOTE : we can use any of method stated above except raw to achieve same result but then we have to write two \\ instead of \

// <9> String.length // --->  return length of string this is [instance property]
// console.log(myPen.length);   // --> Output : 12
// console.log(myCity.length);   // --> Output : 34
// console.log(myCity.split('-')[1].length);   // --> Output : 5 

// [Instance Methods]

// < 10 > String.at(position) // --->  it returns char at posittion  (position can be +ve or -ve)
// if position = +ve then it count char from 0th position 
// and if position = -ve then it count char from last position

// console.log(`3rd position in [ ${myPen} ] is [ ${myPen.at(3)} ]`);
// console.log(`5th position from last in [ ${myPen} ] is [ ${myPen.at(-5)} ]`);

// < 11 > String.charAt(position) // --->  it also return char present at specified position
// it return empty string if specified position is out of range
// we cannot give -ve value as position argunment

// console.log(`length of ${myPen} is ${myPen.length}`);
// console.log(`Char at 3rd position in [${myPen}] is [${myPen.charAt(3)}]`);
// console.log(`Char at 2nd position from last in [${myPen}] is [${myPen.charAt(myPen.length-2)}]`);
// console.log(`Char at 102th(if index is out of range) in [${myPen}] is [${myPen.charAt(102)}] it return empty string`);


