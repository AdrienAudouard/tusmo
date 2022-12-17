import React from 'react';
import { SlSettings } from 'react-icons/sl';
import { Link } from 'react-router-dom';

import AppRoutes from '../router/appRoutes';

import logo from './logo.png';
import './Navbar.scss';

interface Props {
  className?: string;
}

function Navbar({ className }: Props) {
  return (
    <div className={`navbar ${className ?? ''}`}>
      <Link to={AppRoutes.MULTIPLAYER_WAITING_ROOM}
            className={'navbar__text-item'}>Multiplayer
      </Link>
      <Link to={AppRoutes.HOME}><img className="navbar__logo" src={logo} alt="Logo" /></Link>
      <Link to={AppRoutes.SETTINGS}><SlSettings size={24} color="white" /></Link>
    </div>
  );
}

export default Navbar;
