import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import ProjectRibbon from '../../../src/components/projectRibbon';

storiesOf('Project Ribbon', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    const theme = select(
      'Theme',
      ['theme1', 'theme2', 'theme3', 'theme4', 'theme5'],
      'theme1'
    );

    const projectInfo = {
      theme
    };

    return <ProjectRibbon projectInfo={projectInfo} />;
  });
