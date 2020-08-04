import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

import classes from './header.module.css';
import Logo from '../../UI/Logo/Logo';
import Navigation from './Navigation/Navigation';

class Header extends Component {
  render () {
    return (
      <header className={classes.Header}>
        <Logo />
        <Navigation /> 
      </header>
    );
  }
}

export default Header;