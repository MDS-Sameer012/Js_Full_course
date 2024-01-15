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

// (1) Another way of creating string Object
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

// <3.1> strObject.trimEnd() // --->  trim white space from end str.trimStart() --> from start
console.log(`Original String : [${myPhone}]`); // --> Output : [        Samsung Galaxy   C7 Pro             ]
console.log(`trimEnd() : [${myPhone.trimEnd()}]`); // --> Output : [        Samsung Galaxy   C7 Pro]
console.log(`trimStart() : [${myPhone.trimStart()}]`); // --> Output : [Samsung Galaxy   C7 Pro             ]

// (4) Accessing Elements from String
let myPen = new String("V5 Pilot Pen");
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
let filepath = "C:UserDesktopJs_Codeexample.js"; // --->  filepath created using double quotes
// console.log(filepath);// --> Output : C:UserDesktopJs_Codeexample.js (this is failed t o escape backslashes)

let filepath2 = `C:\User\Desktop\Js_Code\example.js`; // --->  filepath created using backticks
// console.log(filepath2); // --> Output : C:UserDesktopJs_Codeexample.js

// these both are also failed to escape back slashes
let filepath3 = new String("C:UserDesktopJs_Codeexample.js");
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

// <12> string.charCodeAt(index) , string.charPointAt(index)
// console.log(`Char Code (ASCII in decimal) Present At Index 4th in ${myPen} is ${myPen.charCodeAt(3)} , Char = ${myPen.charAt(3)}`);
// console.log(`Char Point (ASCII in decimal) Present At Index 4th in ${myPen} is ${myPen.codePointAt(3)} , Char = ${myPen.charAt(3)}`);

// In summary, if you're working with simple characters and don't need to deal with characters outside the Basic Multilingual Plane (BMP), charCodeAt is usually sufficient. However, if you're dealing with a wider range of characters, including emoji and supplementary characters, codePointAt is more appropriate. Always consider the requirements of your specific use case when choosing between these methods.

// console.log("😊".charCodeAt(0));
// console.log("😊".codePointAt(0));

// <13> String.concat() //---> new string combine both string 
let mobileBrand = new String("Samsung");
let mobileModel = new String("Galaxy C7 Pro");
// console.log(mobileBrand.concat(mobileModel)); // --> Output : SamsungGalaxy C7 Pro
// console.log(mobileBrand.concat(" ",mobileModel)); // --> Output : Samsung Galaxy C7 Pro
// console.log(mobileBrand.concat(" ", mobileModel, " This is my first mobile phone ")); // --> Output : Samsung Galaxy C7 Pro This is my first mobile phone

let myMobile = {
    brand: "Samsung",
    model : "Galaxy C7 Pro"
}
let myCar = {
    brand: "Hyundai",
    model: "Grand i10"
}
    // console.log(myMobile);
    // console.log(myCar);
    // console.log("".concat(myCar, " This is in Middel ", myMobile));
    // --> Output : { brand: 'Samsung', model: 'Galaxy C7 Pro' }
    // { brand: 'Hyundai', model: 'Grand i10' }
    // [object Object] This is in Middel [object Object]

    // <14> String.indexOf('c')
    // console.log(`index of c in ${myPen} is ${myPen.indexOf('c')}`);
    // console.log(`index of v in ${myPen} is ${myPen.indexOf('v')}`);
    // console.log(`index of P in ${myPen} is ${myPen.indexOf('P')}`);
    // // --> Output : index of c in V5 Pilot Pen is -1
    // index of v in V5 Pilot Pen is -1
    // index of P in V5 Pilot Pen is 3

    // < 15 > String.include('c') // --->  it return true or false based on search it perform case sensitive search and return value
    // console.log(myPen.includes('v')); // --> Output : false
    // console.log(myPen.includes('V')); // --> Output : true

// < 16 > String.lastIndexOf('c'); // --->  return last index of char present otherwise -1
let word = new String("my name is sameer")
// console.log(`last index of m in ${word} is ${word.lastIndexOf('m')}`); // --> Output : last index of m in my name is sameer is 13
// console.log(`last index of m in ${word} is ${word.lastIndexOf('d')}`); // --> Output : last index of m in my name is sameer is -1

// <17> String.padEnd() //---> it add given string repeatedly after string as mentioned
let chapter_1 = "Introduction to Political Theory";
let chapter_2 = "Liberalism";
// console.log(chapter_1.length);
// console.log(chapter_1.padEnd(40,".")); // --> Output : Introduction to Political Theory........
// console.log(chapter_2.padEnd(40, ".")); // --> Output : Liberalism..............................
// console.log(chapter_2.padEnd(40)); // --> Output : Liberalism                              )ends here
// console.log("Sameer ".padEnd(50, "is a good Boy | ")); // --> Output : Sameer is a good Boy | is a good Boy | is a good B
// if given no is less than string length then it doesnt add specified string

//<18> String.padStart() //--> same as above just add in start
// console.log(chapter_2.padStart(50,"*"));

// <19> String.repeat() // --->  
let hi = "Hi ! ";
// console.log(chapter_2.repeat(3)); // --> Output : LiberalismLiberalismLiberalism
// console.log(hi.repeat(3)); // --> Output : Hi ! Hi ! Hi ! 

// <20> String.repalce(replacewith , replace to) //--> it replace the first occurence of string with specified string
let statement = new String("This is My First Phone , and I still Use That Phone");
// console.log(`Orignal Statement : ${statement}`); // --> Output : Orignal Statement : This is My First Phone  , and I still Use That Phone
// console.log(`After Replacement : ${statement.replace("Phone", "Laptop")}`); // --> Output : After Replacement : This is My First Laptop  , and I still Use That Phone
// console.log(`After Replacement All : ${statement.replaceAll("Phone", "Laptop")}`); // --> Output : After Replacement : This is My First Laptop  , and I still Use That Laptop

// <21> String.slice(staring,end) // --->  it will return sliced string without changing original one
// console.log(`Sliced String between [29] to end : ${statement.slice(29)}`); // --> Output : Sliced String between [29] to end : I still Use That Phone
// console.log(`Sliced String between [-10] to end : ${statement.slice(-10)}`); // --> Output : Sliced String between [-10] to end : That Phone
// console.log(`Sliced String between [100] to end : ${statement.slice(100)}`); // --> Output : Sliced String between [-10] to end :   [will return empty]
// console.log(`Sliced String between [0,22] to end : ${statement.slice(0,22)}`); // --> Output : Sliced String between [0,22] to end : This is My First Phone

// <22> String.startsWith(string,position) // --->  return true or false based on wether string present on particular position or not
let goodBoy = new String("I am Good Boy , I am 20 Year Old");
// console.log(`Original String : ${goodBoy}`);
// console.log(`is Starts with I : ${goodBoy.startsWith('I')?"Yes":"No"}`);
// console.log(`is String Starts with I from 16th Position : ${goodBoy.startsWith('I' , 16)?"Yes":"No"}`);
// console.log(`is Starts with (I am Good) : ${goodBoy.startsWith("I am Good")?"Yes":"No"}`);
// console.log(`is String Starts with (I am Good) from 16th Position : ${goodBoy.startsWith("I am Good" , 16)?"Yes":"No"}`);

// // --> Output : Original String : I am Good Boy , I am 20 Year Old
// is Starts with I : Yes
// is String Starts with I from 16th Position : Yes
// is Starts with (I am Good) : Yes
// is String Starts with (I am Good) from 16th Position : No

// < 23 > strObject.substring(start, end) // --->  return substring specified by no excluding last index
let example23 = "Yummy Biscuit";
// console.log(`Original : ${example23}`);
// console.log(`substring(3,8) : ${example23.substring(3, 8)}`); // --> Output : substring(3,8) : my Bi
// console.log(`substring(8) : ${example23.substring(8)}`); // --> Output : substring(8) : scuit
// console.log(`substring(-2) : ${example23.substring(-2)}`); // --> Output : substring(-2) : Yummy Biscuit [doesn't treat -ve like slice as it will print from reverse]
// console.log("VS");
// console.log(`slice(3,8) : ${example23.slice(3,8)}`); // --> Output : slice(3,8) : my Bi

// < 24 > strObject.toString() // --->  return this string value
let ex24 = new String("Dosa");
// console.log(`type of string object : ${typeof ex24}`);// --> Output : object
// console.log(`type of string object after toString() : ${typeof ex24.toString()}`); // --> Output : string



