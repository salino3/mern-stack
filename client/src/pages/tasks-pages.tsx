import React from 'react';
import { Task, getTasksRequest } from '../api';
import { TaskCard } from '../components';

export const TasksPages: React.FC = () => {

  const [tasks, setTasks] = React.useState<Task[] | undefined>([]);

 React.useEffect(() => {
  async function loadTasks() {
   const response = await getTasksRequest();
   setTasks(response.data);
  };

  return () => {
    loadTasks();  
    };
  }, []);


  function renderMain() {
    return !tasks || tasks.length === 0 ? (
          <h1>There are not tasks..</h1>
        ) : (
          tasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
      )};

  return (
    <div>
      <h1>Tasks</h1>
      <div>
     {renderMain()}
      </div>
    </div>
  );
}
