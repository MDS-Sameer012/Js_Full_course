// for of loop
// it will access array , object(with modification means using Object.entries(obj)), maps

//********************************************************
// <1> for of loop in JS   // ---> this loop provide ease in accessing array or object elements

let avengers = [
  "Ironman",
  "Thor",
  "captain America",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];

for (const superhero of avengers) {
  // console.log(superhero);
}

let num = [1, 2, 3, 4, 5];

for (const i of num) {
  // console.log(typeof i); // --> Output : number
  // console.log(i);
}

//********************************************************
// <2> accessing object using for of   // ---> we can access object property using for of

let student = {
  name: "Sameer",
  enrolmentNo: 2107262083,
  city: "Delhi",
  marks: [90, 94, 95, 78, 59],
  eligible: true,
  // sayHello: () => console.log(`Hello I am ${this.name} `) // --->  this arrow function is not correct to use as the this key word is not used inside arrow function because it doesn't point to current context but outer most likely global in this case
  sayHello: function () {
    console.log(`Hello I am ${this.name} `);
  },
};

// console.log(student);

// student.sayHello();

// for (const property of student) { // --->  this will give error to access object we need to use little updated syntax

// for (const [key, value] of student) { // --->  this will also give error : student (object) is not iteratable
for (const [key, value] of Object.entries(student)) {
  // --->  this will give desired output as we convert student obj to array of key value pair as obj.entries will give array of key value pair
  // console.log(`${key} : ${value}`);
}

//********************************************************
// <3> accessing string using for of   // --->

let userName = "Mohammad Sameer";
let position = 0;
for (const letter of userName) {
  position++;
  //   console.log(`letter at position ${position} is [${letter}]`);
}

//********************************************************
// <4> accessing maps using for of loop   // ---> maps are in built object provided by js it hold value in key value pair and maintain order of insertion

let iplTeamShortName = new Map();

// console.log(iplTeamShortName); // --> Output : Map(0) {}
// console.log(iplTeamShortName.size); // --> Output : 0
// console.log(typeof iplTeamShortName); // --> Output : object

iplTeamShortName.set("DC", "Delhi Capitals");
iplTeamShortName.set("RCB", "Royal Challenger Banglore");
iplTeamShortName.set("CSK", "Chennai Super Kings");
iplTeamShortName.set("MI", "Mumbai Indians");
iplTeamShortName.set("GT", "Gujrat Titans");
iplTeamShortName.set("KKR", "Kolkata Knights Rider");
iplTeamShortName.set("KXIP", "Kings XI Punjab");
iplTeamShortName.set("SRH", "Sunrisers Hyderabad");
iplTeamShortName.set("topper", function () {
  console.log(iplTeamShortName.get("CSK"));
});

// console.log(iplTeamShortName.size); // --> Output : 9
console.log(iplTeamShortName); // --> Output : Map(9) {
//     'DC' => 'Delhi Capitals',
//     'RCB' => 'Royal Challenger Banglore',
//     'CSK' => 'Chennai Super Kings',
//     'MI' => 'Mumbai Indians',
//     'GT' => 'Gujrat Titans',
//     'KKR' => 'Kolkata Knights Rider',
//     'KXIP' => 'Kings XI Punjab',
//     'SRH' => 'Sunrisers Hyderabad'
//     'topper' => [Function (anonymous)]
// }

iplTeamShortName.get("topper")();
// --> Output : Chennai Super Kings

for (const [key, value] of iplTeamShortName) {
  // console.log(`${key} : ${value}`);
} 
// --> Output : 
// Chennai Super Kings
// DC : Delhi Capitals
// RCB : Royal Challenger Banglore
// CSK : Chennai Super Kings
// MI : Mumbai Indians
// GT : Gujrat Titans
// KKR : Kolkata Knights Rider
// KXIP : Kings XI Punjab
// SRH : Sunrisers Hyderabad
// topper : function () {
//   console.log(iplTeamShortName.get("CSK"));
// }
