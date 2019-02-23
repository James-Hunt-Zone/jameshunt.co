import React from "react"
import Img from "gatsby-image"

class ProjectImage extends React.Component {
  render() {
    console.log(this.props.imgAlt);
    return (
      <section className="section section--top">
        <div className="project-ribbon"></div>
        <div className="col col--span2 col--offset1">
          <Img fluid={this.props.img} alt={this.props.alt}/>
        </div>
      </section>
    );
  }
}

export default ProjectImage;
