import Layout from '../../components/layout'
import Head from 'next/head'
import Date from  '../../components/Date/Date'
import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className='pageContainer three-col'>
        <Link href="/blog"><a>Home</a></Link>
        <main>
          <h1>{postData.title}</h1>
          <Date dateString={postData.date} />
          <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </main>
      </div>
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