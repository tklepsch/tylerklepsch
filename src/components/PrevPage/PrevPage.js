import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './PrevPage.module.css';
import Aux from '../../hoc/Aux/aux';

const prevPage = ( props ) => {
  return (
    <Aux>
      <NavLink 
        to={props.link}
        exact={props.exact}
        className={classes.PrevPageBtn}>{props.children}</NavLink>
    </Aux>
  );
}

export default prevPage;