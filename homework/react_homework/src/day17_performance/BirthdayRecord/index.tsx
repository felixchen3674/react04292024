import { useEffect, useState } from "react";

interface Person {
  name: string;
  birthdate: string;
}

const getPeople = async () => {
  const people = [
    {
      name: "John Doe",
      birthdate: "01/15/1990",
    },
    {
      name: "Jane Smith",
      birthdate: "03/22/1985",
    },
    {
      name: "Michael Johnson",
      birthdate: "09/10/1992",
    },
    {
      name: "Emily Williams",
      birthdate: "06/05/1988",
    },
    {
      name: "David Brown",
      birthdate: "12/04/1997",
    },
    {
      name: "Sarah Davis",
      birthdate: "07/19/1991",
    },
    {
      name: "Christopher Wilson",
      birthdate: "11/30/1984",
    },
    {
      name: "Jessica Taylor",
      birthdate: "02/08/1994",
    },
  ];
  return people;
};
type sortOption = "name" | "age" | "";
// shall be able to sort people based on name or birthdate
export default function BirthdayRecord() {
  const [people, setPeople] = useState<Person[]>([]);
  const [sortBy, setSortBy] = useState<sortOption>("");

  useEffect(() => {
    const fetchData = async () => {
      const peopleData = await getPeople();
      setPeople(peopleData);
    };

    fetchData();
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value as sortOption);
  };

  const sortedPeople = [...people].sort((a: Person, b: Person) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "age") {
      return new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime();
    } else {
      return 0;
    }
  });

  return (
    <>
      <label>
        <input
          type="radio"
          name="sort"
          value="name"
          checked={sortBy === "name"}
          onChange={handleSortChange}
        />
        by name
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="age"
          checked={sortBy === "age"}
          onChange={handleSortChange}
        />
        by age
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value={""}
          checked={sortBy === ""}
          onChange={handleSortChange}
        />
        default
      </label>
      <p>Person Name Date of Birth</p>
      <ul>
        {sortedPeople.map((p) => (
          <li key={p.name}>
            {p.name} {p.birthdate}
          </li>
        ))}
      </ul>
    </>
  );
}
