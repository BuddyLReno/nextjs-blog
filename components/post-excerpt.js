import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/post-excerpt.module.scss';

export default function PostExcerpt ({ post }) {
  const { slug, meta } = post;

  return (
    <article className={styles.post}>
      {meta.photo ? (
        <Image src={meta.photo}
               className={styles.thumbnail}
               width="1000"
               height="425"
               objectFit="cover" />
      ) : ('')}
      <div className={styles.postContent}>
        <Link href={`/posts${slug}`}>
          <a className={styles.link}>
            <h1 className={styles.title}>{meta.title}</h1>
          </a>
        </Link>
      </div>
    </article>
  );
}

// import Link from 'next/link';
// import Image from 'next/image';
// import PostDate from './post-date';
// import styles from '../styles/post-excerpt.module.scss';

// export default function PostExcerpt({slug, title, date, photo, excerpt}) {
//   return (
//     <article className={styles.post}>
//       <Link href={`/posts/${slug}`}>
//         <a className={styles.link}>

//           {photo ? (
//             <Image src={photo}
//                    className={styles.thumbnail}
//                    width="1000"
//                    height="425"
//                    objectFit="cover"/>
//           ) : ('')}
//           <header className={styles.header}>
//             <h1 className={styles.title}>{title}</h1>
//           </header>
//           <p className={styles.excerpt}>{excerpt}</p>
//           <footer className={styles.footer}>
//             <PostDate classname={styles.publishDate} dateString={date} />
//           </footer>
//         </a>
//       </Link>
//     </article>
//   );
// }