import { useCallback, useEffect, useMemo, useState } from "react";

interface PeopleType {
  name: string;
  birthdate: string;
}
const getPeople = async () => {
  const people: PeopleType[] = [
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
  const [data, setData] = useState<PeopleType[]>([]);
  const [sortCriteria, setSortCriteria] = useState("");
  const [someState, setSomeState] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getPeople();
      setData(res);
    };
    fetchData();
  }, []);
  console.log("render function");
  const handleSortByName = useCallback(() => {
    console.log("render name");
    setSortCriteria("name");
  }, []);

  const handleSortByAge = useCallback(() => {
    console.log("render age");
    setSortCriteria("birthdate");
  }, []);

  const sortedPeople = useMemo(() => {
    if (sortCriteria === "name") {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortCriteria === "birthdate") {
      return [...data].sort(
        (a, b) =>
          new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime()
      );
    }
    return data;
  }, [data, sortCriteria]);

  // const handleSortbyName = (data) => {
  //   const newdata = [...data].sort((a, b) => a.name.localeCompare(b.name));
  //   setData(newdata);
  // };
  // const handleSortbyAge = (data) => {
  //   const newdata = [...data].sort(
  //     (a, b) =>
  //       new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime()
  //   );
  //   setData(newdata);
  // };
  const handleState = () => {
    setSomeState((pre) => !pre);
  };
  return (
    <div>
      <label>
        Sort by:
        <label>
          <input type="radio" name="sortMethod" onChange={handleSortByName} />
          Name
        </label>
        <label>
          <input type="radio" name="sortMethod" onChange={handleSortByAge} />
          Age
        </label>
      </label>
      <table>
        <thead>
          <tr>
            <th>Personal Name</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople &&
            sortedPeople.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.birthdate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={handleState}>{someState ? "True" : "False"}</button>
    </div>
  );
}
