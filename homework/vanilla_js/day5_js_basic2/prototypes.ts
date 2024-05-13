// reinvent the wheel: prototype methods

export function myMap<T, U>(arr: T[], cb: (value: T, index: number, array: T[]) => U): U[] {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with the callback applied to each element.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myMap(arr, num => num * 2);
  // Expected output: [2, 4, 6, 8, 10]
  return arr.map(cb)
}

export function myFilter<T>(arr: T[], cb: (value: T, index: number, array: T[]) => unknown): T[] {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with only the elements that return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFilter(arr, num => num % 2 === 0);
  // Expected output: [2, 4]
  return arr.filter(cb);
}

export function myConcat<T>(arr1: T[], arr2: T[]): T[] {
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
  const newArray = [...arr1, ...arr2];
  return newArray;
}

export function myFind<T>(arr: T[], cb: (value: T, index: number, array: T[]) => unknown): T | undefined {
  // Write a function that takes an array and a callback as arguments
  // and returns the first element that returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFind(arr, num => num % 2 === 0);
  // Expected output: 2
  return arr.find(cb);
}

export function myEvery<T>(arr: T[], cb: (value: T, index: number, array: T[]) => unknown): boolean {
  // Write a function that takes an array and a callback as arguments
  // and returns true if all the elements return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myEvery(arr, num => num > 0);
  // Expected output: true
  return arr.every(cb);
}

export function mySome<T>(arr: T[], cb: (value: T, index: number, array: T[]) => unknown): boolean {
  // Write a function that takes an array and a callback as arguments
  // and returns true if at least one element returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySome(arr, num => num % 2 === 0);
  // Expected output: true
  return arr.some(cb);
}

export function myIncludes<T>(arr: T[], val: T): boolean {
  // Write a function that takes an array and a value as arguments
  // and returns true if the value is in the array.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myIncludes(arr, 3);
  // Expected output: true
  // const numFound = arr.find((num) => num === val)
  // return numFound !== undefined ? numFound : undefined;
  return arr.includes(val);
}

export function myJoin(arr: string[], separator: string): string {
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'
  return arr.join(separator)
}

export function myPush<T>(arr: T[], val: T): number {
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]
  return arr.push(val)
}

export function myReverse1<T>(arr: T[]): T[] {
  // Write a function that takes an array as an argument
  // and returns a new array with the elements reversed.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReverse(arr);
  // Expected output: [5, 4, 3, 2, 1]
  return [...arr].reverse();;
}

export function myReverse2<T>(arr: T[]): T[] {
  // Same as above but this time returns the original array reference reversed.
  return arr.reverse();;
}

// Challenges
export  function myReduce<T, U>(arr: T[], cb: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initial: U): U {
  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15

  return arr.reduce(cb, initial);;
}

export function mySort(arr: number[], cb: (a: number, b: number) => number): number[] {
  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]
  return arr.sort(cb)
}

export function mySlice<T>(arr: T[], start: number, end?: number): T[] {
  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]
  return arr.slice(start, end)
}
