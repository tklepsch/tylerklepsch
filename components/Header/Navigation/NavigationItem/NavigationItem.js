import React, { useContext } from 'react';
import StateContext from '../../../../components/StateContext';
import Link from 'next/link'

import classes from './NavigationItem.module.css';



export default function navigationItem ( props ) {
  const {navigationClickedHandler} = useContext(StateContext);
  
  return (
    <li className={classes.NavigationItem}>
      <Link 
        href={props.link}>
        <a className={classes.NavLink} onClick={navigationClickedHandler}>{props.children}</a>
      </Link>
    </li>    
  )
};