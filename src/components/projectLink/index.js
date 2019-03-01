import React from 'react';

class ProjectLink extends React.Component {
  render () {
    if (!this.props.link) {
      return null;
    }

    return (
      <section className="section section--divider">
        <div className="col Ìcol--span2 col--offset1">
          <a className="project-link" href={this.props.link}>
            <span>View Project</span><i>→</i>
          </a>
        </div>
      </section>
    );
  }
}

export default ProjectLink;
