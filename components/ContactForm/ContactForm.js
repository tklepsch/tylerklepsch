import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import classes from '../../styles/form.module.css';


/*
  TO DO: After pushing to netlify, connect and confirm netlify will send submitted message.
*/
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends Component {
  state = {
    contactInfo: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Name',
          placeholder: 'John Jane',
        },
        value: '',
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      subject: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Subject',
          placeholder: 'Lets talk about your website',
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      comment: {
        elementType: 'textarea',
        elementConfig: {
          type: 'textarea',
          label: 'Comment',
          placeholder: 'It\'s great!',
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false
  }

  checkValidity (value, rules) {
    let isValid = true;

    // If no rules are defined, automatically return true.
    if (!rules) {
      return true;
    }

    // add all rules below.

    // Check if element is required.
    if (rules.required) {
      // isValid is only true if the trimmed value is not empty.
      isValid = value.trim() !== '' && isValid;
    }

    return isValid;
  }

  /*
   * Not needed. Netlify will handle it.
   */

  // submitHandler = (e) => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact-tyler", ...this.state })
  //   })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error));

  //   e.preventDefault();
  // }

  inputChangedHandler = (event, inputIdentifier) => {
    // Copy of current form data top level.
    const formData = {
      ...this.state.contactInfo
    }

    // We can copy the object properties here: 
    const updatedFormElement = {
      ...formData[inputIdentifier]
    }

    // Now we can set the state value to the event.target.value (aka, user typing in the element).
    updatedFormElement.value = event.target.value;

    // Will update to true or false.
    updatedFormElement.valid = this.checkValidity( updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;

    // Set the form element (key) to update the matched state.
    formData[inputIdentifier] = updatedFormElement;

    // Validate the whole form.
    // Initially set to true, so we don't have the problem of last item having to be true to pass.
    let formIsValid = true;

    for (let inputIdentifier in formData) {
      // This will set formIsValid to true of any items match and if formIsValid is true. False overrides true.
      formIsValid = formData[inputIdentifier].valid && formIsValid;
    }

    this.setState({contactInfo: formData, formIsValid: formIsValid});
  }


  render () {
    const formElementsArray = [];

    for (let key in this.state.contactInfo) {
      formElementsArray.push({
        id: key,
        config: this.state.contactInfo[key],
      });
    }

    /* Create a new array of input elements by mapping our contactForm state array. */
    let form = (
      <form 
        name="contact-tyler"
        method="POST"
        action="/message-sent"
        className={classes.Form}
        netlift
        netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact-tyler" />
        {formElementsArray.map(formElement => (
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ))}
        <div className={classes.form__submit}>
          <SubmitButton 
            btnType="form-submit" 
            clicked={this.submitHandler}
            disabled={!this.state.formIsValid}>Submit</SubmitButton>          
        </div>

      </form>
    );

    return (
      <div className={classes.FormContainer}>
        {form}
      </div>
    )
  }
}

export default ContactForm;