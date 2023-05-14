import React from 'react';
import { useTasks } from '../context';
import { Task } from '../api';
import { TaskCard } from '../components';

export const TasksPages: React.FC = () => {

  const {tasks, loadTasks} = useTasks();

 React.useEffect(() => {
     loadTasks();  
  }, [tasks?.length]);


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
