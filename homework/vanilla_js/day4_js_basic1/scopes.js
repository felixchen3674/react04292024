// Global scope

var globalVar = "I am global";

function accessGlobal() {
  return globalVar;
}

// console.log(accessGlobal()); // Expected output? "I am global"
// console.log(globalVar);      // Expected output? "I am global"

// Local scope
function localScope() {
  var localVar = "I am local to this function";
}

// localScope();
// console.log(localVar); // What happens here and why? Error, because var was declared in function, it is function scope. It can't be found outside the function

// Block scope
if (true) {
  let blockVar = "I exist inside this block only";
  const blockConst = "So do I!";
}

// console.log(blockVar); // What is the result and why? Error. Because let is block scope. It can't be found outside the statement;
// console.log(blockConst); // What is the result and why? Error.Because const is block scope. It can't be found outside the statement;

// Function scope vs block scope
function loopScope() {
  for (var i = 0; i < 3; i++) {
    // console.log(i); // Outputs during loop? 0,1,2;
  }
  //   console.log("After loop with var: " + i); // What happens here? 3, because var is function scope, the value can be access and change in the function, after iteration, the value of var will be 3 then it excute the console.

  for (let j = 0; j < 3; j++) {
    console.log(j); // Outputs during loop? 0,1,2
  }
  //   console.log("After loop with let: " + j); // What happens here? Error, since let is block scope, j can't be found outside the statement;
}

loopScope();
