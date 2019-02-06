// import React from "react"
// import styles from './styles.module.scss';
// import SectionIMage from '../components/sectionImage';

// export default () => {
// return (
//     <StaticQuery <div><h1>Hello world<i>!</i><SectionIMage></SectionIMage></h1></div> />
// )};

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "./00.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

import React from "react"
import { StaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import SectionIMage from '../components/sectionImage';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "00.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
            }
          }
      }
    }
    `}
    render={data => (
      <header>
        {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
        <div><h1>Hello world<i>!</i><SectionIMage img={data.file.childImageSharp.fixed}></SectionIMage></h1></div>
      </header>
    )}
  />
)