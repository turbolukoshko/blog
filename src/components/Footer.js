import React from 'react';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';
import Privacy from './PrivacyList';

let Footer = props =>
<footer className="footer">
  {props.children}
</footer>

let FooterComponent = props =>
<Footer>
    <Privacy/>
    <Copyright/>
    <SocialLinks/>
</Footer>


export default FooterComponent;