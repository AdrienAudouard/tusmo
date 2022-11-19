// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LocationAnalytics from '@components/location-analytics/location-analytics';
import UserInformationsProvider from '@context/user-informations/user-informations';

import './App.scss';
import AppBackground from './components/app-background/AppBackground';
import Navbar from './components/navbar/Navbar';
import Router from './components/router/Router';

const firebaseConfig = {
  apiKey: 'AIzaSyC8j6ml-Da2XJuAXOiMhlS9vTGsc-Cu7Ng',
  authDomain: 'tusmo-a60b6.firebaseapp.com',
  projectId: 'tusmo-a60b6',
  storageBucket: 'tusmo-a60b6.appspot.com',
  messagingSenderId: '55016285895',
  appId: '1:55016285895:web:680b230525d80280ce80e2',
  measurementId: 'G-9KJHPHY9WC',
};

initializeApp(firebaseConfig);

function App() {
  return (
    <UserInformationsProvider>
      <BrowserRouter basename="tusmo">
        <LocationAnalytics>
          <div className="app">
            <Navbar className="app__navbar" />
            <div className="app__router">
              <Router />
            </div>
            <div />
            <AppBackground className="app__background" />
          </div>
        </LocationAnalytics>
      </BrowserRouter>
    </UserInformationsProvider>
  );
}

export default App;
