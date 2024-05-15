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
  id: number
  name: string
  age: number
  grade: "A" | "B" | "C" | "D" | "F";
}

export function StudentFn({ student }: { student: StudentType }) {
  return (
    <div data-testid="student">
      <h1>{student.name}</h1>
      <h2>{student.id}</h2>
      <h2>{student.age}</h2>
      <h2>{student.grade}</h2>
    </div>
  );
}

export class StudentClass extends Component<{ student: StudentType }> {
  render() {
    const { student } = this.props;
    return (
      <div data-testid="student">
        <h1>{student.name}</h1>
        <h2>{student.id}</h2>
        <h2>{student.age}</h2>
        <h2>{student.grade}</h2>
      </div>
    );
  }
}
