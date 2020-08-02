import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NextPage.module.css';

const prevPage = ( props ) => {
  return (
    <div className={classes.PrevPageWrap}>
      <NavLink 
        to={props.link}
        exact={props.exact}
        className={classes.PrevPageBtn}>{props.children}</NavLink>
    </div>
  );
}

export default prevPage;