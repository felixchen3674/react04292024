const cloneArray = require("./cloneArray");
test("Copy array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual([1, 2, 3]); // to verify the structure and the value are the same
  expect(cloneArray(array)).not.toBe([1, 2, 3]); //  to verify the reference not the same
});
