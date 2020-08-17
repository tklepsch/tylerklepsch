import { useState } from 'react';
import ContentLayout from '../components/ContentLayout'
import Link from 'next/link'

import ContactForm from '../components/ContactForm/ContactForm';
import pageBtnStyles from '../styles/pagebtn.module.css';

export default function contact(){
  const [backButtonClicked, setPrevBtnClicked] = useState(false);
  const [nextButtonClicked, setNextClicked] = useState(false);

  return (
    <ContentLayout 
      columnType="three-col" backgroundPaddingtype="no-side-padding"
      backButtonClicked={backButtonClicked}
      nextButtonClicked={nextButtonClicked}>
      <Link href="/about" scroll={false}>
        <a className={pageBtnStyles.PrevPageBtn} 
          onClick={() => setPrevBtnClicked(true)}>About Me</a>
      </Link> 
      <article className='container__main-content'>
        <h1>Contact Me</h1>
        <p>Want to have a chat with me? Submit the form below and I'll receive an email with the information provided.</p>
        <ContactForm />
      </article>
      <Link 
        href="/blog" 
        scroll={false}>
          <a className={pageBtnStyles.NextPageBtn}   
          onClick={() => setNextClicked(true)}>Blog</a></Link>     
    </ContentLayout>    
  )
};