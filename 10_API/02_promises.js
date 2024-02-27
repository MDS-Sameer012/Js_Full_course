//Promise is Do an async task
// like DB calls, cryptography, network (or any other tasks which need time)

//********************************************************
// <1> using resolve()  // --->

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Promise One Executed...");
    resolve(); // --->  no matter where we place it above or below console.log('') it will give us same result means then code is executed after promise code
  }, 1500);
});
// NOTE : then code is not executed unless we call resolve() function in promise
promiseOne.then(() => console.log("Pomise one successful"));

//********************************************************
// <2> another way to create promise   // ---> without declaring variable

new Promise((resolve, reject) => {
  // --->  it is executed without any calling or then
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(() => console.log("Asyn Task 2 Completed"));

//********************************************************
// <3> passing argunments to resolve()   // ---> to work with data in then
// NOTE: then is only executed when our promise is successfuly completed we can use this when we want to do task only when particular work is done and when can also chain then() also known as

const promiseThree = new Promise((resovle, reject) => {
  const user = {
    name: "Sameer",
    gender: "male",
    age: 20,
    nationality: "India",
  };
  setTimeout(() => {
    console.log("Promise Three Executed...");
    resovle(user);
    //   resovle();
    //   return user; // --->  it it not working
  }, 2000);
})
  .then((response) => {
    console.log(`Promise 3 Completed `);
    // NOTE :
    // The reason the line 46 is not printing the object completely is likely due to the fact that the object is being converted to a string when using template literals. In JavaScript, when you use template literals with ${}, it implicitly calls the toString() method on the object.

    console.log(`[Data Recieved] : ${response}`);
    console.log(response);
    return response.name;
  })
  .then((userName) => console.log(`Hello ! ${userName}`));

//********************************************************
// <4> reject parameter of callback function inside promise    // ---> it is used to handle failure
// NOTE : if data is tried to fetch from any source and it return [404 NOT Found] status then it is also treat as resolve not reject as it is returing something may not be desirable data
// reject is considered only when code is failed to connect to source or getting response from source

const promiseFour = new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    console.log("Promise Four Executed...");
    resolve();
  } else {
    reject(); // --->  it is used to handle exception and connect to catch
  }
});

promiseFour
  .then(() => console.log("Promise 4 Completed !"))
  .catch(() => console.log("Error : Somthing went wrong"));

//********************************************************
// <5> finally   // ---> it is always executed either the promise is successfuly completed or get some error unlike then and catch

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("Promise Five Executed...");
      resolve();
    } else {
      reject("Error : Something Went Wrong in Promise 5 !");
    }
  }, 2000);
});

promiseFive
  .then(() => console.log("Promise 5 Completed"))
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise is Ended")); // --->  it can be used in operation which we want to be execute in any condition like closing file or disconnecting database connection

//********************************************************
//   <6> consuming promise using async function   // --->

const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log("Promise Six Executed...");
      const student = { name: "Sohail", age: 19 };
      resolve(student);
    } else {
      reject("Error : Something went wrong in Promise Six !");
    }
  }, 2500);
});

async function consumePromiseSix() {
    //   const response = promiseSix; // --->  it will assing promiseSix to response it doesn't wait to resolve promise six and executed first if we want that our code is executed if promise six is resolve then we need to use await funtion
    try {
          const response = await promiseSix;
  console.log(response); // --->  if we didn't use 'await' in above line then it will give output :  Promise { <pending> } and if we use "await" then it will give output base on promise six code
  getName(response.name);
  console.log("Promise 6 completed");

  function getName(name) {
    console.log(`Student Name : ${name}`);
  }
    }
    catch (error) {
        console.log(`Error Catched : ${error}`);
        }
}

consumePromiseSix()
  .then(() => console.log("Promise 6 Confirmed"))   // --->  if we handle error inside async function then even after error then code is executed not catch code 
  .catch((error) => console.log(error));        // --->  we also use then and catch here also
