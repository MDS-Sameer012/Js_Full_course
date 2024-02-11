//********************************************************
// <1> while loop   // ---> basic syntax and example

let count = 1;
while (count <= 10) {
//   console.log(`value of count is : ${count}`);
  count++;
}

//********************************************************
// <2> do while loop   // ---> it is used when we want to execute loop's code atleast once irrespective of condition then do while loop is used
let times = 1;
do {
    // console.log(`I am inside do for the ${times} time`);
    times++;
} while (times <= 10);
// --> Output : the above loop will print same statement with increment times value 10 times (no surprise)

do {
    // console.log(`I am inside Second do for the ${times} time`);
    times++;
} while (times > 100);

// --> Output : I am inside Second do for the 11 time [it executes once even if conditons is wrong]
