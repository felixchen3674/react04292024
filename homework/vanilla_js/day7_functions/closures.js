// Exercise 1: Basic Closures
// Create a function createGreeting(greeting) that takes a string greeting and returns a function.
// The returned function should take a name as an argument and return a string that
// combines the greeting and the name.

// const sayHello = createGreeting("Hello");
// console.log(sayHello("Alice"));  // Outputs: "Hello Alice"
// const sayHi = createGreeting("Hi");
// console.log(sayHi("Bob"));  // Outputs: "Hi Bob"
export function createGreeting(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

// Exercise 2: Counter
// Write a function createCounter() that initializes a counter to 0 and returns an object with two methods:
// increment() which increments the counter and returns the new value,
// and getValue() which returns the current value of the counter.

// let counter = createCounter();
// console.log(counter.getValue());  // Outputs: 0
// console.log(counter.increment());  // Outputs: 1
// console.log(counter.increment());  // Outputs: 2
// console.log(counter.getValue());  // Outputs: 2
export function createCounter() {
  let value = 0;
  return {
    increment: function () {
      value += 1;
      return value;
    },
    decrement: function () {
      value -= 1;
      return value;
    },
    getValue: function () {
      return value;
    },
  };
}

// Exercise 3: Function Store
// Create a function functionStore() that allows you to store and retrieve functions by a key.
// It should return an object with two methods: store(key, fn) which stores the function fn
// under the string key, and run(key, ...args) that runs the function stored under key with
// the provided arguments.

// Example;
// let store = functionStore();
// store.store("add", (a, b) => a + b);
// console.log(store.run("add", 5, 7)); // Outputs: 12
export function functionStore() {
  const store = {};
  return {
    store(key, fn) {
      store[key] = fn;
    },
    run(key, ...args) {
      const fn = store[key];
      return fn(...args);
    },
  };
}

// Exercise 4: Private Variables
// Write a function createPerson(name) that creates private variables and provides methods
// to access and modify them. This function should return an object with methods getName()
// to return the current name, and setName(newName) to set a new name.

// let person = createPerson("Alice");
// console.log(person.getName());  // Outputs: "Alice"
// person.setName("Bob");
// console.log(person.getName());  // Outputs: "Bob"
export function createPerson(name) {
  let personName = name;
  return {
    getName() {
      return personName;
    },
    setName(newName) {
      personName = newName;
    },
  };
}

// Exercise 5: Limited Call Function
// Description: Write a function createLimitedCallFunction(fn, limit) that
// takes a function fn and a number limit as arguments. This returned function can only be
// called up to limit times. After the limit is reached, every subsequent call to this function
// should be ignored.

// function sayHello() {
//   console.log("Hello!");
// }

// let limitedHello = createLimitedCallFunction(sayHello, 3);
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // No output, subsequent calls are ignored

export function createLimitedCallFunction(fn, limit) {
  let callCount = 0;

  return function (...args) {
    if (callCount < limit) {
      callCount += 1;
      return fn(...args);
    }
  };
}

// Exercise 6: Rate Limiter
// Implement a function createRateLimiter(limit, interval) that limits how often a
// given function can be called. The function should return a new function that, when called,
// will invoke the original function only if a certain amount of time (interval in milliseconds)
// has passed since the last invocation. The limit parameter should specify how many times the function
// can be triggered within the given interval.

// function logMessage(message) {
//   console.log(message);
// }

// let limitedLog = createRateLimiter(logMessage, 2, 10000); // Allow 2 calls every 10 seconds
// limitedLog("Hello"); // "Hello" is logged
// limitedLog("World"); // "World" is logged
// limitedLog("Again"); // This call is ignored

export function createRateLimiter(fn, limit, interval) {
  const callTimestamps = [];

  return function (...args) {
    const now = Date.now();

    while (callTimestamps.length > 0 && now - callTimestamps[0] >= interval) {
      callTimestamps.shift();
    }

    if (callTimestamps.length < limit) {
      callTimestamps.push(now);
      fn(...args);
    }
  };
}
