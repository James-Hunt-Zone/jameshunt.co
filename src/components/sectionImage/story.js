import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/html';
import { checkA11y } from '@storybook/addon-a11y';
import SectionImage from './index';

storiesOf('Section Image', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('with props', () => {
    return <SectionImage img={query.allProjectsJson.edges[0].node.img.childImageSharp.fluid} />;
  });

  export const query = graphql`
  query HomePageQuery {
    allProjectsJson {
      edges {
        node {
          value
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
