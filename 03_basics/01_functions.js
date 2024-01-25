// funcitons in js
function printMyName() {
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("R");
}

// printMyName // --->  this is just a reference to function and doesn't execute function

// printMyName(); // --->   this will execute our function 
// --> Output : S
// A
// M
// E
// E
// R

function printName(name) {
    let newName = name.toUpperCase();
    for (let i = 0; i < newName.length; i++) {
        if (i === newName.length - 1) {
            return newName[i];
        }
        console.log(newName[i]);
    }
}

// console.log(printName("Sohail")); // --->  without return statement it will return undefined
// --> Output : S
// O
// H
// A
// I
// L
// undefined
// console.log(printName("John Cena"));  //---> it will print without undefined 
// --> Output : J
// O
// H
// N
 
// C
// E
// N
// A

function userLoggedInMessage(username) {
    if (username === undefined) {
        return `Please Enter Valid User Name`;
    }
    return `${username} Just Logged in`;
}

// console.log(userLoggedInMessage("Nitin")); // --> Output : Nitin Just Logged in
// console.log(userLoggedInMessage("")); // --> Output :  Just Logged in
// console.log(userLoggedInMessage(3)); // --> Output : 3 Just Logged in
// console.log(userLoggedInMessage()); // --> Output :Please Enter Valid User Name
// console.log(userLoggedInMessage(true)); // --> Output : true Just Logged in
// console.log(userLoggedInMessage(false)); // --> Output : false Just Logged in

function userLoggedInMessage2(username) {
    if (!username) {
        return `Please Enter Valid User Name`;
    }
    return `${username} Just Logged in`;
}
// console.log(userLoggedInMessage2("Nitin")); // --> Output : Nitin Just Logged in
// console.log(userLoggedInMessage2("")); // --> Output : Please Enter Valid User Name
// console.log(userLoggedInMessage2(3)); // --> Output : 3 Just Logged in
// console.log(userLoggedInMessage2()); // --> Output : Please Enter Valid User Name
// console.log(userLoggedInMessage2(true)); // --> Output : true Enter Valid User Name
// console.log(userLoggedInMessage2(false)); // --> Output : Please Enter Valid User Name

// <*> rest Operator

// if we don't know how many arguments will be passed as parameter in function call then we use rest operator 
function calculateCartPrice(...price) { // --->  rest operator ...variable_name it will return array 
    return price;
}
// console.log(calculateCartPrice(200));   // --> Output : [ 200 ]
// console.log(calculateCartPrice(200,400));   // --> Output : [ 200 , 400 ]
// console.log(calculateCartPrice(200,400,100));   // --> Output : [ 200, 400, 100 ]

function calculateCartPrice2(...price) { // --->  rest operator ...variable_name it will return array 
    let totalPrice=0;
    for (let i = 0; i < price.length; i++){
        totalPrice += price[i];
    }
    return totalPrice;
}
// console.log(calculateCartPrice2(200));   // --> Output :200
// console.log(calculateCartPrice2(200,400));   // --> Output : 600
// console.log(calculateCartPrice2(200, 400, 100));   // --> Output : 700

// <*> object as parameter in function

function greetUser(userdetail) {
    return `Hello ${userdetail.name} , Welcome to MDS Network`;
}
// console.log(greetUser({ name: "Sameer" })); // --> Output : Hello Sameer , Welcome to MDS Network
let newUser = { 
    name: "Priya",
    role: "Front End Developer",
    gender : "Female"
}
 let newEmployees = [{ 
    name: "Priya",
    role: "Front End Developer",
    gender : "Female"
},
{ 
    name: "Sameer",
    role: "Full Stack Developer",
    gender : "Male"
     },
{ 
    name: "Harsh",
    role: "Back End Developer",
    gender : "Male"
     }
 ]
// console.log(greetUser(newUser));  // --> Output : Hello Priya , Welcome to MDS Network

// another function for print user detail

function printEmployeeDetails(newEmployees) {
    for (let i = 0; i < newEmployees.length; i++){
        console.log("\n*****************************");
        console.log(`Name : ${newEmployees[i].name}`);
        console.log(`Gender : ${newEmployees[i].gender}`);
        console.log(`Role : ${newEmployees[i].role}`);
    }
    return `*******************************`;
}

console.log(printEmployeeDetails(newEmployees));
// --> Output : 
// *****************************
// Name : Priya
// Gender : Female
// Role : Front End Developer

// *****************************
// Name : Sameer
// Gender : Male
// Role : Full Stack Developer

// *****************************
// Name : Harsh
// Gender : Male
// Role : Back End Developer
// *******************************