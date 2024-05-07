const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  const ages = Object.values(people).map(person => person.age);
  const totalAge = ages.reduce((sum, age) => sum + age, 0);
  const aveAge = totalAge / ages.length;
  return aveAge;
};
