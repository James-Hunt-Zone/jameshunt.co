import React from 'react';
import styles from './styles.module.scss';

const ProjectLink = ({ projectInfo }) => {
  const { link } = projectInfo;
  if (!link) return null;

  return (
    <a className={styles['project-link']} href={link}>
      <span>View Project</span>
      <i>→</i>
    </a>
  );
};

export default ProjectLink;
