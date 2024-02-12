// for in loop in js

//********************************************************
// <1> accessing object element using for in loop   // --->

let myObj = {
  name: "Sameer",
  age: 20,
  gender: "Male",
  aim: "Full stack web developer",
};

for (const key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    const element = myObj[key];
    // console.log(`This Key (${key}) has this value :  (${element})`);
  }
}

//********************************************************
// <2> accessing array using for in loop   // --->

let avengers = [
  "Ironman",
  "Thor",
  "Hulk",
  "Captain America",
  "Hawkeye",
  "Black Widow",
];

for (const key in avengers) {
  // console.log(key); // --> Output : this will give indexes as output
  const element = avengers[key];
  // console.log(`index : ${key} : value : ${element}`);
}

//********************************************************
// <3> accessing map using for in loop   // --->

let countryCode = new Map();
countryCode.set("IN", "India");
countryCode.set("AUS", "Australia");
countryCode.set("ENG", "England");
countryCode.set("USA", "United States of America");

// NOTE : working for map
// for (const key in countryCode) {
//     console.log(key);
//         const element = countryCode.get(key);
//         console.log(countryCode);
    
// }