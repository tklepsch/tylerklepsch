import ContentLayout from '../components/ContentLayout'
import Link from 'next/link'

import ContactForm from '../components/ContactForm/ContactForm';
import pageBtnStyles from '../styles/pagebtn.module.css';

const contact = () => (
  <ContentLayout columnType="three-col" backgroundPaddingtype="no-side-padding">
    <Link href="/about" scroll={false}><a className={pageBtnStyles.PrevPageBtn}>About Me</a></Link> 
    <article className='container__main-content'>
      <h1>Contact Me</h1>
      <p>Want to have a chat with me? Submit the form below and I'll receive an email with the information provided.</p>
      <ContactForm />
    </article>
    <Link href="/blog" scroll={false}><a className={pageBtnStyles.NextPageBtn}>Blog</a></Link>     
  </ContentLayout>
);

export default contact;