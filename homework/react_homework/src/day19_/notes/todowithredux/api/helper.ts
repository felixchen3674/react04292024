import { TodoType } from "../redux/todo/TodoReducer";

const API_URL = "http://localhost:3000/todos";

export const handleAdd = async (name: string) => {
  const newItem = { name, isCompleted: false };
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const handleDelete = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const handleEdit = async (todos: TodoType[], id: string) => {
  const status = todos.find((item) => item.id === id)?.isCompleted;
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: !status }),
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const FetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const res = await response.json();
      return res;
    } else {
      throw new Error("Something wrong");
    }
  } catch (err) {
    console.log(err);
  }
};
