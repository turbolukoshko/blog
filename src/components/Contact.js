import React from 'react';

let Container = props =>
<div className="container">
  {props.children}
</div>

let SocialLinks = props =>
<ul className="social-links">
  <li className="social-item"><a href="https://www.facebook.com/" className="social-link facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
  <li className="social-item"><a href="https://www.twitter.com/" className="social-link twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
  <li className="social-item"><a href="https://www.instagram.com/" className="social-link instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
</ul>

let ContactPage = props =>
<section className="section-contact">
  <Container>
    <h3 className="contact-title">Our contacts</h3>
    <div className="contact-info">
    <SocialLinks/>
    <img src="../images/map.jpg" className="contant-map" alt="map"/>
    </div>
  </Container>
</section>

export default ContactPage;