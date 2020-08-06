import React from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import NextPage from '../../components/NextPage/NextPage';
import PrevPage from '../../components/PrevPage/PrevPage';

const contact = () => (
  <div className='pageContainer three-col'>
    <PrevPage link="/about-me" exact>About Me</PrevPage> 
    <div className='container__main-content'>
      <h1>Contact Me</h1>
      <p>Want to have a chat with me? Submit the form below and I'll receive an email with the information provided.</p>
      <ContactForm />
    </div>
    <NextPage link="/blog" exact>Blog</NextPage>     
  </div>

  
);

export default contact;