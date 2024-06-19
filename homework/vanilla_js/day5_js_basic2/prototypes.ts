export function myMap<ElementType, ElementType2>(
  arr: ElementType[],
  cb: (item: ElementType) => ElementType2
): ElementType2[] {
  const res: ElementType2[] = [];

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

export function myFilter<ElementType>(
  arr: ElementType[],
  cb: (item: ElementType) => boolean
): ElementType[] {
  // const res: ElementType[] = [];
  // for (const item of arr) {
  //   if (cb(item)) {
  //     res.push(item);
  //   }
  // }
  // return res;
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

export function myConcat<ElementType, ElementType2>(
  arr1: ElementType[],
  arr2: ElementType2[]
): (ElementType | ElementType2)[] {
  return [...arr1, ...arr2];
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
}

export function myFind<ElementType>(
  arr: ElementType[],
  cb: (item: ElementType) => boolean
): ElementType | undefined {
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

export function myEvery<T>(arr: T[], cb: (item: T) => boolean): boolean {
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

export function mySome<T>(arr: T[], cb: (item: T) => boolean): boolean {
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

export function myIncludes<T>(arr: T[], val: T): boolean {
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

export function myJoin<T>(arr: T[], separator: string): string {
  // if (arr.length <= 1) {
  //   return arr.toString();
  // }
  // let res = arr[0] + "";
  // for (let i = 1; i < arr.length; i++) {
  //   res = res + separator + arr[i];
  // }
  // return res;
  if (arr.length <= 1) {
    return arr.toString();
  }
  let res = arr[0] + "";
  for (let i = 1; i < arr.length; i++) {
    res += separator + arr[i];
  }
  return res;
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'
}

export function myPush<T>(arr: T[], val: T): T[] {
  arr[arr.length] = val; // Add the value to the end of the array
  return arr;
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]
}

export function myReverse1<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }
  const res: T[] = [];
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

export function myReverse2<T>(arr: T[]): T[] {
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
export function myReduce(
  arr: number[],
  cb: (acc: number, item: number) => number,
  initial: number
) {
  // if (arr.length === 0) {
  //   return initial;
  // }
  // let res = initial;
  // for (const item of arr) {
  //   res = cb(item, res);
  // }
  // return res;

  let res = initial;
  if (arr.length === 0) {
    return res;
  }
  for (const item of arr) {
    res = cb(res, item);
  }
  return res;

  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15
}

export function mySort(
  arr: number[],
  cb: (item1: number, item2: number) => number
): number[] {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (cb(arr[i], arr[j]) > 0) {
  //       const tem = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = tem;
  //     }
  //   }
  // }
  // return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (cb(arr[i], arr[j]) > 0) {
        const tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
      }
    }
  }
  return [...arr];

  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]
}

export function mySlice<T>(arr: T[], start: number, end: number) {
  // const res: T[] = [];
  // if (arr.length === 0) {
  //   return arr;
  // }
  // start = start >= 0 ? start : arr.length + start;
  // end = end === undefined ? arr.length : end >= 0 ? end : arr.length + end;
  // for (let i = start; i < end; i++) {
  //   res.push(arr[i]);
  // }
  // return res;
  if (arr.length === 0) {
    return [];
  }
  const res = [];

  start = start < 0 ? arr.length + start : start;
  end = end === undefined ? arr.length : end < 0 ? arr.length + end : end;
  if (start > end || start === undefined) {
    return [];
  } else {
    for (let i = start; i < end; i++) {
      res.push(arr[i]);
    }
  }
  return res;

  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]
}
