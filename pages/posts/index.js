import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout'
import PostExcerpt from '../../components/post-excerpt';
import { getStortedPostsData } from '../../lib/posts'
import styles from '../../styles/posts.module.scss';

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <section className={styles.articles}>
        <h1 className={styles.title}>Posts</h1>
        {allPostsData.map(postData => (
          <PostExcerpt {...postData} />
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getStortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}
