import { useEffect } from "react";
import { FetchData } from "./api/helper";
import { useDispatch, useSelector } from "react-redux";
import TodoActions from "./redux/todo/TodoAction";
import AddTodoR from "./components/AddTodoR";
import ToDoListR from "./components/ToDoListR";
import { ThemeType } from "./redux/theme/ThemeReducer";
import { StateType } from "./redux/RootReducer";
import ThemeToggle from "./components/ThemeToggle";

export default function TodoAppWRedux() {
  const dispatch = useDispatch();
  const themeStatus: ThemeType = useSelector((state: StateType) => {
    return state.theme;
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await FetchData();
      dispatch(TodoActions.setTodo(res));
    };
    fetchData();
  }, []);
  return (
    <div id={themeStatus}>
      <div>
        <h1>To do List:</h1>
      </div>
      <ThemeToggle />
      <AddTodoR />
      <ToDoListR />
    </div>
  );
}
