import React, { useContext } from "react";
import ChildA from "./ChildA";
import { countContext } from "./UseContextReduce";

export default function ParentA() {
  const { countState } = useContext(countContext);
  return (
    <div>
      <div>
        <h1>Parent Count :{countState}</h1>
      </div>
      <ChildA />
    </div>
  );
}
