import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ProjectSection from '../ProjectSection';
import ProjectRibbon from '../ProjectRibbon';

const Title = styled.h3`
  font-size: 1.8em;
  font-weight: 200;
  margin: 0;

  @media (min-width: 720px) {
    font-size: 2.8em;
  }
`;

const SubTitle = styled.h4`
  font-weight: 200;
  font-size: 1.2em;
  color: #8c8c8c;
  margin: 0;

  @media (min-width: 720px) {
    font-size: 1.5em;
  }
`;

const ImageWrapper = styled.div`
  -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);

  @media (min-width: 720px) {
    margin-top: 60px;
  }
`;

const ProjectHeader = ({ projectInfo }) => {
  const { alt, img, title, subTitle } = projectInfo;

  return (
    <>
      <ProjectSection>
        <ImageWrapper>
          <Img fluid={img.childImageSharp.fluid} alt={alt} />
        </ImageWrapper>
        <ProjectRibbon projectInfo={projectInfo} />
      </ProjectSection>
      <ProjectSection>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </ProjectSection>
    </>
  );
};

export default ProjectHeader;
