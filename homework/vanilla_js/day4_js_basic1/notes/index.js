const obj = { name: "Tom" };
obj.name = "Sally";
console.log(obj);
// even though the variable decalre by const can't be reassgined. However, if the variable is obj, it can be reassigned its property
console.log(obj1);
var obj1 = "name";
// const obj1 = "name";
// var can be hoisted; const, let will have error; function can be hoisted as well;
// console.log(add(1, 2));
console.log(add);
// function add(a, b) {
//   return a + b;
// }
// const add = (a, b) => a + b;
var add = function (a, b) {
  return a + b;
};
// when function decalre by const ,let , they can't be hoisted. And if it is decalred by var, it will have error, since its initialization is undefined not a function.

let num = 1;
let string = "string";
let null1 = null;
let undefined1 = undefined;
let boolean = true;
//primitive type number, string,null, undefined, boolean, symbol, bigInt;
// reference type object,function,Array;

let a = 10;
let b = "Hi";
let c = [1, 2, 3];
let d = c;
let e = a;
e = 11;
d.push(4);
console.log("a", a);
console.log("c", c);
console.log("d", d);
console.log("e", e);
// when passing varible by primitive type, it actually copy the value and pass it; when we modified the value, it won't change the original varible;
// however, when passing varible by reference type, it pass the reference . Therefore, whenever we have modified something on the reference, it change original value;

let x = "a";
console.log(x, typeof x);
x = x - 2;
console.log(x, typeof x);
x = "b";
x = x.charCodeAt(0) - 2;
console.log(x, typeof x);
x = !x;
console.log(x, typeof x);
let de = "123 whhs";
de = parseInt(de);
console.log(de, typeof de);
