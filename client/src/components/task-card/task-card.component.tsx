import React from "react";
import { Task } from "../../api";
import { useTasks } from "../../context";

interface Props {
  task: Task;
};

export const TaskCard: React.FC<Props> = ({task}) => {

   const { deleteTask } = useTasks();

function handleDelete (task: Task) {
    if(task && task?.id){
  deleteTask(task?.id);
 };
};

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === true ? "✔️" : "❌"}</span> <br />
      <span>{task.createAt}</span>
      <button onClick={() => handleDelete(task)}>Delete</button>
      <button>Edit</button>
      <hr />
    </div>
  );
};
