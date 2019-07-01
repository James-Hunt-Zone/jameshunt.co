import React from 'react';
import styles from './styles.module.scss';

const ProjectHeader = ({ projectInfo }) => {
  const { title, subTitle } = projectInfo;

  return (
    <React.Fragment>
      <h3 className={styles['project-header']}>{title}</h3>
      <h4 className={styles['project-subHeader']}>{subTitle}</h4>
    </React.Fragment>
  );
};

export default ProjectHeader;
