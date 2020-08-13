import Layout from '../components/layout'
import Link from 'next/link'

export default function MessageSent() {
  return (
    <Layout columnType="one-col" backgroundPaddingtype="no-side-padding">
    <article className='container__main-content'>
      <h1>Your message has been sent!</h1>
      <p>In the meantime, feel free to read up on what's been <Link href="/blog"><a>on my mind lately.</a></Link> </p>
    </article>    
  </Layout>
  )
}
