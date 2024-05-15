import "./App.css";
import { TodoListApp } from "./day12_interactivity/TodoListApp";
// import Day11Play from "./day11_describing_the_ui/notes";
// import { ClassClick } from "./day11_describing_the_ui/notes/ClassClick";
// import FunctionClick from "./day11_describing_the_ui/notes/FunctionClick";
// import { PlayButton } from "./day11_describing_the_ui/notes/PlayButton";
// import { StudentType } from "./day11_describing_the_ui/Student";
import Day12Play from "./day12_interactivity/notes";
// import TodoListApp from "./day12_interactivity/TodoListApp";

function App() {
  // const student: StudentType = {
  //   id: 1,
  //   name: "John",
  //   age: 20,
  //   grade: "A",
  // };

  return (
    <>
      {/* <Day11Play
        student={student}
        message="good"
        onClick={() => console.log("day")}
      />
      <FunctionClick />
      <ClassClick />
      <PlayButton movieName="Good movie" /> */}
      {/* here it is adding the new property to the day11play component which is student */}
      {/* <Day11Play /> */}
      <Day12Play />
      <TodoListApp />
    </>
  );
}

export default App;
