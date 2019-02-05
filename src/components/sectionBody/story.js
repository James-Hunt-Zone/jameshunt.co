import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs/html';
import SectionBody from './index';

storiesOf('Section Body', module)
  .addDecorator(withKnobs)
  .add('default', () => <SectionBody />);
