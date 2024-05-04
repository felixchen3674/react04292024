// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
  return !isNaN(Number(str));
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  let sum = 0;
  let count = 0;
  arr.forEach(element => {
    const num = Number(element);
    if (!isNaN(num)) {
      sum += num
      count++;
    }
  });
  return count > 0 ? sum / count : 0;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  if (!people || people.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const person of people) {
    sum += person.age;
  }
  return sum / people.length;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
  if (!people || people.length === 0) {
    return 0;
  }
  let sum = 0;
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i].job === job) {
      sum += people[i].age;
      count++;
    }
  }
  return count === 0 ? 0 : sum / count;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  if (!arr || arr.length === 0) {
    return 0;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  let arr = str.split(' ');
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[max].length < arr[i].length) {
      max = i;
    }
  }
  return arr[max];
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  let newArray = arr.filter(number => number % 2 == 0);
  return newArray;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  let array = num.slice();
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return array;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
  let n = num.length;

  // Outer loop for multiple passes
  for (let i = 0; i < n - 1; i++) {
    // Flag to detect any swap
    let swapped = false;

    // Inner loop for one pass through the array
    for (let j = 0; j < n - i - 1; j++) {
      // Compare the adjacent positions
      if (num[j] > num[j + 1]) {
        // Swap if elements are not in the intended order
        let temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;
        swapped = true;
      }
    }

    // If no two elements were swapped by inner loop, then break
    if (!swapped) {
      break;
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
  let newArray = arr.filter(element => typeof element !== typeToRemove)
  return newArray;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  return nums.map(currentValue => {
    switch(operator) {
      case '+':
        return currentValue + amount;
      case '-':
        return currentValue - amount;
      case '*':
        return currentValue * amount;
      case '/':
        return amount !== 0 ? currentValue / amount : 0;
      default:
        return currentValue;
    }
    }
  )
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
  return nums.filter(currentValue => currentValue != num);
}
