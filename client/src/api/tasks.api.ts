import axios from 'axios';

interface Task {
    id?: number;
    title?: string;
    description?: string;
    done?: boolean;
    createAt?: string;
};

const PORT = import.meta.env.VITE_APP_URL;

export const  cretateTaskRequest = async (task: Task) => {
 await axios.post(`http://localhost:${PORT}/tasks`, task);
};
