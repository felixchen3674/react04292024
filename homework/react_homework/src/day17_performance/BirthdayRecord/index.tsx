import { useState, useCallback, useEffect } from "react";

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

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// shall be able to sort people based on name or birthdate
export default function BirthdayRecord() {
  const [people, setPeople] = useState<Person[]>([]);
  const [sortBy, setSortBy] = useState<"name" | "birthdate">("name");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPeople = await getPeople();
      setPeople(fetchedPeople);
    };
    fetchData();
  }, []);

  const sortPeople = useCallback(
    (data: Person[], sortBy: "name" | "birthdate") => {
      if (!data || !sortBy) return [];

      const sortedData = [...data].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "birthdate") {
          const dateA = new Date(a.birthdate);
          const dateB = new Date(b.birthdate);
          return dateA.getTime() - dateB.getTime();
        } else {
          console.warn("Invalid sort criteria:", sortBy);
          return 0;
        }
      });
      return sortedData;
    },
    []
  );

  const handleSortChange = debounce((event) => {
    setSortBy(event.target.value);
  }, 500);

  const sortedPeople = sortPeople(people, sortBy);

  return (
    <div>
      <h2>People</h2>
      <div>
        <label>
          Sort by:
          <input
            type="radio"
            name="sort"
            value="name"
            checked={sortBy === "name"}
            onChange={handleSortChange}
          />
          Name
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="birthdate" // Corrected typo here
            checked={sortBy === "birthdate"}
            onChange={handleSortChange}
          />
          Birthdate
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
