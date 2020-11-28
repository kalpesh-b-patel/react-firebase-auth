import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import AuthService from '../../services/auth';

const Signup = () => {
  const auth = new AuthService();
  const onSignUp = async () => {
    const result = await auth.signup(
      'test@test.com',
      'password'
    )
    console.log(result);
  }
  
  return(
    <section className='signup'>
      <form className='signup__form'>
        <div className='input-group'>
          <label htmlFor="name">Name</label>
          <input type='text' name='name'></input>
        </div>
        <div className='input-group'>
          <label htmlFor="email">Email</label>
          <input type='email' name='email'></input>
        </div>
        <div className='input-group'>
        <label htmlFor="password">Password</label>
          <input type='password' name='password'></input>
        </div>
      </form>
      <div className='signup__submit'>
      <button className='btn btn-submit' onClick={onSignUp}>Sign Up</button>
      </div>
      <div className='signup__login'>
        <Link to="/login" className="link">Login</Link>
      </div>
    </section>
  );
};

export default Signup;