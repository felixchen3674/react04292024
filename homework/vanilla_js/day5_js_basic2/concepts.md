# Interview Questions

## Array Traversal

- **How to traverse an array?**
  - _For loop / forEach / for … of …_
  - answer:
  1. The normal for loop: for (let i = 0; i < nums.length; i++) {}
  2. forEach: nums.forEach((num) => console.log(num))
  3. for...of...: for (let num of nums) {}

## Array Methods

- **What does array.prototype.map method do**
  - _takes a callback / return a new array_
  - answer: array.prototype.map method take a callback function and return the result to a new array
  - for example:
    const newNums = nums.map((num) => num \* num)

## Destructuring

- **What is destructure**
- answer: to descturct an array or an object
- const arr = [1, 2, 3]
  let [num1, num2, num3] = arr
  console.log(num1)
  const obj = {name: 'Alex', job: 'teacher', city: 'LA'}
  let {name, job, city} = obj
  console.log(name)

## Object Copying Methods

- **What is shallow vs deep copy**
  - _explain each_
  - answer: a shallow copy creates a new array of a new object, but it does not create new copies
    of the elements within the array or the object. Instead, it points to the same elements as the original object.
    a deep copy creates a completely independent copy of both the object and its data, it does not share any data
    with the original object
- **Explain how to do both:**

  - _shallow: spread operator_
    const shallowCopyObj = {...originalObj}

  - _deep: 3rd party library: lodash_
    const \_ = require('lodash')
    let deepCopy = \_.cloneDeep(obj)
