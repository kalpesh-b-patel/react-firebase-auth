import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return(
    <section className='login'>
      <form className='login__form'>
        <div className='input-group'>
          <label htmlFor="email">Email</label>
          <input type='email' name='email'></input>
        </div>
        <div className='input-group'>
          <label htmlFor="password">Password</label>
          <input type='password' name='password'></input>
        </div>
      </form>

      <div className='login__submit'>
        <button className='btn btn-submit'>Log In</button>
      </div>
      
      <div className='login__forgotpwd'>
        <Link to="/forgotpwd" className="link">Forgot Password?</Link>
        <Link to="/signup" className="link">Sign Up</Link>
      </div>
    </section>
  );
};

export default Login;