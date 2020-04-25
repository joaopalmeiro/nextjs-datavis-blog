const remarkHighlight = require("remark-highlight.js");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkHighlight],
    rehypePlugins: [],
  },
});

const nextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  pageExtensions: ["js", "jsx", "mdx"],
};

module.exports = withMDX(nextConfig);
