import React, { useState } from 'react';
import { Link,  useHistory } from 'react-router-dom';
import './Login.scss';
import AuthService from '../../services/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  const auth = new AuthService();
  const onLogin = async () => {
    setLoading(true);
    const result = await auth.signin(
      email,
      password
    )
    setLoading(false);
    if (result) {
      setError('');
      history.push('/');
    } else {
      setError('Invalid email or password!');
    }
  }
  return(
    <section className='login'>
      <form className='login__form'>
        <div className='input-group'>
          <label htmlFor="email">Email</label>
          <input type='email' name='email' value={email} onChange={(event) => setEmail(event?.target.value)}></input>
        </div>
        <div className='input-group'>
          <label htmlFor="password">Password</label>
          <input type='password' name='password' value={password} onChange={(event) => setPassword(event?.target.value)}></input>
        </div>
      </form>

      <div className='login__submit'>
        <button type='button' className='btn btn-submit' onClick={onLogin} disabled={loading}>Log In</button>
      </div>

      { error ? 
      <div className='auth__error'>
        <p>{error}</p>
      </div> : null }
      
      <div className='login__forgotpwd'>
        <Link to="/forgotpwd" className="link">Forgot Password?</Link>
        <Link to="/signup" className="link">Sign Up</Link>
      </div>
    </section>
  );
};

export default Login;