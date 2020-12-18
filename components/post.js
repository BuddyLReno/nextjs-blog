import Head from 'next/head';
import Layout from './layout';
import styles from '../styles/post.module.scss';

export default function Post({ children, meta }) {
  return (
    <>
      <Layout>
        <article className={styles.post}>
          <header className={styles.header}>
            <h1 className="title">{meta.title}</h1>
            <small>{meta.date}</small>
          </header>
          <div className={styles.content}>{children}</div>
        </article>
      </Layout>
    </>
  )
}