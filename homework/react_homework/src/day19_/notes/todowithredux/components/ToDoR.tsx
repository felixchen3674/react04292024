import { useDispatch, useSelector } from "react-redux";
import { handleDelete, handleEdit } from "../api/helper";
import { TodoType } from "../redux/todo/TodoReducer";
import { CheckboxR } from "./CheckboxR";
import TodoActions from "../redux/todo/TodoAction";
import { StateType } from "../redux/RootReducer";

interface TodoProps {
  item: TodoType;
}

export default function ToDo({ item }: TodoProps) {
  const { id, name, isCompleted } = item;
  const todos = useSelector((state: StateType) => {
    return state.todos;
  });
  const dispatch = useDispatch();
  const handleOnChange = async () => {
    const res = await handleEdit(todos, id);
    dispatch(TodoActions.editTodo(res));
  };
  const handleOnClick = async () => {
    const res = await handleDelete(id);
    dispatch(TodoActions.deleteTodo(id));
  };
  return (
    <div>
      <li>
        <div>
          <h4>Name:{name}</h4>
          <CheckboxR checked={isCompleted} onChange={handleOnChange} />
          <h4>
            Status:
            {isCompleted ? "Completed" : "Not Completed"}
          </h4>
          <button onClick={handleOnClick}>Delete</button>
        </div>
      </li>
    </div>
  );
}
