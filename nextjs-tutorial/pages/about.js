import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>

      <header>
        <h1>About</h1>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>


      <main>
        <p>There's nothing very special about this page. Just a proof of concept to test out nextjs <a href="https://nextjs.org/docs/routing/introduction">router</a> based on file name.</p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          max-width: 800px;
          width: 90vw;
          margin: 1rem auto;
        }

        .container > * + * {
          margin-top: 0.75em;
        }

        header {
          display: flex;
          align-items: baseline;
        }

        header h1 {
          margin-right: auto;
        }

        nav > * + * {
          margin-left: 0.5em;
        }

        h1 {
          font-size: 2.56rem;
        }

        p {
          font-size: 0.95rem;
        }

        a {
          font-style: italic;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        * {
          box-sizing: border-box;
        }

        h1 {
          font-size: 1.96rem;
        }

        a {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px dotted currentColor;
        }
      `}</style>
    </div>
  )
}