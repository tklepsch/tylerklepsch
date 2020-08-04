import React, { Component } from 'react';
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
          
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}


export default Layout;