const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

const slugify = (name) => name.toLowerCase().replace(/ /g, '-').replace(':', '');

// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const homeCatchAllTemplate = path.resolve('src/pages/index.tsx');

  const teamMembers = await graphql(`
    query TeamMembers {
      allContentfulTeamMember {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `);

  teamMembers.data.allContentfulTeamMember.edges.forEach((page) => {
    if (page.node) {
      createPage({
        path: `/team/${slugify(page.node.name)}`,
        component: homeCatchAllTemplate,
        context: {
          memberId: page.node.id,
        },
      });
    }
  });

  const galleryItems = await graphql(`
    query galleryItems {
      allContentfulGalleryItem {
        edges {
          node {
            name
            type
            id
          }
        }
      }
    }
  `);

  galleryItems.data.allContentfulGalleryItem.edges.forEach((page) => {
    if (page.node && page.node.type === 'image') {
      createPage({
        path: `/gallery/${slugify(page.node.name)}`,
        component: homeCatchAllTemplate,
        context: {
          galleryItemId: page.node.id,
        },
      });
    }
  });
};
