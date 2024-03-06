# What is Execution Context ?

In JavaScript, code is run in environments known as execution contexts.

#### when _this_ is placed globally in a JavaScript environment, it will typically print the global object to the console.
### NOTE : 
- It is different for browser where it refer to (windows object) ,

-  and in js engines like node , deno ***this*** refer to different values of global context vary upon environment  like in nodejs it gives **{}** when code run in strict mode 

## There are two main types of execution contexts: global and local (function) contexts.


# Global Execution Context:

- The term **"global execution context"** typically refers to the global context in which JavaScript code is executed.
- The global execution context is the outermost context where code is executed. It represents the entire JavaScript program.
- It includes global variables and functions that are not inside any specific function.
- The global context is created when the script is executed and remains until the program terminates.

# Local (Function) Execution Context:

- Each time a function is invoked, a new local execution context is created.
- Local contexts are nested inside the global context, and each function call creates a new local context on top of the call stack.
- Local contexts are temporary and are removed from the stack once the function finishes executing.

# Call Stack:

- The JavaScript engine uses a call stack to manage the execution contexts.
- When a function is called, a new execution context is pushed onto the top of the call stack.
- When a function completes its execution, its context is popped off the stack.
