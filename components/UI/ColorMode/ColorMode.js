import React, { useContext } from 'react';
import StateContext from '../../StateContext';

import styles from './ColorMode.module.css';

const ColorMode = () => {
  const {colorSwitchHandler} = useContext(StateContext);

  return (
    <button
        className={styles.ColorMode}
        onClick={colorSwitchHandler}>Select Site Color</button>    
  )
}

export default ColorMode;