export function sum(num1 = 0, num2 = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error("Invalid input.");
  }
  return num1 + num2;
}

export function sumOfAll(...args) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  return args.reduce((sum, num) => {
    if (typeof num !== 'number') {
      throw new Error("Invalid input.");
    }
    return sum += num;

  }, 0)
}
