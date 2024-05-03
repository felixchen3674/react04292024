# Interview Questions

## JavaScript Variables: `let`, `const`, `var`
- **Difference between let, const, var**
  - *var is es5 / redeclare / function scope*
  - *let / const are block scope*

  Answer:
  var: function scope/could be redefined/could be declared later
  let: block scope/cannot be redefined/value can be changed
  const: block scope/cannot be redefined/value cannot be changed (could change the value of the key if it is an object (due to how it is saved as reference to where the data is stored))

## Variable Hoisting
- **What is hoisting**
  - *moving variables to top of file*
  Answer:
  Hoisting is where function is pulled to the top of the file so it could be recognized first.
- **How let / const / var / function hoist differently**
Answer: 
functions can be hoisted but not arrow functions

let and const cannot be hoisted even if it's not declaring variable but making a function.

Var could technically be hoisted but in a different way.  This is because when variable is declared using var, it will be hoisted to the top of the code with empty variable showing undefined.

       ******** execution context: where code is running
       ******** call stack
       ********lexical scoping

## Data Types
- **What is reference type vs primitive type**
  - *reference: stored in memory, passed by reference*
  - *primitive types: give examples*

  Answer:
    Primitive data types are just values,simple, single simple data values.
        number: simply a number
        string: cluster of letters wrapped with '' or ""
        boolean: true or false
        bigint: big number (add n at the end of the number)
        symbol
        undefined: it is there, but nothing is initialized
        null: there is nothing.
    But non-primitive data types such as array, objects, functions are references to a data
    Reference meaning a reference to a data storage.

    this is why we could technically change const when the value is non-primitive as it will store the reference to the data storage and we are changing the value inside the data storage.

## Type Coercion
- **What is type coercion**
  - *change of one type to another*
  - *examples: 1 + “1” to “11”, etc*
  Answer:
  Type conversion is where one manually change the type
  Type coercion

## Comparison Operators
- **Difference between == vs ===, which one should we use**
  - *== loose comparison / type coercion*
  - *=== strict comparison / will check type*

  Answer: 
  
  == does not encounter type of data. It converts both sides to same data type and compare.
  This will cause unexpected error because the conversion may not be converting the correct conversion.

  === does recognize the type of data and compare. It does not converts any sides to same data type and compare

  **only use == when comparing null value and undefined value




          *******parameter in a function is using let