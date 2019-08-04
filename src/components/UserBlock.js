import React from 'react';

let UserBlock = props =>
  <ul className="user__list">
    <li className="user__item">
      <a href="/register" className="nav__link user__link register">Register</a>
    </li>
    <li className="user__item">
      <a href="/sign-in" className="nav__link user__link sign-in">Sign in</a>
    </li>
  </ul>

export default UserBlock;