import React from 'react';
import styles from './styles.module.scss';

class ProjectTitle extends React.Component {
  render() {
    const { title } = this.props;

    return <h5 className={styles['project-title']}>{title}</h5>;
  }
}

export default ProjectTitle;
