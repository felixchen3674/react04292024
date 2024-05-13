// Global scope

var globalVar = "I am global";

function accessGlobal() {
  return globalVar;
}

// console.log(accessGlobal()); // Expected output?
// Answer:
// "I am global"
// console.log(globalVar);      // Expected output?
// Answer:
// "I am global"

// Local scope
function localScope() {
  var localVar = "I am local to this function";
}

// localScope();
// console.log(localVar); // What happens here and why?
// Answer:
// localVar is declared inside function localScope. This makes localVar a local variable and only can be accessed inside localScope.
// So console logging the localVar will cause an error
    
// Block scope
if (true) {
  let blockVar = "I exist inside this block only";
  const blockConst = "So do I!";
}

// console.log(blockVar); // What is the result and why?
// console.log(blockConst); // What is the result and why?
// Answer:
//Both blockVar and blockConst are block scoped so they are not accessible outside the block, which is the if statement in this case, so will return error.

// Function scope vs block scope
function loopScope() {
  for (var i = 0; i < 3; i++) {
    // console.log(i); // Outputs during loop?
    //Answer:
    //It will loop from 0 to 2 so output will be 0,1,2
  }
  //   console.log("After loop with var: " + i); // What happens here?
  //Answer:
  // this will show "After loop with var: 3". this is because after end of loop where i would be 2, it will increment to 3. And when the condition is checked, it will not pass so loop will end
  //but, i is already equal to 3 and since var is a function scope, it is already inside a function called loopScope, it will be accessible outside the loop.

  for (let j = 0; j < 3; j++) {
    console.log(j); // Outputs during loop?
    //Answer: 
    //It will loop from 0 to 2 so output will be 0,1,2
  }
  //   console.log("After loop with let: " + j); // What happens here?
  //Answer:
  //This will show an error as let is a block scope and cannot be accessed outside the loop
}

loopScope();
