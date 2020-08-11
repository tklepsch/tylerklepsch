import Link from 'next/link'
import Date from '../components/Date/Date'
import Layout from '../components/layout'
import utilityStyles from '../styles/utilities.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function Blog ({allPostsData}) {
  return (
    <Layout columnType="two-col" backgroundPaddingtype="no-side-padding">
      <Link href="/contact"><a className={utilityStyles.PrevPageBtn}>Contact</a></Link> 
      <article>
        <h1>What's been on my mind?</h1>
        <ul>
          {allPostsData.map(({ id, mainImage, imageAlt, date, title, excerpt }) => (
            <li key={id}>
              <img src={mainImage} alt={imageAlt} />
              <Link href="/blog/[id]" as={`blog/${id}`}>
                <a>{title}</a>
              </Link>
              <Date dateString={date} />
              <p>{excerpt}</p>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  )
}

// On Production, getStaticProps runs on build time.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
