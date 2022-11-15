import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import AppBackground from './components/app-background/AppBackground';
import Navbar from './components/navbar/Navbar';
import Router from './components/router/Router';

function App() {
  return (
    <BrowserRouter basename="tusmo">
      <div className="app">
        <Navbar className="app__navbar" />
        <div className="app__router">
          <Router />
        </div>
        <div />
        <AppBackground className="app__background" />
      </div>
    </BrowserRouter>
  );
}

export default App;
