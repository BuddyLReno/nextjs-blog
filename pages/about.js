import Head from 'next/head'
import PageTitle from '../components/page-title';
import Layout from '../components/layout'
import styles from '../styles/about.module.scss';

export default function About() {
  return (
    <>
      <PageTitle />
      <Layout>
        <h2>About Me</h2>
        <div className={styles.introParagraph}>
          <img className={styles.profileImage} src="/images/me-2021.jpg"/>
          <p>Hello, I'm Buddy Reno! I've been hacking at websites for almost 20 years and absolutely love it. 
          Currently making cool stuff at Click Funnels. <a target="_blank" href="https://www.clickfunnels.com/careers">Come work with me</a>!</p>
          <p>You can also find me on <a href="https://www.linkedin.com/in/buddy-reno-19532156/" target="_blank">LinkedIn</a>.</p>
        </div>
      </Layout>
    </>
  )
}
