# nextjs-tutorial

[The official tutorial on nextjs.org](https://nextjs.org/learn) provides an excellent guide to create an application with multiple pages.

Set up a live environment on `http://localhost:3000` to confirm the working demo

```bash
npm run dev
```

That being said, here a few notes to document my journey through the tutorial.

## Create a Next.js App

Set up the application with a few lines in the command line.

```bash
npx create-next-app nextjs-tutorial --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
cd nextjs-tutorial
npm run dev
```

Based on `pages/index.js`:

- `Head` refers to a Next.js component which allows to change values in the `<head>` of the document, like the title and description

  ```jsx
  // import
  import Head from 'next/head';

  // later use
  <Head>
    <title>nextjs-tutorial</title>
    <link rel="icon" href="/icon.svg" />
  </Head>;
  ```

- `export default function Home` returns jsx syntax to provide the structure of the page

- style can be updated with a `<style>` tag and a flag of `jsx`

  ```jsx
  <style jsx>
    {`
      /* add CSS here */
    `}
  </style>
  ```

  Property-value pairs are scoped to the component. To stretch past the individual file, for instance to affect components imported in the page, add a similar tag with a `global` flag

  ```jsx
  <style jsx global>
    {`
      /* add CSS here */
    `}
  </style>
  ```

## Navigation

Every component in the `pages` directory creates a route in the application. Next.js associates a route based on file name.

```code
pages/index.js         -->  /
pages/about.js         -->  /about
pages/demos/index.js   -->  /demos
```

To navigate between pages, Next.js provide a `<Link>` component.

```jsx
// import
import Link from 'next/link`

// later use
<Link href="/about">About</Link>
```

[Here the docs](https://nextjs.org/learn/basics/navigate-between-pages/client-side) highlight a few of the important features of the framework:

- **client-side navigation**: the navigation is handled by javascript, not the browser

- **code splitting**: the code is served only when necessary (`pages/about.js` is not served until the page is requested),

- **prefetching**: the framework loads a page in the background to rapidly render the output when the page is indeed requested (production only)

## Assets, Metadata, and CSS

Files in the `public` folder can be accessed like routes in the `pages` folder.

For images, next provides the `<Image />` component, a helpful conduit to optimize and resize images to the desired dimensions.

```jsx
import Image from 'next/image';

<Image src="./profile-pic" alt="Profile picture" width="136" height="136" />;
```

The component optimizes and resizes the image to the desired dimensions.

For metadata, Next.js provides the aforementioned `<Head />` component.

```jsx
<Head>
  <title>About</title>
</Head>
```

For CSS, there are actually a few options:

- `styled-jsx`, a library working through the aforementioned `<style jsx>` tag

  ```jsx
  <style jsx>{`
    /* selector { property: value; } */
  `}</style>
  ```

  Style is scoped to the component rendered by React, but can be extended through the `global` flag

- CSS modules, a library which works through a class-based system

  Define a stylesheet ending in `.modules.css`

  ```css
  .container {
    max-width: 600px;
    margin: 1rem auto;
  }
  ```

  Import the stylesheet and attribute the styles by referencing the classes in the `className` attribute

  ```jsx
  import styles from './utils.module.css';

  <div className={styles.container}></div>;
  ```

- a global stylesheet, imported in `pages/_app.js`

  The `_app.js` file works as a top-level component common across all pages.

  ```jsx
  export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  ```

  To include the global stylesheet created in `styles/global.css`, import it at the beginning of the file.

  ```jsx
  import '../styles/global.css';
  ```

  Importantly, the global stylesheet works **only** in `_app.js`

CSS, but also HTML, can be included on every page also with layout components. In `components/layout.js`, for instance, it is possible to include a default navigation and a footer.

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

`children` refers to the markup of the pages using the layout, meaning the markup is included around the content of the importing components.

```jsx
import Layout from '../components/layout';

export default function About() {
  return <Layout>{/* about page */}</Layout>;
}
```

## Pre-rendering and Data Fetching

Pre-rendering means that Next.js generates HTML for each page on the server side, serves the code and then hydrates the application on the client side to make the page fully interactive.

There are technically two types of pre-rendering:

1. **static generation**: HTML at build time

2. **server-side rendering**: HTML on each request

When the page doesn't need to change with multiple, staggered requests, consider for instance a blog post, it is a good sign that you need static generation.

Concerning static generation, Next.js allows to perform data fetching before generating the necessary pages with an `async` function `getStaticProps`. The framework knows to run this function at build time, and allows to pass data from the function to the page through `props`.

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

`lib/posts.js` defines a small library to read the data from the markdown files in the `posts` folder. The script relies on `gray-matter` to retrieve the metadata (and later content) for each article

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

The function runs every time a request is performed and receives information regarding the request through the `context` parameter

Outside of pre-rendering, it is finally possible to render data on the client side, client-side rendering, retrieving external data when the page loads. Next.js provides `swr` as a hook to fetch data on the client side (not explored in the demo).

## Dynamic routes

It is possible to create pages with components in the `pages` folder.

It is possible to fetch data through `getStaticProps`.

It is also possible to generate pages based on data, for instance pages for every markdown file in the `posts` folder.

Create a component in `pages/posts/[id].js`.

```jsx
export default function Post() {
  return /**/;
}
```

Next.js manages the name in between square brackets by considering the actual URL: `/posts/getting-started` would result in `id` being equal to `getting-started`

For the content of the component, it is first necessary to establish which `id` correspond to a valid page. In the demo, which `id` corresponds to one of the identifiers attributed to the blog posts.

`getStaticPaths()` allows to consider valid ids by looking at the posts in the folder bearing the same name.

```jsx
export async function getStaticPaths() {
  // consider avaiable ids
  return {
    paths: // available paths
  }
}
```

`getStaticProps` then allows to finally retrieve the `[id]` parameter to serve the relevant page.

```jsx
export async function getStaticProps({ params }) {
  // serve the page with an id matching params.id
}
```

To support the feature of dynamically generating pages, `lib/post.js` provides a few helper function to retrieve the relevant data. For instance, `getAllPostIds` examines the articles in the `posts` folder to create an array of objects with the following structure

```js
/*
[
  {
    params: {
      id
    }
  },
  {
    params: {
      id
    }
  },
]
*/
```

`getPostData`, on the other hand, returns the data for the post identified through input id

`getStaticProps` is called only when Next.js identifies a valid id. The value is then useful to retrieve the data for thhe individual post.

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

With this setup `[id].js` can finally use the information (at first the metadata) in the function exporting jsx syntax.

```jsx
export async function Post({ postData }) {}
```

In `index.js`, add a link to the different posts to confirm that the pages are actually generated.

```jsx
<Link href={`/posts/${id}`}>{title}</Link>
```

`gray-matter` is useful to extract the metadata, and to differentiate said metadata from the actual content. `remark` is then useful as a parsing library to have the content result in the desired markup.

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

The function is made into an `async` function to benefit from `await remark`

```diff
export function getPostData(id) {
+export async function getPostData(id) {
```

`[id].js` can then use the content by `await`ing for the result

```diff
const postData = getPostData(params.id);
+const postData = await getPostData(params.id);
```

Passed through `props`, the content is finally injected in the HTML through the `dangerouslySetInnerHTML` attribute.
Inject in the substance of the component.

```jsx
<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
```

## Polish and tweaks

- the demo is updated to provide meta information for every page and a bit of styling

- a `<Time>` component is defined in `components/time.js` to receive a date string and return a `<time>` element with a human-readable format

- `pages/404.js` describes a page for any request not matching an available route. The page is generated at build time

## Creating API Routes

In `pages/api/*.js` it is possible to set up functions which respond to a request.

```js
export default function handler(req, res) {}
```

With one small example it is possible to have the page respond with JSON data as follows.

```js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello World' });
}
```

Visit `api/hello-world` to attest the function.
