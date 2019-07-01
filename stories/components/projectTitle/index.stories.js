import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ProjectTitle from '../../../src/components/projectTitle';

storiesOf('Project Title', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    const title = text('Title', 'Tech used');

    return <ProjectTitle title={title} />;
  });
