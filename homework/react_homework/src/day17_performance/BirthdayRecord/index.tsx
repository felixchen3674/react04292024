import { FormEvent, useEffect, useState } from "react";

type Person = {
  name: string;
  birthdate: string;
};

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

// shall be able to sort people based on name or birthdate
export default function BirthdayRecord() {
  const [isNameChecked, setIsNameChecked] = useState<boolean>(false);
  const [isAgeChecked, setIsAgeChecked] = useState<boolean>(false);
  const [allPeople, setAllPeople] = useState<Person[]>([]);

  const fetchPeople = async () => {
    const data = await getPeople();
    setAllPeople(data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const handleNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsNameChecked(checked);
    if (checked) {
      setAllPeople((prevPeople) =>
        [...prevPeople].sort((a, b) => a.name.localeCompare(b.name))
      );
      setIsAgeChecked(false);
    }
  };

  const handleAgeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsAgeChecked(checked);
    if (checked) {
      setAllPeople((prevPeople) =>
        [...prevPeople].sort(
          (a, b) =>
            new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime()
        )
      );
      setIsNameChecked(false);
    }
  };
  return (
    <>
      <form>
        <label>
          <input
            type="checkbox"
            checked={isNameChecked}
            onChange={handleNameChanged}
          />
          name
        </label>
        <label>
          <input
            type="checkbox"
            checked={isAgeChecked}
            onChange={handleAgeChanged}
          />
          age
        </label>
      </form>
      <ul>
        <li>Person Name Date of Birth</li>
        {allPeople.map((person) => {
          return (
            <li key={person.birthdate}>
              {person.name} {person.birthdate}
            </li>
          );
        })}
      </ul>
    </>
  );
}
