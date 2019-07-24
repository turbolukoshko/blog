import React from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import UserBlock from './UserBlock';

let Container = props =>
<div className="container">
  {props.children}
</div>

let Header = props =>
<header className="header">
  {props.children}
</header>

let HeaderComponent = props =>

<Header>
  <Container>
    <Logo/>
    <Navigation/>
    <UserBlock/>
  </Container>
</Header>

export default HeaderComponent;