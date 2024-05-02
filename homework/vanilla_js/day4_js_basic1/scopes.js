// Global scope

var globalVar = "I am global";

function accessGlobal() {
    return globalVar;
}

// console.log(accessGlobal()); // I am global
// console.log(globalVar);      // I am global

// Local scope
function localScope() {
    var localVar = "I am local to this function";
}

// localScope();
// console.log(localVar); // Error: localVar is not defined, since var is function scoped

// Block scope
if (true) {
    let blockVar = "I exist inside this block only";
    const blockConst = "So do I!";
}

// console.log(blockVar); // not defined error, since let only active in if block.
// console.log(blockConst); // not defined error, since const only active in if block.

// Function scope vs block scope
function loopScope() {
    for (var i = 0; i < 3; i++) {
        console.log(i); // can output i inside the loop
    }
    console.log("After loop with var: " + i); // can output i = 3 since var is function scoped

    for (let j = 0; j < 3; j++) {
        console.log(j); // can output j inside the loop
    }
    console.log("After loop with let: " + j); // error: j is not defined, since let is block scoped.
}

loopScope();
