import Link from 'next/link'
import PageTitle from '../components/page-title';
import Layout from '../components/layout'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <PageTitle />
      <Layout noNav noFooter noSpacing>
        <div className={styles.centering}>
          <div className="content">
            <h1 className={styles.title}>Hi, I'm Buddy&nbsp;Reno<b className={styles.fancy}>.</b></h1>
            <p className={styles.description}>A web developer making things in Nashville,&nbsp;TN<b className={styles.fancy}>.</b></p>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link href="/posts">
                    <a>Posts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Layout>
    </>
  )
}
