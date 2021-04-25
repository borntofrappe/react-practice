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
