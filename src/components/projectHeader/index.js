import React from 'react';

const ProjectHeader = ({ projectInfo }) => {
  const { title, subTitle } = projectInfo;

  return (
    <section className="section">
      <div className="col col--span2 col--offset1">
        <h3 className="project-title">{title}</h3>
        <h4 className="project-subTitle">{subTitle}</h4>
      </div>
    </section>
  );
};

export default ProjectHeader;
