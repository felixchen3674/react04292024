// reinvent the wheel: prototype methods

import res from "express/lib/response";

export function myMap(arr, cb) {
  const res = [];
  for (const item of arr) {
    res.push(cb(item));
  }
  return res;
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with the callback applied to each element.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myMap(arr, num => num * 2);
  // Expected output: [2, 4, 6, 8, 10]
}

export function myFilter(arr, cb) {
  const res = [];
  for (const item of arr) {
    if (cb(item)) {
      res.push(item);
    }
  }
  return res;
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with only the elements that return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFilter(arr, num => num % 2 === 0);
  // Expected output: [2, 4]
}

export function myConcat(arr1, arr2) {
  return [...arr1, ...arr2];
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
}

export function myFind(arr, cb) {
  for (const item of arr) {
    if (cb(item)) {
      return item;
    }
  }
  return undefined;
  // Write a function that takes an array and a callback as arguments
  // and returns the first element that returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFind(arr, num => num % 2 === 0);
  // Expected output: 2
}

export function myEvery(arr, cb) {
  for (const item of arr) {
    if (!cb(item)) {
      return false;
    }
  }
  return true;
  // Write a function that takes an array and a callback as arguments
  // and returns true if all the elements return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myEvery(arr, num => num > 0);
  // Expected output: true
}

export function mySome(arr, cb) {
  for (const item of arr) {
    if (cb(item)) {
      return true;
    }
  }
  return false;
  // Write a function that takes an array and a callback as arguments
  // and returns true if at least one element returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySome(arr, num => num % 2 === 0);
  // Expected output: true
}

export function myIncludes(arr, val) {
  for (const item of arr) {
    if (item === val) {
      return true;
    }
  }
  return false;
  // Write a function that takes an array and a value as arguments
  // and returns true if the value is in the array.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myIncludes(arr, 3);
  // Expected output: true
}

export function myJoin(arr, separator) {
  if (arr.length <= 1) {
    return arr;
  }
  let res = arr[0] + "";
  for (let i = 1; i < arr.length; i++) {
    res = res + separator + arr[i];
  }
  return res;
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'
}

export function myPush(arr, val) {
  arr[arr.length] = val; // Add the value to the end of the array
  return arr;
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]
}

export function myReverse1(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
  // Write a function that takes an array as an argument
  // and returns a new array with the elements reversed.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReverse(arr);
  // Expected output: [5, 4, 3, 2, 1]
}

export function myReverse2(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const tem = arr[left];
    arr[left] = arr[right];
    arr[right] = tem;
    left++;
    right--;
  }
  return arr;
  // Same as above but this time returns the original array reference reversed.
}

// Challenges
export function myReduce(arr, cb, initial) {
  if (arr.length === 0) {
    return initial;
  }
  let res = initial;
  for (const item of arr) {
    res = cb(item, res);
  }
  return res;
  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15
}

export function mySort(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (cb(arr[i], arr[j]) < 0) {
        const tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
      }
    }
  }
  return arr;

  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]
}

export function mySlice(arr, start, end) {
  const res = [];
  if (arr.length === 0) {
    return arr;
  }
  start = start >= 0 ? start : arr.length + start;
  end = end === undefined ? arr.length : end >= 0 ? end : arr.length + end;
  for (let i = start; i < end; i++) {
    res.push(arr[i]);
  }
  return res;
  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]
}
