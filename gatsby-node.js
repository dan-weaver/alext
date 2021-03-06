const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const Feed = require("rss-to-json");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
        {
          allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "issue" } } }
          ) {
            edges {
              node {
                id
                html
                frontmatter {
                  buttonTitle
                  subtitle
                  title
                  path
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }

      // Create Product pages
      const issueTemplate = path.resolve(`./src/templates/IssuePage.js`);
      // We want to create a detailed page for each
      // product node. We'll just use the Contentful id for the slug.
      _.each(result.data.allMarkdownRemark.edges, edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/issues/${edge.node.frontmatter.path}/`,
          component: issueTemplate,
          context: {
            id: edge.node.id
          }
        });
        resolve();
      });
    });
  });
};
