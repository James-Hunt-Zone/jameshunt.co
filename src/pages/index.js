import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import ProjectImage from '../components/projectImage';
import ProjectHeader from '../components/ProjectHeader';
import ProjectBody from '../components/ProjectBody';
import ProjectLink from '../components/ProjectLink';
import Footer from '../components/footer';
// eslint-disable-next-line
import styles from '../../styles/all.scss';

export default ({ data }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="Description" content={data.site.siteMetadata.description}></meta>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://jamesh.net" />
      </Helmet>
      <Header></Header>
      <main className="projects">
        {data.allProjectsJson.edges.map((project, index) =>
          <article className="project" key={index}>
            <ProjectImage projectInfo={project.node} />
            <ProjectHeader projectInfo={project.node} />
            <ProjectBody projectInfo={project.node} type="body" title="About" />
            <ProjectBody projectInfo={project.node} type="tech" title="Tech" />
            <ProjectLink projectInfo={project.node} />
          </article>
        )}
      </main>
      <Footer></Footer>
    </div>

  );
};

export const query = graphql`{
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
