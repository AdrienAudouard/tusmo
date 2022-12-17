import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/home/HomePage';
import {
  MultiplayerWaitingRoomPage
} from '../../pages/multiplayer/waiting_room/MultiplayerWaitingRoomPage';
import SettingsPage from '../../pages/settings/SettingsPage';

import AppRoutes from './appRoutes';

function Router() {
  return (
    <Routes>
      <Route element={<HomePage />} path={AppRoutes.HOME} />
      <Route element={<SettingsPage />} path={AppRoutes.SETTINGS} />
      <Route element={<MultiplayerWaitingRoomPage />} path={AppRoutes.MULTIPLAYER_WAITING_ROOM} />
      <Route element={<Navigate to={AppRoutes.HOME} />} path="*" />
    </Routes>
  );
}

export default Router;
