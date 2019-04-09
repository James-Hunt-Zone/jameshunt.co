import React from 'react';
import styles from './styles.module.scss';

class ProjectBody extends React.Component {
  generateBody() {
    return <p className="project-body">{this.props.projectInfo.bio}</p>;
  }

  generateTechUsed() {
    return (
      <ul className="project-list">
        {this.props.projectInfo.tech.map((item, index) => (
          <li className="project-listItem" key={index}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { type, title } = this.props;
    const content =
      type === 'body' ? this.generateBody() : this.generateTechUsed();

    return (
      <section className="section section--divider">
        <div className="col col--span1">
          <h5 className="project-heading">{title}</h5>
        </div>
        <div className="col col--span2">{content}</div>
      </section>
    );
  }
}

export default ProjectBody;
