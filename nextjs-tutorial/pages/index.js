import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/layout'
import Time from '../components/time'
import styles from '../components/utils.module.css';
import {getSortedPostData} from '../lib/posts';

export default function Home({sortedPostData}) {
  return (
    <Layout>
      <Head>
        <title>Next.js Tutorial</title>
        <link rel="icon" href="/icon.svg" />
      </Head>

      <div className={styles.container}>
        <header>
          <Image className={styles.round} src="/profile.png" width="136" height="136" alt="Profile picture"/>
          <h1>Orville Righteous</h1>
        </header>

        <main>
          <p>Hello, I'm <strong>Orville</strong>, a daring critter from <a href="https://bulbapedia.bulbagarden.net/wiki/Pudgy_Pidgey_Isle">Pudgy Pidgey Isle</a> with a liking for <cite>Alice in Wonderland</cite>.</p>
          <p>(This is a sample website - you'd be building a site similar to this one in <a href="https://nextjs.org/learn">the official Next.js tutorial</a>)</p>

          <h2>Blog</h2>
          <section>
            {sortedPostData.map(({date, title, id}) => <article key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <Time dateString={date} />
            </article>)}
          </section>
        </main>     
      </div>

      <style jsx>{`
        header,
        section,
        article {
          display: flex;
          flex-direction: column;
        }

        header {
          text-align: center;
          align-items: center;
        }

        h1 {
          font-size: 1.98rem;
          margin-top: 0.75em;
        }

        main > * + * {
          margin-top: 1em;
        }

        header > * + *,
        section > * + * {
          margin-top: 1em;
        }

        section {
          align-items: flex-start;
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