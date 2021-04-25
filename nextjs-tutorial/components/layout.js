import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>

      {children}

      <footer>
        <p>
          2021. Built with <a href="https://nextjs.org">nextjs</a>
        </p>
      </footer>

      <style jsx>{`
        div {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        div > * + * {
          margin-top: 0.75em;
        }

        nav {
          padding: 0.5rem 0.75rem;
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
        }
        nav > * + * {
          margin-left: 0.5rem;
        }

        footer {
          margin-top: auto;
          text-align: center;
          padding: 0.5rem 1rem;
          background: hsl(0, 0%, 12%);
          color: hsl(220, 90%, 97%);
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
  );
}