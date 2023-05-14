import React from "react";
import { Task, TaskContext } from ".";
import { cretateTaskRequest, deleteTaskRequest, getTasksRequest } from "../api";
import { FormikHelpers } from "formik";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MyProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = React.useState<Task[] | undefined>([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id: number) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks?.filter((task: Task) => task.id === id));
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (values: Task) => {
    try {
      await cretateTaskRequest(values);
      await loadTasks();
    } catch (error) {
      console.error(error);
    };
  };

 

 

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, loadTasks, deleteTask, createTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
