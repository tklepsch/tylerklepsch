import React from 'react';

import classes from './Input.module.css'
import Aux from '../../hoc/Aux/aux';

const input = ( props ) => {
  let inputElement = null;
  let inputClasses = [classes.InputElement];
  let requiredText = null;

  // Check if validation fails. Add a class. Add Invalid Text as span.
  if(props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
    requiredText = <span className={classes.InvalidText}> {props.elementConfig.label} is required.</span>;
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = (
        <div className={`form__${props.elementType}`}>
          <label 
            htmlFor={props.elementConfig.label} 
            className={classes.Label}>{props.elementConfig.label}</label>
          <input 
            name={props.elementConfig.label}
            className={inputClasses.join(' ')} 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
          {requiredText} 
        </div>
      );
      break;
    case ('textarea'):
      inputElement = (
        <div className={`form__${props.elementType} ${classes.Input}`}>
          <label 
            htmlFor={props.elementConfig.label} 
            className={classes.Label}>{props.elementConfig.label}</label>
          <textarea
            name={props.elementConfig.label}
            rows="5"
            className={inputClasses.join(' ')} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}/>
          {requiredText} 
        </div>
      );
      break;
    default:
      inputElement = (
        <div className={`form__${props.elementType} ${classes.Input}`}>
          <label 
            htmlFor={props.elementConfig.label} 
            className={classes.Label}>{props.elementConfig.label}</label>
          <input 
          className={inputClasses.join(' ')} 
          {...props.elementConfig}
          value={props.value}/>     
        </div>
      );
  }

  return (
    <Aux>
      {inputElement}      
    </Aux>
  )
};

export default input;