import { UUID } from "mongodb";
import { useEffect, useState } from "react";

interface TodoType {
  id: number;
  name: string;
  isCompleted: boolean;
}

const todosItems: TodoType[] = [
  { id: 1, name: "todoitem1", isCompleted: false },
  { id: 2, name: "todoitem2", isCompleted: false },
  { id: 3, name: "todoitem3", isCompleted: false },
  { id: 4, name: "todoitem4", isCompleted: false },
  { id: 5, name: "todoitem5", isCompleted: false },
];
export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [name, setName] = useState("");
  const [editedIndex, setEditedIndex] = useState<number | null>(null);
  const [editedInput, setEditedInput] = useState<string>("");
  useEffect(() => {
    async function FetchData() {
      setTodos(todosItems);
    }
    FetchData();
  }, []);

  const handleAdd = () => {
    const index = todos[todos.length - 1].id + 1;
    const newItem = { id: index, name: name, isCompleted: false };
    const newtodos = [...todos, newItem];
    setTodos(newtodos);
  };
  const handleDelete = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  const handleEdit = (name: string, id: number) => {
    setEditedIndex(id);
    setEditedInput(name);
  };
  const handleSave = (id: number) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, name: editedInput };
        return newItem;
      }
      return item;
    });
    setTodos(newTodos);
    setEditedIndex(null);
  };

  return (
    <div>
      <div>
        <h1>To do List:</h1>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="ADD TODO LIST"
          />
          <button onClick={handleAdd}>Add</button>
        </label>
      </div>
      <div>
        <ul>
          {todos &&
            todos.map((item) => {
              return (
                <li key={item.id}>
                  {editedIndex === item.id ? (
                    <div>
                      <input
                        value={editedInput}
                        onChange={(e) => setEditedInput(e.target.value)}
                      />
                      <button onClick={() => handleSave(item.id)}>save</button>
                    </div>
                  ) : (
                    <div>
                      <h4>
                        Name:{item.name} Completed:{" "}
                        {item.isCompleted ? "Yes" : "No"}
                      </h4>
                      <button onClick={() => handleEdit(item.name, item.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
