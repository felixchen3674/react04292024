//Function vs Methods
//Declaration vs Definition
//Arguments vs Parameters
//Callback vs Higher Order Function


function printMe(){
    console.log('printing');
}
printMe()

function printThis(param){
    console.log(param);
}
printThis('what');

// Parameter is the one being pass to a function while declaring 
// param in this case.

//Argument is what is being pass to a function
//''what is an Argument in this case

//Function  expression.

const count = 100;

const printMee = function(a, b){
    console.log(a, b);
}
printMee(10, 20)

function sum(a,b){
    let ret = a+b
    return ret;
}

//default parameter

function calc(a,b=0) {
    return (2*(a+b))
}
console.log(calc(2,3))

//Rest parameter
function collectThings(x,...y){
 console.log(x)
 console.log(y)
}

collectThings(1,2,3,4,5)

//arrow function
//add1=add2=add3
const add1 = function(x,y){
    return x+y;
}

const add2 = (x,y) => {
    return x+y
}

const add3 = (x,y) =>  x+y;

//nested function

function outer(){
    console.log('outer')
    function inner(){
        console.log('inner')
    } //nested function
    inner(); //invoke or call the inner function to execute
}
console.log(outer())

//function scope

    //Global scope vs Function scope
    //variables defined on global can be accessed anywhere
    //but variable defined inside a function cannot be accessed outside the function
function doSomething1(){
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x,y,z)
}
doSomething1();
// console.log(x)
// console.log(y)
// console.log(z)
//all will show error as it is defined inside a function.

let x = 10;
const y = 20;
var z = 30;
function doSomething2(){
    console.log(x,y,z)
}
doSomething2()
//this works because variables are defined on the global scope and can be accessed anywhere

//Closure

function outer2(x){
    function inner2(y){
        return x+y
    }
    return inner2;
}
const outerReturn = outer2(10);
// console.log(outerReturn);
// console.log(outerReturn(2));

function createGreeting(greeting) {
    function sayHi(name){
        return console.log(`${greeting} ${name}`)
    }
    return sayHi;
}
const sayHello = createGreeting("Hello");
console.log(sayHello("Alice"));


//Callback function

//below is a function named foo that takes a function named bar as a parameter.
function foo(bar){
    bar(); // this bar() function is called a "Callback function"
}
//Now, foo is called and inside the argument is a (anonymous) function. 
//this will go and fill up where bar is located in foo function as a parameter.
//the bar is called inside foo function as bar()
//then the console.log('bar') will be executed.
foo(function(){
    console.log('bar');
})


//below is doing the same thing as above.
function named(){
    console.log('bar');
}

foo(named);

//High order function : function that takes one or more functions as arguments, or returns a function as its result
// 1.  It is a function that takes one or more function as an argument 
// 2. It may return a function


function getCapture(camera){
    camera()
}

function returnFn(){
    return function(){
        console.log('returning');
    }
}
const fn = returnFn();
console.log(fn())

//pure function
//function that produces the same output for the same input

function sayGreeting(name){
    return `Hello ${name}`;
}

console.log(sayGreeting('anthony'));

//impure function
//function that does not produce the same output for the same input
let greeting = 'Hola';

function sayGreeting2(name){
    return `${greeting} ${name}`
}
console.log(sayGreeting2('anthony'));

// IIFE
//Immediately Invoked Function Expression
// the function will be immediately used right after it has been defined
//usually would not need a name at all because it will be used once
// function x(){
//     // console.log('it is iife')
// }

// (function(){

// })()
//put a parenthesis over the function and add a set of parenthesis to call it as shown above.


//Currying

//curring takes a function that receives more than one parameter 
//and breaks it into a series of unary(functions with on parameter functions

//example currying 

const buildSandwich = (incredient1) => {
    return (incredient2) => {
        return (incredient3) => {
            return `${incredient1}, ${incredient2}, ${incredient3}`;
        }
    }
}
//above is actually nested function
const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato")
console.log("mysandwich", mySandwich)

const buildSammy = ingred1 => ingred2 => ingred3 =>
    `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy("Turkey")("Cheese")("Bread")
console.log('buildSammy', mySammy)

const multiply = (x,y) => x*y;
const curriedMult = x => y=> x*y;

console.log(multiply(2,3))
console.log(curriedMult(2)(3))

//partially applied functions are a common use of currying
const timesTen = curriedMult(10)
console.log(timesTen(5))

//Another example
const updateElementText = id => content => document.querySelector(`#${id}`).textContent = content;
const updateHeaderText = updateElementText('header');
updateHeaderText('Hello Anthony');

//Another example
const addCustomer = fn => (...args) => {
    console.log('saving customer info...')
    return fn(...args)
}
const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`)
    return fn(...args)
}

let completeOrder = (...args) => {
    console.log(`Order#${[...args].toString()} completed`)
}

completeOrder = (processOrder(completeOrder))


//Debouncing

// const input = document.querySelector("input");
// const defaultText = document.getElementById("default");
// const debounceText = document.getElementById("debounce");
// const throttleText = document.getElementById("throttle");
// console.log(input)

//debounce vs throttle

// input.addEventListener("input", e => {
//     defaultText.textContent = e.target.value
//     updateDebounceText(e.target.value)
//     updateThrottleText(e.target.value)
// })
//debounce sets a 'timer' before it actually calls the function
// const updateDebounceText = debounce(()=>{
//     incrementCount(debounceText)
// })
// const updateThrottleText = throttle(()=>{
//     incrementCount(throttleText)
// }, 100)
// function debounce(cb, delay = 1000){
//     let timeout
//     return (...args) =>{
//         clearTimeout(timeout)
//         timeout = setTimeout(()=>{
//             cb(...args)
//         }, delay)
//     }
// }

// function throttle(cb, delay = 1000){
//     let shouldWait = false
//     let waitingArgs
//     const timeoutFunc = ()=>{
//         if(waitingArgs == null){
//             shouldWait = false
//         } else {
//             cb(...waitingArgs)
//             waitingArgs = null
//             setTimeout(timeoutFunc, delay)
//         }
//     }

//     return (...args) => {
//         if(shouldWait) {
//             waitingArgs = args
//             return
//         }
        
//         cb(...args)
//         shouldWait = true

//         setTimeout(timeoutFunc, delay)
//     }
// }

// document.addEventListener('mousemove', e=>{
//     incrementCount(defaultText)
//     updateDebounceText()
//     updateThrottleText()
// })

// function incrementCount(element) {
//     element.textContent = (parseInt(element.innerText) || 0) +1
// }