Loom link: https://www.loom.com/share/ab90aae9358345a2869957058956f405

- **Variables**
  - `let`, `const`, `var`
    - function vs block scope
    - scopes
    - hoisting
- **Data Types**
  - primitive vs reference
    - type conversion vs coercion
      - conversion
      - coercion
      - `==` vs `===`
- **Control Flows** (cmon, you should know these...)

  - if, else if, else
  - loops: for, while, switch

    - continue, break

**Homework**

- **Answer Questions**

  - difference between `let`, `const`, `var`

    - `var` is es5 / redeclare / function scope
    - `let` / `const` are block scope
      var has been around since ES5, and we can redeclare variable within same scope without error, which can lead to unexpected bugs.
      Variables are declared by var are function-scoped.
      Both let and const are block scoped, not the entire function.
      Let can be reassigned but cannot be redeclared.
      Const cannot be reassigned or redeclared

  - what is hoisting
    - moving variables to top of file
    - how `let` / `const` / `var` / function hoist differently
      Hoisting in javascipt allows some variables and functions to be moved to the top of the file.
      var variables are hoisted but initialized as undefined, which can lead to unexpected results.
      let and const are not hoisted, leading to errors if accessed before declaration.
  - what is reference type vs primitive type
    - reference: stored in memory, passed by reference
    - primitive types: give examples
      Reference types are stored in memory and are passed by reference. This means that when you manipulate an object, you're actually working with a reference to its memory address
      These are primitive types that include numbers, strings, booleans, null, undefined, and symbol. Primitive types are passed by value.
  - what is type coercion
    - change of one type to another
    - examples: `1 + "1"` to `"11"`, etc
      Type coercion in JavaScript refers to the automatic conversion of values from one data type to another when different types are involved in an operation
      Adding a number and a string, such as 1 + "1", JavaScript coerces the number into a string, resulting in "11"
  - difference between `==` vs `===`, which one should we use
    - `==` loose comparison / type coercion
    - `===` strict comparison / will check type
      '==' performs loose comparison, means its converting data type before compare values
      `===` is strict comparison , it will check type before compare values
