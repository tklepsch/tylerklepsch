import Link from 'next/link'
import Date from '../components/Date/Date'
import Layout from '../components/layout'
import utilityStyles from '../styles/pagebtn.module.css'
import styles from './blog.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function Blog ({allPostsData}) {
  return (
    <Layout columnType="two-col" backgroundPaddingtype="no-side-padding">
      <Link href="/contact"><a className={utilityStyles.PrevPageBtn}>Contact</a></Link> 
      <article>
        <h1>What's been on my mind?</h1>
        <ul className={styles.BlogContainer}>
          {allPostsData.map(({ id, mainImage, imageAlt, date, title, excerpt }) => (
            <li 
              key={id}
              className={styles.BlogPost}>
              {
                mainImage ? <div className={styles.BlogPostThumbnail}><img src={mainImage} alt={imageAlt} /></div> : null             
              }

              <div className={styles.BlogPostPreview}>
                <div className={styles.BlogPostLink}>
                  <Link href="/blog/[id]" as={`blog/${id}`}>
                    <a>{title}</a>
                  </Link>  
                </div>

                <div className={styles.BlogPostDate}>
                  <Date 
                    dateString={date} 
                     />
                </div>

                <div className={styles.BlogPostExcerpt}>
                  <p>{excerpt}</p>
                </div>
              </div>
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
