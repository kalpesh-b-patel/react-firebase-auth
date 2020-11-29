import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Signup.scss';
import AuthService from '../../services/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  const auth = new AuthService();
  const onSignUp = async () => {
    const result = await auth.signup(
      email,
      password,
    )
    if (result) {
      setError('');
      history.push('/');
    } else {
      setError('Something went wrong!');
    }
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
          <input type='email' name='email' value={email} onChange={(event) => setEmail(event?.target.value)}></input>
        </div>
        <div className='input-group'>
        <label htmlFor="password">Password</label>
          <input type='password' name='password' value={password} onChange={(event) => setPassword(event?.target.value)}></input>
        </div>
      </form>
      <div className='signup__submit'>
        <button className='btn btn-submit' onClick={onSignUp} disabled={loading}>Sign Up</button>
      </div>

      { error ? 
        <div className='auth__error'>
          <p>{error}</p>
        </div> : null }

      <div className='signup__login'>
        <Link to="/login" className="link">Login</Link>
      </div>
    </section>
  );
};

export default Signup;