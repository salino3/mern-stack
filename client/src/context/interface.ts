
export interface Task {

    id?: number;
    title?: string;
    description?: string;
    done?: boolean | number;
    createAt?: string;
};

export interface MyState {
  tasks: Task[] | undefined;
  setTasks: React.Dispatch<React.SetStateAction<Task[] | undefined>>;
  loadTasks(): Promise<void>;
  deleteTask: (task: number) => Promise<void>;
  createTask: (values: Task) => Promise<void>;
  getTask: (id: number | string) => Promise<any>;
  updateTask: (id: number | string, newFields: Task) => Promise<void>;
  toggleTaskDone: (id: number | string) => void;
}

