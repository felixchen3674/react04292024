import UseContextReduce from "../../day18_ context & useReducer/notes/UseContextReduce";
import UseReducer2 from "../../day18_ context & useReducer/notes/UseReducer2";
import UseContext from "../../day18_ context & useReducer/notes/useContext";
import UseReducerFunction from "../../day18_ context & useReducer/notes/useReducer";

import BirthdayRecord from "../BirthdayRecord";
import DebouncedCallback from "../DebouncedCallback";
import BirthdayRecordSolution from "../BirthdayRecord/solution";
import TodoApp from "../../day18_ context & useReducer/todoApp/TodoApp";
import UseCallBack from "./useCallBack";
import React from "react";
import UseMemo from "./usememo";
import ParentA from "../../day18_ context & useReducer/notes/ParentA";

export default function Day17Play() {
  return (
    <div>
      <h1>Day 17 Play</h1>
      {/* <BirthdayRecord /> */}
      {/* <DebouncedCallback /> */}
      {/* <UseContext /> */}
      {/* <UseReducerFunction /> */}
      {/* <UseReducer2 /> */}
      <UseContextReduce>
        <ParentA />
      </UseContextReduce>
      {/* <TodoApp /> */}
      {/* <BirthdayRecordSolution /> */}
      {/* <UseCallBack /> */}
      {/* <UseMemo /> */}
    </div>
  );
}
