import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NextPage.module.css';
import Aux from '../../hoc/Aux/aux';
 
const nextPage = ( props ) => {
  return (
    <Aux>
      <NavLink 
        to={props.link}
        exact={props.exact}
        className={classes.NextPageBtn}>{props.children}</NavLink>
    </Aux>
  );
}

export default nextPage;