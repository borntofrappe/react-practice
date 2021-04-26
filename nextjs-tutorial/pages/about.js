import Head from 'next/head';

import Layout from '../components/layout';
import styles from '../components/utils.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      <div className={styles.container}>
        <h1>About</h1>
        <main>
          <p>
            There's nothing very special about this page. Just a proof of
            concept to test out nextjs{' '}
            <a href="https://nextjs.org/docs/routing/introduction">router</a>{' '}
            based on file name.
          </p>
        </main>
      </div>

      <style jsx>{``}</style>
    </Layout>
  );
}