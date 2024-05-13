/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import { Component } from 'react';

// implement a Student component here

export interface StudentType {
  id: number;
  name: string;
  age: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
}

export function StudentFn({ student }: { student: StudentType }) {
  return (
    <div data-testid="student">
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
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
        <p>ID: {student.id}</p>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Grade: {student.grade}</p>
      </div>
    );
  }
}
