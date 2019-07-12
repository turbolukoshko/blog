import React from 'react';

let Container = props =>
<div className="container">
  {props.children}
</div>

let Header = props =>
<header className="header">
  {props.children}
</header>

let Logo = props =>
<div className="logo">
  <h1 className="title-logo"><a href="/" className="title-link">Blog</a></h1>
</div>

let Navigation = props =>
<nav className="nav">
  <ul className="nav-list">
    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
    <li className="nav-item article">
      <a href="/categories" className="nav-link article">Categories</a>
      <ul className="nav-submenu">
        <li className="nav-item"><a href="/article" className="nav-link">Trips</a></li>
        <li className="nav-item"><a href="/article" className="nav-link">Tech</a></li>
        <li className="nav-item"><a href="/article" className="nav-link">Nature</a></li>
        <li className="nav-item"><a href="/article" className="nav-link">Animals</a></li>
      </ul>
    </li>
    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
    <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
  </ul>
</nav>

let UserBlock = props =>
<section className="user-block">
  <ul className="user-list">
    <li className="user-item">
      <a href="/register" className="nav-link user-link register">Register</a>
    </li>
    <li className="user-item">
      <a href="/sign-in" className="nav-link user-link sign-in">Sign in</a>
    </li>
  </ul>
</section>

let HeaderComponent = props =>

<Header>
  <Container>
    <Logo/>
    <Navigation/>
    <UserBlock/>
  </Container>
</Header>

export default HeaderComponent;