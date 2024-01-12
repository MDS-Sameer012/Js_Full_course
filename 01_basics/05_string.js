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
console.log(myCity.split("-")); // --> it split string where it get "-" it return array
// output : [ 'India', 'Delhi', 'Shahdara', 'Vishwas_Nagar' ]

// we can also get particular element from resultant array 
console.log(myCity.split('-')[1]);
// output : Delhi

