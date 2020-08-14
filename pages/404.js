import ContentLayout from '../components/ContentLayout';
import Link from 'next/link';
import pageBtnStyles from '../styles/pagebtn.module.css'

// pages/404.js
export default function Custom404() {
  return (
    <ContentLayout>
      <div className='container__main-content'>
        <h1>404 - Page Not Found</h1>
      </div>
      <Link href="/"><a className={pageBtnStyles.PrevPageBtn}>Back to homepage</a></Link>   
    </ContentLayout>
  )
}
