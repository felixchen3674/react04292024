# Interview Questions

## Array Traversal

- **How to traverse an array?**

  - _For loop / forEach / for … of …_

  Answer: There are multiple ways to traverse an array:
  Using a traditional for loop.
  Utilizing prototype method like forEach, map, filter and so on.
  Employing a for ... of ... loop.

## Array Methods

- **What does array.prototype.map method do**
  - _takes a callback / return a new array_
    Answer: The map method applies a provided function to each element of the array, and returns a new array containing the results of calling the function on each element.

## Destructuring

- **What is destructure**

Answer: Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

## Object Copying Methods

- **What is shallow vs deep copy**
  - _explain each_
- **Explain how to do both:**
  - _shallow: spread operator_
  - _deep: 3rd party library: lodash_

Answer: Shallow copy creates a new object, but does not recursively copy nested objects. Changes made to the original object will be reflected in the shallow copy, and vice versa.Deep copy creates a new object and recursively copies all nested objects. Changes made to the original object will not affect the deep copy, and vice versa.

Shallow copy can be achieved using the spread operator (...).
Deep copy can be done using third-party libraries like lodash, which provide functions like \_.cloneDeep().
