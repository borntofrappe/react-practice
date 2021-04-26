import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout'
import Time from '../components/time'
import styles from '../components/layout.module.css';
import {getSortedPostData} from '../lib/posts';

export default function Home({sortedPostData}) {
  return (
    <Layout>
      <Head>
        <title>nextjs-tutorial</title>
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main className={styles.container}>
        <h1>nextjs-tutorial</h1>
        <p>Learning about nextjs by following the <a href="https://nextjs.org/learn">official tutorial</a></p>

        <h2>Blog</h2>
        <section>
          {sortedPostData.map(({date, title, id}) => <article key={id}>
            <Time dateString={date} />
            <h3>{title}</h3>
            <Link href={`/posts/${id}`}>Give it a read</Link>
          </article>)}
        </section>

      </main>     

      <style jsx>{`
        a {
          font-weight: bold;
        }

        section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 0.5rem;
        }

        article {
          display: subgrid;
          gap: 0.25rem;
          padding: 1rem 0.75rem;
          background: hsl(0, 0%, 100%);
          box-shadow: 0 1px 5px -3px hsl(220, 60%, 5%);
        }

        article time {
          padding: 0.25rem 0.5rem;
          background: hsl(220, 60%, 5%);
          color: hsl(220, 90%, 98%);
        }

        article h3 {
          font-size: 1.25rem;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const sortedPostData = getSortedPostData();
  return {
    props: {
      sortedPostData
    }
  }
}