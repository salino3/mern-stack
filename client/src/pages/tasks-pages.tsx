import React from "react";
import { useTasks } from "../context";
import { Task } from "../api";
import { TaskList } from "../components";
import './pages.styles.scss';

export const TasksPages: React.FC = () => {
  const { tasks, loadTasks } = useTasks();

  React.useEffect(() => {
    loadTasks();
  }, [tasks?.length]);

  function renderMain() {
    return !tasks || tasks.length === 0 ? (
      <h1>There are not tasks..</h1>
    ) : (
      <div className="box-list">
      {tasks.map((task: Task) => <TaskList key={task.id} task={task} />)}
      </div>
    );
  }

  return (
    <div>
      <h1>Tasks</h1>
      <div>{renderMain()}</div>
    </div>
  );
};
