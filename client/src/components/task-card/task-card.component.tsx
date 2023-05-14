import React from "react";
import { Task, deleteTaskRequest } from "../../api";

interface Props {
  task: Task;
};

export const TaskCard: React.FC<Props> = ({task}) => {

    
const handleDelete = async (task: Task) => {
     if(task && task?.id){
 try {
    
    const response = await  deleteTaskRequest(task?.id);
      console.log(response);
 } catch (error) {
    console.error(error);   
  }};
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
