import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from './index.module.css'
import utilityStyles from '../styles/pagebtn.module.css';

export default function Home() {
  return (
    <Layout columnType="two-col" backgroundPaddingtype="left-padding">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article className='container__main-content'>
        <h1 className={styles.title}>Hi there, I'm Tyler Klepsch.</h1>
        <p className={styles.text}>I am a full-stack web developer that has worked in web development for over 5 years. I've built websites from the ground up, from brainstorming to deployment. I love delivering quality projects and working with <span className='highlight'>awesome people.</span></p>
        <p className={styles.text}>Want to chat more? <Link href='/contact'><a className={styles.link}>Send me an email</a></Link> or <a href="https://www.linkedin.com/in/tyler-klepsch-92004926/" className={styles.link}>find me on LinkedIn.</a></p>
      </article>
      <Link href="/about">
        <a className={utilityStyles.NextPageBtn}>About Me</a>
      </Link>  
    </Layout>
  )
}
