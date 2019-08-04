import React from 'react';

let AboutPage = props =>
<>
<section className="section-about">
    <h3 className="title about__title">About</h3>
    <p className="content about__content">
    This resource was created specifically for you so that you are the first to find out 
    the latest news and articles. Our task is to give you more moments when you can think 
    about nothing and not worry.
    </p>
    <h3 className="advantage__title">Our advantages:</h3>
    <ul className="advantage__list">
      <li className="advantage__item">
        <img src="../images/network.png" className="advantage__img" alt="advantege"/>
        <p className="adventage__info">Our blog is accessible from anywhere in the world.</p>
      </li>
      <li className="advantage__item">
        <img src="../images/notification.png" className="advantage__img" alt="advantege"/>
        <p className="adventage__info">Alert system. Lest you miss important articles.</p>
      </li>
      <li className="advantage__item">
        <img src="../images/newspaper.png" className="advantage__img" alt="advantege"/>
        <p className="adventage__info">Most relevant articles</p>
      </li>
    </ul>
</section>
<SectionSubscribe>
      <NewsletterForm/>
</SectionSubscribe>
</>

let SectionSubscribe = props =>
<section className="subscribe">
  <h3 className="subscribe__title">Sign up for our newsletter</h3>
  <p className="subscribe__text">Get news by subscription</p>
  {props.children}
</section>

let NewsletterForm = props =>
<div className="subscribe__form">
  <input type="text" placeholder="Enter your email" className="subscribe__input"/>
  <button type="button" className="subscribe__btn">Subscribe</button>
</div>

export default AboutPage;