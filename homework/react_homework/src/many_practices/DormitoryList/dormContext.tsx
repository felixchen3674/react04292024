import React, { createContext, useState } from "react";
import studentsList from "./studentList";

export const dormContext = createContext(null);

export default function DormProvider({ children }) {
  const [studentName, setStudentName] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(studentsList);

  const handleOnclick = () => {
    if (!studentName || !joinDate) {
      setError("Please enter all the fields");
      return;
    } else if (
      !studentsList.some(
        (item) => item.name.toLowerCase() === studentName.toLowerCase()
      )
    ) {
      setError(`Sorry, ${studentName} is not a verified student!`);
      return;
    } else {
      const target = studentsList.find(
        (item) => item.name.toLowerCase() === studentName.toLowerCase()
      );
      console.log(target);
      if (new Date(target.validityDate) < new Date(joinDate)) {
        setError(`Sorry, ${studentName}'s validity has Expired!`);
        return;
      }
      if (
        data.length === 1 &&
        data[0].name.toLowerCase() === studentName.toLowerCase()
      ) {
        setError(
          `Sorry,${studentName} is already present in the residents list!`
        );
        setStudentName("");
        return;
      }
      const res = studentsList.filter(
        (item) =>
          item.name.toLowerCase() === studentName.toLowerCase() &&
          new Date(item.validityDate) > new Date(joinDate)
      );
      if (res) {
        setData(res);
        setStudentName("");
        setJoinDate("");
      }
    }
  };

  const handleOnChange = () => {
    setError("");
  };

  return (
    <dormContext.Provider
      value={{
        studentName,
        setStudentName,
        joinDate,
        setJoinDate,
        error,
        setError,
        data,
        setData,
        handleOnclick,
        handleOnChange,
      }}
    >
      <div>{children}</div>
    </dormContext.Provider>
  );
}
