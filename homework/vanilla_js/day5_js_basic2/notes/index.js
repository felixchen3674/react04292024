// Array
// In JavaScript, an array is a data structure used to store multiple values in a single variable. Arrays can hold any type of data—numbers, strings, 
// objects, other arrays, etc.—and they are ordered, meaning each item has a numeric position in the array.
// Creation: You can create an array using square brackets []. For example: let fruits = ["apple", "banana", "cherry"];
// Accessing Elements: You can access an element of an array by referring to its index. Arrays in JavaScript are zero-indexed, which means the first element is at index 0. For example: fruits[0] will give you "apple".
// Length: The length property provides the number of elements in an array. For example, fruits.length would return 3 in the case of the fruits array.
// Manipulation: JavaScript provides various methods to manipulate arrays. Some common methods include:
// push(): Adds one or more elements to the end of an array and returns the new length of the array.
// pop(): Removes the last element from an array and returns that element.
// shift(): Removes the first element from an array and returns that element.
// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// slice(): Returns a shallow copy of a portion of an array into a new array object.
// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Objects
// Creation: Objects can be created using curly braces {} with an optional list of properties.
// Accessing Properties: You can access properties of an object using dot notation or bracket notation. For example:
// person.name would access the name property of the person object, returning "Alice".
// person['age'] also accesses the age property, returning 25.
// Methods: Objects can contain functions as properties, referred to as methods. These functions can act on the data contained within the object. For example, person.greet() would execute the greet function, outputting "Hello!".
// Dynamic Nature: JavaScript allows you to add or remove properties from objects dynamically. For example, you can add a new property like person.job = "Developer"; or delete a property using delete person.age;.
// Prototypal Inheritance: In JavaScript, objects can inherit properties from other objects. This is achieved via the prototype chain. Every object in JavaScript has a property called prototype from which it can inherit methods and properties.
// Built-in Objects: JavaScript provides several built-in object types such as Date, Array, Function, and others. These objects come with a variety of methods that facilitate common tasks.

// The forEach method executes a provided function once for each array element. It's typically used for performing actions with each item in the array.
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array. It's used for transforming the elements of an array.

// The filter method creates a new array with all elements that pass the test implemented by the provided function. It's useful for filtering items out of an array.

// The find method returns the value of the first element in the array that satisfies the provided testing function. If no elements match, it returns undefined.

// The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It's great for summarizing or combining data from an array.
// const numbers = [1, 2, 3, 4, 5];
//  const sum = numbers.reduce(function(accumulator, currentValue) {
//    return accumulator + currentValue;
//  }, 0);  // 0 is the initial value of the accumulator
//  console.log(sum);  // Output: 15

// Shallow Copy
// A shallow copy of an object or an array copies only the top-level properties or elements. If the original object or array 
// contains other objects or arrays, the shallow copy will copy the references to these nested objects, not the actual objects.
// This means that if you modify the nested objects in the original, those changes will be reflected in the shallow copy, and vice versa.

// Deep Copy
// A deep copy of an object or array duplicates everything. It creates a new instance of each nested object and copies all the nested objects as well, not just the references. This means that modifications to nested objects in the original will not affect the copied object, and vice versa

// .? chaining
// In JavaScript, the optional chaining operator (.?) is a useful feature that allows you to safely access deeply nested properties of an object without having to check if each reference in the chain is nullish (null or undefined). This can prevent runtime errors that occur when trying to access a property on undefined or null.

