import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import styles from '../components/utils.module.css';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>

      <main className={styles.container}>
        <h1>Page not found</h1>
        <p>Unfortunately, there is no page matching your URL.</p>
        <p>
          One wait out of this is through the links at the top of this very
          page. If you need a direct link, you can always go home{' '}
          <Link href="/">from here</Link>.
        </p>
      </main>
    </Layout>
  );
}