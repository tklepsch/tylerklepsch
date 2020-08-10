import Layout from '../components/layout'
import Link from 'next/link';
import utilityStyles from '../styles/utilities.module.css';

export default function about() {
  return (
    <Layout>
      <div className='pageContainer three-col'>
      <Link href="/"><a className={utilityStyles.PrevPageBtn}>Home</a></Link> 
      <div>
        <h1>A little about me.</h1>
        <p>I’ve been in the web development sphere for over 5 years, primarily focusing on drupal and front-end development.</p>
        <p>I’ve also had the chance to dabble in such areas as web design, accessibility testing and code revisions, project management, and development with frameworks Vue, Angular 2+, React Next.js .</p>
        <p>These years of experience have improved not only my development skill set, but also my ability to plan, organize, build, present and deliver web applications to support business wants and needs.
        Want to learn more about me? Let’s chat! <Link href="/contact"><a>Send me a message</a></Link> or <a href="https://www.linkedin.com/in/tyler-klepsch-92004926/">find me on LinkedIn.</a></p>
      </div>
      <Link href="/contact"><a className={utilityStyles.NextPageBtn}>Contact Me</a></Link>  
    </div>  
    </Layout>    
  );
};
