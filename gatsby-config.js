module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `553l845jumbi`,
        accessToken: `bfa08c54f980f4778f816dc2f6b3e25c41bac1fa4e073a5000aa26f0f4a3b31f`
      }
    }
  ]
};
