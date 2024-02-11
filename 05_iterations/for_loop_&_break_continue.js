// for loop in js

//********************************************************
// <1> basic for loop   // ---> basic for loop example and syntax

// program to print number from 1 to 10
for (let index = 1; index <= 10; index++) {
  // console.log(index) ;
}

//********************************************************
// <2> Nested for loop   // ---> loop inside loop

for (let index = 1; index <= 10; index++) {
//   console.log(`\n\nTABLE OF ${index}\n`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${index} x ${j} = ${index * j}`);
  }
}

//********************************************************
// <3> break statement   // ---> it is used to get out of loop if particular condition is true

let limit = 30;

for (let customer = 1; customer <= 100; customer++) {

    // console.log(`customer number : ${customer}`);;
    if (customer == limit) {
        // console.log("\n\n TODAY LIMIT IS REACHED");
        break;
    }  
}

//********************************************************
// <4> continue   // ---> it is used to skip the code in loop if particular condition is true inside loop

for (let index = 1; index <=30; index++) {
    if (index % 3 == 0) {
        continue;
    }
    // console.log(`value of index is ${index}`);  
}
// --> Output : the loop will not print any number multiple of 3

//********************************************************
// <5> accessing array element   // ---> 

let avengers = ["Ironman","Captain America","Hulk","Thor","Hawkeye","Black Widow"]
for (let index = 0; index < avengers.length; index++) {
    //  console.log(avengers[index]);
}

//********************************************************
// <5> accessing object element   // ---> 

let ingridients = {
    dish: "Pavbhaji",
    primary: "Pav",
    gravy: ["bringle", "Potato", "tomato"],
    extra:["lemon","Butter"]
}

// Not accessible
for (let index = 0; index < Object.keys(ingridients).length; index++) {
    //  console.log(ingridients["gravy"][2]);
}



