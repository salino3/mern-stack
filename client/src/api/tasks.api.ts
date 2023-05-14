import axios from 'axios';

interface Task {
    id?: number;
    title?: string;
    description?: string;
    done?: boolean;
    createAt?: string;
};

export const  cretateTaskRequest = async (task: Task) => {
 await axios.post(`http://localhost:3100/tasks`, task);
};
