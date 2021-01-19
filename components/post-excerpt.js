import Link from "next/link";
import PostDate from "../components/post-date";
import ExternalLinkIcon from "../public/images/external-link.svg";
import styles from "../styles/post-excerpt.module.scss";

export default function PostExcerpt({ post }) {
  const { slug, meta } = post;
  const isExternal = meta.hasOwnProperty("link") ? true : false;

  function buildLink() {

    const attributes = {
      title: meta.title,
      rel: isExternal ? 'noopener noreferrer' : '',
      target: isExternal ? '_blank' : '',
    };

    return (
      <a {...attributes} className={styles.link}>
        <h1 className={styles.title}>{meta.title}</h1>
        {isExternal ? (
          <ExternalLinkIcon className={styles.externalLinkIcon} />
        ) : (
          <></>
        )}
      </a>
    );
  }

  return (
    <article className={styles.post}>
      {meta.photo.url ? (
        <>
          <div className={styles.thumbnailContainer}>
            <img src={meta.photo.url} className={styles.thumbnail} width={meta.photo.width} height={meta.photo.height} />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className={styles.postContent}>
        <Link href={isExternal ? meta.link : `/posts${slug}`}>
          {buildLink()}
        </Link>
        <p className={styles.excerpt}>{meta.description}</p>
        <footer className={styles.footer}>
          <PostDate classname={styles.publishDate} dateString={meta.date} />
        </footer>
      </div>
    </article>
  );
}
