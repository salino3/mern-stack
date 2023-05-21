import React from "react";
import { useNavigate } from "react-router-dom";
import { Task } from "../../api";
import { useTasks } from "../../context";

interface Props {
  task: Task;
};

export const TaskCard: React.FC<Props> = ({task}) => {

   const { deleteTask, toggleTaskDone } = useTasks();
   const navigate = useNavigate();

  const handleDone =  (task: Task) => {

    console.log("a ver", task)
    if(task && task?.id){
    toggleTaskDone(task?.id);
   };
  };

function handleDelete (task: Task) {
    if(task && task?.id){
  deleteTask(task?.id);
 };
};

function handleRedirect (task: Task) {
  
  return navigate(`/edit/${task.id}`);
};

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "✔️" : "❌"}</span> <br />
      <span>{task.createAt}</span>
      <button onClick={() => handleDelete(task)}>Delete</button>
      <button onClick={() => handleRedirect(task)}>Edit</button>
      <button onClick={() => handleDone(task)}>Toggle task</button>
      <hr />
    </div>
  );
};
