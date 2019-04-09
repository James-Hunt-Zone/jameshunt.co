import React from 'react';
import Img from 'gatsby-image';

const ProjectImage = ({ projectInfo }) => {
  const { alt, theme, img } = projectInfo;
  const className = `project-ribbon project-ribbon--${theme}`;

  return (
    <section className="section section--top">
      <div className={className} />
      <div className="col col--span2 col--offset1">
        <Img
          className="project-image"
          fluid={img.childImageSharp.fluid}
          alt={alt}
        />
      </div>
    </section>
  );
};

export default ProjectImage;
