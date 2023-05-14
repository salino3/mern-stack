import React from 'react';
import { MyState } from ".";

export const TaskContext = React.createContext<MyState>({} as MyState);

export const useTasks = () => {
  const context = React.useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a Task Provider");
  };
  return context;
};