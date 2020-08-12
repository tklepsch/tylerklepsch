import React, { Component } from 'react';

import classes from './Navigation.module.css';
import Aux from '../../hoc/Aux/aux';
import NavigationItem from './NavigationItem/NavigationItem';

class Navigation extends Component {
  state = {
    showMenu: true
  }

  menuHandler = () => {
    // When clicked, changed show menu to not show menu.
    this.setState({showMenu: !this.state.showMenu});
  };

  render () {
    const navClasses = [];

    if (this.state.showMenu) {
      navClasses.push(classes.HideMenu);
    } else {
      navClasses.push(classes.ShowMenu);
    }

    return (
      <Aux>
        <button 
          className={classes.MenuBtn}
          onClick={this.menuHandler}>
            <svg width="65" height="34" viewBox="0 0 65 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2H65M0 16.5H65M0 31.5H65" stroke="#3D3D3D" stroke-width="4"/>
            </svg>
          <span>Menu</span>
        </button>
        <nav className={`${classes.Navigation} ${navClasses.join(' ')}`}>
          <ul className={classes.NavigationItems}>
            <NavigationItem link="/about">About Me</NavigationItem>
            <NavigationItem link="/contact">Contact</NavigationItem>
            <NavigationItem link="/blog">Blog</NavigationItem>
          </ul>        
        </nav>        
      </Aux>

    );
  }
}

export default Navigation;