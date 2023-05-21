import axios from 'axios';

export interface Task {
    id?: number;
    title?: string;
    description?: string;
    done?: boolean | number;
    createAt?: string;
};


const PORT = import.meta.env.VITE_APP_URL;

//

export const getTasksRequest = async () => {
 return await axios.get(`http://localhost:${PORT}/tasks`);
};


export const cretateTaskRequest = async (task: Task) => {
 return await axios.post(`http://localhost:${PORT}/tasks`, task);  
};


export const deleteTaskRequest = async (id: number) => {
 return await axios.delete(`http://localhost:${PORT}/tasks/${id}`);
};

export const getTaskRequest = async (id: number | string) => {
  return await axios.get(`http://localhost:${PORT}/tasks/${id}`);
};

export const updateTaskRequest = async (id: number | string, newFields: Task) => {
  return await axios.put(`http://localhost:${PORT}/tasks/${id}`, newFields);
};


export const toggleTaskDoneRequest = async (
  id: string | number,
  done: boolean | number
) => {
  const doneValue = done ? 1 : 0;
  return await axios.put(`http://localhost:${PORT}/tasks/${id}`, {
    done: doneValue,
  });
};

