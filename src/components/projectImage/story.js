import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/html';
import { checkA11y } from '@storybook/addon-a11y';
import SectionImage from './index';

// import url from '../../data/projects.json'; 

import { setupGraphiQL } from '@storybook/addon-graphql'
 
// const fetcher = params => {
//   return fetch(url).then(res => res.json());
// };

const graphiql = setupGraphiQL({ url: '../../data/projects.json' });
 
// storiesOf('GraphQL Demo', module)
//   .add('get user info', graphiql(`{
//     allProjectsJson {
//       edges {
//         node {
//           value
//           img {
//             childImageSharp {
//               fluid {
//                 id
//               }
//             }
//           }
//         }
//       }
//     }
//   }`));

// storiesOf('Section Image', module)
//   .addDecorator(withKnobs)
//   .addDecorator(checkA11y)
//   .add('with props', () => {
//     return <SectionImage img={query.allProjectsJson.edges[0].node.img.childImageSharp.fluid} />;
//   });

//   export const query = graphql`
//   query HomePageQuery {
//     allProjectsJson {
//       edges {
//         node {
//           value
//           img {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
