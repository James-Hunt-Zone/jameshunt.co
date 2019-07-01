import React from 'react';
import SectionLayout from '../sectionLayout';
import ProjectImage from '../projectImage';
import ProjectRibbon from '../projectRibbon';
import ProjectHeader from '../projectHeader';
import ProjectTitle from '../projectTitle';
import ProjectBody from '../projectBody';
import ProjectLink from '../projectLink';
import SectionBreak from '../sectionBreak';
import styles from './styles.module.scss';

const Project = ({ project }) => {
  return (
    <article className={styles.project}>
      {/* Project Image */}
      <SectionLayout mainChildren={<ProjectImage projectInfo={project} />}>
        <ProjectRibbon projectInfo={project} />
      </SectionLayout>
      {/* Project Header */}
      <SectionLayout mainChildren={<ProjectHeader projectInfo={project} />} />
      <SectionBreak />
      {/* Project Body */}
      <SectionLayout
        contextChildren={<ProjectTitle title="About" />}
        mainChildren={<ProjectBody type="body" projectInfo={project} />}
      />
      <SectionBreak />
      {/* Project Tech */}
      <SectionLayout
        contextChildren={<ProjectTitle title="Tech" />}
        mainChildren={<ProjectBody type="tech" projectInfo={project} />}
      />
      {/* Project Link */}
      {project.link ? (
        <SectionLayout mainChildren={<ProjectLink projectInfo={project} />} />
      ) : null}
    </article>
  );
};

export default Project;
