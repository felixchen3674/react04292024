import React from "react";
import { Component } from "react";
import { StudentType, StudentFn, StudentClass } from "./Student";

/*
    implement a StudentsList component here
    it should take a prop "students" which is an array of students

    it should render a list of Student components
*/

// implement a StudentsList component here
interface StudentsListProps {
  students: StudentType[];
}

export function StudentsListFn({ students }: StudentsListProps) {
  return (
    <div>
      {students.map((student) => (
        <StudentFn key={student.id} student={student} />
      ))}
    </div>
  );
}

export class StudentsListClass extends React.Component<StudentsListProps> {
  render() {
    const { students } = this.props;
    return (
      <div>
        {students.map((student) => (
          <StudentClass key={student.id} student={student} />
        ))}
      </div>
    );
  }
}