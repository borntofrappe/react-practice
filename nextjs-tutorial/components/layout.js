import Link from 'next/link';

import styles from '../components/utils.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <nav className={styles.container}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/api/hello-world">
          <a>API</a>
        </Link>
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

        nav > * + * {
          margin-left: 0.5em;
        }

        footer {
          margin-top: auto;
          text-align: center;
          padding: 2rem 1rem;
          background: hsl(0, 0%, 12%);
          color: hsl(220, 90%, 97%);
        }
      `}</style>
    </div>
  );
}