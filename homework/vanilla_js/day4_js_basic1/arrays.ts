// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str: string): boolean {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
  const isNumber = Number(str);

  return !isNaN(isNumber) && typeof isNumber === "number";
  //const isNumber will conver str to a number.
  // on the return, it will check if isNumber is not a NaN and also data type is number.
  // if both is true, it will return true but if one or more is not true, it will return false
}

export function findAvgOfNums(arr: (number | string)[]): number {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  let sumOfNumber = 0;
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number" || !isNaN(Number(arr[i]))){
      sumOfNumber += Number(arr[i])
      count++
    }
  }
  return  count === 0 ? 0 : sumOfNumber / count;
}
interface Person {
  name: string;
  age: number;
  job?: string;
}
export function findAverageAge(people: Person[]): number {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  let sumOfAge = 0;
  let count = 0;

  for(let i = 0; i < people.length; i++){
    if(typeof people[i].age === "number"){
      sumOfAge += Number(people[i].age)
      count++
    }
  }
  return count === 0 ? 0 : sumOfAge / count;
}

export function findAvgAgeByJob(people: Person[], job: string): number { 
   //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
  let sumOfAge = 0;
  let count = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i].job === job && typeof people[i].age === "number") {
      sumOfAge += Number(people[i].age);
      count++;
    }
  }
  return count === 0 ? 0 : sumOfAge / count;
}

export function findMaxNum(arr: number[]): number {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  if (arr.length === 0) {
    return 0;
  }
  let curMax = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > curMax){
      curMax = arr[i];
    }
  }
  return curMax
}

export function findLongestWord(str: string): string {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  const newWords = str.split(' ');
  let longestWord = '';

  for(let word of newWords){
    if (word.length > longestWord.length){
      longestWord = word;
    }
  }
  return longestWord;
}

export function findSumOfEvenNums(arr: number[]): number[] {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  const evenNum: number[] = []

  for (const num of arr){
    if(num % 2 === 0){
      evenNum.push(num);
    }
  }
  return evenNum
}

// reference types
export function bubbleSortArr1(num: number[]): number[] {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  const sortedNum = [...num]

  for(let i = 0; i < sortedNum.length - 1; i++){
    for(let j = 0; j < sortedNum.length- 1 - i; j++){
      if(sortedNum[j] > sortedNum[j+1]){
        const newPlace = sortedNum[j];
        sortedNum[j] = sortedNum[j+1];
        sortedNum[j+1] = newPlace;
      }
    }
  } 
  return sortedNum
}

export function bubbleSortArr2(num: number[]): number[] {
  // Same as above but this time returns the original array reference sorted.
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = 0; j < num.length - 1 - i; j++) {
      if (num[j] > num[j + 1]) {
        const newPlace = num[j];
        num[j] = num[j + 1];
        num[j + 1] = newPlace;
      }
    }
  }
  return num;
}

export function removeTypes<T>(arr: T[], typeToRemove: string): T[] {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
  const updatedArr : T[] = [];

  for (const item of arr){
    if(typeof item !== typeToRemove){
      updatedArr.push(item);
    }
  }
  return updatedArr;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums: number[], amount: number, operator: string): number[] {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  const updatedNum: number[] = [];

  for (const num of nums){
    if(operator === "+"){
      updatedNum.push(num+amount);
    }else if (operator === "-"){
      updatedNum.push(num-amount);
    }else if (operator === "*"){
      updatedNum.push(num*amount);
    }else if (operator === "/"){
      updatedNum.push(num/amount);
    }else {
      updatedNum.push(num);
    }
  }
  return updatedNum;
}

export function removeNumFromArr(nums: number[], num: number): number[] {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
  const updatedNum: number[] = [];

  for(const item of nums){
    if(item !== num){
      updatedNum.push(item);
    }
  }
  return updatedNum;
}
