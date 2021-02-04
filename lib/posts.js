function importAll(r) {
  let posts = r.keys().map((fileName) => ({
    slug: fileName.substr(1).replace(/\.mdx$/, ""),
    meta: {...r(fileName).meta},
  }));

  posts = posts.filter(file => file.slug.includes('/drafts/') != true);

  return posts.sort((a, b) => (a.meta.date < b.meta.date) ? 1 : -1);
}

export const posts = importAll(
  require.context("../pages/posts/", true, /\.mdx$/)
);
