let array = [0, 1, 2, 3, 4, 5, 6, "Sameer"];

console.log(array);
// console.log(typeof array); // --> Output : object
// console.log(typeof array[2]); // --> Output : number
// console.log(typeof array[array.length-1]); // --> Output : String
// console.log(array[array.length-1].length); // --> Output : 6
// console.log(array[array.length-1][0]); // --> Output : S
// console.log(typeof array[-1]); // --> Output : undefined

// < 1 > array.push(element); //--> will push new element at the last of array
array.push(10);
// console.log(array);

// < 2 > array.pop(); // --->  will remove last element of array
array.pop();
array.pop();
// console.log(array);

// <3> array.unshift(element) // --->  insert  element at starting of array it will shift index of each element
array.unshift("Sameer");
array.unshift(54);
// console.log(array);

// <4> array.shift() // --->  remove element from starting of array it will shift index of each element
array.shift();
// console.log(array);

// < 5 > array.indexOf(element); // --->  return index at which element is present 

// console.log(array.indexOf('a')); // --> Output : -1
// console.log(array[0].indexOf('m')); // --> Output : 2 //--> it will search from "Sameer"

// < 6 > array.includes(element); // --->  return boolean value whether element is present in array or not
// console.log(array.includes(4)); // --> Output : true
// console.log(array.includes('m')); // --> Output : false
// console.log(array.includes("Sameer")); // --> Output : true
// console.log(array[0].includes('m')); // --> Output : true

// // < 7 > array.join() // --->  return after converting array to string 
// console.log(typeof array); // --> Output : object
// console.log(array); // --> Output : [ 'Sameer', 0, 1, 2, 3, 4, 5, 6 ]

// console.log(typeof array.join()); // --> Output : string
// console.log(array.join()); // --> Output : Sameer,0,1,2,3,4,5,6

// < 8 > array.slice(start, end); // --> Output : it will return the part of array which specified but not include last elment aur range element
console.log(`current array : ${array}`); // --> Output : Sameer,0,1,2,3,4,5,6
console.log(array.slice(2, 6)); // --> Output : [1,2,3,4]
console.log("A : ",array);

// < 9 > array.splice(start, end); // --->  slice and splice are little similar but splice will actually remove element from array while slice only display it not actually change actual array.
console.log(array.splice(3, 4));
console.log("B : ",array);