import { SlSettings } from 'react-icons/sl';

import logo from './logo.png';
import './Navbar.scss';

interface Props {
  className?: string;
}

function Navbar({ className }: Props) {
  return (
    <div className={`navbar ${className ?? ''}`}>
      <div />
      <img className="navbar__logo" src={logo} alt="Logo" />
      <SlSettings size={24} color="white" />
    </div>
  );
}

export default Navbar;
