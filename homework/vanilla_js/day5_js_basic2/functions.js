export function sum() {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  return (num1 = 0, num2 = 0) => {
    // Check if the inputs are of the correct data type (numbers)
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Invalid input: one or both arguments are not numbers');
    }
    return num1 + num2;
  };
}

export function sumOfAll() {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  return (...numbers) => {
    // Reduce the numbers array to their sum, initialize with 0 to handle no arguments gracefully
    return numbers.reduce((sum, num) => {
      // Check if current item is a number
      if (typeof num !== 'number') {
        throw new Error('Invalid input: all arguments must be numbers');
      }
      return sum + num;
    }, 0);
  };
}
