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

## Pre-rendering and Data Fetching

Pre-rendering means that node generates HTML for each page on the server side, serves the code and then hydrates the application on the client side to make the page fully interactive.

There are technically two types of pre-rendering:

1. static generation: HTML at build time

2. server-side rendering: HTML on each request

When the page doesn't need to change with multiple, staggered requests, consider for instance a blog post, it is a good sign that you need static generation.

Concerning static generation, nextjs allows to perform data fetching before generating the necessary pages. Define an async function `getStaticProps`. nextjs knows to run this function at build time, and allows to pass data from the function to the page through `props`.

```jsx
export default function Home(props) {
  // access data through props.
}

export async function getStaticProps() {
  const data = //;
  return {
    props: data
  }
}
```

In the tutorial, the function is instructed to consider data in the form of articles stored in the `posts` folder.

`gray-matter` is a package useful to retrieve metadata for each article, metatadata which is included in the frontmatter of the `.md` files with yaml syntax.

In `lib/posts.js` create a small library to read the data from the `posts` folder and exporting a function which returns the posts (specifically their metadata) sorted by date.

With this setup `getStaticProps` is able to fetch the data and return the information to the relevant component. For instance and for `index.js`, the function returns the entire collection so that it is possible to list the articles.

```jsx
export async function getStaticProps() {
  const sortedPostData = getSortedPostData();
  return {
    props: {
      sortedPostData,
    },
  };
}

export default function Home({ sortedPostData }) {}
```

`post.js` retrieves the data locally, but it could very well find the information from an API, or a database. `getStaticProps` runs only on the server, which mean the data-fetching operations are not executed on the client side.

Concerning server-side rendering, `getServerSideProps` replaces `getStaticProps`

```jsx
export async function getServerSideProps(context) {
  return {
    props: {
      // data
    },
  };
}
```

The function is run every time a request is performed and receives information regarding the request through the `context` parameter

Outside of pre-rendering, it is finally possible to render data on the client side, client-side rendering, retrieving external data when the page loads. nextjs provides `swr` as a hook to fetch data on the client side.

## Dynamic routes

- pages with `pages/*.js` files

- page content with external data and `getStaticProps`

- pages with external data and dynamic URLs

The idea is to generate pages for the posts in the `posts` folder.

Create `pages/posts/[id].js`, square brackets describing nextjs concept for dynamic routes

Write an exporting function for the page describing blog posts.

```jsx
export default function Post() {
  return /**/;
}
```

Export an async function, similar to `getStaticProps`, labeled `getStaticPaths()`. This is where it is possible to consider valid ids by looking at the posts in the folder bearing the same name.

```jsx
export async function getStaticPaths() {
  // consider avaiable ids
  return {
    paths: // available paths
  }
}
```

Export `getStaticProps` then, to finally retrieve the `[id]` parameter and match it against the static paths.

```jsx
export async function getStaticProps({ params }) {
  // consider params.id and the available paths
}
```

In `libpost.js`

1. create a function which provides all the available ids

```js
export function getAllPostIds() {
  /* array of objects
  [
    {
      params: {
        id
      }
    },
    
  ]
  */
}
```

2. create a function which returns the data for the desired id (at first metatada, but later the markup using a parsing library)

```js
export function getPostData(id) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  //
}
```

It seems `getStaticProps` is called only with valid ids, so it's not necessary to consider if `params.id` is valid. The value is instead useful to retrieve the data for thhe individual post.

```jsx
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
```

`pages/posts/[id].js` can finally use the metadata in the function exporting jsx syntax.

In `index.js` use the `id` to direct toward the individual pages.

```jsx
<Link href={`/posts/${id}`}>Give it a read</Link>
```

For markdown, nextjs suggests the remark library.

```bash
npm install remark remark-html
```

In `lib/posts.js` update `getPostData` so that the function returns the metadata as well as the markup for the content.

```js
import remark from 'remark';
import html from 'remark-html';

// in getPostData()

const { data, content } = matter(fileContents);
const processedontent = await remark().use(html).process(content);
const contentHtml = processedContent.toString();

return {
  id,
  ...data,
  contentHtml,
};
```

! make the function async to benefit from `await remark`

```diff
export function getPostData(id) {
+export async function getPostData(id) {
```

`[id].js` can finally use the content. Await for the value of the `getPostData` function.

```diff
const postData = getPostData(params.id);
+const postData = await getPostData(params.id);
```

Inject in the substance of the component.

```jsx
<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
```

To polish the page nextjs suggests:

- add a `<title>` through the `<Head>` component

- format the date with the `date-fns` library and a custom `<Date />` component in `components/date.js`

- style the page with classes from `utils.module.css`

Optionally:

- provide a custom 404 page in `pages/404.js`. Generated at build time

```jsx
export default function Custom404() {
  // custom jsx
}
```
