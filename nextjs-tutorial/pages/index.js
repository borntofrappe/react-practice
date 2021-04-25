import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/layout.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>nextjs-tutorial</title>
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main className={styles.container}>
        <h1>nextjs-tutorial</h1>
        <p>Learning about nextjs by following the <a href="https://nextjs.org/learn">official tutorial</a></p>
      </main>     

      <style jsx>{`
        a {
          font-weight: bold;
        }
      `}</style>
    </Layout>
  )
}
