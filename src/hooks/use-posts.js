import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  grayscale: true
                  # duotone: { shadow: "#663399", highlight: "#ddbbff" }
                  traceSVG: { color: "goldenrod" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes.map(({ frontmatter, excerpt }) => ({
    title: frontmatter.title,
    author: frontmatter.author,
    slug: frontmatter.slug,
    image: frontmatter.image,
    excerpt,
  }));
};

export default usePosts;
