import { Component } from 'react';
import { StudentType, StudentFn, StudentClass } from './Student';

/*
    implement a StudentsList component here
    it should take a prop "students" which is an array of students

    it should render a list of Student components
*/

// implement a StudentsList component here

interface StudentListProps {
  students: StudentType[];
}

export function StudentsListFn({ students }: StudentListProps) {
  return (
    <div>
      {students.map((student) => (
        <StudentFn key={student.id} student={student} />
      ))}
    </div>
  );
}

export class StudentsListClass extends Component<StudentListProps> {
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
