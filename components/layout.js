import { useContext } from 'react'
import StateContext from '../components/StateContext'
import Header from '../components/Header/Header'
import Head from 'next/head'
import ColorMode from './UI/ColorMode/ColorMode'
import styles from './layout.module.css'

// import Header from './Header'

const name = 'Tyler Klepsch'
export const siteTitle = 'Tyler Klepsch | Web Developer'

export default function Layout({ children }){
  const {colorSwitch} = useContext(StateContext);

  let ColorSwitch = colorSwitch;

  return (
    <div className={ColorSwitch}>
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
          {children}
          <ColorMode />
        </div>
      </div>
    </div>
  )    
}