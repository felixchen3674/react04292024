import React, {
  useState,
  ChangeEvent,
  FormEvent,
  createContext,
  useContext,
} from "react";
import TodoItem from "../TodoItem";
import { TodoContext } from "../../contexts/TodoContext";

const TodoList: React.FC = () => {
  const [toDoValue, setToDoValue] = useState<string>("");
  const { state, addTodo } = useContext(TodoContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToDoValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (toDoValue.trim()) {
      await addTodo(toDoValue, "Description for the todo");
      setToDoValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={toDoValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {state.todos.map((toDoItem) => (
          <TodoItem
            key={toDoItem.id}
            toDoItem={toDoItem.task}
            id={toDoItem.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
