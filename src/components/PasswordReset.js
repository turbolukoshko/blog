import React from 'react';

let PasswordResetPage = props =>
<section className="section-password-reset">
  <h3 className="reset__title">Reset password</h3>
  <div className="form-reset">
    <label htmlFor="reset__password" className="label">Email</label>
    <input type="text" id="reset__password" className="input" placeholder="Enter your email"/>
    <button type="submit" className="btn reset__btn">Confirm</button>
  </div>
</section>

export default PasswordResetPage;