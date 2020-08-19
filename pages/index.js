import { useContext } from 'react'
import StateContext from '../components/StateContext'
import Head from 'next/head'
import Link from 'next/link'
import ContentLayout, { siteTitle } from '../components/ContentLayout'
import utilityStyles from '../styles/pagebtn.module.css'

export default function Home() {
  const {nextButtonClickedHandler} = useContext(StateContext);

  return (
    <ContentLayout key="home" columnType="two-col">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article className='container__main-content'>
        <h1>Hi there, I'm Tyler Klepsch.</h1>
        <p>I am a full-stack web developer that has worked in web development for over 5 years. I've built websites from the ground up, from brainstorming to deployment. I love delivering quality projects and working with <span className='highlight'>awesome people.</span></p>
        <p>Want to chat more? <Link href='/contact'><a>Send me an email</a></Link> or <a href="https://www.linkedin.com/in/tyler-klepsch-92004926/">find me on LinkedIn.</a></p>
      </article>
      <Link href="/about" scroll={false}>
        <a className={utilityStyles.NextPageBtn} onClick={nextButtonClickedHandler}>About Me</a>
      </Link>  
    </ContentLayout>
  )
}
