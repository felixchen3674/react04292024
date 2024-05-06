## Homework

### Answer

- **What is prototype**

  - An object has access to its prototypes’ properties
  - Examples
    Prototype is used for attaching methods to object types, which can then be inherited by instances.

Array is Object, and it has prototype property that instances of objects can access directly, like sort(),filter(), reduce()

- **What is class**

  - ES6 syntax sugar for constructor functions
  - Can define prototype methods
  - Static

  It provides a much cleaner and clearer syntax to create objects and handle inheritance, and it can define prototype methods inside, Static methods are called on the class itself, not on instances of the class

- **This keyword**

  - Is the object that’s invoking the method
  - Different places, different behaviors. Examples

  This keyword is the object that’s invoking the method.

  In regular function calls not associated with any object, 'this' defaults to the global object (e.g., window in browsers)
