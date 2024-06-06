// Exercise 1: Basic Closures
// Create a function createGreeting(greeting) that takes a string greeting and returns a function.
// The returned function should take a name as an argument and return a string that
// combines the greeting and the name.

// const sayHello = createGreeting("Hello");
// console.log(sayHello("Alice"));  // Outputs: "Hello Alice"
// const sayHi = createGreeting("Hi");
// console.log(sayHi("Bob"));  // Outputs: "Hi Bob"
function createGreeting(greeting) {
  return (name) => {
    return `${greeting} ${name}`;
  };
}

const greetingFunc1 = createGreeting("Hello");
const greetingFunc2 = createGreeting("How are you");

// console.log(greetingFunc1 === greetingFunc2);

const message = greetingFunc1("Alice");
const message2 = greetingFunc2("Jack");

// console.log(message);
// console.log(message2);

function functionStore() {
  const functions = {};
  return {
    store: (key, fn) => {
      functions[key] = fn;
    },
    run: (key, ...args) => {
      console.log(args);
      //   console.log(functions[key]);
      functions[key](...args);
    },
  };
}

const fnStore1 = functionStore();

fnStore1.store("greeting", greetingFunc1);
fnStore1.run("greeting", "Alice", "Bob", "David");
