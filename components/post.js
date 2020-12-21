import Head from 'next/head';
import Layout from './layout';
import Image from 'next/image';
import PostDate from '../components/post-date';
import styles from '../styles/post.module.scss';

export default function Post({ children, meta }) {
  return (
    <>
      <Layout noSpacing>
        <article className={styles.post}>
        {meta.photo.url ? (
              <Image src={meta.photo.url}
              width={meta.photo.width}
              height={meta.photo.height}
              layout="responsive"
              objectFit="cover" />
            ) : ('')}
          <header className={styles.header}>
            <h1 className={styles.title}>{meta.title}</h1>
            <PostDate classname={styles.publishDate} dateString={meta.date} />
          </header>
          <div className={styles.content}>{children}</div>
        </article>
      </Layout>
    </>
  )
}