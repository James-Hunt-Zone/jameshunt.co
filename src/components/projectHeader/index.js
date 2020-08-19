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

const CurveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  line-height: 0;
  width: 100%;

  svg: {
    fill: #ffffff;
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
        <ProjectRibbon projectInfo={projectInfo}>
          <CurveWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1620 51"
              preserveAspectRatio="xMinYMin"
              data-di-res-id="a79604eb-91d5d313"
              data-di-rand="1597694178676"
              style={{ fill: '#ffffff' }}
            >
              <path d="m1620,48.08336l0,2.91664l-1620,0l0,-3.06237c249.95348,-27.44039 526.27345,-47.93763 794.02262,-47.93763c345.2406,0 622.02663,22.39195 825.97738,48.08336z"></path>
            </svg>
          </CurveWrapper>
        </ProjectRibbon>
      </ProjectSection>
      <ProjectSection>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </ProjectSection>
    </>
  );
};

export default ProjectHeader;
