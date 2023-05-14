import React from 'react';
import {Form, Formik, FormikHelpers, FormikValues} from 'formik';

export const TasksForm: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              placeholder="Text a title"
              type="text"
              name="title"
            />{" "}
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleChange}
              placeholder="Text a Description"
              rows={3}
              name="description"
            ></textarea>
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
