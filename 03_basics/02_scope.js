let a = 100;
const b = 200;
var c = 300;
if (true) {
    let a = 10; // --->  only accessible withing scope ({})
    const b = 20;   // --->  only accessible withing scope ({})  // --> treated as new variable
    // b = 20;   // --->  not treated as new variable and throw and error "try to change const"
    var c = 30;  // --->  Can be accessible outside scope ({}) // ---> will change global variable

    // console.log(`Inside : ${a}`);  // --> Output : 100
    // console.log(`Inside : ${b}`);  // --> Output : 20
    // console.log(`Inside : ${c}`);  // --> Output : 30
}
// console.log(`Outside : ${a}`);  // --> Output : 100
// console.log(`Outside : ${b}`);  // --> Output : 20
// console.log(`Outside : ${c}`);  // --> Output : 30

// *******************************************************
// <2> function inside function and scope of variable

function parent() {
    const user = "Sameer";

    function child() {
        const website = " Youtube";
        console.log("Child : ",user + website);
    }
    console.log("Parent : ",user);
    // console.log("Parent : ",website); // --->   out of scope 
    
    child();
    // console.log("Parent : ",website); // --->   out of scope 

}

// parent(); // --->  do nothing if parent doesn't call child

// child(); // --->  it doesn't call child() because it is inside parent which is out of scope  //+++++ Important +++++

// parent(); // --->  output : Parent :  Sameer
// Child :  Sameer Youtube

//********************************************************
//+++++ Interesitng +++++
 
// there are various way to declare function two of them are :


// <1> declaring function   // ---> simple

console.log(`before creation : ${addOne(3)}`); // --> Output : before creation : 4
function addOne(num) {
    return num + 1;
}
console.log(`after creation : ${addOne(3)}`);  // --> Output : after creation : 4

//********************************************************
// <2> creating functin as variable   // ---> another way

// console.log(`before creation : ${addTwo(3)}`);  // --> Output : Error "calling before intialization" //+++++++++ important +++++++++++

const addTwo = function (num) {
    return num + 2;
}

console.log(`after creation : ${addTwo(3)}`);  // --> Output : after creation : 5