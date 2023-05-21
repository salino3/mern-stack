import React from "react";
import { Task, TaskContext } from ".";
import { cretateTaskRequest, deleteTaskRequest, getTaskRequest, getTasksRequest, toggleTaskDoneRequest, updateTaskRequest } from "../api";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MyProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = React.useState<Task[] | undefined>([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  };

  const deleteTask = async (id: number) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks?.filter((task: Task) => task.id === id));
    } catch (error) {
      console.error(error);
    };
  };

  const createTask = async (values: Task) => {
    try {
      await cretateTaskRequest(values);
      await loadTasks();
    } catch (error) {
      console.error(error);
    };
  };

const getTask = async (id: number | string) => {
  try {
   const response = await getTaskRequest(id);
   return response.data;
  } catch (error) {
    console.error(error);
  };
};


const updateTask = async (id: number | string, newFields: Task) => {
  try {
   await updateTaskRequest(id, newFields);
   
  } catch (error) {
    console.error(error);
  };
};
 

const toggleTaskDone = async (id: number | string) => {
  try {
    const taskFound: Task | undefined = tasks?.find(
      (task: Task) => task.id === id
    );

    if (taskFound) {
      const newDone = !taskFound.done;
      await toggleTaskDoneRequest(id, newDone);
      
      setTasks(tasks?.map((task: Task) => task?.id === id ? {...task, done: task?.done === 0 ? 1 : 0} : task));   
    };
  } catch (error) {
    console.error(error);
  };
};




 

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
