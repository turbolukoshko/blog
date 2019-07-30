import React from 'react';

let UserBlock = props =>
<div className="user-block">
  <ul className="user-list">
    <li className="user-item">
      <a href="/register" className="nav-link user-link register">Register</a>
    </li>
    <li className="user-item">
      <a href="/sign-in" className="nav-link user-link sign-in">Sign in</a>
    </li>
  </ul>
</div>

export default UserBlock;