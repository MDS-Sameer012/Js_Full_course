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
console.log(id1 == id2); // false it uniquely identify two variable
console.log("type of symbol : ",typeof id1);