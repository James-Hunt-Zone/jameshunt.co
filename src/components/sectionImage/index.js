import React from "react"
import Img from "gatsby-image"

class SectionImage extends React.Component {
  render() {
    return (
      <div>
        <Img fluid={this.props.img} />
      </div>
    );
  }
}

export default SectionImage;
