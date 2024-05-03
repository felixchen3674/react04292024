// ES5 and ES6

//ES5
// var

//ES6
//const, let
// console.log(qwe);
// var qwe = "foo"
// console.log(qwe);

function foo() {
  console.log(a);
  if (true) {
    var a = "qweqw";
  }
  console.log(a);
}

// foo();

const URL = "www.example.com";

//lexical scoping, inner scope has access to outside scope
function bar() {
  let b = "1st";
  if (true) {
    b = "2nd";
    if (true) {
      // let b = "3rd"
      console.log(b);
    }
  }
  //   console.log(b);
}

const person = {
  name: "jack",
  age: 11,
};

const person2 = person;

function takePerson(person) {
  console.log("46", person);
}

takePerson(person);
console.log(person);

// person2.name = "Mike";
// console.log(person);

// bar();

//type conversion: you do it manually
const str = "1111";
const num = Number(str);
// const num = +str;
// const num = parseInt(str)
// console.log(typeof num, num);

const bool = !!str;
// console.log(bool);

const number = 111;
const string = number.toString();
// console.log(typeof string)

document.querySelector(".showNumber").addEventListener("click", () => {
  const value = document.getElementById("number").value;
  console.log(typeof value, +value + 1);
});

//type coercion: it's done automatically
// automatic conversion of data from one type to another
// "1" + 1;

//always strict comparison over loose comparison
// console.log("1" == 1);
// console.log("" == []);
// console.log(0 == []);

//falsy value after using !!
//"", 0, undefined, null

const variable = true;
// if (variable) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// always false
// console.log({} == {});

//
// 2 calculations, result is false
// console.log(1 == 1 && 1 == 2);

// 1 calculations, 1st is false, no need to check the second one
// console.log(1 == 2 && 1 == 1);

// 1 calculations, 1st is true, no need to check the second one
// console.log(1 == 1 || 1 == 2);

// 1st: check true, has to check 2nd. 2nd is "value", also the last check we did, so a = "value"
const a = true && "value";

// 0 is falsy, so it's the last check we did, so b = 0
const b = 0 && "value";
// console.log(b);

// "result" is the last check we did, so c = "result"
const c = null || "result";

const d = null || undefined;
// console.log(d);

const account = {
  firstName: "John",
  lastName: "Smith",
  //   username: "blahblah",
  password: "zzzzz",
};

// let username;
// if (account.username) {
//   username = account.username;
// } else {
//   username = account.firstName + account.lastName;
// }

// const username = account.username || account.firstName + account.lastName;
// console.log(username);

// console.log("a", a);

const numbers = [1, 2, 3, 4, "oqdijoiqwjd", 5, 777, 13, 14];
let sum = 0;

function loopNumbers() {
  // look for a charming number
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 777) {
      //terminate the for loop, and return right away for the function loopNumbers
      return numbers[i];
    }

    if (typeof numbers[i] === "string") {
      console.log(
        "why is there a string in numbers? i'm ending this entire loop"
      );
      console.log(numbers[i]);
      //stop iterating here
      break;
    }

    if (numbers[i] === 13) {
      // console.log("true");
      //skip to next iteration
      continue;
    }
    console.log(numbers[i]);
    //   sum += numbers[i];
  }
}

loopNumbers();

// if no need for index, i'd personally prefer this syntax
for (const num of numbers) {
  console.log(num);
  //   break;
  //   continue
}

