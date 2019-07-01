import React from 'react';
import styles from './styles.module.scss';

const ProjectRibbon = ({ projectInfo }) => {
  const { theme } = projectInfo;
  const ribbonName = `project-ribbon--${theme}`;

  return (
    <div className={`${styles['project-ribbon']} ${styles[ribbonName]}`} />
  );
};

export default ProjectRibbon;
