import Link from 'next/link';
import styles from '../styles/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>Buddy Reno</a>
          </Link>
        </h1>
        <nav className={styles.nav}>
          <input className={styles.menuCheckbox} type="checkbox"/>
          <ul className={styles.menuIcon}>
            <li className={styles.menuIconBar}></li>
            <li className={styles.menuIconBar}></li>
            <li className={styles.menuIconBar}></li>
          </ul>
          <div className={styles.listWrapper}>
            <div className={styles.shade}></div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/">
                  <a className={styles.link}>Home</a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/about">
                  <a className={styles.link}>About</a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/posts">
                  <a className={styles.link}>Posts</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}