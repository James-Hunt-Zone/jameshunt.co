import React from "react"
import Img from "gatsby-image"

class ProjectImage extends React.Component {
  render() {
    return (
      <section class="section section--top">
        <div className="section-imageFill"></div>
        <div className="grid-item grid-item--image">
          <Img fluid={this.props.img} />
        </div>
      </section>
    );
  }
}

export default ProjectImage;
