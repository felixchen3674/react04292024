import { ReactElement, useState } from "react";
import Counter from "./Counter";
import Parent from "./Parent";
import Toggle from "./Toggle";

interface Day11LectureProps {
  children: ReactElement;
}

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

export default function Day11Lecture({ children }: Day11LectureProps) {
  //   console.log(children);
  const bool = 0;

  //   console.log("Day 11 rendered");

  return (
    <div>
      {/* <h2>JSX</h2>
      <div>Javascript XML Extension</div>
      <div>{children}</div>
      <div>{bool ? "true" : "false"}</div>

      <ul>
        {people.map((person, index) => {
          //   console.log(person);

          return (
            // avoid using index, always look for a unique identifier

            <div key={person.id}>
              {person.name}: {person.profession}
            </div>
          );
        })}
      </ul> */}
      {/* <Parent /> */}
      <Toggle />
    </div>
  );
}
