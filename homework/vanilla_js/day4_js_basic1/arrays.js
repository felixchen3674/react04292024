// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
    //   Write a function that takes a string as an argument and
    //   returns a boolean indicating if the str is a number
    //   Example:
    //   '1' -> true, "a" -> false, "1a" -> false
    return !isNaN(Number(str))
}

export function findAvgOfNums(arr) {
    //   Write a function that takes an array of numbers and strings as an
    //   argument and returns the average of all the numbers.
    //   Example: const arr = [1, '2', 3, '4', 5];
    //   Expected output: 3
    let num_arr = arr.filter(elem => typeof elem === 'number')
    let result = 0

    if (num_arr.length === 0) {
        return 0
    }

    for (let num of num_arr) {
        result += num
    }

    return result / num_arr.length
}

export function findAverageAge(people) {
    //   Write a function that takes an array of people objects as an argument and
    //   returns the average age of all the people.
    //   Do not use prototype methods
    //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
    if (people.length === 0) {
        return 0
    }
    let result = 0

    for (let p of people) {
        result += p.age
    }
    return result / people.length
}

export function findAvgAgeByJob(people, job) {
    //   Write a function that takes an array of people objects as an argument and
    //   returns the average age of people with the same job.
    //   Do not use prototype methods
    //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
    //   Expected output: 23 (teacher)
    let result = 0
    let count = 0
    for (let p of people) {
        if (p.job === job) {
            result += p.age
            count++
        }
    }
    if (count === 0) {
        return 0
    }
    return result / count
}

export function findMaxNum(arr) {
    //   Write a function that takes an array of numbers as an argument and
    //   returns the maximum number in that array.
    //   Do not use Math.max
    //   Example: const arr = [1, 2, 3, 4, 5];
    if (arr.length === 0) {
        return 0
    }
    let max = arr[0]
    for (let num of arr) {
        if (num > max) {
            max = num
        }
    }
    return max
}

export function findLongestWord(str) {
    //   Write a function that takes a string as an argument and
    //   returns the longest word in that string.
    //   Hint: You can use String.prototype.split
    //   Example: const str = 'I love JavaScript';
    str = str.trim()
    let str_arr = str.split(' ')

    let maxLen = Math.max(...str_arr.map(str => str.length))

    for (let word of str_arr) {
        if (word.length === maxLen) {
            return word
        }
    }

    return ''
}

export function findSumOfEvenNums(arr) {
    //   Write a function that takes an array of numbers as an argument and
    //   returns an array of only the even numbers.
    //   Example: const arr = [1, 2, 3, 4, 5];
    //   Expected output: [2, 4]
    let result = []
    for (let num of arr) {
        if (num % 2 === 0) {
            result.push(num)
        }
    }
    return result
}

// reference types
export function bubbleSortArr1(num) {
    // Write a function that takes an array of numbers as an argument and
    // returns a new sorted array using the bubble sort algorithm.
    // Do not use Array.prototype.sort
    // Example: const num = [5, 3, 8, 2, 1];
    // Expected output: [1, 2, 3, 5, 8]
    let arr = num.slice()

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

export function bubbleSortArr2(num) {
    // Same as above but this time returns the original array reference sorted.
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = 0; j < num.length - i - 1; j++) {
            if (num[j] > num[j + 1]) {
                [num[j], num[j + 1]] = [num[j + 1], num[j]]
            }
        }
    }
    return num
}

export function removeTypes(arr, typeToRemove) {
    // Write a function that takes an array of mixed types and a type as arguments
    // and returns a new array without the specified type.
    // Example: const arr = [1, '2', 3, '4', 5];
    // removeTypes(arr, 'string');
    // Expected output: [1, 3, 5]
    let result = []
    for (let elem of arr) {
        if ((typeof elem) !== typeToRemove) {
            result.push(elem)
        }
    }
    return result
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
    // Write a function that takes an array of numbers, an amount and an operator as arguments
    // and returns a new array with the numbers changed by the amount and operator.
    // Example: const nums = [1, 2, 3, 4, 5];
    // changeNumsByAmount(nums, 2, '+');
    // Expected output: [3, 4, 5, 6, 7]
    let result = []

    for (let num of nums) {
        if (operator === '+') {
            result.push(num + amount)
        }
        if (operator === '-') {
            result.push(num - amount)
        }
        if (operator === '*') {
            result.push(num * amount)
        }
        if (operator === '/') {
            result.push(num / amount)
        }
    }
    return result
}

export function removeNumFromArr(nums, num) {
    // Write a function that takes an array of numbers and a number as arguments
    // and returns a new array without the specified number.
    // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
    // removeNumFromArr(nums, 3);
    // Expected output: [1, 2, 4, 5]
    let result = []

    for (let n of nums) {
        if (n !== num) {
            result.push(n)
        }
    }

    return result
}
