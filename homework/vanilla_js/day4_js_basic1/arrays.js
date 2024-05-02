// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
  return isFinite(Number(str));
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    }
  }
  if (count === 0) return 0;
  let average = sum/count
  return average;
  
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  if (people.length === 0) return 0;
  let totalAge = 0;
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
    count++;
  }
  let averageAge = totalAge/count;
  return averageAge;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
  let totalAge = 0;
  let count = 0;
  for (let i =0; i < people.length; i++) {
    if (people[i].job === job) {
      totalAge += people[i].age;
      count++;
    }
  }
  if (count === 0) return 0;
  let averageAge = totalAge/count;
  return averageAge;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  if (arr.length === 0) return 0;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  let words = str.split(' ');
  let longestword = '';

  for (let word of words) {
    if (word.length > longestword.length) {
      longestword = word;
    }
  }
  return longestword;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  let ans = [];
  for (let i =0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  let ans = [...num];
  const n = num.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (ans[j] > ans[j+1]) {
        // swap
        let temp = ans[j];
        ans[j] = ans[j+1];
        ans[j+1] = temp;
      }
    }
  }
  return ans;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
  let n = num.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (num[j] > num[j + 1]) {
        // Swap elements if the left element is greater
        let temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;
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
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== typeToRemove) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  let result = []; // Initialize an empty array to store the results

  for (let i = 0; i < nums.length; i++) {
      let num = nums[i]; 
      if (operator === '+') {
          result.push(num + amount);
      } else if (operator === '-') {
          result.push(num - amount);
      } else if (operator === '*') {
          result.push(num * amount);
      } else if (operator === '/') {
          if (amount === 0) {
              throw new Error('Division by zero is not allowed');
          }
          result.push(num / amount);
      } else {
          throw new Error('Invalid operator');
      }
  }

  return result;
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== num) {
      ans.push(nums[i]);
    }
  }
  return ans;
}
