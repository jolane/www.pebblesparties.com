module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    siteUrl: `https://pebblesparties.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-116363991-1`,
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ],
};