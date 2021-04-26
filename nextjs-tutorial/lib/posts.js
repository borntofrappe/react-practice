import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postDirectory)
  const postData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const { data } = matter(fileContents)
    return {
      id,
      ...data
    }
  })

  return postData.sort((a, b) => a.date < b.date ? 1 : -1)
}

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
  const fileNames = fs.readdirSync(postDirectory)

  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }))
}

export async function getPostData(id) {
  const fullPath = path.join(postDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    id,
    ...data,
    contentHtml
  }
}