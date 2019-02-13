import React from "react"
import Img from "gatsby-image"

class ProjectImage extends React.Component {
  render() {
    return (
      <section className="section section--top">
        <div className="project-ribbon"></div>
        <div className="col col--span2 col--offset1">
          <Img fluid={this.props.img} />
        </div>
      </section>
    );
  }
}

export default ProjectImage;
