import React, { Component } from 'react';
import CSSTransition from "react-transition-group/CSSTransition"

import classes from './Navigation.module.css';
import Aux from '../../hoc/Aux/aux';
import NavigationItem from './NavigationItem/NavigationItem';

class Navigation extends Component {
  state = {
    showMenu: false
  }

  menuHandler = () => {
    // When clicked, changed show menu to not show menu.
    this.setState({showMenu: !this.state.showMenu});
  };

  render () {
  
    const timing = {
      enter: 800,
      exit: 500
    }

    

    return (
      <Aux>
        <button 
          className={classes.MenuBtn}
          onClick={() => this.setState(prevState  => ({showMenu: !prevState.showMenu}))}>
            <svg width="65" height="34" viewBox="0 0 65 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2H65M0 16.5H65M0 31.5H65" strokeWidth="4"/>
            </svg>
          <span>Menu</span>
        </button>
        <CSSTransition
          in={this.state.showMenu}
          timeout={timing}
          classNames={{
            enterActive: classes.ShowMenu,
            enterDone: classes.MenuShown,
            exit: classes.HideMenu,
            exitDone: classes.MenuHidden
          }}>
          <nav className={classes.Navigation}>
            <ul className={classes.NavigationItems}>
              <NavigationItem link="/about">About Me</NavigationItem>
              <NavigationItem link="/contact">Contact</NavigationItem>
              <NavigationItem link="/blog">Blog</NavigationItem>
            </ul>        
          </nav>
        </CSSTransition>        
      </Aux>

    );
  }
}

export default Navigation;