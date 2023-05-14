import React from "react";
import { Form, Formik } from "formik";
import { cretateTaskRequest } from "../api/tasks.api";

export const TasksForm: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await cretateTaskRequest(values);
            console.log(values);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
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
            <button 
            disabled={isSubmitting}
            type="submit">{isSubmitting ? "Saving.." : "Save"}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
