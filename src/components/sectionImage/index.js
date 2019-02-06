import React from "react"
// import styles from './styles.module.scss';
//import { withPrefix } from 'gatsby';
// import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ img }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fixed={img} />
  </div>
)

// //export default SectionImage;

// import React from "react"
// //import { graphql } from "gatsby"
// import Img from "gatsby-image"

// export default () => (
//   <div>
//     <h1>Hello gatsby-image</h1>
//     {this.props.img}
//     {/* <Img fixed={this.props.img} /> */}
//   </div>
// )
