# Homework: Answer Questions

### difference between let, const, var

keywords:
difference between let, const, var
var is es5 / redeclare / function scope
let / const are block scope

Answer:let, const, and var are keywords in JavaScript used for variable declaration. var was introduced in ES5, but const,let were introduced in ES6,
the scope of var is global scope or function scope ,but let and const are block scope; var can be redeclared but let and const can't; var and let can be reassigned but const can't, var can be hoisted with value of undefined but let and const would have error when hoisted.

### what is hoisting

keywords:
moving variables to top of file
how let / const / var / function hoist differently

Answer:Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase before excution .

### what is reference type vs primitive type

keywords:
reference: stored in memory, passed by reference
primitive types: give examples

Answer: Reference type and primitive type are data types in javasript. Reference type store in heap but primitive type store in stack;
reference type are object, array, function;
primitive type are number,string,boolean, null, undefined, bigInt and symbol;
primitive type are immuable but reference type are mutable , which means when modified the variable passing by primitive type, the original value won't change, while reference type will be changed if modify the value of reference type;

### what is type coercion

keywords:
change of one type to another
examples: 1 + “1” to “11”, etc

Answer: It means implicitly change the data type of value from one to another, like 1 + "" will be data type of string;

### difference between == vs ===, which one should we use

keywords:
== loose comparison / type coercion
=== strict comparison / will check type

Answer: == and === are comparison operators used to compare two values.The == operator checks for equality of values after performing type coercion. while === checks for both value equality and type equality, and no type coercion.
