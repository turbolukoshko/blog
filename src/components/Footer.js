import React from 'react';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';
import Privacy from './PrivacyList';

let Container = props =>
<div className="container">
  {props.children}
</div>

let Footer = props =>
<footer className="footer">
  {props.children}
</footer>

let FooterComponent = props =>
<Footer>
  <Container>
    <Privacy/>
    <Copyright/>
    <SocialLinks/>
  </Container>
</Footer>


export default FooterComponent;