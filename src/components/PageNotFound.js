import React from 'react';

let PageNotFound = props =>
<section className="section-error">
    <h1 className="error__title">Page Not Found :(</h1>
    <p className="error__content">
      We can't find the page you're looking for. You can either return to the previous page, visit our
      homepage or contact our support team.
    </p>
    <div className="error__btn-controls">
      <a href="/" className="btn btn-home">Visit Homepage</a>
      <a href="/about" className="btn btn-about-us">About us</a>
    </div>
</section>

export default PageNotFound;