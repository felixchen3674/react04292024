import { useSelector } from "react-redux";
import ToDoR from "./ToDoR";
import { TodoType } from "../redux/todo/TodoReducer";
import { StateType } from "../redux/RootReducer";

export default function ToDoListR() {
  const todos: TodoType[] = useSelector((state: StateType) => {
    return state.todos;
  });

  return (
    <div>
      <ul>
        {todos &&
          todos.map((item) => {
            return <ToDoR key={item.id} item={item} />;
          })}
      </ul>
    </div>
  );
}
