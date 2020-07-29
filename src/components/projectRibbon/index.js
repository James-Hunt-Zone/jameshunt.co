import React from 'react';
import styled from 'styled-components';

const Ribbon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc((75px / 2) + 50%);
  z-index: -1;
  background: ${props => props.ribbonColor || '#fca5a9'};
`;

const ProjectRibbon = ({ projectInfo }) => {
  const { theme } = projectInfo;

  return <Ribbon ribbonColor={theme} />;
};

export default ProjectRibbon;
