const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  const allPeople = Object.values(people);
  const totalAge = allPeople.reduce((acc, person) => acc + person.age, 0);
  return totalAge / allPeople.length;
};
