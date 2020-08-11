import Layout from '../components/layout';
import Link from 'next/link';
import utilityStyles from '../styles/utilities.module.css'

// pages/404.js
export default function Custom404() {
  return (
    <Layout>
      <div className='container__main-content'>
        <h1>404 - Page Not Found</h1>
      </div>
      <Link href="/"><a className={utilityStyles.PrevPageBtn}>Back to homepage</a></Link>   
    </Layout>
  )
}
