import { useContext } from 'react';
import StateContext from '../../components/StateContext';
import Head from 'next/head'
import Link from 'next/link'
import ContentLayout, { siteTitle } from '../../components/ContentLayout'
import Date from  '../../components/Date/Date'
import pageBtnStyles from '../../styles/pagebtn.module.css'
import styles from './post.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  const {backButtonClickedHandler} = useContext(StateContext);

  return (
    <ContentLayout 
      columnType="one-col mid-width">
      <Head>
        <title>{postData.title} - {siteTitle}</title>
      </Head>
      <main>
        <h1 className={styles.PostTitle}>{postData.title}</h1>
        <Date dateString={postData.date} className={styles.Date} />
        {postData.mainImage ? <div className={styles.MainImage}>
          <img src={postData.mainImage} alt={postData.imageAlt} /></div> : null}
        <article className={styles.MarkdownContainer} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
      <aside className={pageBtnStyles.BtnContainer}>
        <Link 
          href="/blog" 
          scroll={false}>
          <a 
            className={pageBtnStyles.PrevPageBtn}  
            onClick={backButtonClickedHandler}>Back to Blog</a></Link>         
      </aside>

    </ContentLayout>
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