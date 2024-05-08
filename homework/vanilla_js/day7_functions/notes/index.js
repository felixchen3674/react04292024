// rest parameter
// function collectThings(a, ...b) {
//   console.log(a);
//   console.log(b);
// }
// collectThings(1, 23, 43, 2, 52, 5);

//closure is the nested function
// function outer(x) {
//   function inner(y) {
//     return x + y;
//   }
//   return inner;
// }
// const outerRes = outer(10);
// console.log(outerRes);
// console.log(outerRes(2));

//pure function return same output from same input

//closure
// const myName = 'Zhe';

// function callName() {
//   console.log(myName);
// }
// callName();

//currying
const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, and ${ingredient3}`;
    };
  };
};

const mySandwich = buildSandwich('1')('2')('3');
console.log(mySandwich);
