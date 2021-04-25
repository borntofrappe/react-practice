import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/layout.module.css';
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      
      <main className={styles.container}>
      <h1>About</h1>
        <p>There's nothing very special about this page. Just a proof of concept to test out nextjs <a href="https://nextjs.org/docs/routing/introduction">router</a> based on file name.</p>
        <p>Here's a profile picture, though. Included with nextjs own <code>Image</code> component</p> 
        <Image src="/profile.jpg" width="128" height="128" alt="Profile picture"/>
      </main>

      <style jsx>{`
        a {
          font-style: italic;
        }
      `}</style>
    </Layout>
  )
}