import React from 'react';

const ProjectLink = ({ projectInfo }) => {
  const { link } = projectInfo;
  if (!link) return null;

  return (
    <section className="section section--divider">
      <div className="col Ìcol--span2 col--offset1">
        <a className="project-link" href={link}>
          <span>View Project</span>
          <i>→</i>
        </a>
      </div>
    </section>
  );
};

export default ProjectLink;
