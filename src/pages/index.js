import React from "react"
import { graphql } from 'gatsby'
import Header from '../components/header'
import ProjectImage from '../components/ProjectImage'
import ProjectHeader from '../components/ProjectHeader'
import ProjectBody from '../components/ProjectBody'
import Footer from '../components/footer'
import { Helmet } from "react-helmet";
// eslint-disable-next-line
import styles from '../../styles/all.scss';

export default ({data}) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>James Hunt</title>
        <link rel="canonical" href="http://jamesh.net" />
      </Helmet>
      <Header></Header>
      <main className="projects">
        {data.allProjectsJson.edges.map((item, index) => 
          <article className="project" key={index}>
            <ProjectImage img={item.node.img.childImageSharp.fluid} theme={item.node.theme}></ProjectImage>
            <ProjectHeader title={item.node.title}></ProjectHeader>
            <ProjectBody type="body" title="About" body={item.node.bio}></ProjectBody>
            <ProjectBody type="tech" title="Tech" tech={item.node.tech}></ProjectBody>
          </article>
        )}
      </main>
      <Footer></Footer>
    </div>

  )
};

export const query = graphql`
  query HomePageQuery {
    allProjectsJson {
      edges {
        node {
          title
          theme
          bio
          tech
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
`
