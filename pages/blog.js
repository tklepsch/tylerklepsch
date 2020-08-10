import Link from 'next/link'
import Date from '../components/Date/Date'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'


export default function Blog ({allPostsData}) {
  return (
    <Layout>
      <section>…</section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
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
