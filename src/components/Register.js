import React from 'react';

let RegisterPage = props =>
<div className="container">
  <section className="register-section">
    <h3 className="title-register">Register</h3>
    <div className="register-form">
      <label htmlFor="register-user-name" className="register-label">Username</label>
      <input type="text" id="register-user-name" className="register-input" placeholder="Enter your username"/>
      <label htmlFor="register-user-email" className="register-label">Email</label>
      <input type="text" id="register-user-emai" className="register-input" placeholder="Enter your email"/>
      <label htmlFor="register-password" className="register-label">Password</label>
      <input type="password" id="register-password" className="register-input" placeholder="Enter your password"/>
      <span className="register-password-requirement">Minimum length is 8 characters</span>
      <label htmlFor="register-agreement">
        <input type="checkbox" id="register-agreement" className="register-agreement"/>
          I accept the <a href="/term">Term and conditions</a>
      </label>
      <button type="submit" className="btn-register">Confirm</button>
    </div>
  </section>
</div>

export default RegisterPage;