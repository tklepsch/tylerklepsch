import React, { Component } from 'react';

import classes from './Navigation.module.css';
import Aux from '../../../hoc/Aux/aux';
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
          Show Navigation Menu
        </button>
        <nav className={`${classes.Navigation} ${navClasses.join(' ')}`}>
          <ul className={classes.NavigationItems}>
            <NavigationItem link="/about-me" exact>About Me</NavigationItem>
            <NavigationItem link="/contact" exact>Contact</NavigationItem>
            <NavigationItem link="/blog" exact>Blog</NavigationItem>
          </ul>        
        </nav>        
      </Aux>

    );
  }
}

export default Navigation;