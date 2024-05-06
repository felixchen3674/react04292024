const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  const population = Object.keys(people).length;
  if (population === 0) {
    return 0;
  }
  const peopleArray = Object.values(people);
  let totalAge = 0;
  for (const obj of peopleArray) {
    totalAge += obj.age;
  }
  return totalAge / population;
};
