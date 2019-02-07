import React from "react"
import SectionIMage from '../components/sectionImage';
import { graphql } from 'gatsby'

export default ({data}) => {
  return (
    <div>
      <h1>Hello world {data.allProjectsJson.edges[0].node.value}</h1>
      <SectionIMage img={data.allProjectsJson.edges[0].node.img.childImageSharp.fluid}></SectionIMage>
    </div>
  )
};

export const query = graphql`
  query HomePageQuery {
    allProjectsJson {
      edges {
        node {
          value
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
`
