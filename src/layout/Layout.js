import React, { Component } from 'react';
import Home from '../pages/Home/Home';
import Header from '../components/Header/Header';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    backgroundColor: 'white'
  }

  render() {
    return (
      <div className={classes.BackgroundExterior}>

        <div className={classes.BackgroundInterior}>
          <Header />
          <div className={classes.Content}>
            <Home />
          </div>
        </div>
      </div>
    )
  }
}


export default Layout;