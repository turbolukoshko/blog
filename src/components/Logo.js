import React from 'react';
import Hamburger from './Hamburger-menu';

let Logo = props =>
<div className="logo">
<Hamburger/>
  <h1 className="title-logo"><span className="logo-icon"></span><a href="/" className="title-link">The Blog</a></h1>
</div>

export default Logo;