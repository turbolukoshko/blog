import React from 'react';

let Container = props =>
<div className="container">
  {props.children}
</div>

let Footer = props =>
<footer className="footer">
  {props.children}
</footer>

let FooterList = props =>
<ul className="footer-list">
  <li className="footer-item"><a href="/term" className="footer-link">Term and conditions</a></li>
  <li className="footer-item"><a href="/privacy" className="footer-link">Privacy</a></li>
  {props.children}
</ul>

let SocialLinks = props =>
<ul className="social-links">
  <li className="social-item"><a href="https://www.facebook.com/" className="social-link facebook" target="_blank">Facebook</a></li>
  <li className="social-item"><a href="https://www.twitter.com/" className="social-link twitter" target="_blank">Twitter</a></li>
  <li className="social-item"><a href="https://www.instagram.com/" className="social-link instagram" target="_blank">Instagram</a></li>
</ul>

let Copyright = props =>
<span className="copyright">&copy; A-level 2019</span>

let FooterComponent = props =>
<Footer>
  <Container>
    <FooterList/>
    <Copyright/>
    <SocialLinks/>
  </Container>
</Footer>


export default FooterComponent;