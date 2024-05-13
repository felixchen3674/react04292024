export function sum(num1: number = 0, num2: number = 0): number {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  if (typeof num1 !== 'number' || typeof num2 !== 'number' ){
    // return 'Arguments must be a number'
    throw new Error('Arguments must be numbers');
  }
  return num1+num2;
}

export function sumOfAll(...args: number[]): number {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  for (const arg of args){
    if(typeof arg !== 'number'){
      // return 'Arguments must be a number'
      throw new Error('Arguments must be numbers');
    }

  }
  const total = args.reduce((currentTotal, arg) => {
    return currentTotal + arg
  }, 0);
  return total;
}
