const path = require("path");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        posts: allGraphCmsPost {
          edges {
            nextPost: next {
              slug
              title
            }
            page: node {
              id
              attachments {
                url
              }
              author {
                designation
                fullName
                photo {
                  url
                }
              }
              categories {
                name
              }
              content {
                markdownNode {
                  childMdx {
                    body
                  }
                }
              }
              createdAt
              image {
                url
              }
              slug
              title
            }
            previousPost: previous {
              slug
              title
            }
          }
        }
      }
    `
  );

  if (data.errors) throw data.errors;

  data.posts.edges.forEach(({ nextPost, page, previousPost }) => {
    createPage({
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        id: page.id,
        page,
        previousPost,
        nextPost,
      },

      path: `/posts/${page.slug}`,
    });
  });
};
