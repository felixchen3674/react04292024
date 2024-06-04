import React from "react";
import StudentName from "./StudentName";
import JoiningDate from "./JoiningDate";
import AddBtn from "./AddBtn";

export default function Search() {
  return (
    <div className="searchContainer">
      <StudentName />
      <JoiningDate />
      <AddBtn />
    </div>
  );
}
