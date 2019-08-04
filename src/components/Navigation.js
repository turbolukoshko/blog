import React from 'react';

let Navigation = props =>
<nav className="nav">
  <ul className="nav__list">
    <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
    <li className="nav__item"><a href="/about" className="nav__link">About</a></li>
    <li className="nav__item"><a href="/contact" className="nav__link">Contact Us</a></li>
    <li className="nav__item"><a href="/create-post" className="nav__link">Create post</a></li>
  </ul>
</nav>

export default Navigation;