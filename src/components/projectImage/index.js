import React from 'react';
import Img from 'gatsby-image';
import styles from './styles.module.scss';

const ProjectImage = ({ projectInfo }) => {
  const { alt, img } = projectInfo;

  return (
    <Img
      className={styles['project-image']}
      fluid={img.childImageSharp.fluid}
      alt={alt}
    />
  );
};

export default ProjectImage;
