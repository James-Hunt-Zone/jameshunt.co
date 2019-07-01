import React from 'react';
import styles from './styles.module.scss';

class ProjectBody extends React.Component {
  generateBody() {
    const { bio: projectBio } = this.props.projectInfo;
    return <p className={styles['project-body']}>{projectBio}</p>;
  }

  generateTechUsed() {
    const { tech: projectTech } = this.props.projectInfo;
    return (
      <ul className={styles['project-list']}>
        {projectTech.map((item, index) => (
          <li className={styles['project-listItem']} key={index}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { type } = this.props;
    const content =
      type === 'body' ? this.generateBody() : this.generateTechUsed();

    return content;
  }
}

export default ProjectBody;
