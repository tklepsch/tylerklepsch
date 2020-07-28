import React, { Component } from 'react';
import Home from '../pages/Home/Home';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    backgroundColor: 'white'
  }

  render() {
    return (
      <div className={classes.BackgroundExterior}>
        <div className={classes.BackgroundInterior}>
          <Home />
        </div>
      </div>
    )
  }
}


export default Layout;