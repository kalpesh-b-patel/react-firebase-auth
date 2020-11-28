import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import './Header.scss';

const Header = () => {
  const user = useContext<any>(AuthContext);
  return(
    <header>
      <div className="header">
        <div className="header__brand">
          <span>Firebase Auth</span>
        </div>
        <nav className="header__nav">
          <ul>
            <li><Link  to="/">Home</Link></li>
            { !user ? <li><Link  to="/login">Login</Link></li> : null }
            <li><Link  to="/signup">Signup</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;