import React from 'react';
import styled from 'styled-components';
import ProjectSection from '../ProjectSection';

const Body = styled.p`
  line-height: 1.3em;
  margin: 0;
  white-space: pre-line;
`;

const TechList = styled.ul`
  margin: 0;
  padding: 0;
`;

const TechListItem = styled.li`
  margin-right: 15px;
  display: inline-block;
`;

const ProjectBody = ({ projectInfo, isTechContent }) => {
  const generateBody = () => {
    const { bio: projectBio } = projectInfo;

    return <Body>{projectBio}</Body>;
  };

  const generateTechUsed = () => {
    const { tech: projectTech } = projectInfo;

    return (
      <TechList>
        {projectTech.map((item, index) => (
          <TechListItem key={index}>{item}</TechListItem>
        ))}
      </TechList>
    );
  };

  const content = isTechContent ? generateTechUsed() : generateBody();
  const sectionTitle = isTechContent ? 'Tech' : 'About';

  return <ProjectSection sectionTitle={sectionTitle}>{content}</ProjectSection>;
};

export default ProjectBody;
