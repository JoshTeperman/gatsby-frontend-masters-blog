import { useStaticQuery, graphql } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            alt
            image {
              sharp: childImageSharp {
                fluid(maxHeight: 100, maxWidth: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    alt: post.frontmatter.alt,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
