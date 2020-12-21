import Link from 'next/link';
import Image from 'next/image';
import PostDate from '../components/post-date';
import styles from '../styles/post-excerpt.module.scss';

export default function PostExcerpt ({ post }) {
  const { slug, meta } = post;

  return (
    <article className={styles.post}>
      {meta.photo.url ? (
        <Image src={meta.photo.url}
               className={styles.thumbnail}
               width={meta.photo.width}
               height={meta.photo.height}
               objectFit="cover" />
      ) : ('')}
      <div className={styles.postContent}>
        <Link href={`/posts${slug}`}>
          <a className={styles.link}>
            <h1 className={styles.title}>{meta.title}</h1>
          </a>
        </Link>
        <p className={styles.excerpt}>{meta.description}</p>
        <footer className={styles.footer}>
        <PostDate classname={styles.publishDate} dateString={meta.date} />
        </footer>
      </div>
    </article>
  );
}
