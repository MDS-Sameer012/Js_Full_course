// IIFE ('I'mmediate 'I'nvoked 'F'unction 'E'xpression)

//* some time there is probablity that our function is get polluted by global stuff like variables , expression etc. so we use IIFE to prevent this pollution 

// * this will invoked function immediatly just after it is created

// <1> Named IIFE
(function sayHello() {
    console.log("Hello Audience!");
})(); // --->  semicolon is mandatory in this case to end function context otherwise out code will give error


// <2> Unnamed IIFE

((name) => {
    console.log( `Hello ${name}`);
})("Sameer");

((num1, num2) => (console.log(num1 + num2)))(2, 3); // --> Output : 5 [this is also working]
