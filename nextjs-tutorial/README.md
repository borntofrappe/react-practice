# nextjs-tutorial

Here I jot down a few notes while going through [the official tutorial on nextjs.org](https://nextjs.org/learn). These are based on personal observations and the lessons taught by the tutorial itself.

## Create a Next.js App

```bash
npx create-next-app nextjs-tutorial --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
cd nextjs-tutorial
npm run dev # runs the application on `http://localhost:3000`
```

Based on `pages/index.js`:

- `Head` refers to a nextjs component which allows to change values in the `<head>` of the document, like the title and description

  ```jsx
  // import
  import Head from 'next/head';

  // later use
  <Head>
    <title>nextjs-tutorial</title>
    <link rel="icon" href="/icon.svg" />
  </Head>;
  ```

- `export default function Home` provides the structure of the page, the markup by returning jsx syntax

- to change the appearance of the HTML elements CSS is included in a particular format

  ```jsx
  <style jsx>
    {`
      /* add CSS here */
    `}
  </style>
  ```

  I presume the property-value pairs are scoped to the component, since the page also includes another tag with a `global` flag

  ```jsx
  <style jsx global>
    {`
      /* add CSS here */
    `}
  </style>
  ```

  Small update: the values are global to the page being rendered. The style is applied to the page and likely every component included in the page.

## Navigation

To create a page create a `.js` file in the `pages` directory which exports a React component.

Nextjs associates a route based on file name.

```code
pages/index.js         # /
pages/about.js         # /about
pages/demos/index.js   # /demos
```

To navigate between pages, nextjs provide a `<Link>` component.

```jsx
// import
import Link from 'next/link`

// later use
<Link href="/about">About</Link>
```

[The docs](https://nextjs.org/learn/basics/navigate-between-pages/client-side) explain how the component enables **client-side navigation**, meaning the navigation is handled by javascript, not the browser.

Further, the documentation explains how nextjs handles **code splitting**, meaning the code is served only when necessary (`pages/about.js` is not served until the page is requested), and **prefetching**, meaning the framework loads a page in the background to rapidly render the output when the page is actually requested (production only).

## Assets, Metadata, and CSS

Files in the `public` folder can be accessed like routes in the `pages` folder.

For images, next provides the `<Image />` component, a helpful conduit to optimize and resize images to the desired dimensions.

```jsx

```

The next two sections are slightly and already introduced by the observations devoted to `index.js`:

- or metadata nextjs provides the `<Head>` component.

  ```jsx
  <Head>
    <title>About</title>
  </Head>
  ```

- for styling nextjs relies on a library called `styled-jsx`, whereby CSS is directly included in a react component

  ```jsx
  <style jsx>{`
    /* selector { property: value; } */
  `}</style>
  ```

  And yes, styles are scoped to the component

In terms of styling, a helpful construct comes in the form of _layout components_. In `components/layout.js`, for instance, it is possible to include a default navigation and a footer.

```jsx
export default function Layout({ children }) {
  return (
    <div>
      <nav></nav>
      {children}
      <footer></footer>
    </div>
  );
}
```

`children` refers to the markup of the pages using the layout.

```jsx
import Layout from '../components/layout';

export default function About() {
  return <Layout>{/* about page */}</Layout>;
}
```

_CSS Modules_ offer another way to include CSS, and this time through a `.css` file. In `components/layout.module.css` add a few property-value pairs.

```css
.container {
  width: 90vw;
  margin: 2rem auto;
  max-width: 1000px;
}
```

Where needed, import the module.

```jsx
import styles from '../components//layout.module.css';
```

Use it accessing the selector.

```jsx
<div className={styles.container}></div>
```

Global styles are also supported by referencing a stylesheet in `pages/_app.js` (and only here).

`_app.js` is a top-level component common across all pages.

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

To include the global stylesheet created in `styles/global.css`, import it at the beginning of the file.

```jsx
import '../styles/global.css';

// export ...
```
