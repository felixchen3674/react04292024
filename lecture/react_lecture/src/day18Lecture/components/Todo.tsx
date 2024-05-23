import Checkbox from "./Checkbox";

export interface TodoType {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoProps {
  todo: TodoType;
  handleToggle: (id: number) => void;
}

export default function Todo({ todo, handleToggle }: TodoProps) {
  const { id, task, completed } = todo;

  return (
    <li>
      <Checkbox
        checked={completed}
        onChange={() => {
          handleToggle(id);
        }}
      />
      <div>Task: {task}</div>
      <div>Status: {completed ? "completed" : "incomplete"}</div>
    </li>
  );
}
