function importAll(r) {
  return r.keys().map((fileName) => ({
    slug: fileName.substr(1).replace(/\.mdx$/, ""),
    meta: {...r(fileName).meta},
  }));
}

export const posts = importAll(
  require.context("../pages/posts/", true, /\.mdx$/)
);

// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import remark from 'remark'
// import html from 'remark-html'

// const postsDirectory = path.join(process.cwd(), 'posts');

// export function getStortedPostsData() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map(fileName => {
//     const slug = fileName.replace(/\.md$/, '');
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const matterResult = matter(fileContents);

//     return {
//       slug,
//       ...matterResult.data
//     };

//   });

//   return allPostsData.sort((a, b) => {
//     (a.date < b.date) ? 1 : -1;
//   });
// }

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);

//   return fileNames.map(fileName => {
//     return {
//       params: {
//         slug: fileName.replace(/\.md$/, '')
//       }
//     }
//   });
// }

// export async function getPostData(slug) {
//   const fullPath = path.join(postsDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   const matterResult = matter(fileContents);
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   return {
//     slug,
//     contentHtml,
//     ...matterResult.data
//   };
// }
