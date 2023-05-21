import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { Task, useTasks } from "../context";

export const TasksForm: React.FC = () => {
  const { createTask, getTask, updateTask } = useTasks();

  const params = useParams();
  const navigate = useNavigate();


  const [task, setTask] = React.useState<Task>({
    title: "",
    description: "",
  });

  React.useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task?.title ? task.title : "",
          description: task?.description ? task.description : "",
        });
      }
    };

    return () => {
      loadTask();
    };
  }, []);

  return (
    <div>
      <h1>{params?.id ? "Edit Task" : "New Task"}</h1>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params?.id) {
          await updateTask(params?.id, values);
           navigate('/');
          } else {
           await createTask(values);
            navigate("/");
          };
          setTask({
            title: "",
            description: "",
          });
          // actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              placeholder="Text a title"
              type="text"
              name="title"
              value={values.title}
              required
            />{" "}
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleChange}
              placeholder="Text a Description"
              rows={3}
              name="description"
              value={values.description}
            ></textarea>
            <button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Saving.." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
