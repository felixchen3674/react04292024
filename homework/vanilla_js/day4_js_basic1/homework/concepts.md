## difference between let, const, var

var is declared with global scope or local scope within the function. Let and const has block scope.
var is hoisted. let and const are not hoisted

## what is hoisting

variable can be called before it is declared.

## what is reference type vs primitive type

reference type store values in memory, and the variable accesses address the location of that memory
primitive types are types that store simple values directly in the location the variable accesses. They're immutable, meaning the value itself cannot be changed. Example: Number, String, Boolean, Undefined, Null

## type coercion

This occurs implicitly when javascript automatically converts types behind the scenes when executing code involving mixed types.

## difference between == vs ===, which one should we use

==(loose equality), compares two values for equality after performing type coercion if necessary.
===(strict equality), compares both the value and the type.
