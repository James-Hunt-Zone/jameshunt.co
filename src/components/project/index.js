import React from 'react';
import styled from 'styled-components';
import ProjectHeader from '../ProjectHeader';
import ProjectBody from '../ProjectBody';
import ProjectLink from '../ProjectLink';

const Article = styled.article`
  display: grid;
  grid-gap: 25px;

  @media (min-width: 720px) {
    grid-gap: 45px;
  }
`;

const HR = styled.hr`
  margin: 0;
  padding: 0;
  border-bottom: none;
  border-top: 1px solid #dedede;
`;

const Project = ({ project }) => {
  const { link } = project;

  return (
    <Article>
      <ProjectHeader projectInfo={project} />
      <HR />
      <ProjectBody projectInfo={project} />
      <HR />
      <ProjectBody projectInfo={project} isTechContent />
      {link ? <ProjectLink projectInfo={project} /> : null}
    </Article>
  );
};

export default Project;
