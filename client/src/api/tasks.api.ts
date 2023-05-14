import axios from 'axios';

export interface Task {
    id?: number;
    title?: string;
    description?: string;
    done?: boolean;
    createAt?: string;
};

const PORT = import.meta.env.VITE_APP_URL;

//

export const getTasksRequest = async () => {

 return await axios.get(`http://localhost:${PORT}/tasks`);
};


export const cretateTaskRequest = async (task: Task) => {
 await axios.post(`http://localhost:${PORT}/tasks`, task);  
};


export const deleteTaskRequest = async (id: number) => {
  await axios.delete(`http://localhost:${PORT}/tasks/${id}`);
};