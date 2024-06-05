import React from "react";
import "./App.css";
// import { TodoListApp } from "./day12_interactivity/TodoListApp";
// import { TodoListApp } from "./day12_interactivity/TodoListApp";
// import Day11Play from "./day11_describing_the_ui/notes";
// import { ClassClick } from "./day11_describing_the_ui/notes/ClassClick";
// import FunctionClick from "./day11_describing_the_ui/notes/FunctionClick";
// import { PlayButton } from "./day11_describing_the_ui/notes/PlayButton";
import { StudentType } from "./day11_describing_the_ui/Student";
// // import { ClassClick } from "./day11_describing_the_ui/notes/ClassClick";
// import FunctionClick from "./day11_describing_the_ui/notes/FunctionClick";
// import { PlayButton } from "./day11_describing_the_ui/notes/PlayButton";
// import { StudentType } from "./day11_describing_the_ui/Student";
// import Day12Play from "./day12_interactivity/notes";
// import Fetch from "./day13_lifecycles/notes/FetchData";
// import { LifeCycle } from "./day13_lifecycles/notes/LifeCycle";
// import UseEffectCycle from "./day13_lifecycles/notes/UseEffect";
// import TodoListApp from "./day12_interactivity/TodoListApp";
// import Fetch from "./day13_lifecycles/notes/FetchData";
// import { LifeCycle } from "./day13_lifecycles/notes/LifeCycle";
// import UseEffectCycle from "./day13_lifecycles/notes/UseEffect";
// import TodoListApp from "./day12_interactivity/TodoListApp";
import Day13Play from "./day13_lifecycles/notes";
import Counter from "./day13_lifecycles/notes/CounterTimer";
import Day14Play from "./day14_practice";
import Day16Play from "./day16_custom_hooks/notes";
import Day17Play from "./day17_performance/notes";
import ToDoApp from "./day21_routing";
import Day21Play from "./day21_routing/notes";
import TodoProvider from "./day21_routing/todoWRouter/components/todoContext";

import DormProvider from "./many_practices/DormitoryList/dormContext";
import DomitroyList from "./many_practices/DormitoryList";
import EmployeeTable from "./many_practices/EmployeeTable";

function App() {
  // const student: StudentType = {
  //   id: 1,
  //   name: "John",
  //   age: 20,
  //   grade: "A",
  // };

  return (
    <div>
      <div>{/* <Counter initialCount={0} /> */}</div>
      {/* <TodoProvider>
        <ToDoApp />
      </TodoProvider> */}
      {/* <Day11Play /> */}
      {/* <Day12Play /> */}
      {/* <Day13Play /> */}
      {/* <Day14Play /> */}
      {/* <Day16Play /> */}
      {/* <Day17Play /> */}
      {/* <ReduxTodoSolution /> */}
      {/* <Day21Play /> */}
      {/* <Day22Play /> */}
      {/* <DormProvider>
        <DomitroyList />
      </DormProvider> */}
      <EmployeeTable />
    </div>
  );
}

export default App;
