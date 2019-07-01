import { graphql } from 'gatsby';

const q = `{
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
}`;

export default q;
