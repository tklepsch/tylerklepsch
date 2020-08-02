import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NextPage.module.css';
 
const nextPage = ( props ) => {
  return (
    <div className={classes.NextPage}>
      <NavLink 
        to={props.link}
        exact={props.exact}
        className={classes.NextPageBtn}>{props.children}</NavLink>
    </div>
  );
}

export default nextPage;