function outerFunction(){
    let outerVariable = 'I am outer';
    function innerFunction(){
        let innerVariable = 'I am inner';
        console.log(innerVariable);
        console.log(outerVariable);
    }
    // console.log(innerVariable); //--> throws error as out of scope
    return innerFunction;
}
const closureFunction = outerFunction();
closureFunction();
//--> output : I am inner
                // I am outer