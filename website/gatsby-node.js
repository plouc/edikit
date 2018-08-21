const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
      resolve(
        graphql(
          `
            {
              allMdx {
                edges {
                  node {
                    fileAbsolutePath
                    fileNode {
                      name
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
  
          // Create blog posts pages.
          result.data.allMdx.edges.forEach(({ node }) => {
            createPage({
              path: `/non-page/${node.fileNode.name}`,
              component: node.fileAbsolutePath, //blogPost,
              context: { absPath: node.fileAbsolutePath }
            });
          });
        })
      );
    });
  };