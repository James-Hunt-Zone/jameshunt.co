import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectLink from '../../../src/components/projectLink';

storiesOf('Project Link', module).add('default', () => {
  const projectInfo = {
    link: 'http://jamesh.net'
  };

  return <ProjectLink projectInfo={projectInfo} />;
});
