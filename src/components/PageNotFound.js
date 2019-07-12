import React from 'react';

let PageNotFound = props =>
<section className="section-error">
  <div className="container">
    <div className="error-wrapper">
      <h1 className="error-title">Page Not Found :(</h1>
      <p className="error-content">
        We can't find the page you're looking for. You can either return to the previous page, visit our
        homepage or contact our support team.
      </p>
      <div className="btn-block">
        <a href="/" className="btn btn-home">Visit Homepage</a>
        <a href="/about" className="btn btn-about-us">About us</a>
      </div>
    </div>
  </div>
</section>

export default PageNotFound;