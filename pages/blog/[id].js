import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from  '../../components/Date/Date'
import utilityStyles from '../../styles/utilities.module.css'
import markdownStyles from '../../styles/markdown.module.css'
import styles from './post.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout columnType="one-col mid-width" backgroundPaddingtype="right-padding">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main>
        <div className={styles.MainImage}>
          <img src={postData.mainImage} alt={postData.imageAlt} />
        </div>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <article className={markdownStyles.MarkdownContainer} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
      <Link href="/blog"><a className={utilityStyles.PrevPageBtn}>Back to Blog</a></Link> 
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}