import React from 'react';

class Hamburger extends React.Component {
  render() {
    return(
    <div className="hamburger">
      <label htmlFor="hamburger__toggle" className="hamburger__label"><img src="/images/menu.png" className="menu-icon" alt="menu-icon"/></label>
      <input type="checkbox" id="hamburger__toggle"/>
      <div className="menu">
        <ul className="nav__list">
          <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="/about" className="nav__link">About</a></li>
          <li className="nav__item"><a href="/contact" className="nav__link">Contact Us</a></li>
          <li className="nav__item"><a href="/create-post" className="nav__link">Create post</a></li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Hamburger;