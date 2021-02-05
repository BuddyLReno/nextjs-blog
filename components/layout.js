import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/layout.module.scss'

export default function Layout({children, noNav, noSpacing, noFooter}) {
  const nav = !noNav ? <Header/> : '';
  const noSpace = noSpacing ? styles.noSpacing : '';
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <div className={styles.siteWrapper}>
        {nav}
        <main className={`${styles.mainContent} ${noSpace}`}>{children}</main>
        {!noFooter ? (
          <footer className={styles.siteFooter}>
            <p>&copy; Buddy Reno | 2020</p>
          </footer>
        ) : ('')}
      </div>
    </>
  )
}