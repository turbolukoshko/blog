import React from 'react';

let SignInPage = props =>
<section className="register-section">
  <h3 className="register__title">Sign in</h3>
  <div className="form-register">
    <label htmlFor="register__user-name" className="label">Username</label>
    <input type="text" id="user-name" className="input" placeholder="Enter your username"/>
    <label htmlFor="register-password" className="label">Password</label>
    <input type="password" id="password" className="input" placeholder="Enter your password"/>
    <span className="forgot-password"><a href="/password-reset" className="forgot-password">Forgot password?</a></span>
    <button type="submit" className="btn sign__btn">Confirm</button>
  </div>
</section>

export default SignInPage;