const path = require("path");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        posts: allGraphCmsPost(sort: { fields: date, order: ASC }) {
          edges {
            nextPost: next {
              slug
              title
            }
            page: node {
              id
              author {
                id
                name
                photo {
                  url
                }
                designation
              }
              content {
                markdownNode {
                  childMdx {
                    body
                  }
                }
              }
              date
              excerpt
              seo {
                description
                image {
                  url
                }
                keywords
                title
              }
              slug
              title
              attachment {
                url
              }
              category {
                name
              }
              updatedAt
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
