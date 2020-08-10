import Layout from '../components/layout'
import Link from 'next/link'

import ContactForm from '../components/ContactForm/ContactForm';
import utilityStyles from '../styles/utilities.module.css';

const contact = () => (
  <Layout>
    <div className='pageContainer three-col'>
      <Link href="/about-me"><a className={utilityStyles.PrevPageBtn}>About Me</a></Link> 
      <div className='container__main-content'>
        <h1>Contact Me</h1>
        <p>Want to have a chat with me? Submit the form below and I'll receive an email with the information provided.</p>
        <ContactForm />
      </div>
      <Link href="/blog"><a className={utilityStyles.NextPageBtn}>Blog</a></Link>     
    </div>    
  </Layout>
);

export default contact;