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

export function StudentFn({student} : {student : StudentType}) {
  return ( 
    <div data-testid="student">
    <h2>{student.name}</h2>
    <p>ID: <span>{student.id}</span></p>
    <p>Age: <span>{student.age}</span></p>
    <p>Grade: <span>{student.grade}</span></p>
  </div>
  );
}
interface StudentClassProps {
  student: StudentType;
}

export class StudentClass extends Component<StudentClassProps> {
  render() {
    const { student } = this.props;
    return (
      <div data-testid="student">
      <h2>{student.name}</h2>
      <p>ID: <span>{student.id}</span></p>
      <p>Age: <span>{student.age}</span></p>
      <p>Grade: <span>{student.grade}</span></p>
    </div>
    );
  }
}
