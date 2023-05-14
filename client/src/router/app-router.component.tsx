import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {switchRoutes } from '.';
import { NotFound, TasksForm, TasksPages } from '../pages';

export const AppRouter: React.FC = () => {

    
  return (
    <Routes>
      <Route path={switchRoutes.root} element={<TasksPages />} />
      <Route path={switchRoutes.newtask} element={<TasksForm />} />
      <Route path={switchRoutes.not_found} element={<NotFound />} />
    </Routes>
  );
}
