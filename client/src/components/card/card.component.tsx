import React from 'react';
import { Task } from '../../api';
import './card.styles.scss';

interface Props {
  task: Task;
  handleDelete(task: Task): void;
  handleRedirect(task: Task): void;
  handleDone: (task: Task) => void;
};

export const CardComponent: React.FC<Props> = (props) => {
    const {task, handleDelete, handleDone, handleRedirect} = props;

  return (
    <div className="container">
      <h2>
        <u>{task.title}</u>
      </h2>
      <p>{task.description}</p>
      <div className="box-articles">
        <span>
          <div>Done:</div>
          <article className="spanDone">
            {task.done === 1 ? "✔️" : "❌"}
          </article>
        </span>
        <span>
          <div>Date:</div>
          <article className="spanCreateAt">{task.createAt}</article>
        </span>
      </div>
      <div className="box-btn">
        <button className="btnDelete" onClick={() => handleDelete(task)}>
          Delete
        </button>
        <button className="btnRedirect" onClick={() => handleRedirect(task)}>
          Edit
        </button>
        <button className="btnDone" onClick={() => handleDone(task)}>
          Toggle task
        </button>
      </div>
    </div>
  );
}
