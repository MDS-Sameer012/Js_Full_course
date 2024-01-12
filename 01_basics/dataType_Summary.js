// console.log(null==0); //false
// console.log(null!=0); //true
// console.log(null>0); // false
// console.log(null<0); // false
// console.log(null<=0); //true
// console.log(null>=0); //true

// console.log(undefined==0); //false
// console.log(undefined!=0); //true
// console.log(undefined>0); // false
// console.log(undefined<0); // false
// console.log(undefined<=0); //true
// console.log(undefined>=0); //true

let myfunc = function(){
    console.log("hello world");
}
// console.log(typeof(myfunc));
// console.log(typeof(function(){}));

let cricketers = ["Virat","Dhoni","Rohit"];
// console.log("Array DataType : ",typeof cricketers);

let bigNumber = 999999999999999999999999999999999999999n;
// console.log("Big Number DataType : ",typeof(bigNumber));

// console.log("null datatype : ",typeof(null));

let id1 = Symbol("123");
let id2 = Symbol("123");
// console.log(id1 == id2); // false it uniquely identify two variable
// console.log("type of symbol : ",typeof id1);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MEMORY IN JS

// STACK (Stored primitve datatype it passess copy of variable as an argument)
let userName = "Sameer";
let newUserName = userName;
newUserName = "Sohail";
// console.log("user Name : ",userName);
// console.log("New Name : ",newUser);

let user = {
    name: "Sameer",
    email:"sameer@gmail.com"
}
let newUser = user;
console.table({Old_User:user,New_User:newUser});

console.log("After Change");
newUser.email="mds@gmail.com";
console.table({Old_User:user,New_User:newUser});