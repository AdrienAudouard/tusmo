import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import HomePage from '../../pages/home/HomePage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Navigate to="" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
