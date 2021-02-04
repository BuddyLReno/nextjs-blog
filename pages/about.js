import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/about.module.scss';

export default function About() {
  return (
    <Layout>
      <h2>About Me</h2>
      <div className={styles.introParagraph}>
        <img className={styles.profileImage} src="/images/profile.jpg"/>
        <p>Hello, I'm Buddy Reno! I've been doing web development for 16 years now and I 
          absolutely love it. Javascript and CSS are my favorite pieces of tech to work with.
        </p>
      </div>
    </Layout>
  )
}
