export function sum(a: number = 0, b: number = 0): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Wrong value");
  } else {
    return a + b;
  }
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
}

export function sumOfAll(...args: number[]): number {
  let sum = 0;
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  for (const num of args) {
    if (typeof num !== "number") {
      throw new Error("Wrong value");
    } else {
      sum += num;
    }
  }
  return sum;
}
