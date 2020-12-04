import Link from 'next/link';
import Image from 'next/image';
import PostDate from './post-date';
import styles from '../styles/post-excerpt.module.scss';

export default function PostExcerpt({slug, title, date, photo, excerpt}) {
  return (
    <article className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <a className={styles.link}>

          {photo ? (
            <Image src={photo}
                   className={styles.thumbnail}
                   width="1000"
                   height="425"
                   objectFit="cover"/>
          ) : ('')}
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
          </header>
          <p className={styles.excerpt}>{excerpt}</p>
          <footer className={styles.footer}>
            <PostDate classname={styles.publishDate} dateString={date} />
          </footer>
        </a>
      </Link>
    </article>
  );
}