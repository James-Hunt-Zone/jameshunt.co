import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/html';
import { checkA11y } from '@storybook/addon-a11y';
import SectionImage from './index';

const data = {
  "allProjectsJson": {
    "edges": [
      {
        "node": {
          "img": {
            "childImageSharp": {
              "fluid": {
                "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAtElEQVQoz+WS3QrCIBTH9yAjp24+adBdVFDdxFZj0QemPc+cOqsH6VhEu9gidlnw5+D5w8/zoUFyUr0V/AjM+8JMlEyCVAISL1OW/txw2mCh6FaTjaG5j/G+grugEe8Umqx97IC5YucyWtbh8IamDk0cyQyaO5KbcHRFMzcYX6JFHR+rZv1GZaloYfDK4tQASXeaFCY+VDi1kOLMQkdfzcyeEz70duTnbfO2bfPOJwj+8HveAYo09PMjTdyQAAAAAElFTkSuQmCC",
                "aspectRatio": 1.3333333333333333,
                "src": "/static/bce56269efe55dee1f1df71baa30f39e/6ceba/1.png",
                "srcSet": "/static/bce56269efe55dee1f1df71baa30f39e/af310/1.png 200w,\n/static/bce56269efe55dee1f1df71baa30f39e/9f336/1.png 400w,\n/static/bce56269efe55dee1f1df71baa30f39e/6ceba/1.png 800w",
                "sizes": "(max-width: 800px) 100vw, 800px"
              }
            }
          }
        }
      }
    ]
  }
}

storiesOf('Section Image', module)
  //.addDecorator(withKnobs)
  //.addDecorator(checkA11y)
  .add('with props', () => {
    console.log(data.allProjectsJson.edges[0].node.img);
    return <SectionImage img={data.allProjectsJson.edges[0].node.img.childImageSharp.fluid}/>;
  });
