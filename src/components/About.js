import React from 'react';

let AboutPage = props =>
<>
<section className="section-about section-content">
  <div className="container">
    <h3 className="title-about title">About</h3>
    <p className="content-about content">
    This resource was created specifically for you so that you are the first to find out 
    the latest news and articles. Our task is to give you more moments when you can think 
    about nothing and not worry.
    </p>
    <h3 className="advantage-inner-title">Our advantages:</h3>
    <ul className="list-advantage list">
      <li className="advantage-item item">
        <img src="../images/network.png" className="advantage-img" alt="advantege"/>
        <p className="adventage-info">Our blog is accessible from anywhere in the world.</p>
      </li>
      <li className="advantage-item item">
        <img src="../images/notification.png" className="advantage-img" alt="advantege"/>
        <p className="adventage-info">Alert system. Lest you miss important articles.</p>
      </li>
      <li className="advantage-item item">
        <img src="../images/newspaper.png" className="advantage-img" alt="advantege"/>
        <p className="adventage-info">Most relevant articles</p>
      </li>
    </ul>
  </div>
</section>
<SectionSubscribe>
    <div className="container">
      <NewsletterForm/>
    </div>
</SectionSubscribe>
</>

let SectionSubscribe = props =>
<section className="subscribe">
  <h3 className="title-subscribe">Sign up for our newsletter</h3>
  <p className="text-subscribe">Get news by subscription</p>
  {props.children}
</section>

let NewsletterForm = props =>
<div className="form-subscribe">
  <input type="text" placeholder="Enter your email" className="input-subscribe"/>
  <button type="button" className="btn-subscribe">Subscribe</button>
</div>

export default AboutPage;