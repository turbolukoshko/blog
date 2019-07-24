import React from 'react';

let Navigation = props =>
<nav className="nav">
  <ul className="nav-list">
    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
    <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
  </ul>
</nav>

export default Navigation;