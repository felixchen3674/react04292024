import { useEffect, useMemo, useState } from "react";
import Radio from "./Radio";
import Table from "./Table";

export type Person = {
  name: string;
  birthdate: string;
};

const getPeople = async () => {
  const people: Person[] = [
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

export default function BirthdayRecordSolution() {
  const [people, setPeople] = useState<Person[]>([]);
  const [sortedBy, setSortedBy] = useState<string | null>(null);

  useEffect(() => {
    getPeople().then((data) => setPeople(data));
  }, []);

  const handleClickRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    setSortedBy(option);
  };

  const sortedPeople = useMemo(
    () =>
      [...people].sort((p1, p2) => {
        if (sortedBy === "name") {
          return p1.name.localeCompare(p2.name);
        }
        if (sortedBy === "age") {
          return (
            new Date(p1.birthdate).getTime() - new Date(p2.birthdate).getTime()
          );
        }
        return 0;
      }),
    [sortedBy, people]
  );

  return (
    <div>
      <Radio sortedBy={sortedBy} handleClickRadio={handleClickRadio} />
      <Table people={sortedPeople} />
    </div>
  );
}
