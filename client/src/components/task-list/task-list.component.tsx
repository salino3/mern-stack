import React from "react";
import { useNavigate } from "react-router-dom";
import { Task } from "../../api";
import { useTasks } from "../../context";
import { CardComponent } from "../card";


interface Props {
  task: Task;
}

export const TaskList: React.FC<Props> = ({ task }) => {

  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = (task: Task) => {
    console.log("a ver", task);
    if (task && task?.id) {
      toggleTaskDone(task?.id);
    }
  };

  function handleDelete(task: Task) {
    if (task && task?.id) {
      deleteTask(task?.id);
    }
  }

  function handleRedirect(task: Task) {
    return navigate(`/edit/${task.id}`);
  }

  return (
      <CardComponent
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleRedirect={handleRedirect}
        task={task}
        key={task.id}
        />
  );
};
