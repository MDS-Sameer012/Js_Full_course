# # Lexical scope 
- Lexical scope, also known as static scope, is a concept in programming languages where the scope of a variable is determined by its location within the source code during the lexical analysis phase, rather than during runtime.

- In simpler terms, lexical scope refers to how variable names are resolved in nested functions based on where the functions are declared in the code.

- In My Language, Lexical Scope is the refer to the enclosed scope of nested function or we can say that it is the scope of it's(nested function)'s parent;s scope

# # Closure 
 It is a feature that allows a function to remember and access its lexical scope even when that function is executed outside that scope. This means that a function in JavaScript retains access to variables from its containing (enclosing) scope even after the outer function has finished executing.

## # Example
 ```javascript
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
 ```
 ### Output
 > I am inner
 >
 > I am outer

# # Steps of Execution of Program 


1. **Global Execution Context Creation :** This is where the global execution context is set up.

2. **Memory Creation Phase :**
   - Variables are allocated memory, but values are not assigned yet.
   - References to function definitions are created.

3. **Execution Phase :**
   - `outerFunction` is called, pushing it onto the call stack.
   - Execution context for `outerFunction` is created, and memory space is allocated for `outerVariable`.
   - `innerFunction` is defined within `outerFunction`.
   - `innerFunction` is returned from `outerFunction`, and `outerFunction` is popped from the call stack.
   - `closureFunc` is assigned the reference to `innerFunction`.
   - `closureFunc` is called, pushing it onto the call stack.
   - Inside `innerFunction`, `console.log(outerVariable)` accesses the variable `outerVariable` from the lexical scope of `outerFunction`, even though `outerFunction` has already been popped from the call stack. This is possible due to closure, which allows `innerFunction` to maintain access to its enclosing lexical scope.
