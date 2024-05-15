import { useState } from "react";
import KeepComponentsPure from "./KeepComponentsPure";
import Input from "./ControlledComponents/Input";
import EventHandlers from "./EventHandlers";
import UpdatingState from "./TodoListApp";

export default function Day12Lecture() {
  return (
    <div>
      <h2>Day 12 Lecture</h2>
      {/* <KeepComponentsPure a={"a"} /> */}
      {/* <Input /> */}
      {/* <EventHandlers /> */}
      <UpdatingState />
    </div>
  );
}
