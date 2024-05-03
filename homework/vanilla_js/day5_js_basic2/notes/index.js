import Password from "antd/lib/input/Password";

// spead method
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, ...arr1];

function sumAndmultipy(a, b) {
  return [a + b, a * b];
}
const arr = sumAndmultipy(1, 2);
console.log(arr);
const [sum, product] = arr;
console.log(sum);
console.log(product);

obj = {
  name: "sally",
  age: 7,
  job: "teacher",
  address: {
    city: "new York",
  },
};
const {
  name: personName,
  age,
  job,
  address: { city },
} = obj;
console.log(personName, age, job, city);

function printperson() {
  console.log(person?.address?.street);
}
// ?. similiar as && to identify if the item exist or not;
const kyle = new personName("Kyle", undefined, ["bowling"]);

printperson(undefined);

obj2 = {
  name,
  // key and value are the same, then you can ignore the value;
  key: 123,
  Password: 1212,
};
