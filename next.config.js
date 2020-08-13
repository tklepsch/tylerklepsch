const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
module.exports = {
  // Target must be serverless
  target: 'serverless'
};