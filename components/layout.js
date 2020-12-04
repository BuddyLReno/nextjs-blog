import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/layout.module.scss'

export default function Layout({children, noNav}) {
  const nav = !noNav ? <Header/> : '';
  return (
    <>
      {nav}
      <main className={styles.siteWrapper}>{children}</main>
    </>
  )
}