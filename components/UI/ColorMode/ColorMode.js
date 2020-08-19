import React, { useContext } from 'react';
import StateContext from '../../StateContext';

import styles from './ColorMode.module.css';

const ColorMode = () => {
  const {colorSwitch, colorSwitchHandler} = useContext(StateContext);

  return (
    <button
        className={styles.ColorMode}
        onClick={colorSwitchHandler}>{colorSwitch === 'light' ? 'Dark Mode' : 'Light Mode'}</button>    
  )
}

export default ColorMode;