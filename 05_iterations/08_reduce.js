// array.reduce in js it is used when we want to use current and previous value

let myNumbers = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];

let myNum = myNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(myNum); // --> Output : 63

// to find two same consicutive numbers in array

twoConsecutiveValue = myNumbers.filter(
  (num, index) => num === myNumbers[index - 1]
);
console.log(twoConsecutiveValue); // --> Output : [ 3, 5 ]

// example two calculate the total amount of shopping cart
let shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

let totalPriceToPay = 0;
// shoppingCart.map((product) => {
//   totalPriceToPay+= product.price;
// });

// OR another short way

totalPriceToPay = shoppingCart.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0
);

console.log(totalPriceToPay.toLocaleString("en-IN"));
