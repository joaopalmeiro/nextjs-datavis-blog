const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const postList = importAll(require.context("../pages/posts", true, /.mdx?$/));

export function getSortedPostsData() {
  const allPostsData = postList.map(({ meta }, index) => {
    const id = meta.slug.split("/").pop() + "-" + index;
    return {
      id,
      ...meta,
    };
  });

  // Sort posts by `date`
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
