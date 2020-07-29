import React from 'react';
import styled from 'styled-components';

const HeaderEl = styled.header`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: none;
  align-content: center;
  height: 80vh;
  padding: 0 15px;

  @media (min-width: 720px) {
    padding: 0 30px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 200;

  @media (min-width: 720px) {
    font-size: 4em;
  }
`;

const SubTitle = styled.h2`
  margin: 0;
  font-weight: 100;

  @media (min-width: 720px) {
    font-size: 2em;
  }
`;

const Header = () => {
  return (
    <HeaderEl>
      <Title>James Hunt</Title>
      <SubTitle>Senior Frontend Developer</SubTitle>
    </HeaderEl>
  );
};

export default Header;
