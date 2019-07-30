import React from 'react';
import Navigation from './Navigation';

class Hamburger extends React.Component {
  render() {
    return(
    <div className="hamburger">
      <label htmlFor="toggle" className="hamburger-label">&#9776;</label>
      <input type="checkbox" id="toggle"/>
      <div className="menu">
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
          <li className="nav-item"><a href="/create-post" className="nav-link">Create post</a></li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Hamburger;