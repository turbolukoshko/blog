import React from 'react';
import Hamburger from './Hamburger-menu';

let Logo = props =>
<div className="logo">
<Hamburger/>
  <a href="/" className="home"><img src="/images/home.png" alt="home" className="home-icon"/></a>
  <img src="/images/tea.png" alt="logo" className="logo-icon"/>
</div>

export default Logo;