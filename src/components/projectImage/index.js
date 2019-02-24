import React from "react"
import Img from "gatsby-image"

class ProjectImage extends React.Component {
  render() {
    let className = 'project-ribbon project-ribbon--' + this.props.theme;

    return (
      <section className="section section--top">
        <div className={className}></div>
        <div className="col col--span2 col--offset1">
          <Img className="project-image" fluid={this.props.img} alt={this.props.alt}/>
        </div>
      </section>
    );
  }
}

export default ProjectImage;
