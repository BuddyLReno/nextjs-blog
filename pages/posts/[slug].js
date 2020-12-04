import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../styles/post.module.scss';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head><title>{postData.title}</title></Head>
      <article className={styles.post}>
        <header className={styles.header}>
          <h1 className="title">{postData.title}</h1>
          <p>{postData.date}</p>
        </header>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData
    }
  }
}