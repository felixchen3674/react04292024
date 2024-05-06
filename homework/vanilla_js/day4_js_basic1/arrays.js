// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  // //   Write a function that takes a string as an argument and
  // //   returns a boolean indicating if the str is a number
  // //   Example:
  // //   '1' -> true, "a" -> false, "1a" -> false
  // return typeof str === 'number';

  // Regular expression to check if the string is a valid number
  // This regex supports integers, decimals, and negative numbers
  const regex = /^-?\d+(\.\d+)?$/;

  // Test the string against the regex
  return regex.test(str);
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  let total = 0;
  let count = 0; // Counter for the number of numeric entries

  arr.forEach((element) => {
    // Check if element is a number or can be converted to a number
    if (typeof element === 'number') {
      total += element; // Convert to number and add to total
      count++; // Increment count for each numeric entry
    }
  });

  // Prevent division by zero and return the average
  return count > 0 ? total / count : 0;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  if (people.length === 0) {
    return 0; // Return 0 immediately if the array is empty
  }
  let total = 0;
  people.forEach((element) => {
    total += element.age;
  });
  return total / people.length;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)

  let count = 0,
    total = 0;
  for (const person of people) {
    if (person.job === job) {
      count++;
      total += person.age;
    }
  }
  return count === 0 ? 0 : total / count;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  if (!arr.length) return 0;
  let max = -Infinity;
  for (const num of arr) {
    if (max < num) {
      max = num;
    }
  }
  return max;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  const strArr = str.split(' ');
  let max = 0,
    longest = '';
  for (const word of strArr) {
    if (word.length > max) {
      max = word.length;
      longest = word;
    }
  }
  return longest;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  const res = [];
  for (const num of arr) {
    if (num % 2 === 0) res.push(num);
  }
  return res;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  const res = [...num];
  for (let i = 0; i < res.length - 1; i++) {
    for (let j = 0; j < res.length - i - 1; j++) {
      if (res[j] > res[j + 1]) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
      }
    }
  }
  return res;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = 0; j < num.length - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        [num[j], num[j + 1]] = [num[j + 1], num[j]];
      }
    }
  }
  return num;
}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
  const newArr = [];
  for (const ele of arr) {
    if (typeof ele !== typeToRemove) {
      newArr.push(ele);
    }
  }
  return newArr;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  let modifiedNums = [];

  for (let i = 0; i < nums.length; i++) {
    // Apply the operation based on the provided operator
    if (operator === '+') {
      modifiedNums.push(nums[i] + amount);
    } else if (operator === '-') {
      modifiedNums.push(nums[i] - amount);
    } else if (operator === '*') {
      modifiedNums.push(nums[i] * amount);
    } else if (operator === '/') {
      modifiedNums.push(nums[i] / amount);
    } else {
      // If an unknown operator is given, return the original number
      modifiedNums.push(nums[i]);
    }
  }

  return modifiedNums;
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
  const modifiedNums = [];
  for (const n of nums) {
    if (n !== num) modifiedNums.push(n);
  }
  return modifiedNums;
}
