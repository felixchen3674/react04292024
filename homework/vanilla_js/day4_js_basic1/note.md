function scope vs block scope

    function scope: Variable is available anywhere inside the function that is declared in
    ex) var
    block scope: Variable is available only  inside the block that is declared in
    ex) let, const

** var could be re-defined but let, const cannot be re-defined
** var can be declared later 
** let's value can be changed but const cannot be changed
** const can be changed only if it is an object and the value of a key
**ex) const myName = {father: 'john', mother: 'marry', son: 'anthony'} then you could change john, marry, and anthony by myName.son = "Bob"

Hoisting

    Hoisting is where a function is pulled onto the top of the javascript file.
    But as we know functions can be written couple ways but only the ones that start with 'function' will be hoisted.
    Not const myName = (a,b) =>a+b where const or let comes first.
    
    Var is technically could be hoisted but in a different way. This is because when variable is declared using var, it will be hoisted to the top of the code with empty variable showing undefined.

Data types

    Primitives: simple, single simple data values
        number: simply a number
        string: cluster of letters wrapped with '' or ""
        boolean: true or false
        bigint: big number (add n at the end of the number)
        symbol
        undefined: it is there, but nothing is initialized
        null: there is nothing.

    Non-primitives: multiple data values
        objects (arrays, functions, objects)
            array: ex) let myList = [1,2,3,"anthony"]
                                to get "anthony"
                                myList[3]
            function: ex) function hello(){
                console.log('hello')
            }

            objects: ex) let character = {name:"anthony", age: 12}
                                to get age
                                character.age

Primitive vs Referece

let c = [1,2]
function add(array, element){
    array= [element]
}
console.log(add(c,3)) => returns undefined

let c = [1,2]
function add(array, element){
    return array= [element]
}
console.log(add(c,3))=> returns [3]

    Primitive data types are just values.
    But non-primitive data types such as array, objects, functions are references to a data
    Reference meaning a reference to a data storage.

    this is why we could technically change const when the value is non-primitive as it will store the reference to the data storage and we are changing the value inside the data storage.
    ex) const c = [1,2]
            but in reality it is const c = 0X01 (a reference to where the array is stored)
            so the reference does not change. but we could c.push(3) where it pushes 3 to where it is already stored, not pushing to the reference of where the data is stored

Type conversion

    We could use
        Number() 
        ** if you convert a set of letters into string, it will show NaN (not a number, also called undefined) but the type will still be showing 'number'
        **same with declared but not assigned (example let x ) , it will show NaN

        String()
        **most things could be converted into strings (even empty variables could be empty string)
        **if declared but not assigned, it will show undefined. (but still type will be string)

        Boolean() 
        **if there is something, then it will display true and if it is empty, it will display false
        **if declared but not assigned, it will show false

Coercion

    Number + String = String
    Number - String = Number

== VS ===

    == converts both sides to same data type and compare
    **this will cause unexpected error because the conversion may not be converting the correct conversion.
    ** ex) 0 == false   will show true
    === does not converts any sides to same data type and compare
    **only use == when comparing null value and undefined value