const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  let total = 0;
  const peopleArr = Object.values(people)
  for (const person of peopleArr) {
    total += person.age;
  }
  return total / peopleArr.length;

};
