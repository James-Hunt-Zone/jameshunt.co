import { graphql } from "gatsby";

export default graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          subTitle
          theme
          bio
          tech
          alt
          link
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
