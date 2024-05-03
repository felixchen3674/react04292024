## how to traverse an array?

For loop / forEach / for … of …
For loop: The traditional for loop is one of the most basic ways to iterate over an array. It gives you control over the iteration, allows you to modify the array as you iterate, and you can use it to break out of the loop based on a condition.

foreach(): The forEach() method executes a provided function once for each array element. It is a part of the Array prototype and offers a concise syntax for iterating over arrays.

for ...of: The for...of loop is part of ES6 (ECMAScript 2015) and provides a clean syntax for iterating over iterable objects like arrays, strings, Maps, Sets, etc.
const array = ['a', 'b', 'c', 'd'];

for (const element of array) {
console.log(element); // Print each element
}

## what does array.prototype.map method do

Callback Function: The callback function you provide to map can take up to three arguments:
The current element being processed in the array.
The index of the current element being processed.
The array map was called upon.
Return Value: Each time the callback executes, the returned value is added to the new array. If no return value is specified, undefined will be added to the new array for that position.

## what is destructure

Desturcturing allows javascript to unpack properties from object or unpack values from array

## what is shallow vs deep copy

A shallow copy of an object or array copies the top-level properties or elements. If the original object or array contains references to other objects or arrays, the shallow copy will also reference these nested objects. Changes to nested objects in the original will reflect in the shallow copy and vice versa, because only the references are copied, not the actual nested objects.

Using the Spread Operator:
The spread operator (...) provides a concise syntax to create shallow copies of arrays and objects.Array Example:
const originalArray = [1, 2, 3, { a: 4, b: 5 }];
const shallowCopyArray = [...originalArray];
shallowCopyArray[3].a = 10; // This affects both arrays.
console.log(originalArray); // [1, 2, 3, { a: 10, b: 5 }]

A deep copy means duplicating everything. A deep copy of an object or array will recreate each nested object. Changes to nested objects in a deep copy do not affect the original object, as they are completely independent copies.

Libraries like Lodash provide utility functions that handle deep copying very efficiently. The \_.cloneDeep() function from Lodash is a popular choice for making deep copies.

const \_ = require('lodash');

const originalObject = { x: 1, y: { z: 2, w: [1, 2, 3] } };
const deepCopyObject = \_.cloneDeep(originalObject);
deepCopyObject.y.z = 3;
deepCopyObject.y.w.push(4);
