let marvel_heroes = ["Thor", "Ironman", "Spiderman", "Hulk"];
let dc_heroes = ["Batman", "Superman", "Flash", "Aquaman"];
let indian_heroes = ["Shaktiman", "Hero", "Flying Jaat", "Krish"];

// < 1 > Array.push(array2); //--> it will push as element 
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // --->  it will append dc_heroes in marvel_heroes as element

// <2> Array.concat(array2); //--> it will merge two array
// console.log(marvel_heroes.concat(dc_heroes)); // --->  it will merge two arrays 

// < 3 > spreading array method new_array = [...array1, ...array2, ...]; // --->  it will also merge multiple arrays it is more preferable than concat
let all_heroes = [...marvel_heroes, ...dc_heroes, ...indian_heroes];
// console.log(all_heroes); // --->  it will merger all arrays

// < 4 > Array.flat(iteration); // --->  it will make array withhout subarray in iteratin we specify number at which we want to remove subarrays if we want to remove all subarrays then we specify iterations as "infinity"
// NOTE : it doesn't change actual array 
let another_array = [1, 2, 3, 4, [5, 6, 7], [8, 9, 10, [11, 12, 13,[14,15,16,]]]];
// console.log(another_array);  // --> Output : [ 1, 2, 3, 4, [ 5, 6, 7 ], [ 8, 9, 10, [ 11, 12, 13, [Array] ] ] ]

// console.log(another_array.flat(1));  // --> Output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [ 11, 12, 13, [ 14, 15, 16 ] ] ]
// console.log(another_array);

// console.log(another_array.flat(2)); // --> Output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, [ 14, 15, 16 ] ]
// console.log(another_array.flat(Infinity)); // --> Output : [ 1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15, 16 ]

// < 5 > Array.isArray(element); // --->  it will return boolean value based on whether given variable is array or not
let name = "Sameer";
let age = 20;
// console.log(Array.isArray(name));  // --> Output : false
// console.log(Array.isArray(age));  // --> Output : false
// console.log(Array.isArray(another_array));  // --> Output : true
// console.log(`Passed Argument value : [${marvel_heroes}] , is Array ? ${Array.isArray(marvel_heroes)?"Yes":"No"}`);

// < 6 > Array.from(argument); // --->  it will convert the given argument to array
// console.log(name); // --> Output : Sameer
// console.log(Array.from(name)); // --> Output : [ 'S', 'a', 'm', 'e', 'e', 'r' ]
// console.log(Array.from(name,(x)=>x+1)); // --> Output : [ 'S1', 'a1', 'm1', 'e1', 'e1', 'r1' ]
// console.log(Array.from([age])); // --> Output : [ 20 ]
// console.log(Array.from([age,1,2,3,4])); // --> Output : [ 20, 1, 2, 3, 4 ]
// console.log(Array.from([age,1,2,3,4],(y)=>y+y)); // --> Output : it will add each element with it self 
// console.log(Array.from([age,1,2,3,4],(x)=x+x)); // --> 
