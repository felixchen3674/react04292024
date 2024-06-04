import React, { useContext } from "react";
import { dormContext } from "./dormContext";

export default function StudentName() {
  const { studentName, setStudentName } = useContext(dormContext);
  return (
    <div className="studentNameContainer">
      <h4>Student Name :</h4>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      ></input>
    </div>
  );
}
