import React from "react"
// eslint-disable-next-line
//import styles from './styles.module.scss';

class ProjectHeader extends React.Component {
  render() {
    return (
      <section className="section">      
        <div className="col col--span2 col--offset1">
          <h2 className="project-title">{this.props.title}</h2>
        </div>
      </section>
    );
  }
}

export default ProjectHeader;
