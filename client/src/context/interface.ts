import { FormikHelpers } from "formik";

export interface Task {

    id?: number;
    title?: string;
    description?: string;
    done?: boolean;
    createAt?: string;
};

export interface MyState {
  tasks: Task[] | undefined;
  setTasks: React.Dispatch<React.SetStateAction<Task[] | undefined>>;
  loadTasks(): Promise<void>;
  deleteTask: (task: number) => Promise<void>;
  createTask: (values: Task) => Promise<void>;
}

