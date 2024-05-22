import { useEffect, useState } from 'react';

const getPeople = async () => {
  const people = [
    {
      name: 'John Doe',
      birthdate: '01/15/1990',
    },
    {
      name: 'Jane Smith',
      birthdate: '03/22/1985',
    },
    {
      name: 'Michael Johnson',
      birthdate: '09/10/1992',
    },
    {
      name: 'Emily Williams',
      birthdate: '06/05/1988',
    },
    {
      name: 'David Brown',
      birthdate: '12/04/1997',
    },
    {
      name: 'Sarah Davis',
      birthdate: '07/19/1991',
    },
    {
      name: 'Christopher Wilson',
      birthdate: '11/30/1984',
    },
    {
      name: 'Jessica Taylor',
      birthdate: '02/08/1994',
    },
  ];
  return people;
};
interface Person {
  name: string;
  birthdate: string;
}

// shall be able to sort people based on name or birthdate
export default function BirthdayRecord() {
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPeople();
      setPeople(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Birthday Record</h1>
      <div>
        <button>Sort by Name</button>
        <button>Sort by Birthdate</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
