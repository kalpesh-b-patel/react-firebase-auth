import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth';
import './ForgotPwd.scss';

const ForgotPwd = () => {
  const [email, setEmail] = useState('');
  const auth = new AuthService();
  const onResetPwd = async () => await auth.reset(email);
  
  return(
    <div className="forgotpwd">
      <form className='forgotpwd__form'>
        <label htmlFor="email">Email</label>
        <input type='email' id='email' value={email} onChange={(event) => setEmail(event?.target.value)}></input>
      </form>
      <div className='forgotpwd__submit'>
        <button type='button' className="btn btn-submit" onClick={onResetPwd}>Reset Password</button>
      </div>
      <div className='forgotpwd__login'>
        <Link to="/login" className="link">Login</Link>
      </div>
    </div>
  );
};

export default ForgotPwd;