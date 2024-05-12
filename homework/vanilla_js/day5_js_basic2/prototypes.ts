// reinvent the wheel: prototype methods

export function myMap(arr: number[], cb: (num: number) => number): number[] {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with the callback applied to each element.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myMap(arr, num => num * 2);
  // Expected output: [2, 4, 6, 8, 10]
  const newArr: number[] = [];
  for (const num of arr) {
    newArr.push(cb(num));
  }
  return newArr;
}

export function myFilter(
  arr: number[],
  cb: (num: number) => boolean
): number[] {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with only the elements that return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFilter(arr, num => num % 2 === 0);
  // Expected output: [2, 4]
  const newArr: number[] = [];
  for (const num of arr) {
    if (cb(num)) {
      newArr.push(num);
    }
  }
  return newArr;
}

export function myConcat(arr1: number[], arr2: number[]): number[] {
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
  return [...arr1, ...arr2];
}

export function myFind(arr: number[], cb: (num: number) => boolean) {
  // Write a function that takes an array and a callback as arguments
  // and returns the first element that returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFind(arr, num => num % 2 === 0);
  // Expected output: 2
  for (const num of arr) {
    if (cb(num)) return num;
  }
  return null;
}

export function myEvery(arr: number[], cb: (num: number) => boolean): boolean {
  // Write a function that takes an array and a callback as arguments
  // and returns true if all the elements return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myEvery(arr, num => num > 0);
  // Expected output: true
  for (const num of arr) {
    if (!cb(num)) return false;
  }
  return true;
}

export function mySome(arr: number[], cb: (num: number) => boolean): boolean {
  // Write a function that takes an array and a callback as arguments
  // and returns true if at least one element returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySome(arr, num => num % 2 === 0);
  // Expected output: true
  for (const num of arr) {
    if (cb(num)) return true;
  }
  return false;
}

export function myIncludes(arr: number[], val: number): boolean {
  // Write a function that takes an array and a value as arguments
  // and returns true if the value is in the array.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myIncludes(arr, 3);
  // Expected output: true
  for (const num of arr) {
    if (num === val) return true;
  }
  return false;
}

export function myJoin(arr: number[], separator: string): string {
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'
  if (!arr.length) return '';
  let res: string = String(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    res += separator + String(arr[i]);
  }
  return res;
}

export function myPush(arr: number[], val: number) {
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]
  arr[arr.length] = val;
  return arr;
}

export function myReverse1(arr: number[]) {
  // Write a function that takes an array as an argument
  // and returns a new array with the elements reversed.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReverse(arr);
  // Expected output: [5, 4, 3, 2, 1]
  const newArr: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

export function myReverse2(arr: number[]) {
  // Same as above but this time returns the original array reference reversed.
  return arr.reverse();
}

// Challenges
export function myReduce(
  arr: number[],
  cb: (acc: number, num: number) => number,
  initial: number
) {
  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15
  let acc = initial;
  for (const num of arr) {
    acc = cb(acc, num);
  }
  return acc;
}

export function mySort(
  arr: number[],
  cb: (num1: number, num2: number) => number
) {
  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]
  let newArr: number[] = [...arr];
  return newArr.sort(cb);
}

export function mySlice(arr: number[], start: number, end: number): number[] {
  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]
  let length = arr.length;
  start = start || 0;
  end = end || length;

  if (start < 0) {
    start += length;
    start = Math.max(start, 0); // Ensures start is not less than 0
  }

  if (end < 0) {
    end += length;
  }

  // If the adjusted end is less than start, return an empty array
  if (end < start) {
    return [];
  }

  // Create the new array
  let result: number[] = [];
  for (let i = start; i < end && i < length; i++) {
    result.push(arr[i]);
  }

  return result;
}
