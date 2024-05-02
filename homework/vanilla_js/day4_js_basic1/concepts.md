# Interview Questions

## JavaScript Variables: `let`, `const`, `var`
- **Difference between let, const, var**
  - *var is es5 / redeclare / function scope*
  - *let / const are block scope*
  - var and let can both be re-declared but const cannot be re-declared

## Variable Hoisting
- **What is hoisting**
  - *moving variables to top of file*
  - function is always hoisted
- **How let / const / var / function hoist differently**
  - let and const are not hoisted so we have to declare it first and then use
  - function is always hoist
  - var is hoisted but it is hoist to var = undefined, and waits for a value to be
  - assigned later

## Data Types
- **What is reference type vs primitive type**
  - *reference: stored in memory, passed by reference, objects are always pass
  by reference*
  - *primitive types: number, string, Boolean, BigInt, Symbol, Undefined, Null, 
     once they are declared, they are values*
  - let a = 0, let b = a, b = b + 1, b is now 1, but a is still 0.

## Type Coercion
- **What is type coercion**
  - *change of one type to another base on the operator*
  - *examples: 1 + “1” to “11”, because + is a concatenation symbol in string, so 
  its basically coercing the initial number 1 to a string and concatenate "1" with "11" *

## Comparison Operators
- **Difference between == vs ===, which one should we use**
  - *== loose comparison / type coercion*
  - *=== strict comparison / will check type*
  - we should almost always use === because it not only checks the value but also checks
  - the type of the two things we are comparing, only case that we would want to use
  - == or != is when we are comparing undefined to null