import React from 'react';

let RegisterPage = props =>
<section className="register-section">
  <h3 className="register__title">Register</h3>
  <div className="form-register">
    <label htmlFor="register__user-name" className="label">Username</label>
    <input type="text" id="register__user-name" className="input" placeholder="Enter your username"/>
    <label htmlFor="register__user-email" className="label">Email</label>
    <input type="text" id="register__user-emai" className="input" placeholder="Enter your email"/>
    <label htmlFor="register__password" className="label">Password</label>
    <input type="password" id="register__password" className="input" placeholder="Enter your password"/>
    <span className="register__password-requirement">Minimum length is 8 characters</span>
    <label htmlFor="register__agreement">
      <input type="checkbox" id="register__agreement" className="register__agreement"/>
        <span className="term-text">I accept the <a href="/term" className="term-link">Term and conditions</a></span>
    </label>
    <button type="submit" className="btn register__btn">Confirm</button>
  </div>
</section>

export default RegisterPage;