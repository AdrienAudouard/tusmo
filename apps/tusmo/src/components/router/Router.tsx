import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/home/HomePage';
import SettingsPage from '../../pages/settings/SettingsPage';

import AppRoutes from './appRoutes';

function Router() {
  return (
    <Routes>
      <Route element={<HomePage />} path={AppRoutes.HOME} />
      <Route element={<SettingsPage />} path={AppRoutes.SETTINGS} />
      <Route element={<Navigate to={AppRoutes.HOME} />} path="*" />
    </Routes>
  );
}

export default Router;
