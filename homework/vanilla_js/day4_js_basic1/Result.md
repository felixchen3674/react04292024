 ![alt text](<test_screenshot/Screenshot 2024-05-02 at 9.40.50 PM 1.png>)
 
 
 PASS  day4_js_basic1/objects.test.js
 PASS  day4_js_basic1/arrays.test.js
 FAIL  day5_js_basic2/functions.test.js
  ● Functions › sum › should return the sum of two numbers

    expect(received).toEqual(expected) // deep equality

    Expected: 3
    Received: [Function anonymous]

      4 |   describe("sum", () => {
      5 |     it("should return the sum of two numbers", () => {
    > 6 |       expect(sum(1, 2)).toEqual(3);
        |                         ^
      7 |     });
      8 |
      9 |     it("should return the sum of two numbers with default values", () => {

      at Object.toEqual (day5_js_basic2/functions.test.js:6:25)

  ● Functions › sum › should return the sum of two numbers with default values

    expect(received).toEqual(expected) // deep equality

    Expected: 0
    Received: [Function anonymous]

       8 |
       9 |     it("should return the sum of two numbers with default values", () => {
    > 10 |       expect(sum()).toEqual(0);
         |                     ^
      11 |     });
      12 |
      13 |     it("should return the sum if only one number is passed", () => {

      at Object.toEqual (day5_js_basic2/functions.test.js:10:21)

  ● Functions › sum › should return the sum if only one number is passed

    expect(received).toEqual(expected) // deep equality

    Expected: 1
    Received: [Function anonymous]

      12 |
      13 |     it("should return the sum if only one number is passed", () => {
    > 14 |       expect(sum(1)).toEqual(1);
         |                      ^
      15 |     });
      16 |
      17 |     it("should throw an error if wrong data type is passed", () => {

      at Object.toEqual (day5_js_basic2/functions.test.js:14:22)

  ● Functions › sum › should throw an error if wrong data type is passed

    expect(received).toThrow()

    Received function did not throw

      16 |
      17 |     it("should throw an error if wrong data type is passed", () => {
    > 18 |       expect(() => sum("1", 2)).toThrow();
         |                                 ^
      19 |     });
      20 |   });
      21 |

      at Object.toThrow (day5_js_basic2/functions.test.js:18:33)

  ● Functions › sumOfAll › should return the sum of all numbers

    expect(received).toEqual(expected) // deep equality

    Expected: 1
    Received: [Function anonymous]

      22 |   describe("sumOfAll", () => {
      23 |     it("should return the sum of all numbers", () => {
    > 24 |       expect(sumOfAll(1)).toEqual(1);
         |                           ^
      25 |       expect(sumOfAll(1, 2, 3, 4, 5)).toEqual(15);
      26 |       expect(sumOfAll(1, 2, 3, 4, 5, 6)).toEqual(21);
      27 |     });

      at Object.toEqual (day5_js_basic2/functions.test.js:24:27)

  ● Functions › sumOfAll › should return the sum of all numbers with default values

    expect(received).toEqual(expected) // deep equality

    Expected: 0
    Received: [Function anonymous]

      28 |
      29 |     it("should return the sum of all numbers with default values", () => {
    > 30 |       expect(sumOfAll()).toEqual(0);
         |                          ^
      31 |     });
      32 |
      33 |     it("should throw an error if wrong data type is passed", () => {

      at Object.toEqual (day5_js_basic2/functions.test.js:30:26)

  ● Functions › sumOfAll › should throw an error if wrong data type is passed

    expect(received).toThrow()

    Received function did not throw

      32 |
      33 |     it("should throw an error if wrong data type is passed", () => {
    > 34 |       expect(() => sumOfAll("1", 2)).toThrow();
         |                                      ^
      35 |     });
      36 |   });
      37 | });

      at Object.toThrow (day5_js_basic2/functions.test.js:34:38)

 FAIL  day5_js_basic2/prototypes.test.js
  ● prototypes › myMap › should apply the callback to each element in the array

    expect(received).toEqual(expected) // deep equality

    Expected: [2, 4, 6, 8, 10]
    Received: undefined

      20 |     it("should apply the callback to each element in the array", () => {
      21 |       const arr = [1, 2, 3, 4, 5];
    > 22 |       expect(myMap(arr, (num) => num * 2)).toEqual([2, 4, 6, 8, 10]);
         |                                            ^
      23 |     });
      24 |   });
      25 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:22:44)

  ● prototypes › myFilter › should return a new array with the truthy values

    expect(received).toEqual(expected) // deep equality

    Expected: [2, 4]
    Received: undefined

      27 |     it("should return a new array with the truthy values", () => {
      28 |       const arr = [1, 2, 3, 4, 5];
    > 29 |       expect(myFilter(arr, (num) => num % 2 === 0)).toEqual([2, 4]);
         |                                                     ^
      30 |     });
      31 |   });
      32 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:29:53)

  ● prototypes › myConcat › should return a new array with the elements of both arrays

    expect(received).toEqual(expected) // deep equality

    Expected: [1, 2, 3, 4, 5, 6]
    Received: undefined

      35 |       const arr1 = [1, 2, 3];
      36 |       const arr2 = [4, 5, 6];
    > 37 |       expect(myConcat(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
         |                                    ^
      38 |     });
      39 |   });
      40 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:37:36)

  ● prototypes › myFind › should return the first truthy value

    expect(received).toEqual(expected) // deep equality

    Expected: 2
    Received: undefined

      42 |     it("should return the first truthy value", () => {
      43 |       const arr = [1, 2, 3, 4, 5];
    > 44 |       expect(myFind(arr, (num) => num % 2 === 0)).toEqual(2);
         |                                                   ^
      45 |     });
      46 |   });
      47 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:44:51)

  ● prototypes › myEvery › should return true if all elements are truthy

    expect(received).toEqual(expected) // deep equality

    Expected: true
    Received: undefined

      49 |     it("should return true if all elements are truthy", () => {
      50 |       const arr = [1, 2, 3, 4, 5];
    > 51 |       expect(myEvery(arr, (num) => num > 0)).toEqual(true);
         |                                              ^
      52 |     });
      53 |   });
      54 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:51:46)

  ● prototypes › mySome › should return true if at least one element is truthy

    expect(received).toEqual(expected) // deep equality

    Expected: true
    Received: undefined

      56 |     it("should return true if at least one element is truthy", () => {
      57 |       const arr = [1, 2, 3, 4, 5];
    > 58 |       expect(mySome(arr, (num) => num % 2 === 0)).toEqual(true);
         |                                                   ^
      59 |     });
      60 |   });
      61 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:58:51)

  ● prototypes › myIncludes › should return true if the value is in the array

    expect(received).toEqual(expected) // deep equality

    Expected: true
    Received: undefined

      63 |     it("should return true if the value is in the array", () => {
      64 |       const arr = [1, 2, 3, 4, 5];
    > 65 |       expect(myIncludes(arr, 3)).toEqual(true);
         |                                  ^
      66 |     });
      67 |   });
      68 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:65:34)

  ● prototypes › myJoin › should join the elements with the separator

    expect(received).toEqual(expected) // deep equality

    Expected: "1-2-3-4-5"
    Received: undefined

      70 |     it("should join the elements with the separator", () => {
      71 |       const arr = [1, 2, 3, 4, 5];
    > 72 |       expect(myJoin(arr, "-")).toEqual("1-2-3-4-5");
         |                                ^
      73 |     });
      74 |   });
      75 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:72:32)

  ● prototypes › myPush › should add the value to the end of the array

    expect(received).toEqual(expected) // deep equality

    - Expected  - 1
    + Received  + 0

    @@ -2,7 +2,6 @@
        1,
        2,
        3,
        4,
        5,
    -   6,
      ]

      78 |       const arr = [1, 2, 3, 4, 5];
      79 |       myPush(arr, 6);
    > 80 |       expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
         |                   ^
      81 |     });
      82 |   });
      83 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:80:19)

  ● prototypes › myReverse1 › should return the reversed array

    expect(received).toEqual(expected) // deep equality

    Expected: [5, 4, 3, 2, 1]
    Received: undefined

      85 |     it("should return the reversed array", () => {
      86 |       const arr = [1, 2, 3, 4, 5];
    > 87 |       expect(myReverse1(arr)).toEqual([5, 4, 3, 2, 1]);
         |                               ^
      88 |     });
      89 |
      90 |     it("should return a new array", () => {

      at Object.toEqual (day5_js_basic2/prototypes.test.js:87:31)

  ● prototypes › myReverse1 › should return a new array

    expect(received).toEqual(expected) // deep equality

    Expected: [5, 4, 3, 2, 1]
    Received: undefined

      91 |       const arr = [1, 2, 3, 4, 5];
      92 |       const reversed = myReverse1(arr);
    > 93 |       expect(reversed).toEqual([5, 4, 3, 2, 1]);
         |                        ^
      94 |       expect(reversed).not.toBe(arr);
      95 |     });
      96 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:93:24)

  ● prototypes › myReverse2 › should return the original array reversed

    expect(received).toEqual(expected) // deep equality

    Expected: [5, 4, 3, 2, 1]
    Received: undefined

      105 |     it("should return the original array reversed", () => {
      106 |       const arr = [1, 2, 3, 4, 5];
    > 107 |       expect(myReverse2(arr)).toEqual([5, 4, 3, 2, 1]);
          |                               ^
      108 |     });
      109 |
      110 |     it("should return the same array reference", () => {

      at Object.toEqual (day5_js_basic2/prototypes.test.js:107:31)

  ● prototypes › myReverse2 › should return the same array reference

    expect(received).toEqual(expected) // deep equality

    Expected: [5, 4, 3, 2, 1]
    Received: undefined

      111 |       const arr = [1, 2, 3, 4, 5];
      112 |       const reversed = myReverse2(arr);
    > 113 |       expect(reversed).toEqual([5, 4, 3, 2, 1]);
          |                        ^
      114 |       expect(reversed).toBe(arr);
      115 |     });
      116 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:113:24)

  ● prototypes › myReverse2 › should mutate the original array

    expect(received).toEqual(expected) // deep equality

    - Expected  - 4
    + Received  + 4

      Array [
    -   5,
    -   4,
    -   3,
    -   2,
        1,
    +   2,
    +   3,
    +   4,
    +   5,
      ]

      118 |       const arr = [1, 2, 3, 4, 5];
      119 |       myReverse2(arr);
    > 120 |       expect(arr).toEqual([5, 4, 3, 2, 1]);
          |                   ^
      121 |     });
      122 |   });
      123 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:120:19)

  ● prototypes › myReduce › should return the accumulated value

    expect(received).toEqual(expected) // deep equality

    Expected: 15
    Received: undefined

      125 |     it("should return the accumulated value", () => {
      126 |       const arr = [1, 2, 3, 4, 5];
    > 127 |       expect(myReduce(arr, (acc, num) => acc + num, 0)).toEqual(15);
          |                                                         ^
      128 |     });
      129 |   });
      130 |

      at Object.toEqual (day5_js_basic2/prototypes.test.js:127:57)

  ● prototypes › mySort › should sort the array in ascending order

    expect(received).toEqual(expected) // deep equality

    Expected: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, …]
    Received: undefined

      132 |     it("should sort the array in ascending order", () => {
      133 |       const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    > 134 |       expect(mySort(arr, (a, b) => a - b)).toEqual([
          |                                            ^
      135 |         1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
      136 |       ]);
      137 |     });

      at Object.toEqual (day5_js_basic2/prototypes.test.js:134:44)

  ● prototypes › mySort › should sort the array in descending order

    expect(received).toEqual(expected) // deep equality

    Expected: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, …]
    Received: undefined

      139 |     it("should sort the array in descending order", () => {
      140 |       const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    > 141 |       expect(mySort(arr, (a, b) => b - a)).toEqual([
          |                                            ^
      142 |         9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1,
      143 |       ]);
      144 |     });

      at Object.toEqual (day5_js_basic2/prototypes.test.js:141:44)

  ● prototypes › mySlice › should return a new array with the elements sliced

    expect(received).toEqual(expected) // deep equality

    Expected: [2, 3]
    Received: undefined

      148 |     it("should return a new array with the elements sliced", () => {
      149 |       const arr = [1, 2, 3, 4, 5];
    > 150 |       expect(mySlice(arr, 1, 3)).toEqual([2, 3]);
          |                                  ^
      151 |     });
      152 |
      153 |     it("should return a new array with the elements sliced from the start", () => {

      at Object.toEqual (day5_js_basic2/prototypes.test.js:150:34)

  ● prototypes › mySlice › should return a new array with the elements sliced from the start

    expect(received).toEqual(expected) // deep equality

    Expected: [3, 4, 5]
    Received: undefined

      153 |     it("should return a new array with the elements sliced from the start", () => {
      154 |       const arr = [1, 2, 3, 4, 5];
    > 155 |       expect(mySlice(arr, 2)).toEqual([3, 4, 5]);
          |                               ^
      156 |     });
      157 |
      158 |     it("should return a new array with the elements sliced from the end", () => {

      at Object.toEqual (day5_js_basic2/prototypes.test.js:155:31)

  ● prototypes › mySlice › should return a new array with the elements sliced from the end

    expect(received).toEqual(expected) // deep equality

    Expected: [4, 5]
    Received: undefined

      158 |     it("should return a new array with the elements sliced from the end", () => {
      159 |       const arr = [1, 2, 3, 4, 5];
    > 160 |       expect(mySlice(arr, -2)).toEqual([4, 5]);
          |                                ^
      161 |     });
      162 |   });
      163 | });

      at Object.toEqual (day5_js_basic2/prototypes.test.js:160:32)

Test Suites: 2 failed, 2 passed, 4 total
Tests:       27 failed, 39 passed, 66 total
Snapshots:   0 total
Time:        0.825 s, estimated 1 s
Ran all test suites.

Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press i to run failing tests interactively.
 › Press Enter to trigger a test run.
