# Interview Questions

## JavaScript Variables: `let`, `const`, `var`

- **Difference between let, const, var**
  - _var is es5 / redeclare / function scope_
  - answer: var can be redeclared and function scope.
  - _let / const are block scope_
  - answer: let / const are block scope and cannot be redeclared

## Variable Hoisting

- **What is hoisting**
  - _moving variables to top of file_
  - answer: moving variables or functions to top of code.
- **How let / const / var / function hoist differently**
  - answer: var is hoisted, and only the normal functions with the function keyword are hoisted.

## Data Types

- **What is reference type vs primitive type**
  - _reference: stored in memory, passed by reference_
  - answer: reference type are stored in memory and pass by reference. Arrays and objects are reference types.
  - _primitive types: give examples_
  - answer: primitive types are pass by value, the data type of number and string are primitive types.

## Type Coercion

- **What is type coercion**
  - _change of one type to another_
  - '11' + 1 = '111', Number('11') + 1 = 12
  - _examples: 1 + “1” to “11”, etc_
  - example: 1 + 2 + '11' = '311'

## Comparison Operators

- **Difference between == vs ===, which one should we use**
  - _== loose comparison / type coercion_
  - _=== strict comparison / will check type_
  - answer: we should always use === strict comparison
