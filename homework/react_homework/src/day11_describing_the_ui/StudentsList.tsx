import { Component } from "react";
import { StudentType, StudentFn, StudentClass } from "./Student";

/*
    implement a StudentsList component here
    it should take a prop "students" which is an array of students

    it should render a list of Student components
*/

// implement a StudentsList component here
export function StudentsListFn(props: { students: StudentType[] }) {
  return (
    <div>
      <h1>Students List</h1>
      {props.students.map((item) => {
        return <StudentFn key={item.id} student={item} />;
      })}
    </div>
  );
}

export class StudentsListClass extends Component<{ students: StudentType[] }> {
  render() {
    return (
      <div>
        <h1>Students List</h1>
        {this.props.students.map((item) => {
          return <StudentClass key={item.id} student={item} />;
        })}
      </div>
    );
  }
}
