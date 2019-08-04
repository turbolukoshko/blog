import React from 'react';
import Navigation from './Navigation';
import UserBlock from './UserBlock';
import Logo from './Logo';

let Header = props =>
<header className="header">
  {props.children}
</header>

let HeaderComponent = props =>

<Header>
    <Logo/>
    <Navigation/>
    <UserBlock/>
</Header>

export default HeaderComponent;