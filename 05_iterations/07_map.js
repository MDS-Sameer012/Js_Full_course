let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//**************************[Trying to Return Element using for each loop]******************************
let myNum = myNumbers.forEach((num) => num * 4); // --> Output : it will return : undefined
myNum = myNumbers.forEach((num) => num > 4); // --> Output : it will return : undefined

// console.log(myNum); //--> output : undefined

//********************************************************
// <1> map   // ---> here .map() comes in picture which allow us to return value from array as we not always want to just print some value but we can also need to perform some operations on value as per demand.

// myNum = myNumbers.map((num) => num > 4); // --->  unlike filter it will just return boolean values
myNum = myNumbers.map((num) => num * 10); // --->  it will return array of each value after performing specified operations
// --> Output : [10, 20, 30, 40,  50,60, 70, 80, 90, 100]

// console.log(myNum);

//********************************************************
// <2> i.e. .map().filter() etc...   // ---> creating chain of function such as fucn2() using output of func1() and so on (from left to right)

myNum = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num % 3 == 0);

// console.log(myNumbers); // --->  it is still unchanged
// console.log(myNum);// --> Output : [ 21, 51, 81 ]

let mobileBrands = ["apple", "samsung", "vivo", "oppo"];

let mobile = mobileBrands.map((brand, index, arr) => {
    console.log(`index : ${index} -> brand : ${brand} -> all brands in array : ${arr}`);
    // --> Output : will look like this for each : index : 0 -> brand : apple -> all brands in array : apple,samsung,vivo,oppo
})