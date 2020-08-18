import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 15px 1fr 15px;
  grid-row-gap: 15px;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 4fr 1fr;
    padding: 0 30px;
  }
`;

const TitleContent = styled.div`
  grid-column-start: 2;

  @media (min-width: 720px) {
    grid-column-start: 1;
  }
`;

const Title = styled.span`
  font-weight: 200;

  @media (min-width: 720px) {
    margin-bottom: 0;
  }
`;

const MainContent = styled.div`
  grid-column-start: 2;
`;

const ProjectSection = ({ sectionTitle, children }) => {
  return (
    <Wrapper>
      <TitleContent>
        <Title>{sectionTitle}</Title>
      </TitleContent>
      <MainContent>{children}</MainContent>
    </Wrapper>
  );
};

export default ProjectSection;
