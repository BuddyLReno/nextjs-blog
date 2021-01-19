import Head from "next/head";
import Layout from "./layout";
import PostDate from "../components/post-date";
import styles from "../styles/post.module.scss";

export default function Post({ children, meta }) {
  return (
    <>
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
