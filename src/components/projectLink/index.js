import React from 'react';
import styled from 'styled-components';
import ProjectSection from '../ProjectSection';

const Link = styled.a`
  text-decoration: none;
`;

const Title = styled.span`
  display: inline-block;
  padding: 15px 45px;
  background: #428aff;
  color: #ffffff;
  font-weight: 200;
`;

const Arrow = styled.i`
  display: inline-block;
  padding: 15px;
  background: #136dff;
  color: #ffffff;
  font-style: normal;
`;

const ProjectLink = ({ projectInfo }) => {
  const { link } = projectInfo;
  if (!link) return null;

  return (
    <ProjectSection>
      <Link href={link}>
        <Title>View Project</Title>
        <Arrow>→</Arrow>
      </Link>
    </ProjectSection>
  );
};

export default ProjectLink;
