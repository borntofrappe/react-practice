import Layout from '../../components/layout'
import Time from '../../components/time'
import { getAllPostIds, getPostData } from '../../lib/posts'
import styles from '../../components/layout.module.css';
import Head from 'next/head'

export default function Post({ postData }) {
  const { title, date, contentHtml } = postData;
  return <Layout>
    <Head>
      <title>{title}</title>
    </Head>

    <main className={styles.container}>
      <h1>{title}</h1>
      <Time dateString={date} />

      <div dangerouslySetInnerHTML={{__html: contentHtml}} />
    </main>

    <style jsx>{`
      div {
        line-height: 2
      }
    `}</style>
  </Layout>; 
}

export async function getStaticPaths() {
  const postIds = getAllPostIds();
  return {
    paths: postIds,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}