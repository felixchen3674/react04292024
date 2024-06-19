import React from "react";

export interface TaskType {
  id: number;
  name: string;
  priority: "normal" | "urgent";
}

// const exampleTasks: TaskType[] = [
//   { id: 1, name: "Take out the trash", priority: "normal" },
//   { id: 2, name: "Prepare project presentation", priority: "urgent" },
//   { id: 3, name: "Book flight tickets", priority: "urgent" },
//   { id: 4, name: "Water the plants", priority: "normal" },
//   { id: 5, name: "Complete React tutorial", priority: "urgent" },
// ];

export default function UrgentTasks({ tasks }: { tasks: TaskType[] }) {
  const urgentTask = tasks.filter((item) => item.priority === "urgent");
  return (
    <div>
      <h1>Urgent Tasks</h1>
      {
        /* Only displays the urgent tasks */
        urgentTask &&
          urgentTask.map((item) => {
            return (
              <>
                <h4>{item.id}</h4>
                <h4>{item.name}</h4>
                <h4>{item.priority}</h4>
              </>
            );
          })
      }
      <ul></ul>
    </div>
  );
}
