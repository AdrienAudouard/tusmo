import React from 'react';

import './App.scss';
import AppBackground from './components/app-background/AppBackground';
import Router from './components/router/Router';

function App() {
  return (
    <div className="app">
      <div className="app__router">
        <Router />
      </div>
      <AppBackground className="app__background" />
    </div>
  );
}

export default App;
