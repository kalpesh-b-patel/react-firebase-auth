import React, { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import AuthService from '../../services/auth';
import './Home.scss';

const Home = () => {
  const user = useContext<any>(AuthContext);
  const Auth = new AuthService();
  const onLogout = () => Auth.logout();
  
  return(
    <div className="home">
      <p className="home">Welcome, {user ? user?.email : 'Guest'}!</p>
      { user !== null ? <button type='button' className='btn btn-logout' onClick={onLogout}>Logout</button> : null }
    </div>
  );
}
export default Home;