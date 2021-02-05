import Link from 'next/link'
import PageTitle from '../components/page-title';
import Layout from '../components/layout'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <PageTitle />
      <Layout noNav noFooter noSpacing>
        <div className="px-6 py-0 flex items-center justify-center h-screen">
          <div className="content">
            <h1 className="text-5xl sm:text-7xl">Hi, I'm Buddy&nbsp;Reno<b className="text-purple">.</b></h1>
            <p className="text-3xl mb-9 sm:text-5xl">A web developer making things in Nashville,&nbsp;TN<b className="text-purple">.</b></p>
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
