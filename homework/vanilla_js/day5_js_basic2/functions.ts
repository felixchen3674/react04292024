export function sum(num1: number = 0, num2: number = 0): number {
  // Check if the inputs are of the correct data type (numbers)
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new TypeError('Invalid input: one or both arguments are not numbers');
  }
  // Return the sum of the numbers
  return num1 + num2;
}

export function sumOfAll(...numbers: number[]): number {
  // Reduce the numbers array to their sum, initialize with 0 to handle no arguments gracefully
  return numbers.reduce((sum, num) => {
    // Check if current item is a number
    if (typeof num !== 'number') {
      throw new TypeError('Invalid input: all arguments must be numbers');
    }
    return sum + num;
  }, 0);
}
