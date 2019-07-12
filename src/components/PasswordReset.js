import React from 'react';

let Container = props =>
<div className="container">
  {props.children}
</div>

let PasswordResetPage = props =>
  <Container>
    <section className="section-password-reset">
      <h3 className="title-reset">Reset password</h3>
      <div className="form-reset">
        <label htmlFor="reset-password" className="reset-label">Email</label>
        <input type="text" id="reset-password" className="reset-password" placeholder="Enter your email"/>
        <button type="submit" className="btn-reset">Confirm</button>
      </div>
    </section>
  </Container>

export default PasswordResetPage;