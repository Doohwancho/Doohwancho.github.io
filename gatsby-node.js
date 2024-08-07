const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

// Generate a Slug Each Post Data
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
};


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Query for all markdown files and PS file
  const result = await graphql(`
    {
      allPosts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
        filter: { frontmatter: { type: { ne: "ps" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      psPage: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "ps" } } }
        limit: 1
      ) {
        edges {
          node {
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Generate regular post pages
  const PostTemplateComponent = path.resolve(__dirname, 'src/templates/post_template.tsx');
  
  result.data.allPosts.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: PostTemplateComponent,
      context: { slug: node.fields.slug },
    });
  });

  // Generate PS page
  if (result.data.psPage.edges.length > 0) {
    const PsTemplateComponent = path.resolve(__dirname, 'src/templates/ps_template.tsx');
    const psNode = result.data.psPage.edges[0].node;
    
    createPage({
      path: '/ps',
      component: PsTemplateComponent,
      context: { 
        slug: psNode.fields.slug,
        content: psNode.html
      },
    });
  }
};
