import React, { Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.scss';
import { auth } from '../../services/firebase';
import AuthContext from '../../contexts/authContext';

const Home = React.lazy(() => import('../../components/Home/Home'));
const Login = React.lazy(() => import('../../components/Login/Login'));
const Signup = React.lazy(() => import('../../components/Signup/Signup'));
const ForgotPwd = React.lazy(() => import('../../components/ForgotPwd/ForgotPwd'));

const App = () => {
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    auth.onAuthStateChanged(state => {
      setUser(state)
    });
  });
  
  return(
    <div>
      <AuthContext.Provider value={user}>
      <Header />
        <div className="main-content">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgotpwd" component={ForgotPwd} />
            </Switch>
          </Suspense>
      </div>
      <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;