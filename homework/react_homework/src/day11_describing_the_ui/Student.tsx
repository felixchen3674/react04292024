/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import {Component} from "react"

// implement a Student component here

enum Grade {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

export interface StudentType {
  id: number
  name: string
  age: number
  grade: Grade
}

export function StudentFn({student}: {student: StudentType}) {
  return (
    <div data-testid="student">
      <p>{student.name}</p>
      <p>{student.id}</p>
      <p>{student.age}</p>
      <p>{student.grade}</p>
    </div>
  )
}

export class StudentClass extends Component<{student: StudentType}> {
  render() {
    const {student} = this.props
    return (
      <div data-testid="student">
        <p>{student.name}</p>
        <p>{student.id}</p>
        <p>{student.age}</p>
        <p>{student.grade}</p>
      </div>
    )
  }
}
