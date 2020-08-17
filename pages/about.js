import { useState } from 'react';
import ContentLayout from '../components/ContentLayout'
import Link from 'next/link';
import pageBtnStyles from '../styles/pagebtn.module.css';

export default function about() {
  const [backButtonClicked, setPrevBtnClicked] = useState(false);
  const [nextButtonClicked, setNextClicked] = useState(false);

  return (
    <ContentLayout 
      key="about" 
      columnType="three-col" backgroundPaddingtype="no-side-padding" 
      backButtonClicked={backButtonClicked}
      nextButtonClicked={nextButtonClicked}>
      <Link href="/" scroll={false}>
        <a 
          className={pageBtnStyles.PrevPageBtn} 
          onClick={() => setPrevBtnClicked(true)}>Home</a>
      </Link> 
      <article className='container__main-content'>
        <section>
          <h1>A little about me.</h1>
          <p>I’ve been in the web development sphere for over 5 years, primarily focusing on drupal and front-end development.</p>

          <p>I’ve also had the chance to dabble in such areas as web design, accessibility testing and code revisions, project management, and development with frameworks Vue, Angular 2+, React Next.js .</p>

          <p>These years of experience have improved not only my development skill set, but also my ability to plan, organize, build, present and deliver web applications to support business wants and needs.</p>            
        </section>
        <section>
          <h2>What do I provide?</h2>
          <br />
          <h3>Full Stack Development</h3>
          <p>Full Stack Development involves all aspects of building a website/app including building the visuals,functionality, database, and the server behind the scenes.</p>
            
          <p>I've focused more on building the visual aspects, but I love problem solving all areas of development and learning new technologies and how they work. This site in particular was built using React, Nextjs and netlify.</p><br />

          <h3>Drupal Development</h3>
          <p>The primary focus of my career has been with the <a href="https://www.drupal.org/">Drupal</a> Content Management System. I've done everything from Site Building to Theming and Module Development. I've also worked with Wordpress in the past.</p><br />

          <h3>All the Bells and whistles</h3>
          <p>While I am mainly a developer, I can comfortably say the following apply to me as well:</p>
          <ul>
            <li>Presentor</li>
            <li>Designer</li>
            <li>Mentor</li>
            <li>Technical Trainer and Writer</li>
            <li>Team Leader and Mentor</li>
            <li>Product Developer</li>
          </ul>
          <p>Each of these terms represents the knowledge and experience I've gained working in a agency environment. I've had to wear many hats and adapt to various situations.</p>
        </section>
        <section>
          <p>You can learn more about me by reading through <Link href="/blog" scroll={false}><a>my blog</a></Link></p> 
          <p>Or, better yet, Let’s chat! <Link href="/contact"><a>Send me a message</a></Link> or <a href="https://www.linkedin.com/in/tyler-klepsch-92004926/">find me on LinkedIn.</a></p>           
        </section>
      </article>
      <Link 
        href="/contact" 
        scroll={false}>
        <a className={pageBtnStyles.NextPageBtn}  
          onClick={() => setNextClicked(true)}>Contact Me</a></Link>  
    </ContentLayout>    
  );
};
