/* Arrow Function */
// ES6 Syntax
console.log(sum1(2, 3))
function sum1(x, y) {
  return x + y
}

console.log(sum2(2, 3))
const sum2 = function (x, y) {
  return x + y
}
console.log(sum3(2, 3))
const sum3 = (x, y) => {
  return x + y
}

const timesTwo = x => x * 2

console.log(timesTwo(2))

// Doesn't bind its own 'this' keyword
const people = {
  name: 'Alex',
  regularFunction: function () {
    console.log(this.name)
  },
  arrowFunc: () => {
    console.log(this.name)
  }
}

people.regularFunction()
people.arrowFunc() // will show undefined


/* Closure */

// Inner function has access to outer function’s variables
// Can access the variables even after function has returned
function outer() {
  let name = "Peter"
  function inner() {
    console.log(`My name is ${name}`)
  }
  return inner
}

const test = outer()
test() // can access name in outer() function, output: My name is Peter


// Can create private variables

function counter() {
  let count = 0

  function increment() {
    count++
  }

  function getCount() {
    console.log(count)
  }

  return { increment, getCount }
}

const { increment, getCount } = counter()
increment()
getCount() // Can only get the result through the method.
console.log(counter.count) // Output is undefined, cannot access to 'count'




/* What is currying */

// Chaining of functions
const curryingMutiply = x => y => z => x * y * z
// console.log(curryingMutiply(2, 5, 3)) // pass all the variables at the same time.
console.log(curryingMutiply(2)(5)(3)) // pass the variable one by one.

  // ()()()...


  /* What is IIFE */

  // IIFF (Immediately Invoked Function Expressions)
  (function showName() {
    console.log('My name is Paul.')
  })()

  (function () {
    console.log('My name is Paul.')
  })()

  (() => console.log('My name is Paul.'))()


  // Can have private variables
  (() => {
    const name = 'Peter'
    console.log(name)
  })()

/* What is higher order function */
// functions that can take other functions as arguments or return a function as their result.

const nums = [1, 2, 3]
const squaredNums = nums.map(num => num * num)
console.log(squaredNums)