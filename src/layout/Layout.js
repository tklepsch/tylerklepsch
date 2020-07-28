import React, { Component } from 'react';
import UnderConstruction from '../pages/UnderConstruction/UnderConstruction';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    backgroundColor: 'white'
  }

  render() {
    return (
      <div className={classes.BackgroundExterior}>
        <div className={classes.BackgroundInterior}>
          <UnderConstruction />
        </div>
      </div>
    )
  }
}


export default Layout;