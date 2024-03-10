// Can we change value of Math.PI ?
// ans : No, because it is not writable

const piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");
Math.PI = 5;
// console.log(Math.PI); // --->  it will not change value as it is not writable

// Object.defineProperty(Math, "PI", { //--> it will give error
//     writable: true
// })

// console.log(piDescriptor);

//********************************************************
// <1> can we define these constraints for own object properties ? : yes   // --->

const sameer = {
  name: "Sameer",
  age: 20,
  gender: "Male",
  sayHello: function () {
    console.log(`Hello i am ${this.name}`);
  },
};
// console.log(sameer);
sameer.name = "Sohail"; // --->  it will change name of sameer object as writable property of name property is true
// console.log(sameer);
Object.defineProperty(sameer, "name", { writable: false }); // --->  now onwards name property can't be changed as writable is set to false
// // sameer.name = 'Sameer'; // --->  it will not change value but also it will not throw an error
// console.log(sameer);

//********************************************************
// <2> stoping particular property to get iterated   // --->

Object.defineProperty(sameer, "gender", { enumerable: false });

for (const key in sameer) {
  if (Object.hasOwnProperty.call(sameer, key)) {
    if (!(typeof sameer[key] === "function")) {
      // console.log(`${key} : ${sameer[key]}`);
    }
  }
}

//********************************************************
// <3> preventing object to get iterated   // --->

// Object.defineProperties(sameer, {
//   name: { enumerable: false },
//   age: { enumerable: false },
//   gender: { enumerable: false },
// });
// OR

for (const key in sameer) {
  if (Object.hasOwnProperty.call(sameer, key)) {
    Object.defineProperty(sameer, `${key}`, { enumerable: false });
    // console.log(`setting ${key} to enumerable: false`);
  }
}

for (const key in sameer) {
  if (Object.hasOwnProperty.call(sameer, key)) {
    if (!(typeof sameer[key] === "function")) {
      console.log(`${key} : ${sameer[key]}`);
    }
  }
}
// console.log(sameer); // --->  if enumerable = false then we get any value of this output
// console.log(sameer.name); // --->  but we can access value like this sameer.name

//********************************************************
// <4> making object property non configurable means it neither be deleted nor changed except it's value and writable property   // --->

Object.defineProperty(sameer, "name", {
  writable: true,
  enumerable: true,
  configurable: false,
}); // --->  now it will be not be configured again except for writable

sameer.name = "Sameer";
console.log(sameer);

// Object.defineProperty(sameer, 'name', { enumerable: false }); // --->  TypeError: Cannot redefine property: name

Object.defineProperty(sameer, 'name', { writable: false }); // --->  it can change writable

sameer.name = "Dosa"; // --->  it will not change name as writable is false
console.log(sameer);

