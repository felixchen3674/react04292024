import { useDispatch, useSelector } from "react-redux";
import InputActions from "../redux/input/InputActions";
import { handleAdd } from "../api/helper";
import TodoActions from "../redux/todo/TodoAction";
import { StateType } from "../redux/RootReducer";

export default function AddTodoR() {
  const name = useSelector((state: StateType) => {
    return state.input;
  });
  const dispatch = useDispatch();
  const handleClick = async () => {
    const result = await handleAdd(name);
    dispatch(TodoActions.addTodo(result));
    dispatch(InputActions.set(""));
  };
  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(InputActions.set(e.target.value))}
          placeholder="ADD TODO LIST"
        />
        <button onClick={handleClick}>Add</button>
      </label>
    </div>
  );
}
