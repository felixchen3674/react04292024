/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import { Component } from "react";

// implement a Student component here

export interface StudentType {
  id: number;
  name: string;
  age: number;
  grade: "A" | "B" | "C" | "D" | "F";
}

export function StudentFn(props: { student: StudentType }) {
  const { id, name, age, grade } = props.student;
  return (
    <div data-testid="student">
      <h4>{id}</h4>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{grade}</h4>
    </div>
  );
}

export class StudentClass extends Component<{ student: StudentType }> {
  render() {
    const { id, name, age, grade } = this.props.student;
    return (
      <div data-testid="student">
        <h4>{id}</h4>
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{grade}</h4>
      </div>
    );
  }
}
