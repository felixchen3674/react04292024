//ES5
function Person(fname, age, job) {
  this.fname = fname;
  this.age = age;
  this.job = job;
  //   this.sayHi = function () {
  //     return `Hi, my fname is ${this.fname}`;
  //   };
}

//all instances of Person class, created with new keyword
// will have access to the prototype methods
Person.prototype.sayHi = function () {
  //this refers to whichever object is invoking the function
  //on line 22, p1 called it. so this === p1
  console.log(this.fname);
  return `Hi, my fname is ${this.fname}`;
};

const p1 = new Person("joe");
//p is the instance, Person is the class/constructor function

// p1.sayHi();

const person999 = {
  fname: "Jack",
  age: 12,
};

// bind will make this equal to the object
const sayHiCopy = p1.sayHi.bind(person999);
// person999.sayHi = sayHiCopy;
// person999.sayHi();
// sayHiCopy();

// binding

const p2 = new Person("mike");
// console.log(p1 instanceof Person);
// console.log(p1.sayHi());
// console.log(p2.sayHi());
// console.log(p1.sayHi === p2.sayHi);

//ES6
//introduce class syntax sugar
// class PersonClass {
//   //static properties belong to class
//   // don't belong to instances
//   static whatever = "oiqwjdwoiq";
//   constructor(fname, age, job) {
//     this.fname = fname;
//     // assign them
//   }

//   sayHi() {
//     return `Hi, my fname is ${this.fname}`;
//   }
// }

//// why we need bind

const pizza = {
  size: "small",
  topping: "p",
  cook() {
    console.log("pizza this", this);

    // setTimeout(
    //   function () {
    //     console.log("setTimeout this", this);
    //     console.log(`${this.size} pizza is done`);
    //   }.bind(this),
    //   1000
    // );

    setTimeout(() => {
      //arrow functions do not have their "this" keyword
      //so they get it from parent scope
      //   console.log("setTimeout this", this);

      console.log(`${this.size} pizza is done`);
    }, 1000);
  },
};

pizza.cook();
