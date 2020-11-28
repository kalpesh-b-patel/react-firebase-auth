import React, { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import './Home.scss';

const Home = () => {
  const user = useContext<any>(AuthContext);
  return(
    <div className="home">
      <p className="home">Welcome, {user ? user?.email : 'Guest'}!</p>
    </div>
  );
}
export default Home;