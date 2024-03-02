# javascript and classes
### Javascript supports oops after ES6 it provide syntactic sugar for constructor functions and prototype

## OOP(Object Oriented Programming)

## Object
- collection of properties and methods

## why use OOP
### oops help us to solve real world problems by creating classes of real world entities and then intialising instance of that classes called objects
### *Note :* No memory is allocated for a specific class until you instantiate it by creating an instance of that class 

## parts of OOP
Object literal 

- [Constructor function](#constructor-functioin-in-javascirpt)
- [Prototype](#prototype-in-javascript)
- Instances (new, this)


## 4 Pillars of OOPs
- **Abstraction** : Showing the essentials and hiding the Unessary behaviour.
- **Encapsulation** : Wrapping _data_ and _methods_ that manipulate that data in single unit.
- **Inheritance** : Inheriting the properties of Another Class (enhance code reusability).
- **Polymorphism** : The ability of different objects to respond to the same method or property name, even if their implementations differ.

# Constructor Functioin in Javascirpt
- A constructor function in JavaScript is a special type of function that is used for creating and initializing objects.
- It serves as a blueprint or template for creating multiple instances of objects with similar properties and methods.

    #### Key Points 

    1. **Instance Creation :** The primary purpose of a constructor function is to create instances (objects) of a particular type.
   
    2. **new Keyword :** To create an instance of an object using a constructor function, you use the new keyword followed by the function call.
    ```javascript
    function Person(name, age) {
    this.name = name;
    this.age = age;
    }
    const john = new Person('John', 30);
    ```
    3. **this Keyword:** Inside a constructor function, the this keyword refers to the new object being created. It allows you to set properties on the object.

    4. **Properties and Methods:** You can define properties and methods within the constructor function, and they will be part of each instance created from that constructor.

    5. **Prototypes:** To share methods among all instances and optimize memory usage, methods are often added to the constructor's prototype.
# Prototype in Javascript 

- ## Prototype

    - The prototype is an object that can contain properties and methods.
    - These properties and methods are shared among instances created from a constructor function.

- ## Association

    - The prototype is typically assigned to the ***prototype*** property of the constructor function.
    - Instances created from that constructor function inherit from this prototype.

- ## Inheritance

    - When you create an instance of a constructor function using the **new** keyword, the instance inherits properties and methods from the prototype of the constructor function.

- ## Memory Efficiency

    - Methods defined on the prototype are shared among all instances.
    - They exist in a single place in memory, reducing memory consumption compared to defining the same method for each instance separately.

- ## Empty Prototype {}

    - If you don't explicitly define properties or methods on the prototype, it remains empty. 
    - In this case, instances will still inherit from the default Object.prototype, which includes basic JavaScript methods.


## Importance of ***new*** keyword 

- Here's what happens behind the scenes when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
