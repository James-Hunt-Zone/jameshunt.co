import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Project from '../components/project';
import Footer from '../components/footer';
import styles from '../../styles/all.scss';

const HomePage = ({ data }) => {
  const projects = data.allProjectsJson.edges;
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="Description" content={data.site.siteMetadata.description} />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://jamesh.net" />
      </Helmet>
      <Header />
      <main className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project.node} />
        ))}
      </main>
      <Footer />
    </React.Fragment>
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
