import React, { useContext } from "react";
import GrandA from "./GradeA";
import { countContext } from "./UseContextReduce";

export default function ChildA() {
  const { countState } = useContext(countContext);
  return (
    <div>
      <div>
        <h2>Child count:{countState}</h2>
      </div>
      <GrandA />
    </div>
  );
}
