// var
// Scope: var declares a variable globally or locally to an entire function regardless of block scope.
// Hoisting: Variables declared with var are hoisted to the top of their function or global scope, but initialized with undefined. This means that they can be referenced before they are officially declared in the code.
// Reassignment: You can reassign and redeclare variables declared with var.

// let
// Scope: let allows you to declare variables that are limited in scope to the block, statement, or expression where they are used, unlike var.
// Hoisting: Variables declared with let are hoisted to the top of their block scope, but are not initialized. Accessing them before the declaration results in a ReferenceError, a situation often referred to as the "temporal dead zone."
// Reassignment: You can reassign but not redeclare variables declared with let within the same scope.

// const
// Scope: Like let, const declarations are block-scoped.
// Hoisting: Similar to let, const declarations are hoisted to the top of their block scope and also have a "temporal dead zone."
// Reassignment: You cannot reassign a const variable. It must be initialized at the time of declaration and its value cannot be changed. However, the contents of a const object can be altered (e.g., properties can be added or modified).

// primitive types
// These are data types that store simple values directly in the location the variable accesses.
// They are immutable, meaning the value itself cannot be changed.
// Examples include String, Number, BigInt, Boolean, Undefined, Null, and Symbol

// reference type
// Reference types store values in memory, and the variable accesses the location of that memory. This means the variable points to a reference or address of the data, not the data itself.
// They include objects such as Object, Array, Function, and more complex structures like Date and user-defined types.
// Modifications to the properties of these objects affect the actual data stored at the memory address.

// type conversion
// This is an explicit conversion between different types by the programmer. JavaScript provides methods and functions to convert explicitly, such as Number(value), String(value), and Boolean(value).

// Type Coercion
// This occurs implicitly when JavaScript automatically converts types behind the scenes when executing code involving mixed types.

// ==
// Compares two values for equality after performing type coercion if necessary. This means it attempts to convert the values to a common type before making the comparison.
// For example, 5 == "5" is true because the string "5" is coerced to the number 5.

// === (Strict Equality)
// Compares both the value and the type, which means no type coercion is done. If the types differ, the comparison is immediately false.