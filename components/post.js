import Head from 'next/head';
import Layout from "./layout";
import PageTitle from '../components/page-title';
import PostDate from "../components/post-date";
import styles from "../styles/post.module.scss";

export default function Post({ children, meta }) {
  function photoLink(url) {
    return `https://buddyreno.dev${url}`
  }

  return (
    <>
      {console.log(meta)}
      <PageTitle title={meta.title}/>
      <Head>
        <meta name="author" content="Buddy Reno" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content="Buddy Reno"/>
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content={`https://buddyreno.dev/posts/${meta.slug}`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`https://buddyreno.dev${meta.photo.url}`} />
        <meta property="og:image:width" content={meta.photo.width} />
        <meta property="og:image:height" content={meta.photo.height} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="https://buddyreno.dev/about" />
        <meta property="article:published_time" content={meta.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@buddylreno" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`https://buddyreno.dev${meta.photo.url}`} />
      </Head>
      <Layout noSpacing>
        <article className={styles.post}>
          {meta.photo.url ? (
            <div className={styles.photoContainer}>
              <img src={meta.photo.url} width={meta.photo.width} height={meta.photo.height} />
            </div>
          ) : (
            <></>
          )}
          <header className={styles.header}>
            <h1 className={styles.title}>{meta.title}</h1>
            <PostDate classname={styles.publishDate} dateString={meta.date} />
          </header>
          <div className={styles.content}>{children}</div>
        </article>
      </Layout>
    </>
  );
}
