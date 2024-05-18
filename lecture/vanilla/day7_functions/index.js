// [1,2,3].forEach(function foo(element) {
//   console.log(element);
// });

// Immediately invoked function
// invoked right after it's created
const result = (function foo() {
  const a = 1;
  const b = 1;
  const c = 1;

  // console.log("foo");
  return "result" + a + b + c;
})();

// console.log(result);

// one purpose of closure is to create private variables

// inner func has access to outer func variables
// example: getCount and setCount can access count, due to lexical scoping

// closure means we still have access to the variables even after the function has returned
function outerFunc() {
  let count = 0;

  return {
    getCount() {
      return count;
    },
    setCount(newCount) {
      count = newCount;
    },
  };
}

// console.log(typeof console.log);

const countInterface = outerFunc();

// console.log(countInterface.count);
// console.log(countInterface.getCount());
// countInterface.setCount(5);
// console.log(countInterface.getCount());

function garbageCollectionExample() {
  // it has 100 properties, a lot of them
  const obj = {
    b: "very big",
  };

  //when function returns, we will never have access to obj again
  //javascript will do garbage collection and remove/destroy obj
  return;
}

// how we can have private variables in es6 with class
class Book {
  //# makes the variable private
  author;
  publicVar = "public";
  #secret;
  constructor(author, secret) {
    this.author = author;
    this.#secret = secret;
  }

  getSecret() {
    return this.#secret;
  }
}

// const book1 = new Book("Felix", "OIC8Tduiqwkb&#!cq");
// console.log(book1.author);
// console.log(book1.publicVar);
// console.log(book1.getSecret());

// function higherOrderFunc(callback) {
//   return () => {
//     callback();
//   };
// }

// const func = higherOrderFunc(()=>console.log("hello"));

// func()
// func()
// func()
