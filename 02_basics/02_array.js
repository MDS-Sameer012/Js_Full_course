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
let another_array = [1, 2, 3, 4, [5, 6, 7], [8, 9, 10, [11, 12, 13]]];
console.log(another_array);