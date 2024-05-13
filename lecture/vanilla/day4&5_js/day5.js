// const arr = [1,2,3,4]

// arr.forEach(function(e,index,arr){
//     console.log(e);
// })

const person1 = {
  name: "joe",
  //   age: 11,
  address: "123 str",
};

const person2 = {
  name: "Mike",
  //   age: 11,
  address: "234 str",
};

// need to rename it sometimes
const { name: name1, age = 0, address } = person1;
const { name: name2 } = person2;

// console.log(address);

// console.log(age);

// obj . something, we could get undefined
// undefined . something, we get error
// null . something, we get error
// console.log(person.a.b); will throw error, because person.a is undefined, undefined.b throws the error

// default values
// function sum(a = 0, b = 10) {
//   return a + b;
// }

// console.log(sum(20,));

//difference between object and array's destructure
const user = {
  username: "johnsmith1234",
  password: "12345678",
  isActivated: true,
};

// destructuring order doesn't matter
// but you have to know the name of the keys
const { password, username } = user;
// console.log(username);
// console.log(password);

// order DOES matter
// you don't have to know variable names
const numbers = [1, 2, 3, 4, 5];
// const [a,b,c,d,e] = numbers;
const [, , , , eeeeeeeeeeee] = numbers;

// console.log(eeeeeeeeeeee);

function login(username) {
  //someone else is requesting user's info
  // we need to give them, but we do not want to give password

  //got user from database, trying to remove password
  const user2 = {
    username: "johndoe98215721",
    password: "12345678",
    isActivated: true,
    followers: 10000,
    theme: "red",
    SSN: 1231231234,
    //100 more
  };

  // it is a rest operator if we are destructing
  const { password, SSN, ...userInfo } = user2;
  //   console.log(userInfo);
  return userInfo;
}
login();

// function getSum(...args) {
//   console.log(args);
// }

// console.log(getSum(1, 2, 3, 4, 5, 6));

const numbersss = [1, 2, 3, 4, 5, 6, 7, 8];

// ...numbersss is exactly same as 1,2,3,4,5,6,7,8

const numbersssCopy = [...numbersss];
// is exactly same as
// const numbersssCopy = [1, 2, 3, 4, 5, 6, 7, 8];
// const numbersssCopy = [0, ...numbersss, 9, 10];
numbersssCopy[0] = "qwioejqwoie";
// console.log(numbersssCopy);

const person11 = {
  name: "John Doe",
  age: 30,
  sayHi() {
    console.log("hi");
  },
  netWorth: null,
  degree: undefined,
  address: {
    zip: 20000,
  },
};
const person22 = {
  name: "Jane Smith",
  age: 25,
};
const person33 = {
  name: "Michael Johnson",
  age: 35,
  address: {
    zip: 30000,
  },
};

const people = [person11, person22, person33];

const peopleCopy = [...people]; //peopleCopy is a different reference from people
// console.log(people === peopleCopy);
//is the same as
// const peopleCopy = [person11, person22, person33]
peopleCopy[0].age = 123123; // the same as person11.age = ...
// console.log(people);

//stringify converts an object/array to a string
const peopleStr = JSON.stringify(people);

//parse convert a string back to object/array
const peopleDeepCopy = JSON.parse(peopleStr);

// const peopleDeepCopy = JSON.parse(JSON.stringify(people)) //combine them into one line
// peopleDeepCopy[0].age = "oijqwncoiqwcjnqwouihfqwfoiqw"
// console.log("people", people);
// console.log("peopleDeepCopy", peopleDeepCopy);

// optional chaining operator
people.forEach((person) => {
  //   console.log(person.address?.zip);
});

const duplicateArr = [1, 1, 1, 1, 1, 2, 3, 4];

// console.log(Array.from(new Set(duplicateArr)));

// const a1 = {};
// const b1 = a1;
// const c1 = b1;
// const ducqiopwjiocqw = [a1, b1, c1, {}, {}, {}, {}, {}];
// console.log(new Set(ducqiopwjiocqw));

//function basics

// function bar() {
//   console.log("i am bar");
//   //   return undefined;
//   return function () {
//     console.log("inside the bar");
//   };
// }

// // console.log(bar());

// // bar vs bar()
// function baz(callback) {
//   callback();
// }

// baz(bar());
