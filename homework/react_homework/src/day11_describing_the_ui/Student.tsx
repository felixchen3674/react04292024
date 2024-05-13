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
import React from "react";
// implement a Student component here
export interface StudentType {
  id: number;
  name: string;
  age: number;
  grade: "A" | "B" | "C" | "D" | "F";
}

export function StudentFn({ student }: { student: StudentType }) {
  return (
    <div data-testid="student">
      <h2>{student.name}</h2>
      <p>ID: {student.id}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}

export class StudentClass extends React.Component<{ student: StudentType }> {
  render() {
    const { student } = this.props;
    return (
      <div data-testid="student">
        <h2>{student.name}</h2>
        <p>ID: {student.id}</p>
        <p>Age: {student.age}</p>
        <p>Grade: {student.grade}</p>
      </div>
    );
  }
}
