# Interview Questions

## Array Traversal

- **How to traverse an array?**
  - _For loop / forEach / for … of …_
  Answer: 
  for loop: The traditional for loop allows you to iterate over an array using an index variable.
  forEach: takes a callback function as an argument and executes that function for each element in the array.
  for...of: It is very similar to traditional for loop. It simplifies the syntax compared to the traditional for loop.

## Array Methods

- **What does array.prototype.map method do**
  - _takes a callback / return a new array_
  Answer: 
  It creates a new array by calling a function inside .map() on each element of the original array. It does not change the original array but returns a new array.

## Destructuring

- **What is destructure**
Answer:
It allows you to extract values from arrays or objects and assign them to variables in a concise way.
---mention rest operator
---difference between array and obj destructure

## Object Copying Methods

- **What is shallow vs deep copy**
  - _explain each_
  Answer:
  Shallow copy: It creates new object or array and copies the references of the original object or array's element into the new object or array. If any changes are made to the shared elements in the new or original object or array, the changes will be reflected in both.

  Deep copy: Deep copy creates a new object or array and recursively copies the elements of the original object or array, including any object or array referenced within it. Changes made to the elements in the deep copy do not affect the original object or array or any other copied object or array.

- **Explain how to do both:**
  - _shallow: spread operator_
  - _deep: 3rd party library: lodash_
Answer:
  **I personally need explanation. Could not understand the examples that were given.
        // const xArray = [1, 2, 3];
        // const zArray = [...xArray];

        // console.log(xArray); // [1, 2, 3]
        // console.log(zArray); // [1, 2, 3]

        // zArray.push(10); // Modifying zArray, not affecting xArray?? then is it shallow copy???

        // console.log(xArray); // [1, 2, 3]
        // console.log(zArray); // [1, 2, 3, 10]

        // zArray[0] = 100; //Modifying a shared element, affecting both arrays. this is shallow copy.
