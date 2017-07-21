module.exports = {
  siteMetadata: {
    title: `Oscar Cortez`,
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
      }
    }
  ],
}
