import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {switchRoutes } from '.';
import { NotFound, TasksForm, TasksPages } from '../pages';
import { Header } from '../components';

export const AppRouter: React.FC = () => {


  return (
    <>
      <Header />
      <Routes>
        <Route path={switchRoutes.root} element={<TasksPages />} />
        <Route path={switchRoutes.newtask} element={<TasksForm />} />
        <Route path={switchRoutes.edit_task} element={<TasksForm />} />
        <Route path={switchRoutes.not_found} element={<NotFound />} />
      </Routes>
    </>
  );
}
