import Head from 'next/head'
import Link from 'next/link';
import PageTitle from '../components/page-title';
import Layout from '../components/layout'
import PostExcerpt from '../components/post-excerpt';
import { posts } from '../lib/posts';
import styles from '../styles/posts.module.scss';

export default function Posts() {
  return (
    <>
      <PageTitle/>
      <Layout noSpacing>
        <section className={styles.articles}>
          <h1 className={styles.title}>Posts</h1>
          {posts.map((post) => (
            <PostExcerpt key={post.slug} post={post} />
          ))}
        </section>
      </Layout>
    </>
  )
}
