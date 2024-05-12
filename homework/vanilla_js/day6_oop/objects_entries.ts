// const people = {
//   1: { name: 'Alice', age: 25 },
//   2: { name: 'Bob', age: 30 },
//   3: { name: 'Charlie', age: 35 },
// };

// // get the average age of the people
// export const getAverageAge = (people) => {
//   const peopleVal = Object.values(people);
//   let total = 0;
//   for (const person of peopleVal) {
//     total += person.age;
//   }
//   return total / peopleVal.length;
// };
// Define a type for individual person entries
type Person = {
  name: string;
  age: number;
};

// Define a type for the `people` object where the keys are strings representing IDs
type People = {
  [id: number]: Person;
};

// The function now accepts an object of the `People` type
export const getAverageAge = (people: People): number => {
  // Convert object values to an array of `Person` objects
  const peopleVal = Object.values(people);

  // Calculate the sum of all ages
  let total = 0;
  for (const person of peopleVal) {
    total += person.age;
  }

  // Return the average age
  return total / peopleVal.length;
};
