// const items = [
//   { name: 'TV', price: 500 },
//   { name: 'Washer', price: 300 },
//   { name: 'Laptop', price: 450 },
//   { name: 'Computer', price: 7000 },
//   { name: 'Book', price: 5 },
// ];
// const filteredItems = items.filter((item) => item.price < 500); //dont change old array
// const itemsNameAndPrice = items.map((item) => [item.name, item.price]);
// const foundName = items.find((item) => item.name === 'Book');
// items.forEach((item) => console.log(item.name));
// const hasExpensiveItem = items.some((item) => item.price <= 0);
// const total = items.reduce(
//   (currentTotal, item) => (currentTotal += item.price),
//   0
// );
// console.log(items);
// console.log(filteredItems);
// console.log(itemsNameAndPrice);
// console.log(foundName);
// console.log(hasExpensiveItem);
// console.log(total);

//Destructuring

// const alphabet = ['A', 'B', 'C', 'D', 'E'];
// const numbers = [1, 2, 3, 4, 5, 6];
// // const a = alphabet[0];
// // const b = alphabet[1];
// const [a, , c, ...rest] = alphabet;
// const newArray = [...alphabet, ...numbers];

// console.log(a);
// console.log(c);
// console.log(rest);
// console.log(newArray);

// const sumAndMultiply = (a, b) => [a * b, a + b];
// const array = sumAndMultiply(2, 3);
// const [multiply, sum] = sumAndMultiply(2, 3);
// console.log(array);
// console.log(sum);

//Destructuring Object
// const personOne = {
//   name: 'zhe',
//   age: 25,
//   desc: 'asjdnbk',
//   address: { city: 'hanchuan' },
// };
// const personTwo = {
//   hobby: 'video game',
//   age: 55,
// };
// const personThree = { ...personOne, ...personTwo }; //Overridden
// console.log(personThree);

// function printUser({ name, age }) {
//   console.log(name);
//   console.log(age);
// }
// printUser(personThree);

//Mutable and Immutable
//Primitives are immutable
let myName = 'Dave';
myName[0] = 'W'; //Nope!
console.log(myName);

//Reassignment is not the same as immuable

//Impure function that mutates the data
// const arr = [1, 2, 3, 4];
// const addToScoreHistory = (arr, score) => {
//   arr.push(score);
//   return arr;
// };
// console.log(addToScoreHistory(arr, 5));

const aArray = [1, 32, 43, 32];
const bArray = aArray;
const cArray = [...aArray];
const dArray = Object.assign([], aArray);
console.log(aArray === bArray);
console.log(aArray === cArray);
console.log(dArray === aArray);
