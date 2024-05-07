// callback

function foo(bar) {
  bar();
}
foo(function () {
  console.log("bar");
});

function named() {
  console.log("bar2");
}
foo(named);

//IIFE
function x() {}
x();
(function x() {
  console.log("s");
})();

//excution stack

function f1() {
  console.log("f1");
}
function f2() {
  console.log("f2");
}
function f3() {
  console.log("f3");
}
f1();
f2();
f3();
function f4() {
  console.log("f4");
}
function f5() {
  f4();
  console.log("f5");
}
function f6() {
  f5();
  console.log("f6");
}
f6();

//calling f6 but the excution order will be f4()>f5()>f6(), like a stack data structor

//recursion

function counter(count) {
  if (count === 0) {
    return;
  }
  console.log(count);
  return counter(count - 1);
}
counter(5);

//curry function

const addCustomer =
  (fn) =>
  (...args) => {
    console.log("saving info");
    return fn(...args);
  };
