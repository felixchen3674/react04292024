const people = {
  1: { name: 'Alice', age: 25 },
  2: { name: 'Bob', age: 30 },
  3: { name: 'Charlie', age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  const peopleVal = Object.values(people);
  let total = 0;
  for (const person of peopleVal) {
    total += person.age;
  }
  return total / peopleVal.length;
};
