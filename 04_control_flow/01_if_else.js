// when we code it is desired that not our whole code is executed rather our code is executed based on some condition

// let isUserLoggedIn = true;
let isUserLoggedIn = false;

if (isUserLoggedIn) {
  console.log("User is Logged In ");
}
// console.log("always execute as it is global");

//********************************************************
// <2> else   // ---> if we want that our some conditions is true then the code will exiecute otherwise other code will execute then we use else

let age = 19;
age = 13;
age = 18;

// if (age > 18) {
//   console.log("Congratulation You Are Eligible for Voting\n");
// } else if (age == 18) {
//   console.log("This is your First Vote So, Vote Responsibly\n");
// } else {
//   console.log("You Are Not Eligible for Voting\n");
// }

// //********************************************************
// // we can also write same code as

// if (age > 18)
//   console.log("Congratulation You Are Eligible for Driving"),
//     console.log("Drive Carefully\n");
// else if (age == 18)
//   console.log("Congratulation you can now apply for learning licence"),
//     console.log(
//       "After successful passing LL Test you can then apply for Driving Test\n"
//     );
// else
//   console.log("You Are Not Eligible for Driving"),
//     console.log("Happy to see your driving enthusiasum\n");

//********************************************************
// another example of same above format

// if (age > 18)
//   console.log("You Aren't Legally Minor"),
//     console.log("You can do court Marraige\n");
// else if (age == 18)
//   console.log("You are just become Major legally"),
//     console.log("but wisely choose your partner and be aware of scammers\n");
// else
//   console.log("You Are Legally Minor"),
//     console.log("You can't do court Marraige\n");

// another example of above
let a = 8;
let b;
// if (a % 2 == 0) (b = a * 20), console.log(`20 times of ${a} is ${b}`);   // --->  very unreadable code hence not recommended
// else if (a % 3 == 0) (b = a * 30), console.log(`30 times of ${a} is ${b}`);  // --->  very unreadable code hence not recommended

//********************************************************
// < 3 > nested    // ---> condition under condition

let num = -75;

// if (num > 0) {
//     num *= 10;
//     if (num >= 100) {
//         console.log(`10 times of given +ve number is greater than equal to 100 : ${num}`);
//     }
//     else{
//         console.log(`10 times of given +ve number is less than 100 : ${num}`);
//     }
// }
// else{
//     num += 10;
//     if (num >= (-50)) {
//         console.log(`Given -ve number +10 is greater than equal to -50 : ${num}`);
//     }
//     else {
//         console.log(`Given -ve number is less than -50 : ${num}`);
//     }
// }

//********************************************************
// < 4 > Logical operators with control flow   // ---> if we want to check two or more conditions thens we use logical operator like "AND","OR","NOT"(unary operator)

// let player and our program will select player based on condition

//********************************************************
// AND operator
let performance = ["Bad", "Average", "Good", "Very Good", "Excellent"];
let player = {
  name: "Sameer",
  player_performance: 5,
  age: 18,
};
// if (((player.age < 19 && player.age >= 16)) && (performance[player.player_performance - 1] == "Excellent")) {
//     console.log(`Congratulation you are selected for U19 World Cup Team and also a candidate for Captainship`);
// }
// else if (((player.age < 19) && (player.age >= 16)) && (performance[player.player_performance - 1] == "Very Good")) {
//     console.log(`Congratulation you are selected for U19 World Cup Team`);

// }
// else if (((player.age < 19) && player.age>=16) && (performance[player.player_performance - 1] == "Good")) {
//     console.log(`Congratulation you are selected for U19 World Cup Squad`);
// }
// else if (((player.age < 19) && player.age>=16) && (performance[player.player_performance - 1] == "Average")) {
//     console.log(`Congratulation you are selected for U19 World Cup Team Player Replacement in case any player ruled out due to injury`);
// }
// else if (((player.age < 19) && player.age>=16) && (performance[player.player_performance - 1] == "Bad")) {
//     console.log(`Congratulation you are not selected for U19 World Cup,`);
//     console.log(`Work Hard , All the best for future`);
// }
// else {
//     console.log("You Are not eligible for U19");
// }

//********************************************************
// OR Operator
let stream = "Science";
// stream = "Commerece";
// stream = "Arts";

if (stream == "Science" || stream == "Commerece" || stream == "Arts") {
  console.log(`You are eligible to Opt BA`);
  if (stream == "Science" || stream == "Commerece") {
    console.log(`You are eligible to Opt BCA`);
  }
  if (stream == "Science") {
    console.log(`You are eligible to Opt BTech`);
  }
} else {
  console.log(`Invalid Stream Entered`);
}
