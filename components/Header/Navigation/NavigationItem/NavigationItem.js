import React from 'react';
import Link from 'next/link'

import classes from './NavigationItem.module.css';

const navigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
      <Link 
        href={props.link}>
        <a className={classes.NavLink}>{props.children}</a>
      </Link>
    </li>
);

export default navigationItem;