import { useContext, useEffect, useState } from "react";
import { CheckBox } from "./CheckBox";
import { ToDoContext } from "./todoContext";
import { Redirect, useParams } from "react-router-dom";

export interface TodoType {
  id: string;
  task: string;
  completed: boolean;
  date: string;
  description: string;
}
export default function SingleTodo() {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const { handleEdit, handleDelete, FetchSingleData, todo } =
    useContext(ToDoContext);
  useEffect(() => {
    FetchSingleData(id);
  }, []);
  const handleBackToHome = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }
  const { task, date, description, completed } = todo;
  return (
    <div>
      <li>
        <div>
          <h4>Task:{task}</h4>
          <h4>Date:{date}</h4>
          <h4>description:{description}</h4>
          <CheckBox checked={completed} onChange={() => handleEdit(id)} />
          <h4>
            Status:
            {completed ? "Completed" : "Not Completed"}
          </h4>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={handleBackToHome}>Back to Home</button>
        </div>
      </li>
    </div>
  );
}
