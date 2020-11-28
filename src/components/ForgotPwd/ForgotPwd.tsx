import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPwd.scss';

const ForgotPwd = () => {
  return(
    <div className="forgotpwd">
      <form className='forgotpwd__form'>
        <label htmlFor="email">Email</label>
        <input type='email' id='email'></input>
      </form>
      <div className='forgotpwd__submit'>
        <button type='button' className="btn btn-submit">Reset Password</button>
      </div>
      <div className='forgotpwd__login'>
        <Link to="/login" className="link">Login</Link>
      </div>
    </div>
  );
};

export default ForgotPwd;