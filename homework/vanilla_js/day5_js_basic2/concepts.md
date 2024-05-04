# Interview Questions

## Array Traversal

- **How to traverse an array?**
  - _For loop / forEach / for … of …_<br>
    We mainly have three way of traversing an array, which are For loop, forEach, and for ... of...
    For Loop allows you to have complete control over iteration process, it is useful when you need to access indexes of array.
    forEach is more concise but you can control the iteration by break and continue keyword.
    for... of ... is more concise but doesnt allow you access the index of the array/

## Array Methods

filter, map, find, every, reduce, some, includes

- **What does array.prototype.map method do**
  - _takes a callback / return a new array_<br>
    Usage: map() is commonly used for transforming data in an array, such as converting all elements to a different format, multiplying numbers, extracting properties from an array of objects, etc.

## Destructuring

- **What is destructure**<br>
  Destructuring in JavaScript ES6 allows developers to extract elements from arrays or properties from objects into distinct variables

## Object Copying Methods

- **What is shallow vs deep copy**
  - _explain each_<br>
    Shallow Copy: Copies the outer structure but not deep nested structures, which share the same references.
    Deep Copy: Independently copies every level of the object, eliminating reference sharing and potential mutations.
- **Explain how to do both:**
  - _shallow: spread operator_
  - _deep: 3rd party library: lodash_<br>
    const originalArray = [1, 2, 3, { a: 4 }];
    const shallowCopyArray = [...originalArray];
    In this case, changing a primitive element in shallowCopyArray won't affect originalArray, but modifying a nested object (like changing { a: 4 } to { a: 5 }) will affect both arrays because the object is shared.<br/>
    Usage: Once lodash is installed, you can use cloneDeep to perform a deep copy:
    const _ = require('lodash');
    const originalObject = { a: 1, b: { c: 2, d: [3, 4] } };
    const deepCopyObject = _.cloneDeep(originalObject);
    In this example, deepCopyObject is a completely independent copy of originalObject, including all nested objects and arrays. Changes to any level of deepCopyObject will not affect originalObject.
