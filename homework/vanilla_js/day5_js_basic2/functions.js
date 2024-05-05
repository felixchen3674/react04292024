export function sum(a = 0, b = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Both arguments must be numbers");
  }
  return a + b;
}

export function sumOfAll(...nums) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  for (const num of nums) {
    if (typeof num !== 'number') {
      throw new TypeError("All arguments must be numbers");
    }
  }
  return nums.reduce((acc, cur) => acc + cur, 0);
}
