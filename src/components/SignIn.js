import React from 'react';

let SignInPage = props =>
<div className="container">
  <section className="register-section">
    <h3 className="title-register">Sign in</h3>
    <div className="register-form">
      <label htmlFor="register-user-name" className="register-label">Username</label>
      <input type="text" id="user-name" className="register-input" placeholder="Enter your username"/>
      <label htmlFor="register-password" className="register-label">Password</label>
      <input type="password" id="password" className="register-input" placeholder="Enter your password"/>
      <span className="forgot-password"><a href="/password-reset" className="forgot-password">Forgot password?</a></span>
      <button type="submit" className="btn-register">Confirm</button>
    </div>
  </section>
</div>

export default SignInPage;