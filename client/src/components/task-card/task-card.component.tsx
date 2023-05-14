import React from "react";
import { Task } from "../../api";

interface Props {
  task: Task;
};

export const TaskCard: React.FC<Props> = ({task}) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === true ? "✔️" : "❌"}</span> <br />
      <span>{task.createAt}</span>
      <button>Delete</button>
      <button>Edit</button>
      <hr />
    </div>
  );
};
