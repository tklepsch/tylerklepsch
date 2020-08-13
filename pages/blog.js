import Link from 'next/link'
import Date from '../components/Date/Date'
import Layout from '../components/layout'
import pageBtnStyles from '../styles/pagebtn.module.css'
import styles from './blog.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function Blog ({allPostsData}) {
  return (
    <Layout columnType="one-col mid-width" backgroundPaddingtype="no-side-padding">
      <article className='container__main-content'>
        <h1>What's been on my mind?</h1>
        <ul className={styles.BlogContainer}>
          {allPostsData.map(({ id, thumbnail, mainImage, imageAlt, date, title, excerpt }) => (
            <li 
              key={id}
              className={styles.BlogPost}>
              {
                // If no image provided, don't print.
                thumbnail ? <div className={styles.BlogPostThumbnail}><img src={thumbnail} alt={imageAlt} /></div> : null             
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
      <aside className={pageBtnStyles.BtnContainer}>
        <Link href="/contact"><a className={pageBtnStyles.PrevPageBtn}>Contact</a></Link>         
      </aside>

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
