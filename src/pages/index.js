import React from 'react';
import { Helmet } from 'react-helmet';
import siteData from '../services/siteData';
import Header from '../components/header';
import ProjectImage from '../components/projectImage';
import ProjectHeader from '../components/ProjectHeader';
import ProjectBody from '../components/ProjectBody';
import ProjectLink from '../components/ProjectLink';
import Footer from '../components/footer';
import styles from '../../styles/all.scss';

const HomePage = ({ data }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="Description" content={data.site.siteMetadata.description} />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://jamesh.net" />
      </Helmet>
      <Header />
      <main className="projects">
        {data.allProjectsJson.edges.map((project, index) => (
          <article className="project" key={index}>
            <ProjectImage projectInfo={project.node} />
            <ProjectHeader projectInfo={project.node} />
            <ProjectBody projectInfo={project.node} type="body" title="About" />
            <ProjectBody projectInfo={project.node} type="tech" title="Tech" />
            <ProjectLink projectInfo={project.node} />
          </article>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

export const query = siteData;
