import { useMemo } from "react";
import { Person } from ".";

interface TableProps {
  people: Person[];
}

export default function Table({ people }: TableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => {
            return (
              <tr key={person.name + person.birthdate}>
                <td>{person.name}</td>
                <td>{person.birthdate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
