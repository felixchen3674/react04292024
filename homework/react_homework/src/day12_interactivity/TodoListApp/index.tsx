import { useState } from "react";
import Checkbox from "../ControlledComponents/Checkbox";
import RadioGroup from "../ControlledComponents/RadioGroup";
import Select from "../ControlledComponents/Select";

type TodoType = {
  title: string;
};

export default function TodoListApp() {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [title, setTitle] = useState<string>("");

  const [isEditedIndex, setIsEditedIndex] = useState<number | null>(null);
  const [editedInput, setEditedInput] = useState<string>("");

  function handleInput() {
    setTodo((t) => [...t, { title: title }]);
    setTitle(() => "");
  }
  function handleDelete(index: number) {
    setTodo((t) => t.filter((_, i) => i !== index));
  }
  function handleEdit(item: TodoType, index: number) {
    setIsEditedIndex(index);
    setEditedInput(item.title);
  }
  function handleSave(index: number) {
    const newTodo: TodoType[] = [...todo];
    newTodo[index].title = editedInput;
    setTodo([...newTodo]);
    setIsEditedIndex(null);
  }
  return (
    <div>
      <h1>To Do list</h1>
      <input
        value={title}
        placeholder="Add Todo-list title"
        onChange={(e) => setTitle((prev) => (prev = e.target.value))}
      ></input>
      <button onClick={handleInput}>Add</button>
      <ul>
        {todo &&
          todo.map((item, index) => {
            return (
              <div key={index}>
                {isEditedIndex === index ? (
                  <div>
                    <input
                      value={editedInput}
                      onChange={(e) => setEditedInput(e.target.value)}
                    ></input>
                    <button onClick={() => handleSave(index)}>save</button>
                  </div>
                ) : (
                  <li>
                    {item.title}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleEdit(item, index)}>
                      Edit
                    </button>
                  </li>
                )}
                <Checkbox />
                <RadioGroup />
                <Select />
              </div>
            );
          })}
      </ul>
    </div>
  );
}
