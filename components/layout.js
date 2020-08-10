import { Component } from 'react';
import Header from '../components/Header/Header'
import Head from 'next/head'
import styles from './layout.module.css'
// import Header from './Header'

const name = 'Tyler Klepsch'
export const siteTitle = 'Tyler Klepsch | Web Developer'

class Layout extends Component {
  
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />


          <meta
            name="description"
            content="Website for web developer Tyler Klepsch."
          />
        </Head>

        <div className={styles.BackgroundExterior}>

          <div className={styles.BackgroundInterior}>
            <Header />
            
            <main className={styles.Content}>
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    )    
  }
}

export default Layout;