import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/html';
import SectionHeader from '../../../src/components/projectHeader';

storiesOf('Project Header', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    const title = text('Title', 'British Gas');
    const subTitle = text('Sub Title', 'Best Next Action');
    const projectInfo = {
      title,
      subTitle
    };

    return <SectionHeader projectInfo={projectInfo} />;
  });
