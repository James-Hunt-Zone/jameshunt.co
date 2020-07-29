import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    
    font-weight: 100;
    font-size: 16px;
    color: #3e5061;

    @media (min-width: 720px) {
      font-size: 18px;
    }
  }
`;

const Projects = styled.div`
  display: grid;
  grid-gap: 25px;

  @media (min-width: 720px) {
    grid-gap: 45px;
  }
`;

const HomePage = ({ data }) => {
  const projects = data.allProjectsJson.edges;

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="Description" content={data.site.siteMetadata.description} />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://jamesh.net" />
      </Helmet>
      <Header />
      <Projects>
        {projects.map(({ node: projectData }, index) => (
          <Project key={index} project={projectData} />
        ))}
      </Projects>
      <Footer />
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          subTitle
          theme
          bio
          tech
          alt
          link
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
